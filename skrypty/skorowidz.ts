/**
 * Generator skorowidza — lekkiej wersji bazy pod pierwszy render.
 *
 * Problem, który to rozwiązuje, widać w pomiarze: ekran główny nie pokazuje
 * ani jednego akapitu treści, a mimo to czekał na wszystkie osiem porcji danych,
 * czyli pół megabajta. Na telefonie w wolnej sieci dawało to pierwsze malowanie
 * po 2,3 sekundy.
 *
 * Skorowidz zawiera dokładnie te pola, które czyta ekran główny, wyszukiwarka,
 * oś czasu, karta dnia i tryb filmowy: nazwę, opis, typ, status, ciekawostki
 * i wydarzenia. Nie ma w nim treści, faktów, powiązań ani katalogu źródeł —
 * czyli tego, co widać dopiero po otwarciu arkusza.
 *
 * Plik wynikowy jest generowany, nie pisany ręcznie, i powstaje przed każdym
 * budowaniem. Skrypt przeglądu sprawdza dodatkowo, czy jest aktualny — dzięki
 * temu nie da się go przypadkiem zostawić w tyle za danymi.
 *
 * Dane siedzą w środku jako pojedynczy literał tekstowy przepuszczany przez
 * JSON.parse. Wygląda to dziwnie, ale przeglądarka parsuje JSON zauważalnie
 * szybciej niż równoważny literał obiektowy, a to jest kod na ścieżce
 * pierwszego renderu.
 */

import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import type { Encja } from '../src/data/types';
import { WEDLUG_KATEGORII } from '../src/data/wszystkie';
import { BOHATER } from '../src/app/uklad';

const CEL = 'src/data/gen/skorowidz.ts';

/**
 * Pola zdejmowane ze skorowidza — wszystko, co widać dopiero w arkuszu.
 *
 * Jeden wyjątek: encja bohatera zachowuje fakty, bo jej kafel czyta z nich
 * licznik lotów. Bez tego blok pojawiał się dopiero po dojechaniu pełnej bazy
 * i zepchnął w dół całą resztę ekranu — mierzalne przesunięcie układu.
 */
function odchudz(e: Encja): Encja {
  const { tresc: _t, fakty, zrodla: _z, powiazane: _p, ...reszta } = e;
  return {
    ...reszta,
    tresc: [],
    fakty: e.id === BOHATER ? fakty : [],
    zrodla: [],
    powiazane: [],
  };
}

export function zbudujTrescPliku(): string {
  const lekkie: Record<string, Encja[]> = {};
  for (const [kategoria, lista] of Object.entries(WEDLUG_KATEGORII)) {
    lekkie[kategoria] = lista.map(odchudz);
  }

  // Podwójne JSON.stringify daje poprawny literał tekstowy JavaScriptu —
  // z ucieczkami dla cudzysłowów, ukośników i znaków spoza ASCII.
  const dane = JSON.stringify(JSON.stringify(lekkie));

  return `/* PLIK GENEROWANY PRZEZ skrypty/skorowidz.ts — NIE EDYTUJ RĘCZNIE.
   Odśwież przez: npm run skorowidz (robi to też npm run build). */

import type { Encja, Kategoria } from '../types';

/** Baza bez treści, faktów, powiązań i źródeł — tyle, ile potrzebuje ekran główny. */
export const SKOROWIDZ = JSON.parse(
  ${dane},
) as Record<Kategoria, Encja[]>;
`;
}

function main(): void {
  const tresc = zbudujTrescPliku();
  const sprawdzanie = process.argv.includes('--sprawdz');

  if (sprawdzanie) {
    const obecna = existsSync(CEL) ? readFileSync(CEL, 'utf8') : '';
    if (obecna !== tresc) {
      console.error(`BŁĄD: ${CEL} jest nieaktualny. Uruchom: npm run skorowidz`);
      process.exit(1);
    }
    console.log(`skorowidz aktualny (${(tresc.length / 1024).toFixed(0)} kB źródła)`);
    return;
  }

  writeFileSync(CEL, tresc);
  const encji = Object.values(WEDLUG_KATEGORII).reduce((s, l) => s + l.length, 0);
  console.log(`skorowidz: ${encji} encji, ${(tresc.length / 1024).toFixed(0)} kB źródła → ${CEL}`);
}

main();
