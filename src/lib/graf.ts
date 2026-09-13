/**
 * Układ grafu powiązań.
 *
 * Baza jest siecią: każda encja deklaruje powiązania i linkuje inne w treści.
 * Ta sieć jest sednem produktu, a mimo to nigdzie jej nie widać — arkusz pokazuje
 * najwyżej sąsiadów jednego węzła. Ten moduł liczy rozkład całości na płaszczyźnie,
 * żeby dało się ją narysować.
 *
 * Dwie rzeczy są tu rozstrzygnięte świadomie.
 *
 * Po pierwsze: układ liczymy raz, do końca, zanim cokolwiek narysujemy. Klasyczna
 * animowana symulacja, w której węzły rozjeżdżają się na oczach użytkownika, jest
 * ruchem, którego nikt nie wywołał — a tego brief zabrania. Obraz ma być gotowy
 * w chwili otwarcia i nie ruszać się, dopóki ktoś go nie przesunie.
 *
 * Po drugie: losowość jest zasiana na stałe. Ten sam graf ma wyglądać tak samo
 * przy każdym otwarciu, bo inaczej użytkownik nie zbuduje sobie pamięci miejsca.
 */

import type { BazaWiedzy } from '../data/types';
import type { Sekcja } from '../data/types';
import { SEKCJE } from '../app/uklad';

export interface WezelGrafu {
  id: string;
  nazwa: string;
  sekcja: Sekcja;
  stopien: number;
  x: number;
  y: number;
  /** Promień rysowania — pochodna liczby połączeń, nie wartości merytorycznej. */
  r: number;
}

export interface KrawedzGrafu {
  a: string;
  b: string;
}

export interface Graf {
  wezly: WezelGrafu[];
  krawedzie: KrawedzGrafu[];
  /** Prostokąt obejmujący cały układ, z marginesem. */
  pole: { x: number; y: number; w: number; h: number };
  sasiedzi: Record<string, string[]>;
}

/** Generator o stałym ziarnie — ten sam graf ma wyglądać tak samo przy każdym otwarciu. */
function losowy(ziarno: number): () => number {
  let s = ziarno >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ITERACJE = 300;
const ROZMIAR = 1000;

/**
 * Buduje układ metodą Fruchtermana-Reingolda z jedną modyfikacją: węzły
 * z tej samej sekcji ciągnie słabo do wspólnego punktu. Bez tego graf jest
 * poprawny i nieczytelny — z tym widać, że słownik siedzi w środku, bo linkują
 * do niego wszyscy, a Tesla trzyma się na uboczu.
 */
export function zbudujGraf(baza: BazaWiedzy): Graf {
  const idy = baza.kolejnosc.filter((id) => baza.encje[id] !== undefined);
  const indeks = new Map(idy.map((id, i) => [id, i]));
  const n = idy.length;

  // Krawędzie bez powtórzeń i bez kierunku: para (a,b) i (b,a) to jedno połączenie.
  const pary = new Set<string>();
  const sasiedzi: Record<string, Set<string>> = {};
  for (const id of idy) sasiedzi[id] = new Set();

  for (const id of idy) {
    const e = baza.encje[id];
    if (e === undefined) continue;
    for (const cel of [...e.powiazane.map((p) => p.id), ...e.linkiWTresci]) {
      if (cel === id || indeks.get(cel) === undefined) continue;
      const klucz = id < cel ? `${id}|${cel}` : `${cel}|${id}`;
      pary.add(klucz);
      sasiedzi[id]?.add(cel);
      sasiedzi[cel]?.add(id);
    }
  }

  const krawedzie: KrawedzGrafu[] = [...pary].map((k) => {
    const [a = '', b = ''] = k.split('|');
    return { a, b };
  });

  // Kotwice sekcji rozstawione na okręgu — stała kolejność, więc stały obraz.
  const kotwice = new Map<Sekcja, { x: number; y: number }>();
  SEKCJE.forEach((s, i) => {
    const kat = (i / SEKCJE.length) * Math.PI * 2;
    // Elipsa wyższa niż szersza: ekran telefonu też taki jest, więc gotowy
    // układ zostawia mniej pustego miejsca nad i pod obrazkiem.
    kotwice.set(s.id, {
      x: ROZMIAR / 2 + Math.cos(kat) * ROZMIAR * 0.22,
      y: ROZMIAR / 2 + Math.sin(kat) * ROZMIAR * 0.34,
    });
  });

  const rnd = losowy(20260913);
  const x = new Float64Array(n);
  const y = new Float64Array(n);
  const dx = new Float64Array(n);
  const dy = new Float64Array(n);
  const sekcje: Sekcja[] = [];

  for (let i = 0; i < n; i++) {
    const id = idy[i] ?? '';
    const sekcja = sekcjaEncji(baza, id);
    sekcje.push(sekcja);
    const k = kotwice.get(sekcja) ?? { x: ROZMIAR / 2, y: ROZMIAR / 2 };
    x[i] = k.x + (rnd() - 0.5) * 120;
    y[i] = k.y + (rnd() - 0.5) * 120;
  }

  const k = Math.sqrt((ROZMIAR * ROZMIAR) / Math.max(1, n)) * 0.85;
  const kraw = krawedzie.map((e) => [indeks.get(e.a) ?? 0, indeks.get(e.b) ?? 0] as const);

  for (let iter = 0; iter < ITERACJE; iter++) {
    const temperatura = ROZMIAR * 0.08 * (1 - iter / ITERACJE) ** 1.4;
    dx.fill(0);
    dy.fill(0);

    // Odpychanie: każdy z każdym. Przy stu osiemdziesięciu węzłach to jeszcze
    // tanie, a daje układ bez sztuczek z przybliżaniem.
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let rx = (x[i] ?? 0) - (x[j] ?? 0);
        let ry = (y[i] ?? 0) - (y[j] ?? 0);
        let d2 = rx * rx + ry * ry;
        if (d2 < 0.01) { rx = (rnd() - 0.5) * 0.1; ry = (rnd() - 0.5) * 0.1; d2 = 0.01; }
        const sila = (k * k) / d2;
        dx[i] = (dx[i] ?? 0) + rx * sila;
        dy[i] = (dy[i] ?? 0) + ry * sila;
        dx[j] = (dx[j] ?? 0) - rx * sila;
        dy[j] = (dy[j] ?? 0) - ry * sila;
      }
    }

    // Przyciąganie wzdłuż krawędzi.
    for (const [a, b] of kraw) {
      const rx = (x[a] ?? 0) - (x[b] ?? 0);
      const ry = (y[a] ?? 0) - (y[b] ?? 0);
      const d = Math.max(0.01, Math.hypot(rx, ry));
      const sila = (d * d) / k / d;
      dx[a] = (dx[a] ?? 0) - rx * sila;
      dy[a] = (dy[a] ?? 0) - ry * sila;
      dx[b] = (dx[b] ?? 0) + rx * sila;
      dy[b] = (dy[b] ?? 0) + ry * sila;
    }

    // Słabe ciążenie do kotwicy sekcji — to ono robi z kłębka czytelne skupiska.
    for (let i = 0; i < n; i++) {
      const kot = kotwice.get(sekcje[i] ?? 'spacex') ?? { x: ROZMIAR / 2, y: ROZMIAR / 2 };
      dx[i] = (dx[i] ?? 0) + (kot.x - (x[i] ?? 0)) * 0.012;
      dy[i] = (dy[i] ?? 0) + (kot.y - (y[i] ?? 0)) * 0.012;
    }

    for (let i = 0; i < n; i++) {
      const d = Math.max(0.01, Math.hypot(dx[i] ?? 0, dy[i] ?? 0));
      const krok = Math.min(d, temperatura);
      x[i] = (x[i] ?? 0) + ((dx[i] ?? 0) / d) * krok;
      y[i] = (y[i] ?? 0) + ((dy[i] ?? 0) / d) * krok;
    }
  }

  const wezly: WezelGrafu[] = idy.map((id, i) => {
    const stopien = sasiedzi[id]?.size ?? 0;
    return {
      id,
      nazwa: baza.encje[id]?.nazwa ?? id,
      sekcja: sekcje[i] ?? 'spacex',
      stopien,
      x: x[i] ?? 0,
      y: y[i] ?? 0,
      r: 3 + Math.sqrt(stopien) * 1.9,
    };
  });

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const w of wezly) {
    minX = Math.min(minX, w.x - w.r); maxX = Math.max(maxX, w.x + w.r);
    minY = Math.min(minY, w.y - w.r); maxY = Math.max(maxY, w.y + w.r);
  }
  const margines = 40;

  return {
    wezly,
    krawedzie,
    pole: {
      x: minX - margines,
      y: minY - margines,
      w: maxX - minX + margines * 2,
      h: maxY - minY + margines * 2,
    },
    sasiedzi: Object.fromEntries(Object.entries(sasiedzi).map(([id, s]) => [id, [...s]])),
  };
}

/** Sekcja encji według tej samej reguły, której używa ekran główny. */
function sekcjaEncji(baza: BazaWiedzy, id: string): Sekcja {
  const kategoria = baza.encje[id]?.kategoria;
  if (id === 'spacex') return 'reszta-imperium';
  for (const s of SEKCJE) {
    if (kategoria !== undefined && s.kategorie.includes(kategoria)) return s.id;
  }
  return 'spacex';
}

const pamiec = new WeakMap<BazaWiedzy, Graf>();

/** Układ liczymy raz na bazę — przy zmianie języka zmienia się obiekt, więc i graf. */
export function grafDlaBazy(baza: BazaWiedzy): Graf {
  const gotowy = pamiec.get(baza);
  if (gotowy !== undefined) return gotowy;
  const g = zbudujGraf(baza);
  pamiec.set(baza, g);
  return g;
}
