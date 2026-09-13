import type { Encja } from '../types';
import { Z } from '../zrodla';

/** Firma i spór o to, kto ją założył. */
const firma: Encja[] = [
  {
    id: 'tesla',
    typ: 'firma',
    nazwa: 'Tesla',
    aka: ['Tesla Motors', 'Tesla, Inc.', 'TSLA'],
    krotki: 'Producent samochodów elektrycznych, którego Musk nie założył, ale sfinansował — i o którego założycielstwo poszła sprawa do sądu.',
    tresc: [
      'Tesla Motors została zarejestrowana 1 lipca 2003 roku przez Martina Eberharda i Marca Tarpenninga. [[elon-musk|Musk]] pojawił się dziewięć miesięcy później: w lutym 2004 poprowadził rundę A o wartości 7,5 miliona dolarów i objął stanowisko przewodniczącego rady. Dyrektorem generalnym został w październiku 2008 — a [[spor-o-zalozycieli|kto tę firmę założył]], rozstrzygnęła ostatecznie ugoda sądowa.', 'Linia modelowa rozwijała się od góry cennika w dół, zgodnie z planem przyjętym na starcie: najpierw drogi [[tesla-roadster|Roadster]] w 2008 roku, potem [[model-s|Model S]] w 2012, [[model-x|Model X]] w 2015, masowy [[model-3|Model 3]] w 2017, [[model-y|Model Y]] w 2020 i [[cybertruck|Cybertruck]] w 2023.',
      'Produkcja rozłożyła się na fabryki nazywane [[gigafactory|gigafabrykami]] — w Nevadzie, Szanghaju od grudnia 2019, Berlinie od marca 2022 i Teksasie od kwietnia 2022. Osobną gałęzią jest magazynowanie energii: [[powerwall|Powerwall]] dla domów i [[megapack|Megapack]] dla sieci.', 'W 2025 roku Tesla dostarczyła 1,66 miliona pojazdów przy przychodzie 94,83 miliarda dolarów i zysku netto 3,79 miliarda. Firma wielokrotnie przekraczała bilion dolarów kapitalizacji. Jej związek ze [[spacex|SpaceX]] jest wyłącznie osobowy — łączy je ta sama osoba na szczycie, nie struktura właścicielska. Publicznie zetknęły się raz: gdy Roadster poleciał [[falcon-heavy-demo|na Falconie Heavy]].',
    ],
    fakty: [
      { etykieta: 'Data rejestracji', wartosc: '1 lipca 2003', pewnosc: 'potwierdzone' },
      { etykieta: 'Założyciele', wartosc: 'Eberhard i Tarpenning; pięciu współzałożycieli po ugodzie z 2009', pewnosc: 'sporne' },
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
      { id: 'falcon-heavy-demo', powod: 'jej Roadster był ładunkiem tego lotu' },
      { id: 'spacex', powod: 'siostrzana firma tego samego człowieka, bez powiązań właścicielskich' },
      { id: 'spor-o-zalozycieli', powod: 'jej własne założycielstwo rozstrzygnął sąd, nie historia' },
      { id: 'model-3', powod: 'model, który miał ją przenieść na rynek masowy — i prawie wykończył' },
      { id: 'gigafactory', powod: 'sieć fabryk, na której stoi cała jej produkcja' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiTesla, Z.wikiMusk],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'spor-o-zalozycieli',
    typ: 'wydarzenie',
    nazwa: 'Spór o założycieli Tesli',
    aka: ['founders dispute', 'Eberhard kontra Musk'],
    krotki: 'Firmę zarejestrowały dwie osoby, Musk dołączył dziewięć miesięcy później, a tytuł współzałożyciela rozdzielił sąd.',
    tresc: [
      '[[tesla|Tesla Motors]] została zarejestrowana 1 lipca 2003 roku przez Martina Eberharda i Marca Tarpenninga. [[elon-musk|Musk]] wszedł do firmy w lutym 2004, prowadząc rundę finansowania A — dziewięć miesięcy po jej powstaniu. Eberhard był pierwszym dyrektorem generalnym; Musk objął to stanowisko w październiku 2008.', 'Spór o to, kto może nazywać się założycielem, skończył się w sądzie. Ugoda z września 2009 roku ustaliła, że tytułem współzałożyciela może posługiwać się pięć osób: Eberhard, Tarpenning, Ian Wright, Musk i JB Straubel.',
      'To rzadki przypadek, w którym status założyciela firmy wynika z porozumienia prawnego, a nie z faktu historycznego. Warto o tym pamiętać przy każdym zdaniu, które mówi, że Musk „założył Teslę" — jest formalnie prawdziwe od 2009 roku i nie było prawdziwe w 2003. Dla porównania: [[spacex|SpaceX]] Musk założył sam i w tym przypadku żadnego sporu nie ma. Pierwszym produktem firmy pod kierownictwem Eberharda był [[tesla-roadster|Roadster]]; [[model-s|Model S]], który przesądził o jej przetrwaniu, powstał już pod Muskiem.',
    ],
    fakty: [
      { etykieta: 'Rejestracja spółki', wartosc: '1 lipca 2003, Eberhard i Tarpenning', pewnosc: 'potwierdzone' },
      { etykieta: 'Wejście Muska', wartosc: 'luty 2004, dziewięć miesięcy później', pewnosc: 'potwierdzone' },
      { etykieta: 'Ugoda sądowa', wartosc: 'wrzesień 2009', pewnosc: 'potwierdzone' },
      { etykieta: 'Uznani współzałożyciele', wartosc: 'Eberhard, Tarpenning, Wright, Musk, Straubel', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Tytuł współzałożyciela Tesli przysługuje pięciu osobom na mocy ugody sądowej z 2009 roku. Nie jest to ustalenie historyków, tylko warunek porozumienia — jedna z niewielu firm na świecie, w której o własnym pochodzeniu rozstrzygnął dokument prawny.',
        zrodlo: Z.wikiTesla,
      },
    ],
    os: [
      { data: '2003-07-01', tytul: 'Rejestracja', opis: 'Eberhard i Tarpenning zakładają spółkę.', waga: 2 },
      { data: '2009-09', tytul: 'Ugoda', opis: 'Pięć osób może posługiwać się tytułem współzałożyciela.', waga: 3 },
    ],
    powiazane: [
      { id: 'tesla', powod: 'dotyczy jej założycielstwa' },
      { id: 'elon-musk', powod: 'dołączył do firmy dziewięć miesięcy po jej rejestracji' },
      { id: 'tesla-roadster', powod: 'pierwszy produkt, powstały jeszcze pod pierwszym dyrektorem generalnym' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiTesla, Z.wikiMusk],
    zaktualizowano: '2026-09-12',
  },
];

/** Samochody, w kolejności, w jakiej schodziły z górnej półki cennika. */
const samochody: Encja[] = [
  {
    id: 'tesla-roadster',
    typ: 'produkt',
    nazwa: 'Tesla Roadster',
    aka: ['Roadster 2008', 'Roadster pierwszej generacji'],
    krotki: 'Pierwszy seryjny samochód drogowy na ogniwach litowo-jonowych i pierwszy z zasięgiem powyżej 300 km.',
    tresc: [
      'Roadster produkowano od 2008 do 2012 roku i zbudowano około 2 450 egzemplarzy. Nadwozie i zawieszenie oparto na Lotusie Elise, ale wspólnych części było zaledwie sześć–siedem procent: szyba, poduszki powietrzne i elementy zawieszenia. Resztę [[tesla|Tesla]] zrobiła sama.', 'Znaczenie tego auta nie leży w osiągach, choć 3,9 sekundy do setki w 2008 roku było wynikiem samochodu sportowego. Leży w tym, że był to pierwszy dopuszczony do ruchu, produkowany seryjnie samochód w pełni elektryczny na ogniwach litowo-jonowych i pierwszy elektryk seryjny z zasięgiem przekraczającym 320 kilometrów. Akumulator miał 53 kWh, zasięg 244 mile według EPA.',
      'Cena wynosiła od około 99 do 128,5 tysiąca dolarów i to też był plan: drogi samochód dla nielicznych miał sfinansować tańszy dla wielu, czyli [[model-s|Model S]], a ten z kolei [[model-3|Model 3]]. Roadster jest pierwszym szczeblem tej drabiny.', 'W lutym 2018 roku prywatny egzemplarz [[elon-musk|Muska]] o numerze seryjnym 686 stał się pierwszym samochodem produkcyjnym wysłanym w kosmos — [[falcon-heavy-demo|na pierwszym locie Falcona Heavy]], na orbitę heliocentryczną wykraczającą za orbitę Marsa.',
    ],
    fakty: [
      { etykieta: 'Produkcja', wartosc: '2008–2012', pewnosc: 'potwierdzone' },
      { etykieta: 'Liczba egzemplarzy', wartosc: 'ok. 2 450', stanNa: '2012', pewnosc: 'potwierdzone' },
      { etykieta: 'Akumulator', wartosc: '53 kWh', pewnosc: 'potwierdzone' },
      { etykieta: 'Zasięg', wartosc: '244 mile (ok. 393 km) według EPA', pewnosc: 'potwierdzone' },
      { etykieta: 'Przyspieszenie 0–100 km/h', wartosc: '3,9 s (3,7 s w wersji Sport)', pewnosc: 'potwierdzone' },
      { etykieta: 'Cena', wartosc: '99–128,5 tys. USD', pewnosc: 'potwierdzone' },
      { etykieta: 'Podstawa konstrukcji', wartosc: 'płyta Lotusa Elise, ok. 6–7% wspólnych części', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Roadster dzielił z Lotusem Elise tylko sześć do siedmiu procent części — szybę, poduszki powietrzne i kilka elementów zawieszenia. Opinia, że to „przerobiony Lotus", trzyma się od kilkunastu lat i jest o mniej więcej dziewięćdziesiąt procent nieprawdziwa.',
        zrodlo: Z.wikiRoadster,
      },
    ],
    os: [
      { data: '2008', tytul: 'Start produkcji', opis: 'Pierwszy seryjny elektryk na ogniwach litowo-jonowych wchodzi na drogi.', waga: 3 },
      { data: '2018-02-06', tytul: 'Roadster w kosmosie', opis: 'Egzemplarz Muska zostaje pierwszym samochodem produkcyjnym wysłanym w przestrzeń.', waga: 3 },
    ],
    powiazane: [
      { id: 'tesla', powod: 'jej pierwszy produkt' },
      { id: 'model-s', powod: 'następny szczebel planu — tańszy samochód sfinansowany zyskiem z tego' },
      { id: 'falcon-heavy-demo', powod: 'egzemplarz tego modelu był ładunkiem tego lotu' },
      { id: 'elon-musk', powod: 'oddał własny egzemplarz na lot rakiety' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiRoadster, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'model-s',
    typ: 'produkt',
    nazwa: 'Model S',
    aka: ['Model S Plaid'],
    krotki: 'Sedan, który udowodnił, że samochód elektryczny może być po prostu lepszym samochodem, a nie ustępstwem.',
    tresc: [
      'Prototyp pokazano w marcu 2009 roku, produkcja seryjna ruszyła w czerwcu 2012. Zakładano cenę 50–70 tysięcy dolarów i zasięg 200 mil; pierwsze egzemplarze dawały 208–265 mil, a wersje po odświeżeniu z 2021 roku sięgają 370–405 mil. Akumulatory miały od 40 do 100 kWh.', 'W 2013 roku Model S dostał tytuł Car of the Year od Motor Trend — pierwszy raz przyznany samochodowi elektrycznemu. W 2015 był najlepiej sprzedającym się samochodem z wtyczką na świecie, z 50 366 egzemplarzami.',
      'Wersja Plaid ma trzy silniki o łącznej moce 760 kW, czyli 1 020 koni, i rozpędza się do setki w 1,98 sekundy. To liczba, której nie bije żaden samochód spalinowy produkowany seryjnie.', 'Dla [[tesla|Tesli]] ten model był warunkiem przetrwania. [[tesla-roadster|Roadster]] pokazał, że elektryk może być szybki; Model S pokazał, że może być samochodem, którym jeździ się codziennie — i to on utrzymywał firmę do czasu, gdy [[model-3|Model 3]] przeszedł [[pieklo-produkcyjne|piekło produkcyjne]].',
    ],
    fakty: [
      { etykieta: 'Start produkcji', wartosc: 'czerwiec 2012', pewnosc: 'potwierdzone' },
      { etykieta: 'Zasięg', wartosc: '208–265 mil na start, 370–405 mil po 2021', pewnosc: 'potwierdzone' },
      { etykieta: 'Akumulator', wartosc: '40–100 kWh', pewnosc: 'potwierdzone' },
      { etykieta: 'Plaid — moc', wartosc: '760 kW (1 020 KM), trzy silniki', pewnosc: 'potwierdzone' },
      { etykieta: 'Plaid — 0–60 mph', wartosc: '1,98 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Sprzedaż w 2015', wartosc: '50 366 szt. — najlepszy elektryk świata', stanNa: '2015', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Tesla reklamowała Model S jako samochód z oceną bezpieczeństwa „5,4 gwiazdki". NHTSA odpowiedziała publicznie, że firma wprowadza opinię publiczną w błąd, bo w jej skali najwyższą możliwą oceną jest pięć gwiazdek i żadnej wartości powyżej nie da się przyznać.',
        zrodlo: Z.wikiModelS,
      },
    ],
    os: [
      { data: '2012-06', tytul: 'Start produkcji', opis: 'Pierwszy sedan Tesli wchodzi na rynek.', waga: 3 },
      { data: '2013', tytul: 'Car of the Year', opis: 'Motor Trend przyznaje tytuł po raz pierwszy samochodowi elektrycznemu.', waga: 2 },
    ],
    powiazane: [
      { id: 'tesla', powod: 'model, który utrzymał ją finansowo przez najtrudniejsze lata' },
      { id: 'tesla-roadster', powod: 'poprzedni szczebel planu, sfinansował jego rozwój' },
      { id: 'model-3', powod: 'następny szczebel — samochód dla rynku masowego' },
      { id: 'nadzor-nhtsa', powod: 'urząd publicznie skorygował jej przekaz o ocenie bezpieczeństwa' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiModelS, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'model-3',
    typ: 'produkt',
    nazwa: 'Model 3',
    aka: ['Model ☰'],
    krotki: 'Pierwszy samochód Tesli dla rynku masowego — i model, który przy rozruchu produkcji niemal wykończył firmę.',
    tresc: [
      'Model 3 pokazano 31 marca 2016 roku. W ciągu tygodnia zebrano 325 tysięcy rezerwacji, czyli ponad 14 miliardów dolarów potencjalnej sprzedaży. Wersja podstawowa miała kosztować 35 tysięcy dolarów przy zasięgu 215 mil według EPA.', 'Dostawy zaczęły się w lipcu 2017 i wtedy zaczęło się też [[pieklo-produkcyjne|piekło produkcyjne]]. W trzecim kwartale 2017 z fabryki wyjechało 260 samochodów przy celu 1 500. W czwartym kwartale dostarczono 1 542 sztuki — około 2 900 mniej, niż spodziewał się rynek. Cel pięciu tysięcy sztuk tygodniowo [[elon-musk|Musk]] przesunął z grudnia 2017 na marzec 2018.',
      'Potem krzywa się odwróciła: 1 764 dostawy w 2017 roku, 145 846 w 2018, 300 885 w 2019. W czerwcu 2021 Model 3 przekroczył milion sprzedanych egzemplarzy i był pierwszym samochodem elektrycznym w historii, któremu się to udało.', 'Rola tego modelu w historii [[tesla|Tesli]] jest podwójna: to on miał domknąć plan zaczęty [[tesla-roadster|Roadsterem]], i to on niemal doprowadził firmę do upadku po drodze. Jego następcą w segmencie SUV-ów został [[model-y|Model Y]], zbudowany na tej samej płycie.',
    ],
    fakty: [
      { etykieta: 'Premiera', wartosc: '31 marca 2016', pewnosc: 'potwierdzone' },
      { etykieta: 'Rezerwacje w tygodniu', wartosc: '325 tys., ponad 14 mld USD', stanNa: '2016-04', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsze dostawy', wartosc: 'lipiec 2017', pewnosc: 'potwierdzone' },
      { etykieta: 'Cena i zasięg na start', wartosc: '35 tys. USD, 215 mil według EPA', pewnosc: 'potwierdzone' },
      { etykieta: 'Dostawy 2017 / 2018 / 2019', wartosc: '1 764 / 145 846 / 300 885', pewnosc: 'potwierdzone' },
      { etykieta: 'Milion egzemplarzy', wartosc: 'czerwiec 2021 — pierwszy elektryk w historii', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'W trzecim kwartale 2017 roku, przy celu 1 500 samochodów, fabryka wypuściła 260. Firma tłumaczyła to „wąskimi gardłami produkcji" i zapewniała, że nie ma żadnych fundamentalnych problemów z produkcją ani z łańcuchem dostaw. Cel tygodniowy przesunięto wtedy o kwartał.',
        zrodlo: Z.wikiModel3,
      },
    ],
    os: [
      { data: '2016-03-31', tytul: 'Premiera', opis: 'Prezentacja i 325 tysięcy rezerwacji w ciągu tygodnia.', waga: 3 },
      { data: '2017-07', tytul: 'Pierwsze dostawy', opis: 'Początek dostaw i początek kryzysu produkcyjnego.', waga: 3 },
      { data: '2021-06', tytul: 'Milion sztuk', opis: 'Pierwszy samochód elektryczny, który przekroczył ten próg.', waga: 3 },
    ],
    powiazane: [
      { id: 'pieklo-produkcyjne', powod: 'jego rozruch produkcji jest właśnie tym okresem' },
      { id: 'tesla', powod: 'model, który miał ją przenieść na rynek masowy' },
      { id: 'model-y', powod: 'SUV zbudowany na tej samej płycie' },
      { id: 'model-s', powod: 'poprzedni szczebel planu, droższy i mniej liczny' },
      { id: 'gigafactory', powod: 'fabryki rozbudowane pod jego wolumen' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiModel3, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'model-x',
    typ: 'produkt',
    nazwa: 'Model X',
    aka: ['drzwi skrzydłowe'],
    krotki: 'SUV z drzwiami otwieranymi do góry — najbardziej skomplikowany i najmniej opłacalny samochód w linii Tesli.',
    tresc: [
      'Model X wszedł na rynek we wrześniu 2015 roku jako trzeci samochód [[tesla|Tesli]], między [[model-s|Modelem S]] a masowym [[model-3|Modelem 3]]. Dzieli z Modelem S płytę i większość napędu, ale ma nadwozie SUV-a i drzwi tylne otwierane do góry, nazywane skrzydłowymi.', 'Te drzwi są najlepszym przykładem kosztu, jaki potrafi generować pomysł wyglądający dobrze na prezentacji. Wymagały czujników, siłowników i logiki omijania przeszkód, opóźniły wejście modelu na rynek i przez lata ciągnęły za sobą reklamacje.',
      '[[elon-musk|Musk]] przyznawał potem, że Model X był przeprojektowany i że firma włożyła w niego zbyt wiele nowych rozwiązań naraz. Doświadczenie z tego modelu wpłynęło wprost na podejście do [[model-y|Modelu Y]] — ten dostał zwykłe drzwi i został najlepiej sprzedającym się samochodem świata.',
    ],
    fakty: [
      { etykieta: 'Wejście na rynek', wartosc: 'wrzesień 2015', pewnosc: 'potwierdzone' },
      { etykieta: 'Pozycja w linii', wartosc: 'trzeci model, po Modelu S', pewnosc: 'potwierdzone' },
      { etykieta: 'Wyróżnik', wartosc: 'tylne drzwi otwierane do góry', pewnosc: 'potwierdzone' },
      { etykieta: 'Podstawa techniczna', wartosc: 'płyta i napęd wspólne z Modelem S', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Drzwi skrzydłowe Modelu X wymagały czujników i logiki omijania przeszkód, żeby dało się je otworzyć w garażu. Efekt wizualny z prezentacji zamienił się w lata reklamacji — i w bezpośrednią lekcję, po której Model Y dostał zwykłe drzwi.',
        zrodlo: Z.wikiTesla,
      },
    ],
    os: [
      { data: '2015-09', tytul: 'Wejście na rynek', opis: 'Trzeci model Tesli, z tylnymi drzwiami otwieranymi do góry.', waga: 2 },
    ],
    powiazane: [
      { id: 'model-s', powod: 'dzieli z nim płytę i napęd' },
      { id: 'model-y', powod: 'następny SUV firmy, świadomie prostszy w budowie' },
      { id: 'tesla', powod: 'jej trzeci samochód i najtrudniejszy w produkcji' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiTesla, Z.wikiModelS],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'model-y',
    typ: 'produkt',
    nazwa: 'Model Y',
    aka: ['Juniper', 'Model Y L'],
    krotki: 'W 2023 roku najlepiej sprzedający się samochód na świecie — pierwszy elektryk, któremu się to udało.',
    tresc: [
      'Model Y pokazano 14 marca 2019 roku, produkcję uruchomiono w styczniu 2020 we Fremont, a dostawy zaczęły się w marcu 2020. Zbudowany jest na płycie [[model-3|Modelu 3]], co pozwoliło rozkręcić produkcję szybciej niż przy poprzednich modelach.', 'W 2023 roku Tesla dostarczyła 1,2 miliona egzemplarzy i Model Y został najlepiej sprzedającym się samochodem na świecie — pierwszym samochodem elektrycznym, który zdobył ten tytuł. Rok później spadł na drugie miejsce, za Toyotę RAV4. Łącznie sprzedano ponad 2,16 miliona sztuk.',
      'Przy tym modelu [[tesla|Tesla]] wprowadziła [[gigacasting|odlewanie wielkogabarytowe]] — zastąpienie siedemdziesięciu blaszanych części dwoma dużymi odlewami. Zasięg wynosi 260–357 mil, a odświeżenie ze stycznia 2025 roku podniosło go do 447 mil w wersji Long Range.', 'Przypadek Modelu Y jest odwrotnością [[model-x|Modelu X]]: zwykłe drzwi, płyta wzięta z istniejącego modelu, minimum nowości na raz — i najlepszy wynik sprzedaży w historii firmy.',
    ],
    fakty: [
      { etykieta: 'Premiera', wartosc: '14 marca 2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsze dostawy', wartosc: 'marzec 2020', pewnosc: 'potwierdzone' },
      { etykieta: 'Sprzedaż w 2023', wartosc: '1,2 mln szt. — najlepszy samochód świata', stanNa: '2023', pewnosc: 'potwierdzone' },
      { etykieta: 'Sprzedaż łącznie', wartosc: 'ponad 2,16 mln szt.', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Zasięg', wartosc: '260–357 mil; 447 mil po odświeżeniu z 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Podstawa techniczna', wartosc: 'płyta Modelu 3', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'W 2023 roku najlepiej sprzedającym się samochodem na świecie — nie elektrykiem, samochodem w ogóle — był Model Y. Rok później stracił ten tytuł na rzecz Toyoty RAV4. Pierwszy i na razie jedyny elektryk, który znalazł się na szczycie tej listy.',
        zrodlo: Z.wikiModelY,
      },
    ],
    os: [
      { data: '2019-03-14', tytul: 'Premiera', opis: 'Prezentacja SUV-a zbudowanego na płycie Modelu 3.', waga: 2 },
      { data: '2023', tytul: 'Najlepiej sprzedający się samochód świata', opis: '1,2 mln dostaw; pierwszy elektryk z tym tytułem.', waga: 3 },
      { data: '2025-01', tytul: 'Odświeżenie', opis: 'Wersja Juniper z zasięgiem do 447 mil.', waga: 1 },
    ],
    powiazane: [
      { id: 'model-3', powod: 'zbudowany na jego płycie' },
      { id: 'gigacasting', powod: 'pierwszy model produkowany tą metodą' },
      { id: 'model-x', powod: 'poprzedni SUV firmy, świadomie bardziej skomplikowany' },
      { id: 'tesla', powod: 'jej najlepiej sprzedający się produkt' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiModelY, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'cybertruck',
    typ: 'produkt',
    nazwa: 'Cybertruck',
    aka: ['pickup ze stali nierdzewnej'],
    krotki: 'Pickup o nadwoziu ze stali nierdzewnej, którego szyba pękła na własnej prezentacji.',
    tresc: [
      'Cybertruck pokazano 21 listopada 2019 roku w Los Angeles. Nadwozie robi się z blach stali nierdzewnej serii 300, ciętych laserem i giętych po prostych — [[tesla|Tesla]] opracowała do tego metodę gięcia sprężonym powietrzem, bez kontaktu narzędzia z powierzchnią. Wybór materiału jest tym samym rozumowaniem, które stoi za stalowym [[starship|Starshipem]].', 'Dostawy zaczęły się 30 listopada 2023 roku w fabryce w Teksasie, cztery lata po premierze. Obietnice z 2019 roku nie wytrzymały zderzenia z produkcją: cena startowa miała wynosić 39 900 dolarów, a wyniosła 60 990, czyli o ponad połowę więcej. Zasięg zapowiadano na 500 mil, a wersje produkcyjne dają najwyżej 340.',
      'Metoda gięcia sprężonym powietrzem należy do tej samej rodziny pomysłów co [[gigacasting|odlewanie wielkogabarytowe]] — upraszczać fabrykę, nie samochód. Do 27 lutego 2025 roku zbudowano 46 096 egzemplarzy. W 2024 sprzedano około 38 965 sztuk, a w pierwszych trzech kwartałach 2025 nieco ponad 16 tysięcy — wyraźny spadek. Między styczniem 2024 a październikiem 2025 model objęło dziesięć akcji serwisowych, dotyczących instalacji elektrycznej, konstrukcji, widoczności i oprogramowania.',
    ],
    fakty: [
      { etykieta: 'Premiera', wartosc: '21 listopada 2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsze dostawy', wartosc: '30 listopada 2023', pewnosc: 'potwierdzone' },
      { etykieta: 'Cena: obietnica a rzeczywistość', wartosc: '39 900 USD zapowiedziane, 60 990 USD na start', pewnosc: 'potwierdzone' },
      { etykieta: 'Zasięg: obietnica a rzeczywistość', wartosc: '500 mil zapowiedziane, do 340 mil w produkcji', pewnosc: 'potwierdzone' },
      { etykieta: 'Wyprodukowane egzemplarze', wartosc: '46 096', stanNa: '2025-02-27', pewnosc: 'potwierdzone' },
      { etykieta: 'Masa własna', wartosc: '3 020 kg (napęd na obie osie)', pewnosc: 'potwierdzone' },
      { etykieta: 'Akcje serwisowe', wartosc: '10 między styczniem 2024 i październikiem 2025', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Na prezentacji projektant Franz von Holzhausen rzucił metalową kulą w szyby, żeby pokazać wytrzymałość „Armor Glass". Szyby pękły — dwukrotnie, na scenie, przy włączonych kamerach. Samochód pozostał w ofercie z widocznymi pęknięciami do końca pokazu.',
        zrodlo: Z.wikiCybertruck,
      },
    ],
    os: [
      { data: '2019-11-21', tytul: 'Premiera', opis: 'Prezentacja w Los Angeles i pęknięte szyby na scenie.', waga: 3 },
      { data: '2023-11-30', tytul: 'Pierwsze dostawy', opis: 'Cztery lata po premierze, w fabryce w Teksasie.', waga: 2 },
    ],
    powiazane: [
      { id: 'tesla', powod: 'jej najbardziej nietypowy produkt' },
      { id: 'starship', powod: 'ten sam wybór materiału z tego samego powodu — stal nierdzewna zamiast kompozytu' },
      { id: 'gigafactory', powod: 'produkowany w fabryce w Teksasie' },
      { id: 'model-y', powod: 'model, który finansuje takie eksperymenty' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiCybertruck, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },
];

/** Produkcja: fabryki, ogniwa, odlewanie i kryzys rozruchowy. */
const produkcja: Encja[] = [
  {
    id: 'pieklo-produkcyjne',
    typ: 'wydarzenie',
    nazwa: 'Piekło produkcyjne',
    aka: ['production hell', 'rozruch Modelu 3'],
    krotki: 'Lata 2017–2018, w których Tesla nie potrafiła wyprodukować samochodu, na który miała 325 tysięcy zamówień.',
    tresc: [
      'Po premierze [[model-3|Modelu 3]] w marcu 2016 roku [[tesla|Tesla]] zebrała w tygodniu 325 tysięcy rezerwacji. Problem polegał na tym, że nie umiała tych samochodów zbudować. W trzecim kwartale 2017 z linii zjechało 260 egzemplarzy przy celu 1 500. W czwartym dostarczono 1 542 sztuki — około 2 900 mniej, niż zakładał rynek.', 'Firma tłumaczyła to wąskimi gardłami i utrzymywała, że nie ma fundamentalnych problemów z produkcją ani z łańcuchem dostaw. W listopadzie 2017 [[elon-musk|Musk]] przesunął cel pięciu tysięcy sztuk tygodniowo z grudnia 2017 na marzec 2018. Relacje z tego okresu mówią, że sypiał w fabryce.',
      'Wyjście z kryzysu było równie nietypowe jak sam kryzys: część montażu przeniesiono do namiotu rozstawionego obok fabryki, bo hala nie miała już miejsca na kolejną linię. Krzywa się odwróciła — 145 846 dostaw w 2018 roku wobec 1 764 rok wcześniej.', 'Ten okres pokrywa się czasowo z [[funding-secured|sierpniem 2018]], kiedy Musk napisał, że ma zabezpieczone finansowanie wykupu Tesli z giełdy. Oba wydarzenia mają jedno wspólne tło: firma była wtedy pod ogromną presją gotówkową i medialną.',
    ],
    fakty: [
      { etykieta: 'Produkcja III kw. 2017', wartosc: '260 szt. przy celu 1 500', pewnosc: 'potwierdzone' },
      { etykieta: 'Dostawy IV kw. 2017', wartosc: '1 542 szt., ok. 2 900 poniżej oczekiwań rynku', pewnosc: 'potwierdzone' },
      { etykieta: 'Przesunięcie celu tygodniowego', wartosc: 'z grudnia 2017 na marzec 2018', pewnosc: 'potwierdzone' },
      { etykieta: 'Dostawy 2017 a 2018', wartosc: '1 764 wobec 145 846', pewnosc: 'potwierdzone' },
      { etykieta: 'Rozwiązanie doraźne', wartosc: 'linia montażowa w namiocie obok fabryki', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Żeby domknąć produkcję, Tesla rozstawiła obok fabryki namiot i uruchomiła w nim część linii montażowej, bo w hali nie było już miejsca. Samochody z rezerwacji wartych ponad czternaście miliardów dolarów schodziły przez pewien czas z linii pod plandeką.',
        zrodlo: Z.wikiModel3,
      },
    ],
    os: [
      { data: '2017-07', tytul: 'Początek dostaw', opis: 'Pierwsze Modele 3 trafiają do klientów; produkcja nie nadąża.', waga: 2 },
      { data: '2017-11', tytul: 'Przesunięcie celu', opis: 'Cel pięciu tysięcy sztuk tygodniowo przesunięty o kwartał.', waga: 2 },
      { data: '2018', tytul: 'Odwrócenie krzywej', opis: '145 846 dostaw w skali roku, osiemdziesięciokrotnie więcej niż rok wcześniej.', waga: 3 },
    ],
    powiazane: [
      { id: 'model-3', powod: 'to jego rozruch produkcji' },
      { id: 'tesla', powod: 'najgłębszy kryzys operacyjny w jej historii' },
      { id: 'elon-musk', powod: 'przez ten okres sypiał w fabryce i osobiście nadzorował linię' },
      { id: 'funding-secured', powod: 'ten sam rok i to samo tło presji gotówkowej' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiModel3, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'gigafactory',
    typ: 'miejsce',
    nazwa: 'Gigafabryki',
    aka: ['Gigafactory', 'Giga Shanghai', 'Giga Berlin', 'Giga Texas'],
    krotki: 'Sieć fabryk Tesli, których nazwa bierze się z zamiaru produkowania rocznie więcej ogniw niż cały świat w 2013 roku.',
    tresc: [
      'Nazwa nie jest marketingiem: pierwsza gigafabryka miała wytwarzać w ciągu roku więcej ogniw litowo-jonowych, niż wyprodukował ich cały świat w 2013 roku. Stąd przedrostek. Pierwszą i najbardziej rozbudowaną jest [[gigafactory-nevada|fabryka w Nevadzie]].', 'Po niej przyszły kolejne: Szanghaj z produkcją od grudnia 2019, Berlin z [[model-y|Modelem Y]] od marca 2022 i Teksas również od kwietnia 2022. Fabryka w Teksasie jest też miejscem, z którego wyjeżdża [[cybertruck|Cybertruck]].',
      'Sens tej sieci jest prosty i wynika wprost z [[pieklo-produkcyjne|doświadczenia z Modelem 3]]: samochód elektryczny nie jest trudny do zaprojektowania, jest trudny do wyprodukowania w liczbie setek tysięcy. [[elon-musk|Musk]] mówi o fabryce jako o produkcie — i w tej firmie to nie jest metafora, bo [[gigacasting|odlewanie wielkogabarytowe]] czy własne [[ogniwa-4680|ogniwa]] są rozwiązaniami fabryki, nie samochodu.',
    ],
    fakty: [
      { etykieta: 'Pochodzenie nazwy', wartosc: 'cel: więcej ogniw rocznie niż cały świat w 2013 r.', pewnosc: 'potwierdzone' },
      { etykieta: 'Lokalizacje', wartosc: 'Nevada, Szanghaj, Berlin, Teksas', pewnosc: 'potwierdzone' },
      { etykieta: 'Start produkcji w Szanghaju', wartosc: 'grudzień 2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Start produkcji w Berlinie', wartosc: 'marzec 2022, Model Y', pewnosc: 'potwierdzone' },
      { etykieta: 'Start produkcji w Teksasie', wartosc: 'kwiecień 2022', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przedrostek „giga" w nazwie nie odnosi się do wielkości budynku, a do jednostki energii: fabryka miała produkować ogniwa mierzone w gigawatogodzinach, w liczbie przewyższającej całą światową produkcję z 2013 roku. Nazwa jest deklaracją wydajności, nie rozmiaru.',
        zrodlo: Z.wikiGigaNevada,
      },
    ],
    os: [
      { data: '2014', tytul: 'Pierwsza gigafabryka', opis: 'Start budowy zakładu w Nevadzie.', waga: 2 },
      { data: '2019-12', tytul: 'Szanghaj', opis: 'Pierwsza gigafabryka poza Stanami rozpoczyna produkcję.', waga: 2 },
      { data: '2022-04', tytul: 'Teksas', opis: 'Uruchomienie zakładu, z którego wyjedzie Cybertruck.', waga: 2 },
    ],
    powiazane: [
      { id: 'gigafactory-nevada', powod: 'pierwsza i największa z nich' },
      { id: 'tesla', powod: 'na tej sieci stoi cała jej produkcja' },
      { id: 'ogniwa-4680', powod: 'ogniwa projektowane pod produkcję w tych zakładach' },
      { id: 'gigacasting', powod: 'metoda opracowana pod te linie montażowe' },
      { id: 'cybertruck', powod: 'wyjeżdża z zakładu w Teksasie' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiGigaNevada, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'gigafactory-nevada',
    typ: 'miejsce',
    nazwa: 'Gigafactory Nevada',
    aka: ['Giga Nevada', 'Sparks'],
    krotki: 'Pierwsza gigafabryka Tesli, zbudowana z Panasonikiem — 500 tysięcy metrów kwadratowych powierzchni podłogi.',
    tresc: [
      'Budowę rozpoczęto w lecie 2014 roku, konstrukcję nadziemną zgłoszono w styczniu 2015, a zakład ruszył w styczniu 2016. Powierzchnia podłogi wynosi 5,4 miliona stóp kwadratowych, czyli około pół miliona metrów, na działce o wielkości 4,5 mili kwadratowej — największej spośród [[gigafactory|gigafabryk]] Tesli pod względem terenu.', 'Fabryka od początku była przedsięwzięciem wspólnym z Panasonikiem. W lipcu 2014 roku japońska firma zgodziła się w nią zainwestować; początkowo około 1,6 miliarda dolarów, potem ogłosiła emisję obligacji na 3,86 miliarda, w większości przeznaczoną właśnie na ten zakład. Do 2019 roku łączne nakłady sięgnęły 4,9 miliarda: 3 miliardy od [[tesla|Tesli]], 1,7 od Panasonika i 100 milionów od firmy H&T.',
      'W połowie 2019 roku zakład miał teoretyczną zdolność 35 GWh rocznie, a produkował około 24 GWh. Zatrudniał wtedy 7 557 osób, w większości mieszkańców Nevady. Rozbudowa ogłoszona pod produkcję Tesli Semi obejmuje [[ogniwa-4680|ogniwa 4680]] i cel stu gigawatogodzin rocznie.',
    ],
    fakty: [
      { etykieta: 'Start budowy', wartosc: 'lato 2014', pewnosc: 'potwierdzone' },
      { etykieta: 'Uruchomienie', wartosc: 'styczeń 2016', pewnosc: 'potwierdzone' },
      { etykieta: 'Powierzchnia podłogi', wartosc: '5,4 mln stóp kw. (ok. 500 tys. m²)', pewnosc: 'potwierdzone' },
      { etykieta: 'Nakłady łączne', wartosc: '4,9 mld USD', stanNa: '2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Produkcja ogniw', wartosc: 'ok. 24 GWh przy zdolności 35 GWh', stanNa: '2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Zatrudnienie', wartosc: '7 557 osób', stanNa: '2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Cel po rozbudowie', wartosc: '100 GWh rocznie', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Panasonic wyemitował obligacje na 3,86 miliarda dolarów, przeznaczając większość tej kwoty na fabrykę partnera. Firma z Osaki sfinansowała zatem znaczną część zakładu, który stoi w Nevadzie i nosi nazwę innego przedsiębiorstwa.',
        zrodlo: Z.wikiGigaNevada,
      },
    ],
    os: [
      { data: '2014-07', tytul: 'Wejście Panasonika', opis: 'Japońska firma zgadza się zainwestować w zakład.', waga: 2 },
      { data: '2016-01', tytul: 'Uruchomienie', opis: 'Pierwsza gigafabryka rozpoczyna pracę.', waga: 3 },
    ],
    powiazane: [
      { id: 'gigafactory', powod: 'pierwsza i największa z tej sieci' },
      { id: 'ogniwa-4680', powod: 'tam ma stanąć ich produkcja w skali stu gigawatogodzin' },
      { id: 'tesla', powod: 'jej największa inwestycja przemysłowa pierwszej dekady' },
      { id: 'powerwall', powod: 'ogniwa z tego zakładu trafiają także do magazynów energii' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiGigaNevada, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'ogniwa-4680',
    typ: 'technologia',
    nazwa: 'Ogniwa 4680',
    aka: ['4680', 'tabless cell'],
    krotki: 'Ogniwo o średnicy 46 i wysokości 80 milimetrów, projektowane nie pod pojemność, a pod tempo produkcji.',
    tresc: [
      'Nazwa to wprost wymiary: 46 milimetrów średnicy i 80 wysokości. Wcześniejsze ogniwa Tesli były znacznie mniejsze, co oznaczało tysiące sztuk w jednym akumulatorze i tysiące połączeń do wykonania. Większe ogniwo to mniej elementów i mniej operacji montażowych na samochód.', 'Sens tej zmiany jest taki sam jak sens [[gigacasting|odlewania wielkogabarytowego]]: nie chodzi o lepszy parametr, ale o mniejszą liczbę czynności w fabryce. To podejście, które [[tesla|Tesla]] wyniosła z [[pieklo-produkcyjne|piekła produkcyjnego]] — koszt samochodu elektrycznego leży w montażu, nie w pomyśle.',
      'Produkcja ma stanąć w [[gigafactory-nevada|zakładzie w Nevadzie]], w ramach rozbudowy zapowiedzianej pod Teslę Semi, z celem stu gigawatogodzin rocznie. Wcześniejsze ogniwa z tej fabryki, wytwarzane wspólnie z Panasonikiem, dawały około 24 GWh przy zdolności 35 GWh.',
    ],
    fakty: [
      { etykieta: 'Wymiary', wartosc: '46 mm średnicy, 80 mm wysokości', pewnosc: 'potwierdzone' },
      { etykieta: 'Cel produkcyjny', wartosc: '100 GWh rocznie w Nevadzie', pewnosc: 'szacunkowe' },
      { etykieta: 'Miejsce produkcji', wartosc: 'Gigafactory Nevada, w ramach rozbudowy', pewnosc: 'potwierdzone' },
      { etykieta: 'Poprzedni poziom produkcji zakładu', wartosc: 'ok. 24 GWh przy zdolności 35 GWh', stanNa: '2019', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Oznaczenie 4680 nie jest kodem projektu ani numerem wersji — to po prostu wymiary w milimetrach. Cała nazwa przełomowego elementu Tesli składa się z dwóch liczb zmierzonych suwmiarką.',
        zrodlo: Z.wikiGigaNevada,
      },
    ],
    os: [
      { data: '2020-09', tytul: 'Prezentacja ogniwa', opis: 'Tesla przedstawia konstrukcję 4680 jako podstawę przyszłych akumulatorów.', waga: 2 },
    ],
    powiazane: [
      { id: 'gigafactory-nevada', powod: 'tam stanie ich produkcja w docelowej skali' },
      { id: 'gigacasting', powod: 'to samo rozumowanie — mniej operacji w fabryce, nie lepszy parametr' },
      { id: 'tesla', powod: 'jej własna konstrukcja ogniwa, niezależna od dostawców' },
      { id: 'gigafactory', powod: 'element projektowany pod te linie produkcyjne' },
    ],
    status: 'w rozwoju',
    zrodla: [Z.wikiGigaNevada, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'gigacasting',
    typ: 'technologia',
    nazwa: 'Odlewanie wielkogabarytowe',
    aka: ['gigacasting', 'Giga Press'],
    krotki: 'Zastąpienie siedemdziesięciu blaszanych części dwoma odlewami — i porzucenie tej metody po czterech latach.',
    tresc: [
      'Przy [[model-y|Modelu Y]] [[tesla|Tesla]] wprowadziła odlewanie jednoczęściowych ram przedniej i tylnej na maszynach nazywanych Giga Press. Efekt: siedemdziesiąt osobnych elementów metalowych zastąpiono dwoma dużymi odlewami. Mniej części oznacza mniej spawów, mniej stanowisk i krótszą linię.', 'Rozumowanie jest identyczne jak przy [[ogniwa-4680|ogniwach 4680]]: zmiana nie poprawia parametru samochodu, tylko skraca proces jego składania. To wniosek z [[pieklo-produkcyjne|kryzysu produkcyjnego Modelu 3]], w którym problemem nie był projekt, a tempo montażu.',
      'W maju 2024 roku firma porzuciła plany dalszego rozwoju tej metody, wskazując na wysokie nakłady początkowe. To rzadki w tej firmie przypadek publicznego wycofania się z rozwiązania, które wcześniej przedstawiano jako przełomowe — i wart zapamiętania właśnie dlatego.',
    ],
    fakty: [
      { etykieta: 'Pierwsze zastosowanie', wartosc: 'Model Y', pewnosc: 'potwierdzone' },
      { etykieta: 'Redukcja liczby części', wartosc: '70 elementów zastąpione 2 odlewami', pewnosc: 'potwierdzone' },
      { etykieta: 'Maszyna', wartosc: 'prasa odlewnicza nazywana Giga Press', pewnosc: 'potwierdzone' },
      { etykieta: 'Porzucenie planów rozwoju', wartosc: 'maj 2024, z powodu nakładów początkowych', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Metodę przedstawianą jako przełom w produkcji samochodów Tesla porzuciła w maju 2024 roku — z powodu zbyt wysokich nakładów początkowych. Rozwiązanie zadziałało technicznie i nie opłaciło się finansowo, co w tej branży zdarza się częściej, niż wynika z prezentacji.',
        zrodlo: Z.wikiModelY,
      },
    ],
    os: [
      { data: '2020-01', tytul: 'Wdrożenie przy Modelu Y', opis: 'Pierwsze jednoczęściowe odlewy ram wchodzą do produkcji.', waga: 2 },
      { data: '2024-05', tytul: 'Porzucenie planów', opis: 'Tesla rezygnuje z dalszego rozwoju metody.', waga: 2 },
    ],
    powiazane: [
      { id: 'model-y', powod: 'pierwszy model produkowany tą metodą' },
      { id: 'ogniwa-4680', powod: 'to samo podejście — upraszczanie fabryki, nie samochodu' },
      { id: 'pieklo-produkcyjne', powod: 'wniosek wyciągnięty z tamtego kryzysu' },
      { id: 'gigafactory', powod: 'metoda opracowana pod linie w tych zakładach' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiModelY, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },
];

/** Oprogramowanie, sztuczna inteligencja i nadzór. */
const oprogramowanie: Encja[] = [
  {
    id: 'autopilot',
    typ: 'technologia',
    nazwa: 'Autopilot',
    aka: ['Traffic-Aware Cruise Control', 'Autosteer'],
    krotki: 'Standardowy układ wspomagania jazdy: aktywny tempomat i utrzymywanie pasa. Poziom 2, nie autonomia.',
    tresc: [
      'Autopilot jest pakietem podstawowym, obecnym we wszystkich samochodach [[tesla|Tesli]]. Zawiera aktywny tempomat reagujący na ruch oraz utrzymywanie pojazdu na środku pasa. Płatnym rozszerzeniem jest [[fsd|Full Self-Driving]].', 'W klasyfikacji SAE to poziom 2: samochód potrafi prowadzić sam, ale kierowca musi bez przerwy nadzorować jazdę i być gotowy natychmiast przejąć kontrolę. Nazwa „Autopilot" od początku była krytykowana za sugerowanie czegoś więcej, niż układ potrafi.',
      'Sprzęt przechodził przez kolejne generacje: HW1 z układami Mobileye od października 2014, po zakończeniu współpracy w lipcu 2016 przejście na HW2, następnie HW2.5 w sierpniu 2017, HW3 w marcu 2019 i HW4, nazywany też AI4, od stycznia 2023 — na procesorze Samsunga w procesie 7 nm, z 16 GB pamięci operacyjnej.', 'Od 2021 roku firma wycofała radar i przeszła na [[tesla-vision|Tesla Vision]], czyli wyłącznie kamery. Skutki działania układu w ruchu drogowym są przedmiotem [[nadzor-nhtsa|dochodzeń amerykańskiego urzędu]].',
    ],
    fakty: [
      { etykieta: 'Zakres', wartosc: 'aktywny tempomat i utrzymywanie pasa', pewnosc: 'potwierdzone' },
      { etykieta: 'Poziom autonomii SAE', wartosc: '2 — wymaga stałego nadzoru kierowcy', pewnosc: 'potwierdzone' },
      { etykieta: 'Generacje sprzętu', wartosc: 'HW1 (2014), HW2 (2016), HW2.5 (2017), HW3 (2019), HW4 (2023)', pewnosc: 'potwierdzone' },
      { etykieta: 'HW4 — procesor', wartosc: 'Samsung 7 nm, 16 GB RAM, 256 GB pamięci', pewnosc: 'potwierdzone' },
      { etykieta: 'Koniec współpracy z Mobileye', wartosc: 'lipiec 2016', pewnosc: 'potwierdzone' },
      { etykieta: 'Dostępność', wartosc: 'standard we wszystkich samochodach', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Pierwsza generacja Autopilota nie była konstrukcją Tesli — opierała się na układach izraelskiej firmy Mobileye. Współpraca skończyła się w lipcu 2016 roku, a kolejna generacja sprzętu miała początkowo mniej funkcji niż ta, którą zastąpiła.',
        zrodlo: Z.wikiAutopilot,
      },
    ],
    os: [
      { data: '2014-10', tytul: 'Pierwsza generacja', opis: 'Autopilot debiutuje na sprzęcie Mobileye.', waga: 2 },
      { data: '2016-07', tytul: 'Rozstanie z Mobileye', opis: 'Tesla przechodzi na własny sprzęt.', waga: 2 },
      { data: '2023-01', tytul: 'HW4', opis: 'Czwarta generacja sprzętu wchodzi do produkcji.', waga: 1 },
    ],
    powiazane: [
      { id: 'fsd', powod: 'płatne rozszerzenie tego pakietu' },
      { id: 'tesla-vision', powod: 'układ percepcji, na który przeszedł po wycofaniu radaru' },
      { id: 'nadzor-nhtsa', powod: 'przedmiot dochodzeń dotyczących jego roli w wypadkach' },
      { id: 'tesla', powod: 'jej standardowe wyposażenie każdego samochodu' },
      { id: 'dojo', powod: 'superkomputer budowany do trenowania jego modeli' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiAutopilot, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'fsd',
    typ: 'produkt',
    nazwa: 'Full Self-Driving',
    aka: ['FSD', 'FSD Beta', 'Autosteer on City Streets'],
    krotki: 'Płatny pakiet o nazwie obiecującej pełną autonomię, działający na poziomie 2 i wymagający stałego nadzoru.',
    tresc: [
      'FSD jest rozszerzeniem [[autopilot|Autopilota]] o rozpoznawanie sygnalizacji i znaków stopu oraz prowadzenie po drogach lokalnych. Formalnie pozostaje układem poziomu 2 — kierowca musi nadzorować jazdę bez przerwy. Nazwa była wielokrotnie krytykowana za wprowadzanie klientów w błąd, a prawnicy argumentowali, że reklamowanie systemu poziomu 2 jako „pełnego samoprowadzenia" pozwalało ominąć wymogi dopuszczeniowe stawiane pojazdom rzeczywiście autonomicznym.', 'Historia cen jest sama w sobie opowieścią: 3 tysiące dolarów jako dodatek w 2016 roku, 5 tysięcy w 2019, 10 tysięcy w październiku 2020, 15 tysięcy we wrześniu 2022, obniżka do 12 tysięcy rok później i do 8 tysięcy w kwietniu 2024, z abonamentem 99 dolarów miesięcznie. W lutym 2026 [[tesla|Tesla]] zakończyła sprzedaż pakietu i zostawiła wyłącznie abonament.',
      'Wraz ze wzrostem ceny spadał odsetek klientów, którzy go kupowali — z szacowanych 37 procent w 2019 roku do 12 procent w 2021.', 'W lutym 2023 roku [[nadzor-nhtsa|NHTSA]] objęła akcją serwisową 362 758 samochodów z FSD Beta i wstrzymała przyjmowanie nowych uczestników programu. Poprawkę wydano w marcu 2023 jako wersję 11.3.1.',
    ],
    fakty: [
      { etykieta: 'Zakres ponad Autopilot', wartosc: 'sygnalizacja, znaki stopu, jazda po drogach lokalnych', pewnosc: 'potwierdzone' },
      { etykieta: 'Poziom autonomii SAE', wartosc: '2 — mimo nazwy', pewnosc: 'potwierdzone' },
      { etykieta: 'Cena — szczyt', wartosc: '15 tys. USD', stanNa: '2022-09', pewnosc: 'potwierdzone' },
      { etykieta: 'Cena — po obniżkach', wartosc: '8 tys. USD lub 99 USD miesięcznie', stanNa: '2024-04', pewnosc: 'potwierdzone' },
      { etykieta: 'Koniec sprzedaży pakietu', wartosc: 'luty 2026, zostaje tylko abonament', pewnosc: 'potwierdzone' },
      { etykieta: 'Odsetek nabywców', wartosc: 'ok. 37% w 2019, ok. 12% w 2021', stanNa: '2021', pewnosc: 'szacunkowe' },
      { etykieta: 'Akcja serwisowa', wartosc: '362 758 samochodów', stanNa: '2023-02', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Im wyższa była cena FSD, tym mniej ludzi go kupowało — z szacowanych 37 procent nabywców w 2019 roku do 12 procent w 2021, przy cenie podniesionej w tym czasie dwukrotnie. Ostatecznie Tesla zrezygnowała ze sprzedaży pakietu i pozostawiła wyłącznie abonament.',
        zrodlo: Z.wikiAutopilot,
      },
    ],
    os: [
      { data: '2020-10', tytul: 'Cena rośnie do 10 tys. USD', opis: 'Pakiet zaczyna być droższy niż niektóre używane samochody.', waga: 1 },
      { data: '2023-02', tytul: 'Akcja serwisowa', opis: 'NHTSA obejmuje nią 362 758 samochodów z FSD Beta.', waga: 3 },
      { data: '2026-02', tytul: 'Koniec sprzedaży', opis: 'Tesla wycofuje pakiet i zostawia wyłącznie abonament.', waga: 2 },
    ],
    powiazane: [
      { id: 'autopilot', powod: 'pakiet podstawowy, który rozszerza' },
      { id: 'nadzor-nhtsa', powod: 'objęty akcją serwisową obejmującą ponad 360 tysięcy samochodów' },
      { id: 'tesla-vision', powod: 'działa wyłącznie na obrazie z kamer' },
      { id: 'dojo', powod: 'superkomputer budowany do trenowania jego modeli' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiAutopilot, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'tesla-vision',
    typ: 'technologia',
    nazwa: 'Tesla Vision',
    aka: ['camera-only', 'rezygnacja z radaru'],
    krotki: 'Decyzja o prowadzeniu samochodu wyłącznie na obrazie z kamer, bez radaru i czujników ultradźwiękowych.',
    tresc: [
      'Od 2021 roku [[tesla|Tesla]] zaczęła wycofywać radar z nowych [[model-3|Modeli 3]] i [[model-y|Y]], przechodząc na percepcję opartą wyłącznie na kamerach. Od 2022 roku samochody nie mają już ani radaru, ani czujników ultradźwiękowych.', 'Uzasadnienie jest spójne: człowiek prowadzi na podstawie obrazu, więc wystarczająco dobry układ widzenia powinien wystarczyć, a łączenie danych z kilku różnych czujników tworzy konflikty, które trzeba jakoś rozstrzygać. Krytycy odpowiadają, że radar widzi przez mgłę i deszcz, a kamera nie.',
      'W 2023 roku „Washington Post" napisał, że [[elon-musk|Musk]] przeforsował podejście oparte tylko na kamerach wbrew zastrzeżeniom inżynierów. To ustalenie dziennikarskie, nie dokument firmowy, i tak należy je czytać.', 'Cały [[autopilot|Autopilot]] i [[fsd|FSD]] pracują dziś na tym założeniu, a jego skutki w ruchu drogowym bada [[nadzor-nhtsa|amerykański urząd bezpieczeństwa]].',
    ],
    fakty: [
      { etykieta: 'Wycofanie radaru', wartosc: 'od 2021 w Modelach 3 i Y', pewnosc: 'potwierdzone' },
      { etykieta: 'Wycofanie czujników ultradźwiękowych', wartosc: 'samochody po 2022 roku', pewnosc: 'potwierdzone' },
      { etykieta: 'Założenie', wartosc: 'percepcja wyłącznie z kamer', pewnosc: 'potwierdzone' },
      { etykieta: 'Relacja o sposobie decyzji', wartosc: 'Musk przeforsował ją wbrew inżynierom', stanNa: '2023', pewnosc: 'sporne' },
    ],
    ciekawostki: [
      {
        tekst: 'Tesla usunęła z samochodów czujniki, które wcześniej sama montowała, i zrobiła to w trakcie produkcji — najpierw radar, potem czujniki ultradźwiękowe. Funkcje, które z nich korzystały, trzeba było odtworzyć w oprogramowaniu na podstawie samego obrazu.',
        zrodlo: Z.wikiAutopilot,
      },
    ],
    os: [
      { data: '2021', tytul: 'Wycofanie radaru', opis: 'Nowe Modele 3 i Y schodzą z linii bez radaru.', waga: 2 },
      { data: '2022', tytul: 'Koniec czujników ultradźwiękowych', opis: 'Samochody zostają wyłącznie z kamerami.', waga: 2 },
    ],
    powiazane: [
      { id: 'autopilot', powod: 'pracuje dziś wyłącznie na tym układzie percepcji' },
      { id: 'fsd', powod: 'opiera całe rozpoznawanie otoczenia na obrazie z kamer' },
      { id: 'elon-musk', powod: 'według relacji prasowych przeforsował to podejście osobiście' },
      { id: 'nadzor-nhtsa', powod: 'skutki tej decyzji są przedmiotem dochodzeń' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiAutopilot, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'nadzor-nhtsa',
    typ: 'wydarzenie',
    nazwa: 'Dochodzenia NHTSA',
    aka: ['NHTSA', 'nadzór nad Autopilotem'],
    krotki: 'Amerykański urząd bezpieczeństwa ruchu zbadał 956 kolizji i przypisał Autopilotowi udział w co najmniej 467 z nich.',
    tresc: [
      'National Highway Traffic Safety Administration prowadzi nadzór nad układami wspomagania jazdy [[tesla|Tesli]] od lat. W lutym 2023 roku objęła akcją serwisową 362 758 samochodów z [[fsd|FSD Beta]] i wstrzymała przyjmowanie nowych uczestników programu; poprawkę wydano w marcu 2023 jako wersję 11.3.1.', 'W kwietniu 2024 roku urząd zakończył trzyletnie dochodzenie obejmujące 956 kolizji. Ustalił, że [[autopilot|Autopilot]] miał udział w co najmniej 467 wypadkach, w tym trzynastu śmiertelnych. Między sierpniem 2022 a sierpniem 2023 urząd odnotował osobno 60 kolizji i jedną ofiarę śmiertelną przy korzystaniu z FSD Beta.',
      'Według stanu na październik 2024 roku zgłoszono 51 wypadków śmiertelnych z udziałem Autopilota, z czego 44 potwierdzono ustaleniami urzędu lub opiniami biegłych, a dwa dotyczyły FSD.', 'Obraz nie jest jednoznacznie negatywny: w maju 2026 roku NHTSA podała, że nowe [[model-y|Modele Y]] są pierwszymi samochodami, które spełniły jej nowe kryterium oceny układów wspomagania jazdy przewidziane na rok modelowy 2027.',
    ],
    fakty: [
      { etykieta: 'Zakres dochodzenia', wartosc: '956 kolizji, trzy lata', stanNa: '2024-04', pewnosc: 'potwierdzone' },
      { etykieta: 'Wypadki z udziałem Autopilota', wartosc: 'co najmniej 467, w tym 13 śmiertelnych', stanNa: '2024-04', pewnosc: 'potwierdzone' },
      { etykieta: 'Akcja serwisowa FSD Beta', wartosc: '362 758 samochodów', stanNa: '2023-02', pewnosc: 'potwierdzone' },
      { etykieta: 'Kolizje z FSD Beta', wartosc: '60 i jedna ofiara śmiertelna', stanNa: '2023-08', pewnosc: 'potwierdzone' },
      { etykieta: 'Zgłoszone ofiary śmiertelne', wartosc: '51, z czego 44 potwierdzone', stanNa: '2024-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Nowe kryterium na rok 2027', wartosc: 'Model Y pierwszym samochodem, który je spełnił', stanNa: '2026-05', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Ten sam urząd, który przypisał Autopilotowi udział w co najmniej 467 wypadkach, w maju 2026 roku uznał nowe Modele Y za pierwsze samochody spełniające jego zaostrzone kryterium oceny układów wspomagania jazdy. Oba ustalenia dotyczą tej samej firmy i pochodzą od tej samej instytucji.',
        zrodlo: Z.wikiAutopilot,
      },
    ],
    os: [
      { data: '2023-02', tytul: 'Akcja serwisowa', opis: 'Ponad 360 tysięcy samochodów z FSD Beta objętych korektą.', waga: 3 },
      { data: '2024-04', tytul: 'Wynik dochodzenia', opis: 'Autopilot z udziałem w co najmniej 467 wypadkach, w tym 13 śmiertelnych.', waga: 3 },
      { data: '2026-05', tytul: 'Nowe kryterium', opis: 'Model Y pierwszym samochodem spełniającym wymóg na rok modelowy 2027.', waga: 2 },
    ],
    powiazane: [
      { id: 'autopilot', powod: 'główny przedmiot dochodzeń' },
      { id: 'fsd', powod: 'objęty akcją serwisową obejmującą ponad 360 tysięcy samochodów' },
      { id: 'tesla', powod: 'przedmiot nadzoru' },
      { id: 'model-y', powod: 'pierwszy samochód, który spełnił nowe kryterium urzędu' },
    ],
    zrodla: [Z.wikiAutopilot, Z.wikiModelS],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'dojo',
    typ: 'technologia',
    nazwa: 'Dojo',
    aka: ['D1', 'Dojo3'],
    krotki: 'Superkomputer własnej konstrukcji do trenowania modeli jazdy autonomicznej — rozwiązany w 2025 i wznowiony w 2026.',
    tresc: [
      'Dojo to rodzina superkomputerów budowanych przez [[tesla|Teslę]] do przetwarzania nagrań wideo i trenowania modeli [[fsd|Full Self-Driving]]. [[elon-musk|Musk]] wspomniał o projekcie w kwietniu 2019, oficjalna prezentacja odbyła się na AI Day 19 sierpnia 2021, a produkcja ruszyła w lipcu 2023.', 'Podstawą jest układ D1: 354 rdzenie obliczeniowe, 50 miliardów tranzystorów, wykonanie w TSMC w procesie 7 nm. Każdy rdzeń jest 64-bitowym procesorem obsługującym instrukcje skalarne i wektorowe. Dwadzieścia pięć układów D1 składa się w chłodzoną wodą kafelkę treningową o wydajności 9 petaflopsów w formatach o obniżonej precyzji. Celem całego systemu był ponad jeden eksaflops.',
      'W sierpniu 2025 roku agencja Bloomberg podała, że projekt rozwiązano, a pracowników przeniesiono do innych zadań. W styczniu 2026 Musk wznowił go z nową odsłoną układu, nazywaną Dojo3, opartą na firmowym projekcie AI5.', 'Warto zestawić to z [[optimus|Optimusem]]: oba projekty mają tę samą cechę — ogłoszenie, harmonogram, przesunięcie, a potem restart pod nowym oznaczeniem.',
    ],
    fakty: [
      { etykieta: 'Prezentacja', wartosc: '19 sierpnia 2021, AI Day', pewnosc: 'potwierdzone' },
      { etykieta: 'Start produkcji', wartosc: 'lipiec 2023', pewnosc: 'potwierdzone' },
      { etykieta: 'Układ D1', wartosc: '354 rdzenie, 50 mld tranzystorów, TSMC 7 nm', pewnosc: 'potwierdzone' },
      { etykieta: 'Kafelka treningowa', wartosc: '25 układów D1, 9 petaflopsów', pewnosc: 'potwierdzone' },
      { etykieta: 'Cel wydajności systemu', wartosc: 'ponad 1 eksaflops', pewnosc: 'szacunkowe' },
      { etykieta: 'Rozwiązanie projektu', wartosc: 'sierpień 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Wznowienie', wartosc: 'styczeń 2026, jako Dojo3 na układzie AI5', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Projekt rozwiązano w sierpniu 2025 roku i rozdzielono zespół do innych zadań, a pięć miesięcy później wznowiono go z nowym układem. Superkomputer, który miał trenować jazdę autonomiczną, sam przeszedł pełny cykl zamknięcia i restartu w ciągu niespełna pół roku.',
        zrodlo: Z.wikiDojo,
      },
    ],
    os: [
      { data: '2021-08-19', tytul: 'Prezentacja', opis: 'Tesla przedstawia Dojo i układ D1 na AI Day.', waga: 2 },
      { data: '2023-07', tytul: 'Start produkcji', opis: 'System wchodzi do eksploatacji.', waga: 2 },
      { data: '2025-08', tytul: 'Rozwiązanie zespołu', opis: 'Bloomberg podaje, że projekt zamknięto.', waga: 3 },
      { data: '2026-01', tytul: 'Wznowienie', opis: 'Musk restartuje projekt jako Dojo3 na układzie AI5.', waga: 2 },
    ],
    powiazane: [
      { id: 'fsd', powod: 'zbudowany do trenowania jego modeli' },
      { id: 'autopilot', powod: 'całe uczenie tego układu miało przechodzić przez Dojo' },
      { id: 'tesla', powod: 'jej własny projekt sprzętowy, niezależny od dostawców układów' },
      { id: 'optimus', powod: 'drugi projekt firmy o tym samym rytmie ogłoszeń i przesunięć' },
    ],
    status: 'w rozwoju',
    zrodla: [Z.wikiDojo, Z.wikiAutopilot],
    zaktualizowano: '2026-09-12',
  },
];

/** Energia, robot i sprawa z Komisją Papierów Wartościowych. */
const reszta: Encja[] = [
  {
    id: 'powerwall',
    typ: 'produkt',
    nazwa: 'Powerwall',
    aka: ['Powerpack', 'Tesla Energy'],
    krotki: 'Domowy magazyn energii o pojemności 13,5 kWh — ta sama technologia ogniw co w samochodach, inne zastosowanie.',
    tresc: [
      'Powerwall ogłoszono 30 kwietnia 2015 roku. Druga generacja, obecna w sprzedaży, przechowuje 13,5 kilowatogodziny i służy do trzech rzeczy: zużywania własnej energii ze słońca, przesuwania poboru na tańsze godziny i zasilania domu przy awarii sieci.', 'Sprzęt należy do dywizji Tesla Energy, która zajmuje się instalacjami fotowoltaicznymi i magazynowaniem energii. Wcześniejszym produktem dla firm i sieci był Powerpack o pojemności 232 kWh, wycofany po 22 lipca 2022 roku i zastąpiony znacznie większym [[megapack|Megapackiem]].',
      'Związek z samochodami jest bezpośredni: to te same ogniwa litowo-jonowe, w większości z [[gigafactory-nevada|zakładu w Nevadzie]]. Dla [[tesla|Tesli]] magazynowanie energii jest częścią tej samej działalności co produkcja samochodów, bo wąskim gardłem w obu przypadkach jest produkcja ogniw, nie sam produkt.',
    ],
    fakty: [
      { etykieta: 'Ogłoszenie', wartosc: '30 kwietnia 2015', pewnosc: 'potwierdzone' },
      { etykieta: 'Pojemność (Powerwall 2)', wartosc: '13,5 kWh', pewnosc: 'potwierdzone' },
      { etykieta: 'Zastosowania', wartosc: 'zużycie własne, przesuwanie poboru, zasilanie awaryjne', pewnosc: 'potwierdzone' },
      { etykieta: 'Powerpack', wartosc: '232 kWh, wycofany po 22 lipca 2022', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Powerpack, poprzednik Megapacka dla firm i sieci, przechowywał 232 kilowatogodziny — mniej niż trzy dzisiejsze Modele S w jednej szafie. Skok do trzech megawatogodzin w Megapacku to ponad dwunastokrotność tej pojemności w jednej jednostce.',
        zrodlo: Z.wikiTeslaEnergy,
      },
    ],
    os: [
      { data: '2015-04-30', tytul: 'Ogłoszenie Powerwalla', opis: 'Tesla wchodzi na rynek domowych magazynów energii.', waga: 2 },
      { data: '2022-07-22', tytul: 'Koniec Powerpacka', opis: 'Produkt dla firm zastąpiony Megapackiem.', waga: 1 },
    ],
    powiazane: [
      { id: 'megapack', powod: 'jego odpowiednik w skali sieci energetycznej' },
      { id: 'gigafactory-nevada', powod: 'stamtąd pochodzą ogniwa' },
      { id: 'tesla', powod: 'druga gałąź jej działalności obok samochodów' },
      { id: 'ogniwa-4680', powod: 'ta sama technologia ogniw w innym zastosowaniu' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiTeslaEnergy, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'megapack',
    typ: 'produkt',
    nazwa: 'Megapack',
    aka: ['magazyn sieciowy', 'Megafactory'],
    krotki: 'Kontener magazynujący do 3 MWh — jednostka, z której buduje się największe baterie sieciowe na świecie.',
    tresc: [
      'Megapack jest magazynem energii w skali sieci energetycznej: jedna jednostka przechowuje do trzech megawatogodzin. Zestawia się je w farmy liczone w setkach jednostek, stabilizujące pracę sieci przy zmiennej produkcji ze słońca i wiatru.', 'W 2024 roku [[tesla|Tesla]] wprowadziła do eksploatacji 31,4 gigawatogodziny magazynów energii — o 113 procent więcej niż rok wcześniej. To skala, przy której magazynowanie przestaje być dodatkiem do sprzedaży samochodów.',
      'Produkcja odbywa się w zakładzie zwanym Megafactory w Lathrop w Kalifornii, a ogniwa pochodzą między innymi z [[gigafactory-nevada|Nevady]]. W domach ten sam pomysł realizuje [[powerwall|Powerwall]].', 'Technologia nie jest bezawaryjna: w lipcu 2021 roku podczas testów w australijskiej instalacji Big Battery doszło do pożaru Megapacka.',
    ],
    fakty: [
      { etykieta: 'Pojemność jednostki', wartosc: 'do 3 MWh', pewnosc: 'potwierdzone' },
      { etykieta: 'Wdrożone magazyny energii', wartosc: '31,4 GWh, wzrost o 113% rok do roku', stanNa: '2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Miejsce produkcji', wartosc: 'Megafactory, Lathrop w Kalifornii', pewnosc: 'potwierdzone' },
      { etykieta: 'Incydent', wartosc: 'pożar podczas testów w Australii, lipiec 2021', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Wdrożenia magazynów energii Tesli wzrosły w 2024 roku o 113 procent rok do roku, do 31,4 gigawatogodziny. Dywizja traktowana przez lata jako dodatek do samochodów rośnie dziś szybciej niż sprzedaż samochodów.',
        zrodlo: Z.wikiTeslaEnergy,
      },
    ],
    os: [
      { data: '2021-07', tytul: 'Pożar w Australii', opis: 'Megapack zapala się podczas testów w instalacji Big Battery.', waga: 2 },
      { data: '2024', tytul: '31,4 GWh w jednym roku', opis: 'Wdrożenia magazynów rosną o 113 procent.', waga: 3 },
    ],
    powiazane: [
      { id: 'powerwall', powod: 'ten sam pomysł w skali domu' },
      { id: 'gigafactory-nevada', powod: 'stamtąd pochodzi część ogniw' },
      { id: 'tesla', powod: 'jej najszybciej rosnąca gałąź działalności' },
      { id: 'ogniwa-4680', powod: 'ogniwa, na których stoi cała ta produkcja' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiTeslaEnergy, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'optimus',
    typ: 'produkt',
    nazwa: 'Optimus',
    aka: ['Tesla Bot', 'Bumblebee'],
    krotki: 'Humanoidalny robot Tesli: 173 cm wzrostu, 57 kg masy i pięć lat zapowiedzi produkcji, która wciąż nie ruszyła.',
    tresc: [
      'Optimusa ogłoszono na AI Day 19 sierpnia 2021 roku. Makieta stanęła na imprezie Cyber Rodeo w teksańskiej fabryce 7 kwietnia 2022, a [[elon-musk|Musk]] mówił wtedy o gotowości produkcyjnej w 2023. We wrześniu 2022 pokazano prototypy półfunkcjonalne: jeden chodził, drugi potrafił poruszać rękami.', 'Druga generacja z grudnia 2023 roku była szczuplejsza, miała lepsze dłonie o jedenastu stopniach swobody i demonstrowała taniec oraz gotowanie jajka w koszulce. W 2024 dłonie podniesiono do dwudziestu dwóch stopni swobody. Trzecia generacja ma korzystać z firmowych układów AI5 i AI6 — te same, na których oparto wznowione [[dojo|Dojo]].',
      'Robot ma 173 centymetry wzrostu, waży 57 kilogramów i podnosi 20. Szacowana cena docelowa to około 30 tysięcy dolarów. W czerwcu 2024 Musk zapowiadał ograniczoną produkcję w 2025 i ponad tysiąc egzemplarzy dla zakładów [[tesla|Tesli]]; według stanu na kwiecień 2026 instalowane są linie we Fremont i w Teksasie, ze skalowaniem od 2027 roku.', 'Na pokazie „We, Robot" w październiku 2024 roku roboty wchodziły w interakcje z publicznością. Krytycy wskazali, że działały głównie pod zdalnym sterowaniem, a firma nie powiedziała tego wprost.',
    ],
    fakty: [
      { etykieta: 'Ogłoszenie', wartosc: '19 sierpnia 2021, AI Day', pewnosc: 'potwierdzone' },
      { etykieta: 'Wzrost i masa', wartosc: '173 cm, 57 kg', pewnosc: 'potwierdzone' },
      { etykieta: 'Nośność', wartosc: '20 kg', pewnosc: 'potwierdzone' },
      { etykieta: 'Stopnie swobody dłoni', wartosc: '11 w drugiej generacji, 22 od 2024', pewnosc: 'potwierdzone' },
      { etykieta: 'Szacowana cena', wartosc: 'ok. 30 tys. USD', pewnosc: 'szacunkowe' },
      { etykieta: 'Stan produkcji', wartosc: 'linie instalowane, skalowanie zapowiadane na 2027', stanNa: '2026-04', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Na pokazie „We, Robot" w październiku 2024 roku roboty rozmawiały z gośćmi i nalewały drinki. Krytycy zauważyli, że pracowały głównie pod zdalnym sterowaniem człowieka, a Tesla o tym nie poinformowała — zarzut dotyczył nie samej telemanipulacji, która jest normalną praktyką pokazową, ale przemilczenia jej.',
        zrodlo: Z.wikiOptimus,
      },
    ],
    os: [
      { data: '2021-08-19', tytul: 'Ogłoszenie', opis: 'Tesla przedstawia projekt humanoidalnego robota.', waga: 2 },
      { data: '2023-12', tytul: 'Druga generacja', opis: 'Szczuplejsza konstrukcja i dłonie o jedenastu stopniach swobody.', waga: 2 },
      { data: '2024-10', tytul: 'Pokaz „We, Robot"', opis: 'Interakcje z publicznością, w większości pod zdalnym sterowaniem.', waga: 2 },
    ],
    powiazane: [
      { id: 'tesla', powod: 'jej projekt wykraczający poza samochody' },
      { id: 'dojo', powod: 'ten sam rodzinny układ AI5 i ten sam rytm przesunięć' },
      { id: 'elon-musk', powod: 'osobiście ogłaszał kolejne terminy produkcji' },
      { id: 'fsd', powod: 'korzysta z tej samej linii prac nad percepcją i sterowaniem' },
    ],
    status: 'w rozwoju',
    zrodla: [Z.wikiOptimus, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'funding-secured',
    typ: 'wydarzenie',
    nazwa: '„Funding secured"',
    aka: ['wpis z 7 sierpnia 2018', 'ugoda z SEC'],
    krotki: 'Wpis o zabezpieczonym finansowaniu wykupu Tesli z giełdy skończył się karą 20 milionów dolarów i utratą fotela przewodniczącego.',
    tresc: [
      'Siódmego sierpnia 2018 roku [[elon-musk|Musk]] napisał, że może wycofać [[tesla|Teslę]] z giełdy przy cenie 420 dolarów za akcję i że finansowanie tej transakcji jest zabezpieczone. Kurs wzrósł tego dnia o ponad sześć procent.', 'Amerykańska Komisja Papierów Wartościowych ustaliła, że Musk wiedział, iż transakcja jest niepewna i obwarowana licznymi warunkami, a konkretnych ustaleń — w tym ceny — nie omawiał z żadnym potencjalnym partnerem finansowym.',
      'Ugoda objęła karę cywilną 20 milionów dolarów, zapłaconą osobno przez Muska i przez spółkę, oraz jego ustąpienie z funkcji przewodniczącego rady Tesli na trzy lata. Do tego doszedł pakiet zmian w ładzie korporacyjnym firmy.', 'Wydarzenie przypada na ten sam rok co [[pieklo-produkcyjne|kryzys produkcyjny Modelu 3]] i tę samą presję gotówkową. Warto to trzymać razem: sierpień 2018 to nie odosobniony wpis, a moment największego napięcia w historii spółki.',
    ],
    fakty: [
      { etykieta: 'Data wpisu', wartosc: '7 sierpnia 2018', pewnosc: 'potwierdzone' },
      { etykieta: 'Deklarowana cena wykupu', wartosc: '420 USD za akcję', pewnosc: 'potwierdzone' },
      { etykieta: 'Reakcja kursu', wartosc: 'wzrost o ponad 6% tego dnia', pewnosc: 'potwierdzone' },
      { etykieta: 'Kara', wartosc: '20 mln USD kary cywilnej', pewnosc: 'potwierdzone' },
      { etykieta: 'Skutek personalny', wartosc: 'ustąpienie z funkcji przewodniczącego rady na trzy lata', pewnosc: 'potwierdzone' },
      { etykieta: 'Ustalenie komisji', wartosc: 'ceny nie omawiano z żadnym partnerem finansowym', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Karę 20 milionów dolarów zapłacili osobno Musk i spółka, a on sam musiał na trzy lata oddać fotel przewodniczącego rady. Cena podana we wpisie — 420 dolarów za akcję — była, jak ustaliła komisja, liczbą nieomawianą z żadnym potencjalnym partnerem finansowym.',
        zrodlo: Z.secMusk,
      },
    ],
    os: [
      { data: '2018-08-07', tytul: 'Wpis', opis: 'Musk ogłasza zabezpieczone finansowanie wykupu Tesli z giełdy.', waga: 3 },
      { data: '2018-09', tytul: 'Ugoda z komisją', opis: 'Kara 20 mln USD i ustąpienie z funkcji przewodniczącego rady.', waga: 3 },
    ],
    powiazane: [
      { id: 'elon-musk', powod: 'jego wpis i jego kara' },
      { id: 'tesla', powod: 'spółka ukarana osobno za ten sam wpis' },
      { id: 'pieklo-produkcyjne', powod: 'ten sam rok i to samo tło presji gotówkowej' },
      { id: 'model-3', powod: 'model, którego rozruch tę presję wywołał' },
    ],
    status: 'historyczne',
    zrodla: [Z.secMusk, Z.wikiTesla, Z.wikiMusk],
    zaktualizowano: '2026-09-12',
  },
];

const teksas: Encja[] = [
  {
    id: 'gigafactory-teksas',
    typ: 'miejsce',
    nazwa: 'Gigafactory Teksas',
    aka: ['Giga Texas', 'Cyber Rodeo'],
    krotki: 'Zakład pod Austin, z którego wyjeżdża Cybertruck i w którym mają stanąć linie produkcyjne Optimusa.',
    tresc: [
      'Produkcja [[model-y|Modelu Y]] ruszyła tu w kwietniu 2022 roku. Od tego czasu zakład urósł do roli najważniejszego przedsięwzięcia przemysłowego [[tesla|Tesli]] w Stanach i przejął rolę, jaką wcześniej pełnił Fremont.',
      'To stąd od 30 listopada 2023 roku wyjeżdża [[cybertruck|Cybertruck]] — samochód, którego nadwozie ze stali nierdzewnej wymagało zupełnie innej linii niż tłoczone blachy pozostałych modeli.',
      'Zakład był też sceną dla dwóch pokazów: Cyber Rodeo w kwietniu 2022, gdzie stanęła makieta [[optimus|Optimusa]], i późniejszych zapowiedzi produkcji robota. Według stanu na kwiecień 2026 instalowane są tu linie z docelową zdolnością dziesięciu milionów sztuk rocznie od 2027 roku — liczba, którą trzeba czytać razem z historią wcześniejszych terminów tego projektu.',
      'Teksas jest też siedzibą [[starbase|SpaceX]] od 2024 roku. Obie firmy [[elon-musk|Muska]] przeniosły swoje centra ciężkości do tego samego stanu w odstępie dwóch lat.',
    ],
    fakty: [
      { etykieta: 'Start produkcji', wartosc: 'kwiecień 2022, Model Y', pewnosc: 'potwierdzone' },
      { etykieta: 'Cybertruck', wartosc: 'dostawy od 30 listopada 2023', pewnosc: 'potwierdzone' },
      { etykieta: 'Cyber Rodeo', wartosc: '7 kwietnia 2022, pierwsza publiczna makieta Optimusa', pewnosc: 'potwierdzone' },
      { etykieta: 'Linie Optimusa', wartosc: 'instalowane, cel 10 mln sztuk rocznie od 2027', stanNa: '2026-04', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Zapowiadana zdolność produkcyjna linii Optimusa w tym zakładzie to dziesięć milionów sztuk rocznie od 2027 roku. Dla porównania: cała Tesla dostarczyła w 2025 roku 1,66 miliona samochodów.',
        zrodlo: Z.wikiOptimus,
      },
    ],
    os: [
      { data: '2022-04', tytul: 'Start produkcji', opis: 'Model Y wyjeżdża z nowego zakładu pod Austin.', waga: 2 },
      { data: '2023-11-30', tytul: 'Pierwsze Cybertrucki', opis: 'Dostawy ruszają właśnie stąd.', waga: 2 },
    ],
    powiazane: [
      { id: 'cybertruck', powod: 'wyjeżdża z tego zakładu' },
      { id: 'optimus', powod: 'tu mają stanąć jego linie produkcyjne' },
      { id: 'gigafactory', powod: 'jedna z czterech gigafabryk firmy' },
      { id: 'model-y', powod: 'pierwszy model produkowany w tym zakładzie' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiTesla, Z.wikiCybertruck, Z.wikiOptimus],
    zaktualizowano: '2026-09-13',
  },
];

export const teslaEncje: Encja[] = [
  ...firma, ...samochody, ...produkcja, ...oprogramowanie, ...reszta, ...teksas,
];
