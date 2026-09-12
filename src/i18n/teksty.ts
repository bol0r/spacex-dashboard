/**
 * Słownik interfejsu. Tylko teksty UI — treść encji ma osobny mechanizm
 * nakładek w src/data/tlumaczenia/, bo tam liczy się weryfikacja źródeł,
 * a nie samo tłumaczenie.
 */

import type { Jezyk, Pewnosc, Sekcja, Typ } from '../data/types';

export type { Jezyk };
export const JEZYKI: Jezyk[] = ['pl', 'en'];

export const NAZWY_JEZYKOW: Record<Jezyk, string> = { pl: 'Polski', en: 'English' };

interface Slownik {
  tytul: string;
  podtytul: string;
  zastrzezenie: string;
  zastrzezenieKrotko: string;
  zrodlaOpis: string;
  sekcje: Record<Sekcja, string>;
  sekcjeKrotko: Record<Sekcja, string>;
  typy: Record<Typ, string>;
  statusy: Record<'aktywne' | 'historyczne' | 'w rozwoju' | 'anulowane', string>;
  pewnosci: Record<Pewnosc, string>;
  nawigacjaSekcje: string;
  stanNa: string;
  zaDni: (n: number) => string;
  lotyTestowe: (n: number) => string;
  ostatniKamien: string;
  osCzasu: string;
  wydarzenia: (n: number) => string;
  przesunWPoziomie: string;
  ciekawostkaDnia: string;
  pojecieDnia: string;
  ciekawostka: string;
  najwazniejszeLiczby: string;
  prowadziDalej: string;
  skadToWiem: string;
  zamknijArkusz: string;
  sciezkaWejscia: string;
  zaktualizowano: string;
  dostep: string;
  tylkoPoPolsku: string;
  jezyk: string;
  wczytywanie: string;
}

/** Polska odmiana: 1 / 2–4 / 5+. */
function pl3(n: number, formy: readonly [string, string, string]): string {
  const abs = Math.abs(n);
  if (abs === 1) return formy[0];
  const d = abs % 100;
  const j = abs % 10;
  return j >= 2 && j <= 4 && (d < 12 || d > 14) ? formy[1] : formy[2];
}

const PL: Slownik = {
  tytul: 'Strefa Wiedzy',
  podtytul: 'SpaceX i reszta imperium Muska. Każde pojęcie w tekście jest klikalne.',
  zastrzezenie:
    'Projekt niezależny, edukacyjny i niekomercyjny. Nie jest powiązany ze SpaceX, Teslą, '
    + 'X Corp., xAI, Neuralinkiem, The Boring Company ani z Elonem Muskiem i nie jest przez '
    + 'nikogo z nich prowadzony, sponsorowany ani zatwierdzony. Nazwy własne, znaki towarowe '
    + 'i marki należą do ich właścicieli i użyto ich wyłącznie w celu opisowym. Cała treść '
    + 'pochodzi ze źródeł publicznych, wymienionych w każdym arkuszu w sekcji „Skąd to wiem”.',
  zastrzezenieKrotko: 'Projekt niezależny — nie jest powiązany ze SpaceX',
  zrodlaOpis: 'Źródła każdej encji znajdziesz w jej arkuszu, na dole.',
  sekcje: {
    'spacex': 'Rakiety i silniki',
    'misje': 'Misje i przełomy',
    'miejsca': 'Miejsca',
    'ludzie': 'Ludzie',
    'tesla': 'Tesla',
    'reszta-imperium': 'Reszta imperium',
    'slownik': 'Słownik',
  },
  sekcjeKrotko: {
    'spacex': 'Rakiety', 'misje': 'Misje', 'miejsca': 'Miejsca', 'ludzie': 'Ludzie',
    'tesla': 'Tesla', 'reszta-imperium': 'Imperium', 'slownik': 'Słownik',
  },
  typy: {
    rakieta: 'rakieta', silnik: 'silnik', statek: 'statek', misja: 'misja',
    wydarzenie: 'wydarzenie', osoba: 'osoba', firma: 'firma', miejsce: 'miejsce',
    technologia: 'technologia', produkt: 'produkt', pojecie: 'pojęcie',
  },
  statusy: {
    'aktywne': 'aktywne', 'historyczne': 'historyczne',
    'w rozwoju': 'w rozwoju', 'anulowane': 'anulowane',
  },
  pewnosci: { potwierdzone: 'potwierdzone', szacunkowe: 'szacunkowe', sporne: 'sporne' },
  nawigacjaSekcje: 'Sekcje',
  stanNa: 'stan na',
  zaDni: (n) => `za ${n} ${n === 1 ? 'dzień' : 'dni'}`,
  lotyTestowe: (n) => `${n} ${pl3(n, ['lot testowy', 'loty testowe', 'lotów testowych'])}`,
  ostatniKamien: 'Ostatni kamień milowy',
  osCzasu: 'Oś czasu',
  wydarzenia: (n) => `${n} ${pl3(n, ['wydarzenie', 'wydarzenia', 'wydarzeń'])}`,
  przesunWPoziomie: 'przesuń w poziomie',
  ciekawostkaDnia: 'Ciekawostka dnia',
  pojecieDnia: 'Pojęcie dnia',
  ciekawostka: 'Ciekawostka',
  najwazniejszeLiczby: 'Najważniejsze liczby',
  prowadziDalej: 'Prowadzi dalej',
  skadToWiem: 'Skąd to wiem',
  zamknijArkusz: 'Zamknij arkusz',
  sciezkaWejscia: 'Ścieżka wejścia',
  zaktualizowano: 'Encja zaktualizowana',
  dostep: 'dostęp',
  tylkoPoPolsku: 'Tekst na razie tylko po polsku',
  jezyk: 'Język',
  wczytywanie: 'Wczytywanie bazy…',
};

const EN: Slownik = {
  tytul: 'Knowledge Zone',
  podtytul: "SpaceX and the rest of Musk's empire. Every term in the text is tappable.",
  zastrzezenie:
    'An independent, educational, non-commercial project. It is not affiliated with SpaceX, '
    + 'Tesla, X Corp., xAI, Neuralink, The Boring Company or Elon Musk, and is not run, '
    + 'sponsored or endorsed by any of them. Names, trademarks and brands belong to their '
    + 'respective owners and are used for descriptive purposes only. All content comes from '
    + 'public sources, listed in every sheet under “How I know this”.',
  zastrzezenieKrotko: 'Independent project — not affiliated with SpaceX',
  zrodlaOpis: 'Sources for each entry are listed at the bottom of its sheet.',
  sekcje: {
    'spacex': 'Rockets and engines',
    'misje': 'Missions and turning points',
    'miejsca': 'Places',
    'ludzie': 'People',
    'tesla': 'Tesla',
    'reszta-imperium': 'The rest of the empire',
    'slownik': 'Glossary',
  },
  sekcjeKrotko: {
    'spacex': 'Rockets', 'misje': 'Missions', 'miejsca': 'Places', 'ludzie': 'People',
    'tesla': 'Tesla', 'reszta-imperium': 'Empire', 'slownik': 'Glossary',
  },
  typy: {
    rakieta: 'rocket', silnik: 'engine', statek: 'spacecraft', misja: 'mission',
    wydarzenie: 'event', osoba: 'person', firma: 'company', miejsce: 'place',
    technologia: 'technology', produkt: 'product', pojecie: 'concept',
  },
  statusy: {
    'aktywne': 'active', 'historyczne': 'historical',
    'w rozwoju': 'in development', 'anulowane': 'cancelled',
  },
  pewnosci: { potwierdzone: 'confirmed', szacunkowe: 'estimated', sporne: 'disputed' },
  nawigacjaSekcje: 'Sections',
  stanNa: 'as of',
  zaDni: (n) => `in ${n} ${n === 1 ? 'day' : 'days'}`,
  lotyTestowe: (n) => `${n} test ${n === 1 ? 'flight' : 'flights'}`,
  ostatniKamien: 'Latest milestone',
  osCzasu: 'Timeline',
  wydarzenia: (n) => `${n} ${n === 1 ? 'event' : 'events'}`,
  przesunWPoziomie: 'drag sideways',
  ciekawostkaDnia: 'Fact of the day',
  pojecieDnia: 'Term of the day',
  ciekawostka: 'Did you know',
  najwazniejszeLiczby: 'Key numbers',
  prowadziDalej: 'Leads on to',
  skadToWiem: 'How I know this',
  zamknijArkusz: 'Close sheet',
  sciezkaWejscia: 'Trail',
  zaktualizowano: 'Entry updated',
  dostep: 'accessed',
  tylkoPoPolsku: 'Text currently available in Polish only',
  jezyk: 'Language',
  wczytywanie: 'Loading…',
};

export const SLOWNIKI: Record<Jezyk, Slownik> = { pl: PL, en: EN };
export type { Slownik };
