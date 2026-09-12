import { useEffect, useMemo, useRef } from 'react';
import type { BazaWiedzy, Wydarzenie } from '../data/types';
import { useStan } from '../app/stan';
import { dataKrotko, odmiana } from '../lib/format';

const PX_NA_ROK = 46;
const MIN_ODSTEP = 13;  // px między znacznikami w jednym pasie
const PASY = 4;

interface Znacznik extends Wydarzenie {
  encjaId: string;
  x: number;
  pas: number;
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
  const przewijak = useRef<HTMLDivElement>(null);

  const { znaczniki, lata, szerokosc } = useMemo(() => {
    const posortowane = [...baza.osGlobalna].sort((a, b) => a.data.localeCompare(b.data));
    const pierwszy = posortowane[0];
    const ostatni = posortowane[posortowane.length - 1];
    if (pierwszy === undefined || ostatni === undefined) {
      return { znaczniki: [] as Znacznik[], lata: [] as number[], szerokosc: 0 };
    }

    const od = Math.floor(rokUlamkowy(pierwszy.data));
    const doR = Math.ceil(rokUlamkowy(ostatni.data));

    // Przydział pasów: znacznik schodzi niżej, gdy poprzedni w jego pasie
    // jest zbyt blisko. Dzięki temu skupiska rozwarstwiają się, a nie nakładają.
    const ostatniW: number[] = Array.from({ length: PASY }, () => -Infinity);
    const wynik: Znacznik[] = posortowane.map((w) => {
      const x = (rokUlamkowy(w.data) - od) * PX_NA_ROK;
      let pas = 0;
      for (let i = 0; i < PASY; i++) {
        const poprzedni = ostatniW[i];
        if (poprzedni === undefined || x - poprzedni >= MIN_ODSTEP) { pas = i; break; }
        pas = i;
      }
      ostatniW[pas] = x;
      return { ...w, x, pas };
    });

    return {
      znaczniki: wynik,
      lata: Array.from({ length: doR - od + 1 }, (_, i) => od + i),
      szerokosc: (doR - od) * PX_NA_ROK,
    };
  }, [baza]);

  // Wchodzimy na prawym końcu — tam, gdzie dzieje się teraz.
  useEffect(() => {
    const el = przewijak.current;
    if (el !== null) el.scrollLeft = el.scrollWidth;
  }, [szerokosc]);

  return (
    <section
      className="material col-span-2 overflow-hidden rounded-kafel py-4 lg:col-span-4"
      aria-label="Oś czasu — przesuwana w poziomie"
    >
      <div className="flex items-baseline justify-between px-4">
        <h2 className="text-naglowek text-tekst">Oś czasu</h2>
        <span className="liczby text-podpis text-tekst-2">
          {znaczniki.length} {odmiana(znaczniki.length, ['wydarzenie', 'wydarzenia', 'wydarzeń'])}, przesuń w poziomie
        </span>
      </div>

      <div ref={przewijak} className="przewin-poziomo mt-3" style={{ touchAction: 'pan-x' }}>
        <div className="relative h-[124px]" style={{ width: szerokosc + 64, marginInline: 32 }}>
          {/* Skala lat. Etykieta co pięć lat, kreska co rok. */}
          <div className="absolute inset-x-0 bottom-[26px] h-px bg-[color:var(--wlos)]" />
          {lata.map((rok) => {
            const x = (rok - (lata[0] ?? rok)) * PX_NA_ROK;
            const pelna = rok % 5 === 0;
            return (
              <div key={rok} className="absolute bottom-0" style={{ left: x }}>
                <div
                  className={`absolute bottom-[18px] w-px ${pelna ? 'h-2 bg-tekst-2' : 'h-1 bg-[color:var(--wlos)]'}`}
                />
                {pelna && (
                  <span className="liczby absolute bottom-0 left-0 -translate-x-1/2 text-podpis text-tekst-2">
                    {rok}
                  </span>
                )}
              </div>
            );
          })}

          {znaczniki.map((z) => {
            const encja = baza.encje[z.encjaId];
            if (encja === undefined) return null;
            const kamien = z.waga === 3;
            return (
              <button
                key={`${z.encjaId}-${z.data}-${z.tytul}`}
                type="button"
                onClick={() => otworz(z.encjaId)}
                aria-label={`${z.tytul}, ${dataKrotko(z.data)} — ${encja.nazwa}`}
                className="absolute flex w-11 -translate-x-1/2 flex-col items-center"
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
