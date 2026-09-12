/**
 * Pełny przegląd projektu. Walidator sprawdza kontrakt encji; ten skrypt
 * szuka rzeczy, których kontrakt nie obejmuje, a które psują jakość:
 * niezależności źródeł, martwych wpisów w katalogu, zapisów [[id]] bez
 * etykiety, encji niewidocznych na żadnym ekranie i luk w tłumaczeniach.
 */

import { WSZYSTKIE, WEDLUG_KATEGORII } from '../src/data/wszystkie';
import { Z } from '../src/data/zrodla';
import { zbudujBaze } from '../src/data/index';
import { walidujBaze } from '../src/lib/validate';
import { ulozSekcje, BOHATER, rozmiarKafla } from '../src/app/uklad';
import { en } from '../src/data/tlumaczenia/en';
import { sprawdzNakladke } from '../src/data/tlumaczenia/nakladka';
import type { Kategoria } from '../src/data/types';

const wpisy = Object.entries(WEDLUG_KATEGORII) as Array<[Kategoria, typeof WSZYSTKIE]>;
const baza = zbudujBaze(wpisy);
const wynik = walidujBaze(WSZYSTKIE);

let uwagi = 0;
const sekcja = (tytul: string) => console.log(`\n── ${tytul} ──`);
const zglos = (tekst: string) => { uwagi += 1; console.log(`  ! ${tekst}`); };
const ok = (tekst: string) => console.log(`  ✓ ${tekst}`);

/* 1. Kontrakt encji ------------------------------------------------------- */
sekcja('Kontrakt encji');
const bledy = wynik.naruszenia.filter((n) => n.waga === 'blad');
const ostrzezenia = wynik.naruszenia.filter((n) => n.waga === 'ostrzezenie');
bledy.length === 0 ? ok('zero błędów walidatora') : zglos(`${bledy.length} błędów walidatora`);
ostrzezenia.length === 0 ? ok('zero ostrzeżeń') : zglos(`${ostrzezenia.length} ostrzeżeń`);
console.log(`  · encji: ${wynik.liczbaEncji}, wydarzeń: ${baza.osGlobalna.length}`);
console.log(`  · średnio linków w treści: ${wynik.sredniaLinkowWTresci.toFixed(2)}`);

/* 2. Unikalność identyfikatorów ------------------------------------------- */
sekcja('Identyfikatory');
const licznik = new Map<string, number>();
for (const e of WSZYSTKIE) licznik.set(e.id, (licznik.get(e.id) ?? 0) + 1);
const duplikaty = [...licznik].filter(([, n]) => n > 1);
duplikaty.length === 0
  ? ok('brak duplikatów')
  : zglos(`duplikaty: ${duplikaty.map(([id]) => id).join(', ')}`);

const zleSlugi = WSZYSTKIE.filter((e) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id));
zleSlugi.length === 0
  ? ok('wszystkie identyfikatory w poprawnym formacie slug')
  : zglos(`zły format: ${zleSlugi.map((e) => e.id).join(', ')}`);

/* 3. Niezależność źródeł -------------------------------------------------- */
sekcja('Niezależność źródeł');
const jedenWydawca = WSZYSTKIE.filter((e) => {
  const wydawcy = new Set([...e.zrodla, ...e.ciekawostki.map((c) => c.zrodlo)].map((z) => z.wydawca));
  return wydawcy.size < 2;
});
console.log(`  · encje z jednym wydawcą we wszystkich źródłach: ${jedenWydawca.length} / ${WSZYSTKIE.length}`);
if (jedenWydawca.length > 0) {
  zglos(`do wzmocnienia: ${jedenWydawca.slice(0, 12).map((e) => e.id).join(', ')}${jedenWydawca.length > 12 ? ` … +${jedenWydawca.length - 12}` : ''}`);
}
const zrodlaPierwotne = WSZYSTKIE.filter((e) =>
  [...e.zrodla, ...e.ciekawostki.map((c) => c.zrodlo)]
    .some((z) => /^(NASA|SpaceX|U\.S\.)/.test(z.wydawca)),
);
console.log(`  · encje z co najmniej jednym źródłem pierwotnym: ${zrodlaPierwotne.length}`);

/* 4. Katalog źródeł ------------------------------------------------------- */
sekcja('Katalog źródeł');
const uzyte = new Set(
  WSZYSTKIE.flatMap((e) => [...e.zrodla, ...e.ciekawostki.map((c) => c.zrodlo)]).map((z) => z.url),
);
const martwe = Object.entries(Z).filter(([, z]) => !uzyte.has(z.url));
martwe.length === 0
  ? ok(`wszystkie ${Object.keys(Z).length} wpisów katalogu są używane`)
  : zglos(`nieużywane wpisy: ${martwe.map(([k]) => k).join(', ')}`);

const zleUrl = Object.entries(Z).filter(([, z]) => !/^https:\/\/[^\s]+\.[^\s/]+/.test(z.url));
zleUrl.length === 0 ? ok('wszystkie adresy na https i poprawne') : zglos(`złe adresy: ${zleUrl.map(([k]) => k).join(', ')}`);

/* 5. Zapisy [[id]] -------------------------------------------------------- */
sekcja('Linki w treści');
const bezEtykiety: string[] = [];
for (const e of WSZYSTKIE) {
  for (const trafienie of e.tresc.join('\n').matchAll(/\[\[([a-z0-9-]+)\]\]/g)) {
    if ((trafienie[1] ?? '').includes('-')) bezEtykiety.push(`${e.id} → ${trafienie[1]}`);
  }
}
bezEtykiety.length === 0
  ? ok('brak zapisów [[id]] bez etykiety, które wyświetliłyby slug')
  : zglos(`bez etykiety: ${bezEtykiety.join(', ')}`);

const slepe = baza.kolejnosc.filter((id) => {
  const e = baza.encje[id];
  return e !== undefined && e.wychodzace.length + e.przychodzace.length < 4;
});
slepe.length === 0 ? ok('brak ślepych zaułków') : zglos(`ślepe zaułki: ${slepe.join(', ')}`);

const ponizejCelu = baza.kolejnosc.filter((id) => (baza.indeks.linkiWTresci[id]?.length ?? 0) < 6);
console.log(`  · encje poniżej celu 6 linków w treści: ${ponizejCelu.length} / ${WSZYSTKIE.length}`);

/* 6. Widoczność w interfejsie --------------------------------------------- */
sekcja('Widoczność w interfejsie');
const sekcje = ulozSekcje(baza);
const widoczne = new Set([BOHATER, ...sekcje.flatMap((s) => s.encje)]);
const niewidoczne = baza.kolejnosc.filter((id) => !widoczne.has(id));
niewidoczne.length === 0
  ? ok('każda encja ma kafel na ekranie głównym')
  : zglos(`bez kafla: ${niewidoczne.join(', ')}`);
console.log(`  · sekcje: ${sekcje.map((s) => `${s.id}=${s.encje.length}`).join(', ')}`);

const rozmiary = new Map<string, number>();
for (const id of baza.kolejnosc) {
  const e = baza.encje[id];
  if (e === undefined) continue;
  const r = rozmiarKafla(e);
  rozmiary.set(r, (rozmiary.get(r) ?? 0) + 1);
}
console.log(`  · rozmiary kafli: ${[...rozmiary].map(([r, n]) => `${r}=${n}`).join(', ')}`);

/* 7. Tłumaczenia ---------------------------------------------------------- */
sekcja('Tłumaczenia');
const niezgodnosci = sprawdzNakladke(WSZYSTKIE, en);
niezgodnosci.length === 0
  ? ok('nakładka angielska zgodna strukturalnie z oryginałem')
  : zglos(`niezgodności tablic: ${niezgodnosci.length}`);
const przetlumaczone = WSZYSTKIE.filter((e) => en[e.id] !== undefined).length;
console.log(`  · przetłumaczone: ${przetlumaczone} / ${WSZYSTKIE.length}`);

/* 8. Daty ----------------------------------------------------------------- */
sekcja('Daty');
const DZIS = '2026-09-12';
const zPrzyszlosci = WSZYSTKIE.flatMap((e) =>
  e.os.filter((w) => w.data > DZIS).map((w) => `${e.id}: ${w.data} ${w.tytul}`),
);
console.log(`  · wydarzenia po dacie aktualizacji (świadome, status „w rozwoju"): ${zPrzyszlosci.length}`);
for (const w of zPrzyszlosci) console.log(`    · ${w}`);

const stareAktualizacje = WSZYSTKIE.filter((e) => e.zaktualizowano !== DZIS);
stareAktualizacje.length === 0
  ? ok(`wszystkie encje zaktualizowane ${DZIS}`)
  : zglos(`inna data aktualizacji: ${stareAktualizacje.map((e) => e.id).join(', ')}`);

/* Podsumowanie ------------------------------------------------------------ */
console.log(`\n${uwagi === 0 ? 'PRZEGLĄD: bez uwag' : `PRZEGLĄD: ${uwagi} uwag do rozważenia`}`);
console.log('(uwagi nie są błędami — to lista rzeczy do poprawy, nie do zablokowania builda)\n');
