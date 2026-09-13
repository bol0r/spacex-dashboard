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
    zrodla: [Z.wikiMueller, Z.wikiMerlin],
    zaktualizowano: '2026-09-13',
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
      'Odejście z firmy ogłosił w styczniu 2021 roku. Zasiada w radzie nadzorczej OHB SE i doradza firmie rakietowej Stoke Space. Jego następcą został [[bill-gerstenmaier|Bill Gerstenmaier]].',
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
    zrodla: [Z.wikiKoenigsmann, Z.wikiShotwell],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'bill-gerstenmaier',
    typ: 'osoba',
    nazwa: 'Bill Gerstenmaier',
    aka: ['Gerstenmaier', 'Gerst'],
    krotki: 'Czterdzieści lat w NASA, odsunięty ze stanowiska w 2019 roku — pół roku później zatrudniony przez SpaceX.',
    tresc: [
      'Gerstenmaier zaczął pracę w NASA w 1977 roku, w ośrodku Lewisa w Ohio, tuż po studiach na Purdue. Od czerwca 2002 kierował programem Międzynarodowej Stacji Kosmicznej, a od 2005 do 10 lipca 2019 był zastępcą administratora do spraw eksploracji i operacji załogowych — stanowiska opisywanego jako najbardziej wpływowe w amerykańskich lotach załogowych.',
      'Dziesiątego lipca 2019 roku administrator NASA Jim Bridenstine ogłosił przeniesienie go na stanowisko doradcy specjalnego. W praktyce urzędniczej jest to degradacja stosowana po to, żeby skłonić kogoś do odejścia. Oficjalnego powodu nie podano.',
      'W lutym 2020 roku [[spacex|SpaceX]] zatrudniło go jako konsultanta [[hans-koenigsmann|Hansa Koenigsmanna]]. Gdy ten ogłosił odejście w lutym 2021, Gerstenmaier objął po nim stanowisko wiceprezesa do spraw budowy i niezawodności lotów.',
      'Jego rola w [[cots|programie komercyjnym]] była kluczowa i szła wbrew wygodzie urzędu: przekonał NASA, żeby opóźnić ogłoszenie wyników i znaleźć dodatkowe pieniądze, byle utrzymać dwie konkurujące firmy zamiast jednej. Bez tego [[crew-dragon|Crew Dragon]] mógłby nigdy nie powstać.',
    ],
    fakty: [
      { etykieta: 'W NASA', wartosc: 'cztery dekady, od 1977 roku', pewnosc: 'potwierdzone' },
      { etykieta: 'Kierowanie programem ISS', wartosc: 'od czerwca 2002', pewnosc: 'potwierdzone' },
      { etykieta: 'Zastępca administratora', wartosc: '2005 – 10 lipca 2019', pewnosc: 'potwierdzone' },
      { etykieta: 'Przeniesienie na doradcę', wartosc: '10 lipca 2019, bez podania powodu', pewnosc: 'potwierdzone' },
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
    zrodla: [Z.wikiGerstenmaier, Z.wikiCots],
    zaktualizowano: '2026-09-13',
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
      'Misja trwała niespełna sześćdziesiąt cztery dni i zakończyła się wodowaniem na Atlantyku 2 sierpnia 2020 roku.',
      'Warto zauważyć symetrię: Hurley był pilotem ostatniej misji wahadłowca w lipcu 2011 i dowódcą pierwszego lotu, który tę przerwę zamknął. Ta sama osoba zgasiła światło i ją zapaliła z powrotem.',
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
    zrodla: [Z.wikiMueller, Z.wikiKoenigsmann, Z.wikiHistoria],
    zaktualizowano: '2026-09-13',
  },
];
