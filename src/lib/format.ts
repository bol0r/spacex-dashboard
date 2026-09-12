/** Drobne formatery. Wszystko po polsku, daty w zapisie, który czyta się na głos. */

const MIESIACE = [
  'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
  'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia',
];

/** "2026-09-18" → "18 września 2026"; "2026-09" → "wrzesień 2026"; "2026" → "2026". */
export function dataPoPolsku(iso: string): string {
  const [rok, miesiac, dzien] = iso.split('-');
  if (rok === undefined) return iso;
  if (miesiac === undefined) return rok;
  const nazwa = MIESIACE[Number(miesiac) - 1];
  if (nazwa === undefined) return iso;
  if (dzien === undefined) {
    return `${nazwa.replace(/a$/, '')} ${rok}`.replace('lutego', 'luty');
  }
  return `${Number(dzien)} ${nazwa} ${rok}`;
}

/** Krótki zapis do paska osi: "18.09.2026", "09.2026", "2026". */
export function dataKrotko(iso: string): string {
  const [rok, miesiac, dzien] = iso.split('-');
  if (rok === undefined) return iso;
  if (miesiac === undefined) return rok;
  if (dzien === undefined) return `${miesiac}.${rok}`;
  return `${dzien}.${miesiac}.${rok}`;
}

/** Liczba pełnych dni od dziś; ujemna, gdy data już minęła. */
export function dniDo(iso: string, dzis: Date = new Date()): number {
  const cel = new Date(`${iso.length === 4 ? `${iso}-01-01` : iso.length === 7 ? `${iso}-01` : iso}T00:00:00Z`);
  const teraz = Date.UTC(dzis.getUTCFullYear(), dzis.getUTCMonth(), dzis.getUTCDate());
  return Math.round((cel.getTime() - teraz) / 86_400_000);
}

/** 1 → "dzień", reszta → "dni". Jedyny nieregularny przypadek w tym słowie. */
export function dni(n: number): string {
  return n === 1 ? 'dzień' : 'dni';
}
