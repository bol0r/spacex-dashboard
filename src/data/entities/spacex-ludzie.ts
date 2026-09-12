import type { Encja } from '../types';
import { Z } from '../zrodla';

export const ludzie: Encja[] = [
  {
    id: 'gwynne-shotwell',
    typ: 'osoba',
    nazwa: 'Gwynne Shotwell',
    aka: ['Shotwell', 'prezeska SpaceX'],
    krotki: 'Prezeska i dyrektorka operacyjna SpaceX — prowadzi firmę na co dzień i odpowiada za wszystkie relacje z klientami.',
    tresc: [
      'Shotwell skończyła Northwestern University: licencjat z inżynierii mechanicznej i magisterium z matematyki stosowanej. Na inżynierię trafiła po panelu Society of Women Engineers, na który poszła jeszcze w liceum — kosmos początkowo w ogóle jej nie interesował.',
      'Zanim trafiła do [[spacex|SpaceX]], przepracowała dekadę w Aerospace Corporation w El Segundo, od 1988 roku, przy wojskowych programach badawczo-rozwojowych — analiza termiczna, inżynieria systemów, zarządzanie projektami. W 1998 przeszła do niewielkiej firmy rakietowej Microcosm jako dyrektorka działu systemów kosmicznych i członkini komitetu wykonawczego.',
      'Do SpaceX weszła we wrześniu 2002 roku, kilka miesięcy po założeniu firmy. Wprowadził ją Hans Koenigsmann, kolega z Microcosm. W grudniu 2008, po wynegocjowaniu kontraktu z NASA, została prezeską. Dziś odpowiada za bieżące operacje i wszystkie relacje handlowe — podczas gdy [[elon-musk|Musk]] zajmuje się inżynierią i kierunkiem.',
      'To podział, który wyjaśnia, jak firma wytrzymała dwie dekady jednoczesnego prowadzenia [[falcon-9|Falcona 9]] jako produktu i [[starship|Starshipa]] jako eksperymentu. Jedno wymaga przewidywalności i terminów, drugie — gotowości na rozbicie rakiety.',
    ],
    fakty: [
      { etykieta: 'Stanowisko', wartosc: 'prezeska i dyrektorka operacyjna SpaceX', pewnosc: 'potwierdzone' },
      { etykieta: 'W SpaceX od', wartosc: 'września 2002', pewnosc: 'potwierdzone' },
      { etykieta: 'Prezeską od', wartosc: 'grudnia 2008', pewnosc: 'potwierdzone' },
      { etykieta: 'Wykształcenie', wartosc: 'Northwestern University — inżynieria mechaniczna, matematyka stosowana', pewnosc: 'potwierdzone' },
      { etykieta: 'Wcześniej', wartosc: 'Chrysler, Aerospace Corporation (od 1988), Microcosm (od 1998)', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Na pierwsze spotkanie z Muskiem przyszła z radą: SpaceX powinno zatrudnić kogoś na pełny etat do rozwoju biznesu. Dwa tygodnie później sama przyjęła tę pracę. Dziś prowadzi całą firmę.',
        zrodlo: Z.wikiShotwell,
      },
      {
        tekst: 'Rozmowę o pracę w IBM miała w dniu katastrofy promu Challenger. Nie dostała tej posady i trafiła do programu menedżerskiego Chryslera — do branży kosmicznej weszła dopiero kilka lat później.',
        zrodlo: Z.wikiShotwell,
      },
    ],
    os: [
      { data: '2002-09', tytul: 'Dołącza do SpaceX', opis: 'Przychodzi z Microcosm, wprowadzona przez Hansa Koenigsmanna.', waga: 2 },
      { data: '2008-12', tytul: 'Zostaje prezeską', opis: 'Awans po wynegocjowaniu kontraktu z NASA, który uratował firmę.', waga: 3 },
    ],
    powiazane: [
      { id: 'spacex', powod: 'prowadzi firmę na co dzień jako prezeska i COO' },
      { id: 'elon-musk', powod: 'dzieli z nim kierowanie firmą — on inżynieria, ona operacje i klienci' },
      { id: 'falcon-9', powod: 'odpowiada za stronę handlową programu, który utrzymuje firmę' },
    ],
    zrodla: [Z.wikiShotwell, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },
];
