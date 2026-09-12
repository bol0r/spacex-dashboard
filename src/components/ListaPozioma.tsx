import type { BazaWiedzy } from '../data/types';
import { useStan } from '../app/stan';
import { useT } from '../i18n';

/**
 * Ulubione i historia jako poziome listy pigułek. Świadomie nie kafle: to nie
 * są tematy o różnej wadze, a ślad tego, co użytkownik sam odłożył albo
 * odwiedził — kolejność ma tu znaczenie, rozmiar nie.
 */
export function ListaPozioma({
  tytul, identyfikatory, baza, akcja,
}: {
  tytul: string;
  identyfikatory: readonly string[];
  baza: BazaWiedzy;
  akcja?: { etykieta: string; onKlik: () => void };
}) {
  const otworz = useStan((s) => s.otworz);
  const t = useT();

  if (identyfikatory.length === 0) return null;

  return (
    <section className="col-span-2 mt-5 lg:col-span-4">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="text-tytul-2 text-tekst">{tytul}</h2>
        {akcja !== undefined ? (
          <button
            type="button"
            onClick={akcja.onKlik}
            className="dotyk -my-2 min-h-[44px] px-1 text-przypis text-blekit"
          >
            {akcja.etykieta}
          </button>
        ) : (
          <span className="liczby shrink-0 text-przypis text-tekst-2">{identyfikatory.length}</span>
        )}
      </div>

      <ul className="przewin-poziomo -mx-4 flex gap-2 px-4">
        {identyfikatory.map((id) => {
          const encja = baza.encje[id];
          if (encja === undefined) return null;
          return (
            <li key={id} className="shrink-0">
              <button
                type="button"
                onClick={() => otworz(id)}
                aria-label={`${encja.nazwa} — ${encja.krotki}`}
                className="material dotyk flex min-h-[44px] max-w-[240px] flex-col items-start
                           justify-center rounded-pigulka px-4 py-2 text-left"
              >
                <span className="truncate text-podtytul text-tekst">{encja.nazwa}</span>
                <span className="text-podpis text-tekst-2">{t.typy[encja.typ]}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
