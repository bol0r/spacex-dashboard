/**
 * Układ ekranu głównego. Rozmiar kafla niesie wagę tematu, więc przypisujemy
 * go ręcznie — to decyzja redakcyjna, nie coś, co da się wyliczyć z danych.
 */

import type { Sekcja } from '../data/types';

export type Rozmiar = 'duzy' | 'sredni' | 'maly' | 'pigulka';

export interface PozycjaSekcji {
  id: Sekcja;
  tytul: string;
  kafle: Array<{ id: string; rozmiar: Rozmiar }>;
}

/** Encja wyróżniona — jedyny mocny akcent w całej aplikacji. */
export const BOHATER = 'starship';

export const SEKCJE: PozycjaSekcji[] = [
  {
    id: 'spacex',
    tytul: 'SpaceX',
    kafle: [
      { id: 'falcon-9', rozmiar: 'sredni' },
      { id: 'super-heavy', rozmiar: 'maly' },
      { id: 'raptor', rozmiar: 'maly' },
      { id: 'starlink', rozmiar: 'sredni' },
      { id: 'crew-dragon', rozmiar: 'maly' },
      { id: 'merlin', rozmiar: 'maly' },
      { id: 'falcon-heavy', rozmiar: 'maly' },
      { id: 'starbase', rozmiar: 'maly' },
    ],
  },
  {
    id: 'ludzie',
    tytul: 'Ludzie',
    kafle: [
      { id: 'elon-musk', rozmiar: 'maly' },
      { id: 'gwynne-shotwell', rozmiar: 'maly' },
    ],
  },
  {
    id: 'reszta-imperium',
    tytul: 'Firmy',
    kafle: [
      { id: 'spacex', rozmiar: 'maly' },
      { id: 'tesla', rozmiar: 'maly' },
    ],
  },
  {
    id: 'slownik',
    tytul: 'Słownik',
    kafle: [
      { id: 'reuzywalnosc', rozmiar: 'pigulka' },
      { id: 'leo', rozmiar: 'pigulka' },
      { id: 'pelnoprzeplywowe-spalanie-stopniowe', rozmiar: 'pigulka' },
    ],
  },
];
