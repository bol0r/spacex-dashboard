import type { Encja } from '../types';
import { Z } from '../zrodla';

export const silniki: Encja[] = [
  {
    id: 'raptor',
    typ: 'silnik',
    nazwa: 'Raptor',
    aka: ['Raptor 1', 'Raptor 2', 'Raptor 3', 'silnik Starshipa'],
    krotki: 'Silnik na metan i ciekły tlen, pierwszy w historii, który uniósł rakietę w cyklu pełnoprzepływowego spalania stopniowego.',
    tresc: [
      'Raptor jest jedynym silnikiem, jaki napędza [[starship|Starshipa]]. Trzydzieści trzy sztuki siedzą w dolnym stopniu [[super-heavy|Super Heavy]], sześć kolejnych w górnym — trzy w wersji przystosowanej do pracy przy ziemi i trzy z dużą dyszą próżniową. To odejście od wszystkiego, co [[spacex|SpaceX]] robiło wcześniej: [[merlin|Merlin]] spala naftę, Raptor spala metan.',
      'Sercem konstrukcji jest [[pelnoprzeplywowe-spalanie-stopniowe|pełnoprzepływowe spalanie stopniowe]]. W skrócie: całe paliwo i cały utleniacz przechodzą przez turbiny, zanim trafią do komory spalania, a nic nie jest wyrzucane za burtę niedopalone. Efektem są wyższe ciśnienia, wyższa sprawność i — przynajmniej w teorii — mniejsze zużycie silnika, które pozwala odpalać go wielokrotnie bez rozbierania.',
      'Kolejne generacje szły w tę samą stronę: mocniej i lżej. Raptor 1 ważył 2 080 kg i dawał 185 tony siły ciągu przy ciśnieniu 250 barów. Raptor 2 zszedł do 1 630 kg i podniósł ciąg do 230 tf przy 300 barach. Raptor 3 waży 1 525 kg, pracuje przy 330 barach i w testach osiągnął 280 tf. Trzecia generacja pozbyła się też większości zewnętrznego oprzyrządowania i osłon — kanały chłodzące schowano w samym korpusie.',
      'Wybór metanu nie jest estetyczny. Metan da się wyprodukować na Marsie z dwutlenku węgla z atmosfery i wody z gruntu, w reakcji Sabatiera — a to jedyny scenariusz, w którym rakieta wraca z Marsa bez ciągnięcia paliwa powrotnego z Ziemi. Dodatkowo metan spala się czyściej niż nafta i nie zostawia w silniku osadu węglowego, co bezpośrednio pracuje na [[reuzywalnosc|reużywalność]].',
      'Pierwsze odpalenie silnika rozwojowego odbyło się w [[mcgregor|McGregor]] w Teksasie we wrześniu 2016 roku. Do lotu Raptor trafił dopiero siedem lat później, przy pierwszym locie testowym Starshipa. Dziś produkcja stoi w Teksasie obok [[starbase|Starbase]] i jest jedynym wąskim gardłem, które musi nadążyć za tempem budowy rakiet.',
    ],
    fakty: [
      { etykieta: 'Ciąg przy ziemi (Raptor 3)', wartosc: '250 tf nominalnie, 280 tf w teście', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciąg w próżni (Raptor 3)', wartosc: '275 tf', pewnosc: 'potwierdzone' },
      { etykieta: 'Impuls właściwy', wartosc: '350 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciśnienie w komorze', wartosc: '330 barów', pewnosc: 'potwierdzone' },
      { etykieta: 'Masa silnika', wartosc: '1 525 kg (Raptor 3) wobec 2 080 kg (Raptor 1)', pewnosc: 'potwierdzone' },
      { etykieta: 'Paliwo', wartosc: 'ciekły metan i ciekły tlen', pewnosc: 'potwierdzone' },
      { etykieta: 'Cykl', wartosc: 'pełnoprzepływowe spalanie stopniowe', pewnosc: 'potwierdzone' },
      { etykieta: 'Koszt jednostkowy', wartosc: 'zbliżał się do 1 mln USD w 2019 r., cel poniżej 250 tys. USD', stanNa: '2019', pewnosc: 'sporne' },
    ],
    ciekawostki: [
      {
        tekst: 'Przed Raptorem na świecie powstały tylko dwa silniki pełnoprzepływowe, które w ogóle stanęły na hamowni: radziecki RD-270 z lat sześćdziesiątych i amerykański demonstrator IPD z połowy lat dwutysięcznych. Żaden z nich nigdy nie poleciał. Raptor jest pierwszym, który cokolwiek oderwał od ziemi.',
        zrodlo: Z.wikiRaptor,
      },
    ],
    os: [
      { data: '2016-09-25', tytul: 'Pierwsze odpalenie', opis: 'Silnik rozwojowy rusza na stanowisku w McGregor w Teksasie.', waga: 2 },
      { data: '2023-04-20', tytul: 'Pierwszy lot', opis: 'Trzydzieści trzy Raptory 2 unoszą Starshipa w pierwszym locie testowym.', waga: 3 },
    ],
    powiazane: [
      { id: 'super-heavy', powod: 'napędza go w liczbie 33 sztuk' },
      { id: 'starship', powod: 'napędza górny stopień w liczbie 6 sztuk' },
      { id: 'pelnoprzeplywowe-spalanie-stopniowe', powod: 'pracuje w tym cyklu jako pierwszy silnik w historii lotów' },
      { id: 'merlin', powod: 'poprzednik w rodzinie SpaceX, inne paliwo i prostszy cykl' },
      { id: 'reuzywalnosc', powod: 'czyste spalanie metanu jest warunkiem szybkiego relotu' },
    ],
    status: 'w rozwoju',
    zrodla: [Z.wikiRaptor, Z.wikiStarship, Z.spacexStarship],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'merlin',
    typ: 'silnik',
    nazwa: 'Merlin',
    aka: ['Merlin 1D', 'Merlin 1D Vacuum', 'Merlin 1C'],
    krotki: 'Silnik na naftę i ciekły tlen w cyklu z generatorem gazu; dziewięć sztuk pracuje w pierwszym stopniu Falcona 9.',
    tresc: [
      'Merlin jest najbardziej przepracowanym silnikiem w historii amerykańskiej kosmonautyki komercyjnej. Dziewięć sztuk napędza pierwszy stopień [[falcon-9|Falcona 9]], jedna — w wersji z dyszą próżniową — drugi stopień, a [[falcon-heavy|Falcon Heavy]] startuje na dwudziestu siedmiu naraz. Spala naftę lotniczą RP-1 i ciekły tlen.',
      'Cykl jest prosty i świadomie niewyszukany: generator gazu. Niewielka część paliwa spala się w osobnej komorze tylko po to, żeby napędzić turbopompy, po czym ucieka na zewnątrz — stąd charakterystyczny ciemny warkocz obok głównego płomienia. Rozwiązanie kosztuje trochę sprawności, ale jest tanie, przewidywalne i wybaczające. Dla porównania [[raptor|Raptor]] poszedł w dokładnie przeciwną stronę.',
      'Postęp między wersjami był brutalny. Merlin 1C dawał 420 kN przy ziemi, ważył 630 kg i miał stosunek ciągu do masy 96. Merlin 1D daje 845 kN, waży 470 kg i osiąga 184 — czyli w tej samej rodzinie, w kilka lat, podwojono ciąg i jednocześnie zdjęto jedną czwartą masy. Wersja próżniowa z dyszą o rozszerzeniu 165:1 wyciąga impuls właściwy 348 s, najwyższy wynik wśród amerykańskich silników węglowodorowych.',
      'Merlin jest też powodem, dla którego [[reuzywalnosc|odzyskiwanie pierwszego stopnia]] w ogóle ma sens. Silnik da się dławić i odpalać ponownie w locie, co pozwala wykonać hamowanie wsteczne, [[wejscie-atmosferyczne|wejście w atmosferę]] i lądowanie na trzech, a potem jednym silniku. Rekordowy egzemplarz boostera przeszedł 37 lotów bez wymiany silników.',
    ],
    fakty: [
      { etykieta: 'Ciąg przy ziemi (1D)', wartosc: '845 kN', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciąg w próżni (1D Vacuum)', wartosc: '981 kN — silnik drugiego stopnia', pewnosc: 'potwierdzone' },
      { etykieta: 'Impuls właściwy w próżni (1D)', wartosc: '311 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Impuls właściwy (1D Vacuum)', wartosc: '348 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciśnienie w komorze (1D)', wartosc: '9,7 MPa', pewnosc: 'potwierdzone' },
      { etykieta: 'Stosunek ciągu do masy (1D)', wartosc: 'od 184 do 199,5 zależnie od źródła', pewnosc: 'sporne' },
      { etykieta: 'Masa sucha (1D)', wartosc: '470 kg', pewnosc: 'potwierdzone' },
      { etykieta: 'Cykl', wartosc: 'generator gazu, paliwo RP-1 i ciekły tlen', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Wtryskiwacz Merlina jest typu czopowego — tej samej konstrukcji, którą po raz pierwszy zastosowano w silniku zniżania lądownika księżycowego Apollo. Element, który sadzał ludzi na Księżycu, wrócił po czterdziestu latach jako serce najczęściej startującej rakiety świata.',
        zrodlo: Z.wikiMerlin,
      },
      {
        tekst: 'Nazwa nie jest przypadkowa ani mitologiczna: merlin to po angielsku drzemlik, mały sokół. Silnik nazwano tak, żeby pasował do rakiety o nazwie Falcon.',
        zrodlo: Z.wikiMerlin,
      },
    ],
    os: [
      { data: '2013-09', tytul: 'Debiut wersji 1D', opis: 'Falcon 9 v1.1 startuje z najmocniejszą odmianą silnika.', waga: 2 },
      { data: '2018-05', tytul: 'Block 5', opis: 'Ostateczna konfiguracja Falcona 9, zoptymalizowana pod szybkie ponowne loty.', waga: 3 },
    ],
    powiazane: [
      { id: 'falcon-9', powod: 'napędza go — dziewięć sztuk w pierwszym stopniu, jedna w drugim' },
      { id: 'falcon-heavy', powod: 'pracuje w nim w liczbie 27 sztuk przy starcie' },
      { id: 'raptor', powod: 'następca w rodzinie SpaceX, inne paliwo i znacznie trudniejszy cykl' },
      { id: 'reuzywalnosc', powod: 'zdolność do ponownego odpalenia w locie umożliwia lądowanie boostera' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiMerlin, Z.wikiStartyFalcon, Z.spacexPrzewodnik],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'kestrel',
    typ: 'silnik',
    nazwa: 'Kestrel',
    aka: ['silnik drugiego stopnia Falcona 1'],
    krotki: 'Ciśnieniowy silnik drugiego stopnia Falcona 1 — bez turbopomp, bez generatora gazu, praktycznie bez części ruchomych.',
    tresc: [
      'Kestrel napędzał drugi stopień [[falcon-1|Falcona 1]] i był świadomie najprostszą rzeczą, jaką dało się zbudować. Zasilanie ciśnieniowe oznacza, że paliwo tłoczy do komory sprężony gaz, a nie pompa. Znikają turbopompy, znika generator gazu, znika większość tego, co w silniku rakietowym potrafi się zatrzeć.',
      'Cena tej prostoty jest w osiągach: ciśnienie w komorze musi być niskie, bo zbiorniki nie wytrzymają więcej, a niskie ciśnienie to mniejsza sprawność. W drugim stopniu małej rakiety był to jednak dobry interes — pracuje w próżni, gdzie duża dysza nadrabia to, co gubi ciśnienie.',
      'Nazwa trzyma się firmowego zwyczaju: kestrel to pustułka, czyli — jak [[merlin|merlin]] — niewielki sokół. Silnik nie miał lekkiego życia: przy [[falcon-1-lot-2|drugim locie]] zgasł przedwcześnie, bo paliwo zaczęło się przelewać w zbiorniku w rezonansie z konstrukcją. Podzielił los swojej rakiety i skończył razem z programem, nie doczekawszy żadnej wersji rozwojowej — [[spacex|SpaceX]] poszło w stronę turbopomp i już nigdy nie wróciło do zasilania ciśnieniowego. Był chłodzony ablacyjnie, a nie [[chlodzenie-regeneracyjne|regeneracyjnie]], i liczył się przy nim przede wszystkim [[impuls-wlasciwy|impuls właściwy]], bo pracował wyłącznie w próżni.',
    ],
    fakty: [
      { etykieta: 'Zastosowanie', wartosc: 'drugi stopień Falcona 1', pewnosc: 'potwierdzone' },
      { etykieta: 'Zasilanie', wartosc: 'ciśnieniowe, bez turbopomp', pewnosc: 'potwierdzone' },
      { etykieta: 'Paliwo', wartosc: 'nafta lotnicza RP-1 i ciekły tlen', pewnosc: 'potwierdzone' },
      { etykieta: 'Loty', wartosc: '5, wszystkie na Falconie 1', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Cała rodzina napędu SpaceX z tej epoki nosi imiona sokołów: rakieta to Falcon, silnik pierwszego stopnia Merlin, czyli drzemlik, a drugiego Kestrel, czyli pustułka. Nazwa rakiety wzięła się z „Star Wars", ale reszta to już konsekwentna ornitologia.',
        zrodlo: Z.wikiMerlin,
      },
    ],
    os: [
      { data: '2006-03-24', tytul: 'Debiut', opis: 'Leci na pierwszym Falconie 1, ale nie dochodzi do pracy drugiego stopnia.', waga: 1 },
      { data: '2009-07-14', tytul: 'Ostatni lot', opis: 'Wynosi RazakSAT i kończy karierę razem z Falconem 1.', waga: 2 },
    ],
    powiazane: [
      { id: 'falcon-1', powod: 'napędzał jego drugi stopień' },
      { id: 'merlin', powod: 'silnik pierwszego stopnia tej samej rakiety, znacznie bardziej złożony' },
      { id: 'spacex', powod: 'jeden z dwóch pierwszych silników firmy' },
    ],
    status: 'historyczne',
    zrodla: [Z.wikiFalcon1, Z.wikiMerlin],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'draco-superdraco',
    typ: 'silnik',
    nazwa: 'Draco i SuperDraco',
    aka: ['Draco', 'SuperDraco', 'system ratunkowy Dragona'],
    krotki: 'Dwa silniki kapsuły Dragon: szesnaście małych do manewrów i osiem potężnych, które w razie awarii odrzucają ją od rakiety.',
    tresc: [
      'Draco to silniczki manewrowe [[crew-dragon|Crew Dragona]] — szesnaście sztuk po 400 niutonów ciągu, używanych do korekt orbity i utrzymywania orientacji. SuperDraco to ich znacznie większy krewny: osiem sztuk po 71 kiloniutonów, czyli blisko dwustu razy więcej.',
      'Rola SuperDraco jest jedna i wykonuje się ją raz: w razie awarii rakiety odrzucić kapsułę z załogą na bok, w ułamku sekundy. To jedyny układ w całym systemie, który istnieje wyłącznie po to, żeby nigdy nie zadziałać.',
      'Oba silniki, podobnie jak [[merlin|Merlin]] i [[kestrel|Kestrel]], powstały pod kierunkiem [[tom-mueller|Toma Muellera]]. Wcześniejsza wersja Draco pracowała już w [[dragon-1|Dragonie 1]].',
      'SuperDraco jest przy tym pierwszym silnikiem rakietowym z komorą spalania wykonaną metodą druku przestrzennego, jaki poleciał z ludźmi na pokładzie — choć tę akurat cechę firma podaje sama i warto ją traktować ostrożnie.',
    ],
    fakty: [
      { etykieta: 'Draco — liczba i ciąg', wartosc: '16 sztuk po 400 N', pewnosc: 'potwierdzone' },
      { etykieta: 'SuperDraco — liczba i ciąg', wartosc: '8 sztuk po 71 kN', pewnosc: 'potwierdzone' },
      { etykieta: 'Zadanie Draco', wartosc: 'manewry orbitalne i orientacja', pewnosc: 'potwierdzone' },
      { etykieta: 'Zadanie SuperDraco', wartosc: 'awaryjne odrzucenie kapsuły od rakiety', pewnosc: 'potwierdzone' },
      { etykieta: 'Konstruktor', wartosc: 'zespół pod kierunkiem Toma Muellera', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Osiem silników SuperDraco daje razem ponad pięćset sześćdziesiąt kiloniutonów ciągu i istnieje po to, żeby nigdy nie zostać użyte. Przy każdym udanym starcie są martwym balastem — i to jest dokładnie ich zadanie.',
        zrodlo: Z.wikiDragon2,
      },
    ],
    os: [
      { data: '2010-12-08', tytul: 'Pierwszy lot Draco', opis: 'Silniczki manewrowe pracują w pierwszym locie Dragona.', waga: 2 },
      { data: '2020-05-30', tytul: 'Pierwszy lot załogowy', opis: 'System ratunkowy leci z ludźmi na pokładzie przy misji Demo-2.', waga: 3 },
    ],
    powiazane: [
      { id: 'crew-dragon', powod: 'napędzają go i chronią jego załogę' },
      { id: 'dragon-1', powod: 'wcześniejsza wersja Draco pracowała już w nim' },
      { id: 'tom-mueller', powod: 'prowadził rozwój obu silników' },
      { id: 'merlin', powod: 'ten sam zespół konstrukcyjny, zupełnie inna skala' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiDragon2, Z.wikiMueller, Z.spacexDragon],
    zaktualizowano: '2026-09-13',
  },
];
