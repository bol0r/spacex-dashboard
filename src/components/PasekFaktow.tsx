import type { Fakt } from '../data/types';
import { dataKrotko } from '../lib/format';
import { useT } from '../i18n';

/**
 * Pasek faktów. Jedyne miejsce poza osią czasu, gdzie używamy kroju o stałej
 * szerokości — wartości muszą się wyrównywać w kolumnie liczb.
 */
export function PasekFaktow({ fakty }: { fakty: readonly Fakt[] }) {
  const t = useT();

  return (
    <div
      className="przewin-poziomo -mx-5 flex gap-2 px-5"
      role="list"
      aria-label={t.najwazniejszeLiczby}
    >
      {fakty.map((f) => (
        <div
          key={f.etykieta}
          role="listitem"
          className="flex min-w-[152px] max-w-[220px] shrink-0 snap-start flex-col justify-between
                     rounded-[14px] border-[0.5px] border-[color:var(--wlos)] p-3"
          style={{ background: 'var(--mat-kafel)' }}
        >
          <span className="text-przypis text-tekst-2">{f.etykieta}</span>
          <span className="liczby mt-2 font-mono text-[15px] leading-[20px] text-tekst">
            {f.wartosc}
          </span>
          <span className="mt-1 flex flex-col">
            {f.stanNa !== undefined && (
              <span className="liczby text-podpis text-tekst-2">{t.stanNa} {dataKrotko(f.stanNa)}</span>
            )}
            {f.pewnosc !== 'potwierdzone' && (
              <span className="text-podpis text-tekst-2">{t.pewnosci[f.pewnosc]}</span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
