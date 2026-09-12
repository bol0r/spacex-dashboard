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
      'Sercem konstrukcji jest [[pelnoprzeplywowe-spalanie-stopniowe]]. W skrócie: całe paliwo i cały utleniacz przechodzą przez turbiny, zanim trafią do komory spalania, a nic nie jest wyrzucane za burtę niedopalone. Efektem są wyższe ciśnienia, wyższa sprawność i — przynajmniej w teorii — mniejsze zużycie silnika, które pozwala odpalać go wielokrotnie bez rozbierania.',
      'Kolejne generacje szły w tę samą stronę: mocniej i lżej. Raptor 1 ważył 2 080 kg i dawał 185 tony siły ciągu przy ciśnieniu 250 barów. Raptor 2 zszedł do 1 630 kg i podniósł ciąg do 230 tf przy 300 barach. Raptor 3 waży 1 525 kg, pracuje przy 330 barach i w testach osiągnął 280 tf. Trzecia generacja pozbyła się też większości zewnętrznego oprzyrządowania i osłon — kanały chłodzące schowano w samym korpusie.',
      'Wybór metanu nie jest estetyczny. Metan da się wyprodukować na Marsie z dwutlenku węgla z atmosfery i wody z gruntu, w reakcji Sabatiera — a to jedyny scenariusz, w którym rakieta wraca z Marsa bez ciągnięcia paliwa powrotnego z Ziemi. Dodatkowo metan spala się czyściej niż nafta i nie zostawia w silniku osadu węglowego, co bezpośrednio pracuje na [[reuzywalnosc]].',
      'Pierwsze odpalenie silnika rozwojowego odbyło się w McGregor w Teksasie we wrześniu 2016 roku. Do lotu Raptor trafił dopiero siedem lat później, przy pierwszym locie testowym Starshipa. Dziś produkcja stoi w Teksasie obok [[starbase|Starbase]] i jest jedynym wąskim gardłem, które musi nadążyć za tempem budowy rakiet.',
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
    zrodla: [Z.wikiRaptor, Z.wikiStarship],
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
      'Merlin jest też powodem, dla którego [[reuzywalnosc|odzyskiwanie pierwszego stopnia]] w ogóle ma sens. Silnik da się dławić i odpalać ponownie w locie, co pozwala wykonać hamowanie wsteczne, wejście w atmosferę i lądowanie na trzech, a potem jednym silniku. Rekordowy egzemplarz boostera przeszedł 37 lotów bez wymiany silników.',
    ],
    fakty: [
      { etykieta: 'Ciąg przy ziemi (1D)', wartosc: '845 kN', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciąg w próżni (1D)', wartosc: '981 kN', pewnosc: 'potwierdzone' },
      { etykieta: 'Impuls właściwy w próżni (1D)', wartosc: '311 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Impuls właściwy (1D Vacuum)', wartosc: '348 s', pewnosc: 'potwierdzone' },
      { etykieta: 'Ciśnienie w komorze (1D)', wartosc: '9,7 MPa', pewnosc: 'potwierdzone' },
      { etykieta: 'Stosunek ciągu do masy (1D)', wartosc: '184', pewnosc: 'potwierdzone' },
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
    zrodla: [Z.wikiMerlin, Z.wikiStartyFalcon],
    zaktualizowano: '2026-09-12',
  },
];
