import { useEffect, useState } from 'react';
import { SylwetkaStarship } from './Sylwetka';
import { useT } from '../i18n';

/**
 * Ekran startowy.
 *
 * Świadomie **nie** jest to intro, które cokolwiek opóźnia — brief zakazuje
 * animacji niewywołanych przez użytkownika, a każda sekunda dołożona przed
 * treścią psuje wynik wydajnościowy. Ekran pojawia się dopiero wtedy, gdy
 * ładowanie naprawdę trwa dłużej niż chwilę; przy szybkim starcie nie mignie
 * ani razu. To rozwiązanie problemu „gołego napisu", nie dodatek wizualny.
 */

const PROG_MS = 250;

export function EkranLadowania() {
  const t = useT();
  const [widoczny, ustawWidoczny] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => ustawWidoczny(true), PROG_MS);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={t.ladowanieOpis}
      className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-6
                 transition-opacity duration-300"
      style={{ opacity: widoczny ? 1 : 0 }}
    >
      <SylwetkaStarship klasa="h-[160px] w-auto text-tekst opacity-70" />

      <div className="flex flex-col items-center gap-1">
        <span className="text-tytul-2 text-tekst">{t.ladowanie}</span>
        <span className="text-podpis text-tekst-2">{t.ladowanieOpis}</span>
      </div>

      {/* Pasek postępu jest nieokreślony, bo ładowanie chunków nie raportuje
          procentów. Zamiast kłamać liczbą, pokazujemy sam fakt pracy. */}
      <div className="h-px w-40 overflow-hidden" style={{ background: 'var(--wlos)' }}>
        <div className="h-full w-1/3 animate-[przesuw_1.2s_ease-in-out_infinite] bg-blekit" />
      </div>
    </div>
  );
}
