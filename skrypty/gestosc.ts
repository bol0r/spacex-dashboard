/**
 * Raport gęstości linkowania: wskazuje miejsca, w których nazwa istniejącej
 * encji występuje w treści jako zwykły tekst, a mogłaby być chipem. Sedno
 * produktu to klikalność pojęć, więc każda taka pominięta nazwa to strata.
 */

import { WSZYSTKIE } from '../src/data/wszystkie';
import { wyciagnijLinki } from '../src/lib/linkify';

interface Kandydat { encjaId: string; cel: string; fraza: string }

const nazwy = WSZYSTKIE.flatMap((e) => [e.nazwa, ...(e.aka ?? [])].map((n) => ({ id: e.id, n })))
  .filter(({ n }) => n.length >= 5)
  .sort((a, b) => b.n.length - a.n.length);

const kandydaci: Kandydat[] = [];

for (const e of WSZYSTKIE) {
  const juzLinkowane = new Set(wyciagnijLinki(e.tresc));
  const pelny = e.tresc.join('\n');
  // Usuwamy istniejące znaczniki, żeby nie trafiać w środek [[id|etykieta]].
  const goly = pelny.replace(/\[\[[^\]]+\]\]/g, ' ');

  for (const { id, n } of nazwy) {
    if (id === e.id || juzLinkowane.has(id)) continue;
    if (goly.includes(n)) {
      kandydaci.push({ encjaId: e.id, cel: id, fraza: n });
      juzLinkowane.add(id);
    }
  }
}

const wgEncji = new Map<string, Kandydat[]>();
for (const k of kandydaci) {
  const lista = wgEncji.get(k.encjaId) ?? [];
  lista.push(k);
  wgEncji.set(k.encjaId, lista);
}

console.log(`Kandydatów na chipy: ${kandydaci.length}\n`);
for (const [id, lista] of [...wgEncji].sort((a, b) => b[1].length - a[1].length)) {
  const obecne = wyciagnijLinki(WSZYSTKIE.find((e) => e.id === id)?.tresc ?? []).length;
  console.log(`${id} (teraz ${obecne}): ${lista.map((k) => `${k.fraza} -> ${k.cel}`).join(', ')}`);
}
