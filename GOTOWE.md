# Gotowe — wersja 0.7.0

## Paczka

```
wydanie/strefa-wiedzy-0.7.0.zip
```

Pełna ścieżka:
`/Users/aleksanderbielecki/Desktop/Projekty/SpaceX Dashboard/wydanie/strefa-wiedzy-0.7.0.zip`

Rozmiar 0,41 MB, 37 plików, `index.html` w korzeniu archiwum.
SHA-256: `36a226baccbaef8150af5de1e8766fbde3a12a2c91079195febc5077c2aa78a4`

**Sprawdzenie przed paczką:** build, 7 z 7 testów, walidator 0 błędów
i 0 ostrzeżeń, przegląd jakości bez błędów — za pierwszym podejściem,
bez poprawek.

**Sprawdzenie po paczce:** zip rozpakowany na zwykłym serwerze plików.
Strona się ładuje, w stopce wersja 0.7.0, kafel Starshipa pokazuje nowe dane,
encje Roadstera drugiej generacji i lotu 14 otwierają się z pełną treścią
i wszystkimi źródłami w „Skąd to wiem”. Konsola przy włączonym serwerze —
pusta. Po wyłączeniu serwera strona i obie encje dalej otwierają się
z pamięci przeglądarki.

---

## Wgranie na Cloudflare Pages

1. **Workers & Pages** → kliknij istniejący projekt (albo **Create application**
   → **Drag and drop your files**, jeśli to pierwsze wgranie).
2. **Create a new deployment** → wybierz **Production**.
3. Przeciągnij `strefa-wiedzy-0.7.0.zip` w pole wgrywania i kliknij
   **Save and Deploy**.

Kto otwierał wcześniejszą wersję, zobaczy nową dopiero po zamknięciu wszystkich
kart ze stroną i ponownym otwarciu — tak jest ustawione celowo. Szczegóły
i wariant dla własnego serwera: `WDROZENIE.md`.

---

## Co się zmieniło

Pełny opis z uzasadnieniem każdej decyzji: `CHANGELOG.md`, sekcja 0.7.0.

**1. Lot 14 Starshipa i pierwszy ekran**
- Lot 14 odbył się 28 września 2026 (nie 18): pierwsza orbita, 26 pracujących
  satelitów Starlink V3, misja przerwana po ok. 3 h zamiast niemal 10.
- Nowa encja `starship-lot-14`.
- Kafel Starshipa: 14 lotów, ostatni kamień milowy „Lot 14 — pierwsza orbita”,
  odliczanie do „Lot 15 — termin wstępny” (nie wcześniej niż 8.11.2026).

**2. Żywe liczniki**
- Rodzina Falcon 9: 708 startów, lądowania 667 z 680, Block 5 99,07%
  (stan na 13.10.2026).
- Falcon Heavy: 14 startów.
- Starlink: 11 154 satelitów na orbicie, 11 140 działających (15.10.2026,
  katalog Jonathana McDowella).
- Majątek Muska według Forbesa: ok. 908,5 mld USD (18.10.2026).
- Neuralink: 21 uczestników badań według Muska.
- Rekord osłony ładunku oznaczony jako sporny (źródła przypisują go różnym
  połówkom).

**3. Stan bieżący od połowy września**
- NASA dokupiła u SpaceX loty Crew-15, 16, 17 za 946 mln USD (18.09.2026);
  termin Starlinera „w trakcie przeglądu”.
- Tesla w III kwartale 2026: 486 532 dostawy, 13,7 GWh magazynów.
- Wycofane zapowiedzi produkcji wielkoseryjnej Optimusa, Semi i Cybercaba
  w 2026 roku; Cybercab produkowany w Gigafactory Texas.
- Falcon Heavy: teleskop Roman i NROL-97 na osi czasu.

**4. Roadster drugiej generacji**
- Nowa encja `tesla-roadster-2` z osią opóźnień od 2017 do pokazu
  15.10.2026, powiązana z Roadsterem, SpaceX, McGregor i Terafabem.
- Osiągi, rezerwacje i rok 2028 opisane jako deklaracje firmy, oznaczone
  jako sporne. Pięć źródeł: TechCrunch, Fox Business, The Next Web,
  dwa artykuły Electreka.

**5. Źródła**
- Encji opartych na jednym wydawcy: 66 → 60.

**6. Wersja** 0.7.0 w `package.json` i README.

**Stan bazy:** 183 encje, 333 wydarzenia, 167 źródeł, średnio 6,11 linku
w treści.

---

## Co pominąłem i dlaczego

- **„Roadster jechał bez kierowcy”** — żadne z pięciu otwartych źródeł tego
  nie potwierdza. Electrek pisze tylko, że Musk w sierpniu zapowiadał taki
  pokaz.
- **„Tylko jeden krótki skok”** — źródła opisują dwa przejazdy. Wpisałem,
  że czasu i wysokości lotu nie podano.
- **„Brak homologacji”** — wpisałem precyzyjniej: sama Tesla pisze, że wersja
  Rocket nie jest dopuszczona do ruchu; o dwóch pozostałych brak informacji.
- **Wycofanie Crew Dragona przed 2030** — jeden wewnętrznie niespójny
  artykuł, bez potwierdzenia od NASA ani SpaceX.
- **Zmiana nazwy działu AI SpaceX** — na razie tylko wypowiedź Muska.
- **Rozwój Robotaxi** — jedyne źródła to blogi, które sobie przeczą.
- **Liczby historyczne ze znacznikiem `stanNa`** (np. sprzedaż Modelu S
  w 2015) — nie przestawiałem im daty na dziś, bo dotyczą tamtej chwili.
- **Abonenci Starlinka** — nowszej liczby niż czerwcowe 12 mln nie podało
  żadne źródło, które dało się otworzyć.
- **`stanNa` = data źródła, nie data sprawdzenia** — liczby Falcona mają
  13.10, Starlinka 15.10, bo do tego dnia liczą źródła. Wpisanie 18.10
  sugerowałoby, że obejmują dni, których nie obejmują.
- **Punkt 5 przerwany po sześciu encjach** — żeby nie ryzykować punktów 6–8.
  Pozostałe 60 encji wymaga po jednym nowym źródle na encję.
- **Nic nie zostało wypchnięte ani wdrożone.** Zmiany są w lokalnych commitach
  na gałęzi `master`.
