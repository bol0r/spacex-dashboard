import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useStan, WIDOCZNE_POZIOMY } from '../app/stan';
import { useSzerokiEkran } from '../lib/fokus';
import { Arkusz } from './Arkusz';
import { Okruszki } from './Okruszki';

/**
 * Stos kart w stylu iOS. Widoczne są maksymalnie cztery poziomy; gdy wchodzimy
 * głębiej, najstarsze karty znikają ze stosu wizualnego, a pełna ścieżka
 * pojawia się jako okruszki nad nazwą.
 */
export function StosArkuszy() {
  const stos = useStan((s) => s.stos);
  const zamknij = useStan((s) => s.zamknij);
  const szeroki = useSzerokiEkran();
  const bezRuchu = useReducedMotion() ?? false;
  const otwarty = stos.length > 0;

  // Escape zamyka jeden poziom, nie cały stos — tak samo jak gest.
  useEffect(() => {
    if (!otwarty) return;
    const obsluga = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); zamknij(); }
    };
    window.addEventListener('keydown', obsluga);
    return () => window.removeEventListener('keydown', obsluga);
  }, [otwarty, zamknij]);

  // Tło nie może się przewijać pod otwartym arkuszem.
  useEffect(() => {
    if (!otwarty || szeroki) return;
    const poprzedni = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = poprzedni; };
  }, [otwarty, szeroki]);

  const widoczne = stos.slice(-WIDOCZNE_POZIOMY);
  // Okruszki pokazujemy, gdy stos wizualny nie oddaje już całej ścieżki: przy
  // piątym poziomie na telefonie i zawsze w trybie panelu, gdzie karty pod
  // wierzchnią są całkowicie zasłonięte.
  const pokazOkruszki = stos.length > WIDOCZNE_POZIOMY || (szeroki && stos.length > 1);

  return (
    <div
      className={`fixed inset-0 z-50 ${otwarty ? '' : 'pointer-events-none'}`}
      aria-live="polite"
    >
      <AnimatePresence>
        {otwarty && !szeroki && (
          <motion.button
            key="tlo"
            type="button"
            aria-label="Zamknij arkusz"
            onClick={zamknij}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 cursor-default bg-tlo/60"
          />
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {widoczne.map((id, i) => {
          const odleglosc = widoczne.length - 1 - i;
          return (
            <div
              key={`${id}-${stos.length - widoczne.length + i}`}
              className="pointer-events-none absolute inset-0"
              style={{ zIndex: i + 1 }}
            >
              <Arkusz
                id={id}
                odleglosc={odleglosc}
                tryb={szeroki ? 'panel' : 'dolny'}
                onZamknij={zamknij}
                {...(odleglosc === 0 && pokazOkruszki ? { okruszki: <Okruszki sciezka={stos.slice(0, -1)} /> } : {})}
              />
              {/* Lekkie przyciemnienie kart odjeżdżających w głąb. */}
              {odleglosc > 0 && !bezRuchu && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-tlo"
                  style={{ opacity: Math.min(0.5, odleglosc * 0.18) }}
                />
              )}
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
