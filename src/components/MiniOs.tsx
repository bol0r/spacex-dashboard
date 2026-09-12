import type { Wydarzenie } from '../data/types';
import { dataKrotko } from '../lib/format';

/** Oś czasu encji. Kamienie milowe wagi 3 dostają płomienną kropkę. */
export function MiniOs({ os }: { os: readonly Wydarzenie[] }) {
  const posortowane = [...os].sort((a, b) => a.data.localeCompare(b.data));

  return (
    <ol className="flex flex-col">
      {posortowane.map((w, i) => (
        <li key={w.data + w.tytul} className="flex gap-3">
          {/* Pionowa nitka łącząca kropki — rysowana obramowaniem, nie cieniem. */}
          <div className="flex w-2 shrink-0 flex-col items-center">
            <span
              className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${w.waga === 3 ? 'bg-plomien' : 'bg-tekst-2'}`}
            />
            {i < posortowane.length - 1 && (
              <span className="w-px flex-1 bg-[color:var(--wlos)]" />
            )}
          </div>
          <div className={i < posortowane.length - 1 ? 'pb-4' : ''}>
            <span className="liczby block text-przypis text-tekst-2">{dataKrotko(w.data)}</span>
            <span className="block text-podtytul text-tekst">{w.tytul}</span>
            <span className="mt-[2px] block max-w-[58ch] text-przypis text-tekst-2">{w.opis}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
