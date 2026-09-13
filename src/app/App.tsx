import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import type { BazaWiedzy } from '../data/types';
import { zaladujBaze, zaladujSkorowidz } from '../data/index';
import { DostawcaBazy } from './kontekst';
import { useStan } from './stan';
import { useSzerokiEkran } from '../lib/fokus';
import { EkranGlowny } from '../components/EkranGlowny';
import { EkranLadowania } from '../components/EkranLadowania';

/**
 * Wszystko, co wyjeżdża na wierzch, jest doczytywane dopiero przy pierwszym
 * otwarciu. Razem ciągną framer-motion i wyszukiwarkę pełnotekstową — pięćdziesiąt
 * kilka kilobajtów po kompresji, których ekran główny nie używa ani razu.
 */
const StosArkuszy = lazy(() => import('../components/StosArkuszy').then((m) => ({ default: m.StosArkuszy })));
const Wyszukiwarka = lazy(() => import('../components/Wyszukiwarka').then((m) => ({ default: m.Wyszukiwarka })));
const TrybOsiCzasu = lazy(() => import('../components/TrybOsiCzasu').then((m) => ({ default: m.TrybOsiCzasu })));
const LosoweOdkrycie = lazy(() => import('../components/LosoweOdkrycie').then((m) => ({ default: m.LosoweOdkrycie })));
const TrybFilmowy = lazy(() => import('../components/TrybFilmowy').then((m) => ({ default: m.TrybFilmowy })));

/**
 * Raz zamontowane warstwy zostają. Odmontowanie ich przy zamknięciu zabrałoby
 * animację wyjazdu — a właśnie ona mówi użytkownikowi, dokąd wróciła strona.
 */
function useRazOtwarte(warunek: boolean): boolean {
  const bylo = useRef(false);
  if (warunek) bylo.current = true;
  return bylo.current;
}

export function App() {
  const [baza, ustawBaze] = useState<BazaWiedzy | null>(null);
  const otworz = useStan((s) => s.otworz);
  const jezyk = useStan((s) => s.jezyk);
  const glebokosc = useStan((s) => s.stos.length);
  const szeroki = useSzerokiEkran();
  const panelOtwarty = szeroki && glebokosc > 0;
  const ustawWidok = useStan((s) => s.ustawWidok);
  const widok = useStan((s) => s.widok);

  const arkusze = useRazOtwarte(glebokosc > 0);
  const szukanie = useRazOtwarte(widok === 'szukanie');
  const osCzasu = useRazOtwarte(widok === 'os-czasu');
  const losowanie = useRazOtwarte(widok === 'losowanie');
  const film = useRazOtwarte(widok === 'film');

  // ⌘K i Ctrl+K otwierają wyszukiwarkę z każdego miejsca aplikacji.
  useEffect(() => {
    const obsluga = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        ustawWidok('szukanie');
      }
    };
    window.addEventListener('keydown', obsluga);
    return () => window.removeEventListener('keydown', obsluga);
  }, [ustawWidok]);

  useEffect(() => {
    let aktywny = true;
    document.documentElement.lang = jezyk;

    // Dwa kroki, nie jeden. Najpierw skorowidz — wystarcza na cały ekran główny
    // i waży ułamek bazy, więc strona pojawia się od razu. Pełna baza dojeżdża
    // w tle i podmienia się w miejscu; z punktu widzenia ekranu głównego nic się
    // wtedy nie zmienia, bo obie mają tę samą strukturę.
    void zaladujSkorowidz(jezyk).then((s) => {
      if (aktywny) ustawBaze((poprzednia) => (poprzednia?.pelna === true ? poprzednia : s));
    });

    // Pełna baza rusza dopiero po pierwszym malowaniu. Ściągnięcie i przeliczenie
    // jej relacji to na telefonie kilkadziesiąt milisekund pracy procesora —
    // wykonane wcześniej opóźniają moment, w którym cokolwiek widać.
    const odloz = window.requestIdleCallback ?? ((f: () => void) => window.setTimeout(f, 200));
    const uchwyt = odloz(() => {
      void zaladujBaze(jezyk).then((b) => { if (aktywny) ustawBaze(b); });
    });

    return () => {
      aktywny = false;
      if (window.cancelIdleCallback !== undefined) window.cancelIdleCallback(uchwyt as number);
    };
  }, [jezyk]);

  if (baza === null) return <EkranLadowania />;

  return (
    <DostawcaBazy value={baza}>
      {/* Na szerokim ekranie panel nie przykrywa treści — strona ustępuje mu miejsca. */}
      <div
        className="transition-[padding] duration-200"
        style={panelOtwarty ? { paddingRight: 'min(480px, 45vw)' } : undefined}
      >
        <EkranGlowny baza={baza} onOtworz={otworz} />
      </div>
      {/* Bez zapasowego widoku: te warstwy same wjeżdżają z animacją, a migający
          zastępczy prostokąt byłby ruchem, którego użytkownik nie wywołał. */}
      <Suspense fallback={null}>
        {arkusze && <StosArkuszy />}
        {szukanie && <Wyszukiwarka />}
        {osCzasu && <TrybOsiCzasu />}
        {losowanie && <LosoweOdkrycie />}
        {film && <TrybFilmowy />}
      </Suspense>
    </DostawcaBazy>
  );
}
