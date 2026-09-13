# Historia zmian

Schemat numeracji: `0.<faza>.<partia>`. Opis schematu jest w
[README](README.md#numeracja-wersji).

---

## 0.6.0 — 13 września 2026

**Graf powiązań.**

Ostatnia z propozycji z fazy zero doczekała się realizacji. 180 haseł i 884
połączenia na jednym obrazku, we własnym SVG, bez żadnej biblioteki.

Układ liczy się do końca przed pierwszym narysowaniem — 300 iteracji metodą
Fruchtermana-Reingolda, około 60 ms — i potem się nie rusza. Animowana symulacja
rozjeżdżająca się po otwarciu byłaby ruchem, którego nikt nie wywołał, a przy
okazji kazałaby czekać, zanim da się cokolwiek przeczytać. Ziarno losowości jest
stałe, więc graf wygląda tak samo przy każdym otwarciu.

Do klasycznej metody dołożone jest słabe ciążenie węzłów do kotwicy własnej
sekcji. To ono zamienia kłębek w czytelny obraz: widać skupisko Tesli, skupisko
SpaceX i Muska jako most między nimi.

Podpisy są odsiewane z kolizji — rysowane od najgęściej powiązanych, pomijane
gdy wchodzą na już postawiony albo uciekają poza kadr. Każdy ma obrys w kolorze
tła, bo stoi na plątaninie krawędzi.

Obsługa: przesuwanie, kółko, szczypanie, przyciski skali. Dotknięcie węzła
liczone w promieniu 26 px od środka, więc kilkupikselowa kropka ma normalne pole
dotyku. Z klawiatury strzałki przenoszą wybór do sąsiada w danym kierunku,
Enter otwiera hasło, a pasek wyboru ma `aria-live`.

Otwarcie encji nie zamyka grafu — zamknięcie arkusza wraca do tego samego
miejsca i tego samego wyboru. Tak samo działa tryb filmowy; oba są miejscami,
z których się eksploruje.

Widok jest doczytywany leniwie, więc pierwsze wejście do aplikacji nie zmieniło
się ani o milisekundę: Lighthouse 99 / 100, FCP 1,5 s, LCP 1,7 s, CLS 0.

## 0.5.3 — 13 września 2026

**Gęstość linkowania: 4,88 → 6,01. Cel z briefu osiągnięty.**

Trzy przejścia, każde innego rodzaju.

Pierwsze było mechaniczne: skrypt `gestosc.ts` wskazał 39 miejsc, w których
nazwa istniejącej encji stała w treści jako zwykły tekst. 37 z nich zamieniono
na chipy, dwa odrzucono — nazwa miejsca nie powinna prowadzić do encji o ludziach.

Drugie było najważniejsze. Encje deklarują powiązania w polu `powiazane`, każde
z własnym uzasadnieniem, ale 116 z nich nie miało odpowiednika w tekście —
relacja istniała w danych i nie istniała dla czytelnika. Każde takie powiązanie
dostało zdanie w treści encji, pisane pod konkretny kontekst, nie z szablonu.

Trzecie dodało 53 połączenia, których nie było ani w tekście, ani w powiązaniach,
a które są prawdziwe: Kestrel chłodzony ablacyjnie zamiast regeneracyjnie,
Model Y jako główny produkt Szanghaju i Berlina naraz, nazwa X wracająca po
dwudziestu latach od X.com, zagęszczenie odłamków największe na orbitach
heliosynchronicznych, gdzie tłoczą się małe satelity.

Żadna encja nie ma już mniej niż pięć linków w treści — przed tą partią było ich
dziesięć z trzema. Pięćdziesiąt cztery encje są wciąż poniżej szóstki; średnia
jest celem z briefu, ale rozkład da się jeszcze wyrównać.

## 0.5.2 — 13 września 2026

**Niezależność źródeł, przejście drugie: 88 → 73 encje oparte na jednym wydawcy.**

Trzynaście nowych źródeł. Pierwotne: archiwum startów SpaceX z opisami stanowisk,
strona Colossusa od xAI, opis systemu w Las Vegas od The Boring Company, strona
badań klinicznych Neuralinku. Niezależne wtórne: Spaceflight Now dla lotów 1, 7,
8 i 9 Starshipa, SpaceNews dla lotu 11, CBS News dla akcji serwisowej Autopilota,
Yahoo Finance dla przejęcia xAI.

Znalezione przy weryfikacji:

- **Przejęcie xAI przez SpaceX** z lutego 2026 było zapisane przy xAI, ale encja
  o SpaceX nadal opisywała firmę jako stojącą na trzech filarach i nie wspominała
  o sztucznej inteligencji. Doszedł akapit, fakt i wydarzenie na osi.
- **Rozbudowa systemu w Las Vegas**: encja podawała tylko odcinek do Resorts
  World z 2024 roku, a wykonawca opisuje rozbudowę samego systemu do 2,1 mili
  i pięciu stacji. Doszły też koszt ryczałtowy i przepustowość.
- **Colossus** podwojono do dwustu tysięcy kart w kolejne 92 dni po pierwszych
  122 — encja kończyła opowieść na pierwszym etapie.

Nowe fakty ze źródeł: dokładny czas lotu 1 Starshipa (237,474 sekundy) i 63
działania naprawcze wymagane przez urząd, ustalona przyczyna utraty statku przy
locie 8, podniesienie limitu startów z Boca Chica z pięciu do dwudziestu pięciu
rocznie, zakres akcji serwisowej Autopilota z grudnia 2023.

## 0.5.1 — 13 września 2026

**Niezależność źródeł: 137 → 88 encji opartych na jednym wydawcy.**

Baza spełniała regułę briefu formalnie — każda encja miała po dwa źródła — ale
137 ze 180 miało oba od tego samego wydawcy, najczęściej Wikipedii. Dwa artykuły
tej samej encyklopedii nie są dwoma niezależnymi źródłami.

Dziewięć nowych źródeł, w większości pierwotnych: przewodnik dla klientów SpaceX,
strony techniczne Starshipa, Dragona i Starlinka, raport roczny Tesli złożony
w nadzorze giełdowym, katalog orbit NASA, strona NASA o impulsie właściwym,
odpowiedzi biura NASA do spraw śmieci orbitalnych i prezentacja NASA o programie
COTS. Encji z co najmniej jednym źródłem pierwotnym: 18 → 74.

Przy weryfikacji wyszło siedem rozbieżności, wszystkie zapisane zamiast
wygładzone. Najpoważniejsza dotyczyła Robotaxi: encja twierdziła, że zapowiedź
z 2016 roku się nie ziściła, podczas gdy Tesla zapisuje w raporcie rocznym
uruchomienie usługi w czerwcu 2025. To była luka merytoryczna, nie kwestia
przypisu — encja dostała nowy akapit, fakt i wydarzenie na osi.

Poza tym: ciąg 981 kN był podpisany jako Merlin 1D w próżni zamiast Merlin 1D
Vacuum; stosunek ciągu do masy Merlina rozjeżdżał się między dwiema encjami
i jest teraz oznaczony jako sporny; dane Starshipa różnią się między producentem
a katalogami lotów i encje podają obie wersje; liczba odłamków orbitalnych,
opóźnienie łącza geostacjonarnego i liczba satelitów Starlinka na stronie SpaceX
także rozchodzą się między źródłami i wszystkie trzy pokazują teraz obie wartości.

Nowe fakty ze źródeł pierwotnych: zakres dławienia Merlina, bezpirotechniczne
rozdzielanie stopni Falcona 9, hel jako czynnik nośny w Falconie wobec własnego
paliwa w Starshipie, układ 13 sterowanych silników Super Heavy, spadochrony
Dragona.

Metoda jest opisana w README, w rozdziale „Skąd biorą się źródła".

## 0.5.0 — 13 września 2026

**Faza piąta: tryb offline, skorowidz, wirtualizacja osi i pomiar.**

Aplikacja działa bez sieci. Cała baza — 36 plików, około 1,1 MB — zapisuje się
przy pierwszej wizycie i potem otwiera się bez serwera: ekran główny, arkusze,
wyszukiwarka, oś czasu, tryb filmowy i diagramy. Sprawdzone przez wyłączenie
serwera i przeładowanie strony, nie przez przeczytanie konfiguracji.

Nowa wersja instaluje się w tle i przejmuje przy kolejnym uruchomieniu. Podmiana
strony w trakcie czytania byłaby wyrwaniem jej użytkownikowi spod palca.

Manifest, ikony (własne SVG, cztery rozmiary) i robots.txt — aplikacja jest
instalowalna wprost z Chrome na Androidzie.

**Pierwsze wejście: 91 → 99 punktów Lighthouse, FCP 2,3 → 1,6 s, LCP 3,1 → 1,7 s.**

Złożyły się na to cztery rzeczy. Skorowidz — generowana lekka wersja bazy bez
treści, faktów, powiązań i źródeł, czyli bez wszystkiego, co widać dopiero po
otwarciu arkusza. Warstwy wyjeżdżające na wierzch doczytywane przy pierwszym
otwarciu, co zdejmuje ze ścieżki startowej framer-motion i wyszukiwarkę. React
w osobnej porcji, bo Rollup doklejał go do porcji z animacjami. I pełna baza
budowana dopiero po pierwszym malowaniu.

Największy pojedynczy zysk — siedem punktów — dała jednak zapowiedź skorowidza
w HTML-u, i nie chodziło o bajty, tylko o kolejność: ładowany dynamicznie, był
odkrywany o jedną podróż do serwera za późno.

**Dostępność 100, dobre praktyki 100, SEO 100.**

Trzy realne błędy, nie kosmetyka. Liczniki w pasku sekcji miały kontrast 4,37:1
wobec wymaganych 4,5 — przezroczystość zbijała kolor poniżej progu. Kafle,
przełącznik języka i karta dnia miały `aria-label` niezawierający widocznego
tekstu, przez co sterowanie głosem prosiło o „PL", a przeglądarka szukała
przycisku „Polski"; opisy przeniesione do tekstu dla czytnika. Brakowało
robots.txt.

**Wirtualizacja osi czasu.** Przesuwalna oś rysowała wszystkie 317 znaczników
i sześćdziesiąt lat skali — 996 węzłów DOM, z czego prawie wszystkie poza
ekranem. Teraz trzyma to, co widać, plus ekran zapasu: 102–272 węzły zależnie
od miejsca, cały dokument z 3 347 do 1 937. Pozostałe listy zostają bez
wirtualizacji świadomie — najdłuższa ma 44 pozycje.

Po drodze jedno mierzalne przesunięcie układu: kafel bohatera czyta licznik
lotów z faktów, których w skorowidzu nie było, więc blok pojawiał się dopiero
po dojechaniu pełnej bazy i spychał w dół resztę ekranu. Encja bohatera
zachowuje teraz fakty; CLS wrócił do zera.

## 0.4.6 — 13 września 2026

**Partia ósma — siedemnaście encji. Minimum z briefu osiągnięte: 180.**

- SpaceX: Mechazilla, SLC-4E, Crew-9, Europa Clipper.
- Ludzie: JB Straubel, Martin Eberhard, Franz von Holzhausen, rodzina Muska.
- Tesla: pakiet wynagrodzenia Muska, splity akcji.
- Reszta imperium: DOGE, Starlink na Ukrainie.
- Słownik: równanie Ciołkowskiego, stopniowanie, prędkość ucieczki, stosunek
  ciągu do masy, kriogenika.

Tą partią domyka się faza trzecia. Lista z sekcji 4 briefu jest przerobiona
pozycja po pozycji; poza bazą zostali czterej ludzie, dla których nie znalazłem
dwóch niezależnych źródeł publicznych.

Cztery encje tej partii dotyczą spraw spornych i są napisane według tej samej
reguły: co się wydarzyło, kto co twierdzi, czego nie da się rozstrzygnąć.
Przy Starlinku na Ukrainie osobno stoi pierwotna wersja biografii Isaacsona,
osobno odpowiedź Muska i osobno sprostowanie autora. Przy DOGE osobno liczby
deklarowane i osobno ustalenia izby kontroli GAO z sierpnia 2026. Przy pakiecie
wynagrodzenia status pakietu zastępczego jest oznaczony jako sporny, bo źródła
podają rozbieżne wersje. Przy rodzinie Muska motyw przeprowadzki dziadka do RPA
jest podany tak, jak podają go źródła, razem z tym, że jest sporny.

Poza nowymi encjami: przejście przez trzydzieści kilka najsłabiej powiązanych
encji i wplecenie w nie linków. Średnia gęstość linkowania wzrosła z 4,40 do
4,88 przy celu 6.

Nowych źródeł: 27, w tym pierwsze pierwotne dokumenty giełdowe (proxy Tesli
z 2022 roku) i trzy strony NASA. Encji ze źródłem pierwotnym: 18 ze 180.

## 0.4.5 — 13 września 2026

**Partia siódma — dziewiętnaście encji. Tesla i loty operacyjne.**

- Tesla, dziewięć haseł: trzy plany generalne, Semi, SolarCity, dach solarny,
  Supercharger, NACS, gigafabryki w Szanghaju i Berlinie oraz robotaxi.
- SpaceX, osiem haseł: Commercial Crew, Crew-1, program Transporter, baza
  Vandenberg, rekordowy człon B1067, przedział międzystopniowy, małe satelity
  i wodowanie.
- Słownik: orbita biegunowa.
- Ludzie: Kimbal Musk — pierwsza encja o nim, choć pojawiał się już w trzech
  innych jako wspólnik i współzałożyciel fundacji.

Ta partia domyka dwa wątki, które wcześniej wisiały w powietrzu. Pierwszy to
Tesla jako firma energetyczna, nie tylko samochodowa: SolarCity, dach solarny
i Supercharger dopiero razem tłumaczą, po co był drugi plan generalny. Drugi to
strona operacyjna SpaceX — do tej pory baza opisywała rekordy i przełomy,
a niewiele mówiła o tym, co firma robi w zwykły wtorek: wynosi cudze małe
satelity z Kalifornii na orbitę biegunową i wozi ludzi na stację.

Kilka encji powstało z myślą o linkowaniu wstecz. Przedział międzystopniowy
tłumaczy dwie awarie Falcona 1 opisane dawno temu, wodowanie domyka powroty
Demo-2, Crew-1 i Fram2, a małe satelity wyjaśniają, dlaczego program Transporter
w ogóle ma sens ekonomiczny.

Encji: 163 z docelowych 180+. Walidator i przegląd bez błędów i ostrzeżeń.

## 0.4.4 — 13 września 2026

**Partia szósta — dwadzieścia encji. Lista pojęć z briefu domknięta.**

- Pozostałe loty testowe Starshipa: 2, 3, 4, 6 i 8. Seria jest teraz kompletna
  od pierwszego lotu po trzynasty.
- Dziesięć haseł słownika: impuls właściwy, metaloks i keroloks, dławienie
  ciągu, chłodzenie regeneracyjne, sterowanie wektorem ciągu, osłona termiczna,
  tankowanie orbitalne, dokowanie i cumowanie, okno startowe, nogi lądownicze.
- Cargo Dragon, Direct to Cell, łącza laserowe, Kwajalein, Gigafactory Teksas.

Po tej partii **cała lista pojęć do słownika z sekcji 4 briefu jest zrobiona** —
od orbit i delta-v po zespół Kesslera. Sekcja słownika liczy 34 hasła i jest
najliczniejsza w bazie, co było zamierzone: to w hasła klika się wewnątrz tekstu.

Kilka encji tej partii powstało po to, żeby domknąć wątki rozrzucone wcześniej
po innych: chłodzenie regeneracyjne tłumaczy awarię trzeciego lotu Falcona 1,
nogi lądownicze wyjaśniają, dlaczego Super Heavy ich nie ma, a dokowanie
i cumowanie prostuje nieścisłość powtarzaną przy locie Dragona z 2012 roku.

## 0.4.3 — 13 września 2026

**Tryb filmowy i ekran startowy.**

- **Tryb filmowy**: cała historia po kolei, przewijana sama, z tempem ½×, 1× i 2×,
  filtrem po firmie, licznikiem postępu i rokiem wypisanym wielkim stopniem pisma
  w rogu jako znacznik rozdziału. Dotknięcie wstrzymuje, spacja też. Wejście
  w encję nie zamyka filmu — arkusz otwiera się nad nim, film czeka w tym samym
  miejscu i wraca po zamknięciu arkusza.
- Przewijanie realizuje natywny `scrollTop` inkrementowany co klatkę, dzięki
  czemu przeciąganie palcem i przewinięcie filmu ręką działają same z siebie.
- Przycisk trybu filmowego stoi zaraz pod kaflem Starshipa, z obrysem
  w błękicie zamiast materiału — odróżnia akcję od tematu.
- **Ekran startowy** zamiast gołego napisu „Wczytywanie bazy". Pojawia się
  dopiero po 250 ms i przy szybkim starcie nie mignie ani razu.

**Co ujawnił tryb filmowy**

Przy przewijaniu wydarzeń jedno po drugim widać było, że ten sam kamień milowy
pojawia się dwa, a nawet trzy razy pod rząd. Kontrakt CRS należy i do historii
Falcona 1, i do programu COTS, i do historii firmy — na osi każdej z tych encji
ma prawo być, ale na osi globalnej, która je scala, czyta się jak błąd.
Znalazło się piętnaście takich powtórzeń.

Globalna oś odsiewa je teraz przy budowie bazy, zostawiając wystąpienie z encji
najbardziej szczegółowej. Osie poszczególnych encji zostają nietknięte. Liczba
wydarzeń na osi globalnej spadła z 248 do 231. Przegląd pilnuje, żeby
powtórzenia nie wróciły niezauważone.

**Odrzucone świadomie**

Sfera haseł w 3D — czytelna na pokazie, uciążliwa w użyciu i dublująca
wyszukiwarkę. Zamiast niej do listy zadań trafił widok grafu powiązań.

## 0.4.2 — 13 września 2026

**Miejsca i ludzie SpaceX — dwadzieścia encji.**

- Miejsca: Hawthorne, McGregor, LC-39A, SLC-40, strefy lądowania LZ-1 i LZ-2.
- Ludzie: Tom Mueller, Hans Koenigsmann, Bill Gerstenmaier, Behnken i Hurley
  oraz zbiorcza encja o wczesnej ekipie Falcona 1.
- Pojazdy i silniki: Dragon 1, warianty Falcona 9, Starshield, Draco i SuperDraco.
- Loty Starshipa: 1, 7, 9, 10, 11 i 12.

Ta partia poprawiła też bilans źródeł pierwotnych — z siedmiu do dziewięciu
encji — bo materiał o stanowiskach startowych i o programie komercyjnym
NASA dokumentuje sama agencja.

**Czego nie dowiozłem i dlaczego**

Brief wymienia wśród ludzi Marka Juncosę, Jessicę Jensen, Billa Rileya
i Kiko Dontcheva. Nie znalazłem dla nich źródeł, które spełniałyby wymóg
dwóch niezależnych pozycji, więc ich nie napisałem. Zasada z sekcji 3 briefu
jest tu jednoznaczna: lepiej mniej encji pewnych niż więcej zmyślonych.
Podobnie ze stanowiskiem SLC-4E w Vandenberg.

Przy encji o Hawthorne najczęściej powtarzany szczegół — że halę zbudował
Northrop pod sekcje kadłuba Boeinga 747 — udało się potwierdzić tylko
częściowo, więc fakt jest oznaczony jako sporny, a ciekawostkę oparłem na
pierwszej siedzibie firmy w El Segundo, która ma twarde źródło.

## 0.4.1 — 13 września 2026

**Reszta imperium — dwadzieścia encji.**

- Wczesne firmy: Zip2, X.com, PayPal, a do tego biografia — Pretoria i droga
  na zachód oraz Mars Oasis, czyli pomysł, który po nieudanym zakupie rosyjskich
  rakiet zamienił się w SpaceX.
- Neuralink i implant N1, z opisem odłączenia osiemdziesięciu pięciu procent
  nitek u pierwszego pacjenta i sporu o badania na zwierzętach.
- The Boring Company, Las Vegas Loop i Not-a-Flamethrower.
- OpenAI, spór sądowy Muska z tą organizacją, xAI, Grok i Colossus.
- Przejęcie Twittera, platforma X, Hyperloop, Fundacja Muska i styl zarządzania.
- Tematy trudne opisane rzeczowo: dwa incydenty Groka, zarzuty wobec fundacji
  o niewypłacanie wymaganego minimum i o dotacje dla podmiotów powiązanych,
  badania na zwierzętach w Neuralinku, przegrana Muska z OpenAI na przedawnieniu.

**Poprawki**

- Nagłówek ekranu głównego łamał „Strefa Wiedzy" na dwie linie po dodaniu
  przycisku szukania. Układ przestawiony na iOS-owy: pasek kontrolek, pod nim
  tytuł na pełnej szerokości.
- Przegląd zakładał na sztywno jedną datę aktualizacji i po zmianie dnia
  zgłaszałby fałszywy alarm. Teraz liczy wiek treści i źródeł względem dzisiaj,
  z progiem 180 dni, i pokazuje rozkład dat zamiast wymagać jednej.
- Heurystyka `stanNa` łapała „Liczba elektrod" i „Liczba sztuk", czyli parametr
  konstrukcyjny i zamkniętą serię. Wzorzec wymaga teraz, żeby etykieta liczyła
  coś, czego w czasie faktycznie przybywa.

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
