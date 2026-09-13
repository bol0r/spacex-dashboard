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

  {
    id: 'hawthorne',
    typ: 'miejsce',
    nazwa: 'Hawthorne',
    aka: ['fabryka Falcona 9', 'dawna siedziba SpaceX'],
    krotki: 'Hala o powierzchni miliona stóp kwadratowych pod Los Angeles, w której powstają Falcony i z której kieruje się ich lotami.',
    tresc: [
      '[[spacex|SpaceX]] zaczynało w El Segundo, w budynku o powierzchni trzech tysięcy stóp kwadratowych — około dwustu osiemdziesięciu metrów — z kilkoma boksami i mniej niż tuzinem pracowników. Hawthorne było następnym krokiem i przez lata pełniło funkcję siedziby firmy.',
      'W hali mieści się produkcja [[falcon-9|Falcona 9]], biura i centrum kontroli lotów. To stąd prowadzone były między innymi misje załogowe [[crew-dragon|Crew Dragona]], łącznie z [[demo-2|Demo-2]].',
      'Budynek ma własną historię przemysłową: powstał jako zakład Northropa, który od 1966 roku wytwarzał w południowej Kalifornii sekcje kadłuba Boeinga 747. Ten szczegół powtarza się w licznych opisach zakładu, choć trudno go potwierdzić w źródle encyklopedycznym — dlatego jest tu oznaczony jako sporny.',
      'W 2024 roku siedzibę firmy przeniesiono do [[starbase|Starbase]] w Teksasie. Hawthorne dalej obsługuje program Falcona i pozostaje głównym zakładem produkcyjnym rakiet, które latają najczęściej na świecie.',
    ],
    fakty: [
      { etykieta: 'Powierzchnia', wartosc: 'ok. 1 mln stóp kw. (ok. 93 tys. m²)', pewnosc: 'szacunkowe' },
      { etykieta: 'Co się tam dzieje', wartosc: 'produkcja Falcona 9, biura, centrum kontroli lotów', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsza siedziba firmy', wartosc: 'El Segundo, ok. 280 m², mniej niż tuzin osób', pewnosc: 'potwierdzone' },
      { etykieta: 'Wcześniejsze przeznaczenie budynku', wartosc: 'zakład Northropa, sekcje kadłuba Boeinga 747', pewnosc: 'sporne' },
      { etykieta: 'Koniec roli siedziby', wartosc: '2024, przeniesienie do Starbase', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Firma, która dziś startuje częściej niż całe państwa, zaczynała w budynku o powierzchni około dwustu osiemdziesięciu metrów kwadratowych — mniej niż przeciętna hala sportowa — z kilkoma boksami i mniej niż dwunastoma osobami na pokładzie.',
        zrodlo: Z.wikiHistoria,
      },
    ],
    os: [
      { data: '2024', tytul: 'Przeniesienie siedziby', opis: 'Centrala firmy przenosi się do Starbase; Hawthorne zostaje przy Falconie.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'tam powstaje i stamtąd jest prowadzony' },
      { id: 'spacex', powod: 'jej siedziba do 2024 roku' },
      { id: 'starbase', powod: 'przejęło po nim rolę siedziby firmy' },
      { id: 'crew-dragon', powod: 'stąd prowadzi się jego misje załogowe' },
      { id: 'mcgregor', powod: 'każdy silnik zbudowany tutaj jedzie tam na próby' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiHistoria, Z.wikiSpaceX, Z.detroitNews747],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'mcgregor',
    typ: 'miejsce',
    nazwa: 'McGregor',
    aka: ['hamownia w Teksasie', 'test facility'],
    krotki: 'Cztery tysiące akrów w Teksasie, przez które musi przejść każdy silnik zbudowany przez SpaceX — około siedmiu odpaleń dziennie.',
    tresc: [
      'McGregor w Teksasie jest hamownią firmy. Zasada jest bezwyjątkowa: każdy silnik i każdy silniczek manewrowy wyprodukowany przez [[spacex|SpaceX]] musi tam przejść końcowe próby. Testuje się tu również całe pierwsze i drugie stopnie [[falcon-9|Falcona 9]] w ramach odbioru.',
      'Teren ma przeszłość zbrojeniową i rakietową: w czasie drugiej wojny światowej działała tu wytwórnia amunicji Bluebonnet, a później stanowiska badawcze firmy Beal Aerospace. SpaceX wydzierżawiło obiekt w 2003 roku i dokupiło sąsiednie grunty, rozrastając się z 256 do czterech tysięcy akrów do marca 2015.',
      'Liczba stanowisk badawczych rosła razem z produkcją — z siedmiu w październiku 2012 do dwunastu w marcu 2015. Firma określa McGregor jako najbardziej zaawansowaną i najbardziej obciążoną hamownię silników rakietowych na świecie; od uruchomienia wykonano tam ponad siedem tysięcy prób, a w typowy dzień roku 2024 odpalano około siedmiu silników.',
      'To tu we wrześniu 2016 roku odbyło się pierwsze odpalenie [[raptor|Raptora]] — siedem lat przed jego pierwszym lotem. W lipcu 2021 ogłoszono budowę drugiej linii produkcyjnej tego silnika, o docelowej zdolności ośmiuset do tysiąca sztuk rocznie.',
    ],
    fakty: [
      { etykieta: 'Powierzchnia', wartosc: '4 000 akrów, z początkowych 256', stanNa: '2015-03', pewnosc: 'potwierdzone' },
      { etykieta: 'Dzierżawa', wartosc: 'od 2003 roku', pewnosc: 'potwierdzone' },
      { etykieta: 'Wcześniejsze przeznaczenie', wartosc: 'wytwórnia amunicji Bluebonnet, potem Beal Aerospace', pewnosc: 'potwierdzone' },
      { etykieta: 'Stanowiska badawcze', wartosc: '12', stanNa: '2015-03', pewnosc: 'potwierdzone' },
      { etykieta: 'Wykonane próby', wartosc: 'ponad 7 000', stanNa: '2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Tempo', wartosc: 'ok. 7 odpaleń silnika w typowy dzień', stanNa: '2024', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Nie ma silnika, który ominąłby to miejsce. Każdy Merlin, każdy Raptor i każdy silniczek manewrowy zbudowany przez firmę jedzie do Teksasu na próby przed montażem w rakiecie — także wtedy, gdy powstał trzy tysiące kilometrów dalej, w Kalifornii.',
        zrodlo: Z.wikiMcGregor,
      },
    ],
    os: [
      { data: '2003', tytul: 'Dzierżawa terenu', opis: 'SpaceX przejmuje dawne stanowiska Beal Aerospace.', waga: 2 },
      { data: '2016-09-25', tytul: 'Pierwsze odpalenie Raptora', opis: 'Silnik rozwojowy rusza na stanowisku w McGregor.', waga: 3 },
    ],
    powiazane: [
      { id: 'merlin', powod: 'każdy egzemplarz przechodzi tu próby odbiorcze' },
      { id: 'raptor', powod: 'tu odbyło się jego pierwsze odpalenie' },
      { id: 'statyczny-test-ogniowy', powod: 'miejsce prób pojedynczych silników i całych stopni' },
      { id: 'hawthorne', powod: 'silniki jadą tu prosto z tamtejszej produkcji' },
      { id: 'spacex', powod: 'jej jedyna hamownia silników' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiMcGregor, Z.wikiRaptor],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'lc-39a',
    typ: 'miejsce',
    nazwa: 'LC-39A',
    aka: ['Launch Complex 39A', 'stanowisko Apollo 11'],
    krotki: 'Stanowisko, z którego wystartowało Apollo 11 i osiemdziesiąt dwa wahadłowce — dziś dzierżawione przez SpaceX.',
    tresc: [
      'Kompleks zbudowano w latach 1964–1968 pod rakietę Saturn V. Poleciało z niego dwanaście Saturnów, w tym wszystkie załogowe misje Apollo poza Apollo 10 — także Apollo 8, pierwsza załogowa wyprawa wokół Księżyca, i Apollo 11. Ostatni Saturn V wyniósł stąd stację Skylab w maju 1973.',
      'W latach 1981–2011 stanowisko obsłużyło osiemdziesiąt dwa starty wahadłowców, od pierwszego lotu Columbii po ostatni lot Atlantisa. Potem stało nieużywane.',
      '[[spacex|SpaceX]] podpisało dwudziestoletnią dzierżawę na wyłączność 14 kwietnia 2014 roku. Firma dobudowała w 2015 halę montażu poziomego, w której [[falcon-9|Falcony]] składa się na leżąco przed wywiezieniem na stanowisko, a w 2018 ramię dostępu dla załogi, przypominające rękaw lotniskowy.',
      'Pierwszy start SpaceX odbył się stąd 19 lutego 2017. Potem poleciały z tego miejsca [[falcon-heavy-demo|pierwszy Falcon Heavy]] i [[demo-2|Demo-2]] — czyli pierwszy od 2011 roku lot załogowy z terytorium Stanów, ze stanowiska, z którego startowało Apollo 11.',
    ],
    fakty: [
      { etykieta: 'Budowa', wartosc: '1964–1968, pod rakietę Saturn V', pewnosc: 'potwierdzone' },
      { etykieta: 'Starty Saturna V', wartosc: '12, w tym Apollo 8 i Apollo 11', pewnosc: 'potwierdzone' },
      { etykieta: 'Starty wahadłowców', wartosc: '82, w latach 1981–2011', pewnosc: 'potwierdzone' },
      { etykieta: 'Dzierżawa przez SpaceX', wartosc: '14 kwietnia 2014, na 20 lat, na wyłączność', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwszy start SpaceX', wartosc: '19 lutego 2017', pewnosc: 'potwierdzone' },
      { etykieta: 'Przebudowa', wartosc: 'hala montażu poziomego (2015), ramię dostępu dla załogi (2018)', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Behnken i Hurley weszli do Crew Dragona po tym samym ramieniu dostępu, które stoi na stanowisku, skąd Armstrong, Aldrin i Collins startowali do Księżyca. Kompleks, przez dziewięć lat nieużywany, wrócił do roli miejsca, z którego Amerykanie lecą w kosmos.',
        zrodlo: Z.wikiLc39a,
      },
    ],
    os: [
      { data: '1969-07-16', tytul: 'Start Apollo 11', opis: 'Z tego stanowiska rusza pierwsza wyprawa, która wylądowała na Księżycu.', waga: 3 },
      { data: '2014-04-14', tytul: 'Dzierżawa przez SpaceX', opis: 'Firma bierze kompleks na dwadzieścia lat na wyłączność.', waga: 2 },
      { data: '2020-05-30', tytul: 'Demo-2', opis: 'Pierwszy od 2011 roku lot załogowy z terytorium USA — z tego samego stanowiska.', waga: 3 },
    ],
    powiazane: [
      { id: 'demo-2', powod: 'stąd wystartowała ta misja' },
      { id: 'falcon-heavy-demo', powod: 'stąd poleciał pierwszy Falcon Heavy' },
      { id: 'crew-dragon', powod: 'stanowisko przystosowane do lotów załogowych' },
      { id: 'slc-40', powod: 'drugie stanowisko Falcona 9 na Przylądku' },
      { id: 'spacex', powod: 'dzierżawi je od 2014 roku' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiLc39a, Z.nasaDemo2],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'slc-40',
    typ: 'miejsce',
    nazwa: 'SLC-40',
    aka: ['Space Launch Complex 40'],
    krotki: 'Najbardziej obciążone stanowisko Falcona 9 — ponad 340 startów, po drodze zniszczone wybuchem i odbudowane w rok.',
    tresc: [
      'Stanowisko zbudowały siły powietrzne pod rakiety Titan III z dopalaczami na paliwo stałe. Przez lata obsłużyło pięćdziesiąt pięć startów Titanów różnych odmian; ostatni odbył się 30 kwietnia 2005 roku.',
      '[[spacex|SpaceX]] wydzierżawiło je w kwietniu 2007. Pierwszy [[falcon-9|Falcon 9]] poleciał stąd w czerwcu 2010, z makietą ładunku.',
      'Pierwszego września 2016 roku stanowisko zostało poważnie uszkodzone przez [[amos-6|eksplozję podczas tankowania]] przed statycznym testem ogniowym. Naprawy i modernizacja ruszyły na początku 2017, a stanowisko wróciło do służby w grudniu tego samego roku — rok i kwartał od zdarzenia.',
      'Na początku 2023 roku dobudowano wieżę dostępu dla załogi, użytą po raz pierwszy na początku 2024. Według stanu na sierpień 2026 stanowisko obsłużyło ponad trzysta czterdzieści startów Falcona 9.',
    ],
    fakty: [
      { etykieta: 'Pierwotne przeznaczenie', wartosc: 'rakiety Titan III', pewnosc: 'potwierdzone' },
      { etykieta: 'Starty Titanów', wartosc: '55, ostatni 30 kwietnia 2005', pewnosc: 'potwierdzone' },
      { etykieta: 'Dzierżawa przez SpaceX', wartosc: 'kwiecień 2007', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwszy start Falcona 9', wartosc: 'czerwiec 2010', pewnosc: 'potwierdzone' },
      { etykieta: 'Przerwa po eksplozji', wartosc: 'wrzesień 2016 – grudzień 2017', pewnosc: 'potwierdzone' },
      { etykieta: 'Starty Falcona 9', wartosc: 'ponad 340', stanNa: '2026-08', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Stanowisko zniszczone eksplozją we wrześniu 2016 wróciło do służby w grudniu 2017 — piętnaście miesięcy od zdarzenia, z modernizacją w pakiecie. Dla porównania: sam program dochodzeniowy po awariach rakiet potrafi trwać dłużej niż odbudowa stanowiska.',
        zrodlo: Z.wikiSlc40,
      },
    ],
    os: [
      { data: '2010-06', tytul: 'Pierwszy Falcon 9', opis: 'Debiut rakiety odbywa się właśnie z tego stanowiska.', waga: 3 },
      { data: '2016-09-01', tytul: 'Zniszczenie stanowiska', opis: 'Eksplozja podczas tankowania uszkadza kompleks.', waga: 3 },
      { data: '2017-12', tytul: 'Powrót do służby', opis: 'Po naprawie i modernizacji stanowisko znów przyjmuje starty.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'jego najbardziej obciążone stanowisko startowe' },
      { id: 'amos-6', powod: 'eksplozja, która je zniszczyła' },
      { id: 'lc-39a', powod: 'drugie stanowisko Falcona 9 na Przylądku' },
      { id: 'kadencja-startow', powod: 'większość startów tej rakiety odbywa się właśnie stąd' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiSlc40, Z.wikiAmos6],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'strefy-ladowania',
    typ: 'miejsce',
    nazwa: 'Strefy lądowania LZ-1 i LZ-2',
    aka: ['Landing Zone 1', 'Landing Zone 2', 'LC-13'],
    krotki: 'Dwa betonowe kręgi po osiemdziesiąt sześć metrów średnicy, na miejscu zburzonego kompleksu startowego z epoki Atlasa.',
    tresc: [
      'Strefy leżą na terenie dawnego kompleksu startowego LC-13 na Przylądku Canaveral. Kompleks zburzono, a w jego miejsce wylano dwa okrągłe lądowiska o średnicy 282 stóp, czyli osiemdziesięciu sześciu metrów. [[spacex|SpaceX]] wydzierżawiło teren w lutym 2015 roku.',
      'Dwudziestego pierwszego grudnia 2015 roku [[pierwsze-ladowanie|booster B1019 usiadł na LZ-1]] — pierwsze w historii lądowanie pierwszego stopnia rakiety orbitalnej na lądzie. Przy startach [[falcon-heavy|Falcona Heavy]] używa się obu stref jednocześnie, bo oba człony boczne wracają równolegle.',
      'Bilans: LZ-1 zaliczyła pięćdziesiąt cztery lądowania, z czego pięćdziesiąt trzy udane, a LZ-2 dziewiętnaście udanych, według stanu na sierpień 2025.',
      'Pierwszego sierpnia 2025 roku LZ-1 wycofano ze służby. LZ-2 pracuje dalej, a [[spacex|SpaceX]] buduje następne lądowiska przy [[lc-39a|LC-39A]] i [[slc-40|SLC-40]] — bliżej stanowisk startowych, co skraca drogę powrotną członu.',
    ],
    fakty: [
      { etykieta: 'Lokalizacja', wartosc: 'teren dawnego kompleksu LC-13, Przylądek Canaveral', pewnosc: 'potwierdzone' },
      { etykieta: 'Średnica lądowisk', wartosc: '282 stopy (86 m)', pewnosc: 'potwierdzone' },
      { etykieta: 'Dzierżawa', wartosc: 'luty 2015', pewnosc: 'potwierdzone' },
      { etykieta: 'Lądowania na LZ-1', wartosc: '54, w tym 53 udane', stanNa: '2025-08', pewnosc: 'potwierdzone' },
      { etykieta: 'Lądowania na LZ-2', wartosc: '19 udanych', stanNa: '2025-08', pewnosc: 'potwierdzone' },
      { etykieta: 'Wycofanie LZ-1', wartosc: '1 sierpnia 2025', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Lądowiska wylano na gruzach kompleksu LC-13, z którego startowały rakiety Atlas. Miejsce, w którym przez dekady rakiety wyłącznie odlatywały, zostało zburzone i przerobione na miejsce, do którego wracają.',
        zrodlo: Z.wikiStrefy,
      },
    ],
    os: [
      { data: '2015-02', tytul: 'Dzierżawa terenu', opis: 'SpaceX przejmuje teren dawnego kompleksu LC-13.', waga: 2 },
      { data: '2015-12-21', tytul: 'Pierwsze lądowanie', opis: 'Booster B1019 siada na LZ-1 po wyniesieniu satelitów Orbcomm.', waga: 3 },
      { data: '2025-08-01', tytul: 'Wycofanie LZ-1', opis: 'Pierwsze lądowisko w historii kończy służbę.', waga: 2 },
    ],
    powiazane: [
      { id: 'pierwsze-ladowanie', powod: 'tam odbyło się pierwsze udane przyziemienie członu' },
      { id: 'falcon-heavy', powod: 'przy jego startach używa się obu stref jednocześnie' },
      { id: 'barki-dronowe', powod: 'uzupełniają się — barki obsługują loty, z których nie da się wrócić nad brzeg' },
      { id: 'reuzywalnosc', powod: 'pierwsze miejsce, w którym stała się faktem' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiStrefy, Z.snewsOrbcomm],
    zaktualizowano: '2026-09-13',
  },
];
