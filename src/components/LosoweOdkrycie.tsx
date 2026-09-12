import { useCallback, useMemo, useState } from 'react';
import { Shuffle } from 'lucide-react';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { drgnij } from '../lib/haptyka';
import { Nakladka } from './Nakladka';

/**
 * Losowa ciekawostka na pełnym ekranie. Świadomie ma zachęcać do zapętlenia
 * się w klikaniu, dlatego przycisk losowania stoi tuż pod tekstem, a przejście
 * do encji wymaga osobnego, drugiego gestu — łatwiej jest losować dalej niż
 * wyjść, i taki jest zamysł.
 */
export function LosoweOdkrycie() {
  const baza = useBaza();
  const t = useT();
  const widok = useStan((s) => s.widok);
  const otworz = useStan((s) => s.otworz);
  const otwarta = widok === 'losowanie';

  const pula = useMemo(
    () => baza.kolejnosc.flatMap((id) => {
      const e = baza.encje[id];
      if (e === undefined) return [];
      return e.ciekawostki.map((c) => ({ id, tekst: c.tekst, wydawca: c.zrodlo.wydawca, url: c.zrodlo.url }));
    }),
    [baza],
  );

  const [indeks, ustawIndeks] = useState(() => Math.floor(Math.random() * Math.max(1, pula.length)));

  const losuj = useCallback(() => {
    if (pula.length < 2) return;
    drgnij();
    // Nie chcemy wylosować tego samego dwa razy pod rząd — to psuje wrażenie losowości.
    ustawIndeks((poprzedni) => {
      let nowy = poprzedni;
      while (nowy === poprzedni) nowy = Math.floor(Math.random() * pula.length);
      return nowy;
    });
  }, [pula.length]);

  const pozycja = pula[indeks];
  const encja = pozycja === undefined ? undefined : baza.encje[pozycja.id];

  return (
    <Nakladka otwarta={otwarta} tytul={t.pokazMiCos}>
      {pozycja !== undefined && encja !== undefined && (
        <div className="flex flex-col">
          <span className="text-podpis text-tekst-2">{t.ciekawostka}</span>
          <p className="mt-3 max-w-[42ch] text-[22px] leading-[31px] tracking-[-0.3px] text-tekst">
            {pozycja.tekst}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={losuj}
              className="dotyk flex min-h-[44px] items-center gap-2 rounded-pigulka px-4 text-podtytul text-tlo"
              style={{ background: 'var(--blekit)' }}
            >
              <Shuffle size={16} strokeWidth={2} aria-hidden="true" />
              {t.losujPonownie}
            </button>

            <button
              type="button"
              onClick={() => otworz(pozycja.id)}
              className="dotyk min-h-[44px] rounded-pigulka px-4 text-podtytul text-blekit"
              style={{ background: 'var(--mat-chip)' }}
            >
              {encja.nazwa}
            </button>
          </div>

          <a
            href={pozycja.url}
            target="_blank"
            rel="noreferrer"
            className="dotyk mt-4 inline-flex min-h-[44px] items-center self-start
                       rounded-pigulka px-3 text-podpis text-tekst-2"
            style={{ background: 'var(--mat-kafel)' }}
          >
            {pozycja.wydawca}
          </a>

          <p className="liczby mt-8 text-podpis text-tekst-2">
            {t.szukajWynikow(pula.length)}
          </p>
        </div>
      )}
    </Nakladka>
  );
}
