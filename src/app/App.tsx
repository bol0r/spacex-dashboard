import { useEffect, useState } from 'react';
import type { BazaWiedzy } from '../data/types';
import { zaladujBaze } from '../data/index';
import { DostawcaBazy } from './kontekst';
import { useStan } from './stan';
import { useT } from '../i18n';
import { useSzerokiEkran } from '../lib/fokus';
import { EkranGlowny } from '../components/EkranGlowny';
import { StosArkuszy } from '../components/StosArkuszy';
import { Wyszukiwarka } from '../components/Wyszukiwarka';
import { TrybOsiCzasu } from '../components/TrybOsiCzasu';
import { LosoweOdkrycie } from '../components/LosoweOdkrycie';

export function App() {
  const [baza, ustawBaze] = useState<BazaWiedzy | null>(null);
  const otworz = useStan((s) => s.otworz);
  const jezyk = useStan((s) => s.jezyk);
  const t = useT();
  const glebokosc = useStan((s) => s.stos.length);
  const szeroki = useSzerokiEkran();
  const panelOtwarty = szeroki && glebokosc > 0;
  const ustawWidok = useStan((s) => s.ustawWidok);

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
    void zaladujBaze(jezyk).then((b) => { if (aktywny) ustawBaze(b); });
    return () => { aktywny = false; };
  }, [jezyk]);

  if (baza === null) {
    return <div className="p-6 text-podtytul text-tekst-2" role="status">{t.wczytywanie}</div>;
  }

  return (
    <DostawcaBazy value={baza}>
      {/* Na szerokim ekranie panel nie przykrywa treści — strona ustępuje mu miejsca. */}
      <div
        className="transition-[padding] duration-200"
        style={panelOtwarty ? { paddingRight: 'min(480px, 45vw)' } : undefined}
      >
        <EkranGlowny baza={baza} onOtworz={otworz} />
      </div>
      <StosArkuszy />
      <Wyszukiwarka />
      <TrybOsiCzasu />
      <LosoweOdkrycie />
    </DostawcaBazy>
  );
}
