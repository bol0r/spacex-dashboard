import { useEffect, useState } from 'react';
import type { BazaWiedzy } from '../data/types';
import { zaladujBaze } from '../data/index';
import { EkranGlowny } from '../components/EkranGlowny';

export function App() {
  const [baza, ustawBaze] = useState<BazaWiedzy | null>(null);

  useEffect(() => {
    let aktywny = true;
    void zaladujBaze().then((b) => { if (aktywny) ustawBaze(b); });
    return () => { aktywny = false; };
  }, []);

  // Stos arkuszy przychodzi w fazie 2 — na razie otwarcie jest zarejestrowane,
  // ale nie ma czego pokazać, więc nic się nie dzieje.
  const otworz = (_id: string) => {};

  if (baza === null) {
    return <div className="sr-only" role="status">Wczytywanie bazy</div>;
  }
  return <EkranGlowny baza={baza} onOtworz={otworz} />;
}
