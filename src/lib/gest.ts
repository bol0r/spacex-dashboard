import { useRef } from 'react';
import { animate, useMotionValue, type MotionValue } from 'framer-motion';
import type { PointerEvent as ReactPointerEvent } from 'react';

/**
 * Gest zamykania arkusza, napisany ręcznie na zdarzeniach wskaźnika.
 *
 * Wbudowane przeciąganie framer-motion nie nadaje się tutaj, bo ustawia własne
 * `touch-action` na całej karcie i zabija przewijanie treści w środku.
 * Tu decyzja jest prosta: gest uzbraja się tylko wtedy, gdy treść jest
 * przewinięta do samej góry i palec ruszył w stronę zamknięcia. Ruch w drugą
 * stronę natychmiast oddaje kontrolę przewijaniu.
 */

export const SPREZYNA = { type: 'spring', stiffness: 380, damping: 34 } as const;

const PROG_MARTWY = 6;      // px zanim uznamy kierunek — chroni przed przypadkowym drgnięciem
const PROG_ODLEGLOSCI = 110;
const PROG_PREDKOSCI = 620; // px/s — szybki, krótki gest też musi zamykać

interface Opcje {
  os: 'y' | 'x';
  aktywny: boolean;
  /** Czy w tym momencie wolno zacząć gest (np. czy treść jest przewinięta do góry). */
  mozeStartowac: () => boolean;
  onZamknij: () => void;
}

interface Slad {
  id: number;
  start: number;
  ostatnia: number;
  czas: number;
  predkosc: number;
  uzbrojony: boolean;
}

export interface Gest {
  przesuniecie: MotionValue<number>;
  uchwyty: {
    onPointerDown: (e: ReactPointerEvent<HTMLElement>) => void;
    onPointerMove: (e: ReactPointerEvent<HTMLElement>) => void;
    onPointerUp: (e: ReactPointerEvent<HTMLElement>) => void;
    onPointerCancel: (e: ReactPointerEvent<HTMLElement>) => void;
  };
}

export function useGestZamkniecia({ os, aktywny, mozeStartowac, onZamknij }: Opcje): Gest {
  const przesuniecie = useMotionValue(0);
  const slad = useRef<Slad | null>(null);

  const wspolrzedna = (e: ReactPointerEvent<HTMLElement>) => (os === 'y' ? e.clientY : e.clientX);

  const onPointerDown = (e: ReactPointerEvent<HTMLElement>) => {
    if (!aktywny || !mozeStartowac()) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const p = wspolrzedna(e);
    slad.current = {
      id: e.pointerId, start: p, ostatnia: p,
      czas: performance.now(), predkosc: 0, uzbrojony: false,
    };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    const s = slad.current;
    if (s === null || s.id !== e.pointerId) return;

    const p = wspolrzedna(e);
    const delta = p - s.start;

    if (!s.uzbrojony) {
      if (delta > PROG_MARTWY) {
        s.uzbrojony = true;
        e.currentTarget.setPointerCapture(e.pointerId);
      } else if (delta < -PROG_MARTWY) {
        slad.current = null; // palec poszedł w górę — to przewijanie, nie zamykanie
        return;
      } else {
        return;
      }
    }

    const t = performance.now();
    const dt = t - s.czas;
    if (dt > 0) s.predkosc = ((p - s.ostatnia) / dt) * 1000;
    s.ostatnia = p;
    s.czas = t;

    przesuniecie.set(Math.max(0, delta)); // 1:1 za palcem, tylko w stronę zamknięcia
  };

  const zakoncz = (e: ReactPointerEvent<HTMLElement>) => {
    const s = slad.current;
    if (s === null || s.id !== e.pointerId) return;
    slad.current = null;
    if (!s.uzbrojony) return;

    if (przesuniecie.get() > PROG_ODLEGLOSCI || s.predkosc > PROG_PREDKOSCI) {
      onZamknij();
      return;
    }
    void animate(przesuniecie, 0, SPREZYNA);
  };

  return {
    przesuniecie,
    uchwyty: {
      onPointerDown, onPointerMove, onPointerUp: zakoncz, onPointerCancel: zakoncz,
    },
  };
}
