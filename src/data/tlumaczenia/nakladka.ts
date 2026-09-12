/**
 * Nakładka tłumaczeniowa.
 *
 * Kontrakt `Encja` zostaje nietknięty, a polski pozostaje wersją kanoniczną —
 * to w nim weryfikowaliśmy fakty i do niego pasują źródła. Tłumaczenie jest
 * osobnym plikiem, który nadpisuje wyłącznie pola z tekstem ciągłym. Nazwy
 * własne, liczby, daty, identyfikatory i źródła nie są tłumaczone.
 *
 * Tablice są pozycyjne, żeby tłumaczenie nie musiało powtarzać całej struktury.
 * Niezgodność długości łapie walidator — nie da się przez nią przejść cicho.
 */

import type { Encja } from '../types';

export interface TlumaczenieEncji {
  /**
   * Nazwa przetłumaczona. Podajemy ją tylko tam, gdzie nazwa jest opisem,
   * nie nazwą własną: „Niska orbita okołoziemska" wymaga tłumaczenia,
   * „Starship" i „Raptor" nie.
   */
  nazwa?: string;
  krotki: string;
  tresc: string[];
  /** Etykiety faktów, w kolejności z encji. */
  etykietyFaktow: string[];
  /** Wartości faktów — tylko te, które zawierają słowa; `null` zostawia oryginał. */
  wartosciFaktow?: Array<string | null>;
  ciekawostki: string[];
  os: Array<{ tytul: string; opis: string }>;
  /** Powody powiązań, w kolejności z encji. */
  powody: string[];
}

export type Nakladka = Partial<Record<string, TlumaczenieEncji>>;

export interface NiezgodnoscNakladki {
  encjaId: string;
  pole: string;
  oczekiwano: number;
  jest: number;
}

/** Sprawdza, czy tablice pozycyjne mają tę samą długość co oryginał. */
export function sprawdzNakladke(encje: readonly Encja[], nakladka: Nakladka): NiezgodnoscNakladki[] {
  const bledy: NiezgodnoscNakladki[] = [];

  for (const e of encje) {
    const t = nakladka[e.id];
    if (t === undefined) continue;

    const pary: Array<[string, number, number]> = [
      ['tresc', e.tresc.length, t.tresc.length],
      ['etykietyFaktow', e.fakty.length, t.etykietyFaktow.length],
      ['ciekawostki', e.ciekawostki.length, t.ciekawostki.length],
      ['os', e.os.length, t.os.length],
      ['powody', e.powiazane.length, t.powody.length],
    ];
    if (t.wartosciFaktow !== undefined) {
      pary.push(['wartosciFaktow', e.fakty.length, t.wartosciFaktow.length]);
    }

    for (const [pole, oczekiwano, jest] of pary) {
      if (oczekiwano !== jest) bledy.push({ encjaId: e.id, pole, oczekiwano, jest });
    }
  }
  return bledy;
}

/** Nakłada tłumaczenie na encję. Brak tłumaczenia zwraca oryginał bez zmian. */
export function zastosuj(encja: Encja, tlumaczenie: TlumaczenieEncji | undefined): Encja {
  if (tlumaczenie === undefined) return encja;

  return {
    ...encja,
    ...(tlumaczenie.nazwa !== undefined ? { nazwa: tlumaczenie.nazwa } : {}),
    krotki: tlumaczenie.krotki,
    tresc: tlumaczenie.tresc,
    fakty: encja.fakty.map((f, i) => ({
      ...f,
      etykieta: tlumaczenie.etykietyFaktow[i] ?? f.etykieta,
      wartosc: tlumaczenie.wartosciFaktow?.[i] ?? f.wartosc,
    })),
    ciekawostki: encja.ciekawostki.map((c, i) => ({
      ...c,
      tekst: tlumaczenie.ciekawostki[i] ?? c.tekst,
    })),
    os: encja.os.map((w, i) => {
      const t = tlumaczenie.os[i];
      return t === undefined ? w : { ...w, tytul: t.tytul, opis: t.opis };
    }),
    powiazane: encja.powiazane.map((p, i) => ({
      ...p,
      powod: tlumaczenie.powody[i] ?? p.powod,
    })),
  };
}
