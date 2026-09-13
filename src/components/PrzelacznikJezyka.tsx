import { useStan } from '../app/stan';
import { JEZYKI, NAZWY_JEZYKOW, useT } from '../i18n';

/**
 * Wybór języka. Przełącznik segmentowy, nie lista rozwijana — przy dwóch
 * pozycjach lista to dodatkowe dotknięcie bez żadnego zysku.
 */
export function PrzelacznikJezyka() {
  const jezyk = useStan((s) => s.jezyk);
  const ustawJezyk = useStan((s) => s.ustawJezyk);
  const t = useT();

  return (
    <div
      role="group"
      aria-label={t.jezyk}
      className="flex shrink-0 gap-1 rounded-pigulka p-1"
      style={{ background: 'var(--mat-kafel)' }}
    >
      {JEZYKI.map((j) => {
        const czynny = j === jezyk;
        return (
          <button
            key={j}
            type="button"
            onClick={() => ustawJezyk(j)}
            aria-pressed={czynny}
            aria-label={`${j.toUpperCase()} — ${NAZWY_JEZYKOW[j]}`}
            className={`dotyk min-h-[36px] min-w-[44px] rounded-pigulka px-3 text-przypis
                        ${czynny ? 'text-tlo' : 'text-tekst-2'}`}
            style={{ background: czynny ? 'var(--blekit)' : 'transparent' }}
          >
            {j.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
