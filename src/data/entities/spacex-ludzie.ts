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

  {
    id: 'jared-isaacman',
    typ: 'osoba',
    nazwa: 'Jared Isaacman',
    aka: ['Isaacman'],
    krotki: 'Przedsiębiorca, który kupił i poprowadził dwie prywatne misje orbitalne, a przy drugiej wyszedł na zewnątrz statku.',
    tresc: [
      'Isaacman zbudował firmę płatniczą Shift4 Payments, a potem zrobił rzecz, której wcześniej nikt nie robił: kupił cały lot orbitalny i sam go poprowadził jako dowódca. Pierwszym była [[inspiration4|Inspiration4]] w 2021 roku, z załogą bez żadnego zawodowego astronauty na pokładzie.',
      'Trzy lata później poleciał ponownie, tym razem w ramach [[polaris-dawn|Polaris Dawn]]. Ta misja sięgnęła 1 400 kilometrów — najdalej od Ziemi, jak człowiek znalazł się od czasu Apollo — i zakończyła się pierwszym komercyjnym spacerem kosmicznym. Isaacman wyszedł ze [[crew-dragon|Crew Dragona]] na siedem minut i pięćdziesiąt sześć sekund.',
      'Obie misje miały wymiar zbiórkowy. Przy Inspiration4 on i jego żona przekazali 125 milionów dolarów na szpital St. Jude; łącznie misja zebrała ponad 243 miliony. To odwrócenie klasycznego schematu turystyki kosmicznej, w którym pieniądze płyną wyłącznie w jedną stronę.',
    ],
    fakty: [
      { etykieta: 'Loty orbitalne', wartosc: '2 — Inspiration4 i Polaris Dawn', stanNa: '2026-09-12', pewnosc: 'potwierdzone' },
      { etykieta: 'Firma', wartosc: 'Shift4 Payments', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas poza statkiem', wartosc: '7 min 56 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Najwyższa osiągnięta orbita', wartosc: '1 400 km', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przy spacerze kosmicznym z Polaris Dawn nie było śluzy — [[crew-dragon|Crew Dragon]] jej nie ma. Rozhermetyzowano całą kapsułę, więc wszyscy czterej członkowie załogi byli jednocześnie wystawieni na próżnię, w tym dwoje, które w ogóle nie wychodziło.',
        zrodlo: Z.wikiPolarisDawn,
      },
    ],
    os: [
      { data: '2021-09-16', tytul: 'Inspiration4', opis: 'Dowodzi pierwszą orbitalną misją bez zawodowego astronauty na pokładzie.', waga: 3 },
      { data: '2024-09-10', tytul: 'Polaris Dawn', opis: 'Drugi lot, rekord wysokości i pierwszy komercyjny spacer kosmiczny.', waga: 3 },
    ],
    powiazane: [
      { id: 'inspiration4', powod: 'kupił tę misję i był jej dowódcą' },
      { id: 'polaris-dawn', powod: 'dowodził nią i wykonał pierwszy komercyjny spacer kosmiczny' },
      { id: 'crew-dragon', powod: 'oba jego loty odbyły się w tej kapsule' },
      { id: 'sarah-gillis', powod: 'wyszła ze statku razem z nim podczas Polaris Dawn' },
    ],
    zrodla: [Z.wikiInspiration4, Z.wikiPolarisDawn],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'sarah-gillis',
    typ: 'osoba',
    nazwa: 'Sarah Gillis',
    aka: ['Gillis'],
    krotki: 'Inżynierka SpaceX, która szkoliła astronautów, a potem sama wyszła ze statku — najmłodsza osoba na spacerze kosmicznym.',
    tresc: [
      'Gillis pracuje w [[spacex|SpaceX]] jako inżynierka operacji kosmicznych i przez lata odpowiadała za szkolenie załóg lecących w [[crew-dragon|Crew Dragonie]] — w tym tych, które startowały przed nią. W 2024 roku znalazła się po drugiej stronie: poleciała jako specjalistka misji [[polaris-dawn|Polaris Dawn]].',
      'Podczas tej misji wyszła na zewnątrz statku na siedem minut i piętnaście sekund. Miała wtedy trzydzieści lat, co czyni ją najmłodszą osobą, która kiedykolwiek uczestniczyła w spacerze kosmicznym.',
      'Jej rola mówi coś o tym, jak zmienił się zawód astronauty. Nie przeszła przez wojsko ani przez agencję kosmiczną — przeszła przez firmę, która buduje statki, i wsiadła do tego, który współtworzyła.',
    ],
    fakty: [
      { etykieta: 'Stanowisko', wartosc: 'inżynierka operacji kosmicznych w SpaceX', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwszy lot', wartosc: 'Polaris Dawn, 10 września 2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas poza statkiem', wartosc: '7 min 15 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Wiek w chwili spaceru', wartosc: '30 lat — najmłodsza w historii', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przed własnym lotem szkoliła astronautów NASA do misji w Crew Dragonie. Kiedy sama wsiadła do kapsuły, robiła to jako osoba, która wcześniej uczyła innych, co w niej robić.',
        zrodlo: Z.wikiPolarisDawn,
      },
    ],
    os: [
      { data: '2024-09-10', tytul: 'Polaris Dawn', opis: 'Leci jako specjalistka misji i wychodzi na zewnątrz statku.', waga: 3 },
    ],
    powiazane: [
      { id: 'polaris-dawn', powod: 'jej pierwszy lot i pierwszy komercyjny spacer kosmiczny' },
      { id: 'jared-isaacman', powod: 'wyszedł ze statku razem z nią' },
      { id: 'crew-dragon', powod: 'szkoliła załogi tej kapsuły, zanim sama nią poleciała' },
      { id: 'spacex', powod: 'jej pracodawca — poleciała jako inżynierka firmy, nie astronautka agencji' },
    ],
    zrodla: [Z.wikiPolarisDawn, Z.wikiDragon2],
    zaktualizowano: '2026-09-12',
  },
];
