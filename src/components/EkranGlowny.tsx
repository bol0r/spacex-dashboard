import type { BazaWiedzy } from '../data/types';
import { BOHATER, SEKCJE } from '../app/uklad';
import { Kafel } from './Kafel';
import { KafelBohater } from './KafelBohater';
import { PasekOsi } from './PasekOsi';

/**
 * Ekran główny. Na telefonie siatka ma dwie kolumny, od 900 px cztery —
 * szerokość wykorzystujemy zagęszczeniem kafli, nie rozciąganiem ich.
 * Prawa część ekranu pozostaje wolna pod panel arkusza z fazy 2.
 */
export function EkranGlowny({ baza, onOtworz }: { baza: BazaWiedzy; onOtworz: (id: string) => void }) {
  const bohater = baza.encje[BOHATER];

  return (
    <main className="mx-auto w-full max-w-[560px] px-4 pb-[calc(env(safe-area-inset-bottom,0px)+40px)] pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-[calc(env(safe-area-inset-top,0px)+12px)] lg:max-w-[1000px]">
      <header className="pb-6 pt-2">
        <h1 className="text-duzy-tytul text-tekst">Strefa Wiedzy</h1>
        <p className="text-podtytul text-tekst-2">SpaceX i reszta imperium</p>
      </header>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {bohater !== undefined && <KafelBohater encja={bohater} onOtworz={onOtworz} />}
        <PasekOsi baza={baza} />

        {SEKCJE.map((sekcja) => (
          <section key={sekcja.id} className="col-span-2 mt-5 lg:col-span-4">
            <h2 className="mb-3 text-tytul-2 text-tekst">{sekcja.tytul}</h2>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {sekcja.kafle.map(({ id, rozmiar }) => {
                const encja = baza.encje[id];
                if (encja === undefined) return null;
                return <Kafel key={id} encja={encja} rozmiar={rozmiar} onOtworz={onOtworz} />;
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
