import { podzielNaSegmenty } from '../lib/linkify';
import { Chip } from './Chip';

/** Akapity encji z zamienionymi [[id]] na chipy. Szerokość wiersza poniżej 70 znaków. */
export function Tresc({ akapity }: { akapity: readonly string[] }) {
  return (
    <div className="flex max-w-[62ch] flex-col gap-4">
      {akapity.map((akapit, i) => (
        <p key={i} className="text-tresc text-tekst">
          {podzielNaSegmenty(akapit).map((s, j) =>
            s.rodzaj === 'tekst'
              ? <span key={j}>{s.tekst}</span>
              : <Chip key={j} id={s.id} etykieta={s.etykieta} />,
          )}
        </p>
      ))}
    </div>
  );
}
