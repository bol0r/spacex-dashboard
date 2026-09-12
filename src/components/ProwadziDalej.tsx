import type { EncjaZIndeksem } from '../data/types';
import { prowadziDalej } from '../data/index';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';

/**
 * Powiązania z podanym powodem. Powód jest tu najważniejszy — lista samych
 * nazw byłaby menu, a to ma być podpowiedź, po co tam iść.
 */
export function ProwadziDalej({ encja }: { encja: EncjaZIndeksem }) {
  const baza = useBaza();
  const otworz = useStan((s) => s.otworz);
  const pozycje = prowadziDalej(encja);

  return (
    <ul className="-mx-5 flex flex-col">
      {pozycje.map((p) => {
        const cel = baza.encje[p.id];
        if (cel === undefined) return null;
        return (
          <li key={p.id} className="border-t-[0.5px] border-[color:var(--wlos)] first:border-t-0">
            <button
              type="button"
              onClick={() => otworz(p.id)}
              aria-label={`${cel.nazwa} — ${p.powod}`}
              className="dotyk flex w-full items-baseline justify-between gap-4 px-5 py-3 text-left"
            >
              <span className="text-podtytul text-blekit">{cel.nazwa}</span>
              <span className="max-w-[56%] shrink-0 text-right text-przypis text-tekst-2">
                {p.powod}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
