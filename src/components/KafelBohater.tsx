import type { Encja } from '../data/types';
import { SylwetkaStarship } from './Sylwetka';
import { dataKrotko, dniDo, dni, odmiana } from '../lib/format';

/**
 * Jedyny mocny akcent w aplikacji: kafel Starshipa jako moduł telemetrii.
 * Wszystko, co pokazuje, pochodzi wprost z encji — licznik z osi czasu,
 * liczba lotów i data aktualności z paska faktów. Płomień tylko na liczbie.
 */
export function KafelBohater({ encja, onOtworz }: { encja: Encja; onOtworz: (id: string) => void }) {
  const posortowane = [...encja.os].sort((a, b) => a.data.localeCompare(b.data));
  const nadchodzace = posortowane.find((w) => dniDo(w.data) > 0);
  const ostatni = [...posortowane].reverse().find((w) => dniDo(w.data) <= 0 && w.waga === 3);
  const loty = encja.fakty.find((f) => f.etykieta.startsWith('Liczba lotów'));
  const zaIle = nadchodzace === undefined ? null : dniDo(nadchodzace.data);

  return (
    <button
      type="button"
      onClick={() => onOtworz(encja.id)}
      aria-label={`${encja.nazwa} — ${encja.krotki}`}
      className="material dotyk col-span-2 flex gap-5 rounded-kafel p-5 text-left lg:col-span-2"
    >
      <SylwetkaStarship klasa="h-[212px] w-auto shrink-0 self-start text-tekst opacity-90" />

      <span className="flex flex-1 min-w-0 flex-col">
        <span className="flex items-baseline justify-between gap-2">
          <span className="text-tytul-2 text-tekst">{encja.nazwa}</span>
          {encja.status !== undefined && (
            <span className="text-podpis text-tekst-2 shrink-0">{encja.status}</span>
          )}
        </span>

        {nadchodzace !== undefined && zaIle !== null && (
          <span className="mt-3 flex flex-col">
            <span className="text-podpis text-tekst-2">{nadchodzace.tytul}</span>
            <span className="liczby text-plomien text-[38px] font-semibold leading-[42px] tracking-[-1px]">
              za {zaIle} {dni(zaIle)}
            </span>
            <span className="liczby text-przypis text-tekst-2">{dataKrotko(nadchodzace.data)}</span>
          </span>
        )}

        {loty !== undefined && (
          <span className="mt-4 flex flex-col border-t border-[color:var(--wlos)] pt-3">
            <span className="liczby text-podtytul text-tekst">
              {loty.wartosc}{' '}
              {odmiana(Number(loty.wartosc.replace(/\D/g, '')), [
                'lot testowy', 'loty testowe', 'lotów testowych',
              ])}
            </span>
            {loty.stanNa !== undefined && (
              <span className="liczby text-podpis text-tekst-2">stan na {dataKrotko(loty.stanNa)}</span>
            )}
          </span>
        )}

        {ostatni !== undefined && (
          <span className="mt-3 flex flex-col">
            <span className="text-podpis text-tekst-2">Ostatni kamień milowy</span>
            <span className="text-podtytul text-tekst">{ostatni.tytul}</span>
            <span className="liczby text-podpis text-tekst-2">{dataKrotko(ostatni.data)}</span>
          </span>
        )}
      </span>
    </button>
  );
}
