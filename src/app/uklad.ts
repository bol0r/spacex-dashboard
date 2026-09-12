/**
 * Układ ekranu głównego.
 *
 * Sekcje i przypisanie encji wyliczamy z bazy, żeby kolejne partie treści
 * z fazy 3 pojawiały się na ekranie same. Ręcznie zostaje tylko to, czego
 * z danych wyczytać nie można: który temat jest na tyle ważny, żeby dostać
 * większy kafel.
 */

import type { BazaWiedzy, Encja, Kategoria, Sekcja } from '../data/types';

export type Rozmiar = 'duzy' | 'sredni' | 'maly' | 'pigulka';

/** Encja wyróżniona — jedyny mocny akcent w całej aplikacji. */
export const BOHATER = 'starship';

export interface DefSekcji {
  id: Sekcja;
  kategorie: Kategoria[];
}

/** Kolejność sekcji. Nazwy widoczne w interfejsie mieszkają w słowniku i18n. */
export const SEKCJE: DefSekcji[] = [
  { id: 'spacex', kategorie: ['spacex-rakiety', 'spacex-silniki'] },
  { id: 'misje', kategorie: ['spacex-misje'] },
  { id: 'miejsca', kategorie: ['spacex-miejsca'] },
  { id: 'ludzie', kategorie: ['spacex-ludzie'] },
  { id: 'tesla', kategorie: ['tesla'] },
  { id: 'reszta-imperium', kategorie: ['musk-i-reszta'] },
  { id: 'slownik', kategorie: ['pojecia'] },
];

/** Wyjątki, gdy plik danych nie pokrywa się z sekcją w widoku. */
const SEKCJA_WYMUSZONA: Partial<Record<string, Sekcja>> = {
  'spacex': 'reszta-imperium',
};

/** Waga tematu przełożona na rozmiar kafla. Brak wpisu = rozmiar domyślny. */
const WAGI: Partial<Record<string, Rozmiar>> = {
  'falcon-9': 'sredni',
  'starlink': 'sredni',
  'raptor': 'sredni',
  'crew-dragon': 'sredni',
  'tesla': 'sredni',
  'elon-musk': 'sredni',
  'spacex': 'sredni',
  'reuzywalnosc': 'sredni',
};

export function rozmiarKafla(encja: Encja): Rozmiar {
  const wymuszony = WAGI[encja.id];
  if (wymuszony !== undefined) return wymuszony;
  // Hasła słownika są krótkie i liczne — jako pigułki dają się przejrzeć wzrokiem.
  return encja.typ === 'pojecie' ? 'pigulka' : 'maly';
}

export interface SekcjaZTrescia extends DefSekcji {
  encje: string[];
}

/**
 * Rozdziela encje po sekcjach. W obrębie sekcji na początek idą kafle większe,
 * a przy równym rozmiarze zachowujemy kolejność z plików danych — pozwala to
 * sterować rytmem, nie tracąc kontroli nad tym, co widać najpierw.
 */
export function ulozSekcje(baza: BazaWiedzy): SekcjaZTrescia[] {
  const waga: Record<Rozmiar, number> = { duzy: 0, sredni: 1, maly: 2, pigulka: 3 };

  return SEKCJE.map((sekcja) => {
    const encje = baza.kolejnosc.filter((id) => {
      if (id === BOHATER) return false; // bohater ma własny kafel na górze
      const e = baza.encje[id];
      if (e === undefined) return false;
      const docelowa = SEKCJA_WYMUSZONA[id] ?? null;
      if (docelowa !== null) return docelowa === sekcja.id;
      return sekcja.kategorie.includes(e.kategoria);
    });

    encje.sort((a, b) => {
      const ea = baza.encje[a];
      const eb = baza.encje[b];
      if (ea === undefined || eb === undefined) return 0;
      return waga[rozmiarKafla(ea)] - waga[rozmiarKafla(eb)];
    });

    return { ...sekcja, encje };
  }).filter((s) => s.encje.length > 0);
}
