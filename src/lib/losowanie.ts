/**
 * Losowanie powtarzalne. Karta dnia musi być ta sama przy każdym wejściu
 * w ciągu doby — inaczej nie jest kartą dnia, tylko przyciskiem losującym.
 * Dlatego ziarnem jest data, a nie `Math.random()`.
 */

/** Skrót tekstu do 32 bitów (FNV-1a). Deterministyczny, bez zależności. */
function skrot(tekst: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < tekst.length; i++) {
    h ^= tekst.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Generator mulberry32 — mały, szybki, powtarzalny dla tego samego ziarna. */
export function generator(ziarno: string): () => number {
  let a = skrot(ziarno);
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Dzisiejsza data jako klucz losowania, w czasie lokalnym użytkownika. */
export function kluczDnia(dzis: Date = new Date()): string {
  const r = dzis.getFullYear();
  const m = String(dzis.getMonth() + 1).padStart(2, '0');
  const d = String(dzis.getDate()).padStart(2, '0');
  return `${r}-${m}-${d}`;
}

/** Wybiera element z listy w sposób powtarzalny dla danego ziarna. */
export function wybierz<T>(lista: readonly T[], ziarno: string): T | undefined {
  if (lista.length === 0) return undefined;
  return lista[Math.floor(generator(ziarno)() * lista.length)];
}
