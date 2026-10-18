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
      'Do SpaceX weszła we wrześniu 2002 roku, kilka miesięcy po założeniu firmy. Wprowadził ją [[hans-koenigsmann|Hans Koenigsmann]], kolega z Microcosm. W grudniu 2008, po wynegocjowaniu kontraktu z NASA, została prezeską. Dziś odpowiada za bieżące operacje i wszystkie relacje handlowe — podczas gdy [[elon-musk|Musk]] zajmuje się inżynierią i kierunkiem.',
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
    zrodla: [Z.wikiShotwell, Z.wikiSpaceX, Z.nwhmShotwell, Z.cnbcKoenigsmann],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'jared-isaacman',
    typ: 'osoba',
    nazwa: 'Jared Isaacman',
    aka: ['Isaacman'],
    krotki: 'Kupił i poprowadził dwie prywatne misje orbitalne, a w grudniu 2025 został piętnastym administratorem NASA.',
    tresc: [
      'Isaacman zbudował firmę płatniczą Shift4 Payments, a potem zrobił rzecz, której wcześniej nikt nie robił: kupił cały lot orbitalny i sam go poprowadził jako dowódca. Pierwszym była [[inspiration4|Inspiration4]] w 2021 roku, z załogą bez żadnego zawodowego astronauty na pokładzie.',
      'Trzy lata później poleciał ponownie, tym razem w ramach [[polaris-dawn|Polaris Dawn]]. Ta misja sięgnęła 1 408 kilometrów — najdalej od Ziemi, jak człowiek znalazł się od czasu Apollo — i zakończyła się pierwszym komercyjnym spacerem kosmicznym. Isaacman wyszedł ze [[crew-dragon|Crew Dragona]] na siedem minut i pięćdziesiąt sześć sekund.',
      'Obie misje miały wymiar zbiórkowy. Przy Inspiration4 on i jego żona przekazali 125 milionów dolarów na szpital St. Jude; łącznie misja zebrała ponad 243 miliony. To odwrócenie klasycznego schematu turystyki kosmicznej, w którym pieniądze płyną wyłącznie w jedną stronę. Obie misje wykonano [[falcon-9|Falconem 9]], a obie zakończyły się [[wodowanie|wodowaniem]]. Na spacerze kosmicznym towarzyszyła mu [[sarah-gillis|Sarah Gillis]], inżynierka SpaceX, która wyszła ze statku zaraz po nim.',
      'Dalszy ciąg jest nietypowy nawet jak na tę branżę. W grudniu 2024 roku prezydent Donald Trump wskazał go na administratora NASA, w maju 2025 wycofał nominację na tle publicznego sporu z [[elon-musk|Muskiem]], a w listopadzie zgłosił go ponownie. Senat potwierdził wybór 17 grudnia 2025 roku stosunkiem 67 do 30; następnego dnia Isaacman został zaprzysiężony jako piętnasty szef agencji.',
      'Jest to sytuacja bez precedensu: człowiek, który kupił dwa loty od prywatnej firmy, kieruje dziś urzędem, który tej samej firmie zleca [[hls-artemis|lądowanie na Księżycu]] i [[commercial-crew|wozi nią swoich astronautów]]. Za priorytet podał powrót ludzi na Księżyc i stałą obecność na jego powierzchni.',
    ],
    fakty: [
      { etykieta: 'Loty orbitalne', wartosc: '2 — Inspiration4 i Polaris Dawn', stanNa: '2026-09-12', pewnosc: 'potwierdzone' },
      { etykieta: 'Firma', wartosc: 'Shift4 Payments', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas poza statkiem', wartosc: '7 min 56 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Najwyższa osiągnięta orbita', wartosc: '1 408,1 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Administrator NASA', wartosc: 'zaprzysiężony 18 grudnia 2025, piętnasty w historii', pewnosc: 'potwierdzone' },
      { etykieta: 'Głosowanie w Senacie', wartosc: '67 za, 30 przeciw, 17 grudnia 2025', pewnosc: 'potwierdzone' },
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
      { data: '2025-12-18', tytul: 'Administrator NASA', opis: 'Zostaje piętnastym szefem agencji, dzień po potwierdzeniu przez Senat.', waga: 3 },
    ],
    powiazane: [
      { id: 'inspiration4', powod: 'kupił tę misję i był jej dowódcą' },
      { id: 'polaris-dawn', powod: 'dowodził nią i wykonał pierwszy komercyjny spacer kosmiczny' },
      { id: 'crew-dragon', powod: 'oba jego loty odbyły się w tej kapsule' },
      { id: 'sarah-gillis', powod: 'wyszła ze statku razem z nim podczas Polaris Dawn' },
    ],
    zrodla: [Z.wikiInspiration4, Z.wikiPolarisDawn, Z.nasaIsaacman, Z.polarisDawn],
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
      'Jej rola mówi coś o tym, jak zmienił się zawód astronauty. Nie przeszła przez wojsko ani przez agencję kosmiczną — przeszła przez firmę, która buduje statki, i wsiadła do tego, który współtworzyła. Dowodził wtedy [[jared-isaacman|Jared Isaacman]], który wyszedł ze statku tuż przed nią. Poleciała [[falcon-9|Falconem 9]] i wróciła [[wodowanie|wodowaniem]] — drogą, którą sama przygotowywała dla innych.',
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
    zrodla: [Z.wikiPolarisDawn, Z.wikiDragon2, Z.polarisDawn],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'tom-mueller',
    typ: 'osoba',
    nazwa: 'Tom Mueller',
    aka: ['Mueller'],
    krotki: 'Pierwszy pracownik SpaceX i konstruktor wszystkich jej wczesnych silników — trafił tam przez hobbystyczne budowanie rakiet.',
    tresc: [
      'Mueller dorastał w St. Maries w Idaho, gdzie jego ojciec pracował jako drwal i liczył, że syn pójdzie w jego ślady. Syn wolał rakiety: jako dziecko budował modele, potem eksperymentował ze sprzętem spawalniczym ojca i odkrył, że dodanie wody zwiększa ciąg. Studia mechaniczne na Uniwersytecie Idaho, które skończył w 1985 roku, opłacił pracując latem w tartaku.',
      'Przez piętnaście lat pracował w TRW, prowadząc produkty napędowe i spalinowe, i był głównym inżynierem silnika TR-106 o ciągu 2 900 kN. Biurokracja korporacyjna doprowadziła go do hobby: w Reaction Research Society budował coraz większe silniki amatorskie i w 2002 roku ukończył największy amatorski silnik na paliwo ciekłe na świecie — 36 kilogramów masy i 58 kN ciągu.',
      'Właśnie ta amatorska robota zwróciła uwagę [[elon-musk|Muska]]. Mueller dołączył do [[spacex|SpaceX]] w 2002 roku jako pierwszy pracownik firmy i wiceprezes do spraw napędu.',
      'Prowadził rozwój wszystkich wczesnych silników: [[merlin|Merlina]] i [[kestrel|Kestrela]] dla [[falcon-1|Falcona 1]], kolejnych odmian Merlina dla [[falcon-9|Falcona 9]] oraz [[draco-superdraco|Draco i SuperDraco]] dla Dragona. Odszedł z firmy 30 listopada 2020 roku, a we wrześniu 2021 założył Impulse Space.',
    ],
    fakty: [
      { etykieta: 'W SpaceX od', wartosc: '2002, jako pierwszy pracownik', pewnosc: 'potwierdzone' },
      { etykieta: 'Stanowisko', wartosc: 'wiceprezes do spraw napędu', pewnosc: 'potwierdzone' },
      { etykieta: 'Wcześniej', wartosc: '15 lat w TRW, główny inżynier silnika TR-106', pewnosc: 'potwierdzone' },
      { etykieta: 'Rekord amatorski', wartosc: 'największy amatorski silnik na paliwo ciekłe: 36 kg, 58 kN', stanNa: '2002', pewnosc: 'potwierdzone' },
      { etykieta: 'Odejście', wartosc: '30 listopada 2020', pewnosc: 'potwierdzone' },
      { etykieta: 'Silniki, które prowadził', wartosc: 'Merlin, Kestrel, Draco, SuperDraco', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Musk znalazł go nie w firmie zbrojeniowej, tylko w klubie hobbystów. Mueller budował po godzinach największy amatorski silnik rakietowy na paliwo ciekłe na świecie — i to ten silnik, a nie piętnaście lat pracy w koncernie, otworzyło mu drzwi do SpaceX.',
        zrodlo: Z.wikiMueller,
      },
    ],
    os: [
      { data: '2002', tytul: 'Dołącza do SpaceX', opis: 'Zostaje pierwszym pracownikiem firmy i szefem napędu.', waga: 3 },
      { data: '2020-11-30', tytul: 'Odejście', opis: 'Po osiemnastu latach odchodzi z firmy.', waga: 2 },
    ],
    powiazane: [
      { id: 'merlin', powod: 'prowadził jego rozwój od pierwszej wersji' },
      { id: 'kestrel', powod: 'również jego konstrukcja' },
      { id: 'draco-superdraco', powod: 'prowadził rozwój obu tych silników' },
      { id: 'spacex', powod: 'jej pierwszy pracownik' },
      { id: 'wczesna-ekipa', powod: 'jeden z kilku ludzi, którzy zbudowali pierwszą rakietę firmy' },
    ],
    zrodla: [Z.wikiMueller, Z.wikiMerlin, Z.tcMueller],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'hans-koenigsmann',
    typ: 'osoba',
    nazwa: 'Hans Koenigsmann',
    aka: ['Königsmann'],
    krotki: 'Czwarty inżynier w SpaceX, główny inżynier startów i człowiek odpowiedzialny za to, żeby rakiety nie zawodziły.',
    tresc: [
      'Koenigsmann skończył lotnictwo na Politechnice Berlińskiej w 1989 roku, doktorat obronił w Bremie w 1995. Pracował w tamtejszym ośrodku technologii kosmicznych przy satelicie BremSat, potem przeniósł się do Kalifornii, do firmy Microcosm. [[elon-musk|Muska]] poznał na starcie rakiety na pustyni Mojave.',
      'Do [[spacex|SpaceX]] dołączył w 2002 roku jako czwarty pracownik techniczny. Zaczynał jako wiceprezes do spraw awioniki, a od trzeciego lotu [[falcon-1|Falcona 1]] pełnił funkcję głównego inżyniera startów. W 2011 roku awansował na wiceprezesa do spraw niezawodności lotów — czyli człowieka odpowiedzialnego za to, żeby misje kończyły się bezpiecznie.',
      'To on wprowadził do firmy [[gwynne-shotwell|Gwynne Shotwell]], swoją koleżankę z Microcosmu, która dwa tygodnie po pierwszym spotkaniu z Muskiem przyjęła w SpaceX pracę i dziś kieruje całą firmą.',
      'Odejście z firmy ogłosił w styczniu 2021 roku. Zasiada w radzie nadzorczej OHB SE i doradza firmie rakietowej Stoke Space. Jego następcą został [[bill-gerstenmaier|Bill Gerstenmaier]]. W historii firmy należy do [[wczesna-ekipa|pierwszej ekipy]], która budowała Falcona 1 na atolu.',
    ],
    fakty: [
      { etykieta: 'W SpaceX od', wartosc: '2002, jako czwarty pracownik techniczny', pewnosc: 'potwierdzone' },
      { etykieta: 'Wykształcenie', wartosc: 'Politechnika Berlińska (1989), doktorat w Bremie (1995)', pewnosc: 'potwierdzone' },
      { etykieta: 'Główny inżynier startów od', wartosc: 'trzeciego lotu Falcona 1', pewnosc: 'potwierdzone' },
      { etykieta: 'Wiceprezes do spraw niezawodności', wartosc: 'od 2011 roku', pewnosc: 'potwierdzone' },
      { etykieta: 'Odejście', wartosc: 'styczeń 2021', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Poznał Muska na starcie rakiety na pustyni Mojave — nie na rozmowie kwalifikacyjnej ani na konferencji. Firma, która wynosi dziś większość ładunków na świecie, skompletowała pierwszy zespół inżynierski na zlotach hobbystów i pustynnych startach amatorskich rakiet.',
        zrodlo: Z.wikiKoenigsmann,
      },
    ],
    os: [
      { data: '2002', tytul: 'Dołącza do SpaceX', opis: 'Czwarty pracownik techniczny, początkowo szef awioniki.', waga: 2 },
      { data: '2011', tytul: 'Niezawodność lotów', opis: 'Obejmuje odpowiedzialność za bezpieczne kończenie misji.', waga: 2 },
      { data: '2021-01', tytul: 'Odejście', opis: 'Po dziewiętnastu latach ogłasza odejście z firmy.', waga: 2 },
    ],
    powiazane: [
      { id: 'gwynne-shotwell', powod: 'wprowadził ją do firmy' },
      { id: 'bill-gerstenmaier', powod: 'jego następca na stanowisku' },
      { id: 'falcon-1', powod: 'główny inżynier startów od jego trzeciego lotu' },
      { id: 'spacex', powod: 'czwarty pracownik techniczny w jej historii' },
      { id: 'wczesna-ekipa', powod: 'jeden z pierwszej garstki inżynierów firmy' },
    ],
    zrodla: [Z.wikiKoenigsmann, Z.wikiShotwell, Z.cnbcKoenigsmann],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'bill-gerstenmaier',
    typ: 'osoba',
    nazwa: 'Bill Gerstenmaier',
    aka: ['Gerstenmaier', 'Gerst'],
    krotki: 'Czterdzieści lat w NASA, odsunięty ze stanowiska w 2019 roku — pół roku później zatrudniony przez SpaceX.',
    tresc: [
      'Gerstenmaier zaczął pracę w NASA w 1977 roku, w ośrodku Lewisa w Ohio, tuż po studiach na Purdue. Od czerwca 2002 kierował programem Międzynarodowej Stacji Kosmicznej, a od 2005 do 10 lipca 2019 był zastępcą administratora do spraw eksploracji i operacji załogowych — stanowiska opisywanego jako najbardziej wpływowe w amerykańskich lotach załogowych.',
      'Dziesiątego lipca 2019 roku administrator NASA Jim Bridenstine ogłosił przeniesienie go na stanowisko doradcy specjalnego. W praktyce urzędniczej jest to degradacja stosowana po to, żeby skłonić kogoś do odejścia. W ogłoszeniu nie podano powodu; Bridenstine tłumaczył potem decyzję obawami o przekroczenia kosztów i terminów w programach, które Gerstenmaier nadzorował.',
      'W lutym 2020 roku [[spacex|SpaceX]] zatrudniło go jako konsultanta [[hans-koenigsmann|Hansa Koenigsmanna]]. Gdy ten ogłosił odejście pod koniec stycznia 2021, Gerstenmaier objął po nim stanowisko wiceprezesa do spraw budowy i niezawodności lotów.',
      'Jego rola w [[cots|programie komercyjnym]] była kluczowa i szła wbrew wygodzie urzędu: przekonał NASA, żeby opóźnić ogłoszenie wyników i znaleźć dodatkowe pieniądze, byle utrzymać dwie konkurujące firmy zamiast jednej. Bez tego [[crew-dragon|Crew Dragon]] mógłby nigdy nie powstać. W SpaceX odpowiada za tę samą dziedzinę, którą nadzorował po stronie agencji: loty załogowe w ramach [[commercial-crew|Commercial Crew]], od certyfikacji po misje takie jak [[demo-2|Demo-2]].',
    ],
    fakty: [
      { etykieta: 'W NASA', wartosc: 'cztery dekady, od 1977 roku', pewnosc: 'potwierdzone' },
      { etykieta: 'Kierowanie programem ISS', wartosc: 'od czerwca 2002', pewnosc: 'potwierdzone' },
      { etykieta: 'Zastępca administratora', wartosc: '2005 – 10 lipca 2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Przeniesienie na doradcę', wartosc: '10 lipca 2019, w ogłoszeniu bez podania powodu', pewnosc: 'potwierdzone' },
      { etykieta: 'W SpaceX od', wartosc: 'lutego 2020, jako konsultant', pewnosc: 'potwierdzone' },
      { etykieta: 'Obecne stanowisko', wartosc: 'wiceprezes do spraw budowy i niezawodności lotów', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'To on przekonał NASA, żeby w programie komercyjnym finansować dwie konkurujące firmy zamiast jednej — kosztem opóźnienia i dodatkowych pieniędzy. Kilkanaście lat później sam trafił do jednej z nich, jako wiceprezes odpowiedzialny za niezawodność lotów.',
        zrodlo: Z.wikiGerstenmaier,
      },
    ],
    os: [
      { data: '2019-07-10', tytul: 'Odsunięcie w NASA', opis: 'Przeniesiony na stanowisko doradcy specjalnego bez podania powodu.', waga: 3 },
      { data: '2020-02', tytul: 'Przejście do SpaceX', opis: 'Zatrudniony jako konsultant Hansa Koenigsmanna.', waga: 3 },
    ],
    powiazane: [
      { id: 'hans-koenigsmann', powod: 'najpierw jego konsultant, potem następca' },
      { id: 'cots', powod: 'przeforsował finansowanie dwóch konkurujących firm zamiast jednej' },
      { id: 'crew-dragon', powod: 'bez tamtej decyzji ten program mógłby nie powstać' },
      { id: 'spacex', powod: 'odpowiada w niej za budowę i niezawodność lotów' },
    ],
    zrodla: [Z.wikiGerstenmaier, Z.wikiCots, Z.spoGerstenmaier, Z.cnbcKoenigsmann],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'behnken-i-hurley',
    typ: 'osoba',
    nazwa: 'Behnken i Hurley',
    aka: ['Bob Behnken', 'Doug Hurley', 'załoga Demo-2'],
    krotki: 'Dwaj astronauci, którzy w maju 2020 roku przerwali dziewięcioletnią przerwę w amerykańskich lotach załogowych.',
    tresc: [
      'Robert Behnken i Douglas Hurley polecieli [[demo-2|misją Demo-2]] 30 maja 2020 roku o 15:22 czasu wschodniego, ze stanowiska [[lc-39a|LC-39A]] w Kennedy Space Center. Byli pierwszymi astronautami wysłanymi z terytorium Stanów od zakończenia programu wahadłowców w 2011 roku.',
      'Formalnie był to lot testowy — ostatni etap certyfikacji [[crew-dragon|Crew Dragona]] przed lotami rutynowymi. Praktycznie oznaczał, że NASA przestaje być zdana wyłącznie na rosyjski Sojuz przy wysyłaniu ludzi na stację.',
      'Misja trwała niespełna sześćdziesiąt cztery dni i zakończyła się [[wodowanie|wodowaniem]] na Atlantyku 2 sierpnia 2020 roku. Pierwszy lot operacyjny tej serii, [[crew-1|Crew-1]], ruszył trzy miesiące później.',
      'Warto zauważyć symetrię: Hurley był pilotem ostatniej misji wahadłowca w lipcu 2011 i dowódcą pierwszego lotu, który tę przerwę zamknął. Ta sama osoba zgasiła światło i ją zapaliła z powrotem. Certyfikację ich lotu po stronie NASA prowadził [[bill-gerstenmaier|Bill Gerstenmaier]], który kilka miesięcy później przeszedł do SpaceX.',
    ],
    fakty: [
      { etykieta: 'Misja', wartosc: 'Demo-2, 30 maja – 2 sierpnia 2020', pewnosc: 'potwierdzone' },
      { etykieta: 'Stanowisko startowe', wartosc: 'LC-39A, Kennedy Space Center', pewnosc: 'potwierdzone' },
      { etykieta: 'Czas trwania', wartosc: '63 dni 23 godziny 25 minut', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'pierwszy lot załogowy z terytorium USA od 2011 roku', pewnosc: 'potwierdzone' },
      { etykieta: 'Powrót', wartosc: 'wodowanie na Atlantyku', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Między ostatnim lotem wahadłowca a startem Demo-2 minęło dziewięć lat, w których Stany nie potrafiły wysłać własnego człowieka w kosmos z własnego terytorium. Przez ten czas amerykańscy astronauci lecieli na stację wyłącznie rosyjskim Sojuzem, za miejsca kupowane od agencji innego państwa.',
        zrodlo: Z.nasaDemo2,
      },
    ],
    os: [
      { data: '2020-05-30', tytul: 'Start Demo-2', opis: 'Pierwszy lot załogowy z terytorium USA od dziewięciu lat.', waga: 3 },
      { data: '2020-08-02', tytul: 'Wodowanie', opis: 'Kapsuła ląduje na Atlantyku po niemal 64 dniach.', waga: 2 },
    ],
    powiazane: [
      { id: 'demo-2', powod: 'ich misja' },
      { id: 'crew-dragon', powod: 'pierwsi ludzie, którzy nią polecieli' },
      { id: 'lc-39a', powod: 'stanowisko, z którego wystartowali' },
      { id: 'bill-gerstenmaier', powod: 'jego decyzja o finansowaniu dwóch firm umożliwiła ten lot' },
    ],
    zrodla: [Z.nasaDemo2, Z.wikiDragon2],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'wczesna-ekipa',
    typ: 'wydarzenie',
    nazwa: 'Wczesna ekipa Falcona 1',
    aka: ['pierwsi pracownicy SpaceX', 'Kwajalein'],
    krotki: 'Garstka inżynierów zebranych na zlotach hobbystów i w małych firmach, która zbudowała pierwszą rakietę SpaceX.',
    tresc: [
      'Pierwszy zespół [[spacex|SpaceX]] nie pochodził z wielkich koncernów zbrojeniowych. [[tom-mueller|Tom Mueller]], pracownik numer jeden, trafił tam przez amatorski silnik zbudowany po godzinach w klubie rakietowym. [[hans-koenigsmann|Hans Koenigsmann]], czwarty inżynier, poznał [[elon-musk|Muska]] na starcie rakiety na pustyni Mojave. [[gwynne-shotwell|Gwynne Shotwell]] przyszła z niewielkiej firmy Microcosm, wprowadzona przez Koenigsmanna.',
      'Skalę widać w liczbach: w listopadzie 2005 roku firma miała stu sześćdziesięciu pracowników, a pierwsza siedziba w El Segundo mierzyła około dwustu osiemdziesięciu metrów kwadratowych i mieściła mniej niż tuzin osób.',
      'Ten zespół zbudował [[falcon-1|Falcona 1]] i przeżył z nim trzy porażki z rzędu, po których firmie kończyły się pieniądze. [[falcon-1-lot-4|Czwarta rakieta]] powstała w sześć tygodni z tego, co było pod ręką, i doleciała na orbitę.',
      'Starty odbywały się z atolu Kwajalein na Pacyfiku — miejsca wybranego za odległość od ludzi, które przy pierwszym locie okazało się też przyczyną awarii: nakrętka przewodu paliwowego pękła [[falcon-1-lot-1|od korozji wywołanej morską mgłą]].',
    ],
    fakty: [
      { etykieta: 'Pracownik numer jeden', wartosc: 'Tom Mueller, szef napędu', pewnosc: 'potwierdzone' },
      { etykieta: 'Czwarty inżynier', wartosc: 'Hans Koenigsmann, awionika i starty', pewnosc: 'potwierdzone' },
      { etykieta: 'Zatrudnienie', wartosc: '160 osób', stanNa: '2005-11', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsza siedziba', wartosc: 'El Segundo, ok. 280 m²', pewnosc: 'potwierdzone' },
      { etykieta: 'Miejsce startów', wartosc: 'atol Kwajalein na Pacyfiku', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Dwóch z pierwszych czterech inżynierów firma znalazła poza branżą etatową: jednego w klubie rakietowych hobbystów, drugiego na starcie amatorskiej rakiety na pustyni. Firma, która dziś startuje częściej niż większość państw, skompletowała trzon zespołu na zlotach ludzi budujących silniki w garażu.',
        zrodlo: Z.wikiMueller,
      },
    ],
    os: [
      { data: '2002', tytul: 'Pierwsi pracownicy', opis: 'Mueller, Koenigsmann i Shotwell dołączają w ciągu kilku miesięcy.', waga: 3 },
      { data: '2005-11', tytul: 'Sto sześćdziesiąt osób', opis: 'Firma nadal jest mniejsza niż jeden dział koncernu zbrojeniowego.', waga: 1 },
      { data: '2008-09-28', tytul: 'Czwarty lot Falcona 1', opis: 'Ten sam zespół dowozi rakietę na orbitę po trzech porażkach.', waga: 3 },
    ],
    powiazane: [
      { id: 'tom-mueller', powod: 'pracownik numer jeden i konstruktor silników' },
      { id: 'hans-koenigsmann', powod: 'czwarty inżynier i główny inżynier startów' },
      { id: 'gwynne-shotwell', powod: 'dołączyła we wrześniu 2002 i dziś prowadzi firmę' },
      { id: 'falcon-1', powod: 'rakieta zbudowana przez ten zespół' },
      { id: 'falcon-1-lot-4', powod: 'lot, po którym firma przestała być kandydatem do upadłości' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiMueller, Z.wikiKoenigsmann, Z.wikiHistoria, Z.cnbcKoenigsmann, Z.gunterFalcon1],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'jb-straubel',
    typ: 'osoba',
    nazwa: 'JB Straubel',
    aka: ['Jeffrey Brian Straubel', 'pierwszy dyrektor techniczny Tesli'],
    krotki: 'Piąty pracownik Tesli i jej dyrektor techniczny przez piętnaście lat — człowiek od baterii, nie od samochodów.',
    tresc: [
      'Urodził się 20 grudnia 1975 roku w Des Moines w stanie Iowa. Skończył [[pretoria|Stanford]]: licencjat z inżynierii systemów energetycznych, magisterium z energetyki. Do [[tesla|Tesli]] dołączył w maju 2004 roku jako piąty pracownik — dziesięć miesięcy po zarejestrowaniu spółki.',
      'Objął stanowisko dyrektora technicznego i był pierwszą osobą, która je zajmowała. Odpowiadał za konstrukcję ogniw i łańcuch dostaw, a potem przeprowadził firmę od pomysłu na [[gigafactory|gigafabrykę]] do rozkręcenia produkcji [[model-3|Modelu 3]].',
      'W lipcu 2019 roku oddał stanowisko i przeszedł do roli doradczej. W maju 2023 wrócił do firmy jako niezależny członek rady dyrektorów. Na mocy [[spor-o-zalozycieli|ugody z 2009 roku]] jest formalnie jednym z pięciu współzałożycieli Tesli, choć w chwili rejestracji spółki go tam nie było.',
      'Równolegle prowadzi Redwood Materials, założone w 2017 roku przedsiębiorstwo odzyskujące lit, kobalt i nikiel ze zużytych akumulatorów litowo-jonowych i elektroniki. To domknięcie tego samego łańcucha, który budował w Tesli, tyle że od drugiej strony. Tytuł współzałożyciela dostał tą samą ugodą co [[martin-eberhard|Martin Eberhard]], choć w firmie znaleźli się w innych momentach i rozstali z nią w innych okolicznościach.',
    ],
    fakty: [
      { etykieta: 'Urodzony', wartosc: '20 grudnia 1975, Des Moines', pewnosc: 'potwierdzone' },
      { etykieta: 'Dołączył do Tesli', wartosc: 'maj 2004, jako piąty pracownik', pewnosc: 'potwierdzone' },
      { etykieta: 'Stanowisko', wartosc: 'pierwszy dyrektor techniczny, do lipca 2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Powrót', wartosc: 'maj 2023, rada dyrektorów', pewnosc: 'potwierdzone' },
      { etykieta: 'Redwood Materials', wartosc: 'odzysk surowców z akumulatorów, od 2017', pewnosc: 'potwierdzone' },
      { etykieta: 'Status założyciela', wartosc: 'przyznany ugodą sądową, nie datą rejestracji', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Był w Tesli piętnaście lat — dłużej niż Eberhard, dłużej niż niemal ktokolwiek z pierwszej dziesiątki. Jego firma zajmuje się dziś rozbieraniem akumulatorów, których konstrukcję sam projektował dwie dekady wcześniej.',
        zrodlo: Z.wikiStraubel,
      },
    ],
    os: [
      { data: '2004-05', tytul: 'Piąty pracownik Tesli', opis: 'Straubel obejmuje stanowisko dyrektora technicznego.', waga: 2 },
      { data: '2019-07', tytul: 'Odejście ze stanowiska', opis: 'Po piętnastu latach przechodzi do roli doradczej.', waga: 2 },
    ],
    powiazane: [
      { id: 'tesla', powod: 'budował jej stronę techniczną od piątego etatu' },
      { id: 'spor-o-zalozycieli', powod: 'ugoda przyznała mu tytuł współzałożyciela' },
      { id: 'gigafactory', powod: 'prowadził ten pomysł od koncepcji do produkcji' },
      { id: 'martin-eberhard', powod: 'obaj są współzałożycielami z mocy tej samej ugody' },
    ],
    zrodla: [Z.wikiStraubel, Z.wikiTesla, Z.cnbcStraubel],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'martin-eberhard',
    typ: 'osoba',
    nazwa: 'Martin Eberhard',
    aka: ['pierwszy dyrektor generalny Tesli'],
    krotki: 'Człowiek, który założył Teslę, nadał jej nazwę, zbudował Roadstera i po czterech latach został z niej usunięty.',
    tresc: [
      'Urodzony w 1960 roku w Kalifornii, inżynier komputerowy po Uniwersytecie Illinois. Zanim wszedł w samochody, zbudował z Markiem Tarpenningiem firmę NuvoMedia i czytnik Rocket eBook — pierwsze urządzenie do bezpiecznego pobierania książek przez internet. Gemstar kupił NuvoMedię w 2000 roku.',
      'W lipcu 2003 roku ta sama dwójka zarejestrowała [[tesla|Tesla Motors]] w Menlo Park. Eberhard był pierwszym dyrektorem generalnym i doprowadził firmę do [[tesla-roadster|Roadstera]] — samochodu, który miał udowodnić, że elektryk nie musi być powolny.',
      'W listopadzie 2007 roku Tesla ogłosiła jego przejście do rady doradczej. Według relacji prasowych to [[elon-musk|Musk]], wtedy przewodniczący rady, poprosił go o odejście, tłumacząc, że nie widzi dla niego roli w firmie.',
      'W czerwcu 2009 roku Eberhard pozwał Muska o zniesławienie, pomówienie i naruszenie umowy. Pozew wycofał w sierpniu, a we wrześniu Tesla potwierdziła ugodę bez podania warunków. To ta ugoda ustaliła, że [[spor-o-zalozycieli|współzałożycieli jest pięcioro]]. Tą samą ugodą tytuł współzałożyciela dostał między innymi [[jb-straubel|JB Straubel]], który dołączył do firmy dziesięć miesięcy po jej rejestracji.',
    ],
    fakty: [
      { etykieta: 'Urodzony', wartosc: '1960, Kalifornia', pewnosc: 'potwierdzone' },
      { etykieta: 'Przed Teslą', wartosc: 'NuvoMedia i czytnik Rocket eBook, sprzedany w 2000', pewnosc: 'potwierdzone' },
      { etykieta: 'Rejestracja Tesli', wartosc: 'lipiec 2003, z Markiem Tarpenningiem', pewnosc: 'potwierdzone' },
      { etykieta: 'Dyrektor generalny', wartosc: 'do listopada 2007', pewnosc: 'potwierdzone' },
      { etykieta: 'Pozew', wartosc: 'czerwiec 2009, wycofany w sierpniu', pewnosc: 'potwierdzone' },
      { etykieta: 'Ugoda', wartosc: 'wrzesień 2009, warunki nieujawnione', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Zanim zbudował samochód elektryczny, zbudował czytnik książek. Rocket eBook wyszedł w 1998 roku — dekadę przed pierwszym Kindlem — i został sprzedany, zanim rynek na takie urządzenia w ogóle powstał. Ten sam wzór powtórzył się potem z Roadsterem.',
        zrodlo: Z.wikiEberhard,
      },
    ],
    os: [
      { data: '2003-07-01', tytul: 'Rejestracja Tesli', opis: 'Eberhard i Tarpenning zakładają spółkę w Menlo Park.', waga: 2 },
      { data: '2007-11', tytul: 'Odejście ze stanowiska', opis: 'Tesla ogłasza jego przejście do rady doradczej.', waga: 2 },
    ],
    powiazane: [
      { id: 'spor-o-zalozycieli', powod: 'jego pozew doprowadził do ugody definiującej założycieli' },
      { id: 'tesla', powod: 'zarejestrował ją i prowadził przez pierwsze cztery lata' },
      { id: 'tesla-roadster', powod: 'pierwszy samochód firmy powstał pod jego kierownictwem' },
      { id: 'jb-straubel', powod: 'drugi współzałożyciel uznany tą samą ugodą' },
    ],
    zrodla: [Z.wikiEberhard, Z.wikiTesla, Z.nbcZalozyciele],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'franz-von-holzhausen',
    typ: 'osoba',
    nazwa: 'Franz von Holzhausen',
    aka: ['główny projektant Tesli'],
    krotki: 'Autor wyglądu każdego Tesli od 2008 roku — i człowiek, który na scenie rzucił kulą w szybę Cybertrucka.',
    tresc: [
      'Urodzony 10 maja 1968 roku. Studia zaczął na Uniwersytecie Syracuse w 1986, po dwóch latach przeniósł się do ArtCenter College of Design w Pasadenie i w 1992 roku odebrał dyplom z projektowania środków transportu.',
      'Zaczynał w Volkswagenie, gdzie pracował przy projekcie Concept One, z którego wyrósł nowy Beetle. W 2000 roku przeszedł do General Motors i prowadził wzornictwo modeli Saturn Sky i Pontiac Solstice, a w 2005 został dyrektorem wzornictwa Mazdy — stamtąd pochodzą koncepcyjne Kabura i Furai.',
      'Do [[tesla|Tesli]] trafił w 2008 roku i od tego czasu jest jej głównym projektantem. Odpowiada za wygląd [[model-s|Modelu S]], [[model-x|Modelu X]], [[model-3|Modelu 3]], [[model-y|Modelu Y]], [[tesla-semi|Semi]], [[cybertruck|Cybertrucka]] i drugiej generacji [[tesla-roadster|Roadstera]] — praktycznie wszystkiego, co firma pokazała.',
      'Najbardziej znany moment jego kariery nie był zaplanowany. Przy premierze Cybertrucka w listopadzie 2019 roku to on rzucił metalową kulą w rzekomo nietłukącą się szybę. Szyba pękła. Dwa razy.',
    ],
    fakty: [
      { etykieta: 'Urodzony', wartosc: '10 maja 1968', pewnosc: 'potwierdzone' },
      { etykieta: 'Wykształcenie', wartosc: 'ArtCenter College of Design, dyplom 1992', pewnosc: 'potwierdzone' },
      { etykieta: 'Wcześniej', wartosc: 'Volkswagen, General Motors (2000), Mazda (2005)', pewnosc: 'potwierdzone' },
      { etykieta: 'W Tesli', wartosc: 'główny projektant od 2008', pewnosc: 'potwierdzone' },
      { etykieta: 'Zaprojektował', wartosc: 'Model S, X, 3, Y, Semi, Cybertruck, Roadster drugiej generacji', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Zanim narysował pierwszą Teslę, narysował nowego Beetle dla Volkswagena i dwa roadstery dla General Motors. Trzy najbardziej rozpoznawalne sylwetki jego kariery dzieli dwadzieścia lat i kompletnie odwrotne podejście do zaokrągleń.',
        zrodlo: Z.wikiHolzhausen,
      },
    ],
    os: [
      { data: '2008', tytul: 'Przyjście do Tesli', opis: 'Obejmuje stanowisko głównego projektanta, które zajmuje do dziś.', waga: 2 },
      { data: '2019-11-21', tytul: 'Stłuczona szyba Cybertrucka', opis: 'Rzuca kulą w szybę podczas premiery; szyba pęka przy obu próbach.', waga: 2 },
    ],
    powiazane: [
      { id: 'tesla', powod: 'odpowiada za wygląd wszystkich jej samochodów od 2008 roku' },
      { id: 'cybertruck', powod: 'to on rzucił kulą w szybę podczas premiery' },
      { id: 'model-s', powod: 'pierwszy samochód, który zaprojektował dla firmy' },
      { id: 'tesla-semi', powod: 'ciężarówka powstała w tym samym studiu wzorniczym' },
    ],
    zrodla: [Z.wikiHolzhausen, Z.wikiCybertruck, Z.artcenterHolzhausen],
    zaktualizowano: '2026-10-18',
  },

  {
    id: 'rodzina-muska',
    typ: 'osoba',
    nazwa: 'Rodzina Muska',
    aka: ['Errol Musk', 'Maye Musk', 'Tosca Musk', 'Haldeman'],
    krotki: 'Kanadyjska babka, południowoafrykański ojciec, matka modelka i dziadek, który przeleciał pół świata jednosilnikowym samolotem.',
    tresc: [
      '[[elon-musk|Elon]] urodził się w Pretorii jako najstarsze z trojga dzieci Errola i Maye Musków. Ojciec, urodzony 25 maja 1946 roku, był inżynierem, przedsiębiorcą i lokalnym politykiem; matka, urodzona 19 kwietnia 1948, jest dietetyczką i modelką z pięćdziesięcioletnią karierą zawodową. Małżeństwo trwało od 1970 do 1979 roku.',
      'Rodzeństwo poszło w swoje strony, choć pierwsze pieniądze zrobili razem na [[zip2|Zip2]]. [[kimbal-musk|Kimbal]], urodzony 20 września 1972, zajął się jedzeniem i ogrodami przy szkołach. Tosca, urodzona 20 lipca 1974, jest producentką filmową i współzałożycielką serwisu Passionflix.',
      'Kanadyjskie obywatelstwo matki otworzyło Elonowi drogę do wyjazdu z RPA w 1989 roku — ten jeden dokument przesądził o tym, że jego firmy powstały w Ameryce, a nie gdzie indziej. Zanim to nastąpiło, całe dzieciństwo spędził w [[pretoria|Pretorii]]. Korzenie po stronie matki sięgają dziadka, Joshuy Haldemana, chiropraktyka, lotnika i działacza politycznego z Saskatchewan.',
      'Haldeman przeprowadził rodzinę z Kanady do RPA w 1950 roku. Wikipedia podaje, że motywem było poparcie dla polityki apartheidu; Errol Musk mówił, że Haldemanowie przyjechali, bo sympatyzowali z rządem afrykanerskim. Dziadek zginął w 1974 roku w katastrofie lotniczej podczas ćwiczebnego lądowania. Pieniądze ze sprzedaży pierwszej firmy obaj bracia włożyli w [[x-com|X.com]], a pod koniec 2001 roku założyli razem [[fundacja-muska|fundację]].',
    ],
    fakty: [
      { etykieta: 'Ojciec', wartosc: 'Errol Musk, ur. 25 maja 1946', pewnosc: 'potwierdzone' },
      { etykieta: 'Matka', wartosc: 'Maye Musk, ur. 19 kwietnia 1948, dietetyczka i modelka', pewnosc: 'potwierdzone' },
      { etykieta: 'Małżeństwo rodziców', wartosc: '1970–1979', pewnosc: 'potwierdzone' },
      { etykieta: 'Rodzeństwo', wartosc: 'Kimbal (1972) i Tosca (1974)', pewnosc: 'potwierdzone' },
      { etykieta: 'Dziadek', wartosc: 'Joshua Haldeman (1902–1974), chiropraktyk i lotnik', pewnosc: 'potwierdzone' },
      { etykieta: 'Przeprowadzka do RPA', wartosc: '1950; motyw podawany jako poparcie dla apartheidu', pewnosc: 'sporne' },
      { etykieta: 'Dzieci Elona', wartosc: 'co najmniej czternaścioro, w tym jedno zmarłe', stanNa: '2026-09', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'W 1954 roku dziadek Elona przeleciał jednosilnikowym samolotem z Afryki przez Azję do Australii i z powrotem — około trzydziestu tysięcy mil. Uchodzi to za możliwie najdłuższą podróż odbytą maszyną z jednym silnikiem. Zginął dwadzieścia lat później, ćwicząc lądowanie.',
        zrodlo: Z.wikiHaldeman,
      },
    ],
    os: [
      { data: '1950', tytul: 'Haldemanowie przenoszą się do RPA', opis: 'Rodzina matki opuszcza Kanadę i osiada w Pretorii.', waga: 1 },
      { data: '1954', tytul: 'Przelot do Australii', opis: 'Joshua Haldeman pokonuje jednosilnikowym samolotem około trzydziestu tysięcy mil.', waga: 1 },
      { data: '1989', tytul: 'Wyjazd z RPA', opis: 'Elon korzysta z kanadyjskiego obywatelstwa matki i opuszcza kraj.', waga: 2 },
    ],
    powiazane: [
      { id: 'elon-musk', powod: 'jego dom rodzinny i droga wyjazdu z RPA' },
      { id: 'kimbal-musk', powod: 'brat, wspólnik przy pierwszej firmie' },
      { id: 'pretoria', powod: 'miasto, w którym ta rodzina mieszkała' },
      { id: 'zip2', powod: 'pierwsza firma braci, założona po wyjeździe z RPA' },
    ],
    zrodla: [Z.wikiRodzina, Z.wikiHaldeman, Z.pilotsHaldeman],
    zaktualizowano: '2026-10-18',
  },
];
