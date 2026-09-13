# Strefa Wiedzy — SpaceX

Polskojęzyczna, interaktywna encyklopedia SpaceX i całego ekosystemu Elona Muska.
Jednoekranowa aplikacja webowa, w której **każde pojęcie w tekście jest klikalne**:
dotknięcie nazwy wysuwa arkusz z definicją, liczbami, ciekawostką i osią czasu,
a z jego wnętrza można wejść głębiej. Nawigacja przez skojarzenia, nie przez menu.

**Wersja 0.5.2** · **by Dead Net & Claude**

> **Projekt niezależny, edukacyjny i niekomercyjny.** Nie jest powiązany ze SpaceX,
> Teslą, X Corp., xAI, Neuralinkiem, The Boring Company ani z Elonem Muskiem i nie
> jest przez nikogo z nich prowadzony, sponsorowany ani zatwierdzony. Nazwy własne,
> znaki towarowe i marki należą do ich właścicieli i użyto ich wyłącznie w celu
> opisowym. Cała treść pochodzi ze źródeł publicznych, wymienionych w każdym
> arkuszu w sekcji „Skąd to wiem".

---

## Spis treści

- [Stan projektu](#stan-projektu)
- [Uruchomienie](#uruchomienie)
- [Polecenia](#polecenia)
- [Stack](#stack)
- [Struktura katalogów](#struktura-katalogów)
- [Kontrakt danych](#kontrakt-danych)
- [Jak dopisać encję](#jak-dopisać-encję)
- [Walidator](#walidator)
- [Przegląd jakości](#przegląd-jakości)
- [Dwa języki](#dwa-języki)
- [Grafiki](#grafiki)
- [System wizualny](#system-wizualny)
- [Mechanika interfejsu](#mechanika-interfejsu)
- [Zasady pracy z treścią](#zasady-pracy-z-treścią)
- [Skąd biorą się źródła](#skąd-biorą-się-źródła)
- [Numeracja wersji](#numeracja-wersji)
- [Offline i wydajność](#offline-i-wydajność)
- [Co zostało do zrobienia](#co-zostało-do-zrobienia)
- [Android](#android)

---

## Stan projektu

| Faza | Zakres | Stan |
|---|---|---|
| 0 | Design plan, kontrakt danych, fazowanie | gotowe |
| 1 | Szkielet, tokeny, ekran główny, walidator | gotowe |
| 2 | Stos arkuszy, gesty, chipy `[[id]]`, relacje dwukierunkowe | gotowe |
| 3 | Treść — 180 z 180+ encji | gotowe |
| 4 | Wyszukiwarka, tryb osi czasu, losowanie, ulubione | gotowe |
| 5 | PWA i offline, skorowidz, wirtualizacja osi, pomiar Lighthouse | gotowe |

Poza planem, na życzenie: przeprojektowany ekran główny z paskiem sekcji,
przesuwalna oś czasu, karta dnia, zastrzeżenie o braku powiązania, wybór języka,
cztery diagramy SVG, credits i numer wersji.

```
Encje: 180 · Wydarzenia: 319 · Źródła w katalogu: 144 · Diagramy: 4
Błędy walidatora: 0 · Ostrzeżenia: 0 · Ślepe zaułki: 0
Średnio linków [[id]] w treści: 4,88 (cel ≥ 6)
Tłumaczenia EN: interfejs w całości, treść 6 / 180 encji
Pola dotyku poniżej 44 px: 0 · Błędy w konsoli: 0

Lighthouse (mobile, build produkcyjny, 13.09.2026):
Wydajność 99 · Dostępność 100 · Dobre praktyki 100 · SEO 100
FCP 1,6 s · LCP 1,7 s · TBT 0 ms · CLS 0
```

## Uruchomienie

Wymagany Node 20 lub nowszy.

```bash
npm install
npm run dev
```

Serwer deweloperski wstaje na porcie z `.claude/launch.json` (domyślnie 5199).
Build produkcyjny używa ścieżek względnych, więc `dist/index.html` działa także
otwarty wprost z dysku, bez serwera.

## Polecenia

| Polecenie | Co robi |
|---|---|
| `npm run dev` | serwer deweloperski |
| `npm run build` | skorowidz, `tsc -b`, build produkcyjny i service worker |
| `npm run preview` | podgląd builda |
| `npm test` | testy walidatora, parsera `[[id]]` i indeksu relacji |
| `npm run waliduj` | walidator bazy z raportem |
| `npm run przeglad` | pełny przegląd jakości (osiem grup sprawdzeń) |
| `npm run skorowidz` | generuje lekką wersję bazy pod pierwszy render |
| `npm run sprawdz` | wszystko powyżej po kolei — używaj przed commitem |

## Stack

- **Vite + React 18 + TypeScript** w trybie `strict`, dodatkowo
  `noUncheckedIndexedAccess` i `exactOptionalPropertyTypes`
- **Tailwind CSS** z paletą ograniczoną do pięciu kolorów projektu; domyślna
  paleta Tailwinda jest skasowana, a `boxShadow` ustawiony na `none` na poziomie
  systemu, żeby cień nie mógł się wślizgnąć przypadkiem
- **Framer Motion** — wyłącznie wjazd, wyjazd i głębia arkuszy; gest zamykania
  jest napisany ręcznie (patrz [Mechanika interfejsu](#mechanika-interfejsu))
- **Zustand** — stos arkuszy, historia, język, haptyka
- Dane w plikach `.ts`, nie w JSON — chodzi o autouzupełnianie i sprawdzanie
  typów w trakcie pisania treści
- Zero backendu, zero API w runtime, zero analityki, zero banerów zgód

## Struktura katalogów

```
src/
  app/
    App.tsx           spina bazę, stos arkuszy i ekran główny
    stan.ts           Zustand: stos, historia, język, haptyka
    uklad.ts          sekcje i rozmiary kafli; sekcje liczone z bazy
    kontekst.tsx      baza przez kontekst — potrzebna w każdym chipie
  components/
    EkranGlowny.tsx   nagłówek, pasek sekcji, kafle, stopka
    Kafel.tsx         cztery rozmiary; rozmiar niesie wagę tematu
    KafelBohater.tsx  Starship jako moduł telemetrii — jedyny mocny akcent
    KartaDnia.tsx     powtarzalne losowanie zaziarnione datą
    OsCzasu.tsx       przesuwalna oś; puste lata zwinięte
    PasekSekcji.tsx   przyklejony pasek nawigacji z licznikami
    StosArkuszy.tsx   do czterech widocznych kart, okruszki od piątej
    Arkusz.tsx        jedna karta stosu w kolejności z briefu
    Nakladka.tsx      wspólna powłoka trzech nakładek pełnoekranowych
    Wyszukiwarka.tsx  Fuse.js, grupowanie po typie, strzałki i Enter
    TrybOsiCzasu.tsx  pionowa oś z filtrem po firmie
    LosoweOdkrycie.tsx losowa ciekawostka na pełnym ekranie
    TrybFilmowy.tsx   cała historia po kolei, przewijana sama
    EkranLadowania.tsx ekran startowy pokazywany dopiero po 250 ms
    ListaPozioma.tsx  ulubione i historia jako pigułki
    grafiki/          cztery diagramy SVG i rejestr przypisań
  data/
    types.ts          kontrakt encji (sekcja A) i typy pochodne (sekcja B)
    zrodla.ts         katalog źródeł — jedno miejsce na URL i datę dostępu
    entities/         treść, jeden plik na kategorię
    tlumaczenia/      nakładka angielska i mechanizm jej nakładania
    index.ts          leniwe ładowanie kategorii, domykanie relacji
    wszystkie.ts      statyczne zebranie bazy — tylko dla testów i skryptów
  lib/
    validate.ts       trzynaście reguł walidatora
    linkify.ts        parser [[id]] i [[id|etykieta]]
    szukaj.ts         indeks Fuse, ogonki i obcięcie polskiej końcówki
    gest.ts           gest zamykania arkusza na zdarzeniach wskaźnika
    fokus.ts          pułapka fokusu i wykrywanie szerokiego ekranu
    format.ts         daty po polsku, odmiana rzeczowników po liczbie
    haptyka.ts        drgnięcie 10 ms za sprawdzeniem aktywacji użytkownika
    losowanie.ts      generator powtarzalny dla danego ziarna
  i18n/
    teksty.ts         słownik interfejsu, pluralizacja rozdzielona na język
    grafiki.ts        etykiety wewnątrz diagramów
  style/tokeny.css    pięć kolorów, materiały, sprężyny, reduced-motion
skrypty/
  waliduj.ts          walidator z kodem wyjścia
  przeglad.ts         przegląd jakości
  gestosc.ts          nazwy encji w treści, które mogłyby być chipami
```

## Kontrakt danych

`src/data/types.ts` dzieli się na dwie części.

**Sekcja A to kontrakt** — kształt encji. Nie zmienia się bez decyzji właściciela
projektu, bo od niego zależy cała treść i wszystkie reguły walidatora.

```ts
interface Encja {
  id: string;                 // slug: 'falcon-9-block-5'
  typ: Typ;                   // rakieta | silnik | statek | misja | …
  nazwa: string;
  aka?: string[];             // synonimy do wyszukiwarki
  krotki: string;             // ≤ 140 znaków, pełne zdanie
  tresc: string[];            // 3–6 akapitów, w tekście linki [[id]]
  fakty: Fakt[];              // 3–8
  ciekawostki: Ciekawostka[]; // ≥ 1
  os: Wydarzenie[];           // ≥ 1
  powiazane: Powiazanie[];    // ≥ 3, każde z własnym powodem
  status?: 'aktywne' | 'historyczne' | 'w rozwoju' | 'anulowane';
  zrodla: Zrodlo[];           // ≥ 2
  zaktualizowano: string;     // ISO
}
```

**Sekcja B to typy pochodne** — kategorie, sekcje, indeks relacji, wynik
walidacji, limity. Obsługują warstwę budującą i nie zmieniają kształtu treści
pisanej ręcznie.

Dwie zasady spinają bazę w całość:

1. **Każde pojęcie mające własną encję zapisuje się w treści jako `[[id]]`.**
   Forma `[[id|etykieta]]` pozwala odmienić nazwę przez przypadki —
   „napędza [[starship|Starshipa]]". Bez etykiety chip pokazuje nazwę encji.
2. **Relacje są dwukierunkowe, ale powód pisze się ręcznie w obie strony.**
   Indeks dokłada brakujące zwroty automatycznie; „Merlin → Falcon 9: napędza"
   i „Falcon 9 → Merlin: napędzany przez dziewięć sztuk" to dwa różne zdania
   i oba mają wartość. Powód „powiązane" nie przechodzi walidacji.

## Jak dopisać encję

1. Wybierz plik w `src/data/entities/` odpowiadający kategorii. Nowa kategoria
   wymaga wpisu w `Kategoria` w `types.ts`, w `LADOWACZE` w `index.ts` i w
   `WEDLUG_KATEGORII` w `wszystkie.ts`.
2. Dodaj źródła do `src/data/zrodla.ts`. **Nie wpisuj URL-a, którego nie
   otworzyłeś.** Data dostępu jest wspólna dla całej partii i stoi w stałej `D`.
3. Napisz encję. Minimum z kontraktu jest twarde, ale celuj wyżej: 6–12 linków
   `[[id]]` w treści to sedno produktu, nie ozdoba.
4. Dopisz relacje zwrotne przy encjach, na które wskazujesz — z własnym powodem.
5. Jeśli encja zasługuje na większy kafel, dopisz ją do `WAGI` w `uklad.ts`.
6. Uruchom `npm run sprawdz`.

## Walidator

`src/lib/validate.ts`. Błąd zatrzymuje build, ostrzeżenie tylko raportuje.

**Błędy:** duplikat `id`, link `[[id]]` albo powiązanie do nieistniejącej encji,
mniej niż 3 powiązania, brak ciekawostki, mniej niż 2 źródła, `krotki` dłuższy
niż 140 znaków, brak wydarzenia na osi, liczba faktów poza 3–8, liczba akapitów
poza 3–6, powód z listy wypełniaczy, zły format daty, adres nie na `https`.

**Ostrzeżenie:** fakt, który wygląda na liczbę rosnącą, a nie ma `stanNa`.
Heurystyka jest świadomie zawężona — ostrzeżenie, które zwykle jest fałszywe,
przestaje cokolwiek znaczyć, więc wzorce obejmują tylko etykiety naprawdę
zliczające, a wartości wyglądające na datę są pomijane.

## Przegląd jakości

`npm run przeglad` sprawdza osiem grup rzeczy, których kontrakt nie obejmuje:

1. wynik walidatora i średnia linków w treści,
2. unikalność i format identyfikatorów,
3. **niezależność źródeł** — ile encji ma wszystkie źródła od jednego wydawcy,
4. martwe i niepoprawne wpisy w katalogu źródeł,
5. zapisy `[[id]]` bez etykiety, ślepe zaułki, encje poniżej celu 6 linków,
6. czy każda encja ma kafel na ekranie głównym,
7. spójność strukturalna nakładki tłumaczeniowej,
8. wydarzenia z datą po dacie aktualizacji i encje z nieaktualną datą.

Uwagi z przeglądu nie blokują builda — to lista rzeczy do poprawy.

## Dwa języki

Interfejs jest przetłumaczony w całości; treść encji ma osobny mechanizm.

**Polski jest wersją kanoniczną.** W nim weryfikowano fakty i do niego pasują
źródła. Tłumaczenie to nakładka w `src/data/tlumaczenia/`, która nadpisuje
wyłącznie tekst ciągły: `krotki`, akapity, etykiety faktów, ciekawostki, opisy
wydarzeń i powody powiązań. Nazwy własne, liczby, daty, identyfikatory i źródła
zostają. `nazwa` jest tłumaczona tylko tam, gdzie jest opisem, nie nazwą własną —
„Niska orbita okołoziemska" tak, „Starship" nie.

Tablice w nakładce są **pozycyjne**, a `sprawdzNakladke` weryfikuje zgodność ich
długości z oryginałem, więc rozjechane tłumaczenie nie przejdzie po cichu.
Encje bez tłumaczenia pokazują polski oryginał z widocznym znacznikiem.

Język zapisuje się w `localStorage`, domyślnie bierze się z przeglądarki,
a jego zmiana zamyka stos arkuszy, bo te trzymają treść w poprzedniej wersji.

## Grafiki

Tylko własne SVG — zero bitmap, zero cudzych zdjęć. Cztery diagramy:

| Diagram | Co pokazuje |
|---|---|
| `SkalaRakiet` | Falcon 1, 9, Heavy i Starship przeliczone z metrów jednym współczynnikiem, razem ze średnicami |
| `ProfilLotu` | sześć etapów powrotu pierwszego stopnia, z pasem 70–40 km i przypisem o profilu barkowym |
| `CyklSilnika` | generator gazu i cykl pełnoprzepływowy w identycznym układzie, żeby dały się porównać wzrokiem |
| `WysokosciOrbit` | skala logarytmiczna od ISS do orbity geostacjonarnej, z rozsuniętymi etykietami |

Rejestr przypisań (`grafiki/index.tsx`) jest **osobny od danych**, więc kontrakt
`Encja` pozostaje nietknięty: grafika jest sposobem pokazania treści, nie treścią.
Jedna encja dostaje najwyżej jeden diagram — rysunek, który tylko powtarza
akapit, jest dekoracją i nie powinien się w rejestrze znaleźć.

Dwie zasady rysowania: skala albo jest prawdziwa, albo jest opisana jako
nieliniowa wprost na obrazku; przesunięcie etykiety jest dozwolone, przesunięcie
punktu danych nie.

## Wyszukiwarka

Fuse.js, `threshold` 0,35, klucze `nazwa`, `aka` i `krotki`, w pełni offline.
Polska odmiana wymagała dwóch rzeczy ponad domyślną konfigurację:

1. **Indeksowanie wersji bez znaków diakrytycznych** — „reuzywalnosc" ma znaleźć
   „Reużywalność". Pytanie normalizujemy tak samo.
2. **Obcięcie jednej i dwóch końcowych liter pytania.** Wpisane „raptora" jest
   dłuższe niż „Raptor" w bazie, a Fuse szuka wzorca wewnątrz tekstu, więc
   dłuższy wzorzec nie ma gdzie się zmieścić i bez tego nie znajdowało nic.
   Pełny stemmer byłby przesadą; ogonki plus dwie litery łapią wszystkie
   przypadki, jakie spotykamy w tych nazwach.

Trafienie w nazwie bije trafienie w synonimach. Bez tego „starshipa" wyrzucało
najpierw Super Heavy, którego synonim to „dolny stopień Starshipa" — dopasowanie
dosłowne, ale nie to, którego szukał użytkownik.

Wejście: przycisk w nagłówku, pociągnięcie w dół na samej górze ekranu, `⌘K`
albo `Ctrl+K`. Nawigacja strzałkami i Enterem, wyniki grupowane po typie,
trafienia podświetlone w nazwie.

## Pozostałe tryby

**Pełna oś czasu** — pionowa, od najnowszych, rok jako kolumna z licznikiem,
filtr po firmie (wszystko / SpaceX / Tesla / reszta), kamienie milowe wyróżnione.
Kompaktowa oś na ekranie głównym pokazuje kształt, ta pokazuje treść.

**Pokaż mi coś** — losowa ciekawostka na pełnym ekranie. Przycisk losowania stoi
tuż pod tekstem, a przejście do encji wymaga osobnego gestu: łatwiej jest losować
dalej niż wyjść, i taki jest zamysł. Losowanie nie powtarza poprzedniego wyniku.

**Tryb filmowy** — cała historia po kolei, przewijana sama, z tempem do wyboru,
filtrem po firmie i rokiem wypisanym wielkim stopniem pisma w rogu jako znacznik
rozdziału. Dotknięcie wstrzymuje. Wejście w encję **nie zamyka filmu** — arkusz
otwiera się nad nim, a po zamknięciu film czeka w tym samym miejscu.

Świadomie nie jest to naśladownictwo napisów ze „Star Wars". Aplikacja ma
zastrzeżenie o braku powiązania z kimkolwiek, więc kopiowanie rozpoznawalnej
estetyki cudzej marki działałoby przeciwko niemu, a brief zakazuje wprost
gwiazdek w tle i dekoracji bez funkcji. Z tamtego pomysłu zostało to, co działa:
chronologia, rytm i jedna rzecz naraz.

**Ulubione i historia** — serduszko w arkuszu odkłada encję na ekran główny,
historia trzyma dwadzieścia ostatnich odwiedzin. Oba w `localStorage`, oba jako
poziome listy pigułek: kolejność ma tu znaczenie, rozmiar nie.

Trzy nakładki dzielą jedną powłokę (`Nakladka.tsx`) — ten sam sposób wejścia,
wyjścia, obsługi Escape i pułapki fokusu. Różnicowanie ich tylko po to, żeby były
różne, byłoby kosztem dla użytkownika.

## Ekran startowy

Nie jest to intro. Ekran pojawia się **dopiero po 250 ms** ładowania i przy
szybkim starcie nie mignie ani razu. Powód jest podwójny: brief zakazuje
animacji, których nie wywołał użytkownik, a każda sekunda dołożona przed treścią
psuje wynik wydajnościowy. To rozwiązanie problemu gołego napisu „Wczytywanie",
nie dodatek wizualny.

Pasek postępu jest nieokreślony, bo ładowanie chunków nie raportuje procentów —
zamiast kłamać liczbą pokazuje sam fakt pracy. To jedyna cykliczna animacja
w całej aplikacji.

## System wizualny

**Pięć kolorów i nic poza nimi.**

| Token | Hex | Rola |
|---|---|---|
| `--tlo` | `#000000` | baza OLED |
| `--tekst` | `#F5F7FA` | tekst pierwszoplanowy |
| `--tekst-2` | `#9BA1A6` | drugi plan, 8,0:1 — pełnoprawny tekst, nie wyszarzenie |
| `--blekit` | `#4DA6FF` | **wyłącznie** nawigacja, stany, to co klikalne |
| `--plomien` | `#FF8A3D` | **wyłącznie** liczby żywe i kamienie milowe wagi 3 |

Warstwy buduje przezroczysta biel i `backdrop-filter`, nie jaśniejsza szarość.
**Cienia nie ma w systemie w ogóle** — głębię robi rozmycie i przyciemnienie.
Jedyna dozwolona linia to `--wlos`, 0,5 px.

Typografia: `-apple-system` jako jedyna rodzina, pełna skala iOS. Krój o stałej
szerokości **tylko** w pasku faktów i na osi czasu. Wersaliki **tylko** w skrótach
(LEO, RUD, EVA), nigdy jako etykiety. Tekst ciągły poniżej 70 znaków w wierszu.

Ruch: sprężyny, nie krzywe czasowe — `stiffness 380`, `damping 34`. Poza
otwieraniem arkuszy nic nie animuje się samo. `prefers-reduced-motion` wyłącza
wszystko poza zmianą przezroczystości.

## Mechanika interfejsu

**Stos arkuszy.** Widoczne są cztery poziomy, każdy kolejny odjeżdża w głąb ze
skalą 0,92 i lekkim przyciemnieniem. Od piątego poziomu pełna ścieżka pokazuje
się jako okruszki. Od 900 px arkusz przestaje wysuwać się od dołu i staje się
panelem po prawej, a strona ustępuje mu miejsca zamiast być przykryta.

**Gest zamykania jest napisany ręcznie** (`lib/gest.ts`), nie wzięty z
framer-motion. Wbudowane `drag` ustawia własne `touch-action` na całej karcie
i zabija przewijanie treści w środku. Nasz gest uzbraja się dopiero po 6 px
w stronę zamknięcia i tylko gdy treść jest przewinięta do samej góry; ruch
w przeciwnym kierunku natychmiast oddaje kontrolę przewijaniu. Zamyka przy
110 px odległości **albo** 620 px/s prędkości — szybki, krótki gest też działa.

Zamykanie ma pięć dróg: gest w dół, gest od lewej krawędzi, Escape, przycisk,
dotknięcie tła.

**Dostępność.** `role="dialog"`, `aria-modal` tylko na wierzchniej karcie,
pułapka fokusu z Tab i Shift+Tab, powrót fokusu na element wywołujący,
`aria-label` po polsku i angielsku, wszystkie pola dotyku ≥ 44 px (znaczniki osi
czasu mają je rozszerzone pseudoelementem), brak poziomego scrolla na 320 px.

## Zasady pracy z treścią

Wzięte z briefu i obowiązujące dalej:

- **Nie zgaduje się faktów.** Lepiej mniej encji pewnych niż więcej zmyślonych.
- **Zero wymyślonych URL-i.** Nie ma źródła, którego nie otworzono.
- **Każda liczba, która rośnie, ma `stanNa`** i pokazuje się jako „stan na …".
- **Czego nie potwierdzają dwa niezależne źródła** — albo dostaje
  `pewnosc: 'sporne'` i informację w tekście, że wersje się różnią, albo wypada.
- **Źródła są widoczne w każdym arkuszu**, zwinięte, nigdy ukryte.
- **Tematy sporne opisuje się rzeczowo**: co się stało i kto co twierdzi, bez
  oceniania, łagodzenia i podkręcania. Spór o założycieli Tesli, nazwa Full
  Self-Driving, dochodzenia NHTSA i obietnice Cybertrucka są tu wzorcami.
- **Nie streszcza się cudzych artykułów blisko oryginału** — pisze się od nowa
  i linkuje do źródła.
- **Ciekawostka jest obowiązkowa** i ma być czymś, czego nie ma w pierwszym
  akapicie Wikipedii.

## Skąd biorą się źródła

Brief stawia jedną regułę ponad wszystkimi: nie zgaduje się faktów, a czego nie
potwierdzają dwa niezależne źródła, to albo jest oznaczone jako sporne, albo nie
wchodzi do bazy. Przez pierwsze pięć faz baza spełniała ją formalnie — każda
encja ma po dwa źródła — ale 137 encji ze 180 miało oba od tego samego wydawcy,
najczęściej Wikipedii. Dwa artykuły tej samej encyklopedii nie są dwoma
niezależnymi źródłami.

### Przyjęta reguła

Drugie źródło musi pochodzić od innego wydawcy, samodzielnie opisywać temat
encji i nie przeczyć jej faktom. Nie musi powielać każdej liczby — od tego są
przypisy przy ciekawostkach, gdzie źródło stoi przy konkretnym zdaniu. Każde
źródło jest otwierane i czytane przed dopięciem; katalog w `zrodla.ts` nie
zawiera ani jednego adresu, którego nie sprawdziliśmy.

### Czego szukamy najpierw

Dokumentów pierwotnych, bo przy okazji rozwiązują drugi problem: dane od samego
podmiotu są mocniejsze niż cudze streszczenie. W praktyce oznacza to przewodnik
dla klientów SpaceX, strony techniczne producenta, raporty roczne składane
w amerykańskim nadzorze giełdowym, materiały NASA i raporty izby kontroli.
Jedno takie źródło pokrywa zwykle kilkanaście encji naraz.

### Co się przy tym znajduje

Porównanie dwóch niezależnych opisów tego samego tematu wychwytuje rzeczy,
których nie widać przy jednym. Przy tym przejściu wyszły między innymi:

- **Ciąg 981 kN** był podpisany jako Merlin 1D w próżni, a jest to wartość
  silnika drugiego stopnia, Merlina 1D Vacuum.
- **Stosunek ciągu do masy Merlina** rozjeżdżał się między dwiema encjami —
  184 w jednej, 199,5 w drugiej. Obie podają teraz zakres i są oznaczone jako
  sporne. SpaceX w swoim przewodniku nie podaje liczby, tylko stwierdza, że
  jest to najwyższa wartość osiągnięta w silniku startowym.
- **Dane Starshipa** różnią się między producentem a katalogami lotów: 124 m
  i 8 240 tf u SpaceX wobec 121,3 m i 73,5 MN dla konstrukcji, która latała.
  To różnica wersji, nie błąd — encje podają obie.
- **Usługa Robotaxi** ruszyła w czerwcu 2025, co Tesla zapisuje w raporcie
  rocznym. Encja twierdziła, że zapowiedź się nie ziściła, i nie odnotowywała
  uruchomienia. To była realna luka merytoryczna.
- **Liczba odłamków** na orbicie: katalog podaje około 23 tysięcy obiektów
  powyżej 10 cm, NASA szacuje ponad 25 tysięcy. Encja podaje obie wartości.
- **Opóźnienie łącza geostacjonarnego**: około 240 ms wynika z samej drogi
  sygnału, ale SpaceX podaje ponad 600 ms w praktyce.
- **Własna strona Starlinka** mówi o ponad 6 750 satelitach, podczas gdy
  katalogi śledzenia liczą ich ponad 10 tysięcy.
- **Przejęcie xAI przez SpaceX** z lutego 2026 było w bazie odnotowane przy xAI,
  ale nie przy SpaceX — a to zmienia opis tego, czym ta firma dziś jest.

## Numeracja wersji

Schemat `0.<najwyższa zamknięta faza>.<kolejny przyrost>`. Wersja `0.4.1`
znaczy: fazy do czwartej włącznie zamknięte, pierwszy przyrost po nich —
w tym wypadku kolejna partia treści z fazy 3, która biegnie równolegle.
Numer stoi w `package.json` i jest wstrzykiwany do kodu przez Vite jako
`__WERSJA__`; kopiowanie go do stałej w źródłach kończy się rozjazdem
z manifestem paczki. `1.0.0` będzie zarezerwowane dla odbioru całości:
180+ encji i zamknięta faza 5.

## Offline i wydajność

### Tryb offline

Cała aplikacja razem z bazą wiedzy jest zapisywana w pamięci przeglądarki przy
pierwszej wizycie — 36 plików, około 1,1 MB. Potem działa bez sieci: ekran
główny, arkusze, wyszukiwarka, oś czasu, tryb filmowy i diagramy. Sprawdzone
przez wyłączenie serwera i przeładowanie strony.

Service worker powstaje przy budowaniu (`vite-plugin-pwa`, generator Workbox),
ale rejestrujemy go ręcznie w `src/lib/offline.ts` i dopiero po pierwszym
renderze — instalacja nie ma konkurować o sieć z ładowaniem danych. Nad `file://`
rejestracja jest pomijana, bo tam service worker nie działa z założenia.

**Nowa wersja instaluje się w tle i przejmuje dopiero przy kolejnym uruchomieniu**
(`skipWaiting: false`). Podmiana strony w trakcie czytania arkusza byłaby
wyrwaniem jej użytkownikowi spod palca. Praktyczny skutek przy pracy nad
projektem: po `npm run build` podgląd pokazuje starą wersję, dopóki nie zamknie
się wszystkich kart albo nie wyczyści rejestracji.

### Skorowidz

Ekran główny nie pokazuje ani jednego akapitu treści, a mimo to czekał na
wszystkie osiem porcji danych — pół megabajta. `skrypty/skorowidz.ts` generuje
`src/data/gen/skorowidz.ts`: tę samą bazę bez treści, faktów, powiązań i źródeł,
czyli bez wszystkiego, co widać dopiero po otwarciu arkusza. Struktura jest
identyczna, więc ekran główny nie odróżnia jednej od drugiej — arkusz owszem
(pole `pelna`) i dlatego czeka na pełną.

Jeden wyjątek: encja bohatera zachowuje fakty, bo jej kafel czyta z nich licznik
lotów. Bez tego blok pojawiał się dopiero po dojechaniu pełnej bazy i spychał
w dół resztę ekranu — mierzalne przesunięcie układu.

Plik jest generowany przed każdym budowaniem, a `npm run sprawdz` dodatkowo
sprawdza, czy jest aktualny. Nie da się go zostawić w tyle za danymi.

### Co jeszcze skróciło pierwsze wejście

Pomiary poniżej to Lighthouse w trybie mobilnym, na buildzie produkcyjnym.

| Zmiana | Wydajność | FCP | LCP |
|---|---|---|---|
| stan wyjściowy | 91 | 2,3 s | 3,1 s |
| skorowidz + warstwy ładowane leniwie | 92 | 2,2 s | 3,1 s |
| React w osobnej porcji | 92 | 2,2 s | 3,1 s |
| pełna baza dopiero po pierwszym malowaniu | 93 | 2,0 s | 3,0 s |
| zapowiedź skorowidza w HTML-u | **99** | **1,6 s** | **1,7 s** |

Największy pojedynczy zysk dała ostatnia pozycja, i nie chodziło o bajty, tylko
o kolejność. Skorowidz jest ładowany dynamicznie, więc przeglądarka dowiadywała
się o nim dopiero po wykonaniu głównego pliku — o jedną podróż do serwera za
późno. Wtyczka `zapowiedzSkorowidza` w `vite.config.ts` dokłada do HTML-a
`modulepreload`, żeby pobieranie ruszyło równolegle z resztą.

Reszta zmian: warstwy wyjeżdżające na wierzch (arkusze, wyszukiwarka, oś czasu,
losowanie, tryb filmowy) są doczytywane przy pierwszym otwarciu, co zdejmuje
ze ścieżki startowej framer-motion i wyszukiwarkę pełnotekstową. React dostał
własną porcję, bo Rollup doklejał go do porcji z animacjami i przez to ciągnął
ją przy starcie mimo tego, że ekran główny nie animuje niczego.

### Wirtualizacja osi czasu

Przesuwalna oś na ekranie głównym ma 317 znaczników i sześćdziesiąt lat skali
rozłożonych na 7 720 px, a w kadrze telefonu mieści się kilkanaście. Rysowanie
całości kosztowało 996 węzłów DOM, z czego prawie wszystkie poza ekranem.

`OsCzasu` trzyma teraz tylko to, co widać, plus ekran zapasu z każdej strony.
Okno przestawia się dopiero po przejechaniu połowy zapasu — bez tej histerezy
każda klatka przewijania kończyłaby się przerysowaniem całej osi. Efekt:
996 → od 102 do 272 węzłów zależnie od miejsca, a cały dokument z 3 347 do 1 937.

Pozostałe listy zostają bez wirtualizacji świadomie. Najdłuższa sekcja to słownik
z 44 pigułkami, a kafle są tanie — koszt maszynerii przewyższyłby zysk.

## Co zostało do zrobienia

Lista uszeregowana po wadze, nie po kolejności faz.

1. **Treść — minimum osiągnięte, 180 encji.** Cała lista z sekcji 4 briefu jest
   przerobiona pozycja po pozycji. Poza bazą świadomie zostali czterej ludzie
   wymienieni w briefie — Juncosa, Jensen, Riley i Dontchev — bo nie znalazłem
   dla nich dwóch niezależnych źródeł publicznych. Dalsza rozbudowa jest już
   kwestią wyboru, nie długu.
2. **Niezależność źródeł.** 73 ze 180 encji ma wszystkie źródła od jednego
   wydawcy — na starcie było ich 137. Metoda jest w rozdziale
   [Skąd biorą się źródła](#skąd-biorą-się-źródła). Zostaje głównie: pojedyncze
   loty Falcona 1 i Starshipa, wczesne misje przełomowe, biografie i część
   słownika. Każda z tych grup wymaga osobnego źródła na encję — nie ma już
   dokumentu, który pokrywa kilkanaście naraz.
3. **Gęstość linkowania.** Średnia 4,88 wobec celu 6; 144 encje są poniżej celu.
   W tej partii przeszedłem przez trzydzieści kilka najsłabszych encji i wplotłem
   linki w zdania zamiast doklejać je na końcu — stąd wzrost z 4,40. Domknięcie
   do szóstki wymaga tej samej roboty na pozostałych stu czterdziestu.
4. **Weryfikacja na prawdziwym telefonie.** `prefers-reduced-motion` jest
   obsłużone i w CSS, i w każdym komponencie z animacją, a haptyka siedzi za
   `navigator.userActivation`. Jedno i drugie sprawdziłem w kodzie i w
   przeglądarce na komputerze — na sprzęcie z włączonym systemowym ograniczeniem
   ruchu i z działającym silnikiem drgań nikt tego jeszcze nie widział.
5. **Tłumaczenie treści** — 174 encje bez wersji angielskiej.
6. **Widok grafu powiązań** (propozycja, nie zaczęte) — mapa połączeń między
   encjami we własnym SVG, z prostym układem siłowym. Pokazywałaby to, co jest
   sednem produktu i czego dziś nie widać nigdzie: gęstość i kształt sieci
   linków. To jest sensowna wersja pomysłu na „przestrzenną sferę haseł",
   który odrzuciliśmy — patrz niżej.

### Odrzucone świadomie

**Sfera haseł w 3D.** Efekt czytelny na pokazie i uciążliwy w użyciu: słabo się
czyta, źle trafia palcem, nie da się obsłużyć klawiaturą, wymaga biblioteki 3D
i dubluje wyszukiwarkę oraz sekcję słownika. Brief nazywa to wprost dekoracją
bez funkcji. Zamiast tego proponujemy widok grafu powiązań, który zaspokaja tę
samą potrzebę i niesie informację.

**Intro opóźniające wejście do treści.** Sprzeczne z briefem i z celem
wydajnościowym. Zamiast tego ekran startowy pojawiający się dopiero wtedy, gdy
ładowanie naprawdę trwa.

## Android

Aplikacja jest instalowalna wprost z Chrome na Androidzie: pełny ekran, własna
ikona, tryb offline, bez sklepu i bez opłat. Manifest, ikony i service worker
powstają przy budowaniu — szczegóły w [Offline i wydajność](#offline-i-wydajność).

Dla Google Play właściwą drogą jest **Capacitor** — opakowuje istniejący kod
bez przepisywania czegokolwiek, daje plik `.aab`, ikonę, splash i dostęp do
`@capacitor/haptics`, czyli haptykę niezależną od zgody przeglądarki.
Potrzebne: Android Studio i JDK 17, klucz podpisujący, konto Google Play
Developer, ikona, zrzuty ekranu i polityka prywatności (krótka — aplikacja nie
zbiera żadnych danych).

Trusted Web Activity przez Bubblewrap jest cieńsza, ale wymaga hostingu na HTTPS
z Digital Asset Links i nie daje dostępu do haptyki.

**Uwaga do sklepu:** Google Play jest wyczulone na aplikacje używające cudzych
znaków towarowych w nazwie i ikonie. Nazwa „Strefa Wiedzy" jest bezpieczna, opis
musi wprost mówić, że to projekt niezależny, a w ikonie nie może być logotypu
SpaceX.

---

## Autorzy

**Dead Net & Claude**

Treść pochodzi ze źródeł publicznych wymienionych w każdym arkuszu. Kod i teksty
napisane od zera. Projekt nie jest powiązany z żadną z opisywanych firm.
