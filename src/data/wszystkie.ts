/**
 * Statyczne zebranie całej bazy. Używane wyłącznie przez walidator i testy —
 * aplikacja ładuje kategorie leniwie przez `index.ts`, żeby ekran główny
 * nie ciągnął wszystkiego naraz.
 */

import type { Encja, Kategoria } from './types';
import { rakiety } from './entities/spacex-rakiety';
import { silniki } from './entities/spacex-silniki';
import { misje } from './entities/spacex-misje';
import { miejsca } from './entities/spacex-miejsca';
import { ludzie } from './entities/spacex-ludzie';
import { muskIReszta } from './entities/musk-i-reszta';
import { teslaEncje } from './entities/tesla';
import { pojecia } from './entities/pojecia';

export const WEDLUG_KATEGORII: Record<Kategoria, Encja[]> = {
  'spacex-rakiety': rakiety,
  'spacex-silniki': silniki,
  'spacex-misje': misje,
  'spacex-miejsca': miejsca,
  'spacex-ludzie': ludzie,
  'tesla': teslaEncje,
  'musk-i-reszta': muskIReszta,
  'pojecia': pojecia,
};

export const WSZYSTKIE: Encja[] = Object.values(WEDLUG_KATEGORII).flat();
