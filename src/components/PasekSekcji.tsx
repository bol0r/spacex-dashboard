import { useEffect, useRef, useState } from 'react';
import type { Sekcja } from '../data/types';
import { ETYKIETY_SKROCONE } from '../app/uklad';

/**
 * Pasek nawigacji po sekcjach. Bez niego ekran główny jest ścianą kafli,
 * po której nie widać, co w ogóle jest w bazie i jak głęboko sięga.
 * Chip prowadzi do sekcji, a podświetlenie mówi, gdzie jesteśmy.
 */
export function PasekSekcji({ sekcje }: { sekcje: ReadonlyArray<{ id: Sekcja; liczba: number }> }) {
  const [aktywna, ustawAktywna] = useState<Sekcja | null>(sekcje[0]?.id ?? null);
  const pasek = useRef<HTMLDivElement>(null);

  // Podświetlenie idzie za przewijaniem strony, nie za kliknięciem — dzięki
  // temu zgadza się też wtedy, gdy użytkownik przewija palcem.
  //
  // IntersectionObserver tu nie wystarcza: jego wywołanie dostaje wyłącznie
  // wpisy, które zmieniły stan, więc przy krótkich sekcjach potrafi wskazać
  // tę, która właśnie weszła na dół ekranu, a nie tę na górze. Liczymy więc
  // pozycje sami, raz na ramkę.
  useEffect(() => {
    let zaplanowane = 0;

    const przelicz = () => {
      zaplanowane = 0;
      const GRANICA = 120; // wysokość paska plus oddech
      let najlepsza: Sekcja | null = null;
      let najlepszaGora = -Infinity;

      for (const s of sekcje) {
        const el = document.getElementById(s.id);
        if (el === null) continue;
        const gora = el.getBoundingClientRect().top;
        // Szukamy ostatniej sekcji, której początek wjechał już pod pasek.
        if (gora <= GRANICA && gora > najlepszaGora) {
          najlepszaGora = gora;
          najlepsza = s.id;
        }
      }

      // Ostatnia sekcja bywa zbyt krótka, żeby jej początek wjechał pod pasek —
      // gdy jesteśmy na samym dole strony, to jednak ona jest tą właściwą.
      const naDole = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (naDole) {
        const ostatnia = sekcje[sekcje.length - 1];
        if (ostatnia !== undefined) { ustawAktywna(ostatnia.id); return; }
      }

      ustawAktywna(najlepsza ?? sekcje[0]?.id ?? null);
    };

    const przyScrollu = () => {
      if (zaplanowane !== 0) return;
      zaplanowane = requestAnimationFrame(przelicz);
    };

    przelicz();
    window.addEventListener('scroll', przyScrollu, { passive: true });
    window.addEventListener('resize', przyScrollu);
    return () => {
      if (zaplanowane !== 0) cancelAnimationFrame(zaplanowane);
      window.removeEventListener('scroll', przyScrollu);
      window.removeEventListener('resize', przyScrollu);
    };
  }, [sekcje]);

  // Aktywny chip trzymamy w widoku, gdy pasek nie mieści się na ekranie.
  useEffect(() => {
    if (aktywna === null) return;
    pasek.current
      ?.querySelector(`[data-sekcja="${aktywna}"]`)
      ?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [aktywna]);

  return (
    <nav
      aria-label="Sekcje"
      className="sticky top-0 z-30 -mx-4 mb-4 border-b-[0.5px] border-[color:var(--wlos)]
                 px-4 pb-2 pt-[calc(env(safe-area-inset-top,0px)+8px)]"
      style={{
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(20px) saturate(1.6)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.6)',
      }}
    >
      <div ref={pasek} className="przewin-poziomo flex gap-2">
        {sekcje.map((s) => {
          const czynna = s.id === aktywna;
          return (
            <button
              key={s.id}
              type="button"
              data-sekcja={s.id}
              aria-current={czynna ? 'true' : undefined}
              onClick={() => {
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`dotyk flex shrink-0 items-baseline gap-[6px] rounded-pigulka px-3 py-[7px] text-podtytul
                          ${czynna ? 'text-tlo' : 'text-tekst-2'}`}
              style={{ background: czynna ? 'var(--blekit)' : 'var(--mat-kafel-mocny)' }}
            >
              {ETYKIETY_SKROCONE[s.id]}
              <span className="liczby text-podpis opacity-70">{s.liczba}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
