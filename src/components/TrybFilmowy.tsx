import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play, RotateCcw, X } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import type { Kategoria } from '../data/types';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { dataKrotko } from '../lib/format';
import { usePulapkaFokusu } from '../lib/fokus';

/**
 * Tryb filmowy: cała historia po kolei, przewijana sama.
 *
 * Świadomie **nie** jest to naśladownictwo napisów ze „Star Wars". Po pierwsze,
 * aplikacja ma zastrzeżenie o braku powiązania z kimkolwiek, więc kopiowanie
 * rozpoznawalnej estetyki cudzej marki działa przeciwko niemu. Po drugie, brief
 * zakazuje wprost gwiazdek w tle i dekoracji bez funkcji. Zostaje to, co w tamtym
 * pomyśle działa naprawdę: chronologia, rytm i jedna rzecz naraz.
 *
 * Tło nie jest ozdobą — to rok, przez który właśnie przechodzimy, wypisany
 * wielkim stopniem pisma i przygaszony. Niesie informację, więc ma prawo tam być.
 *
 * Przewijanie realizuje natywny `scrollTop` inkrementowany co klatkę. Dzięki temu
 * przeciąganie palcem działa samo z siebie i można przewinąć film ręką w dowolne
 * miejsce, bez pisania własnej obsługi gestu.
 */

type Filtr = 'wszystko' | 'spacex' | 'tesla' | 'reszta';

const KATEGORIE_FILTRA: Record<Exclude<Filtr, 'wszystko'>, Kategoria[]> = {
  spacex: ['spacex-rakiety', 'spacex-silniki', 'spacex-misje', 'spacex-miejsca', 'spacex-ludzie'],
  tesla: ['tesla'],
  reszta: ['musk-i-reszta', 'pojecia'],
};

/** Piksele na sekundę dla kolejnych ustawień tempa. */
const TEMPA = [18, 34, 62] as const;

export function TrybFilmowy() {
  const baza = useBaza();
  const t = useT();
  const widok = useStan((s) => s.widok);
  const ustawWidok = useStan((s) => s.ustawWidok);
  const otworz = useStan((s) => s.otworz);
  const glebokoscStosu = useStan((s) => s.stos.length);
  const bezRuchu = useReducedMotion() ?? false;
  const otwarty = widok === 'film';

  const panel = useRef<HTMLDivElement>(null);
  const przewijak = useRef<HTMLDivElement>(null);
  const reszta = useRef(0); // ułamki piksela między klatkami

  const [filtr, ustawFiltr] = useState<Filtr>('wszystko');
  const [gra, ustawGra] = useState(!bezRuchu);
  const [tempo, ustawTempo] = useState(1);
  const [rok, ustawRok] = useState('');
  const [postep, ustawPostep] = useState(0);

  usePulapkaFokusu(panel, otwarty && glebokoscStosu === 0);

  const wydarzenia = useMemo(() => {
    return baza.osGlobalna
      .filter((w) => {
        if (filtr === 'wszystko') return true;
        const e = baza.encje[w.encjaId];
        return e !== undefined && KATEGORIE_FILTRA[filtr].includes(e.kategoria);
      })
      .sort((a, b) => a.data.localeCompare(b.data)); // od najstarszych — to jest film, nie kanał wiadomości
  }, [baza, filtr]);

  const odNowa = useCallback(() => {
    const el = przewijak.current;
    if (el !== null) el.scrollTop = 0;
    ustawPostep(0);
  }, []);

  useEffect(() => { if (otwarty) odNowa(); }, [otwarty, filtr, odNowa]);

  // Przewijanie klatka po klatce. Przy końcu filmu zatrzymujemy się same.
  // Gdy nad filmem stoi arkusz, film czeka — inaczej przewijałby się za plecami.
  useEffect(() => {
    if (glebokoscStosu > 0) ustawGra(false);
  }, [glebokoscStosu]);

  useEffect(() => {
    if (!otwarty || !gra || bezRuchu || glebokoscStosu > 0) return;
    let klatka = 0;
    let poprzedni = performance.now();

    const krok = (teraz: number) => {
      const el = przewijak.current;
      if (el === null) return;
      const dt = Math.min(teraz - poprzedni, 100) / 1000; // po powrocie z tła nie przeskakujemy
      poprzedni = teraz;

      const przyrost = (TEMPA[tempo] ?? 34) * dt + reszta.current;
      const calosc = Math.floor(przyrost);
      reszta.current = przyrost - calosc;
      el.scrollTop += calosc;

      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) {
        ustawGra(false);
        return;
      }
      klatka = requestAnimationFrame(krok);
    };

    klatka = requestAnimationFrame(krok);
    return () => cancelAnimationFrame(klatka);
  }, [otwarty, gra, tempo, bezRuchu, glebokoscStosu]);

  // Rok w tle i licznik postępu biorą się z tego, co akurat jest na środku ekranu.
  const przyPrzewinieciu = () => {
    const el = przewijak.current;
    if (el === null) return;
    const srodek = el.scrollTop + el.clientHeight / 2;
    const karty = [...el.querySelectorAll<HTMLElement>('[data-rok]')];
    let biezaca = karty[0];
    for (const k of karty) {
      if (k.offsetTop <= srodek) biezaca = k; else break;
    }
    if (biezaca !== undefined) {
      ustawRok(biezaca.dataset['rok'] ?? '');
      ustawPostep(Number(biezaca.dataset['indeks'] ?? 0) + 1);
    }
  };

  useEffect(() => {
    if (!otwarty) return;
    const obsluga = (e: KeyboardEvent) => {
      // Escape należy najpierw do arkusza leżącego na filmie.
      if (e.key === 'Escape' && glebokoscStosu === 0) { e.preventDefault(); ustawWidok(null); }
      if (e.key === ' ' && glebokoscStosu === 0) { e.preventDefault(); ustawGra((g) => !g); }
    };
    const poprzedni = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', obsluga);
    return () => {
      window.removeEventListener('keydown', obsluga);
      document.body.style.overflow = poprzedni;
    };
  }, [otwarty, ustawWidok, glebokoscStosu]);

  if (!otwarty) return null;

  const FILTRY: Array<{ id: Filtr; etykieta: string }> = [
    { id: 'wszystko', etykieta: t.filtrWszystko },
    { id: 'spacex', etykieta: t.filtrSpacex },
    { id: 'tesla', etykieta: t.filtrTesla },
    { id: 'reszta', etykieta: t.filtrReszta },
  ];

  return (
    <div
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label={t.trybFilmowy}
      tabIndex={-1}
      className="fixed inset-0 z-40 bg-tlo"
    >
      {/* Rok jako znacznik rozdziału. Stoi w górnym rogu, a nie na środku, bo
          linia czytania biegnie przez środek ekranu — tam tło konkurowałoby
          ze zdaniem zamiast je osadzać. */}
      <div
        aria-hidden="true"
        className="liczby pointer-events-none absolute left-0 right-0 top-0 px-4
                   pt-[calc(env(safe-area-inset-top,0px)+4px)] text-[22vw] font-bold leading-[0.85]
                   text-tekst transition-opacity duration-500"
        style={{ opacity: 0.07 }}
      >
        {rok}
      </div>

      <div
        ref={przewijak}
        onScroll={przyPrzewinieciu}
        onPointerDown={() => ustawGra(false)}
        className="relative h-full overflow-y-auto overscroll-contain px-6"
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Pusta przestrzeń na początku i końcu, żeby pierwsza i ostatnia karta
            mogły dojechać na środek ekranu. */}
        <div className="h-[45vh]" />

        <ol className="mx-auto flex max-w-[46ch] flex-col gap-[14vh]">
          {wydarzenia.map((w, i) => {
            const encja = baza.encje[w.encjaId];
            if (encja === undefined) return null;
            const kamien = w.waga === 3;
            return (
              <li key={`${w.encjaId}-${w.data}-${w.tytul}`} data-rok={w.data.slice(0, 4)} data-indeks={i}>
                <span className="liczby block text-przypis text-tekst-2">{dataKrotko(w.data)}</span>
                <h3 className={`mt-1 text-[26px] leading-[33px] tracking-[-0.4px] ${kamien ? 'text-plomien' : 'text-tekst'}`}>
                  {w.tytul}
                </h3>
                <p className="mt-2 text-tresc text-tekst">{w.opis}</p>
                <button
                  type="button"
                  onClick={() => otworz(w.encjaId)}
                  className="dotyk mt-3 inline-flex min-h-[44px] items-center rounded-pigulka px-3
                             text-podtytul text-blekit"
                  style={{ background: 'var(--mat-chip)' }}
                >
                  {encja.nazwa}
                </button>
              </li>
            );
          })}
        </ol>

        <div className="h-[55vh]" />
      </div>

      {/* Sterowanie na dole, na materiale, żeby nie gubiło się na tekście. */}
      <div
        className="absolute inset-x-0 bottom-0 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+14px)] pt-3"
        style={{
          background: 'linear-gradient(to top, var(--tlo) 55%, transparent)',
        }}
      >
        <div className="mx-auto flex w-full max-w-[46ch] flex-col gap-2">
          <div className="przewin-poziomo flex items-center gap-2">
            {FILTRY.map((f) => {
              const czynny = f.id === filtr;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => ustawFiltr(f.id)}
                  aria-pressed={czynny}
                  className={`dotyk min-h-[36px] shrink-0 rounded-pigulka px-3 text-podpis
                              ${czynny ? 'text-tlo' : 'text-tekst-2'}`}
                  style={{ background: czynny ? 'var(--blekit)' : 'var(--mat-kafel-mocny)' }}
                >
                  {f.etykieta}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => ustawGra((g) => !g)}
              aria-label={gra ? t.wstrzymaj : t.odtwarzaj}
              className="dotyk flex h-11 w-11 shrink-0 items-center justify-center rounded-pigulka text-tlo"
              style={{ background: 'var(--blekit)' }}
            >
              {gra
                ? <Pause size={17} strokeWidth={2} fill="currentColor" aria-hidden="true" />
                : <Play size={17} strokeWidth={2} fill="currentColor" aria-hidden="true" />}
            </button>

            <button
              type="button"
              onClick={odNowa}
              aria-label={t.odNowa}
              className="dotyk flex h-11 w-11 shrink-0 items-center justify-center rounded-pigulka text-tekst-2"
              style={{ background: 'var(--mat-kafel-mocny)' }}
            >
              <RotateCcw size={16} strokeWidth={2} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => ustawTempo((s) => (s + 1) % TEMPA.length)}
              aria-label={t.szybkosc}
              className="dotyk liczby min-h-[44px] shrink-0 rounded-pigulka px-3 text-podtytul text-tekst-2"
              style={{ background: 'var(--mat-kafel-mocny)' }}
            >
              {['½×', '1×', '2×'][tempo]}
            </button>

            <span className="liczby ml-auto shrink-0 text-podpis text-tekst-2">
              {gra ? t.postep(postep, wydarzenia.length) : t.wstrzymaneDotkniecie}
            </span>

            <button
              type="button"
              onClick={() => ustawWidok(null)}
              aria-label={t.zamknij}
              className="dotyk flex h-11 w-11 shrink-0 items-center justify-center rounded-pigulka text-tekst-2"
              style={{ background: 'var(--mat-kafel-mocny)' }}
            >
              <X size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
