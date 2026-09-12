# Historia zmian

Schemat numeracji: `0.<faza>.<partia>`. Opis schematu jest w
[README](README.md#numeracja-wersji).

---

## 0.4.0 — 12 września 2026

**Faza 4: wyszukiwarka, tryb osi czasu, losowanie, ulubione i historia.**

- **Wyszukiwarka** na Fuse.js, w pełni offline. Wejście przyciskiem w nagłówku,
  pociągnięciem w dół na samej górze ekranu albo skrótem `⌘K` / `Ctrl+K`.
  Nawigacja strzałkami i Enterem, wyniki grupowane po typie, trafienia
  podświetlone w nazwie.
- **Pełna oś czasu** — pionowa, od najnowszych, z filtrem po firmie i licznikiem
  wydarzeń; kamienie milowe wyróżnione.
- **Pokaż mi coś** — losowa ciekawostka na pełnym ekranie, bez powtarzania
  poprzedniego wyniku.
- **Ulubione i historia** — serduszko w arkuszu, dwadzieścia ostatnich odwiedzin,
  oba w `localStorage`, oba jako poziome listy na ekranie głównym.
- **Przełącznik drgnięć** w stopce, zgodnie z wymogiem, żeby haptykę dało się
  wyłączyć.
- Trzy nakładki dzielą jedną powłokę — ten sam sposób wejścia, wyjścia, obsługi
  Escape i pułapki fokusu.

**Polska odmiana w wyszukiwarce**

Domyślna konfiguracja Fuse nie wystarczyła. Indeksujemy wersje bez znaków
diakrytycznych, bo „reuzywalnosc" ma znaleźć „Reużywalność". Do tego obcinamy
jedną i dwie końcowe litery pytania: wpisane „raptora" jest dłuższe niż „Raptor"
w bazie, a Fuse szuka wzorca wewnątrz tekstu, więc bez tego nie znajdowało nic.
Trafienie w nazwie bije trafienie w synonimach — bez tej reguły „starshipa"
wyrzucało najpierw Super Heavy, którego synonim to „dolny stopień Starshipa".

**Poprawki**

- Samodzielne odnośniki do źródeł — w losowaniu, pod ciekawostką i w sekcji
  „Skąd to wiem" — miały 16 px wysokości; dostały pełne pole dotyku.
- Licznik wydarzeń w trybie osi czasu stał w przewijanym rzędzie filtrów
  i uciekał poza krawędź na wąskim ekranie.

## 0.3.3 — 12 września 2026

**Słownik, credits i numer wersji.**

- Dwadzieścia haseł słownika: delta-v, GTO, SSO, perygeum i apogeum, hamowania
  powrotne, wejście atmosferyczne, siatki aerodynamiczne, osłona ładunku,
  autogeniczne wytwarzanie ciśnienia, stage zero, statyczny test ogniowy,
  generalna próba tankowania, scrub i nominal, anomalia, RUD, ITAR, kadencja
  startów, koszt kilograma, konstelacja, deorbitacja, zespół Kesslera.
- Credits „Dead Net & Claude" i numer wersji w stopce; wersja trzymana
  w `package.json` i wstrzykiwana przez Vite jako `__WERSJA__`.
- Nowy skrypt `npm run przeglad` — osiem grup sprawdzeń, których nie obejmuje
  kontrakt encji, w tym niezależność źródeł i martwe wpisy w katalogu.
- Nowy skrypt `npm run sprawdz` — build, testy, walidator i przegląd po kolei.
- Nakładka tłumaczeniowa obsługuje `nazwa`, bo nazwy opisowe („Niska orbita
  okołoziemska") wymagają tłumaczenia, a nazwy własne nie.

**Poprawki**

- Znaczniki na osi czasu miały 20 px wysokości przy wymaganych 44; pole dotyku
  rozszerzone pseudoelementem bez zmiany rysunku.
- Heurystyka `stanNa` łapała „Cena odzysku", bo wzorzec `/zysk/` trafiał
  w środek słowa „odzysku"; doszła granica wyrazu. Wykrywanie dat rozszerzone
  o formy mianownikowe miesięcy.
- Dwa hasła słownika były ślepymi zaułkami — domknięte relacjami zwrotnymi.
- Artykuł Spaceflight Now o rekordzie relotów leżał w katalogu nieużywany;
  trafił tam, gdzie dokumentuje treść.

## 0.3.2 — 12 września 2026

**Tesla — dwadzieścia encji.**

- Samochody w kolejności schodzenia z górnej półki cennika: Roadster, Model S,
  Model 3, Model X, Model Y, Cybertruck.
- Produkcja: piekło produkcyjne, gigafabryki, Gigafactory Nevada, ogniwa 4680,
  odlewanie wielkogabarytowe.
- Oprogramowanie: Autopilot, Full Self-Driving, Tesla Vision, dochodzenia
  NHTSA, Dojo.
- Energia i reszta: Powerwall, Megapack, Optimus, „funding secured".
- Tematy sporne opisane rzeczowo: spór o założycieli, rozbieżność między nazwą
  Full Self-Driving a poziomem 2 w klasyfikacji SAE, liczby NHTSA po obu
  stronach, obietnice Cybertrucka z 2019 zestawione z wersją produkcyjną.
- Sprawa „funding secured" oparta wprost na komunikacie Komisji Papierów
  Wartościowych — drugie źródło pierwotne w bazie.

## 0.3.1 — 12 września 2026

**Misje i przełomy — dwadzieścia jedna encja.**

- Pięć lotów Falcona 1, COTS i CRS, pierwsze dokowanie Dragona, CRS-7, AMOS-6,
  oba pierwsze lądowania, SES-10, lot demonstracyjny Falcona Heavy, Demo-2,
  Inspiration4, Ax-1, Polaris Dawn, Fram2, loty 5 i 13 Starshipa, kontrakt HLS.
- Pięć encji dowiązujących, bez których nowe linki wskazywałyby w pustkę:
  Falcon 1, Kestrel, barki dronowe, Jared Isaacman, Sarah Gillis.
- Cztery diagramy we własnym SVG: sylwetki rakiet w skali, profil powrotu
  pierwszego stopnia, dwa warianty obiegu silnika, skala wysokości orbit.
  Rejestr przypisań osobny od danych, żeby nie dotykać kontraktu encji.
- Zastrzeżenie o braku powiązania ze SpaceX w stopce i w metadanych strony.
- Wybór języka: interfejs po polsku i angielsku, treść encji przez nakładkę
  z polskim jako wersją kanoniczną.
- Przeprojektowany ekran główny: przyklejony pasek sekcji z licznikami, sekcje
  liczone z bazy, przesuwalna oś czasu, karta dnia zaziarniona datą.

**Poprawki**

- Oś czasu miała liniową skalę od 1967 roku, w którym jest jedno wydarzenie,
  więc prawie połowa przewijania była pustką; puste lata są zwinięte
  i oznaczone przerywaną linią. Szerokość spadła z 2888 do 1602 px.
- Profil lotu rysował lądowanie w dół trasy, mimo że trzeci etap nazywa się
  hamowaniem wstecznym; przerysowany na profil powrotu nad stanowisko.
- Znacznik „tekst tylko po polsku" pokazywał się w polskiej wersji.
- Chip z zapisu `[[id]]` bez etykiety wyświetlał identyfikator z myślnikami.
- Heurystyka `stanNa` dawała pięć fałszywych ostrzeżeń na siedem; wzorce
  zawężone do etykiet naprawdę zliczających.

## 0.2.0 — 12 września 2026

**Faza 2: stos arkuszy, gesty i relacje dwukierunkowe.**

- Stos do czterech widocznych kart, okruszki od piątego poziomu.
- Gest zamykania napisany od zera na zdarzeniach wskaźnika. Wbudowane `drag`
  z framer-motion ustawia własne `touch-action` na całej karcie i zabijało
  przewijanie treści, więc nie dało się go użyć. Nowy gest śledzi palec 1:1
  i ma osobny próg prędkości obok progu odległości.
- Pięć dróg zamknięcia: gest w dół, gest od lewej krawędzi, Escape, przycisk,
  dotknięcie tła.
- Chipy `[[id]]` z polem dotyku powiększonym pseudoelementem, żeby nie ruszać
  interlinii akapitu.
- Arkusz w kolejności z briefu, z ciekawostką jako osobnym obiektem.
- Od 900 px arkusz staje się panelem po prawej, a strona ustępuje mu miejsca.
- Pułapka fokusu, `role="dialog"`, haptyka za sprawdzeniem aktywacji.

## 0.1.0 — 12 września 2026

**Faza 1: szkielet, tokeny i pierwsze encje.**

- Vite, React 18, TypeScript `strict`, Tailwind z paletą ograniczoną do pięciu
  kolorów projektu; `boxShadow` skasowany na poziomie systemu.
- Kontrakt danych i typy pochodne pod indeks i walidator.
- Walidator z trzynastoma regułami; błąd zatrzymuje build.
- `linkify` obsługuje `[[id]]` i `[[id|etykieta]]` — druga forma jest potrzebna
  do polskiej odmiany.
- Leniwe ładowanie kategorii i domykanie relacji w obie strony.
- Ekran główny z kaflem Starshipa jako modułem telemetrii, cztery rozmiary
  kafli, siatka 2 kolumny na telefonie i 4 od 900 px.
- Szesnaście encji z pełną treścią, faktami, ciekawostkami i źródłami.

## 0.0.0 — 12 września 2026

**Faza 0: plan.**

- Design plan: pięć nazwanych kolorów z uzasadnieniem, skala typograficzna
  z rolami, wireframe ekranu głównego i arkusza, pięć zasad projektu.
- Kontrakt danych w TypeScript.
- Podział pracy na fazy z kryteriami odbioru.
