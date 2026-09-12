import { useStan } from '../app/stan';
import { SLOWNIKI, type Slownik } from './teksty';

/** Słownik interfejsu dla aktualnie wybranego języka. */
export function useT(): Slownik {
  return useStan((s) => SLOWNIKI[s.jezyk]);
}

export { SLOWNIKI, JEZYKI, NAZWY_JEZYKOW } from './teksty';
export type { Jezyk, Slownik } from './teksty';
