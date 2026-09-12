import { createContext, useContext } from 'react';
import type { BazaWiedzy } from '../data/types';

/** Baza jest potrzebna w każdym chipie w treści — kontekst zamiast przekazywania w dół. */
const Kontekst = createContext<BazaWiedzy | null>(null);

export const DostawcaBazy = Kontekst.Provider;

export function useBaza(): BazaWiedzy {
  const baza = useContext(Kontekst);
  if (baza === null) throw new Error('useBaza poza DostawcaBazy');
  return baza;
}
