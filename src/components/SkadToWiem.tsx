import type { Encja } from '../data/types';
import { dataKrotko } from '../lib/format';

/** Źródła. Zwinięte, ale nigdy ukryte — sekcja jest w każdym arkuszu. */
export function SkadToWiem({ encja }: { encja: Encja }) {
  // Źródła ciekawostek liczą się tak samo jak główne; usuwamy powtórzenia po URL.
  const wszystkie = [...encja.zrodla, ...encja.ciekawostki.map((c) => c.zrodlo)];
  const unikalne = wszystkie.filter(
    (z, i) => wszystkie.findIndex((inne) => inne.url === z.url) === i,
  );

  return (
    <details className="-mx-5 border-t-[0.5px] border-[color:var(--wlos)] px-5 pt-3">
      <summary className="dotyk cursor-pointer list-none py-1 text-naglowek text-tekst marker:hidden">
        Skąd to wiem
        <span className="liczby ml-2 text-podpis text-tekst-2">{unikalne.length}</span>
      </summary>

      <ul className="mt-2 flex flex-col gap-3 pb-2">
        {unikalne.map((z) => (
          <li key={z.url} className="flex flex-col">
            <a
              href={z.url}
              target="_blank"
              rel="noreferrer"
              className="max-w-[58ch] text-podtytul text-blekit"
            >
              {z.tytul}
            </a>
            <span className="liczby text-podpis text-tekst-2">
              {z.wydawca}, dostęp {dataKrotko(z.dostep)}
            </span>
          </li>
        ))}
      </ul>

      <p className="liczby pb-3 text-podpis text-tekst-2">
        Encja zaktualizowana {dataKrotko(encja.zaktualizowano)}
      </p>
    </details>
  );
}
