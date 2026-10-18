# Gotowe — wersja 0.7.1

## Paczka

```
wydanie/strefa-wiedzy-0.7.1.zip
```

Pełna ścieżka:
`/Users/aleksanderbielecki/Desktop/Projekty/SpaceX Dashboard/wydanie/strefa-wiedzy-0.7.1.zip`

Rozmiar 0,42 MB, 37 plików, `index.html` w korzeniu archiwum.
SHA-256: `c581a1e655146e1bdceee832d8b549299964e6c5d4ddfc29324ded617b846ab7`

Paczka 0.7.0 nadal leży obok — wgrywaj 0.7.1, bo ma wszystko, co 0.7.0,
plus poprawki opisane niżej.

**Sprawdzenie przed paczką:** build, 7 z 7 testów, walidator 0 błędów
i 0 ostrzeżeń, przegląd jakości bez uwag. Za pierwszym podejściem build
się nie udał: dwa nowe źródła dostały nazwy, które w katalogu już były.
Poprawione, drugie podejście przeszło bez błędów.

**Sprawdzenie po paczce:** zip rozpakowany na zwykłym serwerze plików.
Strona się ładuje, w stopce wersja 0.7.1. Encje z poprawkami (odlewanie,
Europa Clipper) pokazują nową treść i nowe źródła w „Skąd to wiem”. Konsola
pusta. Po wyłączeniu serwera strona i encje dalej otwierają się z pamięci
przeglądarki.

---

## Wgranie na Cloudflare Pages

1. **Workers & Pages** → kliknij istniejący projekt (albo **Create application**
   → **Drag and drop your files**, jeśli to pierwsze wgranie).
2. **Create a new deployment** → wybierz **Production**.
3. Przeciągnij `strefa-wiedzy-0.7.1.zip` w pole wgrywania i kliknij
   **Save and Deploy**.

Kto otwierał wcześniejszą wersję, zobaczy nową dopiero po zamknięciu wszystkich
kart ze stroną i ponownym otwarciu — tak jest ustawione celowo. Szczegóły
i wariant dla własnego serwera: `WDROZENIE.md`.

---

## Co się zmieniło od 0.7.0

Pełny opis z uzasadnieniem każdej decyzji: `CHANGELOG.md`, sekcja 0.7.1.
Zmiany w 0.7.0 (lot 14, liczniki, Roadster drugiej generacji) są w sekcji 0.7.0.

**Punkt 5 dokończony.** Każda ze 183 encji ma źródła od co najmniej dwóch
niezależnych wydawców — było 60 encji z jednym wydawcą, jest 0. Katalog
źródeł: 167 → 224. Pierwszeństwo miały dokumenty pierwotne: NASA, JPL,
komunikaty i prospekty złożone w SEC.

**Błędy znalezione przy porównaniu ze źródłami — poprawione:**
- Lot 2 Starshipa: statek przepadł tuż przed końcem pracy silników,
  nie przy powrocie.
- Lot 6 Starshipa: statek nie podchodził do wieży, tylko wodował zgodnie
  z planem.
- CRS-7: według niezależnego zespołu NASA to był błąd projektowy (ciekawostka
  twierdziła odwrotnie); liczby nośności śruby pochodzą od SpaceX.
- Europa Clipper: 11.04.2030 to wejście na orbitę Jowisza, przeloty nad
  Europą od 2031.
- Odlewanie wielkogabarytowe: Tesla nie porzuciła metody, odłożyła tylko
  podwozie z jednego odlewu.
- Dojo: w 2026 była zapowiedź wznowienia prac, nie restart.
- Zip2, X.com, PayPal: cena i daty według dokumentów SEC (Zip2: 307,2 mln
  gotówką; nazwa PayPal od lutego 2001; Thiel szefem od września 2000).
- Dokowanie: pierwszy samodzielny Crew Dragon to Demo-1 w marcu 2019.
- Do tego: smallsat (180 kg według NASA), NACS (nazwa od listopada 2022),
  Hyperloop (data sporna), Ax-1 (cena to szacunek), Model 3 (1 550 dostaw
  w IV kw. 2017), Gerstenmaier (styczeń 2021).

**Stan bazy:** 183 encje, 335 wydarzeń, 224 źródła, średnio 6,11 linku
w treści.

---

## Co pominąłem i dlaczego

- **Rodzina Muska:** drugie źródło o dziadku Muska (Pilot's Post) potwierdza
  przeprowadzkę do RPA i lot do Australii w 1954, ale nie dystans
  „30 tysięcy mil” — ta liczba nadal stoi tylko na Wikipedii.
- **Fundacja Muska:** liczby za 2024 (14,7 mld, 474 mln) nadal tylko
  z Wikipedii — raportu „New York Timesa” nie dało się otworzyć. Fortune
  potwierdza resztę.
- **Starshield:** strona SpaceX nie daje się odczytać; użyłem przedruku
  artykułu CNBC.
- **Wejście atmosferyczne:** złagodziłem „ciepło nie z tarcia” do „głównie
  ze sprężania; tarcie ma mniejszy udział”, bo drugie źródło wymienia oba
  zjawiska.
- **Daty z prospektów SEC zamiast z encyklopedii** (X.com, PayPal) — przy
  dacie odsunięcia Muska zostawiłem w treści informację, że część relacji
  mówi o październiku.
- **Nic nie zostało wypchnięte ani wdrożone.** Zmiany są w lokalnych commitach
  na gałęzi `master`.
