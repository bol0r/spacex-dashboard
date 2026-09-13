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
    zrodla: [Z.wikiStartyFalcon, Z.spaceSetny, Z.sfnRekord, Z.spacexStarship],
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
      'Korzyści są policzalne. Turbiny pracują chłodniej i przy niższym ciśnieniu, bo ten sam moment rozkłada się na dużo większy przepływ masy — a chłodniejsza turbina to dłuższe życie silnika. Oba składniki wchodzą do komory już w postaci gazu, więc reagują szybciej, komora może być mniejsza, a ciśnienie wyższe — a wyższe ciśnienie to i lepszy [[impuls-wlasciwy|impuls właściwy]], i korzystniejszy [[ciag-do-masy|stosunek ciągu do masy]] przy tej samej wielkości silnika. Znika też uszczelnienie międzyskładnikowe, jeden z klasycznych punktów awarii.', 'Cenę stanowi skomplikowanie. Przez sześćdziesiąt lat tylko dwie takie konstrukcje w ogóle trafiły na hamownię: radziecki RD-270 z lat sześćdziesiątych i amerykański demonstrator IPD z połowy lat dwutysięcznych. Żadna nie poleciała. Pierwszym silnikiem pełnoprzepływowym, który uniósł rakietę, jest [[raptor|Raptor]] w [[starship|Starshipie]].',
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
    zrodla: [Z.wikiFfsc, Z.wikiRaptor, Z.spacexStarship],
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
    zrodla: [Z.wikiLeo, Z.wikiStarlink, Z.nasaOdpady],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'delta-v',
    typ: 'pojecie',
    nazwa: 'Delta-v',
    aka: ['Δv', 'budżet delta-v', 'równanie Ciołkowskiego'],
    krotki: 'Waluta lotów kosmicznych: nie odległość, a zmiana prędkości, którą trzeba wypracować, żeby gdzieś dolecieć.',
    tresc: [
      'Delta-v to impuls na jednostkę masy statku potrzebny do wykonania manewru. Podaje się ją w jednostkach prędkości — metrach albo kilometrach na sekundę — choć nie jest zwykłą zmianą prędkości, a miarą wysiłku, jaki trzeba w manewr włożyć.',
      'Ta wielkość, nie odległość, rozstrzyga o tym, czy lot jest wykonalny. Powód jest w równaniu Ciołkowskiego: potrzebna ilość paliwa rośnie z delta-v wykładniczo. Dlatego można polecieć bardzo daleko z niewielkim budżetem, korzystając z asyst grawitacyjnych, i zarazem nie dać rady z pozornie skromnym manewrem blisko dużego ciała.',
      'Typowe budżety mówią wszystko o skali problemu. Z powierzchni Ziemi na [[leo|niską orbitę]] trzeba około 8,6 km/s. Z niskiej orbity na [[gto|orbitę transferową do geostacjonarnej]] kolejne 4,1 km/s. Manewry sumują się liniowo, co jako jedyne w tej dziedzinie upraszcza planowanie.',
      'Z tego równania wynika też cała [[reuzywalnosc|reużywalność]]: każdy kilogram paliwa zabrany na powrót członu to kilogram nieodstawiony na orbitę. Lądowanie [[falcon-9|Falcona 9]] nie było problemem pomysłu, tylko problemem budżetu delta-v.',
    ],
    fakty: [
      { etykieta: 'Jednostka', wartosc: 'm/s albo km/s', pewnosc: 'potwierdzone' },
      { etykieta: 'Powierzchnia Ziemi → LEO', wartosc: 'ok. 8,6 km/s', pewnosc: 'potwierdzone' },
      { etykieta: 'LEO → GTO', wartosc: 'ok. 4,1 km/s', pewnosc: 'potwierdzone' },
      { etykieta: 'Zależność od paliwa', wartosc: 'wykładnicza — równanie Ciołkowskiego', pewnosc: 'potwierdzone' },
      { etykieta: 'Sumowanie manewrów', wartosc: 'liniowe', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'W kosmosie odległość nie kosztuje prawie nic, a zmiana prędkości kosztuje wszystko. Sonda może przelecieć miliardy kilometrów na niewielkim budżecie delta-v, korzystając z asyst grawitacyjnych, i jednocześnie nie mieć czym zmienić orbity o sto kilometrów wysokości.',
        zrodlo: Z.wikiDeltaV,
      },
    ],
    os: [
      { data: '1903', tytul: 'Równanie Ciołkowskiego', opis: 'Konstantin Ciołkowski publikuje zależność wiążącą delta-v ze stosunkiem mas rakiety.', waga: 3 },
    ],
    powiazane: [
      { id: 'leo', powod: 'najtańsza w delta-v orbita i dlatego domyślny cel' },
      { id: 'gto', powod: 'kolejne 4,1 km/s ponad niską orbitę' },
      { id: 'reuzywalnosc', powod: 'paliwo na powrót członu odejmuje się od budżetu ładunku' },
      { id: 'koszt-kilograma', powod: 'to z tej zależności bierze się cena kilograma na orbicie' },
    ],
    zrodla: [Z.wikiDeltaV, Z.wikiLeo],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'gto',
    typ: 'pojecie',
    nazwa: 'Orbita transferowa do geostacjonarnej',
    aka: ['GTO', 'geostationary transfer orbit'],
    krotki: 'Silnie wydłużona orbita z perygeum przy Ziemi i apogeum na wysokości geostacjonarnej — przystanek, nie cel.',
    tresc: [
      'GTO to orbita eliptyczna, której [[perygeum-apogeum|perygeum]] leży kilkaset kilometrów nad Ziemią, a apogeum na 35 786 kilometrach, czyli na wysokości orbity geostacjonarnej. Obieg zajmuje około dziesięciu i pół godziny.',
      'Rakieta nie wynosi satelity wprost na orbitę docelową, bo bezpośrednie wejście pochłonęłoby ogromne ilości paliwa. Zamiast tego mocny i mało oszczędny stopień rakiety odstawia ładunek na GTO, a dalej satelita dociera sam, własnymi silniczkami o wysokiej sprawności.',
      'Manewr domykający, nazywany odpaleniem w apogeum, wykonuje się na samym szczycie elipsy — tam prędkość jest najmniejsza, więc zmiana orbity kosztuje najmniej [[delta-v|delta-v]]. Wykonuje go operator satelity, nie firma od rakiety.',
      'Dla [[falcon-9|Falcona 9]] to właśnie te loty są najbardziej wymagające: przy ładunku na GTO booster nie ma już paliwa, żeby wrócić nad brzeg, i musi lądować na [[barki-dronowe|barce]].',
    ],
    fakty: [
      { etykieta: 'Apogeum', wartosc: '35 786 km nad powierzchnią', pewnosc: 'potwierdzone' },
      { etykieta: 'Perygeum', wartosc: 'zwykle kilkaset km nad powierzchnią', pewnosc: 'potwierdzone' },
      { etykieta: 'Okres obiegu', wartosc: 'ok. 10,5 godziny', pewnosc: 'potwierdzone' },
      { etykieta: 'Kto domyka orbitę', wartosc: 'operator satelity, nie rakieta', pewnosc: 'potwierdzone' },
      { etykieta: 'Ładunek Falcona 9 na GTO', wartosc: '8 300 kg bez odzysku, 5 500 kg z lądowaniem na barce', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rakieta nie dowozi satelity telekomunikacyjnego na miejsce — zostawia go na wydłużonej elipsie, z której satelita musi dojechać sam, własnymi silniczkami, przez kolejne dni albo tygodnie. Producent rakiety odpowiada za mniej niż połowę drogi.',
        zrodlo: Z.wikiGto,
      },
    ],
    os: [
      { data: '1963', tytul: 'Pierwszy satelita geostacjonarny', opis: 'Syncom 2 wchodzi na orbitę dobową i otwiera epokę łączności satelitarnej.', waga: 2 },
    ],
    powiazane: [
      { id: 'perygeum-apogeum', powod: 'cała ta orbita jest zdefiniowana przez te dwa punkty' },
      { id: 'delta-v', powod: 'dojście do niej i domknięcie orbity to koszt liczony w tej wielkości' },
      { id: 'falcon-9', powod: 'loty na tę orbitę są dla niego najbardziej wymagające energetycznie' },
      { id: 'barki-dronowe', powod: 'przy takim ładunku booster musi lądować na wodzie' },
    ],
    zrodla: [Z.wikiGto, Z.wikiGeo, Z.nasaOrbity],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'sso',
    typ: 'pojecie',
    nazwa: 'Orbita heliosynchroniczna',
    aka: ['SSO', 'sun-synchronous orbit', 'orbita słonecznie zsynchronizowana'],
    krotki: 'Orbita dobrana tak, że satelita przelatuje nad każdym punktem Ziemi zawsze o tej samej godzinie lokalnej.',
    tresc: [
      'Satelita na orbicie heliosynchronicznej mija dany punkt powierzchni zawsze w tym samym lokalnym czasie słonecznym. Typowa wysokość to 600–800 kilometrów, nachylenie około 98 stopni — czyli lekko wstecznie względem obrotu Ziemi — a obieg trwa 96–100 minut.',
      'Sztuczka polega na wykorzystaniu tego, że Ziemia nie jest kulą. Spłaszczenie przy równiku zaburza orbity nachylone i powoduje obrót ich płaszczyzny. Dobierając nachylenie do wysokości, można sprawić, że płaszczyzna obraca się o mniej więcej jeden stopień na dobę na wschód — dokładnie tak, jak przesuwa się Ziemia wokół Słońca.',
      'Efektem jest stałe oświetlenie: za każdym przelotem kąt padania światła na powierzchnię jest niemal taki sam. To bezcenne dla satelitów obserwacyjnych, meteorologicznych i rozpoznawczych, bo pozwala porównywać zdjęcia tego samego miejsca z różnych dni.',
      'Dla wysokości 800 kilometrów nachylenie wynosi około 98,7 stopnia. Na takie orbity wynosi ładunki między innymi [[falcon-9|Falcon 9]] ze stanowiska na zachodnim wybrzeżu; mieszczą się one jeszcze w granicach [[leo|niskiej orbity]], choć wysoko — a to znaczy, że [[deorbitacja|zejście z nich]] trwa dekady, nie miesiące, i że [[zespol-kesslera|zagęszczenie odłamków]] jest tam największe.',
    ],
    fakty: [
      { etykieta: 'Typowa wysokość', wartosc: '600–800 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Nachylenie', wartosc: 'ok. 98° (lekko wstecznie)', pewnosc: 'potwierdzone' },
      { etykieta: 'Okres obiegu', wartosc: '96–100 minut', pewnosc: 'potwierdzone' },
      { etykieta: 'Mechanizm', wartosc: 'precesja węzłów wywołana spłaszczeniem Ziemi', pewnosc: 'potwierdzone' },
      { etykieta: 'Przykład', wartosc: '800 km wysokości to nachylenie ok. 98,7°', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Ta orbita działa tylko dlatego, że Ziemia jest spłaszczona przy równiku. Zaburzenie, które dla większości misji jest kłopotem do skompensowania, tutaj jest całym mechanizmem — nachylenie dobiera się tak, żeby błąd pracował na korzyść.',
        zrodlo: Z.wikiSso,
      },
    ],
    os: [
      { data: '1978', tytul: 'Landsat 3', opis: 'Program obserwacji Ziemi utrwala tę orbitę jako standard dla satelitów obrazujących.', waga: 2 },
    ],
    powiazane: [
      { id: 'leo', powod: 'mieści się w jej górnym zakresie' },
      { id: 'falcon-9', powod: 'wynosi na nią ładunki ze stanowiska na zachodnim wybrzeżu' },
      { id: 'konstelacja', powod: 'układ orbit, z którego korzystają systemy obserwacyjne' },
      { id: 'perygeum-apogeum', powod: 'orbita niemal okrągła, więc oba punkty leżą blisko siebie' },
      { id: 'deorbitacja', powod: 'na tych wysokościach atmosfera sprowadza satelitę dopiero po dekadach' },
    ],
    zrodla: [Z.wikiSso, Z.wikiLeo, Z.nasaOrbity],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'perygeum-apogeum',
    typ: 'pojecie',
    nazwa: 'Perygeum i apogeum',
    aka: ['apsyda', 'periapsis', 'apoapsis', 'linia apsyd'],
    krotki: 'Najbliższy i najdalszy punkt orbity — a zarazem miejsca, w których statek leci najszybciej i najwolniej.',
    tresc: [
      'Perygeum to punkt orbity najbliższy Ziemi, apogeum najdalszy. Ogólna nazwa takiego punktu to apsyda; linia je łącząca, zwana linią apsyd, jest zarazem wielką osią orbity. Przy innych ciałach używa się nazw periapsis i apoapsis. Na kołowej [[leo|niskiej orbicie]] oba punkty leżą praktycznie na tej samej wysokości i rozróżnienie przestaje mieć znaczenie.',
      'Z drugiego prawa Keplera wynika, że prędkość na orbicie nie jest stała: największa jest w perygeum, najmniejsza w apogeum. Im bardziej wydłużona orbita, tym większa różnica.',
      'Ma to bezpośrednią konsekwencję praktyczną, znaną jako efekt Obertha: odpalenie silnika opłaca się najbardziej tam, gdzie statek leci najszybciej, czyli w perygeum. Ten sam impuls daje wtedy większy przyrost energii orbity niż w jakimkolwiek innym miejscu. Na tej samej zasadzie opiera się każdy lot, który ma osiągnąć [[predkosc-ucieczki|prędkość ucieczki]] — silnik odpala się w perygeum, nie gdzie indziej.',
      'Dlatego [[gto|orbita transferowa do geostacjonarnej]] wygląda tak, jak wygląda: niskie perygeum, gdzie rakieta nadaje prędkość, i apogeum na docelowej wysokości, gdzie satelita domyka okrąg najmniejszym możliwym kosztem [[delta-v|delta-v]]. Apogeum 1 400 km osiągnięte przez [[polaris-dawn|Polaris Dawn]] jest w tej terminologii po prostu najdalszym punktem ich elipsy.',
    ],
    fakty: [
      { etykieta: 'Perygeum', wartosc: 'punkt orbity najbliższy Ziemi', pewnosc: 'potwierdzone' },
      { etykieta: 'Apogeum', wartosc: 'punkt orbity najdalszy od Ziemi', pewnosc: 'potwierdzone' },
      { etykieta: 'Nazwa ogólna', wartosc: 'apsyda; oba punkty łączy linia apsyd', pewnosc: 'potwierdzone' },
      { etykieta: 'Prędkość', wartosc: 'największa w perygeum, najmniejsza w apogeum', pewnosc: 'potwierdzone' },
      { etykieta: 'Wniosek praktyczny', wartosc: 'efekt Obertha — odpalenie w perygeum jest najwydajniejsze', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Ten sam impuls silnika daje różny przyrost energii orbity w zależności od tego, gdzie się go wykona. W perygeum, gdzie statek leci najszybciej, jest najbardziej opłacalny — dlatego manewry planuje się wokół geometrii orbity, a nie wokół zegara.',
        zrodlo: Z.wikiApsis,
      },
    ],
    os: [
      { data: '1609', tytul: 'Prawa Keplera', opis: 'Johannes Kepler opisuje zmienną prędkość na orbicie eliptycznej.', waga: 3 },
    ],
    powiazane: [
      { id: 'gto', powod: 'jej kształt jest wprost konsekwencją tej geometrii' },
      { id: 'delta-v', powod: 'miejsce odpalenia silnika zmienia koszt manewru' },
      { id: 'polaris-dawn', powod: 'jej apogeum 1 400 km to rekord wysokości lotu załogowego po Apollo' },
      { id: 'leo', powod: 'niska orbita jest niemal okrągła, więc oba punkty niemal się pokrywają' },
    ],
    zrodla: [Z.wikiApsis, Z.wikiGto],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'hamowania',
    typ: 'pojecie',
    nazwa: 'Hamowania powrotne',
    aka: ['boostback burn', 'entry burn', 'landing burn', 'burn'],
    krotki: 'Trzy odpalenia silników, które sprowadzają człon nośny z prędkości hipersonicznej do zera na betonie.',
    tresc: [
      'Powrót pierwszego stopnia [[falcon-9|Falcona 9]] składa się z trzech osobnych odpaleń, każdego o innej roli. Hamowanie wsteczne, wykonywane na trzech z dziewięciu silników [[merlin|Merlin]] zaraz po rozdzieleniu stopni, ogranicza odjechanie członu w dół trasy i kieruje go w stronę strefy lądowania.',
      'Hamowanie przy wejściu w atmosferę, również na trzech silnikach, pracuje na wysokości mniej więcej 70–40 kilometrów. Jego zadaniem nie jest zatrzymanie członu, a kontrolowanie profilu opadania, gdy rakieta przechodzi od prędkości hipersonicznych do okołodźwiękowych — czyli [[wejscie-atmosferyczne|przez najgorętszą część drogi]].',
      'Hamowanie lądowania odpala się na jednym silniku, a w lotach o większej energii na trzech, i domyka pracę: z prędkości granicznej do zera dokładnie na powierzchni. Kierunek w tym czasie poprawiają [[siatki-aerodynamiczne|siatki aerodynamiczne]], a na końcu rozkładają się nogi lądownicze.',
      'Przy [[pierwsze-ladowanie-na-barce|lądowaniu na barce]] hamowanie wsteczne jest krótsze albo pomijane — człon schodzi w dół trasy zamiast wracać nad stanowisko, bo oszczędność paliwa jest wtedy ważniejsza niż celność powrotu.',
    ],
    fakty: [
      { etykieta: 'Hamowanie wsteczne', wartosc: '3 z 9 silników, zaraz po rozdzieleniu stopni', pewnosc: 'potwierdzone' },
      { etykieta: 'Hamowanie wejściowe', wartosc: '3 silniki, na wysokości ok. 70–40 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Hamowanie lądowania', wartosc: '1 silnik, 3 w lotach o większej energii', pewnosc: 'potwierdzone' },
      { etykieta: 'Profil barkowy', wartosc: 'hamowanie wsteczne krótsze albo pominięte', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Hamowanie przy wejściu w atmosferę nie służy do zwalniania, a do osłaniania. Strumień spalin skierowany w stronę lotu odpycha gorący, sprężony gaz od konstrukcji — silnik pełni tu rolę tarczy termicznej, której ten człon w ogóle nie ma.',
        zrodlo: Z.wikiLadowania,
      },
    ],
    os: [
      { data: '2015-12-21', tytul: 'Pełna sekwencja po raz pierwszy', opis: 'Wszystkie trzy hamowania działają i booster ląduje na stanowisku.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'jego pierwszy stopień wykonuje tę sekwencję rutynowo' },
      { id: 'siatki-aerodynamiczne', powod: 'sterują kierunkiem między hamowaniami' },
      { id: 'wejscie-atmosferyczne', powod: 'drugie hamowanie chroni człon właśnie na tym odcinku' },
      { id: 'reuzywalnosc', powod: 'ta sekwencja jest jej warunkiem technicznym' },
      { id: 'merlin', powod: 'zdolność do ponownego odpalenia w locie umożliwia cały manewr' },
    ],
    zrodla: [Z.wikiLadowania, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'wejscie-atmosferyczne',
    typ: 'pojecie',
    nazwa: 'Wejście atmosferyczne',
    aka: ['reentry', 'wejście w atmosferę'],
    krotki: 'Najgorętszy odcinek drogi powrotnej — ciepło bierze się ze sprężania powietrza, nie z tarcia.',
    tresc: [
      'Obiekt wracający z orbity ma do rozproszenia energię odpowiadającą prędkości blisko 8 km/s. Robi to atmosfera, i robi to gwałtownie: na wysokości kilkudziesięciu kilometrów pojazd przechodzi od prędkości hipersonicznych do okołodźwiękowych.',
      'Powszechne wyjaśnienie, że chodzi o tarcie, jest nieścisłe. Zasadniczym źródłem ciepła jest sprężanie powietrza przed czołem pojazdu — gaz nie ma gdzie uciec i nagrzewa się od samego ściśnięcia. Dlatego tępe kształty radzą sobie lepiej niż ostre: odpychają falę uderzeniową od konstrukcji.',
      '[[falcon-9|Falcon 9]] nie ma osłony termicznej. W jej miejsce używa [[hamowania|hamowania wejściowego]] — strumień spalin skierowany w stronę lotu odpycha gorący gaz od członu. [[starship|Starship]] wraca z prędkości orbitalnej, więc bez osłony się nie obejdzie, a po [[starship-lot-13|locie 13]] pierwszy raz udało się obejrzeć ją w całości po locie.',
      '[[crew-dragon|Crew Dragon]] przechodzi tę samą fazę z załogą na pokładzie i kończy ją wodowaniem na spadochronach. Poniżej 300 kilometrów atmosfera jest już na tyle gęsta, że sprowadza obiekty [[deorbitacja|bez żadnego udziału silników]].',
    ],
    fakty: [
      { etykieta: 'Prędkość na wejściu z LEO', wartosc: 'ok. 7,8 km/s', pewnosc: 'potwierdzone' },
      { etykieta: 'Zakres wysokości hamowania Falcona 9', wartosc: 'ok. 70–40 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Główne źródło ciepła', wartosc: 'sprężanie powietrza przed czołem, nie tarcie', pewnosc: 'potwierdzone' },
      { etykieta: 'Osłona Falcona 9', wartosc: 'brak — zastępuje ją hamowanie silnikami', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Pojazd wracający z orbity nagrzewa się nie od tarcia, a od sprężania powietrza przed czołem — gaz nie ma gdzie ustąpić i rozgrzewa się od samego ściśnięcia. Dlatego kapsuły mają kształt tępy, a nie opływowy: chodzi o odepchnięcie fali uderzeniowej, nie o zmniejszenie opory.',
        zrodlo: Z.wikiLadowania,
      },
    ],
    os: [
      { data: '2026-07-24', tytul: 'Pierwsza cała osłona po locie', opis: 'Statek Starshipa wodował nienaruszony i dał pierwsze zdjęcia kompletnej osłony termicznej.', waga: 3 },
    ],
    powiazane: [
      { id: 'hamowania', powod: 'drugie z nich chroni człon właśnie na tym odcinku' },
      { id: 'starship', powod: 'wraca z prędkości orbitalnej i wymaga pełnej osłony termicznej' },
      { id: 'crew-dragon', powod: 'przechodzi tę fazę z ludźmi na pokładzie' },
      { id: 'deorbitacja', powod: 'poniżej 300 km atmosfera sprowadza obiekty sama' },
    ],
    zrodla: [Z.wikiLadowania, Z.wikiStarship],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'siatki-aerodynamiczne',
    typ: 'technologia',
    nazwa: 'Siatki aerodynamiczne',
    aka: ['grid fins', 'stery kratowe'],
    krotki: 'Cztery kratowe stery, które rozkładają się po rozdzieleniu stopni i pozwalają sterować członem w powrocie.',
    tresc: [
      'Siatki aerodynamiczne to kratowe powierzchnie sterowe ustawione w układzie X wokół górnej części członu nośnego. Rozkładają się chwilę po rozdzieleniu stopni i pracują przez całe [[wejscie-atmosferyczne|wejście w atmosferę]].',
      'Ich zadanie jest proste do opisania i trudne do wykonania: kierować wektorem siły nośnej członu niezależnie od tego, co robią silniki. Bez nich [[hamowania|hamowania powrotne]] mogłyby wyhamować rakietę, ale nie postawiłyby jej w konkretnym punkcie.',
      'To one przesądziły o celności lądowań. W [[falcon-9|Falconie 9]] pojawiły się na późniejszych lotach testowych i dopiero z nimi udało się [[pierwsze-ladowanie|pierwsze przyziemienie]]. [[super-heavy|Super Heavy]] korzysta z tej samej idei — i właśnie za czopy pod siatkami chwytają go ramiona wieży.',
    ],
    fakty: [
      { etykieta: 'Układ', wartosc: 'cztery powierzchnie w konfiguracji X', pewnosc: 'potwierdzone' },
      { etykieta: 'Moment rozłożenia', wartosc: 'chwilę po rozdzieleniu stopni', pewnosc: 'potwierdzone' },
      { etykieta: 'Funkcja', wartosc: 'sterowanie siłą nośną niezależnie od silników', pewnosc: 'potwierdzone' },
      { etykieta: 'Efekt', wartosc: 'celność wystarczająca do lądowania punktowego', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'W Super Heavy siatki przestały być tylko sterami. Ramiona wieży startowej chwytają wracający człon za czopy umieszczone bezpośrednio pod nimi — element aerodynamiczny stał się zarazem punktem zawieszenia rakiety o masie kilkuset ton.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2015-12-21', tytul: 'Pierwsze udane lądowanie', opis: 'Człon z siatkami siada pionowo na Landing Zone 1.', waga: 3 },
    ],
    powiazane: [
      { id: 'hamowania', powod: 'sterują kierunkiem między kolejnymi odpaleniami' },
      { id: 'falcon-9', powod: 'bez nich jego lądowania nie byłyby celne' },
      { id: 'super-heavy', powod: 'chwytany przez wieżę za czopy pod siatkami' },
      { id: 'reuzywalnosc', powod: 'element, który zamienił hamowanie w lądowanie punktowe' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiLadowania, Z.wikiStartyStarship, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'oslona-ladunku',
    typ: 'technologia',
    nazwa: 'Osłona ładunku',
    aka: ['fairing', 'owiewka'],
    krotki: 'Dwie połówki skorupy chroniące satelitę w atmosferze — i najbardziej wysłużony element całego systemu.',
    tresc: [
      'Osłona ładunku to skorupa z dwóch połówek, która chroni satelitę przed naporem powietrza i nagrzewaniem podczas przelotu przez atmosferę. Po wyjściu w próżnię rozdziela się i odpada. W [[falcon-9|Falconie 9]] ma 13 metrów długości i 5,2 metra średnicy.',
      'Przez pół wieku była elementem jednorazowym — kosztownym opakowaniem wyrzucanym po otwarciu. [[spacex|SpaceX]] zaczęła je odzyskiwać: przy misji [[ses-10|SES-10]] jedną połówkę sprowadzono na silniczkach i sterowanym spadochronie.',
      'Skutek jest zaskakujący. Rekordzistą w liczbie lotów w całym systemie nie jest żaden człon nośny, a połówka osłony o numerze SN155 z czterdziestoma startami — więcej niż najbardziej wysłużony booster, który ma ich trzydzieści siedem.',
      '[[starship|Starship]] nie ma osłony w tym sensie w ogóle: ładunek wychodzi przez drzwi w kadłubie, który wraca na Ziemię razem z nim. To różnica między [[reuzywalnosc|reużywalnością]] częściową a pełną.',
    ],
    fakty: [
      { etykieta: 'Wymiary (Falcon 9)', wartosc: '13 m długości, 5,2 m średnicy', pewnosc: 'potwierdzone' },
      { etykieta: 'Budowa', wartosc: 'dwie połówki, rozdzielane po wyjściu z atmosfery', pewnosc: 'potwierdzone' },
      { etykieta: 'Rekord lotów jednej połówki', wartosc: '40 (egzemplarz SN155)', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwszy odzysk', wartosc: 'misja SES-10, na silniczkach i spadochronie', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Najbardziej wysłużonym elementem systemu Falcona 9 nie jest silnik ani człon nośny, a połówka osłony ładunku SN155 z czterdziestoma lotami — o trzy więcej niż rekordowy booster. Część, którą branża przez dekady traktowała jak opakowanie, okazała się najtrwalsza.',
        zrodlo: Z.wikiStartyFalcon,
      },
    ],
    os: [
      { data: '2017-03-30', tytul: 'Pierwszy odzysk połówki', opis: 'Przy misji SES-10 jedna połówka wodowała na sterowanym spadochronie.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'jej wymiary wyznaczają granicę rozmiaru jego ładunków' },
      { id: 'ses-10', powod: 'przy tej misji odzyskano połówkę po raz pierwszy' },
      { id: 'reuzywalnosc', powod: 'element, na którym ta idea przyniosła najdłuższy przebieg' },
      { id: 'starship', powod: 'nie ma jej wcale — ładunek wychodzi przez drzwi w kadłubie' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiFalcon9, Z.wikiStartyFalcon, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'autogeniczne-cisnienie',
    typ: 'technologia',
    nazwa: 'Autogeniczne wytwarzanie ciśnienia',
    aka: ['autogenous pressurization', 'brak helu'],
    krotki: 'Utrzymywanie ciśnienia w zbiornikach odparowanym własnym paliwem, a nie helem z osobnych butli.',
    tresc: [
      'Zbiornik rakiety trzeba utrzymywać pod ciśnieniem, bo w miarę opróżniania paliwo musi być czymś wypychane. Klasyczne rozwiązanie to hel z osobnych butli — ale to oznacza dodatkowe zbiorniki, instalację i zawory, czyli masę i punkty awarii.',
      'Autogeniczne wytwarzanie ciśnienia usuwa hel z równania. Część własnego paliwa i utleniacza odparowuje się i wpuszcza z powrotem do zbiorników jako gaz nośny. Nic obcego nie jedzie na pokładzie.',
      '[[starship|Starship]] korzysta właśnie z tego rozwiązania. Nie jest to detal: butle z helem stały za dwiema największymi awariami [[falcon-9|Falcona 9]] — [[crs-7|CRS-7]], gdzie pękł zastrzał mocujący butlę, i [[amos-6|AMOS-6]], gdzie zapadła się wykładnina butli i tlen zapalił się pod oplotem.',
      'Usunięcie elementu, który dwa razy zniszczył rakietę, jest dobrym przykładem tego, jak wygląda postęp w tej dziedzinie: nie przez dodanie zabezpieczenia, a przez wyrzucenie części.',
    ],
    fakty: [
      { etykieta: 'Zasada', wartosc: 'odparowane własne paliwo jako gaz nośny', pewnosc: 'potwierdzone' },
      { etykieta: 'Co zastępuje', wartosc: 'hel w osobnych butlach kompozytowych', pewnosc: 'potwierdzone' },
      { etykieta: 'Zysk', wartosc: 'mniej masy, mniej instalacji, mniej punktów awarii', pewnosc: 'potwierdzone' },
      { etykieta: 'Zastosowanie', wartosc: 'Starship', pewnosc: 'potwierdzone' },
      { etykieta: 'Dla porównania', wartosc: 'Falcon 9 używa podgrzewanego helu w obu stopniach', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Butle z helem stały za dwiema największymi stratami Falcona 9 — awarią CRS-7 w locie i eksplozją AMOS-6 na stanowisku. Starship rozwiązuje ten problem nie lepszą butlą, a brakiem butli.',
        zrodlo: Z.wikiAutogeniczne,
      },
    ],
    os: [
      { data: '2023-04-20', tytul: 'Pierwszy lot z tym rozwiązaniem', opis: 'Starship startuje bez butli helowych w układzie ciśnieniowym.', waga: 2 },
    ],
    powiazane: [
      { id: 'starship', powod: 'korzysta z tego rozwiązania zamiast helu' },
      { id: 'crs-7', powod: 'awaria wywołana mocowaniem butli helowej' },
      { id: 'amos-6', powod: 'eksplozja wywołana zapadniętą wykładziną butli helowej' },
      { id: 'raptor', powod: 'metan i tlen służą tu także jako własny gaz nośny' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiAutogeniczne, Z.wikiCrs7, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'stage-zero',
    typ: 'pojecie',
    nazwa: 'Stage zero',
    aka: ['stopień zerowy', 'Mechazilla', 'chopsticks'],
    krotki: 'Wieża startowa Starshipa traktowana jako osobny stopień rakiety — równie trudny jak dwa pozostałe.',
    tresc: [
      '„Stage zero" to określenie, którym [[elon-musk|Musk]] opisuje cały naziemny układ startowy [[starship|Starshipa]]: wieżę, mocowanie startowe i ramiona chwytające. Jego teza jest taka, że ten element jest równie złożony i równie trudny jak pierwszy albo drugi stopień rakiety, i tak samo rozstrzyga o powodzeniu programu.',
      'Nie jest to figura retoryczna. Ramiona wieży, nazywane „chopsticks", wykonują [[super-heavy|chwyt wracającego członu]], a cała konstrukcja odpowiada za tankowanie, podnoszenie i ustawianie pojazdu. Docelowo ma pozwalać startować, łapać i wysyłać ponownie w godzinach albo dniach, nie tygodniach.',
      'Że to nie teoria, pokazał [[starship-lot-5|lot 5]], w którym chwyt udał się za pierwszym podejściem, i lot 6, w którym manewr przerwano automatycznie, bo wieża odniosła uszkodzenia w chwili startu. Stan stopnia zerowego rozstrzygał wtedy o losie członu wartego dziesiątki milionów dolarów.',
      'Cała konstrukcja stoi w [[starbase|Starbase]] i jest powodem, dla którego program jest tak silnie przywiązany do jednego miejsca na mapie.',
    ],
    fakty: [
      { etykieta: 'Co obejmuje', wartosc: 'wieża, mocowanie startowe, ramiona chwytające', pewnosc: 'potwierdzone' },
      { etykieta: 'Teza', wartosc: 'równie złożony jak pierwszy i drugi stopień rakiety', pewnosc: 'potwierdzone' },
      { etykieta: 'Cel docelowy', wartosc: 'start, chwyt i ponowny lot w godzinach lub dniach', pewnosc: 'szacunkowe' },
      { etykieta: 'Lokalizacja', wartosc: 'Starbase, Teksas', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przy locie 6 chwyt członu przerwano automatycznie, bo wieża odniosła uszkodzenia w chwili startu — booster skierowano na wodowanie. Decyzję podjął układ automatyczny, a jej powodem był stan konstrukcji naziemnej, nie samej rakiety.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2024-10-13', tytul: 'Pierwszy chwyt', opis: 'Ramiona wieży przechwytują wracający człon przy locie 5.', waga: 3 },
    ],
    powiazane: [
      { id: 'starbase', powod: 'tam stoi cała ta konstrukcja' },
      { id: 'super-heavy', powod: 'wieża chwyta go zamiast nóg lądowniczych' },
      { id: 'starship-lot-5', powod: 'lot, w którym chwyt udał się za pierwszym razem' },
      { id: 'reuzywalnosc', powod: 'ma skrócić czas między lotami z tygodni do dni' },
    ],
    status: 'w rozwoju',
    zrodla: [Z.spaceStageZero, Z.wikiStartyStarship, Z.spacexStarship],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'statyczny-test-ogniowy',
    typ: 'pojecie',
    nazwa: 'Statyczny test ogniowy',
    aka: ['static fire', 'próba ogniowa'],
    krotki: 'Odpalenie silników rakiety przywiązanej do stanowiska — najczęstsza próba przed startem i nie najbezpieczniejsza.',
    tresc: [
      'Statyczny test ogniowy polega na uruchomieniu silników rakiety zamocowanej na stanowisku, bez wypuszczania jej w powietrze. Sprawdza się w nim tankowanie, rozruch, pracę na ciągu i wyłączenie — czyli wszystko poza samym lotem.',
      'Test bywa rutynowy, ale nie jest niegroźny. Właśnie podczas tankowania przed taką próbą [[amos-6|zniszczona została rakieta z satelitą AMOS-6]], razem z kosztownym ładunkiem i ze stanowiskiem SLC-40. Nie był to start ani nawet próba startu.',
      'Pojedyncze silniki przechodzą osobne próby na hamowni — tak sprawdzano [[raptor|Raptora]] w McGregor w Teksasie, siedem lat przed jego pierwszym lotem. Dla całej rakiety próba jest ostatnim etapem przed [[wet-dress-rehearsal|generalną próbą tankowania]] i startem.',
    ],
    fakty: [
      { etykieta: 'Co się sprawdza', wartosc: 'tankowanie, rozruch, praca silników, wyłączenie', pewnosc: 'potwierdzone' },
      { etykieta: 'Rakieta', wartosc: 'zamocowana na stanowisku, bez lotu', pewnosc: 'potwierdzone' },
      { etykieta: 'Najpoważniejszy incydent', wartosc: 'utrata rakiety i satelity AMOS-6, 1 września 2016', pewnosc: 'potwierdzone' },
      { etykieta: 'Próby pojedynczych silników', wartosc: 'hamownia w McGregor w Teksasie', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Najkosztowniejsza strata w historii Falcona 9 nie zdarzyła się w locie, a podczas tankowania do rutynowego testu ogniowego. Rakieta, satelita wart około 195 milionów dolarów i stanowisko startowe przepadły dwa dni przed planowanym startem.',
        zrodlo: Z.wikiAmos6,
      },
    ],
    os: [
      { data: '2016-09-01', tytul: 'Utrata AMOS-6', opis: 'Rakieta ginie podczas tankowania przed statycznym testem ogniowym.', waga: 3 },
    ],
    powiazane: [
      { id: 'amos-6', powod: 'awaria, która zdarzyła się właśnie przy takiej próbie' },
      { id: 'raptor', powod: 'jego pierwsze odpalenie odbyło się na hamowni w McGregor' },
      { id: 'wet-dress-rehearsal', powod: 'kolejny etap przygotowań, tym razem bez odpalania silników' },
      { id: 'falcon-9', powod: 'rutynowy element jego przygotowania do startu' },
    ],
    zrodla: [Z.wikiAmos6, Z.wikiRaptor, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'wet-dress-rehearsal',
    typ: 'pojecie',
    nazwa: 'Generalna próba tankowania',
    aka: ['wet dress rehearsal', 'WDR'],
    krotki: 'Pełne odliczanie z zatankowaną rakietą, przerwane chwilę przed zapłonem — próba wszystkiego oprócz startu.',
    tresc: [
      'Generalna próba tankowania to przejście całej procedury przedstartowej z rakietą napełnioną paliwem i utleniaczem, z odliczaniem prowadzonym do ostatnich sekund i zatrzymanym przed zapłonem. „Wet" odnosi się właśnie do obecności paliwa — próba „na sucho" obejmuje wyłącznie procedury.',
      'Sprawdza się w niej rzeczy, których nie da się sprawdzić inaczej: szczelność instalacji przy temperaturach kriogenicznych, zachowanie konstrukcji pod obciążeniem paliwem, pracę zespołu i łączność. Wiele problemów ujawnia się wyłącznie wtedy, gdy zbiorniki są pełne.',
      'To etap położony między [[statyczny-test-ogniowy|statycznym testem ogniowym]] a startem, a w przypadku [[starship|Starshipa]] także miejsce, w którym sprawdza się [[autogeniczne-cisnienie|autogeniczne wytwarzanie ciśnienia]] w pełnych zbiornikach. Jeśli w jego trakcie coś nie zagra, odliczanie zostaje wstrzymane albo próbę [[scrub-i-nominal|odwołuje się]] — i to jest właśnie jej sens: znaleźć problem wtedy, gdy jego cena to jeden dzień, nie jedna rakieta.',
    ],
    fakty: [
      { etykieta: 'Zakres', wartosc: 'pełne odliczanie z zatankowaną rakietą, bez zapłonu', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie słowa „wet"', wartosc: 'z paliwem, w odróżnieniu od próby na sucho', pewnosc: 'potwierdzone' },
      { etykieta: 'Co wykrywa', wartosc: 'nieszczelności kriogeniczne, obciążenia konstrukcji, błędy procedur', pewnosc: 'potwierdzone' },
      { etykieta: 'Miejsce w kolejności', wartosc: 'po teście ogniowym, przed startem', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Cała wartość tej próby polega na tym, że kończy się niczym. Odliczanie dobiega do ostatnich sekund i zostaje zatrzymane — a każdy problem, który wyjdzie po drodze, kosztuje jeden dzień zamiast jednej rakiety.',
        zrodlo: Z.nasaScrub,
      },
    ],
    os: [
      { data: '2020-05-30', tytul: 'Pełna procedura z załogą', opis: 'Przy Demo-2 procedury przedstartowe przechodzą sprawdzenie z ludźmi na pokładzie.', waga: 2 },
    ],
    powiazane: [
      { id: 'statyczny-test-ogniowy', powod: 'poprzedni etap przygotowań, z odpaleniem silników' },
      { id: 'scrub-i-nominal', powod: 'nieudana próba kończy się odwołaniem odliczania' },
      { id: 'demo-2', powod: 'lot, przy którym procedury sprawdzano z załogą na pokładzie' },
    ],
    zrodla: [Z.nasaScrub, Z.wikiAmos6],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'scrub-i-nominal',
    typ: 'pojecie',
    nazwa: 'Scrub i nominal',
    aka: ['scrub', 'nominal', 'hold', 'odwołanie startu'],
    krotki: 'Dwa słowa, na których opiera się język transmisji ze startu: „wszystko zgodnie z planem" i „dzisiaj nie lecimy".',
    tresc: [
      '„Nominal" znaczy, że parametr mieści się w przewidzianym zakresie. Nie znaczy „dobrze" ani „świetnie" — znaczy „zgodnie z tym, co założono". Dlatego komentator transmisji powtarza to słowo przy każdym etapie lotu: potwierdza zgodność z modelem, nie wyraża zadowolenia.',
      '„Scrub" to odwołanie startu na dany dzień. Jest z definicji tymczasowe i zakłada, że zespół wróci i spróbuje ponownie — w odróżnieniu od wstrzymania odliczania, czyli „hold", które jest pauzą w ramach tego samego okna startowego.',
      'Samo słowo ma pochodzenie starsze niż NASA. Prawdopodobnie wzięło się z praktyki marynarki wojennej, gdzie loty wpisywano kredą na tablicy, a misję, która się nie odbywała, po prostu z tej tablicy ścierano.',
      'Ten sam zwyczaj językowy obejmuje też [[anomalia|anomalię]] i [[rud|RUD]] — słowa, którymi branża opisuje awarie. Odwołanie zdarza się najczęściej przy [[wet-dress-rehearsal|generalnej próbie tankowania]] i przy [[statyczny-test-ogniowy|próbie ogniowej]], czyli dokładnie tam, gdzie ma się zdarzać. Cała ta warstwa nie jest przypadkiem: spokojne, techniczne nazewnictwo utrzymuje pracę zespołu w rejestrze procedur, a nie emocji.',
    ],
    fakty: [
      { etykieta: 'Nominal', wartosc: 'parametr w przewidzianym zakresie', pewnosc: 'potwierdzone' },
      { etykieta: 'Scrub', wartosc: 'odwołanie startu na dany dzień, z zamiarem powtórzenia', pewnosc: 'potwierdzone' },
      { etykieta: 'Hold', wartosc: 'wstrzymanie odliczania w ramach okna startowego', pewnosc: 'potwierdzone' },
      { etykieta: 'Pochodzenie „scrub"', wartosc: 'prawdopodobnie z praktyki marynarki — ścieranie wpisu z tablicy', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Słowo „scrub" pochodzi najprawdopodobniej z czasów przed NASA: w marynarce wojennej loty wypisywano kredą na tablicy, a misję odwołaną po prostu z niej ścierano. Termin z tablicy szkolnej obsługuje dziś odliczanie rakiet.',
        zrodlo: Z.nasaScrub,
      },
    ],
    os: [
      { data: '2023-04-17', tytul: 'Odwołanie pierwszego startu Starshipa', opis: 'Pierwszą próbę lotu 1 odwołano z powodu problemu z tankowaniem; start odbył się trzy dni później.', waga: 2 },
    ],
    powiazane: [
      { id: 'anomalia', powod: 'ta sama warstwa języka, po stronie awarii' },
      { id: 'rud', powod: 'najbardziej znany przykład tego nazewnictwa' },
      { id: 'wet-dress-rehearsal', powod: 'próba, która często kończy się właśnie odwołaniem' },
      { id: 'kadencja-startow', powod: 'liczba odwołań wprost obniża tempo startów' },
      { id: 'statyczny-test-ogniowy', powod: 'próba, którą również można odwołać przed zapłonem' },
    ],
    zrodla: [Z.nasaScrub, Z.wikiStartyStarship],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'anomalia',
    typ: 'pojecie',
    nazwa: 'Anomalia',
    aka: ['anomaly', 'in-flight anomaly'],
    krotki: 'Branżowe słowo na wszystko, co odbiegło od planu — od drobnego odczytu do utraty rakiety.',
    tresc: [
      '„Anomalia" oznacza w tej dziedzinie każde odstępstwo od przewidzianego zachowania. Zakres jest rozciągły: tym samym słowem opisuje się nietypowy odczyt czujnika i całkowitą utratę pojazdu. Komunikat o [[amos-6|AMOS-6]] mówił, że rakieta „doświadczyła anomalii, która zniszczyła pojazd i jego ładunek".',
      'Powód używania tak neutralnego słowa nie jest wyłącznie public-relations. W trakcie lotu nikt nie wie jeszcze, co się stało; nazwanie zdarzenia „awarią" albo „eksplozją" przesądzałoby przyczynę przed analizą. „Anomalia" jest opisem stanu wiedzy, nie oceną — podobnie jak [[scrub-i-nominal|scrub i nominal]], słowa opisujące stan procedury, a nie samopoczucie zespołu.',
      'Druga strona tego samego zwyczaju jest już mniej niewinna: to słowo pozwala mówić o katastrofie tonem raportu. [[crs-7|CRS-7]] rozpadł się w 139. sekundzie lotu i w komunikatach był anomalią; [[rud|RUD]] jest tej praktyki najdalszym punktem. Tym samym słowem opisano zresztą rozpad rakiety przy [[starship-lot-1|pierwszym locie Starshipa]], mimo że wszyscy widzieli go na żywo.',
    ],
    fakty: [
      { etykieta: 'Zakres znaczenia', wartosc: 'od nietypowego odczytu do utraty pojazdu', pewnosc: 'potwierdzone' },
      { etykieta: 'Uzasadnienie techniczne', wartosc: 'nie przesądza przyczyny przed analizą', pewnosc: 'potwierdzone' },
      { etykieta: 'Przykład użycia', wartosc: 'komunikat o utracie rakiety z satelitą AMOS-6', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Oficjalny komunikat o zniszczeniu rakiety i satelity wartego około 195 milionów dolarów mówił, że pojazd „doświadczył anomalii". To samo słowo obsługuje w tej branży nietypowy odczyt ciśnienia i całkowitą utratę misji.',
        zrodlo: Z.wikiAmos6,
      },
    ],
    os: [
      { data: '2015-06-28', tytul: 'Anomalia CRS-7', opis: 'Rakieta rozpada się w 139. sekundzie lotu; w komunikatach — anomalia.', waga: 2 },
      { data: '2016-09-01', tytul: 'Anomalia AMOS-6', opis: 'Utrata rakiety, satelity i stanowiska podczas tankowania.', waga: 2 },
    ],
    powiazane: [
      { id: 'amos-6', powod: 'zdarzenie opisane oficjalnie właśnie tym słowem' },
      { id: 'crs-7', powod: 'drugi przypadek tego użycia w historii Falcona 9' },
      { id: 'rud', powod: 'najdalszy punkt tej samej praktyki językowej' },
      { id: 'scrub-i-nominal', powod: 'ta sama warstwa języka, po stronie procedur' },
    ],
    zrodla: [Z.wikiAmos6, Z.wikiCrs7],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'rud',
    typ: 'pojecie',
    nazwa: 'RUD',
    aka: ['rapid unscheduled disassembly', 'szybki nieplanowany rozpad'],
    krotki: 'Szybki nieplanowany rozpad — inżynierski żart, który stał się oficjalnym sposobem mówienia, że rakieta wybuchła.',
    tresc: [
      'RUD to skrót od „rapid unscheduled disassembly", czyli szybkiego nieplanowanego rozłożenia na części. Jest to eufemizm na katastrofalną awarię — i był żartem znacznie wcześniej, niż stał się terminem w komunikatach.',
      'Określenie jest starsze niż [[spacex|SpaceX]] i prawdopodobnie starsze niż [[elon-musk|Musk]]. Powstało jako humor wisielczy w branży lotniczej i kosmicznej. Do świadomości powszechnej weszło w 2015 roku, a potem ponownie w 2023, gdy tak opisywano awarie [[starship|Starshipa]].',
      'Mechanizm jest dokładnie taki jak przy [[anomalia|anomalii]], tylko posunięty dalej: zdanie „rakieta uległa szybkiemu nieplanowanemu rozpadowi" opisuje ten sam fakt co „rakieta wybuchła", ale utrzymuje rozmowę w rejestrze technicznym.',
      'W przypadku [[starship|Starshipa]] to nie jest wykręt. Program jest zbudowany na założeniu, że rakiety będą się rozpadać, a każdy taki rozpad ma zostawić dane — [[starship-lot-5|lot 5]] był możliwy dzięki temu, czego nauczyły cztery poprzednie.',
    ],
    fakty: [
      { etykieta: 'Rozwinięcie', wartosc: 'rapid unscheduled disassembly', pewnosc: 'potwierdzone' },
      { etykieta: 'Znaczenie', wartosc: 'katastrofalna awaria konstrukcji', pewnosc: 'potwierdzone' },
      { etykieta: 'Pochodzenie', wartosc: 'humor branżowy, starszy niż SpaceX', pewnosc: 'potwierdzone' },
      { etykieta: 'Wejście do obiegu publicznego', wartosc: '2015, ponownie 2023 przy lotach Starshipa', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Określenie nie powstało w SpaceX i jest prawdopodobnie starsze niż sam Musk — krążyło w branży jako humor wisielczy inżynierów. Firma jedynie wprowadziła je do oficjalnych komunikatów, gdzie zaczęło opisywać rozpad rakiety w czasie teraźniejszym.',
        zrodlo: Z.wordoriginsRud,
      },
    ],
    os: [
      { data: '2023-04-20', tytul: 'Lot 1 Starshipa', opis: 'Rakieta rozpada się po czterech minutach; określenie wraca do obiegu publicznego.', waga: 2 },
    ],
    powiazane: [
      { id: 'anomalia', powod: 'ta sama praktyka językowa, tylko ostrożniejsza' },
      { id: 'starship', powod: 'program, przy którym określenie weszło do powszechnego obiegu' },
      { id: 'starship-lot-5', powod: 'sukces możliwy dzięki wnioskom z czterech wcześniejszych rozpadów' },
    ],
    zrodla: [Z.wordoriginsRud, Z.wikiStarship],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'itar',
    typ: 'pojecie',
    nazwa: 'ITAR',
    aka: ['International Traffic in Arms Regulations', 'kontrola eksportu'],
    krotki: 'Amerykańskie przepisy o obrocie uzbrojeniem, które obejmują rakiety i decydują, kto może wejść do hali montażowej.',
    tresc: [
      'ITAR to zbiór przepisów Departamentu Stanu USA kontrolujących eksport technologii wojskowych. Nadzoruje je Dyrektoriat Kontroli Handlu Obronnego, w ocenie uczestniczy Departament Obrony, a egzekucja należy do służby imigracyjnej i celnej.',
      'Rakiety i statki kosmiczne siedzą w tym systemie wprost: kategoria 15 listy uzbrojenia obejmuje statki kosmiczne i sprzęt towarzyszący, kategoria 4 rakiety nośne, pociski i ładunki bojowe. Do 2014 roku obejmowało to wszystkie satelity bez wyjątku.',
      'Konsekwencja praktyczna dla firmy takiej jak [[spacex|SpaceX]] jest twarda: dostęp cudzoziemca do danych objętych przepisami liczy się jako eksport i wymaga zezwolenia. Pracownicy bez amerykańskiego obywatelstwa lub statusu stałego rezydenta nie mogą korzystać z tej samej sieci, w której leżą takie dane, ani wchodzić do pomieszczeń, gdzie prowadzi się taką pracę. Dotyczy to również hali w [[hawthorne|Hawthorne]], gdzie biura i linia produkcyjna dzielą jedną przestrzeń.',
      'W maju 2014 roku Departament Stanu przeniósł satelity komercyjne z listy uzbrojenia pod nadzór Departamentu Handlu, co poluzowało handel — ale rakiety, w tym [[falcon-9|Falcon 9]] i [[starship|Starship]], pozostały tam, gdzie były. Kary bywają poważne: koncern ITT zapłacił 100 milionów dolarów za nieuprawnione przekazanie technologii noktowizyjnej. Te same przepisy stoją za tym, że wojskowa odmiana [[starshield|konstelacji]] jest osobnym produktem, a nie wariantem cywilnego [[starlink|Starlinka]].',
    ],
    fakty: [
      { etykieta: 'Kto nadzoruje', wartosc: 'Departament Stanu USA, Dyrektoriat Kontroli Handlu Obronnego', pewnosc: 'potwierdzone' },
      { etykieta: 'Kategorie dotyczące kosmosu', wartosc: '15 — statki kosmiczne, 4 — rakiety nośne', pewnosc: 'potwierdzone' },
      { etykieta: 'Skutek dla cudzoziemców', wartosc: 'brak dostępu do sieci i pomieszczeń z danymi objętymi przepisami', pewnosc: 'potwierdzone' },
      { etykieta: 'Reforma satelitarna', wartosc: 'maj 2014 — satelity komercyjne przeniesione pod Departament Handlu', pewnosc: 'potwierdzone' },
      { etykieta: 'Przykład kary', wartosc: '100 mln USD zapłacone przez koncern ITT', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przepisy traktują samo pokazanie dokumentu cudzoziemcowi na terenie Stanów jako eksport technologii. Dlatego w amerykańskich firmach rakietowych pracownicy bez obywatelstwa lub stałego pobytu nie mają dostępu do tej samej sieci ani do tych samych pomieszczeń co reszta zespołu.',
        zrodlo: Z.wikiItar,
      },
    ],
    os: [
      { data: '2014-05', tytul: 'Reforma satelitarna', opis: 'Satelity komercyjne wychodzą z listy uzbrojenia; rakiety zostają.', waga: 2 },
    ],
    powiazane: [
      { id: 'spacex', powod: 'przepisy wyznaczają, kto może pracować przy jej rakietach' },
      { id: 'falcon-9', powod: 'pozostaje na liście uzbrojenia także po reformie z 2014 roku' },
      { id: 'starlink', powod: 'satelity komercyjne wyszły spod tych przepisów w 2014 roku' },
    ],
    zrodla: [Z.wikiItar, Z.wikiSpaceX],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'kadencja-startow',
    typ: 'pojecie',
    nazwa: 'Kadencja startów',
    aka: ['launch cadence', 'tempo startów'],
    krotki: 'Liczba startów w jednostce czasu — wielkość, w której SpaceX zostawiło całą branżę i większość państw.',
    tresc: [
      'Kadencja to po prostu tempo: ile razy dana rakieta startuje w miesiącu albo w roku. Brzmi jak wskaźnik księgowy, ale jest jednym z najważniejszych parametrów w tej dziedzinie, bo decyduje o cenie, o dostępności terminów i o tym, jak szybko firma uczy się na własnych lotach.',
      'Skala, jaką osiągnął [[falcon-9|Falcon 9]], jest trudna do objęcia. Setny start tej rakiety w samym roku 2026 odbył się 25 sierpnia — czyli sto lotów w niecałe osiem miesięcy. Przez większość ery kosmicznej takiego tempa nie wyrabiały w ciągu roku całe państwa.',
      'Warunkiem takiej kadencji jest [[reuzywalnosc|reużywalność]]: rakieta zużywalna wymagałaby wyprodukowania stu nowych członów. Rekordowy egzemplarz przeszedł 37 lotów, a [[oslona-ladunku|połówka osłony ładunku]] czterdzieści.',
      'Druga strona tego wskaźnika jest mniej wygodna: około trzech czwartych startów w 2026 roku to misje własnej konstelacji [[starlink|Starlink]]. Kadencja jest imponująca i w dużej mierze wewnętrzna.',
    ],
    fakty: [
      { etykieta: 'Setny start Falcona 9 w 2026', wartosc: '25 sierpnia 2026', pewnosc: 'potwierdzone' },
      { etykieta: 'Starty rodziny Falcon 9 łącznie', wartosc: '699', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Udział misji Starlink', wartosc: 'ok. 75% startów w 2026 roku', stanNa: '2026', pewnosc: 'szacunkowe' },
      { etykieta: 'Warunek techniczny', wartosc: 'odzysk i ponowne loty członów', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Około trzech czwartych startów Falcona 9 w 2026 roku to loty z satelitami własnej konstelacji. Najbardziej wydajna firma rakietowa w historii jest zarazem swoim największym klientem — rekord tempa startów jest w dużej części rekordem wewnętrznym.',
        zrodlo: Z.spaceSetny,
      },
    ],
    os: [
      { data: '2026-08-25', tytul: 'Setny start roku', opis: 'Falcon 9 osiąga sto lotów w niecałe osiem miesięcy.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'rakieta, która wyznacza dzisiejszy poziom tego wskaźnika' },
      { id: 'reuzywalnosc', powod: 'bez niej takie tempo wymagałoby stu nowych rakiet rocznie' },
      { id: 'starlink', powod: 'jego misje stanowią większość tych startów' },
      { id: 'koszt-kilograma', powod: 'wysokie tempo rozkłada koszty stałe na więcej lotów' },
    ],
    zrodla: [Z.spaceSetny, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'koszt-kilograma',
    typ: 'pojecie',
    nazwa: 'Koszt kilograma na orbicie',
    aka: ['cost per kilogram', 'cena kilograma'],
    krotki: 'Podstawowa miara opłacalności lotów kosmicznych — i liczba, której spadek umożliwił wszystko, co dzieje się dzisiaj.',
    tresc: [
      'Koszt kilograma to cena startu podzielona przez masę dostarczoną na orbitę. Wskaźnik jest zgrubny, bo zależy od orbity docelowej i od tego, czy człony wracają, ale to od niego zależy, które przedsięwzięcia mają w ogóle sens.',
      'Liczby [[falcon-heavy|Falcona Heavy]] pozwalają to policzyć: wariant w pełni zużywalny kosztuje 150 milionów dolarów i wynosi 63 800 kg na [[leo|niską orbitę]], co daje około 2 350 dolarów za kilogram. Wariant z odzyskiem członów bocznych kosztuje 97 milionów — a różnica w cenie startu bierze się wprost z [[reuzywalnosc|odzysku]].',
      'Dla [[falcon-9|Falcona 9]] rachunek pokazuje drugą stronę tej zależności: 22 800 kg na niską orbitę bez odzysku wobec 17 500 kg przy lądowaniu na [[barki-dronowe|barce]]. Powrót członu kosztuje około jednej czwartej ładowności — to jest cena, którą się płaci [[delta-v|paliwem]].',
      'Skutki tego spadku nie są teoretyczne. [[starlink|Konstelacja licząca ponad dziesięć tysięcy satelitów]] przy poprzednich cenach nie byłaby wykonalna, a nie tylko nieopłacalna.',
    ],
    fakty: [
      { etykieta: 'Definicja', wartosc: 'cena startu podzielona przez masę na orbicie', pewnosc: 'potwierdzone' },
      { etykieta: 'Falcon Heavy, wariant zużywalny', wartosc: '150 mln USD za 63 800 kg na LEO', stanNa: '2022', pewnosc: 'potwierdzone' },
      { etykieta: 'Szacunek na kilogram', wartosc: 'ok. 2 350 USD (obliczenie z powyższych liczb)', stanNa: '2022', pewnosc: 'szacunkowe' },
      { etykieta: 'Cena odzysku u Falcona 9', wartosc: '22 800 kg bez odzysku wobec 17 500 kg z lądowaniem na barce', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Powrót członu nośnego kosztuje około jednej czwartej ładowności: Falcon 9 wynosi 22 800 kg, jeśli nic nie wraca, i 17 500 kg, jeśli booster ma wylądować. Reużywalność nie jest darmowa — jest po prostu tańsza niż budowa nowej rakiety.',
        zrodlo: Z.wikiFalcon9,
      },
    ],
    os: [
      { data: '2018-02-06', tytul: 'Debiut Falcona Heavy', opis: 'Na rynku pojawia się rakieta ciężka z ceną poniżej stu milionów dolarów za start.', waga: 3 },
    ],
    powiazane: [
      { id: 'reuzywalnosc', powod: 'główna przyczyna spadku tego wskaźnika' },
      { id: 'falcon-heavy', powod: 'jego cennik pozwala policzyć ten koszt wprost' },
      { id: 'starlink', powod: 'konstelacja tej wielkości wymagała tańszego kilograma' },
      { id: 'delta-v', powod: 'to z tej zależności wynika cena powrotu członu' },
      { id: 'kadencja-startow', powod: 'wyższe tempo rozkłada koszty stałe na więcej lotów' },
    ],
    zrodla: [Z.wikiFalcon9, Z.wikiFalconHeavy],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'konstelacja',
    typ: 'pojecie',
    nazwa: 'Konstelacja satelitarna',
    aka: ['constellation', 'megakonstelacja'],
    krotki: 'Grupa satelitów pracujących jako jeden system — pojedynczy satelita na niskiej orbicie nie wystarcza do niczego trwałego.',
    tresc: [
      'Satelita na [[leo|niskiej orbicie]] przelatuje nad danym punktem w kilka minut i znika. Żeby zapewnić łączność ciągłą, trzeba ich mieć tyle, by nad każdym miejscem zawsze znajdował się któryś — i to jest definicja konstelacji: zbiór satelitów pracujących jako jeden system, nie jako suma urządzeń.',
      'Liczba wynika z geometrii i z wysokości. Im niżej, tym mniejszy obszar widzi jeden satelita i tym więcej ich potrzeba. [[starlink|Starlink]] pracuje na wysokościach rzędu kilkuset kilometrów i liczy około 10 413 satelitów, z czego 10 397 czynnych.',
      'Alternatywą jest jeden satelita na [[gto|orbicie geostacjonarnej]], widzący od razu jedną trzecią globu — za cenę opóźnienia sygnału rzędu 240 milisekund w obie strony. Konstelacja kupuje niskie opóźnienie liczbą sztuk.',
      'Cena tej strategii jest podwójna: wymaga taniego [[koszt-kilograma|kilograma na orbicie]] i tworzy problem, którego przy pojedynczych satelitach nie było — [[zespol-kesslera|zagęszczenia orbit]] i konieczności planowej [[deorbitacja|deorbitacji]].',
    ],
    fakty: [
      { etykieta: 'Definicja', wartosc: 'zbiór satelitów pracujących jako jeden system', pewnosc: 'potwierdzone' },
      { etykieta: 'Starlink', wartosc: 'ok. 10 413 satelitów, 10 397 czynnych', stanNa: '2026-06', pewnosc: 'potwierdzone' },
      { etykieta: 'Liczba według samego SpaceX', wartosc: 'ponad 6 750 — własna strona firmy podaje wartość niższą niż katalogi śledzenia', pewnosc: 'sporne' },
      { etykieta: 'Powód liczebności', wartosc: 'niska orbita to mały obszar widzenia jednego satelity', pewnosc: 'potwierdzone' },
      { etykieta: 'Alternatywa', wartosc: 'jeden satelita geostacjonarny; ok. 240 ms z samej drogi sygnału, ponad 600 ms w praktyce według SpaceX', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Jeden satelita geostacjonarny widzi około jednej trzeciej powierzchni Ziemi, a Starlink potrzebuje do tego samego ponad dziesięciu tysięcy sztuk. Cała różnica sprowadza się do opóźnienia sygnału: 240 milisekund w obie strony wobec kilkudziesięciu.',
        zrodlo: Z.wikiGeo,
      },
    ],
    os: [
      { data: '2019-05-24', tytul: 'Pierwsza partia Starlinka', opis: 'Sześćdziesiąt satelitów otwiera epokę konstelacji liczonych w tysiącach.', waga: 3 },
    ],
    powiazane: [
      { id: 'starlink', powod: 'największa konstelacja w historii' },
      { id: 'leo', powod: 'wysokość, która wymusza dużą liczbę satelitów' },
      { id: 'zespol-kesslera', powod: 'ryzyko, które rośnie wprost z zagęszczeniem orbit' },
      { id: 'deorbitacja', powod: 'planowe usuwanie satelitów jest warunkiem utrzymania takiej sieci' },
      { id: 'koszt-kilograma', powod: 'konstelacja tej wielkości wymaga taniego wynoszenia' },
    ],
    zrodla: [Z.wikiStarlink, Z.wikiGeo, Z.starlinkTech],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'deorbitacja',
    typ: 'pojecie',
    nazwa: 'Deorbitacja',
    aka: ['deorbit', 'zeschodzenie z orbity'],
    krotki: 'Planowe sprowadzenie satelity z orbity, żeby spłonął w atmosferze — jedyny sposób sprzątania po sobie na orbicie.',
    tresc: [
      'Satelita, który przestał działać, nie znika. Na [[leo|niskiej orbicie]] atmosfera sprowadza go sama, ale w czasie zależnym od wysokości: poniżej 300 kilometrów w miesiącach, wyżej — w latach albo dekadach. Powyżej pewnego pułapu praktycznie nigdy.',
      'Deorbitacja to celowe skrócenie tego procesu: satelita odpala silniczki, obniża [[perygeum-apogeum|perygeum]] i wchodzi w gęstsze warstwy, gdzie spala się przy [[wejscie-atmosferyczne|wejściu w atmosferę]]. Dla dużych obiektów planuje się trasę tak, żeby resztki spadły nad bezludnym obszarem oceanu.',
      'Przy [[konstelacja|konstelacjach]] liczonych w tysiącach sztuk to przestaje być procedurą i staje się wymogiem systemowym. Satelita bez zapasu paliwa na zejście jest przyszłym śmieciem — a [[starlink|Starlink]] ma na orbicie ponad dziesięć tysięcy sztuk i wymienia je w cyklu kilkuletnim.',
      'Alternatywy nie ma. Każdy obiekt pozostawiony na orbicie podnosi ryzyko zderzenia, a każde zderzenie mnoży odłamki — i tak zaczyna się [[zespol-kesslera|zespół Kesslera]].',
    ],
    fakty: [
      { etykieta: 'Poniżej 300 km', wartosc: 'orbita rozpada się samoczynnie w miesiącach', pewnosc: 'potwierdzone' },
      { etykieta: 'Mechanizm', wartosc: 'obniżenie perygeum i spalenie w atmosferze', pewnosc: 'potwierdzone' },
      { etykieta: 'Warunek', wartosc: 'zapas paliwa zaplanowany na zejście', pewnosc: 'potwierdzone' },
      { etykieta: 'Spadek orbity ISS', wartosc: 'ok. 2 km miesięcznie bez podbijania', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Międzynarodowa Stacja Kosmiczna traci około dwóch kilometrów wysokości miesięcznie i gdyby przestać ją podbijać, sama zeszłaby z orbity. Największy obiekt zbudowany przez człowieka w kosmosie utrzymuje się na miejscu wyłącznie dzięki regularnemu dopalaniu.',
        zrodlo: Z.wikiLeo,
      },
    ],
    os: [
      { data: '2001-03-23', tytul: 'Deorbitacja stacji Mir', opis: 'Rosyjska stacja zostaje planowo sprowadzona i spalona nad Pacyfikiem.', waga: 2 },
    ],
    powiazane: [
      { id: 'leo', powod: 'tam atmosfera wykonuje część tej pracy samoczynnie' },
      { id: 'wejscie-atmosferyczne', powod: 'faza, w której satelita ulega zniszczeniu' },
      { id: 'zespol-kesslera', powod: 'ryzyko, którego deorbitacja ma nie dopuścić' },
      { id: 'konstelacja', powod: 'przy tysiącach satelitów staje się wymogiem systemowym' },
      { id: 'starlink', powod: 'wymienia satelity w cyklu kilkuletnim, sprowadzając zużyte' },
    ],
    zrodla: [Z.wikiLeo, Z.wikiKessler, Z.starlinkTech],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'zespol-kesslera',
    typ: 'pojecie',
    nazwa: 'Zespół Kesslera',
    aka: ['Kessler syndrome', 'kaskada Kesslera'],
    krotki: 'Scenariusz, w którym odłamki na orbicie zderzają się częściej, niż spadają — i orbita staje się nieużywalna.',
    tresc: [
      'Koncepcję opisali w czerwcu 1978 roku dwaj badacze NASA, Donald Kessler i Burton Cour-Palais, w pracy o częstości zderzeń sztucznych satelitów. Mechanizm jest prosty i nieprzyjemny: zderzenie przy prędkości orbitalnej rozbija obiekty na odłamki, odłamki uderzają w kolejne obiekty, a te dają następne odłamki.',
      'Kluczowe jest pojęcie gęstości krytycznej. Poniżej niej naturalny [[deorbitacja|rozpad orbit]] usuwa więcej odłamków, niż powstaje. W punkcie krytycznym panuje równowaga. Powyżej — produkcja odłamków wyprzedza ich usuwanie i proces sam się napędza, aż dany obszar orbity staje się nieużywalny.',
      'Najbardziej zagrożona jest [[leo|niska orbita]], a w niej okolice 785 kilometrów, gdzie zagęszczenie odłamków jest największe. Dwa zdarzenia pokazały, jak to wygląda w praktyce: chiński test antysatelitarny z 2007 roku, w którym zniszczono satelitę FY-1C na wysokości 865 km, oraz zderzenie satelitów Iridium i Kosmos w 2009 — pierwsze skatalogowane zderzenie dwóch satelitów.',
      'Skala problemu w 2025 roku: ponad 11 800 satelitów na orbicie, około 23 000 odłamków większych niż 10 centymetrów i około 600 000 w przedziale od 1 do 10 centymetrów. To tło, na którym trzeba czytać [[konstelacja|konstelacje]] liczone w tysiącach sztuk, w tym [[starlink|Starlink]].',
    ],
    fakty: [
      { etykieta: 'Autorzy i rok', wartosc: 'Donald Kessler i Burton Cour-Palais, czerwiec 1978', pewnosc: 'potwierdzone' },
      { etykieta: 'Najbardziej zagrożona wysokość', wartosc: 'ok. 785 km; NASA podaje pas 750–1000 km', pewnosc: 'potwierdzone' },
      { etykieta: 'Średnia prędkość zderzenia', wartosc: 'ok. 10 km/s, ponad dziesięć razy szybciej niż pocisk', pewnosc: 'potwierdzone' },
      { etykieta: 'Satelity na orbicie', wartosc: 'ponad 11 800', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Odłamki powyżej 10 cm', wartosc: 'ok. 23 000 w katalogu; NASA szacuje ponad 25 000', stanNa: '2025', pewnosc: 'sporne' },
      { etykieta: 'Odłamki 1–10 cm', wartosc: 'ok. 600 000', stanNa: '2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Test antysatelitarny', wartosc: 'Chiny, 2007, satelita FY-1C na 865 km', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Odłamek o wielkości monety na orbicie ma energię uderzenia porównywalną z pociskiem — a takich w przedziale od jednego do dziesięciu centymetrów jest około sześciuset tysięcy. Nie da się ich śledzić ani przed nimi uciekać; są zbyt małe, żeby je widzieć, i zbyt duże, żeby je zignorować.',
        zrodlo: Z.wikiKessler,
      },
    ],
    os: [
      { data: '1978-06', tytul: 'Opis zjawiska', opis: 'Kessler i Cour-Palais publikują pracę o kaskadzie zderzeń orbitalnych.', waga: 3 },
      { data: '2007', tytul: 'Chiński test antysatelitarny', opis: 'Zniszczenie satelity FY-1C na wysokości 865 km zostawia odłamki na dekady.', waga: 3 },
      { data: '2009', tytul: 'Zderzenie Iridium i Kosmos', opis: 'Pierwsze skatalogowane zderzenie dwóch satelitów.', waga: 3 },
    ],
    powiazane: [
      { id: 'leo', powod: 'obszar najbardziej zagrożony tym scenariuszem' },
      { id: 'deorbitacja', powod: 'główny środek zapobiegania zagęszczeniu' },
      { id: 'konstelacja', powod: 'tysiące satelitów podnoszą stawkę tego ryzyka' },
      { id: 'starlink', powod: 'największa konstelacja na najbardziej zagrożonych wysokościach' },
    ],
    zrodla: [Z.wikiKessler, Z.wikiLeo, Z.nasaOdpady],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'impuls-wlasciwy',
    typ: 'pojecie',
    nazwa: 'Impuls właściwy',
    aka: ['Isp', 'specific impulse'],
    krotki: 'Miara oszczędności silnika rakietowego — ile sekund utrzyma ciąg równy ciężarowi spalanego paliwa.',
    tresc: [
      'Impuls właściwy podaje się w sekundach i mierzy sprawność wykorzystania paliwa. Im wyższa wartość, tym więcej [[delta-v|delta-v]] da się wycisnąć z tej samej masy zabranej na pokład — a ponieważ zapotrzebowanie na paliwo rośnie z delta-v wykładniczo, każda sekunda impulsu przekłada się na wynik nieproporcjonalnie mocno.',
      'Porównanie w obrębie jednej firmy pokazuje, skąd biorą się różnice. [[merlin|Merlin 1D]] osiąga w próżni 311 sekund, a jego odmiana z dużą dyszą próżniową 348 — najwyższy wynik wśród amerykańskich silników węglowodorowych. [[raptor|Raptor]] daje 350 sekund przy zupełnie innym paliwie i [[pelnoprzeplywowe-spalanie-stopniowe|znacznie trudniejszym cyklu]].',
      'Wysokość pracy zmienia obraz: ten sam silnik ma inny impuls przy ziemi i w próżni, bo ciśnienie atmosferyczne działa przeciw strumieniowi spalin. Dlatego drugie stopnie dostają dysze o dużym rozszerzeniu, bezużyteczne na starcie, a wręcz szkodliwe.',
      'Impuls nie jest jedyną liczbą, która się liczy. Silnik o wysokim impulsie i niskim ciągu nie oderwie rakiety od ziemi — [[kestrel|Kestrel]] pracował w próżni, gdzie ciąg miał mniejsze znaczenie, a [[merlin|Merlin]] musiał dźwignąć całość.',
    ],
    fakty: [
      { etykieta: 'Jednostka', wartosc: 'sekundy', pewnosc: 'potwierdzone' },
      { etykieta: 'Merlin 1D w próżni', wartosc: '311 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Merlin 1D Vacuum', wartosc: '348 s — najwyżej wśród amerykańskich silników węglowodorowych', pewnosc: 'potwierdzone' },
      { etykieta: 'Raptor', wartosc: '350 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Zależność', wartosc: 'ta sama konstrukcja ma inny impuls przy ziemi i w próżni', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Różnica między Merlinem 1D a jego wersją próżniową to 37 sekund impulsu — uzyskane wyłącznie przez powiększenie dyszy do rozszerzenia 165:1. Ta sama komora spalania, to samo paliwo, inny kształt wylotu i o dwanaście procent lepszy wynik.',
        zrodlo: Z.wikiMerlin,
      },
    ],
    os: [
      { data: '2013-09', tytul: 'Merlin 1D wchodzi do służby', opis: 'Wersja o najwyższym impulsie wśród amerykańskich silników na węglowodory.', waga: 2 },
    ],
    powiazane: [
      { id: 'delta-v', powod: 'to on rozstrzyga, ile delta-v da się wycisnąć z zabranego paliwa' },
      { id: 'merlin', powod: 'jego wersja próżniowa trzyma rekord wśród silników węglowodorowych' },
      { id: 'raptor', powod: 'osiąga podobny impuls przy zupełnie innym paliwie' },
      { id: 'metaloks-i-keroloks', powod: 'wybór paliwa wpływa na tę wartość bezpośrednio' },
    ],
    zrodla: [Z.wikiMerlin, Z.wikiRaptor, Z.nasaImpuls],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'metaloks-i-keroloks',
    typ: 'pojecie',
    nazwa: 'Metaloks i keroloks',
    aka: ['metalox', 'kerolox', 'metan kontra nafta'],
    krotki: 'Dwa paliwa rakietowe SpaceX: nafta w Falconach, metan w Starshipie — i cała różnica bierze się z Marsa.',
    tresc: [
      'Keroloks to nafta lotnicza RP-1 z ciekłym tlenem — paliwo [[merlin|Merlina]] i [[kestrel|Kestrela]], czyli wszystkich rakiet rodziny Falcon. Metaloks to ciekły metan z ciekłym tlenem, na którym pracuje [[raptor|Raptor]] w [[starship|Starshipie]].',
      'Metan wybrano z powodu, który nie ma nic wspólnego z osiągami na Ziemi: da się go wyprodukować na Marsie z dwutlenku węgla z atmosfery i wody z gruntu, w reakcji Sabatiera. To jedyny scenariusz, w którym rakieta wraca stamtąd bez ciągnięcia paliwa powrotnego z Ziemi.',
      'Jest też powód bliższy: metan spala się czyściej i nie zostawia w silniku osadu węglowego, co bezpośrednio pracuje na [[reuzywalnosc|reużywalność]]. Nafta zostawia sadzę, którą przy częstych relotach trzeba usuwać.',
      'Cena wyboru jest w gęstości. Metan trzeba chłodzić głębiej i zajmuje więcej miejsca, więc zbiorniki są większe przy tej samej masie paliwa. Przy [[falcon-9|Falconie 9]], który nie leci na Marsa, ta wymiana nie miałaby sensu.',
    ],
    fakty: [
      { etykieta: 'Keroloks', wartosc: 'nafta RP-1 i ciekły tlen — rodzina Falcon', pewnosc: 'potwierdzone' },
      { etykieta: 'Metaloks', wartosc: 'ciekły metan i ciekły tlen — Starship', pewnosc: 'potwierdzone' },
      { etykieta: 'Powód wyboru metanu', wartosc: 'produkcja na Marsie w reakcji Sabatiera', pewnosc: 'potwierdzone' },
      { etykieta: 'Zysk praktyczny', wartosc: 'czystsze spalanie, brak osadu węglowego', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Paliwo Starshipa wybrano ze względu na Marsa, nie na Ziemię. Metan da się tam wytworzyć z atmosfery i wody gruntowej — a bez tego rakieta musiałaby zabrać paliwo powrotne ze sobą, co przy tych odległościach przekreśla cały pomysł.',
        zrodlo: Z.wikiRaptor,
      },
    ],
    os: [
      { data: '2016-09-25', tytul: 'Pierwsze odpalenie Raptora', opis: 'Metaloks wchodzi do programu SpaceX.', waga: 2 },
    ],
    powiazane: [
      { id: 'raptor', powod: 'pracuje na metaloksie' },
      { id: 'merlin', powod: 'pracuje na keroloksie' },
      { id: 'reuzywalnosc', powod: 'czystsze spalanie skraca przygotowanie do kolejnego lotu' },
      { id: 'impuls-wlasciwy', powod: 'wybór paliwa wpływa na tę wartość bezpośrednio' },
    ],
    zrodla: [Z.wikiRaptor, Z.wikiMerlin, Z.spacexPrzewodnik, Z.spacexStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'dlawienie',
    typ: 'pojecie',
    nazwa: 'Dławienie ciągu',
    aka: ['throttling', 'regulacja ciągu'],
    krotki: 'Zdolność silnika do pracy poniżej pełnej mocy — bez niej lądowanie rakiety byłoby niemożliwe.',
    tresc: [
      'Większość silników rakietowych albo pracuje, albo nie. Dławienie oznacza możliwość płynnego zejścia poniżej pełnego ciągu — i jest warunkiem, bez którego [[reuzywalnosc|odzysk członu]] nie miałby jak działać.',
      'Powód jest arytmetyczny. Pusty człon [[falcon-9|Falcona 9]] waży kilkadziesiąt razy mniej niż zatankowany, a pojedynczy [[merlin|Merlin]] daje 845 kN ciągu. Na pełnej mocy jeden silnik nie wyhamowałby lądującego członu, tylko go przyspieszył w górę. Stąd [[hamowania|hamowanie lądowania]] wykonuje się na jednym silniku, mocno zdławionym.',
      'Ta sama zdolność pozwala przechodzić przez obszar największych obciążeń aerodynamicznych w drodze w górę — rakieta przyciąga ciąg, żeby nie przekroczyć wytrzymałości konstrukcji, a potem znów go dodaje.',
      '[[raptor|Raptor]] dziedziczy tę cechę i rozszerza: [[super-heavy|Super Heavy]] steruje powrotem, odpalając część z trzydziestu trzech silników, a nie wszystkie naraz.',
    ],
    fakty: [
      { etykieta: 'Czym jest', wartosc: 'praca silnika poniżej pełnego ciągu', pewnosc: 'potwierdzone' },
      { etykieta: 'Po co', wartosc: 'lądowanie członu i przejście przez maksymalne obciążenia aerodynamiczne', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciąg jednego Merlina', wartosc: '845 kN przy ziemi', pewnosc: 'potwierdzone' },
      { etykieta: 'Hamowanie lądowania', wartosc: '1 silnik, mocno zdławiony', pewnosc: 'potwierdzone' },
      { etykieta: 'Zakres dławienia Merlina', wartosc: 'od 190 000 do 108 300 funtów siły, czyli do 57 procent', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Lądujący człon Falcona 9 jest tak lekki, że pojedynczy silnik na pełnej mocy nie wyhamowałby go, tylko podniósł z powrotem w górę. Cała sztuka lądowania polega na tym, żeby silnik pracował znacznie poniżej swoich możliwości.',
        zrodlo: Z.wikiLadowania,
      },
    ],
    os: [
      { data: '2015-12-21', tytul: 'Pierwsze lądowanie', opis: 'Zdławiony silnik sprowadza człon do zera na betonie.', waga: 3 },
    ],
    powiazane: [
      { id: 'hamowania', powod: 'hamowanie lądowania wymaga mocno zdławionego silnika' },
      { id: 'merlin', powod: 'jego zdolność do dławienia umożliwia odzysk członu' },
      { id: 'reuzywalnosc', powod: 'warunek techniczny całej idei' },
      { id: 'super-heavy', powod: 'steruje powrotem, odpalając część silników zamiast wszystkich' },
    ],
    zrodla: [Z.wikiLadowania, Z.wikiMerlin, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'chlodzenie-regeneracyjne',
    typ: 'pojecie',
    nazwa: 'Chłodzenie regeneracyjne',
    aka: ['regenerative cooling'],
    krotki: 'Paliwo płynie kanałami w ściance komory, zanim trafi do spalania — chłodzi silnik i samo się przy tym podgrzewa.',
    tresc: [
      'Komora spalania silnika rakietowego pracuje w temperaturach, które stopiłyby każdy metal, z jakiego dałoby się ją zbudować. Chłodzenie regeneracyjne rozwiązuje to, przepuszczając paliwo kanałami w ściance, zanim trafi ono do wtrysku. Ścianka oddaje ciepło, paliwo je zabiera i wchodzi do komory już podgrzane — nic nie jest tracone. Pomaga w tym fakt, że paliwo jest [[kriogenika|kriogeniczne]], czyli wchodzi do kanałów o temperaturze liczonej w setkach stopni poniżej zera.',
      'Alternatywą jest chłodzenie ablacyjne: wykładzina, która spala się kontrolowanie i ubywa z każdą sekundą pracy. Tak działał [[merlin|Merlin 1A]] z dyszą z kompozytu węglowego. Silnik jednorazowy może tak pracować; silnik przeznaczony do [[reuzywalnosc|wielokrotnego użytku]] nie.',
      'Przejście na chłodzenie regeneracyjne w wersji 1C miało nieoczekiwany skutek uboczny. Po wyłączeniu silnik jeszcze przez moment dopala paliwo pozostałe w kanałach, a ten resztkowy ciąg przy [[falcon-1-lot-3|trzecim locie Falcona 1]] popchnął pierwszy stopień na drugi po rozdzieleniu. Poprawa konstrukcji stworzyła awarię, której wcześniejsza wersja mieć nie mogła.',
      'W [[raptor|Raptorze 3]] rozwiązanie poszło dalej: kanały chłodzące schowano w samym korpusie, dzięki czemu silnik pozbył się większości zewnętrznego oprzyrządowania.',
    ],
    fakty: [
      { etykieta: 'Zasada', wartosc: 'paliwo chłodzi ściankę komory przed wtryskiem', pewnosc: 'potwierdzone' },
      { etykieta: 'Alternatywa', wartosc: 'chłodzenie ablacyjne — wykładzina ubywa z każdą sekundą', pewnosc: 'potwierdzone' },
      { etykieta: 'Merlin 1A', wartosc: 'dysza ablacyjna z kompozytu węglowego', pewnosc: 'potwierdzone' },
      { etykieta: 'Skutek uboczny', wartosc: 'resztkowy ciąg po wyłączeniu — przyczyna awarii przy locie 3 Falcona 1', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rozwiązanie, które umożliwiło wielokrotne użycie silnika, zniszczyło trzecią rakietę firmy. Po wyłączeniu Merlin 1C jeszcze chwilę dopalał paliwo w kanałach chłodzących, a ten resztkowy ciąg dogonił drugi stopień po rozdzieleniu.',
        zrodlo: Z.wikiFalcon1,
      },
    ],
    os: [
      { data: '2008-08-03', tytul: 'Awaria przy locie 3', opis: 'Resztkowy ciąg chłodzonego regeneracyjnie silnika powoduje zderzenie stopni.', waga: 2 },
    ],
    powiazane: [
      { id: 'merlin', powod: 'przeszedł z chłodzenia ablacyjnego na regeneracyjne w wersji 1C' },
      { id: 'falcon-1-lot-3', powod: 'awaria wywołana skutkiem ubocznym tego rozwiązania' },
      { id: 'raptor', powod: 'w wersji 3 kanały schowano w samym korpusie silnika' },
      { id: 'reuzywalnosc', powod: 'warunek, bez którego silnik nie przetrwa wielu odpaleń' },
    ],
    zrodla: [Z.wikiFalcon1, Z.wikiMerlin, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'gimbal',
    typ: 'pojecie',
    nazwa: 'Sterowanie wektorem ciągu',
    aka: ['gimbal', 'zawieszenie kardanowe'],
    krotki: 'Rakieta skręca, przechylając silniki — nie ma sterów, ma zawieszone na przegubach dysze.',
    tresc: [
      'W atmosferze samolot skręca powierzchniami sterowymi opartymi o powietrze. W próżni nie ma o co się oprzeć, a przy starcie powietrze jest zbyt rzadkie i zbyt szybkie, żeby dało się na nim polegać. Rakieta skręca więc inaczej: przechylając silniki na przegubach kardanowych i kierując strumień spalin lekko w bok.',
      'W [[super-heavy|Super Heavy]] takie zawieszenie ma trzynaście środkowych z trzydziestu trzech [[raptor|Raptorów]]. Pozostałe dwadzieścia stoi nieruchomo i tylko pcha.',
      'Dokładność tego układu rozstrzyga o [[hamowania|lądowaniu członu]]: rakieta schodząca ogonem w dół jest z natury niestabilna i utrzymuje pion wyłącznie ciągłą korektą kąta silnika. Uzupełniają go [[siatki-aerodynamiczne|siatki aerodynamiczne]], które działają tam, gdzie powietrze już coś daje.',
      'To rozwiązanie ma też cenę: każdy przechylony silnik traci część ciągu na składową boczną, która nie pcha rakiety w górę. Dlatego przechyla się tylko tyle silników, ile trzeba.',
    ],
    fakty: [
      { etykieta: 'Zasada', wartosc: 'skręcanie przez przechylanie silników na przegubach', pewnosc: 'potwierdzone' },
      { etykieta: 'Super Heavy', wartosc: '13 z 33 silników na zawieszeniu kardanowym', pewnosc: 'potwierdzone' },
      { etykieta: 'Po co', wartosc: 'sterowanie w próżni i utrzymanie pionu przy lądowaniu', pewnosc: 'potwierdzone' },
      { etykieta: 'Koszt', wartosc: 'przechylony silnik traci część ciągu na składową boczną', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'Z trzydziestu trzech silników Super Heavy tylko trzynaście środkowych da się przechylać. Dwadzieścia zewnętrznych stoi nieruchomo — sterowanie największą rakietą w historii opiera się na mniej niż połowie jej silników.',
        zrodlo: Z.wikiStarship,
      },
    ],
    os: [
      { data: '2015-12-21', tytul: 'Lądowanie na sterowaniu wektorem ciągu', opis: 'Człon utrzymuje pion do samego przyziemienia.', waga: 2 },
    ],
    powiazane: [
      { id: 'super-heavy', powod: 'trzynaście jego silników ma zawieszenie kardanowe' },
      { id: 'siatki-aerodynamiczne', powod: 'uzupełniają sterowanie tam, gdzie powietrze już działa' },
      { id: 'hamowania', powod: 'utrzymanie pionu przy lądowaniu zależy wprost od tego układu' },
      { id: 'raptor', powod: 'to jego dysze są przechylane' },
    ],
    zrodla: [Z.wikiStarship, Z.wikiLadowania, Z.spacexPrzewodnik, Z.spacexStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'oslona-termiczna',
    typ: 'technologia',
    nazwa: 'Osłona termiczna',
    aka: ['heat shield', 'płytki ceramiczne'],
    krotki: 'Warstwa, która ma przetrwać wejście w atmosferę — i element rozstrzygający, czy Starship poleci ponownie za dni czy za miesiące.',
    tresc: [
      'Pojazd wracający z orbity musi przetrwać [[wejscie-atmosferyczne|wejście w atmosferę]], w którym sprężane przed nim powietrze rozgrzewa się do tysięcy stopni. [[falcon-9|Falcon 9]] nie ma osłony i radzi sobie [[hamowania|strumieniem spalin]], ale wraca z prędkości znacznie niższej niż orbitalna.',
      '[[starship|Starship]] takiej możliwości nie ma — wraca z pełnej prędkości orbitalnej, więc potrzebuje osłony na całej dolnej powierzchni. Stanowią ją płytki ceramiczne, a pod nimi kadłub ze [[starship|stali nierdzewnej]], która wytrzymuje znacznie wyższe temperatury niż kompozyt czy aluminium.',
      'To ten element, a nie silniki, rozstrzyga o szybkim relocie. Przy [[starship-lot-4|locie 4]] statek doleciał z nadpaloną klapą sterową, przy [[starship-lot-6|locie 6]] program celowo zmniejszył ochronę na części powierzchni, żeby sprawdzić granicę.',
      'Dopiero [[starship-lot-13|lot 13]] w lipcu 2026 dał pierwsze zdjęcia kompletnej osłony po locie — statek wodował nienaruszony i dało się ją obejrzeć w całości. Do tego momentu program oceniał stan osłony wyłącznie z obrazu w trakcie lotu.',
    ],
    fakty: [
      { etykieta: 'Zadanie', wartosc: 'przetrwanie wejścia w atmosferę z prędkości orbitalnej', pewnosc: 'potwierdzone' },
      { etykieta: 'Budowa w Starshipie', wartosc: 'płytki ceramiczne na kadłubie ze stali nierdzewnej', pewnosc: 'potwierdzone' },
      { etykieta: 'Falcon 9', wartosc: 'nie ma osłony — chroni go hamowanie silnikami', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsze oględziny po locie', wartosc: 'lot 13, 24 lipca 2026', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przez trzynaście lotów testowych program nie widział ani razu całej osłony termicznej po powrocie — statki albo ginęły, albo tonęły. Pierwsze takie zdjęcia przyniósł dopiero lot 13, i to one, a nie wypuszczone satelity, były jego najcenniejszym wynikiem.',
        zrodlo: Z.cnbcLot13,
      },
    ],
    os: [
      { data: '2024-06-06', tytul: 'Nadpalona klapa przy locie 4', opis: 'Statek dolatuje z widocznym uszkodzeniem powierzchni sterowej.', waga: 2 },
      { data: '2026-07-24', tytul: 'Pierwsze oględziny po locie', opis: 'Nienaruszony statek daje pierwsze zdjęcia kompletnej osłony.', waga: 3 },
    ],
    powiazane: [
      { id: 'wejscie-atmosferyczne', powod: 'faza, dla której istnieje' },
      { id: 'starship', powod: 'element rozstrzygający o jego szybkim relocie' },
      { id: 'starship-lot-13', powod: 'pierwszy lot, po którym dało się ją obejrzeć w całości' },
      { id: 'starship-lot-4', powod: 'lot, przy którym nadpaliła się klapa sterowa' },
      { id: 'reuzywalnosc', powod: 'jej stan decyduje, czy pojazd leci znowu za dni czy za miesiące' },
    ],
    status: 'w rozwoju',
    zrodla: [Z.cnbcLot13, Z.wikiStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'tankowanie-orbitalne',
    typ: 'pojecie',
    nazwa: 'Tankowanie orbitalne',
    aka: ['orbital refuelling', 'przekazywanie paliwa na orbicie'],
    krotki: 'Przelewanie paliwa między statkami na orbicie — niezademonstrowane w skali, której wymaga lądowanie na Księżycu.',
    tresc: [
      'Z [[rownanie-ciolkowskiego|równania rakietowego]] wynika, że rakieta, która wynosi sama siebie na orbitę, zużywa na to prawie całe paliwo. Żeby polecieć dalej — na Księżyc albo na Marsa — musi zatankować już po wyjściu na orbitę. To jest cała idea tankowania orbitalnego.',
      'Problem nie leży w pomyśle, tylko w fizyce cieczy w stanie nieważkości. Paliwo nie opada na dno zbiornika, tylko unosi się w nim swobodnie, więc trzeba je najpierw czymś dociskać do wylotu. Do tego dochodzą straty przez odparowanie i szczelność połączenia przy temperaturach [[kriogenika|kriogenicznych]] — a [[metaloks-i-keroloks|metan i tlen]] są cieczą tylko głęboko poniżej zera.',
      'Dla [[hls-artemis|lądownika Artemis]] NASA szacuje, że jedna misja lądowania wymaga około ośmiu do dziesięciu startów [[starship|Starshipa]] — tankowców napełniających zbiornikowiec, z którego dopiero zatankuje lądownik. Biuro Inspektora Generalnego NASA wskazuje to jako główne ryzyko całego programu.',
      'Przekazywanie paliwa w tej skali nie zostało jeszcze zademonstrowane. To jedna z niewielu rzeczy w tym programie, których nie da się obejść pracowitością — albo zadziała, albo harmonogram [[hls-artemis|powrotu na Księżyc]] przesunie się kolejny raz.',
    ],
    fakty: [
      { etykieta: 'Po co', wartosc: 'lot poza orbitę okołoziemską wymaga zatankowania po starcie', pewnosc: 'potwierdzone' },
      { etykieta: 'Główna trudność', wartosc: 'ciecz w nieważkości nie opada na dno zbiornika', pewnosc: 'potwierdzone' },
      { etykieta: 'Starty na jedno lądowanie', wartosc: 'ok. 8–10 lotów Starshipa', stanNa: '2026-03', pewnosc: 'szacunkowe' },
      { etykieta: 'Stan', wartosc: 'niezademonstrowane w wymaganej skali', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Żeby postawić ludzi na Księżycu, Starship musi wcześniej wystartować osiem do dziesięciu razy — wyłącznie po to, żeby przelać paliwo do innego Starshipa czekającego na orbicie. Lądowanie to ostatni lot z serii, nie pierwszy.',
        zrodlo: Z.oigHls,
      },
    ],
    os: [
      { data: '2026-03', tytul: 'Raport Inspektora Generalnego', opis: 'NASA OIG wskazuje tankowanie orbitalne jako główne ryzyko programu Artemis.', waga: 3 },
    ],
    powiazane: [
      { id: 'hls-artemis', powod: 'bez tego cały program lądowania nie działa' },
      { id: 'starship', powod: 'to on ma pełnić rolę tankowca' },
      { id: 'delta-v', powod: 'tankowanie na orbicie omija ograniczenie równania rakietowego' },
      { id: 'autogeniczne-cisnienie', powod: 'ten sam problem utrzymania ciśnienia w zbiorniku, w trudniejszych warunkach' },
    ],
    zrodla: [Z.oigHls, Z.wikiStarship, Z.spacexStarship],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'dokowanie-i-cumowanie',
    typ: 'pojecie',
    nazwa: 'Dokowanie i cumowanie',
    aka: ['docking', 'berthing'],
    krotki: 'Dwa sposoby przyłączenia statku do stacji: jeden robi statek sam, przy drugim sięga po niego ramię.',
    tresc: [
      'Dokowanie to samodzielne wejście statku w złącze stacji — pojazd zbliża się, wyrównuje i łączy własnym napędem. Cumowanie wygląda inaczej: statek zawisa nieruchomo w pobliżu, a ramię stacji sięga po niego, chwyta i dostawia do portu.',
      '[[dragon-1|Dragon 1]] był cumowany. Podczas [[cots-demo-2|lotu demonstracyjnego]] w maju 2012 roku chwyciło go ramię Canadarm2 i przyłączyło do portu — dlatego określenie „zadokował" jest przy tym locie nieścisłe, choć powszechne.',
      '[[crew-dragon|Dragon 2]] dokuje samodzielnie, ze złączem zgodnym ze standardem IDSS i z możliwością przejęcia sterowania przez załogę. To samo dotyczy jego wersji towarowej, [[cargo-dragon-2|Cargo Dragona]].',
      'Różnica nie jest kosmetyczna. Cumowanie wymaga obecności załogi na stacji i operatora ramienia, dokowanie nie. Przy statku, który ma dowozić ludzi, samodzielne dokowanie jest warunkiem, a nie udogodnieniem — także dlatego, że kapsuła musi umieć odlecieć sama w razie ewakuacji.',
    ],
    fakty: [
      { etykieta: 'Dokowanie', wartosc: 'statek łączy się ze stacją własnym napędem', pewnosc: 'potwierdzone' },
      { etykieta: 'Cumowanie', wartosc: 'ramię stacji chwyta statek i dostawia go do portu', pewnosc: 'potwierdzone' },
      { etykieta: 'Dragon 1', wartosc: 'cumowany ramieniem Canadarm2', pewnosc: 'potwierdzone' },
      { etykieta: 'Dragon 2', wartosc: 'dokuje samodzielnie, złącze zgodne z IDSS', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Zdanie „Dragon zadokował do stacji" jest przy locie z 2012 roku nieścisłe, choć powtarza je większość relacji. Statek zawisł nieruchomo, a ramię stacji po niego sięgnęło — samodzielne dokowanie przyszło dopiero z następną generacją, osiem lat później.',
        zrodlo: Z.wikiDragon1,
      },
    ],
    os: [
      { data: '2012-05-25', tytul: 'Pierwsze cumowanie', opis: 'Ramię stacji przyłącza Dragona 1 do portu cumowniczego.', waga: 3 },
      { data: '2020-05-30', tytul: 'Pierwsze dokowanie z załogą', opis: 'Crew Dragon łączy się ze stacją samodzielnie.', waga: 3 },
    ],
    powiazane: [
      { id: 'dragon-1', powod: 'był cumowany, nie dokował' },
      { id: 'crew-dragon', powod: 'dokuje samodzielnie, z możliwością przejęcia sterowania' },
      { id: 'cots-demo-2', powod: 'lot, przy którym odbyło się pierwsze cumowanie' },
      { id: 'cargo-dragon-2', powod: 'wersja towarowa, która również dokuje samodzielnie' },
    ],
    zrodla: [Z.wikiDragon1, Z.wikiDragon2],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'okno-startowe',
    typ: 'pojecie',
    nazwa: 'Okno startowe',
    aka: ['launch window', 'hold'],
    krotki: 'Przedział czasu, w którym start ma sens — poza nim rakieta nie doleci tam, gdzie miała.',
    tresc: [
      'Rakieta nie startuje wtedy, kiedy jest gotowa, tylko wtedy, kiedy pozwala na to geometria. Żeby dogonić stację kosmiczną, trzeba wystartować w momencie, gdy jej płaszczyzna orbity przechodzi nad stanowiskiem — inaczej zmiana płaszczyzny pochłonęłaby [[delta-v|delta-v]], której rakieta nie ma.',
      'Okno bywa krótkie. Przy lotach na stację mierzy się je czasem w sekundach — to tak zwane okno chwilowe, w którym opóźnienie o minutę oznacza przełożenie startu o dobę.',
      'W trakcie odliczania zespół może je wstrzymać, żeby rozwiązać problem — to wstrzymanie mieści się jeszcze w oknie. Jeśli czas się skończy, start zostaje [[scrub-i-nominal|odwołany]] i próbuje się następnego dnia.',
      'Przy [[polaris-dawn|lotach na nietypowe orbity]] i przy [[fram2|orbitach biegunowych]] warunki są jeszcze ciaśniejsze, bo dochodzą ograniczenia pogodowe w strefie wodowania — [[ax-1|misja Ax-1]] spędziła przez nie na stacji sześć dni więcej, niż planowano.',
    ],
    fakty: [
      { etykieta: 'Czym jest', wartosc: 'przedział czasu, w którym start osiąga cel', pewnosc: 'potwierdzone' },
      { etykieta: 'Przyczyna', wartosc: 'geometria orbity celu względem stanowiska', pewnosc: 'potwierdzone' },
      { etykieta: 'Okno chwilowe', wartosc: 'liczone w sekundach — spóźnienie oznacza dobę zwłoki', pewnosc: 'potwierdzone' },
      { etykieta: 'Wstrzymanie odliczania', wartosc: 'mieści się w oknie; odwołanie kończy próbę na dany dzień', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przy locie na stację kosmiczną okno startowe bywa liczone w sekundach. Rakieta warta dziesiątki milionów dolarów, gotowa do lotu i zatankowana, zostaje na ziemi przez kolejną dobę, jeśli spóźni się o minutę.',
        zrodlo: Z.nasaScrub,
      },
    ],
    os: [
      { data: '2022-04-25', tytul: 'Wydłużony pobyt Ax-1', opis: 'Pogoda w strefie wodowania przedłuża misję o sześć dni.', waga: 1 },
    ],
    powiazane: [
      { id: 'scrub-i-nominal', powod: 'wyczerpanie okna kończy się odwołaniem startu' },
      { id: 'delta-v', powod: 'okno wynika wprost z kosztu zmiany płaszczyzny orbity' },
      { id: 'ax-1', powod: 'pogoda w strefie wodowania przedłużyła jej pobyt o sześć dni' },
      { id: 'kadencja-startow', powod: 'wąskie okna ograniczają tempo, jakie da się utrzymać' },
    ],
    zrodla: [Z.nasaScrub, Z.wikiAx1],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'nogi-ladownicze',
    typ: 'technologia',
    nazwa: 'Nogi lądownicze',
    aka: ['landing legs', 'podwozie rakiety'],
    krotki: 'Cztery nogi rozkładane przed przyziemieniem — i masa, którą Starship postanowił zostawić na ziemi.',
    tresc: [
      'Człon [[falcon-9|Falcona 9]] rozkłada przed przyziemieniem cztery nogi, które amortyzują uderzenie i utrzymują rakietę w pionie po wyłączeniu silnika. Bez nich [[hamowania|hamowanie lądowania]] sprowadziłoby człon do zera, a potem przewróciłoby go na bok.',
      'Nogi jadą jednak w kosmos i wracają, nie robiąc po drodze nic. Ich masa odejmuje się wprost od ładunku: przy locie z odzyskiem [[falcon-9|Falcon 9]] wynosi 17 500 kg zamiast 22 800, a nogi są jedną ze składowych tej różnicy.',
      'Dlatego [[super-heavy|Super Heavy]] nóg nie ma wcale. Zamiast wozić podwozie tam i z powrotem, zostawia się je na ziemi w postaci [[stage-zero|dwóch ramion wieży]], które chwytają wracający człon za czopy pod [[siatki-aerodynamiczne|siatkami aerodynamicznymi]].',
      'To jest ta sama zasada, która przewija się przez cały ten program: usuwać część, a nie ją ulepszać. Tak samo zniknęły [[autogeniczne-cisnienie|butle z helem]] i tak samo [[tesla-vision|Tesla usunęła radar]] z samochodów.',
    ],
    fakty: [
      { etykieta: 'Falcon 9', wartosc: 'cztery nogi rozkładane przed przyziemieniem', pewnosc: 'potwierdzone' },
      { etykieta: 'Koszt masowy', wartosc: '17 500 kg ładunku z odzyskiem wobec 22 800 kg bez', pewnosc: 'potwierdzone' },
      { etykieta: 'Super Heavy', wartosc: 'brak nóg — chwytają go ramiona wieży', pewnosc: 'potwierdzone' },
      { etykieta: 'Punkt chwytu', wartosc: 'czopy umieszczone pod siatkami aerodynamicznymi', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Podwozie rakiety leci w kosmos i wraca, nie robiąc po drodze nic poza zabieraniem miejsca na ładunek. Super Heavy rozwiązuje to najprościej, jak się da: nóg nie ma, a ich pracę wykonują dwa ramiona, które przez cały lot stoją na ziemi.',
        zrodlo: Z.wikiStartyStarship,
      },
    ],
    os: [
      { data: '2015-12-21', tytul: 'Pierwsze lądowanie na nogach', opis: 'Człon Falcona 9 staje pionowo na własnym podwoziu.', waga: 3 },
      { data: '2024-10-13', tytul: 'Pierwsze lądowanie bez nóg', opis: 'Ramiona wieży chwytają Super Heavy, który podwozia nie ma.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'jego człon ląduje na czterech nogach' },
      { id: 'super-heavy', powod: 'zrezygnował z nich na rzecz chwytu przez wieżę' },
      { id: 'stage-zero', powod: 'ramiona wieży przejmują pracę podwozia' },
      { id: 'koszt-kilograma', powod: 'masa podwozia odejmuje się wprost od ładunku' },
      { id: 'reuzywalnosc', powod: 'element, bez którego odzysk na lądzie nie byłby możliwy' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiLadowania, Z.wikiStartyStarship, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'orbita-biegunowa',
    typ: 'pojecie',
    nazwa: 'Orbita biegunowa',
    aka: ['polar orbit', 'orbita polarna'],
    krotki: 'Orbita przechodząca nad biegunami — satelita widzi z niej całą planetę, bo Ziemia obraca się pod nim.',
    tresc: [
      'Satelita na orbicie równikowej krąży wciąż nad tym samym pasem Ziemi. Na orbicie biegunowej przechodzi nad biegunami, a planeta obraca się pod nim — więc z każdym okrążeniem przelatuje nad innym południkiem i z czasem widzi całą powierzchnię.',
      'To dlatego korzystają z niej satelity obserwacyjne, meteorologiczne i rozpoznawcze. Szczególnym przypadkiem jest [[sso|orbita heliosynchroniczna]], na której do przechodzenia nad biegunami dochodzi jeszcze stała pora lokalna przelotu.',
      'Cena jest energetyczna. Startując na wschód, rakieta dostaje za darmo prędkość obrotu Ziemi — około 460 metrów na sekundę na równiku. Lecąc na północ albo południe, nie dostaje z tego nic i musi wypracować całą prędkość sama. Dlatego takie loty odbywają się z [[vandenberg|Vandenberg]], nie z Florydy.',
      'Lotów załogowych po takiej orbicie przez sześćdziesiąt lat praktycznie nie było. Rekord nachylenia ustanowiła Wostok 6 w 1963 roku i przetrwał do 2025, kiedy [[fram2|misja Fram2]] weszła na orbitę o nachyleniu 90,01 stopnia.',
    ],
    fakty: [
      { etykieta: 'Czym jest', wartosc: 'orbita przechodząca nad biegunami', pewnosc: 'potwierdzone' },
      { etykieta: 'Zaleta', wartosc: 'satelita z czasem przelatuje nad całą powierzchnią Ziemi', pewnosc: 'potwierdzone' },
      { etykieta: 'Koszt', wartosc: 'brak darmowej prędkości z obrotu Ziemi', pewnosc: 'potwierdzone' },
      { etykieta: 'Miejsce startu w USA', wartosc: 'Vandenberg, nie Floryda', pewnosc: 'potwierdzone' },
      { etykieta: 'Rekord załogowy', wartosc: 'Fram2, nachylenie 90,01°', stanNa: '2025-04', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rakieta startująca na wschód dostaje w prezencie prędkość obrotu Ziemi — na równiku około 460 metrów na sekundę. Lecąc nad biegun, nie dostaje z tego nic i musi wypracować całą prędkość silnikami. Ten sam ładunek kosztuje więc więcej paliwa wyłącznie z powodu kierunku.',
        zrodlo: Z.wikiSso,
      },
    ],
    os: [
      { data: '2025-04-01', tytul: 'Pierwszy załogowy lot biegunowy', opis: 'Fram2 wchodzi na orbitę o nachyleniu 90,01 stopnia.', waga: 3 },
    ],
    powiazane: [
      { id: 'sso', powod: 'jej szczególny przypadek, ze stałą porą przelotu' },
      { id: 'fram2', powod: 'pierwszy załogowy lot po takiej orbicie' },
      { id: 'vandenberg', powod: 'baza, z której się na nią startuje' },
      { id: 'delta-v', powod: 'brak darmowej prędkości obrotu Ziemi podnosi koszt wejścia' },
    ],
    zrodla: [Z.wikiSso, Z.wikiFram2, Z.nasaOrbity, Z.spacexStarty],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'smallsat',
    typ: 'pojecie',
    nazwa: 'Małe satelity',
    aka: ['smallsat', 'cubesat', 'nanosatelity'],
    krotki: 'Satelity liczone w kilogramach zamiast w tonach — klasa, którą tanie wynoszenie wpuściło na orbitę.',
    tresc: [
      'Przez większość ery kosmicznej satelita był urządzeniem wielkości samochodu, budowanym latami przez państwo albo wielki koncern. Małe satelity odwracają ten model: ważą od kilku do kilkuset kilogramów, powstają z gotowych podzespołów i kosztują ułamek tamtej kwoty.',
      'Warunkiem ich istnienia jest sposób dostania się na orbitę. Osobna rakieta dla ładunku ważącego dziesięć kilogramów nie ma sensu ekonomicznego — dlatego lecą razem, [[transporter|lotami współdzielonymi]], po kilkadziesiąt albo ponad sto naraz.',
      'Typowym celem jest [[sso|orbita heliosynchroniczna]], bo większość tych satelitów obserwuje Ziemię i potrzebuje stałych warunków oświetlenia.',
      'Ta klasa urządzeń jest bezpośrednią konsekwencją spadku [[koszt-kilograma|kosztu kilograma na orbicie]]. Jest też jednym z powodów, dla których [[zespol-kesslera|zagęszczenie niskiej orbity]] rośnie szybciej, niż zakładano dekadę temu.',
    ],
    fakty: [
      { etykieta: 'Masa', wartosc: 'od kilku do kilkuset kilogramów', pewnosc: 'szacunkowe' },
      { etykieta: 'Sposób wyniesienia', wartosc: 'loty współdzielone, po kilkadziesiąt sztuk naraz', pewnosc: 'potwierdzone' },
      { etykieta: 'Typowa orbita', wartosc: 'heliosynchroniczna', pewnosc: 'potwierdzone' },
      { etykieta: 'Rekord w jednym locie', wartosc: '131 ładunków (Transporter-12)', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Satelita ważący dziesięć kilogramów nie ma szans na własną rakietę — koszt startu byłby wielokrotnie wyższy niż koszt samego urządzenia. Cała ta klasa sprzętu istnieje wyłącznie dlatego, że ktoś sprzedaje miejsce w cudzym locie.',
        zrodlo: Z.wikiTransporter,
      },
    ],
    os: [
      { data: '2025-01', tytul: 'Transporter-12', opis: 'Jeden lot wynosi 131 ładunków należących do różnych właścicieli.', waga: 2 },
    ],
    powiazane: [
      { id: 'transporter', powod: 'program, który wyniósł tę klasę satelitów na orbitę' },
      { id: 'koszt-kilograma', powod: 'ich istnienie jest konsekwencją spadku tej wartości' },
      { id: 'sso', powod: 'typowa orbita docelowa' },
      { id: 'zespol-kesslera', powod: 'ich liczba podnosi zagęszczenie niskiej orbity' },
    ],
    zrodla: [Z.wikiTransporter, Z.wikiKessler],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'wodowanie',
    typ: 'pojecie',
    nazwa: 'Wodowanie',
    aka: ['splashdown', 'powrót na spadochronach'],
    krotki: 'Powrót kapsuły na spadochronach do oceanu — rozwiązanie z epoki Apollo, wciąż najprostsze z możliwych.',
    tresc: [
      'Kapsuła wracająca z orbity nie ma skrzydeł ani silników do lądowania. Po [[wejscie-atmosferyczne|wejściu w atmosferę]] wyhamowuje ją opór powietrza, a ostatnią fazę przejmują spadochrony. Woda jest przy tym miękka i, co ważniejsze, pusta — nie ma nad czym ryzykować.',
      '[[crew-dragon|Crew Dragon]] wraca właśnie tak. [[demo-2|Demo-2]] wodowało na Atlantyku 2 sierpnia 2020 roku — pierwszy raz od misji Apollo 9 w 1969 roku, gdy amerykańska załoga osiadła w tym oceanie. [[crew-1|Crew-1]] wrócił w maju 2021, a [[fram2|Fram2]] na Pacyfiku u wybrzeży Kalifornii.',
      'Alternatywą jest lądowanie na lądzie — tak wracają kapsuły Sojuz, na spadochronach i silniczkach hamujących tuż nad ziemią. Jest celniejsze, ale twardsze i wymaga pustego obszaru, którego Stany na swoim terytorium nie mają.',
      'Trzecią drogą jest [[hamowania|lądowanie na silnikach]], którym wraca człon [[falcon-9|Falcona 9]]. Dla kapsuły z ludźmi na pokładzie ta droga pozostaje niewykorzystana — wymagałaby działającego napędu w ostatniej sekundzie lotu, bez możliwości poprawki.',
    ],
    fakty: [
      { etykieta: 'Zasada', wartosc: 'hamowanie atmosferą, potem spadochrony i wodowanie', pewnosc: 'potwierdzone' },
      { etykieta: 'Spadochrony Dragona', wartosc: 'dwa hamujące i cztery główne', pewnosc: 'potwierdzone' },
      { etykieta: 'Demo-2', wartosc: 'Atlantyk, 2 sierpnia 2020', pewnosc: 'potwierdzone' },
      { etykieta: 'Crew-1', wartosc: 'powrót 2 maja 2021', pewnosc: 'potwierdzone' },
      { etykieta: 'Fram2', wartosc: 'Pacyfik u wybrzeży Kalifornii, kwiecień 2025', pewnosc: 'potwierdzone' },
      { etykieta: 'Alternatywa', wartosc: 'lądowanie na lądzie — tak wracają kapsuły Sojuz', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Między wodowaniem Apollo 9 w 1969 roku a powrotem Demo-2 w 2020 minęło pięćdziesiąt jeden lat, w których żadna amerykańska załoga nie osiadła na Atlantyku. Wahadłowce lądowały na pasie startowym jak samolot, a po nich przyszła dekada przerwy.',
        zrodlo: Z.nasaDemo2,
      },
    ],
    os: [
      { data: '2020-08-02', tytul: 'Powrót Demo-2', opis: 'Pierwsze amerykańskie wodowanie na Atlantyku od 1969 roku.', waga: 3 },
    ],
    powiazane: [
      { id: 'crew-dragon', powod: 'wraca na spadochronach do oceanu' },
      { id: 'wejscie-atmosferyczne', powod: 'faza poprzedzająca otwarcie spadochronów' },
      { id: 'demo-2', powod: 'jej wodowanie zamknęło pięćdziesięcioletnią przerwę' },
      { id: 'hamowania', powod: 'zupełnie inna droga powrotu, stosowana dla członów rakiety' },
    ],
    zrodla: [Z.nasaDemo2, Z.wikiDragon2, Z.spacexDragon],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'interstage',
    typ: 'technologia',
    nazwa: 'Przedział międzystopniowy',
    aka: ['interstage', 'łącznik stopni'],
    krotki: 'Element łączący stopnie rakiety, który musi wytrzymać cały lot, a potem zniknąć w ułamku sekundy.',
    tresc: [
      'Dwa stopnie rakiety łączy przedział międzystopniowy — konstrukcja, która przez całą fazę wznoszenia przenosi obciążenia między nimi, a w chwili rozdzielenia musi puścić natychmiast i bez zacięcia.',
      'W [[falcon-9|Falconie 9]] pierwszy stopień ma 41,2 metra, a z przedziałem 47,7 — czyli sam łącznik zajmuje przeszło sześć metrów. Na jego zewnętrznej powierzchni siedzą [[siatki-aerodynamiczne|siatki aerodynamiczne]], rozkładane po rozdzieleniu.',
      'To element, w którym najłatwiej o awarię, bo działa dokładnie raz i w najbardziej dynamicznym momencie lotu. Przy [[falcon-1-lot-2|drugim locie Falcona 1]] osłona międzystopniowa otarła się o dyszę drugiego stopnia, a przy [[falcon-1-lot-3|trzecim]] stopnie zderzyły się po rozdzieleniu.',
      'W [[starship|Starshipie]] rozwiązanie poszło w inną stronę: rozdzielenie odbywa się w ruchu, przy pracujących silnikach górnego stopnia, przez pierścień z otworami odprowadzającymi spaliny. Nazywa się to rozdzieleniem gorącym i pozwala nie tracić prędkości między odpaleniami.',
    ],
    fakty: [
      { etykieta: 'Zadanie', wartosc: 'przenoszenie obciążeń między stopniami i natychmiastowe puszczenie', pewnosc: 'potwierdzone' },
      { etykieta: 'Falcon 9', wartosc: 'I stopień 41,2 m; z przedziałem 47,7 m', pewnosc: 'potwierdzone' },
      { etykieta: 'Co jest na zewnątrz', wartosc: 'siatki aerodynamiczne', pewnosc: 'potwierdzone' },
      { etykieta: 'Awarie w historii firmy', wartosc: 'loty 2 i 3 Falcona 1', pewnosc: 'potwierdzone' },
      { etykieta: 'Rozdzielenie w Falconie 9', wartosc: 'trzy zatrzaski mechaniczne zwalniane pneumatycznie, bez pirotechniki', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Przedział międzystopniowy Falcona 9 ma przeszło sześć metrów — tyle co miejski autobus. Jego jedynym zadaniem jest wytrzymać kilka minut lotu i puścić w odpowiedniej sekundzie; potem spada razem z pierwszym stopniem i wraca na Ziemię, nie robiąc już nic.',
        zrodlo: Z.wikiFalcon9,
      },
    ],
    os: [
      { data: '2007-03-21', tytul: 'Awaria przy locie 2 Falcona 1', opis: 'Osłona międzystopniowa otarła się o dyszę drugiego stopnia.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'jego przedział ma ponad sześć metrów długości' },
      { id: 'siatki-aerodynamiczne', powod: 'siedzą na jego zewnętrznej powierzchni' },
      { id: 'falcon-1-lot-2', powod: 'awaria wywołana kontaktem osłony z dyszą' },
      { id: 'starship', powod: 'rozwiązuje ten problem inaczej, rozdzieleniem w ruchu' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiFalcon9, Z.wikiFalcon1, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'booster-b1067',
    typ: 'technologia',
    nazwa: 'Booster B1067',
    aka: ['rekordowy człon', 'B1067'],
    krotki: 'Jeden egzemplarz członu nośnego, który poleciał trzydzieści siedem razy — rekord świata w liczbie lotów jednej rakiety.',
    tresc: [
      'B1067 to oznaczenie konkretnego egzemplarza pierwszego stopnia [[falcon-9|Falcona 9]]. Nie jest to typ ani wersja, tylko jedna sztuka sprzętu, która wystartowała, wróciła i poleciała ponownie trzydzieści siedem razy.',
      'Dla porównania: prom kosmiczny Discovery, najbardziej wysłużony pojazd poprzedniej epoki, wykonał trzydzieści dziewięć lotów — przez dwadzieścia siedem lat służby i przy przygotowaniu do każdego lotu liczonym w miesiącach.',
      'Rekord jest tu jednak podwójny i ten drugi jest mniej znany: najbardziej wysłużonym elementem systemu nie jest ten człon, a [[oslona-ladunku|połówka osłony ładunku]] o numerze SN155 z czterdziestoma lotami. Człon nośny ustępuje kawałkowi opakowania.',
      'Znaczenie tego egzemplarza polega na tym, że przesuwa dyskusję o [[reuzywalnosc|reużywalności]] z pytania „czy rakieta wróci" na pytanie „ile razy da się ją wysłać". Pierwsze rozstrzygnięto w 2015 roku, drugie rozstrzyga się do dziś.',
    ],
    fakty: [
      { etykieta: 'Liczba lotów', wartosc: '37', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
      { etykieta: 'Czym jest', wartosc: 'jeden egzemplarz pierwszego stopnia Falcona 9', pewnosc: 'potwierdzone' },
      { etykieta: 'Rekord osłony', wartosc: '40 lotów połówki SN155 — więcej niż ten człon', pewnosc: 'potwierdzone' },
      { etykieta: 'Boostery użyte wielokrotnie', wartosc: '55', stanNa: '2026-09-10', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Rekord tego członu — trzydzieści siedem lotów — jest bliski dorobkowi promu Discovery, który wykonał ich trzydzieści dziewięć. Z tą różnicą, że prom potrzebował na to dwudziestu siedmiu lat i miesięcy przygotowań między lotami.',
        zrodlo: Z.sfnRekord,
      },
    ],
    os: [
      { data: '2026-07-09', tytul: 'Trzydziesty szósty lot', opis: 'Egzemplarz ustanawia kolejny rekord liczby lotów jednego członu.', waga: 3 },
    ],
    powiazane: [
      { id: 'reuzywalnosc', powod: 'najmocniejszy pojedynczy dowód jej działania' },
      { id: 'falcon-9', powod: 'jeden z jego pierwszych stopni' },
      { id: 'oslona-ladunku', powod: 'element o jeszcze dłuższym przebiegu' },
      { id: 'kadencja-startow', powod: 'takie przebiegi umożliwiają dzisiejsze tempo startów' },
    ],
    status: 'aktywne',
    zrodla: [Z.sfnRekord, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'rownanie-ciolkowskiego',
    typ: 'pojecie',
    nazwa: 'Równanie Ciołkowskiego',
    aka: ['rocket equation', 'równanie rakietowe', 'tyrania równania rakietowego'],
    krotki: 'Jedno równanie, z którego wynika, dlaczego rakiety są w dziewięćdziesięciu procentach zbiornikiem paliwa.',
    tresc: [
      'Równanie wiąże trzy wielkości: przyrost prędkości, prędkość wylotową spalin i stosunek masy pełnej do pustej. W zapisie NASA brzmi ono: przyrost prędkości równa się prędkość wylotowa razy logarytm naturalny ze stosunku mas. Ta pierwsza wielkość zależy od konstrukcji silnika i [[metaloks-i-keroloks|rodzaju paliwa]], druga wyłącznie od tego, ile z rakiety stanowi zbiornik.',
      'Kluczem jest ten logarytm. Zysk w prędkości rośnie logarytmicznie, a masa paliwa potrzebna do jego osiągnięcia — wykładniczo. Każdy kolejny kilometr na sekundę kosztuje wielokrotnie więcej niż poprzedni.',
      'Liczby są bezlitosne. Dla [[leo|niskiej orbity]] przy [[delta-v|delta-v]] rzędu 9700 metrów na sekundę i prędkości wylotowej 4500 metrów na sekundę paliwo musi stanowić 88,4 procent masy startowej. NASA podaje własny przykład dla silnika wodorowo-tlenowego o [[impuls-wlasciwy|impulsie właściwym]] 350 sekund: stosunek mas wynosi dziesięć, paliwo to około dziewięćdziesięciu procent masy, a na ładunek zostaje około jednego procenta — i podsumowuje to zdaniem, że rakiety są strasznie nieefektywne i drogie.',
      'Stąd biorą się wszystkie pozostałe decyzje konstrukcyjne: [[stopniowanie|wielostopniowość]], walka o każdy kilogram konstrukcji i to, że [[reuzywalnosc|odzyskiwanie członów]] wymaga zostawienia paliwa na powrót — czyli oddania części tego jednego procenta.',
    ],
    fakty: [
      { etykieta: 'Postać', wartosc: 'przyrost prędkości = prędkość wylotowa × ln(stosunek mas)', pewnosc: 'potwierdzone' },
      { etykieta: 'Publikacja', wartosc: 'Konstantin Ciołkowski, 1903', pewnosc: 'potwierdzone' },
      { etykieta: 'Wcześniejsze wyprowadzenia', wartosc: 'William Moore 1810, Robert Goddard 1912, Hermann Oberth ok. 1920', pewnosc: 'potwierdzone' },
      { etykieta: 'Konsekwencja', wartosc: 'prędkość rośnie logarytmicznie, masa paliwa wykładniczo', pewnosc: 'potwierdzone' },
      { etykieta: 'Na niską orbitę', wartosc: 'paliwo to 88,4 procent masy startowej', pewnosc: 'szacunkowe' },
    ],
    ciekawostki: [
      {
        tekst: 'To samo równanie wyprowadzili niezależnie czterej ludzie: Brytyjczyk William Moore w 1810 roku, Rosjanin Ciołkowski w 1903, Amerykanin Goddard w 1912 i Niemiec Oberth około 1920. Nazwisko przylgnęło do tego, który jako pierwszy użył go do policzenia, czy lot w kosmos jest w ogóle możliwy.',
        zrodlo: Z.wikiCiolkowski,
      },
    ],
    os: [
      { data: '1903', tytul: 'Publikacja Ciołkowskiego', opis: 'Rosyjski nauczyciel matematyki ogłasza równanie i liczy z niego możliwość lotu w kosmos.', waga: 2 },
    ],
    powiazane: [
      { id: 'delta-v', powod: 'wielkość, którą to równanie pozwala policzyć' },
      { id: 'impuls-wlasciwy', powod: 'drugi człon równania, mierzony w sekundach' },
      { id: 'stopniowanie', powod: 'jedyny znany sposób obejścia jego konsekwencji' },
      { id: 'koszt-kilograma', powod: 'to z niego bierze się cena wynoszenia ładunku' },
    ],
    zrodla: [Z.wikiCiolkowski, Z.nasaRownanie],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'stopniowanie',
    typ: 'pojecie',
    nazwa: 'Stopniowanie',
    aka: ['wielostopniowość', 'staging', 'rakieta wielostopniowa'],
    krotki: 'Wyrzucanie pustych zbiorników w locie — jedyna metoda, jaką ludzkość zna na obejście równania rakietowego.',
    tresc: [
      'Z [[rownanie-ciolkowskiego|równania Ciołkowskiego]] wynika, że stosunek masy pełnej do pustej potrzebny do wejścia na [[leo|niską orbitę]] jest większy niż ten, jaki kiedykolwiek osiągnięto w pojedynczym stopniu. Rozwiązaniem jest pozbywanie się tego, co przestało być potrzebne.',
      'Pusty zbiornik i wygaszony silnik to już tylko masa, którą trzeba rozpędzać dalej. Wyrzucenie ich sprawia, że kolejny stopień startuje z lepszym stosunkiem mas — jakby był mniejszą rakietą wystrzeloną z dużej prędkości.',
      'Stopniowanie bywa szeregowe, gdy stopnie stoją jeden na drugim i odpalają po kolei, albo równoległe, gdy pracują jednocześnie i odpadają w locie — tak działał prom kosmiczny i tak działa [[falcon-heavy|Falcon Heavy]] z bocznymi członami. Rakiety orbitalne mają zwykle dwa albo trzy stopnie; startowały i pięciostopniowe, ale powyżej trzech masa i złożoność zjadają zysk.',
      'Rakiet jednostopniowych, zdolnych wejść na orbitę bez odrzucania niczego, nie zbudowano dotąd nigdy. [[starship|Starship]] też jest dwustopniowy — jego nowością nie jest brak stopni, tylko zamiar odzyskania obu.',
    ],
    fakty: [
      { etykieta: 'Powód', wartosc: 'wymagany stosunek mas przekracza możliwy w jednym stopniu', pewnosc: 'potwierdzone' },
      { etykieta: 'Rodzaje', wartosc: 'szeregowe i równoległe', pewnosc: 'potwierdzone' },
      { etykieta: 'Typowa liczba stopni', wartosc: 'dwa albo trzy', pewnosc: 'potwierdzone' },
      { etykieta: 'Rekord', wartosc: 'udane starty rakiet pięciostopniowych', pewnosc: 'potwierdzone' },
      { etykieta: 'Jednostopniowe na orbitę', wartosc: 'nigdy nie zademonstrowane', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Najstarszy znany opis rakiety wielostopniowej pochodzi z czternastowiecznego chińskiego traktatu Huolongjing. Konstrukcja nazywała się smokiem ognistym wychodzącym z wody: rakiety nośne odpalały mniejsze strzały rakietowe tuż przed własnym wypaleniem.',
        zrodlo: Z.wikiStopnie,
      },
    ],
    os: [
      { data: '1350', tytul: 'Pierwszy opis w Huolongjing', opis: 'Chiński traktat przedstawia dwustopniową rakietę odpalającą mniejsze pociski.', waga: 1 },
    ],
    powiazane: [
      { id: 'rownanie-ciolkowskiego', powod: 'to jego konsekwencje wymusiły takie rozwiązanie' },
      { id: 'interstage', powod: 'element łączący stopnie i rozdzielający je w locie' },
      { id: 'falcon-9', powod: 'klasyczny układ dwustopniowy z odzyskiwanym dolnym stopniem' },
      { id: 'falcon-heavy', powod: 'przykład stopniowania równoległego' },
    ],
    zrodla: [Z.wikiStopnie, Z.nasaRownanie],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'predkosc-ucieczki',
    typ: 'pojecie',
    nazwa: 'Prędkość ucieczki',
    aka: ['escape velocity', 'druga prędkość kosmiczna'],
    krotki: 'Prędkość, przy której ciało oddala się od planety na zawsze — dla Ziemi 11,186 kilometra na sekundę.',
    tresc: [
      'Prędkość ucieczki zależy tylko od masy ciała niebieskiego i odległości od jego środka. Dla powierzchni Ziemi NASA podaje 11,186 kilometra na sekundę, czyli ponad czterdzieści tysięcy kilometrów na godzinę. Dla Księżyca jest to 2,38, dla Marsa 5,03, a dla Słońca 617,7 kilometra na sekundę.',
      'Nie należy jej mylić z prędkością orbitalną. Na tej samej wysokości prędkość ucieczki jest większa dokładnie pierwiastek z dwóch razy — około 1,414 raza. Dlatego wejście na [[leo|orbitę]] i opuszczenie Ziemi to dwa zupełnie różne zadania, mimo że różnica wydaje się niewielka.',
      'W dawnej terminologii prędkość orbitalną nazywano pierwszą prędkością kosmiczną, a ucieczki — drugą. Trzecia, potrzebna do opuszczenia Układu Słonecznego z orbity Ziemi, wynosi 42,1 kilometra na sekundę liczone względem Słońca.',
      'Ta różnica jest powodem, dla którego [[tesla-roadster|Roadster]] wystrzelony przez [[falcon-heavy|Falcona Heavy]] krąży wokół Słońca, a nie leci w przestrzeń międzygwiezdną — miał dość prędkości, by uciec Ziemi, ale nie Słońcu.',
    ],
    fakty: [
      { etykieta: 'Ziemia', wartosc: '11,186 km/s (40 270 km/h)', pewnosc: 'potwierdzone' },
      { etykieta: 'Księżyc', wartosc: '2,38 km/s', pewnosc: 'potwierdzone' },
      { etykieta: 'Mars', wartosc: '5,03 km/s', pewnosc: 'potwierdzone' },
      { etykieta: 'Słońce', wartosc: '617,7 km/s', pewnosc: 'potwierdzone' },
      { etykieta: 'Wobec prędkości orbitalnej', wartosc: 'większa pierwiastek z dwóch razy', pewnosc: 'potwierdzone' },
      { etykieta: 'Ucieczka z Układu Słonecznego', wartosc: '42,1 km/s z orbity Ziemi', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Różnica między krążeniem wokół Ziemi a opuszczeniem jej na zawsze to mnożnik 1,414 — pierwiastek z dwóch. Brzmi skromnie, ale w równaniu rakietowym przekłada się na kilkakrotnie większą masę paliwa. Stąd bierze się przepaść między lotem na orbitę a lotem na Marsa.',
        zrodlo: Z.wikiPredkoscUcieczki,
      },
    ],
    os: [
      { data: '2018-02-06', tytul: 'Roadster ucieka Ziemi', opis: 'Falcon Heavy nadaje ładunkowi prędkość ucieczki z Ziemi, lecz nie ze Słońca.', waga: 2 },
    ],
    powiazane: [
      { id: 'delta-v', powod: 'osiągnięcie tej prędkości jest wydatkiem liczonym w jej jednostkach' },
      { id: 'leo', powod: 'orbita wymaga prędkości mniejszej pierwiastek z dwóch razy' },
      { id: 'rownanie-ciolkowskiego', powod: 'przekłada tę różnicę prędkości na masę paliwa' },
      { id: 'tesla-roadster', powod: 'uciekł Ziemi, ale nie Słońcu, i dlatego krąży' },
    ],
    zrodla: [Z.wikiPredkoscUcieczki, Z.nasaZiemia],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'ciag-do-masy',
    typ: 'pojecie',
    nazwa: 'Stosunek ciągu do masy',
    aka: ['thrust-to-weight ratio', 'TWR'],
    krotki: 'Liczba bez jednostki, która rozstrzyga najprostsze pytanie w astronautyce: czy rakieta w ogóle oderwie się od ziemi.',
    tresc: [
      'Stosunek ciągu do masy to ciąg podzielony przez ciężar. Jeśli wynosi mniej niż jeden, rakieta stoi na stanowisku i pali paliwo. Jeśli więcej — rusza, a nadwyżka ponad jedynkę odpowiada przyspieszeniu, jakie faktycznie zyskuje.',
      'Wartość rośnie w trakcie lotu, bo ciąg pozostaje z grubsza stały, a masa maleje z każdą sekundą pracy silników. Prom kosmiczny startował ze stosunkiem 1,3 i dochodził w locie do 3.',
      'Osobno liczy się ten sam stosunek dla samego silnika, bez rakiety. Tu wartości są zupełnie innego rzędu: silnik F-1 z Saturna V miał 94,1, a [[merlin|Merlin 1D]] — od 184 do 199,5, zależnie od źródła. SpaceX w przewodniku dla klientów nie podaje liczby, ale pisze wprost, że jest to najwyższy stosunek ciągu do masy, jaki kiedykolwiek osiągnięto w silniku startowym.',
      'Ta druga liczba tłumaczy, dlaczego [[falcon-9|Falcon 9]] ma dziewięć małych silników zamiast jednego dużego. Lekki silnik można powielić, a powielenie daje [[hamowania|możliwość hamowania]] i odporność na awarię pojedynczej jednostki.',
    ],
    fakty: [
      { etykieta: 'Definicja', wartosc: 'ciąg podzielony przez ciężar; wielkość bezwymiarowa', pewnosc: 'potwierdzone' },
      { etykieta: 'Warunek startu', wartosc: 'wartość większa od jedności', pewnosc: 'potwierdzone' },
      { etykieta: 'Prom kosmiczny', wartosc: '1,3 przy starcie, do 3 w locie', pewnosc: 'potwierdzone' },
      { etykieta: 'Silnik F-1', wartosc: '94,1', pewnosc: 'potwierdzone' },
      { etykieta: 'Merlin 1D', wartosc: '199,5 według jednego źródła, 184 według innego', pewnosc: 'sporne' },
    ],
    ciekawostki: [
      {
        tekst: 'Merlin 1D ma stosunek ciągu do masy blisko 200 — dwukrotnie lepszy niż F-1, który wynosił Saturna V na Księżyc. Rekord nie wziął się z nowej fizyki, tylko z tego, że silnik jest mały i produkowany seryjnie, a nie budowany pojedynczo jak dzieło sztuki.',
        zrodlo: Z.wikiCiag,
      },
    ],
    os: [
      { data: '2013-09-29', tytul: 'Debiut Merlina 1D', opis: 'Wersja silnika o rekordowym stosunku ciągu do masy wchodzi do służby.', waga: 1 },
    ],
    powiazane: [
      { id: 'merlin', powod: 'jego wartość tego stosunku jest jedną z najwyższych w historii' },
      { id: 'impuls-wlasciwy', powod: 'druga liczba opisująca silnik, mierząca oszczędność zamiast siły' },
      { id: 'super-heavy', powod: 'trzydzieści trzy silniki to konsekwencja stawiania na lekkie jednostki' },
      { id: 'rownanie-ciolkowskiego', powod: 'mówi ile prędkości; ten stosunek mówi czy w ogóle wystartuje' },
    ],
    zrodla: [Z.wikiCiag, Z.wikiMerlin, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-13',
  },

  {
    id: 'kriogenika',
    typ: 'pojecie',
    nazwa: 'Kriogenika',
    aka: ['paliwa kriogeniczne', 'cryogenic propellant'],
    krotki: 'Paliwa, które są cieczą tylko poniżej dwustu stopni mrozu — i odparowują, gdy tylko rakieta postoi dłużej na stanowisku.',
    tresc: [
      'Tlen, wodór i metan są w normalnych warunkach gazami. Żeby zmieściły się w zbiorniku rakiety, trzeba je skroplić, a to znaczy schłodzić głęboko poniżej zera. NASA podaje dla ciekłego wodoru około minus 424 stopni Fahrenheita, a dla ciekłego tlenu około minus 298 — w skali Celsjusza jest to mniej więcej minus 253 i minus 183 stopnie.',
      'Stąd bierze się cecha, która rządzi całym harmonogramem lotu: odparowywanie. Ciepło od instalacji pokładowych, od promieniowania słonecznego i z otoczenia nieustannie podgrzewa zbiorniki, a powstałe opary trzeba upuszczać. Zatankowana rakieta traci paliwo z każdą godziną postoju — dlatego [[okno-startowe|okno startowe]] bywa liczone w minutach, a [[scrub-i-nominal|przerwanie odliczania]] oznacza spuszczenie wszystkiego.',
      'Dla lotów dłuższych niż kilka dni problem staje się zaporowy. NASA podaje wprost, że paliwa kriogeniczne wykorzystywano dotąd wyłącznie w misjach krótszych niż tydzień, i testuje w Marshall Space Flight Center chłodzenie zbiorników dwustopniowym układem kriochłodziarek, żeby odparowywanie sprowadzić do zera.',
      'Dla SpaceX ma to bezpośrednie znaczenie: [[tankowanie-orbitalne|tankowanie Starshipa na orbicie]] wymaga, żeby [[metaloks-i-keroloks|metan i tlen]] przetrwały w zbiornikach dłużej niż dotąd potrafiono. Kerozyna tego problemu nie ma — to płyn w temperaturze pokojowej i można ją trzymać w rakiecie miesiącami.',
    ],
    fakty: [
      { etykieta: 'Ciekły wodór', wartosc: 'około minus 424 °F, czyli około minus 253 °C', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciekły tlen', wartosc: 'około minus 298 °F, czyli około minus 183 °C', pewnosc: 'potwierdzone' },
      { etykieta: 'Odparowywanie', wartosc: 'opary trzeba upuszczać, paliwo ubywa z godziny na godzinę', pewnosc: 'potwierdzone' },
      { etykieta: 'Dotychczasowe zastosowanie', wartosc: 'misje krótsze niż tydzień', pewnosc: 'potwierdzone' },
      { etykieta: 'Kierunek prac', wartosc: 'kriochłodziarki sprowadzające odparowywanie do zera', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'W kosmosie jest zimno, a mimo to paliwo kriogeniczne się tam grzeje. Ciepło idzie od własnych instalacji statku, od Słońca i od spalin silników — i to wystarcza, żeby zbiorniki trzeba było odpowietrzać, tracąc bezpowrotnie część ładunku.',
        zrodlo: Z.nasaKriogenika,
      },
    ],
    os: [
      { data: '2025-06', tytul: 'Testy zerowego odparowywania', opis: 'NASA rozpoczyna w Marshall dziewięćdziesięciodniową kampanię chłodzenia zbiorników wodoru.', waga: 1 },
    ],
    powiazane: [
      { id: 'metaloks-i-keroloks', powod: 'metan i tlen są kriogeniczne, kerozyna nie' },
      { id: 'tankowanie-orbitalne', powod: 'wymaga utrzymania paliwa w stanie ciekłym znacznie dłużej niż dotąd' },
      { id: 'okno-startowe', powod: 'odparowywanie jest jednym z powodów, dla których bywa tak wąskie' },
      { id: 'scrub-i-nominal', powod: 'przerwane odliczanie oznacza spuszczenie zatankowanego paliwa' },
    ],
    zrodla: [Z.wikiKriogenika, Z.nasaKriogenika],
    zaktualizowano: '2026-09-13',
  },
];
