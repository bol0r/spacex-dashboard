/**
 * Zamiana zapisu [[id]] w polu `tresc` na strukturę, którą komponent renderuje
 * jako klikalny chip. Funkcja nie zna Reacta — zwraca czyste segmenty,
 * dzięki czemu ten sam parser obsługuje walidator i testy.
 */

export type Segment =
  | { rodzaj: 'tekst'; tekst: string }
  | { rodzaj: 'link'; id: string; etykieta: string };

/** [[id]] albo [[id|etykieta wyświetlana]] — druga forma na odmianę przez przypadki. */
const WZORZEC = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;

export function podzielNaSegmenty(akapit: string): Segment[] {
  const segmenty: Segment[] = [];
  let kursor = 0;

  for (const trafienie of akapit.matchAll(WZORZEC)) {
    const poczatek = trafienie.index;
    const id = trafienie[1];
    if (id === undefined) continue;

    if (poczatek > kursor) {
      segmenty.push({ rodzaj: 'tekst', tekst: akapit.slice(kursor, poczatek) });
    }
    segmenty.push({ rodzaj: 'link', id, etykieta: trafienie[2] ?? id });
    kursor = poczatek + trafienie[0].length;
  }

  if (kursor < akapit.length) {
    segmenty.push({ rodzaj: 'tekst', tekst: akapit.slice(kursor) });
  }
  return segmenty;
}

/** Wszystkie identyfikatory wymienione w akapitach, bez powtórzeń. */
export function wyciagnijLinki(akapity: readonly string[]): string[] {
  const zebrane = new Set<string>();
  for (const akapit of akapity) {
    for (const trafienie of akapit.matchAll(WZORZEC)) {
      const id = trafienie[1];
      if (id !== undefined) zebrane.add(id);
    }
  }
  return [...zebrane];
}

/** Tekst bez znaczników — do wyszukiwarki i liczenia długości. */
export function bezZnacznikow(akapit: string): string {
  return akapit.replace(WZORZEC, (_, id: string, etykieta?: string) => etykieta ?? id);
}
