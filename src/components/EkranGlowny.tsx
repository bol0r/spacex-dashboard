import { useMemo } from 'react';
import type { BazaWiedzy } from '../data/types';
import { BOHATER, rozmiarKafla, ulozSekcje } from '../app/uklad';
import { Kafel } from './Kafel';
import { KafelBohater } from './KafelBohater';
import { KartaDnia } from './KartaDnia';
import { OsCzasu } from './OsCzasu';
import { PasekSekcji } from './PasekSekcji';

/**
 * Ekran główny. Na górze to, co dzieje się teraz i co warto przeczytać dziś;
 * pod tym przesuwalna oś czasu, a dalej sekcje. Pasek nawigacji jest przyklejony,
 * żeby przy stu osiemdziesięciu encjach dało się skakać po bazie bez przewijania
 * jej całej.
 */
export function EkranGlowny({ baza, onOtworz }: { baza: BazaWiedzy; onOtworz: (id: string) => void }) {
  const bohater = baza.encje[BOHATER];
  const sekcje = useMemo(() => ulozSekcje(baza), [baza]);
  const doPaska = useMemo(
    () => sekcje.map((s) => ({ id: s.id, liczba: s.encje.length })),
    [sekcje],
  );

  return (
    <main className="mx-auto w-full max-w-[560px] px-4 pb-[calc(env(safe-area-inset-bottom,0px)+40px)]
                     pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))]
                     lg:max-w-[1000px]">
      <header className="pb-5 pt-[calc(env(safe-area-inset-top,0px)+16px)]">
        <h1 className="text-duzy-tytul text-tekst">Strefa Wiedzy</h1>
        <p className="max-w-[46ch] text-podtytul text-tekst-2">
          SpaceX i reszta imperium Muska. Każde pojęcie w tekście jest klikalne.
        </p>
      </header>

      <PasekSekcji sekcje={doPaska} />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {bohater !== undefined && <KafelBohater encja={bohater} onOtworz={onOtworz} />}
        <KartaDnia baza={baza} />
        <OsCzasu baza={baza} />

        {sekcje.map((sekcja) => (
          <section
            key={sekcja.id}
            id={sekcja.id}
            className="col-span-2 mt-5 scroll-mt-[104px] lg:col-span-4"
          >
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 className="text-tytul-2 text-tekst">{sekcja.tytul}</h2>
              <span className="liczby shrink-0 text-przypis text-tekst-2">
                {sekcja.encje.length}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {sekcja.encje.map((id) => {
                const encja = baza.encje[id];
                if (encja === undefined) return null;
                return (
                  <Kafel key={id} encja={encja} rozmiar={rozmiarKafla(encja)} onOtworz={onOtworz} />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
