import { useMemo, useRef } from 'react';
import { Clapperboard, Search, Share2, Shuffle } from 'lucide-react';
import type { BazaWiedzy } from '../data/types';
import { BOHATER, rozmiarKafla, ulozSekcje } from '../app/uklad';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { Kafel } from './Kafel';
import { KafelBohater } from './KafelBohater';
import { KartaDnia } from './KartaDnia';
import { OsCzasu } from './OsCzasu';
import { PasekSekcji } from './PasekSekcji';
import { PrzelacznikJezyka } from './PrzelacznikJezyka';
import { ListaPozioma } from './ListaPozioma';
import { Stopka } from './Stopka';

/** Odległość, po której pociągnięcie w dół na samej górze odsłania wyszukiwarkę. */
const PROG_POCIAGNIECIA = 64;

export function EkranGlowny({ baza, onOtworz }: { baza: BazaWiedzy; onOtworz: (id: string) => void }) {
  const t = useT();
  const ustawWidok = useStan((s) => s.ustawWidok);
  const ulubione = useStan((s) => s.ulubione);
  const historia = useStan((s) => s.historia);
  const czysciHistorie = useStan((s) => s.czysciHistorie);

  const bohater = baza.encje[BOHATER];
  const sekcje = useMemo(() => ulozSekcje(baza), [baza]);
  const doPaska = useMemo(() => sekcje.map((s) => ({ id: s.id, liczba: s.encje.length })), [sekcje]);


  // Pociągnięcie w dół na górze strony, jak w iOS. Uzbraja się tylko przy
  // scrollY równym zeru, żeby nie kolidowało ze zwykłym przewijaniem.
  const start = useRef<number | null>(null);
  const gestSzukania = {
    onPointerDown: (e: React.PointerEvent) => {
      start.current = window.scrollY <= 0 ? e.clientY : null;
    },
    onPointerMove: (e: React.PointerEvent) => {
      if (start.current === null) return;
      if (e.clientY - start.current > PROG_POCIAGNIECIA) {
        start.current = null;
        ustawWidok('szukanie');
      }
    },
    onPointerUp: () => { start.current = null; },
    onPointerCancel: () => { start.current = null; },
  };

  return (
    <main
      {...gestSzukania}
      className="mx-auto w-full max-w-[560px] px-4 pb-[calc(env(safe-area-inset-bottom,0px)+96px)]
                 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))]
                 lg:max-w-[1000px]"
    >
      {/* Układ jak w iOS: najpierw wąski pasek kontrolek, pod nim duży tytuł
          na pełnej szerokości. Trzymanie ich w jednym rzędzie łamało „Strefa
          Wiedzy" na dwie linie już przy 375 px. */}
      <header className="pb-5 pt-[calc(env(safe-area-inset-top,0px)+12px)]">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => ustawWidok('szukanie')}
            aria-label={t.szukaj}
            className="dotyk flex h-11 w-11 items-center justify-center rounded-pigulka text-tekst-2"
            style={{ background: 'var(--mat-kafel)' }}
          >
            <Search size={18} strokeWidth={2} aria-hidden="true" />
          </button>
          <PrzelacznikJezyka />
        </div>

        <h1 className="mt-2 text-duzy-tytul text-tekst">{t.tytul}</h1>
        <p className="max-w-[46ch] text-podtytul text-tekst-2">{t.podtytul}</p>
        <p className="mt-2 text-podpis text-tekst-2">{t.zastrzezenieKrotko}</p>
      </header>

      <PasekSekcji sekcje={doPaska} />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {bohater !== undefined && <KafelBohater encja={bohater} onOtworz={onOtworz} />}

        {/* Tryb filmowy jest zaproszeniem, nie treścią, więc nie wygląda jak kafel:
            obrys w błękicie zamiast materiału odróżnia akcję od tematu. */}
        <button
          type="button"
          onClick={() => ustawWidok('film')}
          className="dotyk col-span-2 flex items-center gap-3 rounded-kafel border border-blekit
                     px-5 py-4 text-left lg:col-span-4"
          style={{ background: 'var(--mat-chip)' }}
        >
          <Clapperboard size={22} strokeWidth={1.8} className="shrink-0 text-blekit" aria-hidden="true" />
          <span className="flex min-w-0 flex-col">
            <span className="text-naglowek text-blekit">{t.trybFilmowy}</span>
            <span className="text-przypis text-tekst-2">{t.trybFilmowyOpis}</span>
          </span>
        </button>

        {/* Graf jest drugim wejściem „na całość" obok trybu filmowego: tam czas,
            tu struktura. Oba prowadzą do tych samych encji, inną drogą. */}
        <button
          type="button"
          onClick={() => ustawWidok('graf')}
          className="dotyk col-span-2 flex items-center gap-3 rounded-kafel px-5 py-4 text-left
                     lg:col-span-4"
          style={{ background: 'var(--mat-kafel)', border: '0.5px solid var(--wlos)' }}
        >
          <Share2 size={22} strokeWidth={1.8} className="shrink-0 text-tekst-2" aria-hidden="true" />
          <span className="flex min-w-0 flex-col">
            <span className="text-naglowek text-tekst">{t.grafPowiazan}</span>
            <span className="text-przypis text-tekst-2">{t.grafPowiazanOpis}</span>
          </span>
        </button>

        <KartaDnia baza={baza} />
        <OsCzasu baza={baza} />

        <ListaPozioma tytul={t.ulubione} identyfikatory={ulubione} baza={baza} />
        <ListaPozioma
          tytul={t.historia}
          identyfikatory={historia}
          baza={baza}
          akcja={{ etykieta: t.historiaWyczysc, onKlik: czysciHistorie }}
        />

        {sekcje.map((sekcja) => (
          <section key={sekcja.id} id={sekcja.id} className="col-span-2 mt-5 scroll-mt-[104px] lg:col-span-4">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 className="text-tytul-2 text-tekst">{t.sekcje[sekcja.id]}</h2>
              <span className="liczby shrink-0 text-przypis text-tekst-2">{sekcja.encje.length}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {sekcja.encje.map((id) => {
                const encja = baza.encje[id];
                if (encja === undefined) return null;
                return <Kafel key={id} encja={encja} rozmiar={rozmiarKafla(encja)} onOtworz={onOtworz} />;
              })}
            </div>
          </section>
        ))}

        <Stopka baza={baza} />
      </div>

      {/* Losowanie pływa nad treścią, bo jest zaproszeniem, nie pozycją w spisie. */}
      <button
        type="button"
        onClick={() => ustawWidok('losowanie')}
        className="dotyk fixed bottom-[calc(env(safe-area-inset-bottom,0px)+20px)] left-1/2
                   z-40 flex min-h-[48px] -translate-x-1/2 items-center gap-2 rounded-pigulka px-5
                   text-podtytul text-tekst"
        style={{
          background: 'var(--mat-arkusz)',
          backdropFilter: 'blur(24px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
          border: '0.5px solid var(--wlos)',
        }}
      >
        <Shuffle size={16} strokeWidth={2} aria-hidden="true" />
        {t.pokazMiCos}
      </button>
    </main>
  );
}
