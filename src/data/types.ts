/**
 * Kontrakt danych Strefy Wiedzy — Musk / SpaceX.
 *
 * Sekcja A to kontrakt z briefu. Nie zmieniamy go bez zgody właściciela projektu.
 * Sekcja B to typy pochodne (indeks, baza, wynik walidacji) — służą wyłącznie
 * warstwie budującej, nie zmieniają kształtu treści pisanej ręcznie.
 */

/* ========================================================================== */
/* A. KONTRAKT — nie zmieniać bez zapytania                                   */
/* ========================================================================== */

export type Typ =
  | 'rakieta' | 'silnik' | 'statek' | 'misja' | 'wydarzenie'
  | 'osoba' | 'firma' | 'miejsce' | 'technologia' | 'produkt' | 'pojecie';

export type Pewnosc = 'potwierdzone' | 'szacunkowe' | 'sporne';

export interface Zrodlo {
  tytul: string;
  url: string;
  wydawca: string;        // np. "SpaceX", "NASA", "Ars Technica"
  dostep: string;         // ISO date
}

export interface Fakt {
  etykieta: string;       // "Ciąg przy starcie"
  wartosc: string;        // "7 607 kN"
  stanNa?: string;        // ISO — obowiązkowe dla liczb, które rosną
  pewnosc: Pewnosc;
}

export interface Ciekawostka {
  tekst: string;          // 1–3 zdania, puenta na końcu
  zrodlo: Zrodlo;
}

export interface Wydarzenie {
  data: string;           // ISO; dopuszczalne "2002-03" i "2002"
  tytul: string;
  opis: string;
  waga: 1 | 2 | 3;        // 3 = kamień milowy widoczny na globalnej osi czasu
}

export interface Powiazanie {
  id: string;
  powod: string;          // "napędza", "poprzednik", "kierowała programem" — nigdy "powiązane"
}

export interface Encja {
  id: string;                    // slug: 'falcon-9-block-5'
  typ: Typ;
  nazwa: string;
  aka?: string[];                // synonimy do wyszukiwarki
  krotki: string;                // ≤ 140 znaków, pełne zdanie, bez "to jest"
  tresc: string[];               // 3–6 akapitów, w tekście linki [[id]]
  fakty: Fakt[];                 // 3–8
  ciekawostki: Ciekawostka[];    // ≥ 1
  os: Wydarzenie[];              // ≥ 1
  powiazane: Powiazanie[];       // ≥ 3
  status?: 'aktywne' | 'historyczne' | 'w rozwoju' | 'anulowane';
  zrodla: Zrodlo[];              // ≥ 2
  zaktualizowano: string;        // ISO
}

/* ========================================================================== */
/* B. TYPY POCHODNE — warstwa budująca i walidator                            */
/* ========================================================================== */

/** Kategoria = jeden plik w src/data/entities/, jeden chunk ładowany leniwie. */
export type Kategoria =
  | 'spacex-rakiety'
  | 'spacex-misje'
  | 'spacex-silniki'
  | 'spacex-miejsca'
  | 'spacex-ludzie'
  | 'tesla'
  | 'musk-i-reszta'
  | 'pojecia';

/** Sekcja ekranu głównego. Nie pokrywa się 1:1 z kategorią — to widok, nie plik. */
export type Sekcja =
  | 'spacex' | 'misje' | 'miejsca' | 'ludzie' | 'tesla' | 'reszta-imperium' | 'slownik';

/** Encja po przejściu przez indeks: z domkniętymi relacjami i metadanymi. */
export interface EncjaZIndeksem extends Encja {
  kategoria: Kategoria;
  /** Relacje wychodzące zadeklarowane ręcznie w `powiazane`. */
  wychodzace: Powiazanie[];
  /** Relacje przychodzące — inne encje, które wskazują na tę. */
  przychodzace: Powiazanie[];
  /** Identyfikatory wyciągnięte z [[id]] w polu `tresc`. */
  linkiWTresci: string[];
}

export interface IndeksRelacji {
  /** id encji → lista id, które ją wymieniają (w `powiazane` albo w `tresc`). */
  przychodzace: Record<string, Powiazanie[]>;
  /** id encji → lista id wymienionych w jej `tresc` jako [[id]]. */
  linkiWTresci: Record<string, string[]>;
}

export interface BazaWiedzy {
  encje: Record<string, EncjaZIndeksem>;
  kolejnosc: string[];
  indeks: IndeksRelacji;
  /** Wszystkie wydarzenia z wszystkich encji, posortowane — pod globalną oś czasu. */
  osGlobalna: Array<Wydarzenie & { encjaId: string }>;
}

/* --- Walidator ------------------------------------------------------------ */

export type KodBledu =
  | 'DUPLIKAT_ID'
  | 'LINK_DO_NIEISTNIEJACEJ'      // [[id]] albo powiazane.id bez encji
  | 'ZA_MALO_POWIAZAN'            // < 3
  | 'BRAK_CIEKAWOSTKI'
  | 'ZA_MALO_ZRODEL'              // < 2
  | 'KROTKI_ZA_DLUGI'             // > 140 znaków
  | 'BRAK_WYDARZENIA'             // os.length < 1
  | 'ZLA_LICZBA_FAKTOW'           // poza 3–8
  | 'ZLA_LICZBA_AKAPITOW'         // poza 3–6
  | 'PUSTY_POWOD'                 // powod pusty albo "powiązane"
  | 'BRAK_STAN_NA'                // fakt z liczbą zmienną bez stanNa
  | 'ZLY_FORMAT_DATY'
  | 'URL_NIEPOPRAWNY';

export type WagaBledu = 'blad' | 'ostrzezenie';

export interface Naruszenie {
  kod: KodBledu;
  waga: WagaBledu;
  encjaId: string;
  szczegol: string;
}

export interface WynikWalidacji {
  ok: boolean;
  liczbaEncji: number;
  sredniaLinkowWTresci: number;   // cel: ≥ 6
  naruszenia: Naruszenie[];
}

/* --- Progi używane przez walidator i testy -------------------------------- */

export const LIMITY = {
  krotkiMaxZnakow: 140,
  faktyMin: 3,
  faktyMax: 8,
  akapityMin: 3,
  akapityMax: 6,
  powiazaniaMin: 3,
  zrodlaMin: 2,
  ciekawostkiMin: 1,
  wydarzeniaMin: 1,
  linkiWTresciSredniaMin: 6,
  encjeMin: 180,
} as const;

/** Zabronione wypełniacze w polu `powod` — łapane przez walidator. */
export const ZAKAZANE_POWODY = [
  'powiązane', 'powiazane', 'związane', 'zobacz też', 'inne', 'podobne',
] as const;
