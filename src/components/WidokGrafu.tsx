import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { grafDlaBazy, type Graf } from '../lib/graf';
import { Nakladka } from './Nakladka';

/**
 * Widok grafu powiązań.
 *
 * Cała reszta aplikacji pokazuje sieć po jednym węźle naraz: otwierasz encję,
 * widzisz jej sąsiadów, wchodzisz głębiej. Tu widać kształt całości — gdzie jest
 * gęsto, co jest przelotowe, a co wisi na jednym połączeniu.
 *
 * Obraz jest statyczny. Układ liczy się raz, przed pierwszym narysowaniem, i nic
 * się nie rusza, dopóki użytkownik nie przesunie, nie przybliży albo nie dotknie.
 * Symulacja rozjeżdżająca się na oczach patrzącego byłaby ruchem, którego nikt
 * nie wywołał.
 */

/** Ile pikseli od środka węzła jeszcze liczy się jako dotknięcie w niego. */
const PROMIEN_DOTYKU = 26;
/** Powyżej tylu połączeń węzeł dostaje podpis bez dotykania. */
const PROG_PODPISU = 18;
const SKALA_MIN = 0.45;
const SKALA_MAX = 6;

interface Widok { s: number; tx: number; ty: number }

export function WidokGrafu() {
  const baza = useBaza();
  const t = useT();
  const widokAplikacji = useStan((s) => s.widok);
  const otworz = useStan((s) => s.otworz);
  const otwarta = widokAplikacji === 'graf';

  const graf = useMemo<Graf>(() => grafDlaBazy(baza), [baza]);

  const plotno = useRef<HTMLDivElement>(null);
  const [rozmiar, ustawRozmiar] = useState({ w: 0, h: 0 });
  const [widok, ustawWidok] = useState<Widok>({ s: 1, tx: 0, ty: 0 });
  const [wybrany, ustawWybrany] = useState<string | null>(null);

  // Rozmiar pola rysowania. Współrzędne SVG są w pikselach, dzięki czemu
  // przeliczanie dotknięcia na punkt grafu sprowadza się do odjęcia przesunięcia.
  useEffect(() => {
    const el = plotno.current;
    if (el === null) return;
    const obserwator = new ResizeObserver(() => {
      ustawRozmiar({ w: el.clientWidth, h: el.clientHeight });
    });
    obserwator.observe(el);
    ustawRozmiar({ w: el.clientWidth, h: el.clientHeight });
    return () => obserwator.disconnect();
  }, [otwarta]);

  /** Czy użytkownik sam przesunął widok — wtedy nie wracamy do dopasowania. */
  const ruszone = useRef(false);

  const dopasuj = useCallback(() => {
    const { w, h } = rozmiar;
    if (w === 0 || h === 0) return;
    const s = Math.min(w / graf.pole.w, h / graf.pole.h) * 0.92;
    ustawWidok({
      s,
      tx: w / 2 - (graf.pole.x + graf.pole.w / 2) * s,
      ty: h / 2 - (graf.pole.y + graf.pole.h / 2) * s,
    });
  }, [graf, rozmiar]);

  /**
   * Dopasowanie przeliczamy przy każdej zmianie rozmiaru pola — ale tylko do
   * momentu, w którym użytkownik sam coś przesunie. Potem widok należy do niego
   * i obrót telefonu nie ma prawa cofać go na start.
   */
  useEffect(() => {
    if (!otwarta) { ruszone.current = false; ustawWybrany(null); return; }
    if (ruszone.current || rozmiar.w === 0) return;
    dopasuj();
  }, [otwarta, rozmiar, dopasuj]);

  /* --- przesuwanie i skalowanie ------------------------------------------ */

  const wskazniki = useRef(new Map<number, { x: number; y: number }>());
  const start = useRef<{ x: number; y: number; ruch: number } | null>(null);
  const bazaGestu = useRef<{ d: number; s: number; sx: number; sy: number } | null>(null);

  const przeskaluj = useCallback((mnoznik: number, px: number, py: number) => {
    ruszone.current = true;
    ustawWidok((w) => {
      const s = Math.min(SKALA_MAX, Math.max(SKALA_MIN, w.s * mnoznik));
      const r = s / w.s;
      return { s, tx: px - (px - w.tx) * r, ty: py - (py - w.ty) * r };
    });
  }, []);

  const naDol = (e: React.PointerEvent<SVGSVGElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    const p = punkt(e, plotno.current);
    wskazniki.current.set(e.pointerId, p);
    if (wskazniki.current.size === 1) start.current = { ...p, ruch: 0 };
    if (wskazniki.current.size === 2) {
      const [a, b] = [...wskazniki.current.values()];
      if (a !== undefined && b !== undefined) {
        bazaGestu.current = {
          d: Math.hypot(a.x - b.x, a.y - b.y),
          s: widok.s,
          sx: (a.x + b.x) / 2,
          sy: (a.y + b.y) / 2,
        };
      }
    }
  };

  const naRuch = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!wskazniki.current.has(e.pointerId)) return;
    const p = punkt(e, plotno.current);
    const poprzedni = wskazniki.current.get(e.pointerId);
    wskazniki.current.set(e.pointerId, p);

    if (wskazniki.current.size === 2 && bazaGestu.current !== null) {
      const [a, b] = [...wskazniki.current.values()];
      if (a === undefined || b === undefined) return;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const g = bazaGestu.current;
      const docelowa = Math.min(SKALA_MAX, Math.max(SKALA_MIN, g.s * (d / Math.max(1, g.d))));
      ruszone.current = true;
      ustawWidok((w) => {
        const r = docelowa / w.s;
        return { s: docelowa, tx: g.sx - (g.sx - w.tx) * r, ty: g.sy - (g.sy - w.ty) * r };
      });
      return;
    }

    if (wskazniki.current.size !== 1 || poprzedni === undefined) return;
    const dx = p.x - poprzedni.x;
    const dy = p.y - poprzedni.y;
    if (start.current !== null) start.current.ruch += Math.abs(dx) + Math.abs(dy);
    ruszone.current = true;
    ustawWidok((w) => ({ ...w, tx: w.tx + dx, ty: w.ty + dy }));
  };

  const naGore = (e: React.PointerEvent<SVGSVGElement>) => {
    const p = wskazniki.current.get(e.pointerId);
    wskazniki.current.delete(e.pointerId);
    if (wskazniki.current.size < 2) bazaGestu.current = null;

    // Dotknięcie bez przesunięcia to wybór węzła, nie koniec przeciągania.
    const s = start.current;
    if (wskazniki.current.size === 0 && s !== null && s.ruch < 8 && p !== undefined) {
      const trafiony = najblizszy(graf, widok, p.x, p.y);
      ustawWybrany(trafiony);
    }
    if (wskazniki.current.size === 0) start.current = null;
  };

  const naKolko = (e: React.WheelEvent<SVGSVGElement>) => {
    const p = punkt(e, plotno.current);
    przeskaluj(Math.exp(-e.deltaY * 0.0016), p.x, p.y);
  };

  /* --- klawiatura --------------------------------------------------------- */

  const naKlawisz = (e: React.KeyboardEvent<SVGSVGElement>) => {
    const kierunki: Record<string, [number, number]> = {
      ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1],
    };
    const kier = kierunki[e.key];
    if (kier !== undefined) {
      e.preventDefault();
      ustawWybrany((poprzedni) => wDanaStrone(graf, poprzedni, kier) ?? poprzedni);
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && wybrany !== null) {
      e.preventDefault();
      otworz(wybrany);
    }
  };

  /**
   * Podpisy odsiewamy z kolizji. Przy oddalonym widoku wszystkie naraz zlewają
   * się w plamę, więc rysujemy je w kolejności od najgęściej powiązanych
   * i pomijamy każdy, który wchodziłby na już postawiony. Wybrany węzeł i jego
   * sąsiedzi mają pierwszeństwo przed resztą — to ich użytkownik właśnie szuka.
   */
  const podpisy = useMemo(() => {
    const wazne = new Set(wybrany === null ? [] : [wybrany, ...(graf.sasiedzi[wybrany] ?? [])]);
    const kandydaci = graf.wezly
      .filter((w) => wazne.has(w.id) || w.stopien >= PROG_PODPISU)
      .sort((a, b) => {
        const pa = (wazne.has(a.id) ? 1000 : 0) + a.stopien;
        const pb = (wazne.has(b.id) ? 1000 : 0) + b.stopien;
        return pb - pa;
      });

    const zajete: Array<[number, number, number, number]> = [];
    const wynik: Array<{ id: string; wybrane: boolean }> = [];
    for (const w of kandydaci) {
      const wybrane = w.id === wybrany;
      const rozmiarPisma = wybrane ? 13 : 11;
      const x = w.x * widok.s + widok.tx;
      const y = w.y * widok.s + widok.ty - w.r * widok.s - 4;
      const szer = w.nazwa.length * rozmiarPisma * 0.52;
      // Odstęp w polu kolizji, żeby podpisy się nie stykały literami.
      const pole: [number, number, number, number] = [
        x - szer / 2 - 4, y - rozmiarPisma - 4, x + szer / 2 + 4, y + 7,
      ];
      // Podpis uciekający poza kadr jest gorszy niż jego brak: obcina się
      // w połowie słowa i sugeruje, że coś się nie zmieściło przez błąd.
      if (pole[0] < 2 || pole[2] > rozmiar.w - 2 || pole[1] < 2 || pole[3] > rozmiar.h - 2) continue;
      const koliduje = zajete.some((z) =>
        pole[0] < z[2] && pole[2] > z[0] && pole[1] < z[3] && pole[3] > z[1]);
      if (koliduje) continue;
      zajete.push(pole);
      wynik.push({ id: w.id, wybrane });
    }
    return new Map(wynik.map((w) => [w.id, w.wybrane]));
  }, [graf, widok, wybrany, rozmiar]);

  const encja = wybrany === null ? undefined : baza.encje[wybrany];
  const sasiedzi = wybrany === null ? [] : (graf.sasiedzi[wybrany] ?? []);
  const podswietlone = new Set(wybrany === null ? [] : [wybrany, ...sasiedzi]);

  return (
    <Nakladka otwarta={otwarta} tytul={t.grafPowiazan} bezPrzewijania podArkuszami>
      <div className="flex h-full flex-col">
        <p className="shrink-0 px-4 pt-3 text-przypis text-tekst-2">
          {t.grafOpis(graf.wezly.length, graf.krawedzie.length)}
        </p>

        <div ref={plotno} className="relative min-h-0 flex-1 touch-none">
          {rozmiar.w > 0 && (
            <svg
              width={rozmiar.w}
              height={rozmiar.h}
              viewBox={`0 0 ${rozmiar.w} ${rozmiar.h}`}
              tabIndex={0}
              role="application"
              aria-label={t.grafDostepnosc}
              className="block touch-none outline-none focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-[color:var(--blekit)]"
              onPointerDown={naDol}
              onPointerMove={naRuch}
              onPointerUp={naGore}
              onPointerCancel={naGore}
              onWheel={naKolko}
              onKeyDown={naKlawisz}
            >
              <g transform={`translate(${widok.tx} ${widok.ty}) scale(${widok.s})`}>
                {/* Krawędzie najpierw, żeby węzły leżały na nich, a nie pod nimi. */}
                <g fill="none" strokeLinecap="round">
                  {graf.krawedzie.map((k) => {
                    const a = pozycja(graf, k.a);
                    const b = pozycja(graf, k.b);
                    if (a === undefined || b === undefined) return null;
                    const wazna = wybrany !== null
                      && (k.a === wybrany || k.b === wybrany);
                    if (wybrany !== null && !wazna) {
                      return (
                        <line
                          key={`${k.a}|${k.b}`}
                          x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                          stroke="var(--wlos)" strokeWidth={0.6 / widok.s} opacity={0.25}
                        />
                      );
                    }
                    return (
                      <line
                        key={`${k.a}|${k.b}`}
                        x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                        stroke={wazna ? 'var(--blekit)' : 'var(--wlos)'}
                        strokeWidth={(wazna ? 1.4 : 0.8) / widok.s}
                        opacity={wazna ? 0.9 : 0.55}
                      />
                    );
                  })}
                </g>

                <g>
                  {graf.wezly.map((w) => {
                    const wybrane = w.id === wybrany;
                    const blisko = podswietlone.has(w.id);
                    const przygaszony = wybrany !== null && !blisko;
                    return (
                      <circle
                        key={w.id}
                        cx={w.x} cy={w.y} r={w.r}
                        fill={wybrane ? 'var(--blekit)' : blisko ? 'var(--tekst)' : 'var(--tekst-2)'}
                        opacity={przygaszony ? 0.28 : 1}
                      />
                    );
                  })}
                </g>

                {/* Podpisy tylko tam, gdzie niosą informację: węzły najgęściej
                    powiązane oraz to, co użytkownik właśnie wskazał. */}
                <g className="liczby" pointerEvents="none">
                  {graf.wezly.map((w) => {
                    const wybrane = podpisy.get(w.id);
                    if (wybrane === undefined) return null;
                    return (
                      <text
                        key={w.id}
                        x={w.x} y={w.y - w.r - 4 / widok.s}
                        textAnchor="middle"
                        fill={wybrane ? 'var(--blekit)' : 'var(--tekst)'}
                        fontSize={(wybrane ? 13 : 11) / widok.s}
                        opacity={wybrany !== null && !wybrane ? 0.8 : 1}
                        // Obrys w kolorze tła, nie cień: podpis stoi na plątaninie
                        // krawędzi i bez tego jest nieczytelny.
                        stroke="var(--tlo)"
                        strokeWidth={3 / widok.s}
                        strokeLinejoin="round"
                        paintOrder="stroke"
                      >
                        {w.nazwa}
                      </text>
                    );
                  })}
                </g>
              </g>
            </svg>
          )}

          {/* Skalowanie z klawiatury i dla tych, którzy nie mają kółka ani gestu. */}
          <div className="absolute right-3 top-3 flex flex-col gap-2">
            {([['+', 1.4], ['−', 1 / 1.4]] as const).map(([znak, mnoznik]) => (
              <button
                key={znak}
                type="button"
                onClick={() => przeskaluj(mnoznik, rozmiar.w / 2, rozmiar.h / 2)}
                aria-label={znak === '+' ? t.przyblizenie : t.oddalenie}
                className="dotyk flex h-11 w-11 items-center justify-center rounded-pigulka
                           text-tytul-2 text-tekst-2"
                style={{ background: 'var(--mat-kafel-mocny)' }}
              >
                {znak}
              </button>
            ))}
            <button
              type="button"
              onClick={() => { ruszone.current = false; dopasuj(); }}
              aria-label={t.dopasujWidok}
              className="dotyk flex h-11 w-11 items-center justify-center rounded-pigulka
                         text-przypis text-tekst-2"
              style={{ background: 'var(--mat-kafel-mocny)' }}
            >
              ⤢
            </button>
          </div>
        </div>

        {/* Pasek wyboru. Zawsze zajmuje miejsce, żeby obraz nie skakał przy dotknięciu. */}
        <div
          className="shrink-0 border-t-[0.5px] border-[color:var(--wlos)] px-4 pt-3
                     pb-[calc(env(safe-area-inset-bottom,0px)+12px)]"
          aria-live="polite"
        >
          <div className="mx-auto flex min-h-[64px] w-full max-w-[720px] items-center gap-3">
            {encja === undefined ? (
              <p className="text-podtytul text-tekst-2">{t.grafPodpowiedz}</p>
            ) : (
              <>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-naglowek text-tekst">{encja.nazwa}</span>
                  <span className="liczby text-podpis text-tekst-2">
                    {t.grafPolaczenia(sasiedzi.length)}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => otworz(encja.id)}
                  className="dotyk min-h-[44px] shrink-0 rounded-pigulka px-4 text-podtytul text-tlo"
                  style={{ background: 'var(--blekit)' }}
                >
                  {t.otworz}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Nakladka>
  );
}

/* --- pomocnicze ----------------------------------------------------------- */

function punkt(e: { clientX: number; clientY: number }, el: HTMLElement | null) {
  const r = el?.getBoundingClientRect();
  return { x: e.clientX - (r?.left ?? 0), y: e.clientY - (r?.top ?? 0) };
}

function pozycja(graf: Graf, id: string) {
  return graf.wezly.find((w) => w.id === id);
}

/** Najbliższy węzeł w promieniu dotyku — liczony w pikselach, nie w jednostkach grafu. */
function najblizszy(graf: Graf, widok: Widok, px: number, py: number): string | null {
  let najlepszy: string | null = null;
  let najmniej = PROMIEN_DOTYKU * PROMIEN_DOTYKU;
  for (const w of graf.wezly) {
    const x = w.x * widok.s + widok.tx;
    const y = w.y * widok.s + widok.ty;
    const d = (x - px) ** 2 + (y - py) ** 2;
    if (d < najmniej) { najmniej = d; najlepszy = w.id; }
  }
  return najlepszy;
}

/**
 * Sąsiad w danym kierunku. Bez wybranego węzła zaczynamy od najgęściej
 * powiązanego, bo to najlepszy punkt wejścia w sieć.
 */
function wDanaStrone(graf: Graf, wybrany: string | null, [kx, ky]: [number, number]): string | null {
  if (wybrany === null) {
    return [...graf.wezly].sort((a, b) => b.stopien - a.stopien)[0]?.id ?? null;
  }
  const od = pozycja(graf, wybrany);
  if (od === undefined) return null;
  let najlepszy: string | null = null;
  let najlepszaOcena = Infinity;
  for (const w of graf.wezly) {
    if (w.id === wybrany) continue;
    const dx = w.x - od.x;
    const dy = w.y - od.y;
    const wzdluz = dx * kx + dy * ky;
    if (wzdluz <= 0) continue;
    const wpoprzek = Math.abs(dx * ky - dy * kx);
    // Kara za odchylenie od kierunku, żeby strzałka w prawo nie skakała w dół.
    const ocena = wzdluz + wpoprzek * 2.5;
    if (ocena < najlepszaOcena) { najlepszaOcena = ocena; najlepszy = w.id; }
  }
  return najlepszy;
}
