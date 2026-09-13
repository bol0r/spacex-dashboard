import { useEffect, useMemo, useRef, useState } from 'react';
import type { BazaWiedzy, Wydarzenie } from '../data/types';
import { useStan } from '../app/stan';
import { dataKrotko } from '../lib/format';
import { useT } from '../i18n';

const PX_NA_ROK = 46;     // rok, w którym coś się działo
const PX_ROK_PUSTY = 9;   // rok bez żadnego wydarzenia — zwinięty
const MIN_ODSTEP = 13;    // px między znacznikami w jednym pasie
const PASY = 4;

interface Znacznik extends Wydarzenie {
  encjaId: string;
  x: number;
  pas: number;
}

interface Rok {
  rok: number;
  x: number;
  szerokosc: number;
  pusty: boolean;
  zEtykieta: boolean;
}

/** Rok z częścią dziesiętną, żeby wydarzenia w tym samym roku nie siedziały na sobie. */
function rokUlamkowy(iso: string): number {
  const [r, m, d] = iso.split('-');
  const rok = Number(r);
  if (m === undefined) return rok + 0.5;
  const miesiac = Number(m) - 1;
  const dzien = d === undefined ? 15 : Number(d);
  return rok + (miesiac + (dzien - 1) / 30) / 12;
}

/**
 * Przesuwalna oś czasu. Przewija się poziomo palcem albo kółkiem, a każdy
 * znacznik jest wejściem do encji. Gęstość widać wprost z odstępów — nie ma
 * tu żadnego wykresu, tylko wydarzenia rozłożone w czasie.
 */
export function OsCzasu({ baza }: { baza: BazaWiedzy }) {
  const otworz = useStan((s) => s.otworz);
  const ustawWidok = useStan((s) => s.ustawWidok);
  const t = useT();
  const przewijak = useRef<HTMLDivElement>(null);

  const { znaczniki, lata, szerokosc } = useMemo(() => {
    const posortowane = [...baza.osGlobalna].sort((a, b) => a.data.localeCompare(b.data));
    const pierwszy = posortowane[0];
    const ostatni = posortowane[posortowane.length - 1];
    if (pierwszy === undefined || ostatni === undefined) {
      return { znaczniki: [] as Znacznik[], lata: [] as Rok[], szerokosc: 0 };
    }

    const od = Math.floor(rokUlamkowy(pierwszy.data));
    const doR = Math.ceil(rokUlamkowy(ostatni.data));

    // Skala jest świadomie nieliniowa. Baza sięga 1967 roku jednym wydarzeniem,
    // a potem nie ma nic aż do lat dziewięćdziesiątych — przy równym podziale
    // połowa przewijania to pustka. Lata bez wydarzeń zwijamy do wąskiego pasa
    // i oznaczamy przerywaną linią, żeby skrót był widoczny, a nie ukryty.
    const zajete = new Set(posortowane.map((w) => Math.floor(rokUlamkowy(w.data))));

    const lata: Rok[] = [];
    let kursor = 0;
    for (let rok = od; rok <= doR; rok++) {
      const pusty = !zajete.has(rok);
      const szerokoscRoku = pusty ? PX_ROK_PUSTY : PX_NA_ROK;
      lata.push({ rok, x: kursor, szerokosc: szerokoscRoku, pusty, zEtykieta: false });
      kursor += szerokoscRoku;
    }

    // Etykiety: reguła „co pięć lat" zostawiłaby całą wczesną część osi bez
    // opisu, bo tam prawie każdy rok jest zwinięty. Opisujemy więc pierwszy
    // i ostatni rok oraz każdy kolejny, który odjechał od poprzedniej etykiety.
    let ostatniaEtykieta = -Infinity;
    for (const l of lata) {
      if (l.pusty) continue;
      const pierwszyLubOstatni = l.rok === od || l.rok === doR;
      if (pierwszyLubOstatni || (l.rok % 5 === 0 && l.x - ostatniaEtykieta >= 70)
          || l.x - ostatniaEtykieta >= 150) {
        l.zEtykieta = true;
        ostatniaEtykieta = l.x;
      }
    }

    const wgRoku = new Map(lata.map((l) => [l.rok, l]));
    const pozycja = (iso: string): number => {
      const ulamek = rokUlamkowy(iso);
      const rok = Math.floor(ulamek);
      const wpis = wgRoku.get(rok);
      if (wpis === undefined) return 0;
      return wpis.x + (ulamek - rok) * wpis.szerokosc;
    };

    // Przydział pasów: znacznik schodzi niżej, gdy poprzedni w jego pasie
    // jest zbyt blisko. Dzięki temu skupiska rozwarstwiają się, a nie nakładają.
    const ostatniW: number[] = Array.from({ length: PASY }, () => -Infinity);
    const wynik: Znacznik[] = posortowane.map((w) => {
      const x = pozycja(w.data);
      let pas = 0;
      for (let i = 0; i < PASY; i++) {
        const poprzedni = ostatniW[i];
        if (poprzedni === undefined || x - poprzedni >= MIN_ODSTEP) { pas = i; break; }
        pas = i;
      }
      ostatniW[pas] = x;
      return { ...w, x, pas };
    });

    return { znaczniki: wynik, lata, szerokosc: kursor };
  }, [baza]);

  // Okno widoczności. Oś ma ponad trzysta znaczników i sześćdziesiąt lat skali,
  // a w kadrze mieści się kilkanaście — rysowanie całości kosztowało tysiąc
  // węzłów DOM, z czego 97 procent poza ekranem. Trzymamy więc tylko to, co
  // widać, plus ekran zapasu z każdej strony, żeby przewijanie nie doganiało
  // dorysowywania.
  const [okno, ustawOkno] = useState<{ od: number; do: number }>({ od: -Infinity, do: Infinity });

  useEffect(() => {
    const el = przewijak.current;
    if (el === null) return;

    // Wchodzimy na prawym końcu — tam, gdzie dzieje się teraz.
    el.scrollLeft = el.scrollWidth;

    let klatka = 0;
    const przelicz = () => {
      const zapas = Math.max(el.clientWidth, 320);
      const od = el.scrollLeft - zapas;
      const doX = el.scrollLeft + el.clientWidth + zapas;
      // Przestawiamy okno dopiero po przejechaniu połowy zapasu. Bez tej histerezy
      // każda klatka przewijania kończyłaby się przerysowaniem całej osi.
      ustawOkno((p) => (Math.abs(od - p.od) < zapas / 2 ? p : { od, do: doX }));
    };

    const naPrzewijanie = () => {
      if (klatka !== 0) return;
      klatka = requestAnimationFrame(() => { klatka = 0; przelicz(); });
    };

    przelicz();
    el.addEventListener('scroll', naPrzewijanie, { passive: true });
    return () => {
      el.removeEventListener('scroll', naPrzewijanie);
      if (klatka !== 0) cancelAnimationFrame(klatka);
    };
  }, [szerokosc]);

  const widoczneLata = useMemo(
    () => lata.filter((l) => l.x + l.szerokosc >= okno.od && l.x <= okno.do),
    [lata, okno],
  );
  const widoczneZnaczniki = useMemo(
    () => znaczniki.filter((z) => z.x >= okno.od && z.x <= okno.do),
    [znaczniki, okno],
  );

  return (
    <section
      className="material col-span-2 overflow-hidden rounded-kafel py-4 lg:col-span-4"
      aria-label={t.osCzasu}
    >
      {/* Trzy elementy w jednym rzędzie łamały tytuł na dwie linie na 390 px,
          więc licznik z podpowiedzią schodzi pod nagłówek. */}
      <div className="px-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="shrink-0 text-naglowek text-tekst">{t.osCzasu}</h2>
          <button
            type="button"
            onClick={() => ustawWidok('os-czasu')}
            className="dotyk -my-2 min-h-[44px] shrink-0 px-1 text-przypis text-blekit"
          >
            {t.pelnaOsCzasu}
          </button>
        </div>
        <span className="liczby block text-podpis text-tekst-2">
          {t.wydarzenia(znaczniki.length)}, {t.przesunWPoziomie}
        </span>
      </div>

      <div ref={przewijak} className="przewin-poziomo mt-3" style={{ touchAction: 'pan-x' }}>
        <div className="relative h-[124px]" style={{ width: szerokosc + 64, marginInline: 32 }}>
          {/* Skala lat. Pełna kreska w latach z wydarzeniami, przerywana tam, gdzie czas zwinięto. */}
          <div className="absolute inset-x-0 bottom-[26px] h-px bg-[color:var(--wlos)]" />
          {widoczneLata.map((l) => {
            const zEtykieta = l.zEtykieta;
            return (
              <div key={l.rok} className="absolute bottom-0" style={{ left: l.x }}>
                {l.pusty ? (
                  <div
                    className="absolute bottom-[26px] h-[3px]"
                    style={{
                      width: l.szerokosc,
                      backgroundImage:
                        'repeating-linear-gradient(90deg, var(--wlos) 0 2px, transparent 2px 5px)',
                    }}
                  />
                ) : (
                  <div
                    className={`absolute bottom-[18px] w-px ${zEtykieta ? 'h-2 bg-tekst-2' : 'h-1 bg-[color:var(--wlos)]'}`}
                  />
                )}
                {zEtykieta && (
                  <span className="liczby absolute bottom-0 left-0 -translate-x-1/2 text-podpis text-tekst-2">
                    {l.rok}
                  </span>
                )}
              </div>
            );
          })}

          {widoczneZnaczniki.map((z) => {
            const encja = baza.encje[z.encjaId];
            if (encja === undefined) return null;
            const kamien = z.waga === 3;
            return (
              <button
                key={`${z.encjaId}-${z.data}-${z.tytul}`}
                type="button"
                onClick={() => otworz(z.encjaId)}
                aria-label={`${z.tytul}, ${dataKrotko(z.data)} — ${encja.nazwa}`}
                // Znacznik w najniższym pasie ma tylko 20 px wysokości, a pole dotyku
                // musi mieć 44. Rozszerzamy je pseudoelementem wokół kropki —
                // rysunek zostaje bez zmian, palec dostaje pełny kwadrat.
                className="absolute flex w-11 -translate-x-1/2 flex-col items-center
                           after:absolute after:inset-x-0 after:-top-[10px] after:h-11 after:content-['']"
                style={{ left: z.x, bottom: 27, height: 20 + z.pas * 20 }}
              >
                <span
                  className={`shrink-0 rounded-full ${kamien ? 'h-[9px] w-[9px] bg-plomien' : 'h-[6px] w-[6px] bg-tekst'}`}
                />
                <span
                  className={`w-px flex-1 ${kamien ? 'bg-plomien opacity-50' : 'bg-tekst-2 opacity-25'}`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
