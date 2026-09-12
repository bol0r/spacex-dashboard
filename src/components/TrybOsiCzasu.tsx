import { useMemo, useState } from 'react';
import type { BazaWiedzy, Kategoria } from '../data/types';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { dataKrotko } from '../lib/format';
import { Nakladka } from './Nakladka';

/**
 * Pionowa oś czasu na pełnym ekranie, z filtrem po firmie.
 *
 * Gęstość widać wprost z liczby wpisów przy roku — nie rysujemy tu wykresu,
 * bo lista posortowana chronologicznie sama pokazuje, gdzie się zagęszcza.
 * Kompaktowa oś na ekranie głównym pokazuje kształt; ta pokazuje treść.
 */

type Filtr = 'wszystko' | 'spacex' | 'tesla' | 'reszta';

const KATEGORIE_FILTRA: Record<Exclude<Filtr, 'wszystko'>, Kategoria[]> = {
  spacex: ['spacex-rakiety', 'spacex-silniki', 'spacex-misje', 'spacex-miejsca', 'spacex-ludzie'],
  tesla: ['tesla'],
  reszta: ['musk-i-reszta', 'pojecia'],
};

function pasuje(baza: BazaWiedzy, encjaId: string, filtr: Filtr): boolean {
  if (filtr === 'wszystko') return true;
  const e = baza.encje[encjaId];
  return e !== undefined && KATEGORIE_FILTRA[filtr].includes(e.kategoria);
}

export function TrybOsiCzasu() {
  const baza = useBaza();
  const t = useT();
  const widok = useStan((s) => s.widok);
  const otworz = useStan((s) => s.otworz);
  const otwarta = widok === 'os-czasu';

  const [filtr, ustawFiltr] = useState<Filtr>('wszystko');

  const lata = useMemo(() => {
    const wybrane = baza.osGlobalna
      .filter((w) => pasuje(baza, w.encjaId, filtr))
      .sort((a, b) => b.data.localeCompare(a.data)); // najnowsze na górze

    const grupy = new Map<string, typeof wybrane>();
    for (const w of wybrane) {
      const rok = w.data.slice(0, 4);
      const lista = grupy.get(rok) ?? [];
      lista.push(w);
      grupy.set(rok, lista);
    }
    return [...grupy];
  }, [baza, filtr]);

  const razem = lata.reduce((s, [, lista]) => s + lista.length, 0);

  const FILTRY: Array<{ id: Filtr; etykieta: string }> = [
    { id: 'wszystko', etykieta: t.filtrWszystko },
    { id: 'spacex', etykieta: t.filtrSpacex },
    { id: 'tesla', etykieta: t.filtrTesla },
    { id: 'reszta', etykieta: t.filtrReszta },
  ];

  return (
    <Nakladka
      otwarta={otwarta}
      tytul={t.osCzasu}
      naglowek={
        // Licznik stoi poza przewijanym rzędem filtrów — w środku uciekałby
        // poza krawędź razem z chipami.
        <div className="flex flex-col gap-2">
        <div className="przewin-poziomo flex items-center gap-2">
          {FILTRY.map((f) => {
            const czynny = f.id === filtr;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => ustawFiltr(f.id)}
                aria-pressed={czynny}
                className={`dotyk min-h-[36px] shrink-0 rounded-pigulka px-3 text-podtytul
                            ${czynny ? 'text-tlo' : 'text-tekst-2'}`}
                style={{ background: czynny ? 'var(--blekit)' : 'var(--mat-kafel-mocny)' }}
              >
                {f.etykieta}
              </button>
            );
          })}
        </div>
        <span className="liczby text-podpis text-tekst-2">{t.wydarzenia(razem)}</span>
        </div>
      }
    >
      <ol className="flex flex-col gap-6">
        {lata.map(([rok, wydarzenia]) => (
          <li key={rok} className="flex gap-4">
            {/* Rok jako kolumna po lewej — przy przewijaniu daje stały punkt odniesienia. */}
            <div className="w-12 shrink-0 pt-[2px]">
              <span className="liczby text-naglowek text-tekst">{rok}</span>
              <span className="liczby block text-podpis text-tekst-2">{wydarzenia.length}</span>
            </div>

            <ul className="min-w-0 flex-1 flex-col border-l-[0.5px] border-[color:var(--wlos)] pl-4">
              {wydarzenia.map((w) => {
                const encja = baza.encje[w.encjaId];
                if (encja === undefined) return null;
                const kamien = w.waga === 3;
                return (
                  <li key={`${w.encjaId}-${w.data}-${w.tytul}`}>
                    <button
                      type="button"
                      onClick={() => otworz(w.encjaId)}
                      aria-label={`${w.tytul}, ${dataKrotko(w.data)} — ${encja.nazwa}`}
                      className="dotyk -ml-4 flex w-full flex-col items-start gap-[2px] rounded-[10px] py-2 pl-4 pr-2 text-left"
                    >
                      <span className="flex items-baseline gap-2">
                        <span className="liczby text-podpis text-tekst-2">{dataKrotko(w.data)}</span>
                        {kamien && (
                          <span className="text-podpis text-plomien">{t.kamienMilowy}</span>
                        )}
                      </span>
                      <span className={`text-podtytul ${kamien ? 'text-tekst' : 'text-tekst'}`}>
                        {w.tytul}
                      </span>
                      <span className="max-w-[58ch] text-przypis text-tekst-2">{w.opis}</span>
                      <span className="text-przypis text-blekit">{encja.nazwa}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </Nakladka>
  );
}
