import type { BazaWiedzy } from '../data/types';

/**
 * Gęstość wydarzeń w czasie. Nie jest to kontrolka — pełny tryb osi czasu
 * przychodzi w fazie 4 — tylko odczyt z bazy: im więcej się działo w danym
 * roku, tym wyższy słupek. Kamienie milowe wagi 3 świecą płomieniem.
 */
export function PasekOsi({ baza }: { baza: BazaWiedzy }) {
  const lata = baza.osGlobalna.map((w) => Number(w.data.slice(0, 4)));
  const od = Math.min(...lata);
  const doR = Math.max(...lata);

  const kubelki = Array.from({ length: doR - od + 1 }, (_, i) => {
    const rok = od + i;
    const wydarzenia = baza.osGlobalna.filter((w) => Number(w.data.slice(0, 4)) === rok);
    return {
      rok,
      ile: wydarzenia.length,
      kamien: wydarzenia.some((w) => w.waga === 3),
    };
  });
  const maks = Math.max(...kubelki.map((k) => k.ile), 1);

  return (
    <section
      className="material col-span-2 rounded-kafel p-4 lg:col-span-2"
      aria-label={`Gęstość wydarzeń na osi czasu od ${od} do ${doR} roku`}
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-naglowek text-tekst">Oś czasu</h2>
        <span className="liczby text-podpis text-tekst-2">{od}–{doR}</span>
      </div>

      <div className="mt-3 flex items-end gap-[2px] h-10" aria-hidden="true">
        {kubelki.map((k) => (
          <span
            key={k.rok}
            className={`flex-1 rounded-[1px] ${k.kamien ? 'bg-plomien' : 'bg-tekst'} ${k.ile === 0 ? 'opacity-15' : 'opacity-80'}`}
            style={{ height: k.ile === 0 ? '3px' : `${Math.max(14, (k.ile / maks) * 100)}%` }}
          />
        ))}
      </div>

      <p className="liczby mt-2 text-podpis text-tekst-2">
        {baza.osGlobalna.length} wydarzeń w bazie
      </p>
    </section>
  );
}
