/**
 * Scalanie bazy, domykanie relacji w obie strony i budowa globalnej osi czasu.
 *
 * Relacje piszemy ręcznie w polu `powiazane` każdej encji — także zwrotnie,
 * bo powód musi być inny w każdą stronę. Ten moduł dokłada tylko brakujące
 * zwroty jako `przychodzace`, żeby żadna encja nie była ślepym zaułkiem.
 */

import type {
  BazaWiedzy, Encja, EncjaZIndeksem, IndeksRelacji, Jezyk, Kategoria, Powiazanie, Wydarzenie,
} from './types';
import { wyciagnijLinki } from '../lib/linkify';
import { zastosuj, type Nakladka } from './tlumaczenia/nakladka';

const LADOWACZE: Record<Kategoria, () => Promise<Encja[]>> = {
  'spacex-rakiety': () => import('./entities/spacex-rakiety').then((m) => m.rakiety),
  'spacex-silniki': () => import('./entities/spacex-silniki').then((m) => m.silniki),
  'spacex-misje': () => import('./entities/spacex-misje').then((m) => m.misje),
  'spacex-miejsca': () => import('./entities/spacex-miejsca').then((m) => m.miejsca),
  'spacex-ludzie': () => import('./entities/spacex-ludzie').then((m) => m.ludzie),
  'tesla': () => import('./entities/tesla').then((m) => m.teslaEncje),
  'musk-i-reszta': () => import('./entities/musk-i-reszta').then((m) => m.muskIReszta),
  'pojecia': () => import('./entities/pojecia').then((m) => m.pojecia),
};

export const KATEGORIE = Object.keys(LADOWACZE) as Kategoria[];

/**
 * Usuwa powtórzenia z globalnej osi czasu.
 *
 * Ten sam kamień milowy słusznie należy do kilku encji — kontrakt CRS jest
 * wydarzeniem i w historii Falcona 1, i w programie COTS, i w historii firmy.
 * Na osi każdej z nich ma być. Na osi globalnej, która je scala, powtarza się
 * trzy razy pod rząd i czyta się jak błąd. Problem ujawnił dopiero tryb filmowy,
 * gdzie wydarzenia przewijają się jedno po drugim.
 *
 * Zostawiamy wystąpienie z encji najbardziej szczegółowej, przybliżając
 * szczegółowość liczbą wydarzeń: encja poświęcona jednemu lotowi ma ich jedno,
 * encja zbiorcza kilka. Przy remisie decyduje identyfikator, żeby wynik był
 * powtarzalny między uruchomieniami.
 */
function odsiejPowtorzenia(
  os: ReadonlyArray<Wydarzenie & { encjaId: string }>,
  encje: Record<string, EncjaZIndeksem>,
): Array<Wydarzenie & { encjaId: string }> {
  const grupy = new Map<string, Array<Wydarzenie & { encjaId: string }>>();
  for (const w of os) {
    const klucz = `${w.data}|${w.tytul.trim().toLowerCase()}`;
    grupy.set(klucz, [...(grupy.get(klucz) ?? []), w]);
  }

  const wybrane = [...grupy.values()].map((lista) => {
    if (lista.length === 1) return lista[0];
    return [...lista].sort((a, b) => {
      const ile = (id: string) => encje[id]?.os.length ?? 0;
      return ile(a.encjaId) - ile(b.encjaId) || a.encjaId.localeCompare(b.encjaId);
    })[0];
  }).filter((w): w is Wydarzenie & { encjaId: string } => w !== undefined);

  return wybrane.sort((a, b) => a.data.localeCompare(b.data));
}

/** Buduje indeks z gotowej listy encji. Wydzielone, żeby testy nie musiały być asynchroniczne. */
export function zbudujBaze(
  wpisy: ReadonlyArray<readonly [Kategoria, Encja[]]>,
  nakladka: Nakladka = {},
  /** Czy budujemy wersję kanoniczną (polską) — wtedy nakładki nie ma i nie brakuje. */
  kanoniczny = true,
): BazaWiedzy {
  const przychodzace: IndeksRelacji['przychodzace'] = {};
  const linkiWTresci: IndeksRelacji['linkiWTresci'] = {};
  const encje: Record<string, EncjaZIndeksem> = {};
  const kolejnosc: string[] = [];
  const osGlobalna: Array<Wydarzenie & { encjaId: string }> = [];

  for (const [kategoria, lista] of wpisy) {
    for (const oryginal of lista) {
      const tlumaczenie = nakladka[oryginal.id];
      const e = zastosuj(oryginal, tlumaczenie);
      const linki = wyciagnijLinki(e.tresc);
      linkiWTresci[e.id] = linki;
      encje[e.id] = {
        ...e, kategoria, wychodzace: e.powiazane, przychodzace: [],
        linkiWTresci: linki, przetlumaczona: kanoniczny || tlumaczenie !== undefined,
      };
      kolejnosc.push(e.id);
      for (const w of e.os) osGlobalna.push({ ...w, encjaId: e.id });
    }
  }

  // Zwroty: każda deklaracja A → B tworzy wpis B ← A z powodem napisanym przy A.
  for (const id of kolejnosc) {
    const e = encje[id];
    if (e === undefined) continue;
    for (const p of e.powiazane) {
      const lista = przychodzace[p.id] ?? [];
      lista.push({ id, powod: p.powod });
      przychodzace[p.id] = lista;
    }
  }

  for (const id of kolejnosc) {
    const e = encje[id];
    if (e === undefined) continue;
    e.przychodzace = przychodzace[id] ?? [];
  }

  osGlobalna.sort((a, b) => a.data.localeCompare(b.data));

  return {
    encje, kolejnosc, indeks: { przychodzace, linkiWTresci },
    osGlobalna: odsiejPowtorzenia(osGlobalna, encje),
  };
}

/** Nakładki tłumaczeniowe. Polski nie ma żadnej — jest wersją kanoniczną. */
const NAKLADKI: Record<Jezyk, () => Promise<Nakladka>> = {
  pl: () => Promise.resolve({}),
  en: () => import('./tlumaczenia/en').then((m) => m.en),
};

const pamiec = new Map<Jezyk, Promise<BazaWiedzy>>();

/** Ładuje wszystkie kategorie równolegle i buduje bazę w danym języku. */
export function zaladujBaze(jezyk: Jezyk = 'pl'): Promise<BazaWiedzy> {
  const gotowe = pamiec.get(jezyk);
  if (gotowe !== undefined) return gotowe;

  const nowe = Promise.all([
    Promise.all(KATEGORIE.map(async (k) => [k, await LADOWACZE[k]()] as const)),
    NAKLADKI[jezyk](),
  ]).then(([wpisy, nakladka]) => zbudujBaze(wpisy, nakladka, jezyk === 'pl'));

  pamiec.set(jezyk, nowe);
  return nowe;
}

/** Powiązania do pokazania w sekcji „Prowadzi dalej": wychodzące plus zwroty bez duplikatów. */
export function prowadziDalej(e: EncjaZIndeksem): Powiazanie[] {
  const widziane = new Set(e.wychodzace.map((p) => p.id));
  return [...e.wychodzace, ...e.przychodzace.filter((p) => !widziane.has(p.id))];
}
