/** Uruchamiany przez `npm run waliduj`. Wypisuje raport i ustawia kod wyjścia. */

import { WSZYSTKIE, WEDLUG_KATEGORII } from '../src/data/wszystkie';
import { walidujBaze } from '../src/lib/validate';
import { zbudujBaze } from '../src/data/index';
import type { Kategoria } from '../src/data/types';
import { LIMITY } from '../src/data/types';

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

console.log(bledy.length === 0 ? '\nWynik: ZIELONO\n' : '\nWynik: CZERWONO\n');
process.exit(bledy.length === 0 ? 0 : 1);
