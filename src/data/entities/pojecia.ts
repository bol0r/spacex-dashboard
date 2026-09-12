import type { Encja } from '../types';
import { Z } from '../zrodla';

export const pojecia: Encja[] = [
  {
    id: 'reuzywalnosc',
    typ: 'pojecie',
    nazwa: 'Reużywalność',
    aka: ['wielorazowość', 'odzysk pierwszego stopnia', 'ponowny lot'],
    krotki: 'Zasada, w której rakieta wraca i leci jeszcze raz — różnica między lotem samolotem a spaleniem samolotu po jednym locie.',
    tresc: [
      'Przez pierwsze pięćdziesiąt lat lotów kosmicznych rakieta była przedmiotem jednorazowym. Każdy start oznaczał zniszczenie sprzętu wartego dziesiątki milionów dolarów. Reużywalność odwraca to założenie: człon nośny wraca na Ziemię w stanie pozwalającym go zatankować i wysłać ponownie.', 'Rozróżnia się dwa poziomy. Odnowa po locie oznacza, że sprzęt wraca, ale przed kolejnym startem przechodzi kosztowny przegląd — tak działał prom kosmiczny, którego przygotowanie do lotu bywało droższe niż budowa nowej rakiety jednorazowej. Szybki relot oznacza tankowanie i start, praktycznie bez rozbierania. [[falcon-9|Falcon 9]] w wariancie Block 5 zbliżył się do tego drugiego modelu.',
      'Liczby pokazują, że to przestało być eksperymentem. Pierwsze stopnie wróciły 657 razy na 670 prób, a dla samego wariantu Block 5 skuteczność wynosi 99,06 procent. Rekordowy egzemplarz przeszedł 37 lotów, a jedna połówka osłony ładunku — czterdzieści. Cena kilograma na orbicie spadła na tyle, że konstelacja licząca ponad dziesięć tysięcy satelitów, czyli [[starlink|Starlink]], stała się w ogóle wykonalna.', 'Kolejny krok idzie dalej: [[starship|Starship]] ma wracać w całości, oba stopnie, a [[super-heavy|Super Heavy]] ląduje wprost w ramionach wieży, żeby zaoszczędzić masę nóg lądowniczych. Warunkiem jest silnik, który znosi wielokrotne odpalenia — stąd metanowy [[raptor|Raptor]], który nie zostawia w komorze osadu węglowego.',
    ],
    fakty: [
      { etykieta: 'Lądowania boosterów', wartosc: '657 na 670 prób', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Skuteczność Block 5', wartosc: '99,06%', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Rekord lotów jednego boostera', wartosc: '37', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Liczba boosterów użytych wielokrotnie', wartosc: '55', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsze udane lądowanie', wartosc: '21 grudnia 2015, Landing Zone 1', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Najbardziej wysłużonym elementem systemu nie jest silnik ani człon nośny, tylko połówka osłony ładunku SN155 z czterdziestoma lotami. Element, który przez pół wieku uchodził za opakowanie do wyrzucenia, okazał się trwalszy niż cokolwiek innego w rakiecie.',
        zrodlo: Z.wikiStartyFalcon,
      },
    ],
    os: [
      { data: '2015-12-21', tytul: 'Pierwszy powrót', opis: 'Pierwszy stopień rakiety orbitalnej po raz pierwszy siada pionowo na lądzie.', waga: 3 },
      { data: '2016-04-08', tytul: 'Pierwsze lądowanie na wodzie', opis: 'Booster misji CRS-8 siada na pływającej platformie na Atlantyku.', waga: 3 },
      { data: '2024-10-13', tytul: 'Chwyt przez wieżę', opis: 'Super Heavy wraca w ramiona wieży startowej — odzysk bez podwozia.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'pierwsza rakieta, która zamieniła tę ideę w rutynę' },
      { id: 'super-heavy', powod: 'najdalej posunięta wersja — powrót prosto w ramiona wieży' },
      { id: 'merlin', powod: 'zdolność do ponownego odpalenia w locie jest jej warunkiem technicznym' },
      { id: 'starlink', powod: 'konstelacja tej wielkości była nieopłacalna bez tańszego kilograma na orbicie' },
    ],
    zrodla: [Z.wikiStartyFalcon, Z.spaceSetny],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'pelnoprzeplywowe-spalanie-stopniowe',
    typ: 'pojecie',
    nazwa: 'Pełnoprzepływowe spalanie stopniowe',
    aka: ['FFSC', 'full-flow staged combustion', 'cykl pełnoprzepływowy'],
    krotki: 'Najtrudniejszy schemat silnika rakietowego: całe paliwo i cały utleniacz przechodzą przez turbiny, nic nie ucieka niedopalone.',
    tresc: [
      'Silnik rakietowy musi jakoś napędzić pompy tłoczące paliwo do komory. W najprostszym rozwiązaniu — generatorze gazu, jakim posługuje się [[merlin|Merlin]] — mała porcja paliwa spala się osobno, kręci turbiną i ucieka na zewnątrz. To proste i tanie, ale ta porcja jest bezpowrotnie stracona.', 'Spalanie stopniowe kieruje spaliny z turbiny z powrotem do komory głównej, więc nic się nie marnuje. Klasyczne konstrukcje mają jeden generator wstępny — bogaty w utleniacz jak w RD-180 albo bogaty w paliwo jak w silniku promu kosmicznego. Wersja pełnoprzepływowa ma oba naraz: osobny dla pompy paliwa i osobny dla pompy utleniacza. Przez turbiny przechodzi wtedy cały strumień obu składników.',
      'Korzyści są policzalne. Turbiny pracują chłodniej i przy niższym ciśnieniu, bo ten sam moment rozkłada się na dużo większy przepływ masy — a chłodniejsza turbina to dłuższe życie silnika. Oba składniki wchodzą do komory już w postaci gazu, więc reagują szybciej, komora może być mniejsza, a ciśnienie wyższe. Znika też uszczelnienie międzyskładnikowe, jeden z klasycznych punktów awarii.', 'Cenę stanowi skomplikowanie. Przez sześćdziesiąt lat tylko dwie takie konstrukcje w ogóle trafiły na hamownię: radziecki RD-270 z lat sześćdziesiątych i amerykański demonstrator IPD z połowy lat dwutysięcznych. Żadna nie poleciała. Pierwszym silnikiem pełnoprzepływowym, który uniósł rakietę, jest [[raptor|Raptor]] w [[starship|Starshipie]].',
    ],
    fakty: [
      { etykieta: 'Generatory wstępne', wartosc: 'dwa — bogaty w paliwo i bogaty w utleniacz', pewnosc: 'potwierdzone' },
      { etykieta: 'Strumień przez turbiny', wartosc: 'całość paliwa i całość utleniacza', pewnosc: 'potwierdzone' },
      { etykieta: 'Silniki, które poleciały', wartosc: 'wyłącznie Raptor', stanNa: '2026-09-12', pewnosc: 'potwierdzone' },
      { etykieta: 'Konstrukcje testowane wcześniej', wartosc: 'RD-270 (ZSRR, lata 60.), IPD (USA, lata 2000.)', pewnosc: 'potwierdzone' },
      { etykieta: 'Deklarowana trwałość Raptora', wartosc: 'do 1 000 lotów', pewnosc: 'sporne' },
    ],
    ciekawostki: [
      {
        tekst: 'Pomysł ma ponad sześćdziesiąt lat i przez większość tego czasu uchodził za ślepy zaułek — zbyt trudny, żeby się opłacał. Radziecki RD-270 zbudowano w latach sześćdziesiątych i porzucono; amerykański demonstrator z lat dwutysięcznych był tylko zespołem pompowym, bez komory. Rozwiązanie czekało na lot pół wieku.',
        zrodlo: Z.wikiFfsc,
      },
    ],
    os: [
      { data: '1967', tytul: 'RD-270', opis: 'Radziecki silnik pełnoprzepływowy przechodzi próby na hamowni i zostaje porzucony.', waga: 2 },
      { data: '2023-04-20', tytul: 'Pierwszy lot', opis: 'Raptor jako pierwszy silnik tego typu unosi rakietę.', waga: 3 },
    ],
    powiazane: [
      { id: 'raptor', powod: 'jedyny silnik tego typu, który kiedykolwiek poleciał' },
      { id: 'merlin', powod: 'przeciwieństwo — prosty generator gazu wyrzucający spaliny za burtę' },
      { id: 'starship', powod: 'rakieta, w której cykl ten wszedł do użytku' },
    ],
    zrodla: [Z.wikiFfsc, Z.wikiRaptor],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'leo',
    typ: 'pojecie',
    nazwa: 'Niska orbita okołoziemska',
    aka: ['LEO', 'low Earth orbit', 'orbita niska'],
    krotki: 'Orbita o okresie obiegu poniżej 128 minut, sięgająca około 2 000 km — miejsce, gdzie mieści się niemal cała ludzka obecność w kosmosie.',
    tresc: [
      'Formalna definicja jest zaskakująco sucha: orbita o okresie obiegu 128 minut lub krótszym, czyli co najmniej 11,25 okrążenia na dobę, przy mimośrodzie poniżej 0,25. W praktyce oznacza to pułap do mniej więcej 2 000 kilometrów, choć większość obiektów krąży poniżej 800.', 'Obiekt na takiej orbicie porusza się z prędkością około 7,8 km/s, czyli blisko 28 000 km/h. Na wysokości 200 km jest to 7,79 km/s, na 1 500 km spada do 7,12 km/s — im wyżej, tym wolniej. Międzynarodowa Stacja Kosmiczna krąży na 400–420 km i traci około dwóch kilometrów wysokości miesięcznie, więc trzeba ją regularnie podbijać.',
      'LEO jest domyślnym wyborem z dwóch powodów. Po pierwsze, dotarcie tam wymaga najmniej energii, więc rakieta wynosi tam najwięcej. Po drugie, bliskość oznacza niskie opóźnienie sygnału i wysoką przepustowość — dlatego właśnie tam pracuje [[starlink|Starlink]], a nie na orbicie geostacjonarnej, z której sygnał wraca o rząd wielkości wolniej.',
      'Ta sama bliskość ma drugą stronę. Poniżej 300 kilometrów opór resztkowej atmosfery ściąga satelitę na tyle szybko, że orbita rozpada się w miesiącach. Z jednej strony to naturalny mechanizm sprzątania, z drugiej — powód, dla którego [[crew-dragon|Crew Dragon]] i stacje kosmiczne potrzebują stałego zapasu paliwa na korekty. Górny kraniec tego obszaru wyznacza [[polaris-dawn|lot Polaris Dawn]] z apogeum 1 400 km, a wynoszą tu ładunki przede wszystkim [[falcon-9|Falcon 9]] i [[starship|Starship]].',
    ],
    fakty: [
      { etykieta: 'Okres obiegu', wartosc: '128 minut lub mniej', pewnosc: 'potwierdzone' },
      { etykieta: 'Pułap', wartosc: 'ok. 2 000 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Prędkość orbitalna', wartosc: 'ok. 7,8 km/s (28 000 km/h)', pewnosc: 'potwierdzone' },
      { etykieta: 'Wysokość ISS', wartosc: '400–420 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Spadek orbity ISS', wartosc: 'ok. 2 km miesięcznie', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Poniżej trzystu kilometrów resztkowa atmosfera jest już na tyle gęsta, że satelita sam spada w ciągu miesięcy. Granica między „kosmosem" a „atmosferą" nie jest linią, tylko stopniowaniem gęstości — i to ono, a nie umowna wysokość, decyduje, jak długo cokolwiek tam wytrzyma.',
        zrodlo: Z.wikiLeo,
      },
    ],
    os: [
      { data: '2019-05-24', tytul: 'Początek zapełniania LEO', opis: 'Pierwsza operacyjna partia Starlinka otwiera epokę konstelacji liczonych w tysiącach satelitów.', waga: 3 },
    ],
    powiazane: [
      { id: 'starlink', powod: 'cała konstelacja pracuje właśnie na tej wysokości' },
      { id: 'crew-dragon', powod: 'wozi ludzi wyłącznie w tym obszarze' },
      { id: 'falcon-9', powod: 'większość jego startów kończy się właśnie tutaj' },
    ],
    zrodla: [Z.wikiLeo, Z.wikiStarlink],
    zaktualizowano: '2026-09-12',
  },
];
