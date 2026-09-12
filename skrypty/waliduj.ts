/** Uruchamiany przez `npm run waliduj`. Wypisuje raport i ustawia kod wyjścia. */

import { WSZYSTKIE, WEDLUG_KATEGORII } from '../src/data/wszystkie';
import { walidujBaze } from '../src/lib/validate';
import { zbudujBaze } from '../src/data/index';
import type { Kategoria } from '../src/data/types';
import { LIMITY } from '../src/data/types';
import { en } from '../src/data/tlumaczenia/en';
import { sprawdzNakladke } from '../src/data/tlumaczenia/nakladka';

const wynik = walidujBaze(WSZYSTKIE);
const wpisy = Object.entries(WEDLUG_KATEGORII) as Array<[Kategoria, typeof WSZYSTKIE]>;
const baza = zbudujBaze(wpisy);

const bledy = wynik.naruszenia.filter((n) => n.waga === 'blad');
const ostrzezenia = wynik.naruszenia.filter((n) => n.waga === 'ostrzezenie');

const slepe = baza.kolejnosc.filter((id) => {
  const e = baza.encje[id];
  return e !== undefined && e.wychodzace.length + e.przychodzace.length < 4;
});

console.log('\n=== WALIDACJA BAZY ===');
console.log(`Encje:                 ${wynik.liczbaEncji} (cel docelowy: ${LIMITY.encjeMin})`);
console.log(`Średnio linków [[id]]: ${wynik.sredniaLinkowWTresci.toFixed(2)} (cel: ≥ ${LIMITY.linkiWTresciSredniaMin})`);
console.log(`Wydarzeń na osi:       ${baza.osGlobalna.length}`);
console.log(`Błędy:                 ${bledy.length}`);
console.log(`Ostrzeżenia:           ${ostrzezenia.length}`);

for (const n of bledy) console.log(`  BŁĄD  [${n.kod}] ${n.encjaId}: ${n.szczegol}`);
for (const n of ostrzezenia) console.log(`  OSTRZ [${n.kod}] ${n.encjaId}: ${n.szczegol}`);
if (slepe.length > 0) console.log(`  UWAGA  ślepe zaułki (<4 relacje łącznie): ${slepe.join(', ')}`);

const niezgodnosci = sprawdzNakladke(WSZYSTKIE, en);
const przetlumaczone = WSZYSTKIE.filter((e) => en[e.id] !== undefined).length;

console.log('\n=== TŁUMACZENIA (en) ===');
console.log(`Przetłumaczone:        ${przetlumaczone} / ${WSZYSTKIE.length}`);
console.log(`Niezgodności tablic:   ${niezgodnosci.length}`);
for (const n of niezgodnosci) {
  console.log(`  BŁĄD  ${n.encjaId}.${n.pole}: oczekiwano ${n.oczekiwano}, jest ${n.jest}`);
}

const wszystkieBledy = bledy.length + niezgodnosci.length;
console.log(wszystkieBledy === 0 ? '\nWynik: ZIELONO\n' : '\nWynik: CZERWONO\n');
process.exit(wszystkieBledy === 0 ? 0 : 1);
