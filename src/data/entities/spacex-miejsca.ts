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

  {
    id: 'barki-dronowe',
    typ: 'miejsce',
    nazwa: 'Barki dronowe',
    aka: ['droneship', 'ASDS', 'Of Course I Still Love You', 'Just Read the Instructions', 'A Shortfall of Gravitas'],
    krotki: 'Bezzałogowe platformy, na których lądują pierwsze stopnie wracające z lotów zbyt szybkich, by wrócić nad brzeg.',
    tresc: [
      'Nie każdy lot pozwala odzyskać człon nośny na lądzie. Jeśli rakieta leci wysoko i szybko — na orbitę transferową albo z ciężkim ładunkiem — booster nie ma już paliwa, żeby zawrócić nad wybrzeże. Wtedy [[falcon-9|Falcon 9]] ląduje na pływającej platformie ustawionej setki kilometrów w oceanie.',
      'Platforma jest barką z własnym napędem i systemem utrzymywania pozycji, obsługiwaną bez załogi na pokładzie w chwili lądowania. [[pierwsze-ladowanie-na-barce|Pierwsze udane przyziemienie na wodzie]] odbyło się 8 kwietnia 2016 roku, podczas misji zaopatrzeniowej CRS-8, na jednostce „Of Course I Still Love You" trzysta kilometrów od brzegu Florydy. Ten sam egzemplarz boostera poleciał rok później w misji [[ses-10|SES-10]].',
      'Barki są dziś rutyną i właśnie dlatego są ciekawe: to one, a nie betonowe stanowiska, wykonują większość lądowań, które czynią [[reuzywalnosc|reużywalność]] opłacalną. Bez nich odzysk ograniczałby się do najlżejszych misji.',
    ],
    fakty: [
      { etykieta: 'Kiedy się ich używa', wartosc: 'gdy booster nie ma paliwa na powrót nad brzeg', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsze udane lądowanie', wartosc: '8 kwietnia 2016, misja CRS-8', pewnosc: 'potwierdzone' },
      { etykieta: 'Odległość od brzegu', wartosc: 'ok. 300 km przy CRS-8', pewnosc: 'potwierdzone' },
      { etykieta: 'Obsada w chwili lądowania', wartosc: 'bezzałogowa', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Nazwy barek to imiona statków z cyklu Kultura Iaina M. Banksa: „Just Read the Instructions", „Of Course I Still Love You" i „A Shortfall of Gravitas". Pierwsze dwa pochodzą z „Gracza"; Musk ogłosił je jako pośmiertny ukłon w stronę pisarza. W powieściach to nazwy własne świadomych okrętów — w rzeczywistości noszą je bezzałogowe barki, które same utrzymują pozycję na oceanie.',
        zrodlo: Z.spaceBarki,
      },
    ],
    os: [
      { data: '2016-04-08', tytul: 'Pierwsze lądowanie na wodzie', opis: 'Booster misji CRS-8 siada na „Of Course I Still Love You".', waga: 3 },
      { data: '2018-02-12', tytul: 'Trzecia barka', opis: 'Musk ogłasza „A Shortfall of Gravitas".', waga: 1 },
    ],
    powiazane: [
      { id: 'pierwsze-ladowanie-na-barce', powod: 'miejsce pierwszego udanego przyziemienia na wodzie' },
      { id: 'falcon-9', powod: 'lądują na nich jego pierwsze stopnie' },
      { id: 'reuzywalnosc', powod: 'umożliwiają odzysk także z lotów, z których nie da się wrócić nad brzeg' },
      { id: 'spacex', powod: 'część jej flotylli odzyskowej' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiBarki, Z.spaceBarki],
    zaktualizowano: '2026-09-12',
  },
];
