import Fuse from 'fuse.js';
import type { BazaWiedzy, Encja, Typ } from '../data/types';

/**
 * Wyszukiwarka. W pełni offline, bo cała baza siedzi w pamięci.
 *
 * Polska odmiana jest tu głównym problemem: użytkownik wpisze „raptora"
 * albo „falcona", a w bazie stoi „Raptor" i „Falcon 9". Fuse radzi sobie
 * z dopiskiem kilku znaków, ale nie z ogonkami — dlatego indeksujemy dodatkowo
 * wersje bez znaków diakrytycznych i pytanie normalizujemy tak samo.
 */

export interface WpisIndeksu {
  id: string;
  nazwa: string;
  aka: string;
  krotki: string;
  typ: Typ;
  /** Wersje bez ogonków — „reuzywalnosc" ma znaleźć „Reużywalność". */
  nazwaBezOgonkow: string;
  krotkiBezOgonkow: string;
}

export function bezOgonkow(tekst: string): string {
  return tekst.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l').replace(/Ł/g, 'L');
}

function wpis(e: Encja): WpisIndeksu {
  const aka = (e.aka ?? []).join(' ');
  return {
    id: e.id,
    nazwa: e.nazwa,
    aka,
    krotki: e.krotki,
    typ: e.typ,
    nazwaBezOgonkow: bezOgonkow(`${e.nazwa} ${aka} ${e.id.replace(/-/g, ' ')}`),
    krotkiBezOgonkow: bezOgonkow(e.krotki),
  };
}

export function zbudujIndeks(baza: BazaWiedzy): Fuse<WpisIndeksu> {
  const wpisy = baza.kolejnosc
    .map((id) => baza.encje[id])
    .filter((e): e is NonNullable<typeof e> => e !== undefined)
    .map(wpis);

  return new Fuse(wpisy, {
    threshold: 0.35,
    ignoreLocation: true,
    includeMatches: true,
    minMatchCharLength: 2,
    keys: [
      { name: 'nazwa', weight: 3 },
      { name: 'nazwaBezOgonkow', weight: 3 },
      { name: 'aka', weight: 2 },
      { name: 'krotki', weight: 1 },
      { name: 'krotkiBezOgonkow', weight: 1 },
    ],
  });
}

export interface Trafienie {
  id: string;
  typ: Typ;
  /** Zakresy znaków w nazwie do podświetlenia. */
  zakresy: ReadonlyArray<readonly [number, number]>;
}

/**
 * Warianty pytania, którymi odpytujemy indeks. Kolejność ma znaczenie —
 * wyniki scalamy zachowując pierwsze wystąpienie, więc dopasowanie do pełnego
 * pytania wygrywa z dopasowaniem do formy skróconej.
 *
 * Obcięcie jednej i dwóch końcowych liter to najtańszy sposób obsługi polskiej
 * odmiany. Wpisane „raptora" jest dłuższe niż „Raptor" w bazie, a Fuse szuka
 * wzorca wewnątrz tekstu, więc dłuższy wzorzec po prostu nie ma gdzie się
 * zmieścić. Pełny stemmer byłby tu przesadą; ogonki i dwie litery końcówki
 * łapią praktycznie wszystkie przypadki, jakie spotykamy w tych nazwach.
 */
function warianty(pytanie: string): string[] {
  const bazowe = [pytanie, bezOgonkow(pytanie)];
  const skrocone = pytanie.length >= 5
    ? [pytanie.slice(0, -1), pytanie.slice(0, -2)].flatMap((p) => [p, bezOgonkow(p)])
    : [];
  return [...new Set([...bazowe, ...skrocone])];
}

export function szukaj(indeks: Fuse<WpisIndeksu>, pytanie: string, limit = 40): Trafienie[] {
  const czyste = pytanie.trim();
  if (czyste.length < 2) return [];

  const surowe = warianty(czyste).flatMap((w) => indeks.search(w, { limit }));

  const widziane = new Set<string>();
  const wynik: Array<Trafienie & { ranga: number }> = [];
  const rdzen = bezOgonkow(czyste).toLowerCase().slice(0, Math.max(4, czyste.length - 2));

  for (const t of surowe) {
    if (widziane.has(t.item.id)) continue;
    widziane.add(t.item.id);

    const wNazwie = (t.matches ?? []).find((m) => m.key === 'nazwa');
    // Dopasowanie w nazwie bije dopasowanie w synonimach. Bez tego „starshipa"
    // wyrzucało najpierw Super Heavy, bo jego synonim to „dolny stopień
    // Starshipa" — trafienie dosłowne, ale nie to, którego szukał użytkownik.
    const nazwa = bezOgonkow(t.item.nazwa).toLowerCase();
    const ranga = nazwa.startsWith(rdzen) ? 0 : nazwa.includes(rdzen) ? 1 : 2;

    wynik.push({ id: t.item.id, typ: t.item.typ, zakresy: wNazwie?.indices ?? [], ranga });
    if (wynik.length >= limit) break;
  }

  // Sortowanie stabilne, więc w obrębie tej samej rangi zostaje kolejność trafności.
  return wynik
    .map((w, i) => ({ w, i }))
    .sort((a, b) => a.w.ranga - b.w.ranga || a.i - b.i)
    .map(({ w }) => ({ id: w.id, typ: w.typ, zakresy: w.zakresy }));
}
