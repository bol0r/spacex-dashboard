import type { Encja } from '../types';
import { Z } from '../zrodla';

export const teslaEncje: Encja[] = [
  {
    id: 'tesla',
    typ: 'firma',
    nazwa: 'Tesla',
    aka: ['Tesla Motors', 'Tesla, Inc.', 'TSLA'],
    krotki: 'Producent samochodów elektrycznych, którego Musk nie założył, ale sfinansował — i o którego założycielstwo poszła sprawa do sądu.',
    tresc: [
      'Tesla Motors została zarejestrowana 1 lipca 2003 roku przez Martina Eberharda i Marca Tarpenninga. [[elon-musk|Musk]] pojawił się dziewięć miesięcy później: w lutym 2004 poprowadził rundę A o wartości 7,5 miliona dolarów, z czego zdecydowaną większość wyłożył sam, i objął stanowisko przewodniczącego rady. Dyrektorem generalnym został w październiku 2008.',
      'Kwestia, kto założył Teslę, skończyła się w sądzie. Ugoda z września 2009 roku ustaliła, że pięć osób może posługiwać się tytułem współzałożyciela: Eberhard, Tarpenning, Ian Wright, Musk i JB Straubel. To rzadki przypadek, w którym status założyciela firmy jest wynikiem porozumienia prawnego, a nie faktu historycznego.',
      'Linia modelowa rozwijała się od góry cennika w dół: Roadster w 2008 roku, Model S w czerwcu 2012, Model X we wrześniu 2015, Model 3 w lipcu 2017, Model Y w marcu 2020 i Cybertruck w listopadzie 2023. Produkcja rozłożyła się na fabryki w Nevadzie, Szanghaju (od grudnia 2019), Berlinie (marzec 2022) i Teksasie (kwiecień 2022).',
      'W 2025 roku Tesla dostarczyła 1,66 miliona pojazdów przy przychodzie 94,83 miliarda dolarów i zysku netto 3,79 miliarda. Firma wielokrotnie przekraczała bilion dolarów kapitalizacji. Jej związek ze [[spacex|SpaceX]] jest wyłącznie osobowy — łączy je ta sama osoba na szczycie, a nie struktura właścicielska. Publicznie zetknęły się raz: gdy Roadster poleciał na [[falcon-heavy|Falconie Heavy]].',
    ],
    fakty: [
      { etykieta: 'Data rejestracji', wartosc: '1 lipca 2003', pewnosc: 'potwierdzone' },
      { etykieta: 'Założyciele', wartosc: 'Martin Eberhard i Marc Tarpenning; pięciu współzałożycieli po ugodzie z 2009', pewnosc: 'sporne' },
      { etykieta: 'Wejście Muska', wartosc: 'luty 2004, runda A o wartości 7,5 mln USD', pewnosc: 'potwierdzone' },
      { etykieta: 'Musk dyrektorem generalnym od', wartosc: 'października 2008', pewnosc: 'potwierdzone' },
      { etykieta: 'Dostarczone pojazdy', wartosc: '1,66 mln', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Przychód', wartosc: '94,83 mld USD', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Zysk netto', wartosc: '3,79 mld USD', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Fabryki', wartosc: 'Nevada, Szanghaj (2019), Berlin (2022), Teksas (2022)', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Sama kwota, którą Musk wyłożył w 2004 roku, jest sporna między źródłami: jedne podają 6,35 miliona dolarów, inne 6,5 miliona przy rundzie wartej 7,5 miliona. Rozbieżność jest drobna, ale pokazuje, jak niepewne bywają liczby z wczesnej historii firmy, którą dziś wycenia się w bilionach.',
        zrodlo: Z.wikiTesla,
      },
    ],
    os: [
      { data: '2003-07-01', tytul: 'Rejestracja spółki', opis: 'Eberhard i Tarpenning zakładają Tesla Motors.', waga: 3 },
      { data: '2004-02', tytul: 'Wejście Muska', opis: 'Prowadzi rundę A i zostaje przewodniczącym rady.', waga: 2 },
      { data: '2009-09', tytul: 'Ugoda o założycielstwo', opis: 'Sąd zatwierdza porozumienie: pięć osób może nazywać się współzałożycielami.', waga: 2 },
      { data: '2017-07', tytul: 'Model 3', opis: 'Pierwszy model masowy wchodzi do produkcji.', waga: 3 },
    ],
    powiazane: [
      { id: 'elon-musk', powod: 'sfinansował ją w 2004 i kieruje nią od 2008' },
      { id: 'falcon-heavy', powod: 'jej Roadster był ładunkiem pierwszego lotu tej rakiety' },
      { id: 'spacex', powod: 'siostrzana firma tego samego człowieka, bez powiązań właścicielskich' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiTesla, Z.wikiMusk],
    zaktualizowano: '2026-09-12',
  },
];
