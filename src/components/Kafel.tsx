import type { Encja } from '../data/types';
import type { Rozmiar } from '../app/uklad';

const KLASY_ROZMIARU: Record<Rozmiar, string> = {
  duzy: 'col-span-2 min-h-[232px]',
  sredni: 'col-span-2 min-h-[116px] lg:col-span-2',
  maly: 'col-span-1 min-h-[88px]',
  pigulka: 'col-span-2 min-h-[52px] lg:col-span-2',
};

interface Props {
  encja: Encja;
  rozmiar: Rozmiar;
  onOtworz: (id: string) => void;
}

export function Kafel({ encja, rozmiar, onOtworz }: Props) {
  // Status niesie informację tylko wtedy, gdy odstaje od normy. Powtórzone
  // „aktywne" na ośmiu kaflach z rzędu jest szumem, więc go nie pokazujemy.
  const status = encja.status !== undefined && encja.status !== 'aktywne' ? encja.status : null;

  if (rozmiar === 'pigulka') {
    return (
      <button
        type="button"
        onClick={() => onOtworz(encja.id)}
        aria-label={`${encja.nazwa} — ${encja.krotki}`}
        className={`${KLASY_ROZMIARU.pigulka} material dotyk flex items-center justify-between gap-3 rounded-kafel px-4 py-3 text-left`}
      >
        <span className="text-naglowek text-tekst">{encja.nazwa}</span>
        <span className="shrink-0 text-podpis text-tekst-2">{encja.typ}</span>
      </button>
    );
  }

  // Kafel 1×1 jest gęsty: nazwa i typ. Opis pojawia się dopiero od 2×1,
  // dzięki czemu rozmiar naprawdę niesie informację, a nie tylko zajmuje miejsce.
  const zOpisem = rozmiar === 'sredni' || rozmiar === 'duzy';

  return (
    <button
      type="button"
      onClick={() => onOtworz(encja.id)}
      aria-label={`${encja.nazwa} — ${encja.krotki}`}
      className={`${KLASY_ROZMIARU[rozmiar]} material dotyk flex flex-col justify-between rounded-kafel p-4 text-left`}
    >
      <span className="text-naglowek text-tekst">{encja.nazwa}</span>

      <span className="mt-2 flex flex-col gap-1">
        {zOpisem && <span className="line-clamp-3 text-podtytul text-tekst-2">{encja.krotki}</span>}
        {/* Typ i status idą razem na dole — dzięki temu nazwa ma całą szerokość i nie łamie się na dwie linie. */}
        <span className="flex items-baseline justify-between gap-2 text-podpis text-tekst-2">
          <span>{encja.typ}</span>
          {status !== null && <span className="shrink-0">{status}</span>}
        </span>
      </span>
    </button>
  );
}
