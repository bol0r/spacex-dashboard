import type { Encja } from '../types';
import { Z } from '../zrodla';

export const miejsca: Encja[] = [
  {
    id: 'starbase',
    typ: 'miejsce',
    nazwa: 'Starbase',
    aka: ['Boca Chica', 'South Texas Launch Site'],
    krotki: 'Fabryka, kosmodrom i od 2025 roku pełnoprawne miasto w Teksasie — jedyne w USA, którego burmistrzem jest wiceprezes firmy.',
    tresc: [
      'Miejsce, w którym powstaje i z którego startuje [[starship|Starship]], leży na płaskim skrawku wybrzeża przy granicy z Meksykiem. [[spacex|SpaceX]] zaczęło skupować tam ziemię w 2012 roku, a w sierpniu 2014 oficjalnie ogłosiło wybór lokalizacji pod kosmodrom — centrum kontroli w osadzie, stanowiska startowe dwie mile na wschód.',
      'Teren wybrano dlatego, że nie było tam praktycznie nikogo. [[elon-musk|Musk]] uzasadnił to bez owijania: mają mnóstwo ziemi i nikogo dookoła, więc jeśli coś wybuchnie, nie ma problemu. Przy programie, w którym kilka pierwszych rakiet faktycznie się rozpadło, było to założenie projektowe, nie żart.',
      'Historia tego miejsca jest krótka i pechowa. Osadę Kennedy Shores założono w 1967 roku i w tym samym roku zniszczył ją huragan Beulah. Do 2008 zostało w niej sześciu stałych mieszkańców. We wrześniu 2019 SpaceX zaproponowało pozostałym trzykrotność wartości rynkowej ich domów.',
      'Dwudziestego maja 2025 roku Starbase stało się formalnie miastem, po głosowaniu mieszkańców 3 maja. Liczy około pięciuset osób. Burmistrzem jest Bobby Peden, wiceprezes SpaceX — startował bez kontrkandydata, podobnie jak dwoje komisarzy, również związanych z firmą. Na 2026 rok zaplanowano przyłączenie kolejnych 7 133 akrów. Od 2024 roku to także oficjalna siedziba spółki.',
    ],
    fakty: [
      { etykieta: 'Status', wartosc: 'miasto od 20 maja 2025, po głosowaniu 3 maja', pewnosc: 'potwierdzone' },
      { etykieta: 'Liczba mieszkańców', wartosc: 'ok. 500', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Burmistrz', wartosc: 'Bobby Peden, wiceprezes SpaceX', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Początek skupu ziemi', wartosc: '2012', pewnosc: 'potwierdzone' },
      { etykieta: 'Ogłoszenie lokalizacji', wartosc: 'sierpień 2014', pewnosc: 'potwierdzone' },
      { etykieta: 'Planowana aneksja', wartosc: '7 133 akry', stanNa: '2026', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Zanim pojawiło się tu SpaceX, była to osada widmo. Kennedy Shores założono w 1967 roku i zrównał ją z ziemią huragan w tym samym roku; do 2008 mieszkało tam sześć osób. Dziś ta sama gmina ma burmistrza, komisarzy i plan przyłączenia siedmiu tysięcy akrów.',
        zrodlo: Z.wikiStarbase,
      },
    ],
    os: [
      { data: '2014-08', tytul: 'Wybór lokalizacji', opis: 'SpaceX ogłasza Boca Chica jako miejsce swojego kosmodromu w południowym Teksasie.', waga: 2 },
      { data: '2025-05-20', tytul: 'Starbase miastem', opis: 'Osada zostaje formalnie inkorporowana jako miasto typu C.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship', powod: 'tam jest budowany i stamtąd startuje' },
      { id: 'super-heavy', powod: 'stoi tu wieża, która go łapie po locie' },
      { id: 'spacex', powod: 'oficjalna siedziba spółki od 2024 roku' },
      { id: 'elon-musk', powod: 'osobiście wybrał tę lokalizację ze względu na pustkę wokół' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiStarbase, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },
];
