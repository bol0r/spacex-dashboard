import type { Ciekawostka as TypCiekawostka } from '../data/types';
import { useT } from '../i18n';

/**
 * Nagroda za eksplorację, więc musi wyglądać jak inny obiekt niż reszta
 * arkusza: własny materiał, wyjście w margines i płomienna kreska po lewej.
 * Ciepły akcent jest tu wyłącznie znacznikiem na krawędzi — nie wypełnia bloku,
 * bo wtedy zacząłby konkurować z liczbami na żywo.
 */
export function Ciekawostka({ ciekawostki }: { ciekawostki: readonly TypCiekawostka[] }) {
  const t = useT();

  return (
    <div className="-mx-5 flex flex-col gap-3">
      {ciekawostki.map((c) => (
        <figure
          key={c.tekst.slice(0, 40)}
          className="border-l-2 border-plomien py-3 pl-4 pr-5"
          style={{ background: 'var(--mat-kafel-mocny)' }}
        >
          <figcaption className="text-podpis text-tekst-2">{t.ciekawostka}</figcaption>
          <p className="mt-1 max-w-[58ch] text-callout text-tekst">{c.tekst}</p>
          <a
            href={c.zrodlo.url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-podpis text-blekit"
          >
            {c.zrodlo.wydawca}
          </a>
        </figure>
      ))}
    </div>
  );
}
