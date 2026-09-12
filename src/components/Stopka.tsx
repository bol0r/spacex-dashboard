import type { BazaWiedzy } from '../data/types';
import { useStan } from '../app/stan';
import { useT } from '../i18n';

/**
 * Zastrzeżenie o braku powiązania z opisywanymi firmami, autorzy i numer
 * wersji. Zastrzeżenie świadomie nie jest schowane pod rozwijaczem ani
 * zapisane najmniejszym dostępnym stopniem pisma — ma być przeczytane,
 * a nie formalnie obecne.
 */
export function Stopka({ baza }: { baza: BazaWiedzy }) {
  const t = useT();
  const haptyka = useStan((s) => s.haptyka);
  const przelaczHaptyke = useStan((s) => s.przelaczHaptyke);

  return (
    <footer className="col-span-2 mt-10 border-t-[0.5px] border-[color:var(--wlos)] pt-5 lg:col-span-4">
      <p className="max-w-[64ch] text-przypis text-tekst-2">{t.zastrzezenie}</p>
      <p className="mt-2 max-w-[64ch] text-przypis text-tekst-2">{t.zrodlaOpis}</p>

      {/* Ustawienia to na razie jedna pozycja, więc nie zasługują na osobny ekran. */}
      <button
        type="button"
        onClick={przelaczHaptyke}
        aria-pressed={haptyka}
        className="dotyk mt-4 flex min-h-[44px] items-center gap-2 rounded-pigulka px-3 text-podpis text-tekst-2"
        style={{ background: 'var(--mat-kafel)' }}
      >
        {t.haptykaEtykieta}
        <span className={haptyka ? 'text-blekit' : 'text-tekst-2'}>
          {haptyka ? t.wlaczone : t.wylaczone}
        </span>
      </button>

      <p className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-podpis text-tekst-2">
        <span className="text-tekst">{t.autorzy}</span>
        <span className="liczby">{t.wersja} {__WERSJA__}</span>
        <span className="liczby">{t.liczbaEncji(baza.kolejnosc.length)}</span>
      </p>
    </footer>
  );
}
