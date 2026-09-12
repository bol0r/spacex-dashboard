import { useEffect, useState, type RefObject } from 'react';

const WYBIERALNE = [
  'a[href]', 'button:not([disabled])', 'input', 'select', 'textarea',
  'summary', '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Pułapka fokusu dla arkusza na wierzchu. Tab krąży wewnątrz, Shift+Tab
 * wstecz, a przy otwarciu fokus ląduje na samym arkuszu, żeby czytnik ekranu
 * przeczytał jego nazwę, a nie pierwszy przycisk w środku.
 */
export function usePulapkaFokusu(ref: RefObject<HTMLElement>, aktywna: boolean): void {
  useEffect(() => {
    const element = ref.current;
    if (!aktywna || element === null) return;

    const poprzedni = document.activeElement;
    element.focus({ preventScroll: true });

    const obsluga = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const cele = [...element.querySelectorAll<HTMLElement>(WYBIERALNE)]
        .filter((el) => el.offsetParent !== null);
      const pierwszy = cele[0];
      const ostatni = cele[cele.length - 1];
      if (pierwszy === undefined || ostatni === undefined) return;

      if (!e.shiftKey && document.activeElement === ostatni) {
        e.preventDefault();
        pierwszy.focus();
      } else if (e.shiftKey && (document.activeElement === pierwszy || document.activeElement === element)) {
        e.preventDefault();
        ostatni.focus();
      }
    };

    element.addEventListener('keydown', obsluga);
    return () => {
      element.removeEventListener('keydown', obsluga);
      if (poprzedni instanceof HTMLElement) poprzedni.focus({ preventScroll: true });
    };
  }, [ref, aktywna]);
}

function useZapytanieMedia(zapytanie: string): boolean {
  const [pasuje, ustaw] = useState(() => window.matchMedia(zapytanie).matches);

  useEffect(() => {
    const mq = window.matchMedia(zapytanie);
    const obsluga = () => ustaw(mq.matches);
    ustaw(mq.matches);
    mq.addEventListener('change', obsluga);
    return () => mq.removeEventListener('change', obsluga);
  }, [zapytanie]);

  return pasuje;
}

/** Od 900 px arkusz przestaje wysuwać się od dołu i staje się panelem po prawej. */
export function useSzerokiEkran(): boolean {
  return useZapytanieMedia('(min-width: 900px)');
}
