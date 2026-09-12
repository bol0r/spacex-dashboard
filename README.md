# Strefa Wiedzy — SpaceX

Polskojęzyczna, interaktywna encyklopedia SpaceX i całego ekosystemu Elona Muska.
Jednoekranowa aplikacja webowa, w której **każde pojęcie w tekście jest klikalne**:
dotknięcie nazwy wysuwa arkusz z definicją, liczbami, ciekawostką i osią czasu,
a z jego wnętrza można wejść głębiej. Nawigacja przez skojarzenia, nie przez menu.

**Wersja 0.3.3** · **by Dead Net & Claude**

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
- [Numeracja wersji](#numeracja-wersji)
- [Co zostało do zrobienia](#co-zostało-do-zrobienia)
- [Android](#android)

---

## Stan projektu

| Faza | Zakres | Stan |
|---|---|---|
| 0 | Design plan, kontrakt danych, fazowanie | gotowe |
| 1 | Szkielet, tokeny, ekran główny, walidator | gotowe |
| 2 | Stos arkuszy, gesty, chipy `[[id]]`, relacje dwukierunkowe | gotowe |
| 3 | Treść — 84 z 180+ encji | w toku |
| 4 | Wyszukiwarka, tryb osi czasu, losowanie, ulubione | nierozpoczęte |
| 5 | PWA, wydajność, pomiar dostępności, dopieszczenie | nierozpoczęte |

Poza planem, na życzenie: przeprojektowany ekran główny z paskiem sekcji,
przesuwalna oś czasu, karta dnia, zastrzeżenie o braku powiązania, wybór języka,
cztery diagramy SVG, credits i numer wersji.

```
Encje: 84 · Wydarzenia: 160 · Źródła w katalogu: 66 · Diagramy: 4
Błędy walidatora: 0 · Ostrzeżenia: 0 · Ślepe zaułki: 0
Średnio linków [[id]] w treści: 4,38 (cel ≥ 6)
Tłumaczenia EN: interfejs w całości, treść 6 / 84 encji
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
| `npm run build` | `tsc -b` i build produkcyjny do `dist/` |
| `npm run preview` | podgląd builda |
| `npm test` | testy walidatora, parsera `[[id]]` i indeksu relacji |
| `npm run waliduj` | walidator bazy z raportem |
| `npm run przeglad` | pełny przegląd jakości (osiem grup sprawdzeń) |
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

## Numeracja wersji

Schemat `0.<faza>.<partia>`. Wersja `0.3.3` znaczy: faza 3, trzecia partia
treści. Numer stoi w `package.json` i jest wstrzykiwany do kodu przez Vite jako
`__WERSJA__` — kopiowanie go do stałej w źródłach kończy się rozjazdem
z manifestem paczki. `1.0.0` będzie zarezerwowane dla odbioru całości:
180+ encji, zamknięte fazy 4 i 5.

## Co zostało do zrobienia

Lista uszeregowana po wadze, nie po kolejności faz.

1. **Treść — około 100 encji.** Brakuje: reszty imperium (Zip2, PayPal,
   Neuralink, The Boring Company, OpenAI, xAI, X, Hyperloop), biografii Muska,
   miejsc SpaceX (Hawthorne, McGregor, LC-39A, SLC-40, SLC-4E, strefy lądowania),
   ludzi z listy w briefie, pozostałych lotów Starshipa i pozostałych haseł
   słownika.
2. **Niezależność źródeł.** 65 z 84 encji ma wszystkie źródła od jednego
   wydawcy, najczęściej Wikipedii. Siedem encji ma źródło pierwotne (NASA, SEC).
   To najpoważniejsza słabość jakościowa bazy.
3. **Gęstość linkowania.** Średnia 4,38 wobec celu 6; 72 encje są poniżej celu.
   Domknięcie wymaga przepisania akapitów, nie doklejania linków.
4. **Faza 4** — wyszukiwarka (Fuse.js, `threshold` 0,35), tryb osi czasu z
   filtrem po firmie, „Pokaż mi coś", ulubione i historia.
5. **Faza 5** — PWA i tryb offline, generowany lekki skorowidz zamiast ładowania
   wszystkich kategorii na ekranie głównym, wirtualizacja list powyżej 60
   elementów, pomiar Lighthouse, weryfikacja `prefers-reduced-motion`
   i haptyki na prawdziwym telefonie.
6. **Tłumaczenie treści** — 78 encji bez wersji angielskiej.

## Android

Aplikacja jest przygotowana pod PWA i po fazie 5 będzie instalowalna wprost
z Chrome na Androidzie: pełny ekran, własna ikona, tryb offline, bez sklepu
i bez opłat.

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
