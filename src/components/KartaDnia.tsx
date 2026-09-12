import { useMemo } from 'react';
import type { BazaWiedzy } from '../data/types';
import { kluczDnia, wybierz } from '../lib/losowanie';
import { useStan } from '../app/stan';
import { useT } from '../i18n';

type Pozycja =
  | { rodzaj: 'ciekawostka'; encjaId: string; tekst: string; wydawca: string }
  | { rodzaj: 'definicja'; encjaId: string; nazwa: string; tekst: string };

/**
 * Karta dnia. Jedna ciekawostka albo jedna definicja ze słownika, ta sama
 * przez całą dobę — losowanie jest zaziarnione datą, nie zegarem. Codzienne
 * wejście ma dawać jedną nową rzecz bez szukania.
 */
export function KartaDnia({ baza }: { baza: BazaWiedzy }) {
  const otworz = useStan((s) => s.otworz);
  const t = useT();
  const klucz = kluczDnia();

  const pozycja = useMemo<Pozycja | undefined>(() => {
    const pula: Pozycja[] = [];
    // W innym języku niż kanoniczny bierzemy tylko encje przetłumaczone — karta
    // dnia jest wizytówką, więc nie może zaczynać od zdania w obcym języku.
    const tylkoPrzetlumaczone = baza.kolejnosc.some((id) => baza.encje[id]?.przetlumaczona === true);

    for (const id of baza.kolejnosc) {
      const e = baza.encje[id];
      if (e === undefined) continue;
      if (tylkoPrzetlumaczone && !e.przetlumaczona) continue;
      for (const c of e.ciekawostki) {
        pula.push({ rodzaj: 'ciekawostka', encjaId: id, tekst: c.tekst, wydawca: c.zrodlo.wydawca });
      }
      // Definicje ze słownika trafiają do tej samej puli, żeby karta dnia raz
      // uczyła pojęcia, a raz opowiadała historię.
      if (e.typ === 'pojecie') {
        pula.push({ rodzaj: 'definicja', encjaId: id, nazwa: e.nazwa, tekst: e.krotki });
      }
    }
    return wybierz(pula, klucz);
  }, [baza, klucz]);

  if (pozycja === undefined) return null;

  const encja = baza.encje[pozycja.encjaId];
  if (encja === undefined) return null;

  return (
    <button
      type="button"
      onClick={() => otworz(pozycja.encjaId)}
      aria-label={`Karta dnia: ${encja.nazwa}. ${pozycja.tekst}`}
      className="material dotyk col-span-2 flex flex-col items-start rounded-kafel p-5 text-left lg:col-span-4"
    >
      <span className="flex w-full items-baseline justify-between gap-3">
        <span className="text-podpis text-tekst-2">
          {pozycja.rodzaj === 'ciekawostka' ? t.ciekawostkaDnia : t.pojecieDnia}
        </span>
        <span className="liczby shrink-0 text-podpis text-tekst-2">{klucz.split('-').reverse().join('.')}</span>
      </span>

      {pozycja.rodzaj === 'definicja' && (
        <span className="mt-2 text-tytul-2 text-tekst">{pozycja.nazwa}</span>
      )}

      <span className="mt-2 max-w-[56ch] text-callout text-tekst">{pozycja.tekst}</span>

      <span className="mt-3 text-przypis text-blekit">{encja.nazwa}</span>
    </button>
  );
}
