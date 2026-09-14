# Wdrożenie — jak wgrać Strefę Wiedzy na hosting

Aplikacja to zestaw zwykłych plików statycznych: bez bazy danych, bez PHP, bez
Node na serwerze. Da się ją położyć na darmowym Cloudflare Pages albo na
dowolnym własnym serwerze, także w podkatalogu.

---

## 1. Paczka

```bash
npm run wydanie
```

Polecenie przepuszcza projekt przez pełne sprawdzenie (build, testy, walidator,
przegląd jakości) i dopiero wtedy tworzy:

```
wydanie/strefa-wiedzy-<wersja>.zip
```

Około 0,4 MB, 37 plików. `index.html` leży od razu w korzeniu archiwum, a nie
w podkatalogu `dist/`. W środku są też dwa pliki konfiguracyjne dla hostingu:
`_headers` dla Cloudflare i ukryty `.htaccess` dla Apache.

**Jak paczka została sprawdzona.** Rozpakowana na zwykłym serwerze plików —
nie na podglądzie Vite — w korzeniu i w podkatalogu `/strefa/`. W obu przypadkach
aplikacja się ładuje, service worker rejestruje się z zakresem właściwego
katalogu, a po wyłączeniu serwera strona otwiera się dalej z pamięci przeglądarki.

---

## 2. Cloudflare Pages — za darmo

1. Zaloguj się na [dash.cloudflare.com](https://dash.cloudflare.com) (konto jest darmowe).
2. Wejdź w **Workers & Pages** → **Create application** → **Get started** →
   **Drag and drop your files**.
3. Wpisz nazwę projektu, np. `strefa-wiedzy`. Od niej zależy adres.
4. Przeciągnij plik `strefa-wiedzy-<wersja>.zip` (albo rozpakowany folder)
   w pole wgrywania.
5. Kliknij **Save and Deploy**.

Strona będzie pod adresem `https://<nazwa-projektu>.pages.dev`, od razu po HTTPS,
więc działa tryb offline i instalacja na telefonie.

Plik `_headers` Cloudflare stosuje sam — nic nie trzeba ustawiać w panelu.

**Kolejna wersja.** W tym samym projekcie wgraj nową paczkę jako nowe wdrożenie.
Adres się nie zmienia.

**Z wiersza poleceń** (wymaga jednorazowego zalogowania w przeglądarce):

```bash
npm run build
npx wrangler pages deploy dist
```

---

## 3. Własny serwer

Rozpakuj zawartość archiwum do katalogu, który serwer udostępnia — do korzenia
domeny albo do podkatalogu, na przykład `/strefa/`. Oba warianty są sprawdzone.
Nie trzeba nic przestawiać w plikach: ścieżki są względne.

**Apache.** Plik `.htaccess` jest w paczce. Ustawia typ pliku manifestu,
pamięć podręczną i kompresję. Działa, jeśli hosting pozwala na pliki `.htaccess`
(`AllowOverride`), co na typowym hostingu współdzielonym jest domyślne. Każda
reguła jest zabezpieczona tak, że brak modułu po stronie serwera nie wywróci
strony.

**nginx.** `.htaccess` jest ignorowany; odpowiednik do konfiguracji serwera:

```nginx
location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
location ~ (index\.html|sw\.js|manifest\.webmanifest)$ {
    add_header Cache-Control "no-cache";
}
```

Przy instalacji w podkatalogu dopisz go do ścieżek (`/strefa/assets/`).
Nowsze nginx znają typ `.webmanifest`; jeśli nie, dopisz do `mime.types`:
`application/manifest+json webmanifest;`.

**HTTPS jest potrzebny do trybu offline i instalacji jako aplikacja.** Po zwykłym
HTTP strona działa normalnie, tylko bez tych dwóch rzeczy.

### Dlaczego te ustawienia pamięci podręcznej mają znaczenie

Pliki w `assets/` mają odcisk treści w nazwie — nowa wersja to nowa nazwa, więc
mogą leżeć w pamięci przeglądarki bardzo długo. `index.html`, `sw.js` i manifest
takiego odcisku nie mają. Jeśli serwer każe je zapamiętać, to po wgraniu poprawki
użytkownicy dalej oglądają starą wersję, i nie da się tego naprawić z serwera.
Oba pliki konfiguracyjne pilnują dokładnie tego.

---

## 4. Przed prezentacją

**Otwórz stronę raz na każdym urządzeniu, którego użyjesz, jeszcze przed
spotkaniem.** Przy pierwszej wizycie cała baza zapisuje się w pamięci
przeglądarki, więc potem aplikacja działa nawet przy słabym Wi-Fi w sali albo
bez sieci.

**Po wgraniu poprawki nowa wersja przejmuje dopiero przy następnym
uruchomieniu.** To celowe: nikomu nie podmieniamy strony w trakcie czytania.
Żeby zobaczyć zmianę od razu, zamknij wszystkie karty z tą stroną i otwórz ją
ponownie; na telefonie zamknij kartę albo aplikację. Samo odświeżenie może nie
wystarczyć.

**Instalacja na telefonie.** Android (Chrome): menu → **Zainstaluj aplikację**.
iPhone (Safari): **Udostępnij** → **Do ekranu początkowego**.

**Na dużym ekranie** układ przechodzi w wersję szeroką — arkusze otwierają się
jako panel z boku, zamiast zasłaniać stronę.

**Indeksowanie.** `robots.txt` pozwala wyszukiwarkom indeksować stronę. Jeśli
adres ma zostać tylko dla ekipy, zmień w nim `Allow: /` na `Disallow: /` przed
zbudowaniem paczki.

---

## Czego nie robić

**Nie otwieraj `index.html` podwójnym kliknięciem.** Zobaczysz czarną stronę bez
żadnego komunikatu. Aplikacja startuje jako moduł JavaScript, a modułu wczytanego
z dysku przeglądarka nie wykona. Lokalnie trzeba ją uruchomić przez serwer:

```bash
npm run preview
```

i otworzyć `http://localhost:4173`.
