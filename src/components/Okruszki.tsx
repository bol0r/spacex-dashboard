import { ChevronRight } from 'lucide-react';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';
import { useT } from '../i18n';

/**
 * Ścieżka wejścia w głąb. Pokazuje się dopiero wtedy, gdy stos jest dłuższy
 * niż liczba widocznych kart — czyli gdy piąty poziom scalił poprzednie.
 */
export function Okruszki({ sciezka }: { sciezka: readonly string[] }) {
  const baza = useBaza();
  const zamknijDo = useStan((s) => s.zamknijDo);
  const t = useT();

  return (
    <nav aria-label={t.sciezkaWejscia} className="przewin-poziomo -mx-5 flex items-center gap-1 px-5 pb-1 pt-2">
      {sciezka.map((id, i) => {
        const encja = baza.encje[id];
        if (encja === undefined) return null;
        return (
          <span key={`${id}-${i}`} className="flex shrink-0 items-center gap-1">
            {i > 0 && <ChevronRight size={12} className="text-tekst-2 opacity-60" aria-hidden="true" />}
            <button
              type="button"
              onClick={() => zamknijDo(i + 1)}
              className="rounded-chip px-1 py-[2px] text-podpis text-tekst-2"
            >
              {encja.nazwa}
            </button>
          </span>
        );
      })}
    </nav>
  );
}
