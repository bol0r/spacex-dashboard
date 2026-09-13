import { useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { usePulapkaFokusu } from '../lib/fokus';
import { SPREZYNA } from '../lib/gest';

/**
 * Wspólna powłoka nakładek pełnoekranowych: wyszukiwarki, osi czasu i losowania.
 * Trzy różne ekrany, ale ten sam sposób wejścia, wyjścia i obsługi klawiatury —
 * różnicowanie ich tylko po to, żeby były różne, byłoby kosztem dla użytkownika.
 */
export function Nakladka({
  otwarta, tytul, naglowek, children, bezPrzewijania = false, podArkuszami = false,
}: {
  otwarta: boolean;
  tytul: string;
  /** Element pod tytułem — pole wyszukiwania albo filtry. */
  naglowek?: ReactNode;
  children: ReactNode;
  /** Treść wypełnia całą wysokość i nie przewija się — dla widoku grafu. */
  bezPrzewijania?: boolean;
  /**
   * Nakładka zostaje pod stosem arkuszy zamiast go przykrywać. Dotyczy tych
   * widoków, do których po zamknięciu encji się wraca — dziś tylko grafu.
   */
  podArkuszami?: boolean;
}) {
  const zamknij = useStan((s) => s.ustawWidok);
  const t = useT();
  const panel = useRef<HTMLDivElement>(null);
  const bezRuchu = useReducedMotion() ?? false;

  usePulapkaFokusu(panel, otwarta);

  useEffect(() => {
    if (!otwarta) return;
    const obsluga = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); zamknij(null); }
    };
    const poprzedni = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', obsluga);
    return () => {
      window.removeEventListener('keydown', obsluga);
      document.body.style.overflow = poprzedni;
    };
  }, [otwarta, zamknij]);

  return (
    <AnimatePresence>
      {otwarta && (
        <motion.div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label={tytul}
          tabIndex={-1}
          initial={bezRuchu ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={bezRuchu ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={bezRuchu ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={bezRuchu ? { duration: 0.12 } : SPREZYNA}
          className={`fixed inset-0 flex flex-col ${podArkuszami ? 'z-40' : 'z-[60]'}`}
          style={{
            background: 'rgba(0,0,0,0.86)',
            backdropFilter: 'blur(30px) saturate(1.6)',
            WebkitBackdropFilter: 'blur(30px) saturate(1.6)',
          }}
        >
          <header className="shrink-0 border-b-[0.5px] border-[color:var(--wlos)] px-4
                             pb-3 pt-[calc(env(safe-area-inset-top,0px)+14px)]">
            <div className="mx-auto flex w-full max-w-[720px] items-center justify-between gap-3">
              <h2 className="text-tytul-2 text-tekst">{tytul}</h2>
              <button
                type="button"
                onClick={() => zamknij(null)}
                aria-label={t.zamknij}
                className="dotyk flex h-11 w-11 shrink-0 items-center justify-center rounded-pigulka text-tekst-2"
                style={{ background: 'var(--mat-kafel-mocny)' }}
              >
                <X size={18} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            {naglowek !== undefined && (
              <div className="mx-auto mt-3 w-full max-w-[720px]">{naglowek}</div>
            )}
          </header>

          {bezPrzewijania ? (
            <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
          ) : (
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4
                            pb-[calc(env(safe-area-inset-bottom,0px)+28px)] pt-4">
              <div className="mx-auto w-full max-w-[720px]">{children}</div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
