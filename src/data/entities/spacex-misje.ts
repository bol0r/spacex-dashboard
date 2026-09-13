import type { Encja } from '../types';
import { Z } from '../zrodla';

/** Pięć lotów Falcona 1 — początek firmy i moment, w którym prawie się skończyła. */
const falcon1: Encja[] = [
  {
    id: 'falcon-1-lot-1',
    typ: 'misja',
    nazwa: 'Falcon 1, lot 1',
    aka: ['FalconSAT-2'],
    krotki: 'Pierwszy start SpaceX zakończył się awarią po 33 sekundach, a przyczyną była skorodowana nakrętka.',
    tresc: [
      'Dwudziestego czwartego marca 2006 roku [[falcon-1|Falcon 1]] wystartował po raz pierwszy, z satelitą FalconSAT-2 dla agencji DARPA. Trzydzieści trzy sekundy później silnik [[merlin|Merlin]] przestał pracować i rakieta spadła.',
      'Przyczyna okazała się boleśnie prozaiczna: pękła nakrętka na przewodzie paliwowym. Nie z powodu złego dokręcenia, ale z powodu korozji wywołanej solną mgłą — stanowisko startowe leżało na atolu Kwajalein w środku Pacyfiku.',
      'Dla [[spacex|SpaceX]] była to lekcja o materiałach i o środowisku, w którym trzyma się rakietę przed startem. Firma miała jeszcze trzy szanse, choć wtedy jeszcze o tym nie wiedziała.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '24 marca 2006', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'FalconSAT-2 (DARPA)', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas lotu', wartosc: '33 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Przyczyna', wartosc: 'pęknięcie skorodowanej nakrętki przewodu paliwowego', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rakietę zniszczyła korozja od morskiej mgły — stanowisko startowe leżało na atolu w środku Pacyfiku. Program wart dziesiątki milionów dolarów przegrał z solą w powietrzu.',
        zrodlo: Z.wikiFalcon1,
      },
    ],
    os: [
      { data: '2006-03-24', tytul: 'Start i awaria', opis: 'Silnik gaśnie po 33 sekundach lotu.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-1', powod: 'jego pierwszy lot' },
      { id: 'falcon-1-lot-2', powod: 'następna próba, rok później' },
      { id: 'merlin', powod: 'silnik, którego awaria przerwała lot' },
      { id: 'spacex', powod: 'pierwszy start firmy w jej historii' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFalcon1, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'falcon-1-lot-2',
    typ: 'misja',
    nazwa: 'Falcon 1, lot 2',
    aka: ['DemoSat'],
    krotki: 'Pierwszy stopień zadziałał, ale kołyszące się paliwo w drugim wygasiło silnik na 289 kilometrach.',
    tresc: [
      'Dwudziestego pierwszego marca 2007 roku [[falcon-1|Falcon 1]] poleciał z makietą ładunku o nazwie DemoSat. Pierwszy stopień przepracował całą fazę bez zarzutu — i to był realny postęp wobec [[falcon-1-lot-1|pierwszego lotu]].',
      'Problemy zaczęły się przy rozdzieleniu stopni. Osłona międzystopniowa otarła się o dyszę drugiego stopnia, a potem paliwo zaczęło się w zbiorniku przelewać w rezonansie z konstrukcją. Silnik [[kestrel|Kestrel]] zgasł przedwcześnie, w siódmej minucie lotu.',
      'Rakieta osiągnęła 289 kilometrów — wysokość kosmiczną, ale nie orbitalną. Brakowało prędkości, nie wysokości, a to różnica, którą ten lot pokazał w najbardziej dosłowny sposób.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '21 marca 2007', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'DemoSat — makieta masowa', pewnosc: 'potwierdzone' },
      { etykieta: 'Osiągnięta wysokość', wartosc: '289 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Przyczyna', wartosc: 'kontakt osłony z dyszą i rezonansowe przelewanie paliwa', pewnosc: 'potwierdzone' },
      { etykieta: 'Moment wygaszenia silnika', wartosc: 'T+7 min 30 s', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rakieta doszła na 289 kilometrów, czyli wyżej niż krąży Międzynarodowa Stacja Kosmiczna. Nie weszła jednak na orbitę, bo do orbity potrzebna jest prędkość, nie wysokość — brakowało jej kilku kilometrów na sekundę.',
        zrodlo: Z.wikiFalcon1,
      },
    ],
    os: [
      { data: '2007-03-21', tytul: 'Start i utrata drugiego stopnia', opis: 'Pierwszy stopień pracuje poprawnie, drugi gaśnie przedwcześnie.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-1', powod: 'jego drugi lot' },
      { id: 'falcon-1-lot-1', powod: 'poprzednia próba, przerwana po 33 sekundach' },
      { id: 'falcon-1-lot-3', powod: 'następna próba, z nowym silnikiem pierwszego stopnia' },
      { id: 'kestrel', powod: 'silnik drugiego stopnia, który zgasł przedwcześnie' },
      { id: 'leo', powod: 'lot pokazał różnicę między wysokością kosmiczną a orbitą' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFalcon1, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'falcon-1-lot-3',
    typ: 'misja',
    nazwa: 'Falcon 1, lot 3',
    aka: ['Trailblazer'],
    krotki: 'Resztkowy ciąg dopalającego się pierwszego stopnia dogonił drugi i zderzył się z nim po rozdzieleniu.',
    tresc: [
      'Trzeciego sierpnia 2008 roku [[falcon-1|Falcon 1]] poleciał z satelitą Trailblazer i kilkoma mniejszymi ładunkami, w tym eksperymentalnym żaglem NanoSail-D. W pierwszym stopniu pracował nowy [[merlin|Merlin]] 1C i pracował bez zarzutu.',
      'Awaria wzięła się z czegoś, czego wcześniej nie było: silnik 1C ma chłodzenie regeneracyjne, więc po wyłączeniu jeszcze przez moment dopala resztki paliwa w kanałach. Ten resztkowy ciąg popchnął pierwszy stopień na drugi już po rozdzieleniu. Stopnie zderzyły się i lot się skończył.',
      'Był to trzeci nieudany start z rzędu. [[spacex|SpaceX]] miało wtedy pieniądze na jeszcze jedną rakietę i kryzys finansowy za oknem — sytuację, którą [[falcon-1-lot-4|czwarty lot]] miał albo odwrócić, albo zamknąć.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '3 sierpnia 2008', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunki', wartosc: 'Trailblazer, NanoSail-D, PRESat, Celestis Explorers', pewnosc: 'potwierdzone' },
      { etykieta: 'Przyczyna', wartosc: 'resztkowy ciąg I stopnia i zderzenie stopni po rozdzieleniu', pewnosc: 'potwierdzone' },
      { etykieta: 'Nowość', wartosc: 'pierwszy lot silnika Merlin 1C', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Awarię wywołała zaleta nowego silnika. Merlin 1C ma chłodzenie regeneracyjne, więc po wyłączeniu jeszcze chwilę dopala paliwo pozostałe w kanałach — i właśnie ten resztkowy ciąg dogonił drugi stopień. Poprawa konstrukcji stworzyła problem, którego wcześniejsza wersja mieć nie mogła.',
        zrodlo: Z.wikiFalcon1,
      },
    ],
    os: [
      { data: '2008-08-03', tytul: 'Zderzenie stopni', opis: 'Pierwszy stopień dogania drugi po rozdzieleniu; misja przepada.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-1', powod: 'jego trzeci lot' },
      { id: 'falcon-1-lot-2', powod: 'poprzednia próba, utracona w drugim stopniu' },
      { id: 'falcon-1-lot-4', powod: 'kolejna i — wobec stanu kasy — ostatnia możliwa próba' },
      { id: 'merlin', powod: 'debiut wersji 1C, której chłodzenie regeneracyjne wywołało awarię' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFalcon1, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'falcon-1-lot-4',
    typ: 'misja',
    nazwa: 'Falcon 1, lot 4',
    aka: ['RatSat', 'Ratsat'],
    krotki: 'Lot, który musiał się udać — i pierwsza prywatna rakieta na paliwo ciekłe, która dotarła na orbitę.',
    tresc: [
      'Dwudziestego ósmego września 2008 roku, po trzech porażkach z rzędu, [[falcon-1|Falcon 1]] wyniósł na orbitę 165-kilogramową makietę o nazwie Ratsat. Był to pierwszy przypadek, w którym prywatnie opracowana rakieta na paliwo w pełni ciekłe osiągnęła orbitę. Silnik drugiego stopnia odpalił powtórnie w T+52:34 i uzyskał orbitę 621 × 642 km.',
      'Stawka była dosłownie egzystencjalna. [[elon-musk|Musk]] mówił potem wprost, że pieniędzy już nie miał, że po trzech awariach i na początku recesji nie dałoby się ich zebrać, i że pełnił funkcję głównego inżyniera, bo nikogo dobrego nie udałoby się na to namówić. Gdyby czwarty lot zawiódł, firmy by nie było.',
      'Rakietę zmontowano w sześć tygodni z dostępnych części. W drodze na stanowisko, w luku samolotu C-17, kadłub częściowo się zapadł, bo ciśnienie przy ponownym napełnianiu przekroczyło założenia. Naprawiono go na miejscu.',
      'Trzy miesiące później NASA przyznała [[spacex|SpaceX]] kontrakt zaopatrzeniowy [[cots|CRS]] wart 1,6 miliarda dolarów. Kolejność zdarzeń nie jest przypadkowa — bez tego lotu nie było czego kupować.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '28 września 2008', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'Ratsat — makieta masowa 165 kg', pewnosc: 'potwierdzone' },
      { etykieta: 'Osiągnięta orbita', wartosc: '621 × 642 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Powtórne odpalenie II stopnia', wartosc: 'T+52 min 34 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwsza prywatna rakieta na paliwo ciekłe na orbicie', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas montażu rakiety', wartosc: 'ok. 6 tygodni', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Rakieta, która uratowała firmę, po drodze na stanowisko częściowo się zapadła w luku samolotu transportowego — ciśnienie przy ponownym napełnianiu przekroczyło to, czego oczekiwał zespół. Naprawiono ją na miejscu i to właśnie ten egzemplarz doleciał na orbitę.',
        zrodlo: Z.wikiFalcon1,
      },
    ],
    os: [
      { data: '2008-09-28', tytul: 'Pierwsza orbita', opis: 'Falcon 1 dociera na orbitę i firma przestaje być kandydatem do upadłości.', waga: 3 },
      { data: '2008-12', tytul: 'Kontrakt CRS', opis: 'NASA przyznaje 1,6 mld USD na zaopatrywanie stacji.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-1', powod: 'jego czwarty i pierwszy udany lot' },
      { id: 'falcon-1-lot-3', powod: 'trzecia porażka, po której została pieniądze na jedną rakietę' },
      { id: 'falcon-1-lot-5', powod: 'następny lot, już komercyjny' },
      { id: 'spacex', powod: 'lot, bez którego firma by nie istniała' },
      { id: 'elon-musk', powod: 'pełnił wtedy funkcję głównego inżyniera, bo nie było kogo zatrudnić' },
      { id: 'cots', powod: 'otworzył drogę do kontraktu, który firmę sfinansował' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFalcon1, Z.snewsFalcon1, Z.nsfFalcon1, Z.spaceFalcon1],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'falcon-1-lot-5',
    typ: 'misja',
    nazwa: 'Falcon 1, lot 5',
    aka: ['RazakSAT'],
    krotki: 'Pierwszy komercyjny start SpaceX i ostatni lot Falcona 1 — program zamknięto z powodu sukcesu następcy.',
    tresc: [
      'Czternastego lipca 2009 roku [[falcon-1|Falcon 1]] wyniósł malezyjskiego satelitę obserwacyjnego RazakSAT. Był to pierwszy start, za który [[spacex|SpaceX]] dostało pieniądze od klienta, i drugi udany lot tej rakiety.',
      'Był też ostatnim. Program zamknięto nie z powodu awarii, ale z arytmetyki: rynek małych ładunków był ciasny, a [[falcon-9|Falcon 9]] — zbudowany z dziewięciu tych samych silników [[merlin|Merlin]] — wynosił kilkadziesiąt razy więcej za cenę, która nadal bez trudu wygrywała z konkurencją.',
      'Falcon 1 zostawił po sobie sprawdzony silnik, zespół, który wie, jak buduje się rakietę, i firmę z kontraktem od NASA. W tej kolejności.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '14 lipca 2009', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'RazakSAT (Malezja)', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy komercyjny start SpaceX', pewnosc: 'potwierdzone' },
      { etykieta: 'Pozycja w programie', wartosc: 'piąty i ostatni lot Falcona 1', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Program zamknięto po drugim z rzędu udanym locie. Nie dlatego, że rakieta zawiodła, ale dlatego, że jej następca na tych samych silnikach wynosił kilkadziesiąt razy więcej — porzucenie działającego produktu było tu decyzją biznesową, nie techniczną.',
        zrodlo: Z.wikiFalcon1,
      },
    ],
    os: [
      { data: '2009-07-14', tytul: 'Pierwszy komercyjny start', opis: 'RazakSAT trafia na orbitę; Falcon 1 kończy karierę.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-1', powod: 'jego piąty i ostatni lot' },
      { id: 'falcon-1-lot-4', powod: 'poprzedni lot, pierwszy udany' },
      { id: 'falcon-9', powod: 'następca, którego istnienie przesądziło o zamknięciu programu' },
      { id: 'spacex', powod: 'pierwszy start, za który firma dostała pieniądze' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFalcon1, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },
];

/** Kontrakty NASA i pierwsze loty Dragona — moment, w którym firma stała się dostawcą. */
const wczesne: Encja[] = [
  {
    id: 'cots',
    typ: 'wydarzenie',
    nazwa: 'COTS i CRS',
    aka: ['Commercial Orbital Transportation Services', 'Commercial Resupply Services'],
    krotki: 'Program NASA, który zapłacił za osiągnięte kamienie milowe, nie za przepracowane godziny — i tym sfinansował SpaceX.',
    tresc: [
      'COTS uruchomiono w 2006 roku, bo w NASA uznano, że firmy na wolnym rynku zbudują i poprowadzą transport do stacji taniej i sprawniej niż urząd. Doszedł do tego motyw praktyczny: po zakończeniu programu wahadłowców Stany nie chciały zostać wyłącznie z rosyjskim Sojuzem.',
      'Kluczowa była konstrukcja umowy. Zamiast klasycznego kontraktu z refundacją kosztów, NASA podpisała porozumienia z płatnościami za osiągnięte kamienie milowe. Firma, która nie dowiozła, nie dostawała pieniędzy — tak skończyło się z Rocketplane Kistler, której umowę zerwano w październiku 2007 roku po wypłacie 32,1 z 207 milionów dolarów.',
      '[[spacex|SpaceX]] dostało początkowo 278 milionów w sierpniu 2006 roku, a kwota wzrosła do 396 milionów do 2011. Orbital Sciences otrzymało 170 milionów w 2008 roku, zwiększone później do 288. W grudniu 2008, po [[falcon-1-lot-4|czwartym locie Falcona 1]], doszedł osobny kontrakt zaopatrzeniowy CRS wart 1,6 miliarda.',
      'Część demonstracyjną domknął [[cots-demo-2|lot Dragona do stacji]] w maju 2012 roku, a rakietą, którą zbudowano pod wymagania tego programu, był [[falcon-9|Falcon 9]]. Bilans całości: 800 milionów dolarów publicznych pieniędzy dało dwie nowe amerykańskie rakiety średniej klasy i dwa automatyczne statki towarowe. Dla porównania — program Orion, prowadzony klasycznie, kosztował około 12 miliardów.',
    ],
    fakty: [
      { etykieta: 'Lata działania', wartosc: '2006–2013', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsza umowa dla SpaceX', wartosc: '278 mln USD, 18 sierpnia 2006', pewnosc: 'potwierdzone' },
      { etykieta: 'Ostateczna kwota COTS dla SpaceX', wartosc: '396 mln USD', stanNa: '2011', pewnosc: 'potwierdzone' },
      { etykieta: 'Kontrakt CRS', wartosc: '1,6 mld USD, grudzień 2008', pewnosc: 'potwierdzone' },
      { etykieta: 'Nakład całego programu', wartosc: '800 mln USD', pewnosc: 'potwierdzone' },
      { etykieta: 'Forma rozliczenia', wartosc: 'płatności za kamienie milowe, nie refundacja kosztów', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rocketplane Kistler dostało kontrakt przed SpaceX i straciło go w 2007 roku, nie zbierając prywatnego finansowania i nie dowożąc kamieni milowych. Wypłacono jej 32,1 miliona z 207 przewidzianych — i właśnie ta możliwość zerwania umowy w połowie sprawiła, że program w ogóle się opłacił.',
        zrodlo: Z.wikiCots,
      },
    ],
    os: [
      { data: '2006-08-18', tytul: 'Pierwsza umowa COTS', opis: 'NASA przyznaje SpaceX 278 mln USD w formule za kamienie milowe.', waga: 3 },
      { data: '2007-10', tytul: 'Zerwanie umowy z Rocketplane Kistler', opis: 'Formuła milestone’owa działa w drugą stronę.', waga: 1 },
      { data: '2008-12', tytul: 'Kontrakt CRS', opis: 'SpaceX dostaje 1,6 mld USD na zaopatrywanie stacji.', waga: 3 },
      { data: '2012-05-22', tytul: 'COTS Demo Flight 2', opis: 'Dragon dociera do stacji i program spełnia swój cel.', waga: 3 },
    ],
    powiazane: [
      { id: 'cots-demo-2', powod: 'lot, który domknął demonstracyjną część programu' },
      { id: 'falcon-1-lot-4', powod: 'jego sukces poprzedził kontrakt zaopatrzeniowy o miesiące' },
      { id: 'spacex', powod: 'program, który sfinansował firmę na etapie bez własnych przychodów' },
      { id: 'gwynne-shotwell', powod: 'wynegocjowała kontrakt i zaraz po tym została prezeską' },
      { id: 'falcon-9', powod: 'rakieta zbudowana pod wymagania tego programu' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiCots, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'cots-demo-2',
    typ: 'misja',
    nazwa: 'COTS Demo Flight 2',
    aka: ['C2+', 'pierwsze dokowanie Dragona'],
    krotki: 'Pierwszy prywatny statek, który dotarł do Międzynarodowej Stacji Kosmicznej i został do niej przyłączony.',
    tresc: [
      'Dwudziestego drugiego maja 2012 roku [[falcon-9|Falcon 9]] wyniósł kapsułę Dragon w misji demonstracyjnej programu [[cots|COTS]]. Statek dogonił Międzynarodową Stację Kosmiczną, przeszedł serię testów zbliżeniowych i został przyłączony do niej ramieniem manipulatora.',
      'Był to pierwszy przypadek, w którym pojazd zbudowany przez firmę, a nie agencję państwową, dotarł do stacji. Poprzedni lot demonstracyjny, z grudnia 2010 roku, sprawdził jedynie sam statek na orbicie — bez zbliżania się do niczego.',
      'Znaczenie tego lotu było kontraktowe, nie techniczne. Domknął część demonstracyjną programu i odblokował realizację kontraktu zaopatrzeniowego, z którego [[spacex|SpaceX]] żyło przez kolejne lata. Dragon w wersji towarowej został potem rozwinięty w załogowego [[crew-dragon|Crew Dragona]].',
    ],
    fakty: [
      { etykieta: 'Data startu', wartosc: '22 maja 2012', pewnosc: 'potwierdzone' },
      { etykieta: 'Rakieta', wartosc: 'Falcon 9', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy prywatny statek przyłączony do ISS', pewnosc: 'potwierdzone' },
      { etykieta: 'Poprzedni lot demonstracyjny', wartosc: 'COTS Demo Flight 1, 8 grudnia 2010', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Dragon nie zadokował, a został przyłączony — różnica jest realna. Dokowanie to samodzielne wejście w złącze, a przyłączenie oznacza, że statek zawisa nieruchomo, a ramię stacji sięga po niego i dostawia go do portu. Samodzielnie dokować zaczęły dopiero późniejsze wersje.',
        zrodlo: Z.wikiDragon2,
      },
    ],
    os: [
      { data: '2010-12-08', tytul: 'COTS Demo Flight 1', opis: 'Pierwszy orbitalny test samego Dragona, bez zbliżania się do stacji.', waga: 2 },
      { data: '2012-05-22', tytul: 'Dragon u stacji', opis: 'Pierwszy prywatny statek dociera do ISS i zostaje do niej przyłączony.', waga: 3 },
    ],
    powiazane: [
      { id: 'cots', powod: 'lot demonstracyjny tego programu' },
      { id: 'crew-dragon', powod: 'załogowy następca tej samej konstrukcji' },
      { id: 'falcon-9', powod: 'rakieta, która go wyniosła' },
      { id: 'leo', powod: 'cała misja odbyła się na niskiej orbicie okołoziemskiej' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiCots, Z.wikiDragon2],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'crs-7',
    typ: 'misja',
    nazwa: 'CRS-7',
    aka: ['awaria CRS-7'],
    krotki: 'Rakieta rozpadła się w 139. sekundzie lotu, bo zastrzał wart kilka dolarów pękł przy piątej części swojej nośności.',
    tresc: [
      'Dwudziestego ósmego czerwca 2015 roku [[falcon-9|Falcon 9]] wystartował z kapsułą Dragon wypełnioną zaopatrzeniem dla stacji. Sto trzydzieści dziewięć sekund po starcie rakieta rozpadła się w powietrzu.',
      'Przyczyną był zastrzał mocujący butlę helową wewnątrz zbiornika ciekłego tlenu drugiego stopnia. Element puścił, butla uderzyła w górną pokrywę zbiornika i to wystarczyło. Śledztwo wykazało, że śruba oczkowa o nominalnej nośności 10 000 funtów pękła przy 2 000. Niezależne dochodzenie NASA nazwało rzecz po imieniu: użyto materiału klasy przemysłowej zamiast lotniczej, bez odpowiedniego badania wejściowego i z pominięciem zalecanych zapasów bezpieczeństwa.',
      'Przepadł między innymi adapter dokujący IDA-1 — element potrzebny do tego, żeby [[crew-dragon|statki załogowe]] mogły w ogóle przycumować do stacji. Dostarczono go dopiero misją CRS-9, w ramach tego samego kontraktu [[cots|CRS]].',
      'To pierwsza z dwóch dużych strat w historii [[falcon-9|Falcona 9]]. Druga, [[amos-6|AMOS-6]], przyszła nieco ponad rok później i również dotyczyła zbiornika z helem.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '28 czerwca 2015, 14:21 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Moment rozpadu', wartosc: 'T+139 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Przyczyna', wartosc: 'pęknięcie zastrzału butli helowej w zbiorniku tlenu II stopnia', pewnosc: 'potwierdzone' },
      { etykieta: 'Nośność a rzeczywistość', wartosc: 'śruba na 10 000 funtów pękła przy 2 000', pewnosc: 'potwierdzone' },
      { etykieta: 'Utracony ładunek', wartosc: 'ponad 1 800 kg zaopatrzenia, w tym adapter dokujący IDA-1', pewnosc: 'potwierdzone' },
      { etykieta: 'Ocena NASA', wartosc: 'użycie materiału przemysłowego zamiast lotniczego bez badań', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rakietę wartą dziesiątki milionów dolarów zniszczył element konstrukcyjny za kilka dolarów, który pękł przy jednej piątej deklarowanej nośności. NASA orzekła, że przyczyną był zakup materiału klasy przemysłowej bez badania wejściowego — nie błąd projektowy w samej rakiecie, ale w tym, co do niej wpuszczono.',
        zrodlo: Z.wikiCrs7,
      },
    ],
    os: [
      { data: '2015-06-28', tytul: 'Rozpad rakiety', opis: 'Falcon 9 ginie w 139. sekundzie lotu; ładunek przepada.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'jedna z dwóch dużych strat w jego historii' },
      { id: 'amos-6', powod: 'druga awaria, również związana ze zbiornikiem helu' },
      { id: 'cots', powod: 'misja realizowana w ramach tego kontraktu zaopatrzeniowego' },
      { id: 'crew-dragon', powod: 'utracony adapter IDA-1 był potrzebny do jego dokowania' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiCrs7, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'amos-6',
    typ: 'wydarzenie',
    nazwa: 'AMOS-6',
    aka: ['eksplozja na stanowisku', 'anomalia SLC-40'],
    krotki: 'Rakieta wybuchła na stanowisku podczas tankowania do testu ogniowego — dwa dni przed planowanym startem.',
    tresc: [
      'Pierwszego września 2016 roku o 13:07 UTC [[falcon-9|Falcon 9]] został zniszczony na stanowisku SLC-40 wraz z izraelskim satelitą telekomunikacyjnym AMOS-6. Nie był to start ani nawet próba startu — trwało tankowanie przed rutynowym statycznym testem ogniowym.',
      'Przyczyną było zapadnięcie się wykładziny w kilku butlach kompozytowych na hel wewnątrz zbiornika utleniacza. Powstałe szczeliny pozwoliły ciekłemu i stałemu tlenowi zgromadzić się między wykładziną a oplotem, gdzie zapalił go tarciowy impuls. Ten sam typ elementu stał za awarią [[crs-7|CRS-7]] rok wcześniej, choć mechanizm był inny.',
      'Satelita wart około 195 milionów dolarów w samej budowie miał obsługiwać między innymi umowę Facebooka i Eutelsatu na dostarczanie internetu — 95 milionów dolarów za pięć lat pojemności w pasmie Ka.',
      'Zadanie, które miał wykonywać ten jeden satelita, przejęła później konstelacja [[starlink|Starlink]] licząca tysiące sztuk na [[leo|niskiej orbicie]]. Zdarzenie pokazało też coś, o czym w branży mówi się rzadko: najgroźniejszy moment nie zawsze wypada w locie. Tu zniszczeniu uległo także stanowisko, z którego [[falcon-9|Falcon 9]] startował najczęściej.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '1 września 2016, 13:07 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Okoliczności', wartosc: 'tankowanie przed statycznym testem ogniowym, nie start', pewnosc: 'potwierdzone' },
      { etykieta: 'Przyczyna', wartosc: 'zapadnięta wykładzina butli helowych i zapłon tlenu pod oplotem', pewnosc: 'potwierdzone' },
      { etykieta: 'Koszt budowy satelity', wartosc: 'ok. 195 mln USD', stanNa: '2016', pewnosc: 'potwierdzone' },
      { etykieta: 'Stanowisko', wartosc: 'SLC-40, Cape Canaveral', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Na zniszczonym satelicie Facebook i Eutelsat wynajęły pojemność za 95 milionów dolarów na pięć lat, żeby dostarczać internet w Afryce — z osiemnastu z trzydziestu sześciu wiązek regionalnych. Rolę, którą miał odegrać ten jeden satelita, przejęła później konstelacja licząca tysiące sztuk.',
        zrodlo: Z.wikiAmos6,
      },
    ],
    os: [
      { data: '2016-09-01', tytul: 'Eksplozja na stanowisku', opis: 'Rakieta i satelita giną podczas tankowania przed testem ogniowym.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'jego druga duża strata, tym razem jeszcze na ziemi' },
      { id: 'crs-7', powod: 'poprzednia awaria, również dotycząca zbiornika helu' },
      { id: 'starlink', powod: 'przejęła zadanie, które miał wykonywać utracony satelita' },
      { id: 'spacex', powod: 'najpoważniejszy incydent naziemny w historii firmy' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiAmos6, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'pierwsze-ladowanie',
    typ: 'wydarzenie',
    nazwa: 'Pierwsze lądowanie na lądzie',
    aka: ['Orbcomm OG2', 'lot 20 Falcona 9', 'LZ-1'],
    krotki: 'Dwudziestego pierwszego grudnia 2015 roku pierwszy stopień rakiety orbitalnej po raz pierwszy wrócił i stanął pionowo.',
    tresc: [
      'Dwudziestego pierwszego grudnia 2015 roku o 20:29 czasu lokalnego [[falcon-9|Falcon 9]] wyniósł jedenaście satelitów Orbcomm OG2, a potem jego pierwszy stopień zawrócił i usiadł pionowo na betonowym stanowisku Landing Zone 1 na Przylądku Canaveral.',
      'Było to pierwsze w historii udane sprowadzenie i pionowe posadzenie pierwszego stopnia rakiety orbitalnej. Wcześniejsze próby kończyły się rozbiciem — sam manewr nie był tajemnicą, trudność leżała w tym, żeby wykonać go z zapasem paliwa, który zostaje po wyniesieniu ładunku.',
      'Znaczenie tego dnia nie polega na samym lądowaniu, ale na tym, co się po nim stało możliwe. Bez powrotu członu nie ma [[reuzywalnosc|reużywalności]], bez reużywalności nie ma taniego kilograma na orbicie, a bez tego nie ma [[starlink|Starlinka]]. Cztery miesiące później przyszło [[pierwsze-ladowanie-na-barce|lądowanie na wodzie]], które zdjęło ostatnie ograniczenie.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '21 grudnia 2015', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: '11 satelitów Orbcomm OG2', pewnosc: 'potwierdzone' },
      { etykieta: 'Miejsce lądowania', wartosc: 'Landing Zone 1, Cape Canaveral', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy powrót i pionowe lądowanie członu rakiety orbitalnej', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Manewr lądowania nie był tajemnicą technologiczną — trudność polegała na tym, żeby wykonać go paliwem, które zostaje po wyniesieniu ładunku. Każdy kilogram zabrany na powrót to kilogram nieodstawiony na orbitę, więc cała sztuka sprowadzała się do arytmetyki, nie do pomysłu.',
        zrodlo: Z.snewsOrbcomm,
      },
    ],
    os: [
      { data: '2015-12-21', tytul: 'Powrót pierwszego stopnia', opis: 'Człon nośny siada pionowo na Landing Zone 1.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'rakieta, której człon wrócił po raz pierwszy' },
      { id: 'reuzywalnosc', powod: 'wydarzenie, od którego przestała być teorią' },
      { id: 'pierwsze-ladowanie-na-barce', powod: 'kolejny krok — powrót z lotów, z których nie da się wrócić nad brzeg' },
      { id: 'ses-10', powod: 'dopiero powtórny lot odzyskanego członu domknął sens tego manewru' },
    ],
    status: 'historyczne',
    zrodla: [Z.snewsOrbcomm, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'pierwsze-ladowanie-na-barce',
    typ: 'wydarzenie',
    nazwa: 'Pierwsze lądowanie na barce',
    aka: ['CRS-8', 'Of Course I Still Love You'],
    krotki: 'Ósmego kwietnia 2016 roku booster osiadł na pływającej platformie trzysta kilometrów od brzegu Florydy.',
    tresc: [
      'Ósmego kwietnia 2016 roku [[falcon-9|Falcon 9]] wystartował w misji zaopatrzeniowej CRS-8, a dziewięć minut później jego pierwszy stopień usiadł na [[barki-dronowe|barce dronowej]] „Of Course I Still Love You", trzysta kilometrów od wybrzeża Florydy. Było to drugie udane lądowanie w historii firmy i pierwsze, jakie ktokolwiek wykonał na pływającej platformie.',
      'Powód, dla którego to było potrzebne, jest czysto energetyczny. Przy lotach na wyższe orbity albo z cięższym ładunkiem boosterowi nie zostaje paliwa na zawrócenie nad brzeg. Barka ustawiona na trasie lotu skraca drogę powrotną na tyle, że manewr zaczyna się domykać.',
      'Od tego momentu [[reuzywalnosc|odzysk]] przestał być zarezerwowany dla najlżejszych misji. Dziś większość lądowań odbywa się właśnie na wodzie, a betonowe stanowiska obsługują wyjątki.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '8 kwietnia 2016, 20:43 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Misja', wartosc: 'CRS-8, zaopatrzenie stacji', pewnosc: 'potwierdzone' },
      { etykieta: 'Platforma', wartosc: '„Of Course I Still Love You"', pewnosc: 'potwierdzone' },
      { etykieta: 'Odległość od brzegu', wartosc: 'ok. 300 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas od startu do przyziemienia', wartosc: 'ok. 9 min', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Ten sam booster, który jako pierwszy usiadł na wodzie, niespełna rok później poleciał ponownie w misji SES-10 — pierwszym powtórnym locie członu orbitalnego w historii. Egzemplarz, który udowodnił, że da się wylądować na morzu, udowodnił też, że po takim lądowaniu da się polecieć jeszcze raz.',
        zrodlo: Z.wikiSes10,
      },
    ],
    os: [
      { data: '2016-04-08', tytul: 'Lądowanie na wodzie', opis: 'Booster CRS-8 osiada na barce dronowej na Atlantyku.', waga: 3 },
    ],
    powiazane: [
      { id: 'barki-dronowe', powod: 'pierwsze udane lądowanie na jednej z nich' },
      { id: 'pierwsze-ladowanie', powod: 'poprzedni krok — powrót na stanowisko na lądzie' },
      { id: 'ses-10', powod: 'ten sam egzemplarz boostera poleciał potem ponownie' },
      { id: 'reuzywalnosc', powod: 'rozszerzyło odzysk na misje, z których nie da się wrócić nad brzeg' },
    ],
    status: 'historyczne',
    zrodla: [Z.spaceBarkaCrs8, Z.wikiBarki],
    zaktualizowano: '2026-09-12',
  },
];

/** Przełomy komercyjne i załogowe — od powtórnego lotu do prywatnej EVA. */
const przelomy: Encja[] = [
  {
    id: 'ses-10',
    typ: 'misja',
    nazwa: 'SES-10',
    aka: ['pierwszy powtórny lot'],
    krotki: 'Pierwszy w historii lot członu orbitalnego użytego po raz drugi — moment, w którym odzysk zaczął mieć sens.',
    tresc: [
      'Trzydziestego marca 2017 roku [[falcon-9|Falcon 9]] wyniósł satelitę telekomunikacyjnego SES-10 na pierwszym stopniu, który już raz był w kosmosie. Egzemplarz B1021 poleciał wcześniej w misji CRS-8 i wtedy jako pierwszy w historii [[pierwsze-ladowanie-na-barce|osiadł na barce dronowej]].',
      'Do tego dnia [[reuzywalnosc|reużywalność]] była obietnicą podpartą stertą odzyskanych członów stojących w hangarze. Lądowanie dowodzi, że rakieta wraca; dopiero powtórny lot dowodzi, że wraca w stanie, w którym da się ją jeszcze raz wysłać.',
      'Booster wylądował po raz drugi, znowu na [[barki-dronowe|barce]] — cztery lata przed tym, jak [[starship-lot-5|wieża startowa]] złapała człon Starshipa bez żadnego podwozia. Udało się też sprowadzić jedną połówkę osłony ładunku, z użyciem silniczków i sterowanego spadochronu — zapowiedź tego, że najbardziej wysłużonym elementem systemu okaże się właśnie osłona, a nie człon nośny.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '30 marca 2017, 22:27 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Booster', wartosc: 'B1021, wcześniej misja CRS-8', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy powtórny lot członu klasy orbitalnej', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'satelita telekomunikacyjny SES-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Drugie lądowanie tego członu', wartosc: 'barka dronowa', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przy tej misji sprowadzono też połówkę osłony ładunku — na silniczkach i sterowanym spadochronie. Wtedy była to ciekawostka techniczna; dziś rekordzistą całego systemu w liczbie lotów jest właśnie połówka osłony, z czterdziestoma startami na koncie.',
        zrodlo: Z.wikiSes10,
      },
    ],
    os: [
      { data: '2017-03-30', tytul: 'Pierwszy powtórny lot', opis: 'Booster z misji CRS-8 startuje po raz drugi i znów ląduje.', waga: 3 },
    ],
    powiazane: [
      { id: 'reuzywalnosc', powod: 'dowód, że odzyskany człon naprawdę nadaje się do lotu' },
      { id: 'pierwsze-ladowanie-na-barce', powod: 'ten sam egzemplarz boostera odzyskano tam po raz pierwszy' },
      { id: 'falcon-9', powod: 'rakieta, która pierwsza poleciała używanym członem' },
      { id: 'barki-dronowe', powod: 'ten sam booster wylądował na nich dwukrotnie' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiSes10, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'falcon-heavy-demo',
    typ: 'misja',
    nazwa: 'Lot demonstracyjny Falcona Heavy',
    aka: ['Starman', 'Roadster w kosmosie', 'FH Demo'],
    krotki: 'Zamiast betonowego balastu na szczycie najcięższej rakiety świata poleciał samochód z manekinem za kierownicą.',
    tresc: [
      'Szóstego lutego 2018 roku [[falcon-heavy|Falcon Heavy]] poleciał po raz pierwszy. Pierwsze loty nowych rakiet zwykle wynoszą balast — beton albo zbiornik z wodą — bo nikt nie ryzykuje prawdziwego ładunku. [[elon-musk|Musk]] wysłał własny samochód: [[tesla|Teslę]] Roadster pierwszej generacji z manekinem w skafandrze za kierownicą, nazwanym Starman.',
      'Na desce rozdzielczej umieszczono napis „DON’T PANIC" — cytat z „Autostopem przez Galaktykę". W samochodzie pojechał też model Hot Wheels tego samego auta z miniaturowym Starmanem w środku oraz dysk Arch z nazwiskami pracowników firmy.',
      'Samochód wszedł na orbitę heliocentryczną. Pierwsze szacunki mówiły o pasie planetoid, ale obserwacje teleskopowe je skorygowały: orbita Roadstera w punkcie najdalszym nieznacznie wykracza za orbitę Marsa i na tym się kończy.',
      'Lot był demonstracją w dwóch sensach. Technicznie pokazał, że dwadzieścia siedem silników [[merlin|Merlin]] da się odpalić równocześnie. Wizerunkowo dał obraz, który obiegł świat — i to był wymierny efekt, nie dodatek.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '6 lutego 2018', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'Tesla Roadster z manekinem Starman', pewnosc: 'potwierdzone' },
      { etykieta: 'Silniki przy starcie', wartosc: '27 × Merlin 1D', pewnosc: 'potwierdzone' },
      { etykieta: 'Orbita Roadstera', wartosc: 'heliocentryczna, aphelium nieco za orbitą Marsa', pewnosc: 'potwierdzone' },
      { etykieta: 'Przedmioty na pokładzie', wartosc: 'napis „DON’T PANIC", model Hot Wheels, dysk Arch', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'W samochodzie jedzie model tego samego samochodu — miniatura Hot Wheels z miniaturowym Starmanem za kierownicą. Do tego dysk Arch z nazwiskami pracowników i napis „DON’T PANIC" z „Autostopem przez Galaktykę" na desce rozdzielczej.',
        zrodlo: Z.wikiFalconHeavy,
      },
    ],
    os: [
      { data: '2018-02-06', tytul: 'Pierwszy lot Falcona Heavy', opis: 'Rakieta startuje na 27 silnikach, a jej ładunkiem jest samochód.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-heavy', powod: 'jej pierwszy lot' },
      { id: 'tesla', powod: 'jej Roadster był ładunkiem tego lotu' },
      { id: 'elon-musk', powod: 'oddał na ten lot własny samochód zamiast balastu' },
      { id: 'merlin', powod: 'dwadzieścia siedem sztuk odpalono tu równocześnie' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFalconHeavy, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'demo-2',
    typ: 'misja',
    nazwa: 'Demo-2',
    aka: ['Behnken i Hurley', 'pierwszy lot załogowy Crew Dragona'],
    krotki: 'Po dziewięciu latach przerwy Stany Zjednoczone znów wysłały ludzi w kosmos z własnego terytorium.',
    tresc: [
      'Trzydziestego maja 2020 roku o 15:22 czasu wschodniego [[crew-dragon|Crew Dragon]] wystartował ze stanowiska LC-39A w Kennedy Space Center na szczycie [[falcon-9|Falcona 9]]. Na pokładzie byli Robert Behnken i Douglas Hurley — pierwsi astronauci wysłani z terytorium Stanów od zakończenia programu wahadłowców w 2011 roku.',
      'Formalnie był to lot testowy: sprawdzenie całego systemu transportu załogowego w warunkach rzeczywistych, ostatni etap przed certyfikacją, i ostatni krok drogi otwartej [[cots-demo-2|lotem towarowego Dragona do stacji]] osiem lat wcześniej. Praktycznie oznaczał, że NASA przestaje kupować miejsca w rosyjskim Sojuzie jako jedynej dostępnej opcji.',
      'Misja trwała niemal sześćdziesiąt cztery dni i zakończyła się wodowaniem na Atlantyku 2 sierpnia 2020 roku. Od tamtej pory ta sama kapsuła obsługuje zarówno loty dla agencji, jak i [[inspiration4|misje w pełni prywatne]].',
      'Trzynaście lat wcześniej firma dostała [[cots|pierwsze pieniądze z NASA]] na to, by w ogóle nauczyć się dowozić towar do stacji. Demo-2 jest końcem tej samej linii — z ludźmi na pokładzie.',
    ],
    fakty: [
      { etykieta: 'Start', wartosc: '30 maja 2020, 15:22 czasu wschodniego', pewnosc: 'potwierdzone' },
      { etykieta: 'Załoga', wartosc: 'Robert Behnken, Douglas Hurley', pewnosc: 'potwierdzone' },
      { etykieta: 'Stanowisko', wartosc: 'LC-39A, Kennedy Space Center', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas trwania', wartosc: '63 dni 23 godziny 25 minut', pewnosc: 'potwierdzone' },
      { etykieta: 'Powrót', wartosc: 'wodowanie na Atlantyku, 2 sierpnia 2020', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy lot załogowy z terytorium USA od 2011 roku', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Lot startował z tego samego stanowiska LC-39A, z którego odlatywały misje Apollo na Księżyc i większość wahadłowców. Kompleks stał przez lata nieużywany, dopóki SpaceX nie wzięło go w dzierżawę i nie przystosowało do własnych rakiet.',
        zrodlo: Z.nasaDemo2,
      },
    ],
    os: [
      { data: '2020-05-30', tytul: 'Start', opis: 'Behnken i Hurley lecą do stacji w pierwszym załogowym Crew Dragonie.', waga: 3 },
      { data: '2020-08-02', tytul: 'Wodowanie', opis: 'Kapsuła ląduje na Atlantyku po niemal 64 dniach misji.', waga: 2 },
    ],
    powiazane: [
      { id: 'crew-dragon', powod: 'jej pierwszy lot z ludźmi na pokładzie' },
      { id: 'falcon-9', powod: 'rakieta, która wyniosła załogę' },
      { id: 'cots', powod: 'zwieńczenie linii, która zaczęła się od kontraktu towarowego' },
      { id: 'inspiration4', powod: 'ta sama kapsuła poleciała potem w misji w pełni prywatnej' },
    ],
    status: 'historyczne',
    zrodla: [Z.nasaDemo2, Z.wikiDragon2],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'inspiration4',
    typ: 'misja',
    nazwa: 'Inspiration4',
    aka: ['pierwsza cywilna załoga orbitalna'],
    krotki: 'Pierwszy lot orbitalny, na którym nie było ani jednego zawodowego astronauty — i zbiórka na 243 miliony dolarów.',
    tresc: [
      'Szesnastego września 2021 roku [[crew-dragon|Crew Dragon]] wyniósł czterech ludzi, z których żaden nie był zawodowym astronautą. Dowodził [[jared-isaacman|Jared Isaacman]], który misję kupił. Pilotką była Sian Proctor, wybrana w konkursie. Hayley Arceneaux, po przebytym nowotworze kości, dostała miejsce od szpitala St. Jude. Christopher Sembroski trafił na pokład, bo zwycięzca loterii, Kyle Hippchen, oddał mu swoje miejsce.',
      'Kapsuła nie leciała do stacji, więc w miejscu złącza dokującego zamontowano kopułę z jednolitego wielowarstwowego pleksi — wzorowaną na modułze widokowym stacji i dającą widok w pełnym okręgu. Lot osiągnął około 585 kilometrów, najwyżej od misji STS-103 z 1999 roku.',
      'Misja miała cel zbiórkowy: sto milionów dolarów dla szpitala St. Jude. Ostatecznie zebrano ponad 243 miliony, w tym 125 milionów od Isaacmana z żoną i 55 milionów od [[elon-musk|Muska]].',
      'Załoga wróciła po niespełna trzech dniach, wodując na Atlantyku — pierwszy raz od misji Apollo 9 w 1969 roku, gdy załoga osiadła w tym oceanie.',
    ],
    fakty: [
      { etykieta: 'Start', wartosc: '16 września 2021, 00:02 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Załoga', wartosc: 'Isaacman, Proctor, Arceneaux, Sembroski', pewnosc: 'potwierdzone' },
      { etykieta: 'Wysokość', wartosc: 'ok. 585 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas trwania', wartosc: '2 dni 23 godziny 3 minuty', pewnosc: 'potwierdzone' },
      { etykieta: 'Zebrana kwota', wartosc: 'ponad 243 mln USD dla szpitala St. Jude', stanNa: '2021', pewnosc: 'potwierdzone' },
      { etykieta: 'Zamiast złącza dokującego', wartosc: 'przeszklona kopuła widokowa', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Jedno z miejsc zdobył ktoś, kto w ogóle nie brał udziału w rywalizacji. Loterię wygrał Kyle Hippchen i oddał wygraną Christopherowi Sembroskiemu. Na pokładzie zepsuła się też toaleta i uruchomiła alarm — pierwszy w pełni cywilny lot orbitalny załatwiła w końcu ta sama awaria, która psuje wakacje.',
        zrodlo: Z.wikiInspiration4,
      },
    ],
    os: [
      { data: '2021-09-16', tytul: 'Start', opis: 'Czterech cywilów wchodzi na orbitę bez zawodowego astronauty na pokładzie.', waga: 3 },
      { data: '2021-09-18', tytul: 'Wodowanie', opis: 'Pierwsza załoga od Apollo 9, która wodowała na Atlantyku.', waga: 2 },
    ],
    powiazane: [
      { id: 'jared-isaacman', powod: 'kupił tę misję i był jej dowódcą' },
      { id: 'crew-dragon', powod: 'kapsuła, w której odbył się lot' },
      { id: 'demo-2', powod: 'ten sam typ kapsuły, wcześniej w locie dla agencji' },
      { id: 'ax-1', powod: 'następny krok prywatnych lotów — tym razem do stacji' },
      { id: 'elon-musk', powod: 'dołożył 55 mln USD do zbiórki misji' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiInspiration4, Z.wikiDragon2],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'ax-1',
    typ: 'misja',
    nazwa: 'Ax-1',
    aka: ['Axiom Mission 1'],
    krotki: 'Pierwsza w pełni komercyjna misja załogowa do stacji kosmicznej, prowadzona z prywatnego centrum kontroli.',
    tresc: [
      'Ósmego kwietnia 2022 roku [[crew-dragon|Crew Dragon]] zabrał czterech ludzi do Międzynarodowej Stacji Kosmicznej w misji zorganizowanej przez firmę Axiom Space. Dowodził Michael López-Alegría, zawodowy astronauta; trzy pozostałe miejsca zajęli Larry Connor, Eytan Stibbe i Mark Pathy, każde za 55 milionów dolarów.',
      'Nowość nie polegała na tym, że do stacji polecieli prywatni pasażerowie — to zdarzało się już wcześniej, przy okazji lotów agencyjnych. Nowe było to, kto misję prowadził: Axiom operowało nią z własnego centrum kontroli w Houston, a nie przez agencję rządową.',
      'Misję wyniósł [[falcon-9|Falcon 9]] na [[leo|niską orbitę]], tak jak wszystkie loty tej kapsuły. Pobyt zaplanowany na dziesięć dni wydłużył się do około szesnastu, bo pogoda w strefie wodowania nie pozwalała wrócić. Łącznie misja trwała siedemnaście dni i zakończyła się 25 kwietnia na Atlantyku.',
      'Po [[inspiration4|Inspiration4]] był to następny krok w tę samą stronę: nie tylko prywatni ludzie na orbicie, ale prywatna firma w roli operatora lotu.',
    ],
    fakty: [
      { etykieta: 'Start', wartosc: '8 kwietnia 2022', pewnosc: 'potwierdzone' },
      { etykieta: 'Załoga', wartosc: 'López-Alegría, Connor, Stibbe, Pathy', pewnosc: 'potwierdzone' },
      { etykieta: 'Cena miejsca', wartosc: '55 mln USD', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas na stacji', wartosc: 'ok. 16 dni zamiast planowanych 10', pewnosc: 'potwierdzone' },
      { etykieta: 'Operator misji', wartosc: 'Axiom Space, z własnego centrum kontroli w Houston', pewnosc: 'potwierdzone' },
      { etykieta: 'Powrót', wartosc: 'Atlantyk, 25 kwietnia 2022', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Załoga siedziała na stacji o sześć dni dłużej, niż planowano, bo w strefie wodowania nie było odpowiedniej pogody. Trzej pasażerowie zapłacili po 55 milionów dolarów za dziesięć dni i dostali szesnaście — bez dopłaty i bez możliwości wyboru.',
        zrodlo: Z.wikiAx1,
      },
    ],
    os: [
      { data: '2022-04-08', tytul: 'Start', opis: 'Pierwsza w pełni komercyjnie prowadzona misja załogowa do ISS.', waga: 3 },
      { data: '2022-04-25', tytul: 'Powrót', opis: 'Wodowanie na Atlantyku po siedemnastu dniach w kosmosie.', waga: 1 },
    ],
    powiazane: [
      { id: 'inspiration4', powod: 'poprzedni krok prywatnych lotów, jeszcze bez stacji' },
      { id: 'crew-dragon', powod: 'kapsuła, w której odbył się lot' },
      { id: 'polaris-dawn', powod: 'kolejna prywatna misja, tym razem poza orbitę stacji' },
      { id: 'leo', powod: 'cała misja odbyła się na niskiej orbicie okołoziemskiej' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiAx1, Z.wikiDragon2],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'polaris-dawn',
    typ: 'misja',
    nazwa: 'Polaris Dawn',
    aka: ['pierwszy komercyjny spacer kosmiczny'],
    krotki: 'Najwyższa załogowa orbita od czasów Apollo i pierwszy spacer kosmiczny wykonany poza programem agencji rządowej.',
    tresc: [
      'Dziesiątego września 2024 roku [[crew-dragon|Crew Dragon]] wyniósł czwórkę ludzi: [[jared-isaacman|Jareda Isaacmana]], Scotta Poteeta, [[sarah-gillis|Sarah Gillis]] i Annę Menon. Dwie ostatnie to inżynierki [[spacex|SpaceX]], nie astronautki agencji.',
      'Misja sięgnęła apogeum 1 400 kilometrów — najdalej od Ziemi, jak człowiek znalazł się od czasu Apollo 17 w 1972 roku, i dalej niż dotychczasowy rekord z misji Gemini 11. To wielokrotnie wyżej niż typowa [[leo|niska orbita]], na której pracuje stacja.',
      'Trzeciego dnia Isaacman i Gillis wyszli na zewnątrz statku: on na siedem minut i pięćdziesiąt sześć sekund, ona na siedem minut i piętnaście. Gillis, w wieku trzydziestu lat, została najmłodszą osobą uczestniczącą w spacerze kosmicznym. Skafandry zaprojektowano w SpaceX na bazie kombinezonów wewnątrzstatkowych, z zasilaniem przez przewody, nie z własnym systemem podtrzymywania życia.',
      'Początkowa orbita przechodziła przez Anomalię Południowoatlantycką na niskiej wysokości, co w kilku przelotach dało załodze dawkę promieniowania odpowiadającą trzem miesiącom na stacji — i było celowym elementem badań, nie skutkiem ubocznym.',
    ],
    fakty: [
      { etykieta: 'Start', wartosc: '10 września 2024, 09:23 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Załoga', wartosc: 'Isaacman, Poteet, Gillis, Menon', pewnosc: 'potwierdzone' },
      { etykieta: 'Apogeum', wartosc: '1 400 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas poza statkiem', wartosc: 'Isaacman 7 min 56 s, Gillis 7 min 15 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Łączny czas operacji EVA', wartosc: 'ok. 26 min 40 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Powrót', wartosc: 'Zatoka Meksykańska, 15 września 2024', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Crew Dragon nie ma śluzy, więc przy spacerze kosmicznym rozhermetyzowano całą kapsułę. Wszyscy czterej członkowie załogi byli jednocześnie w próżni, także dwoje, które nie wychodziło na zewnątrz — siedzieli w skafandrach w otwartym statku i czekali.',
        zrodlo: Z.wikiPolarisDawn,
      },
    ],
    os: [
      { data: '2024-09-10', tytul: 'Start', opis: 'Załoga wchodzi na orbitę o apogeum 1 400 km.', waga: 3 },
      { data: '2024-09-12', tytul: 'Pierwszy komercyjny spacer kosmiczny', opis: 'Isaacman i Gillis wychodzą ze statku przy rozhermetyzowanej kapsule.', waga: 3 },
    ],
    powiazane: [
      { id: 'jared-isaacman', powod: 'dowodził misją i wykonał pierwsze wyjście' },
      { id: 'sarah-gillis', powod: 'wyszła ze statku jako najmłodsza osoba w historii spacerów' },
      { id: 'crew-dragon', powod: 'kapsuła, którą rozhermetyzowano w całości na czas wyjścia' },
      { id: 'ax-1', powod: 'poprzednia prywatna misja, jeszcze w granicach orbity stacji' },
      { id: 'fram2', powod: 'następna prywatna misja, z inną pierwszą kategorią rekordu' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiPolarisDawn, Z.wikiDragon2],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'fram2',
    typ: 'misja',
    nazwa: 'Fram2',
    aka: ['pierwsza załogowa orbita biegunowa'],
    krotki: 'Pierwszy lot załogowy po orbicie biegunowej, nazwany po statku, który dopłynął do obu biegunów Ziemi.',
    tresc: [
      'Pierwszego kwietnia 2025 roku [[crew-dragon|Crew Dragon]] wszedł na orbitę o nachyleniu 90,01 stopnia — praktycznie dokładnie przez oba bieguny. Poprzedni rekord nachylenia dla lotu załogowego ustanowiła Wostok 6 w 1963 roku.',
      'Załogę stanowili Chun Wang, który misję sfinansował, Jannicke Mikkelsen z Norwegii, Rabea Rogge z Niemiec i Eric Philips z Australii. Wszyscy lecieli pierwszy raz. Wyniósł ich [[falcon-9|Falcon 9]], a sama misja wpisuje się w tę samą serię prywatnych lotów co [[polaris-dawn|Polaris Dawn]] — z tą różnicą, że rekord dotyczył nachylenia orbity, nie wysokości.',
      'Nazwa odsyła do norweskiego statku polarnego Fram, który między 1893 a 1912 rokiem odbył wyprawy do obu biegunów. Załoga zabrała ze sobą fragment jego tekowego pokładu.',
      'Program badawczy pasował do trasy: obserwacje zjawisk zorzowych, w tym STEVE, pierwsze w historii zdjęcie rentgenowskie człowieka w kosmosie, hodowla boczniaków i eksperyment genomiczny. Rogge nadawała też obrazy w wolnoskanowej telewizji przez radio amatorskie. Misja zakończyła się 4 kwietnia wodowaniem na Pacyfiku u wybrzeży Kalifornii.',
    ],
    fakty: [
      { etykieta: 'Start', wartosc: '1 kwietnia 2025, 01:46 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Nachylenie orbity', wartosc: '90,01°', pewnosc: 'potwierdzone' },
      { etykieta: 'Załoga', wartosc: 'Chun Wang, Mikkelsen, Rogge, Philips', pewnosc: 'potwierdzone' },
      { etykieta: 'Poprzedni rekord nachylenia', wartosc: 'Wostok 6, 1963', pewnosc: 'potwierdzone' },
      { etykieta: 'Powrót', wartosc: 'Pacyfik u wybrzeży Kalifornii, 4 kwietnia 2025', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Na pokładzie wykonano pierwsze w historii zdjęcie rentgenowskie człowieka w kosmosie, a załoga hodowała boczniaki. Zabrała też ze sobą fragment tekowego pokładu statku Fram — kawałek drewna, który wcześniej był przy obu biegunach Ziemi, a teraz przeleciał nad nimi z góry.',
        zrodlo: Z.wikiFram2,
      },
    ],
    os: [
      { data: '2025-04-01', tytul: 'Start', opis: 'Pierwszy załogowy lot po orbicie biegunowej.', waga: 3 },
      { data: '2025-04-04', tytul: 'Wodowanie', opis: 'Kapsuła ląduje na Pacyfiku u wybrzeży Kalifornii.', waga: 1 },
    ],
    powiazane: [
      { id: 'crew-dragon', powod: 'kapsuła, w której odbył się lot' },
      { id: 'polaris-dawn', powod: 'poprzednia prywatna misja, z rekordem wysokości zamiast nachylenia' },
      { id: 'leo', powod: 'lot na niskiej orbicie, ale o nachyleniu bliskim 90 stopni' },
      { id: 'falcon-9', powod: 'rakieta, która wyniosła misję' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFram2, Z.wikiDragon2],
    zaktualizowano: '2026-09-12',
  },
];

/** Loty testowe Starshipa i kontrakt księżycowy. */
const starshipMisje: Encja[] = [
  {
    id: 'starship-lot-5',
    typ: 'misja',
    nazwa: 'Starship, lot 5',
    aka: ['pierwsze złapanie boostera', 'Flight 5'],
    krotki: 'Wracający człon nośny zawisł między ramionami wieży startowej — za pierwszym podejściem.',
    tresc: [
      'Trzynastego października 2024 roku [[starship|Starship]] poleciał po raz piąty, a [[super-heavy|Super Heavy]] po odłączeniu zawrócił nad stanowisko i został przechwycony przez dwa ruchome ramiona wieży startowej. Udało się za pierwszym razem.',
      'Manewr nie ma odpowiednika. Człon nie ma nóg lądowniczych — zawisa na dwóch czopach pod siatkami aerodynamicznymi, chwycony przez konstrukcję nazywaną „chopsticks". Powód jest rachunkowy: nogi ważą tyle, ile mógłby ważyć ładunek. Zamiast wozić podwozie w kosmos i z powrotem, zostawia się je na ziemi.',
      'Z punktu widzenia [[reuzywalnosc|reużywalności]] to najdalej posunięta wersja tej samej idei, którą [[falcon-9|Falcon 9]] realizuje od 2015 roku. Trzy miesiące później [[starship|złapany egzemplarz]] potwierdził sens manewru, wracając do lotu.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '13 października 2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik', wartosc: 'sukces — pierwsze złapanie członu nośnego', pewnosc: 'potwierdzone' },
      { etykieta: 'Sposób odzysku', wartosc: 'chwyt przez ramiona wieży, bez nóg lądowniczych', pewnosc: 'potwierdzone' },
      { etykieta: 'Liczba prób', wartosc: 'udane za pierwszym podejściem', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Booster nie ląduje, a zostaje złapany, i to nie z powodu widowiskowości. Nogi lądownicze ważą tyle, ile mógłby ważyć ładunek — więc zamiast wozić podwozie na orbitę i z powrotem, zostawia się je na ziemi w postaci dwóch ramion wieży.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2024-10-13', tytul: 'Pierwsze złapanie', opis: 'Super Heavy wraca w ramiona wieży startowej.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship', powod: 'jego piąty lot testowy' },
      { id: 'super-heavy', powod: 'to jego człon został złapany przez wieżę' },
      { id: 'starbase', powod: 'wieża, która go chwyciła, stoi właśnie tam' },
      { id: 'reuzywalnosc', powod: 'najdalej posunięta wersja tej idei' },
      { id: 'starship-lot-13', powod: 'późniejszy lot, już z prawdziwym ładunkiem' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'starship-lot-13',
    typ: 'misja',
    nazwa: 'Starship, lot 13',
    aka: ['Flight 13', 'pierwsze satelity V3'],
    krotki: 'Pierwszy lot po wejściu SpaceX na giełdę i pierwszy, na którym Starship wypuścił prawdziwe satelity.',
    tresc: [
      'Dwudziestego czwartego lipca 2026 roku [[starship|Starship]] poleciał po raz trzynasty, na konstrukcji Block 3, z egzemplarzami B20 i S40. Był to pierwszy lot po [[spacex|debiucie giełdowym firmy]] w czerwcu tego samego roku.',
      'Górny stopień wypuścił pierwsze prawdziwe satelity [[starlink|Starlink]] generacji V3. Wcześniejsze loty wynosiły makiety; ten wypuścił sprzęt, który próbował rozłożyć panele i połączyć się z konstelacją, choć na trajektorii suborbitalnej i z przewidywanym spłonięciem przy wejściu w atmosferę.',
      'Statek przetrwał wejście w atmosferę i osiadł nienaruszony w Oceanie Indyjskim. Dało to pierwsze zdjęcia kompletnej osłony termicznej po locie — dla programu ważniejsze niż sam ładunek, bo osłona jest tym elementem, który decyduje, czy pojazd da się szybko wysłać ponownie.',
      'Człon nośny nie wrócił: przy hamowaniu nad zatoką odpaliło dziesięć z trzynastu przewidzianych silników [[raptor|Raptor]] i booster przepadł. Łapania nie próbowano — priorytetem był ładunek w górnym stopniu.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '24 lipca 2026', pewnosc: 'potwierdzone' },
      { etykieta: 'Egzemplarze', wartosc: 'booster B20, statek S40', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'pierwsze prawdziwe satelity Starlink V3', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik statku', wartosc: 'przetrwał wejście w atmosferę i wodował nienaruszony', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik boostera', wartosc: 'utracony — odpaliło 10 z 13 silników przy hamowaniu', pewnosc: 'potwierdzone' },
      { etykieta: 'Kontekst', wartosc: 'pierwszy lot po debiucie giełdowym SpaceX', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Najcenniejszym wynikiem lotu nie był ładunek, ale zdjęcia. Statek spoczął w oceanie w jednym kawałku, co pierwszy raz pozwoliło obejrzeć całą osłonę termiczną po przejściu przez atmosferę — a to ona, nie silniki, rozstrzyga, czy pojazd da się wysłać ponownie bez rozbierania.',
        zrodlo: Z.cnbcLot13,
      },
    ],
    os: [
      { data: '2026-07-24', tytul: 'Lot 13', opis: 'Pierwsze satelity V3 na orbicie i nienaruszony statek po wodowaniu.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship', powod: 'jego trzynasty lot testowy' },
      { id: 'starlink', powod: 'wypuścił pierwsze satelity generacji V3' },
      { id: 'starship-lot-5', powod: 'wcześniejszy lot, na którym udało się złapać booster' },
      { id: 'raptor', powod: 'przy hamowaniu odpaliło tylko dziesięć z trzynastu silników' },
      { id: 'spacex', powod: 'pierwszy lot po debiucie giełdowym firmy' },
    ],
    status: 'historyczne',
    zrodla: [Z.cnbcLot13, Z.wikiStartyStarship, Z.nprLot12],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'hls-artemis',
    typ: 'technologia',
    nazwa: 'Starship HLS',
    aka: ['Human Landing System', 'lądownik Artemis'],
    krotki: 'Załogowa wersja Starshipa, która ma posadzić astronautów na Księżycu — i wymaga tankowania na orbicie.',
    tresc: [
      'W kwietniu 2021 roku NASA wybrała [[spacex|SpaceX]] jako jedynego wykonawcę lądownika księżycowego dla misji Artemis III, na kontrakt wart 2,9 miliarda dolarów. Blue Origin dostało później osobną umowę wartą 3,4 miliarda na własny lądownik dla kolejnej misji.',
      'Wersja HLS różni się od [[starship|Starshipa]] w podstawowych rzeczach: nie wchodzi w atmosferę Ziemi, więc nie ma osłony termicznej ani klap sterowych, a do przyziemienia na Księżycu służą silniczki umieszczone wyżej na kadłubie, żeby nie wzbijać pyłu spod dna. Napęd główny to te same silniki [[raptor|Raptor]], a na orbitę wynosi ją [[super-heavy|Super Heavy]].',
      'Najtrudniejszy element nie leży jednak w samym lądowniku, a w tankowaniu. Żeby dolecieć na Księżyc, HLS musi zostać zatankowany na orbicie okołoziemskiej. NASA szacuje, że na jedną misję lądowania potrzeba około ośmiu do dziesięciu startów [[starship|Starshipa]] — tankowców napełniających zbiornikowiec, z którego dopiero zatankuje lądownik. Przekazywanie paliwa w tej skali nie zostało jeszcze zademonstrowane.',
      'Biuro Inspektora Generalnego NASA wskazuje trzy ryzyka: nieprzetestowane tankowanie orbitalne, przesunięcia harmonogramu [[starship|Starshipa]] rozchodzące się na cały program Artemis oraz konieczność jednoczesnego osiągnięcia gotowości przez wiele systemów. Terminy przesuwały się już wielokrotnie i należy je czytać jako intencję.',
    ],
    fakty: [
      { etykieta: 'Kontrakt dla SpaceX', wartosc: '2,9 mld USD, kwiecień 2021', pewnosc: 'potwierdzone' },
      { etykieta: 'Kontrakt dla Blue Origin', wartosc: '3,4 mld USD', pewnosc: 'potwierdzone' },
      { etykieta: 'Starty na jedno lądowanie', wartosc: 'ok. 8–10 lotów Starshipa', stanNa: '2026-03', pewnosc: 'szacunkowe' },
      { etykieta: 'Różnice wobec Starshipa', wartosc: 'brak osłony termicznej i klap, silniczki lądownicze wyżej na kadłubie', pewnosc: 'potwierdzone' },
      { etykieta: 'Kluczowe ryzyko', wartosc: 'niezademonstrowane tankowanie na orbicie', pewnosc: 'potwierdzone' },
      { etykieta: 'Harmonogram', wartosc: 'wielokrotnie przesuwany; wersje NASA i wykonawcy się różnią', pewnosc: 'sporne' },
    ],
    ciekawostki: [
      {
        tekst: 'Lądownik, który ma postawić ludzi na Księżycu, nie potrafi wrócić na Ziemię — nie ma osłony termicznej ani klap sterowych, bo nigdy nie wchodzi w ziemską atmosferę. Silniki do przyziemienia umieszczono wyżej na kadłubie, żeby strumień spalin nie wzbijał pyłu spod samego dna pojazdu.',
        zrodlo: Z.oigHls,
      },
    ],
    os: [
      { data: '2021-04', tytul: 'Kontrakt HLS', opis: 'NASA wybiera SpaceX jako wykonawcę lądownika dla Artemis III.', waga: 3 },
      { data: '2026-03', tytul: 'Raport Inspektora Generalnego', opis: 'NASA OIG wskazuje tankowanie orbitalne jako główne ryzyko programu.', waga: 2 },
    ],
    powiazane: [
      { id: 'starship', powod: 'wersja rozwojowa tego pojazdu, bez osłony termicznej' },
      { id: 'raptor', powod: 'ten sam napęd, ale uzupełniony silniczkami do przyziemienia' },
      { id: 'spacex', powod: 'jej największy kontrakt rządowy' },
      { id: 'starship-lot-13', powod: 'postęp programu lotów testowych rozstrzyga o terminach lądowania' },
    ],
    status: 'w rozwoju',
    zrodla: [Z.oigHls, Z.nprHls, Z.nasaNextstep],
    zaktualizowano: '2026-09-12',
  },
];

/** Loty testowe Starshipa poza tymi, które mają już własne encje. */
const lotyStarshipa: Encja[] = [
  {
    id: 'starship-lot-1',
    typ: 'misja',
    nazwa: 'Starship, lot 1',
    aka: ['Flight 1', 'pierwszy lot Starshipa'],
    krotki: 'Rakieta rozpadła się po czterech minutach, a stanowisko startowe rozbiła tak, że trzeba je było przebudować.',
    tresc: [
      'Dwudziestego kwietnia 2023 roku [[starship|Starship]] poleciał po raz pierwszy. Trzydzieści trzy silniki [[raptor|Raptor 2]] uniosły najcięższą rakietę w historii, ale kilka z nich nie pracowało już od startu. Po czterech minutach pojazd zaczął koziołkować i uległ zniszczeniu.',
      'Największe szkody nie były w powietrzu, a na ziemi. Strumień spalin wyrwał krater pod [[stage-zero|mocowaniem startowym]] i rozrzucił beton na znaczną odległość. Stanowisko wymagało przebudowy, w tym instalacji wodnej tłumiącej falę akustyczną.',
      'Program przyjął to jako wynik, nie jako porażkę — [[rud|rozpad rakiety]] był tu jednym z możliwych rezultatów lotu testowego. Wnioski z tego startu i trzech kolejnych doprowadziły do [[starship-lot-5|pierwszego złapania członu]] półtora roku później.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '20 kwietnia 2023', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas lotu', wartosc: 'ok. 4 minuty', pewnosc: 'potwierdzone' },
      { etykieta: 'Silniki', wartosc: '33 × Raptor 2; część nie pracowała od startu', pewnosc: 'potwierdzone' },
      { etykieta: 'Szkody naziemne', wartosc: 'krater pod mocowaniem startowym, przebudowa stanowiska', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Strumień spalin trzydziestu trzech silników wyrwał w betonie pod stanowiskiem krater i rozrzucił gruz na setki metrów. Po tym locie dobudowano instalację wodną tłumiącą falę akustyczną — rozwiązanie, które przy mniejszych rakietach stosuje się od dekad.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2023-04-20', tytul: 'Lot 1', opis: 'Rakieta rozpada się po czterech minutach; stanowisko wymaga przebudowy.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship', powod: 'jego pierwszy lot testowy' },
      { id: 'stage-zero', powod: 'stanowisko zostało wtedy poważnie uszkodzone' },
      { id: 'rud', powod: 'najbardziej znany przykład tego określenia' },
      { id: 'starship-lot-5', powod: 'sukces, do którego doprowadziły wnioski z tego lotu' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-9',
    typ: 'misja',
    nazwa: 'Starship, lot 9',
    aka: ['Flight 9', 'pierwszy powtórny lot Super Heavy'],
    krotki: 'Pierwszy lot członu nośnego użytego po raz drugi — złapany przy locie 7, wysłany ponownie cztery miesiące później.',
    tresc: [
      'Dwudziestego siódmego maja 2025 roku [[starship|Starship]] wystartował na członie B14, [[super-heavy|Super Heavy]] złapanym przez wieżę przy locie 7 w styczniu tego samego roku. Był to pierwszy przypadek, w którym ten sam dolny stopień poleciał dwukrotnie.',
      'Znaczenie tego faktu jest takie samo jak przy [[ses-10|SES-10]] dla [[falcon-9|Falcona 9]]: złapanie członu dowodzi, że wraca, ale dopiero powtórny lot dowodzi, że wraca w stanie zdatnym do użycia. Bez tego [[reuzywalnosc|cała idea]] pozostaje deklaracją.',
      'Sam lot skończył się utratą obu elementów — booster przepadł nad Zatoką Meksykańską, a statek nad Oceanem Indyjskim, po wycieku paliwa. Rezultat techniczny był więc mieszany, ale jedno pytanie doczekało się odpowiedzi.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '27 maja 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Booster', wartosc: 'B14, wcześniej złapany przy locie 7', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy powtórny lot członu Super Heavy', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik', wartosc: 'utrata boostera nad zatoką i statku nad Oceanem Indyjskim', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Między złapaniem członu a jego ponownym startem minęły cztery miesiące. Dla porównania: przygotowanie promu kosmicznego do kolejnego lotu trwało zwykle kilka miesięcy i wymagało rozebrania pojazdu na części.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2025-05-27', tytul: 'Lot 9', opis: 'Pierwszy powtórny lot członu Super Heavy.', waga: 3 },
    ],
    powiazane: [
      { id: 'super-heavy', powod: 'to jego człon poleciał tu po raz drugi' },
      { id: 'starship-lot-5', powod: 'lot, na którym pierwszy raz złapano człon' },
      { id: 'ses-10', powod: 'ten sam przełom w programie Falcona 9, osiem lat wcześniej' },
      { id: 'reuzywalnosc', powod: 'dowód, że złapany człon nadaje się do ponownego lotu' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-10',
    typ: 'misja',
    nazwa: 'Starship, lot 10',
    aka: ['Flight 10'],
    krotki: 'Kontrolowane wodowanie statku z celnością liczoną w metrach — po serii trzech lotów zakończonych utratą górnego stopnia.',
    tresc: [
      'Dwudziestego szóstego sierpnia 2025 roku [[starship|Starship]] poleciał na członie B16 ze statkiem S37. Po trzech kolejnych lotach, na których górny stopień przepadał, ten wykonał kontrolowane wodowanie na Oceanie Indyjskim — w odległości trzech metrów od punktu celowania.',
      'Booster również zszedł w sposób kontrolowany, wodując nad Zatoką Meksykańską. Obie części zachowały się zgodnie z planem, choć żadnej nie próbowano odzyskać.',
      'Celność trzech metrów przy pojeździe wracającym z prędkości bliskiej orbitalnej jest liczbą, którą warto zapamiętać: pokazuje, że sterowanie w fazie [[wejscie-atmosferyczne|wejścia w atmosferę]] było już wtedy opanowane. Brakowało tylko pewności, że osłona termiczna wytrzyma — a to potwierdził dopiero [[starship-lot-13|lot 13]].',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '26 sierpnia 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Egzemplarze', wartosc: 'booster B16, statek S37', pewnosc: 'potwierdzone' },
      { etykieta: 'Celność wodowania statku', wartosc: 'ok. 3 metry od punktu celowania', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik', wartosc: 'sukces; kontrolowane wodowanie obu elementów', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Statek wracający z prędkości bliskiej orbitalnej osiadł trzy metry od punktu celowania. Dla porównania: kapsuły Apollo wodowały z dokładnością liczoną w kilometrach, a i tak uznawano to za bardzo dobry wynik.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2025-08-26', tytul: 'Lot 10', opis: 'Kontrolowane wodowanie z celnością trzech metrów.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship', powod: 'jego dziesiąty lot testowy' },
      { id: 'wejscie-atmosferyczne', powod: 'lot dowiódł opanowania sterowania w tej fazie' },
      { id: 'starship-lot-11', powod: 'następny lot, ostatni na konstrukcji Block 2' },
      { id: 'starship-lot-13', powod: 'to on potwierdził wytrzymałość osłony termicznej' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-11',
    typ: 'misja',
    nazwa: 'Starship, lot 11',
    aka: ['Flight 11', 'ostatni lot Block 2'],
    krotki: 'Ostatni lot konstrukcji Block 2, zakończony kontrolowanym wodowaniem obu elementów dokładnie w punkcie celowania.',
    tresc: [
      'Trzynastego października 2025 roku [[starship|Starship]] poleciał na członie B15 ze statkiem S38. Był to ostatni lot pojazdów konstrukcji Block 2 — kolejny, [[starship-lot-12|lot 12]], odbył się już na Block 3.',
      'Rezultat powtórzył [[starship-lot-10|lot 10]]: kontrolowane wodowanie boostera nad Zatoką Meksykańską i statku nad Oceanem Indyjskim, tym razem dokładnie w punkcie celowania.',
      'Dwa udane loty pod rząd na tej samej konstrukcji są w programie, który wcześniej stracił trzy statki z rzędu, ważnym sygnałem: konstrukcja przestała być zmienną. Kolejnym krokiem mogła już być zmiana pojazdu, nie poprawianie starego.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '13 października 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Egzemplarze', wartosc: 'booster B15, statek S38', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'ostatni lot konstrukcji Block 2', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik', wartosc: 'sukces; oba elementy wodowały zgodnie z planem', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Konstrukcję Block 2 wycofano po dwóch udanych lotach pod rząd — czyli dokładnie wtedy, gdy zaczęła działać. Program nie optymalizuje tego, co już umie; przechodzi do następnej wersji, gdy tylko poprzednia przestanie zaskakiwać.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2025-10-13', tytul: 'Lot 11', opis: 'Ostatni lot Block 2 kończy się wodowaniem obu elementów w punkcie celowania.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship', powod: 'jego jedenasty lot testowy' },
      { id: 'starship-lot-10', powod: 'poprzedni lot, z tym samym rezultatem' },
      { id: 'starship-lot-12', powod: 'następny lot, już na konstrukcji Block 3' },
      { id: 'super-heavy', powod: 'jego człon wodował kontrolowanie nad zatoką' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-12',
    typ: 'misja',
    nazwa: 'Starship, lot 12',
    aka: ['Flight 12', 'debiut Block 3'],
    krotki: 'Debiut konstrukcji Block 3 z dwudziestoma makietami satelitów wypuszczonymi w połowie godzinnego lotu.',
    tresc: [
      'Dwudziestego drugiego maja 2026 roku [[starship|Starship]] poleciał po raz pierwszy w konstrukcji Block 3, na członie B19 ze statkiem S39. Pojazd niósł dwadzieścia makiet satelitów [[starlink|Starlink]], wypuszczonych mniej więcej w połowie trwającego godzinę lotu.',
      'Górny stopień wykonał kontrolowane wodowanie na Oceanie Indyjskim. Człon nośny przepadł nad zatoką — przy hamowaniu odpaliło dwadzieścia z trzydziestu trzech silników [[raptor|Raptor]].',
      'Znaczenie tego lotu polega na tym, że próba wypuszczania ładunku przestała być teorią. Dwa miesiące później [[starship-lot-13|lot 13]] powtórzył ten manewr, tym razem z prawdziwymi satelitami generacji V3.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '22 maja 2026', pewnosc: 'potwierdzone' },
      { etykieta: 'Egzemplarze', wartosc: 'booster B19, statek S39', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: '20 makiet satelitów Starlink', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy lot konstrukcji Block 3', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik boostera', wartosc: 'utracony — odpaliło 20 z 33 silników', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Pierwsze dwadzieścia „satelitów" wypuszczonych przez Starshipa było makietami o masie zbliżonej do prawdziwych. Program sprawdzał wtedy sam mechanizm wypuszczania ładunku, nie satelity — te przyszły dwa miesiące później.',
        zrodlo: Z.nprLot12,
      },
    ],
    os: [
      { data: '2026-05-22', tytul: 'Lot 12', opis: 'Debiut Block 3 i pierwsze wypuszczenie ładunku, na razie w postaci makiet.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship', powod: 'jego dwunasty lot testowy i debiut nowej konstrukcji' },
      { id: 'starship-lot-13', powod: 'następny lot, z prawdziwymi satelitami' },
      { id: 'starlink', powod: 'makiety jego satelitów były tu ładunkiem' },
      { id: 'starship-lot-11', powod: 'poprzedni lot, ostatni na Block 2' },
    ],
    status: 'historyczne',
    zrodla: [Z.nprLot12, Z.wikiStartyStarship],
    zaktualizowano: '2026-09-13',
  },
  {
    id: 'starship-lot-7',
    typ: 'misja',
    nazwa: 'Starship, lot 7',
    aka: ['Flight 7', 'drugie złapanie'],
    krotki: 'Wieża złapała człon po raz drugi, a górny stopień przepadł — pierwszy z trzech kolejnych lotów z utratą statku.',
    tresc: [
      'Szesnastego stycznia 2025 roku [[starship|Starship]] poleciał na członie B14 ze statkiem S33. [[super-heavy|Super Heavy]] wrócił i został przechwycony przez ramiona wieży — drugi udany chwyt po [[starship-lot-5|locie 5]].',
      'Górny stopień nie doleciał. Wyciek paliwa doprowadził do wyłączania silników i utraty łączności telemetrycznej; statek przepadł. Ten sam scenariusz powtórzył się przy locie 8 w marcu i, w innej postaci, przy [[starship-lot-9|locie 9]] w maju.',
      'Trzy loty z rzędu z utratą statku po dwóch udanych chwytach członu pokazały, gdzie leży wtedy prawdziwy problem programu. Dolny stopień był już opanowany; górny — jeszcze nie. Rozstrzygnęły to dopiero [[starship-lot-10|lot 10]] i kolejne.',
      'Złapany przy tym locie egzemplarz B14 poleciał ponownie cztery miesiące później, jako [[starship-lot-9|pierwszy powtórnie użyty Super Heavy]].',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '16 stycznia 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Egzemplarze', wartosc: 'booster B14, statek S33', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik członu', wartosc: 'złapany przez wieżę — drugi udany chwyt', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik statku', wartosc: 'utracony po wycieku paliwa', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Ten sam egzemplarz członu, złapany w styczniu, poleciał ponownie w maju. Booster z lotu, który w zestawieniach figuruje jako porażka, dostarczył programowi jego najważniejszy dowód: że złapany człon nadaje się do ponownego lotu.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2025-01-16', tytul: 'Lot 7', opis: 'Drugie udane złapanie członu i utrata górnego stopnia.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship-lot-5', powod: 'pierwsze złapanie członu, trzy miesiące wcześniej' },
      { id: 'starship-lot-9', powod: 'ten sam człon poleciał tam po raz drugi' },
      { id: 'super-heavy', powod: 'jego człon został tu złapany po raz drugi' },
      { id: 'starship', powod: 'jego siódmy lot testowy' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },
];

/** Pozostałe loty testowe Starshipa — cała seria od 2023 do 2025 roku. */
const wczesneLotyStarshipa: Encja[] = [
  {
    id: 'starship-lot-2',
    typ: 'misja',
    nazwa: 'Starship, lot 2',
    aka: ['Flight 2'],
    krotki: 'Rozdzielenie stopni po raz pierwszy zadziałało, ale człon eksplodował przy hamowaniu wstecznym, a statek przy powrocie.',
    tresc: [
      'Osiemnastego listopada 2023 roku [[starship|Starship]] poleciał po raz drugi, siedem miesięcy po [[starship-lot-1|locie 1]]. Stanowisko, przebudowane po kraterze wyrwanym przy pierwszym starcie, tym razem wytrzymało.',
      'Rozdzielenie stopni zadziałało — po raz pierwszy w tym programie. [[super-heavy|Super Heavy]] uległ jednak zniszczeniu podczas [[hamowania|hamowania wstecznego]], a górny stopień przepadł przy powrocie w atmosferę.',
      'Z punktu widzenia programu był to postęp mierzony tym, jak daleko udało się zajść: pierwszy lot skończył się po czterech minutach, drugi doszedł do rozdzielenia stopni i dalej. Kolejne loty przesuwały tę granicę po kolei.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '18 listopada 2023', pewnosc: 'potwierdzone' },
      { etykieta: 'Postęp wobec lotu 1', wartosc: 'udane rozdzielenie stopni', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik członu', wartosc: 'eksplozja przy hamowaniu wstecznym', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik statku', wartosc: 'utracony przy wejściu w atmosferę', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Między pierwszym a drugim lotem minęło siedem miesięcy, z czego większość poszła na odbudowę stanowiska startowego. Rakieta była gotowa wcześniej niż ziemia, z której miała wystartować.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2023-11-18', tytul: 'Lot 2', opis: 'Pierwsze udane rozdzielenie stopni; oba elementy utracone.', waga: 2 },
    ],
    powiazane: [
      { id: 'starship-lot-1', powod: 'poprzedni lot, po którym trzeba było odbudować stanowisko' },
      { id: 'starship-lot-3', powod: 'następna próba, trzy miesiące później' },
      { id: 'hamowania', powod: 'człon uległ zniszczeniu podczas hamowania wstecznego' },
      { id: 'starship', powod: 'jego drugi lot testowy' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-3',
    typ: 'misja',
    nazwa: 'Starship, lot 3',
    aka: ['Flight 3'],
    krotki: 'Statek doleciał do fazy powrotu i dopiero tam się rozpadł — pierwszy raz program zobaczył wejście w atmosferę z pokładu.',
    tresc: [
      'Czternastego marca 2024 roku [[starship|Starship]] poleciał po raz trzeci. [[super-heavy|Człon nośny]] eksplodował nad oceanem, a górny stopień przepadł przy [[wejscie-atmosferyczne|wejściu w atmosferę]].',
      'To ostatnie było jednak czymś nowym: statek doszedł aż do tej fazy i nadawał obraz, gdy plazma otulała kadłub. Program po raz pierwszy zobaczył, co się dzieje z pojazdem na tym odcinku drogi.',
      'Trzy loty, trzy utraty obu elementów — a mimo to granica przesuwała się z każdym razem dalej. Odwrócenie przyszło przy [[starship-lot-4|locie 4]], niecałe trzy miesiące później.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '14 marca 2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik członu', wartosc: 'eksplozja nad oceanem', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik statku', wartosc: 'utracony przy wejściu w atmosferę', pewnosc: 'potwierdzone' },
      { etykieta: 'Postęp', wartosc: 'pierwsze dotarcie statku do fazy powrotu', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Statek nadawał obraz aż do rozpadu, także wtedy, gdy plazma otaczała kadłub przy wejściu w atmosferę. Utracony pojazd zdążył przekazać dane z odcinka drogi, którego program wcześniej w ogóle nie widział.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2024-03-14', tytul: 'Lot 3', opis: 'Statek dociera do fazy powrotu i tam ulega zniszczeniu.', waga: 2 },
    ],
    powiazane: [
      { id: 'starship-lot-2', powod: 'poprzedni lot, zakończony wcześniej' },
      { id: 'starship-lot-4', powod: 'następny lot, pierwszy z przetrwanym powrotem' },
      { id: 'wejscie-atmosferyczne', powod: 'faza, do której dotarł po raz pierwszy' },
      { id: 'starship', powod: 'jego trzeci lot testowy' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-4',
    typ: 'misja',
    nazwa: 'Starship, lot 4',
    aka: ['Flight 4'],
    krotki: 'Pierwszy lot, po którym oba elementy dotrwały do wodowania — przełom po trzech kolejnych utratach.',
    tresc: [
      'Szóstego czerwca 2024 roku [[starship|Starship]] poleciał po raz czwarty i po raz pierwszy obie części dotrwały do końca lotu. [[super-heavy|Człon nośny]] wykonał kontrolowane wodowanie, a statek przetrwał [[wejscie-atmosferyczne|wejście w atmosferę]].',
      'Przetrwał w sensie ścisłym, nie estetycznym: osłona termiczna była miejscami uszkodzona, a jedna z klap sterowych nadpalona na tyle, że obraz z kamery pokazywał świecącą krawędź. Statek doleciał mimo to.',
      'Po trzech lotach zakończonych utratą obu elementów ten był momentem, w którym program przestał sprawdzać, czy pojazd w ogóle doleci, a zaczął sprawdzać, w jakim stanie. Cztery miesiące później przyszło [[starship-lot-5|pierwsze złapanie członu]].',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '6 czerwca 2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik członu', wartosc: 'kontrolowane wodowanie', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik statku', wartosc: 'przetrwał wejście w atmosferę', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy lot, w którym obie części dotrwały do końca', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Statek dotarł do wodowania z nadpaloną klapą sterową — kamera pokazywała świecącą krawędź przez znaczną część powrotu. Pojazd wylądował uszkodzony, ale wylądował, i właśnie to czyniło ten lot przełomem.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2024-06-06', tytul: 'Lot 4', opis: 'Pierwszy lot, po którym obie części dotrwały do wodowania.', waga: 3 },
    ],
    powiazane: [
      { id: 'starship-lot-3', powod: 'poprzedni lot, zakończony utratą obu elementów' },
      { id: 'starship-lot-5', powod: 'następny lot, z pierwszym złapaniem członu' },
      { id: 'oslona-termiczna', powod: 'jej uszkodzenia były głównym wnioskiem z tego lotu' },
      { id: 'starship', powod: 'jego czwarty lot testowy' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-6',
    typ: 'misja',
    nazwa: 'Starship, lot 6',
    aka: ['Flight 6', 'banan w kosmosie'],
    krotki: 'Chwyt przerwano automatycznie, bo wieża odniosła uszkodzenia przy starcie — a ładunkiem był pluszowy banan.',
    tresc: [
      'Dziewiętnastego listopada 2024 roku [[starship|Starship]] poleciał na członie B13 ze statkiem S31. Manewr chwytu przerwano automatycznie, bo [[stage-zero|wieża]] odniosła uszkodzenia w chwili startu; [[super-heavy|człon]] skierowano na wodowanie.',
      'Decyzję podjął układ automatyczny, bez udziału człowieka, i to jest tu najważniejsze: zabezpieczenie zadziałało w sytuacji, której nikt nie wywoływał celowo.',
      'Statek przerwał podejście do wieży i wykonał kontrolowane wodowanie. Osłona termiczna przetrwała mimo celowo zmniejszonej ochrony na części powierzchni — program sprawdzał, gdzie leży granica.',
      'Lot niósł też pierwszy ładunek w historii tego pojazdu. Był nim pluszowy banan, pełniący funkcję wskaźnika nieważkości.',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '19 listopada 2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Egzemplarze', wartosc: 'booster B13, statek S31', pewnosc: 'potwierdzone' },
      { etykieta: 'Chwyt', wartosc: 'przerwany automatycznie po uszkodzeniu wieży przy starcie', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek', wartosc: 'pluszowy banan jako wskaźnik nieważkości', pewnosc: 'potwierdzone' },
      { etykieta: 'Osłona termiczna', wartosc: 'przetrwała mimo celowo zmniejszonej ochrony', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Pierwszym ładunkiem, jaki Starship wyniósł w kosmos, był pluszowy banan. Pełnił funkcję wskaźnika nieważkości — przedmiotu na sznurku, który unosi się w chwili wyłączenia silników i pokazuje na obrazie, że statek jest już w stanie swobodnego spadku.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2024-11-19', tytul: 'Lot 6', opis: 'Automatyka przerywa chwyt po uszkodzeniu wieży; statek wodował kontrolowanie.', waga: 2 },
    ],
    powiazane: [
      { id: 'starship-lot-5', powod: 'poprzedni lot, z pierwszym udanym chwytem' },
      { id: 'starship-lot-7', powod: 'następny lot, z drugim udanym chwytem' },
      { id: 'stage-zero', powod: 'to jej uszkodzenie przesądziło o przerwaniu manewru' },
      { id: 'oslona-termiczna', powod: 'lot sprawdzał granicę jej wytrzymałości' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'starship-lot-8',
    typ: 'misja',
    nazwa: 'Starship, lot 8',
    aka: ['Flight 8'],
    krotki: 'Trzeci udany chwyt członu i druga z rzędu utrata statku — moment, w którym problem programu był już jednoznaczny.',
    tresc: [
      'Szóstego marca 2025 roku [[starship|Starship]] poleciał na członie B15 ze statkiem S34. [[super-heavy|Człon]] został złapany przez wieżę — trzeci udany chwyt w programie.',
      'Statek przepadł po wyłączeniach silników podczas pracy silnikowej, powtarzając scenariusz z [[starship-lot-7|lotu 7]] sprzed niespełna dwóch miesięcy.',
      'Dwa loty pod rząd z tym samym rezultatem — złapany człon i utracony statek — postawiły sprawę jasno. Dolny stopień był już opanowany, górny nie. Serię zamknął dopiero [[starship-lot-10|lot 10]] w sierpniu, po jeszcze jednej utracie przy [[starship-lot-9|locie 9]].',
    ],
    fakty: [
      { etykieta: 'Data', wartosc: '6 marca 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Egzemplarze', wartosc: 'booster B15, statek S34', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik członu', wartosc: 'złapany przez wieżę — trzeci udany chwyt', pewnosc: 'potwierdzone' },
      { etykieta: 'Wynik statku', wartosc: 'utracony po wyłączeniach silników', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Ten sam człon B15, złapany tutaj, wrócił do lotu pół roku później jako B15-2 przy locie 11 — i tym razem to statek doleciał, a człon wodował zgodnie z planem. Ten sam egzemplarz zaliczył więc obie połowy sukcesu, tylko w różnych lotach.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2025-03-06', tytul: 'Lot 8', opis: 'Trzeci udany chwyt członu i druga z rzędu utrata statku.', waga: 2 },
    ],
    powiazane: [
      { id: 'starship-lot-7', powod: 'poprzedni lot, z tym samym rezultatem' },
      { id: 'starship-lot-9', powod: 'następny lot, z pierwszym powtórnym użyciem członu' },
      { id: 'starship-lot-11', powod: 'ten sam człon B15 poleciał tam po raz drugi' },
      { id: 'super-heavy', powod: 'jego trzeci udany chwyt przez wieżę' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiStartyStarship, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },
];

/** Loty operacyjne i program, w ramach którego powstały. */
const operacyjne: Encja[] = [
  {
    id: 'commercial-crew',
    typ: 'wydarzenie',
    nazwa: 'Commercial Crew',
    aka: ['program załogowy NASA', 'CCP'],
    krotki: 'Program NASA, który zlecił firmom prywatnym wożenie astronautów — i przeżył tylko dlatego, że finansowano dwie naraz.',
    tresc: [
      'Po zakończeniu programu wahadłowców w 2011 roku Stany straciły zdolność wysyłania ludzi w kosmos z własnego terytorium. Odpowiedzią był program załogowy, zbudowany na tej samej zasadzie co towarzyszący mu [[cots|COTS]]: NASA kupuje przewóz, a nie statek, i płaci za osiągnięte kamienie milowe.',
      'Kluczowa decyzja zapadła na etapie wyboru wykonawców. [[bill-gerstenmaier|Bill Gerstenmaier]] przekonał agencję, żeby opóźnić ogłoszenie wyników i znaleźć dodatkowe pieniądze, byle utrzymać dwie konkurujące firmy zamiast jednej. Bez tego program miałby jednego dostawcę i jeden punkt awarii.',
      'Ścieżka [[spacex|SpaceX]] prowadziła przez [[demo-2|Demo-2]] w maju 2020 — lot testowy z ludźmi na pokładzie, kończący certyfikację — a potem przez [[crew-1|Crew-1]] w listopadzie, czyli pierwszą regularną wymianę załogi stacji.',
      'Program rozstrzygnął też o czymś, czego wtedy nie planowano. [[crew-dragon|Kapsuła]] zbudowana dla agencji rządowej stała się później pojazdem [[inspiration4|misji prywatnych]], w tym [[polaris-dawn|Polaris Dawn]] z pierwszym komercyjnym spacerem kosmicznym.',
    ],
    fakty: [
      { etykieta: 'Po co powstał', wartosc: 'odzyskanie zdolności lotów załogowych z terytorium USA', pewnosc: 'potwierdzone' },
      { etykieta: 'Formuła', wartosc: 'zakup przewozu, nie statku; płatność za kamienie milowe', pewnosc: 'potwierdzone' },
      { etykieta: 'Kluczowa decyzja', wartosc: 'finansowanie dwóch konkurujących firm zamiast jednej', pewnosc: 'potwierdzone' },
      { etykieta: 'Lot certyfikujący SpaceX', wartosc: 'Demo-2, maj 2020', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwszy lot operacyjny', wartosc: 'Crew-1, listopad 2020', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Program o mało nie miał jednego dostawcy. Decyzja o finansowaniu dwóch konkurujących firm zapadła dopiero po tym, jak Gerstenmaier przekonał agencję, żeby opóźniła ogłoszenie wyników i poszukała dodatkowych pieniędzy. Bez tego opóźnienia amerykańskie loty załogowe stałyby dziś na jednym pojeździe.',
        zrodlo: Z.wikiGerstenmaier,
      },
    ],
    os: [
      { data: '2011-07', tytul: 'Koniec programu wahadłowców', opis: 'Stany tracą zdolność wysyłania ludzi z własnego terytorium.', waga: 3 },
      { data: '2020-11-16', tytul: 'Pierwsza regularna wymiana załogi', opis: 'Crew-1 zamienia program testowy w usługę transportową.', waga: 3 },
    ],
    powiazane: [
      { id: 'crew-1', powod: 'pierwszy lot operacyjny w jego ramach' },
      { id: 'demo-2', powod: 'lot, który zamknął certyfikację' },
      { id: 'bill-gerstenmaier', powod: 'przeforsował finansowanie dwóch firm zamiast jednej' },
      { id: 'cots', powod: 'towarowy poprzednik zbudowany na tej samej zasadzie' },
      { id: 'crew-dragon', powod: 'pojazd, który powstał w tym programie' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiGerstenmaier, Z.nasaDemo2, Z.wikiDragon2],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'crew-1',
    typ: 'misja',
    nazwa: 'Crew-1',
    aka: ['Resilience', 'pierwszy lot operacyjny'],
    krotki: 'Pierwszy regularny lot załogowy, nie testowy — 167 dni na orbicie i koniec epoki, w której Amerykanie latali cudzym statkiem.',
    tresc: [
      'Crew-1 wystartował 16 listopada 2020 roku, pół roku po testowym [[demo-2|Demo-2]]. Na pokładzie byli Mike Hopkins, Victor Glover i Shannon Walker z NASA oraz Sōichi Noguchi z japońskiej agencji JAXA. Kapsułę załoga nazwała Resilience.',
      'Różnica wobec [[demo-2|Demo-2]] nie leży w technice, tylko w statusie. Tamten lot NASA nazywała testem; ten był pierwszą regularną wymianą załogi stacji w ramach [[commercial-crew|programu Commercial Crew]]. [[crew-dragon|Crew Dragon]] przestał być pojazdem sprawdzanym, a stał się pojazdem używanym.',
      'Misja trwała 167 dni, 6 godzin i 29 minut — ponad dwa i pół raza dłużej niż Demo-2 — i zakończyła się wodowaniem 2 maja 2021 roku. Pełna, czteroosobowa załoga po raz pierwszy poleciała amerykańskim statkiem od dziesięciu lat.',
      'Po Crew-1 poszły kolejne loty tej serii, numerowane po dziś dzień. To one, a nie [[inspiration4|misje prywatne]], stanowią większość lotów tej kapsuły.',
    ],
    fakty: [
      { etykieta: 'Start', wartosc: '16 listopada 2020, 00:27 UTC', pewnosc: 'potwierdzone' },
      { etykieta: 'Załoga', wartosc: 'Hopkins, Glover, Walker (NASA), Noguchi (JAXA)', pewnosc: 'potwierdzone' },
      { etykieta: 'Nazwa kapsuły', wartosc: 'Resilience', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas trwania', wartosc: '167 dni 6 godzin 29 minut', pewnosc: 'potwierdzone' },
      { etykieta: 'Powrót', wartosc: '2 maja 2021', pewnosc: 'potwierdzone' },
      { etykieta: 'Status', wartosc: 'pierwszy lot operacyjny, nie testowy', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Załoga nazwała kapsułę Resilience — po angielsku „odporność" — nadając jej imię we wrześniu 2020 roku, w trakcie pandemii. Ta sama kapsuła poleciała rok później w misji Inspiration4, pierwszym locie orbitalnym bez zawodowego astronauty na pokładzie.',
        zrodlo: Z.wikiCrew1,
      },
    ],
    os: [
      { data: '2020-11-16', tytul: 'Start Crew-1', opis: 'Pierwsza regularna wymiana załogi stacji amerykańskim statkiem.', waga: 3 },
      { data: '2021-05-02', tytul: 'Wodowanie', opis: 'Powrót po 167 dniach na orbicie.', waga: 2 },
    ],
    powiazane: [
      { id: 'commercial-crew', powod: 'pierwszy lot operacyjny tego programu' },
      { id: 'demo-2', powod: 'poprzedni lot, formalnie testowy' },
      { id: 'crew-dragon', powod: 'kapsuła, która przeszła tu z prób do służby' },
      { id: 'inspiration4', powod: 'ta sama kapsuła Resilience poleciała w niej rok później' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiCrew1, Z.wikiDragon2],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'transporter',
    typ: 'misja',
    nazwa: 'Transporter',
    aka: ['rideshare', 'loty współdzielone', 'Bandwagon'],
    krotki: 'Loty współdzielone, na których ponad sto małych satelitów różnych właścicieli leci jedną rakietą na wspólną orbitę.',
    tresc: [
      'Klasyczny start wynosi jeden duży ładunek jednego klienta. Program Transporter odwraca ten układ: [[falcon-9|Falcon 9]] zabiera kilkadziesiąt albo ponad sto [[smallsat|małych satelitów]] różnych właścicieli i odstawia je wszystkie na tę samą [[sso|orbitę heliosynchroniczną]].',
      'Skala bywa znaczna — misja Transporter-12 niosła 131 ładunków, a Transporter-13 siedemdziesiąt cztery. Starty odbywają się z bazy [[vandenberg|Vandenberg]] na zachodnim wybrzeżu, bo stamtąd najłatwiej wejść na orbitę o dużym nachyleniu.',
      'Odmianą programu jest Bandwagon, kierujący ładunki na orbity o mniejszym nachyleniu — dla tych klientów, którym orbita heliosynchroniczna nie odpowiada.',
      'Znaczenie tych lotów jest ekonomiczne, nie techniczne. Mały satelita, którego nie stać na własną rakietę, dostaje miejsce w wspólnym locie po ułamku ceny — i to jest realizacja tego, co opisuje [[koszt-kilograma|koszt kilograma na orbicie]], od strony klienta.',
    ],
    fakty: [
      { etykieta: 'Zasada', wartosc: 'wspólny lot wielu małych satelitów różnych właścicieli', pewnosc: 'potwierdzone' },
      { etykieta: 'Transporter-12', wartosc: '131 ładunków', pewnosc: 'potwierdzone' },
      { etykieta: 'Transporter-13', wartosc: '74 ładunki', pewnosc: 'potwierdzone' },
      { etykieta: 'Orbita docelowa', wartosc: 'heliosynchroniczna', pewnosc: 'potwierdzone' },
      { etykieta: 'Miejsce startu', wartosc: 'Vandenberg', pewnosc: 'potwierdzone' },
      { etykieta: 'Odmiana', wartosc: 'Bandwagon — orbity o mniejszym nachyleniu', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Jedna misja Transporter-12 wyniosła sto trzydzieści jeden ładunków naraz. Dla porównania: przez cały 2009 rok cały świat wykonał mniej niż osiemdziesiąt startów orbitalnych łącznie — jeden lot niesie dziś więcej osobnych satelitów, niż wtedy startowało rakiet.',
        zrodlo: Z.wikiTransporter,
      },
    ],
    os: [
      { data: '2025-01', tytul: 'Transporter-12', opis: 'Jeden lot wynosi 131 ładunków na orbitę heliosynchroniczną.', waga: 2 },
    ],
    powiazane: [
      { id: 'smallsat', powod: 'to dla nich powstał ten program' },
      { id: 'sso', powod: 'orbita docelowa większości tych lotów' },
      { id: 'vandenberg', powod: 'baza, z której startują' },
      { id: 'koszt-kilograma', powod: 'realizacja taniego dostępu do orbity od strony klienta' },
      { id: 'falcon-9', powod: 'rakieta obsługująca cały program' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiTransporter, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-13',
  },
];

export const misje: Encja[] = [
  ...falcon1, ...wczesne, ...przelomy, ...starshipMisje, ...lotyStarshipa,
  ...wczesneLotyStarshipa, ...operacyjne,
];
