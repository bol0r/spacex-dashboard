import { useEffect, useMemo, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import type { Typ } from '../data/types';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { szukaj, zbudujIndeks, type Trafienie } from '../lib/szukaj';
import { Nakladka } from './Nakladka';

/** Podświetlenie trafień w nazwie. Zakresy przychodzą z Fuse jako pary indeksów. */
function Podswietl({ tekst, zakresy }: { tekst: string; zakresy: ReadonlyArray<readonly [number, number]> }) {
  if (zakresy.length === 0) return <>{tekst}</>;

  const czesci: Array<{ tekst: string; trafione: boolean }> = [];
  let kursor = 0;
  for (const [od, do_] of [...zakresy].sort((a, b) => a[0] - b[0])) {
    if (od > kursor) czesci.push({ tekst: tekst.slice(kursor, od), trafione: false });
    czesci.push({ tekst: tekst.slice(od, do_ + 1), trafione: true });
    kursor = do_ + 1;
  }
  if (kursor < tekst.length) czesci.push({ tekst: tekst.slice(kursor), trafione: false });

  return (
    <>
      {czesci.map((c, i) =>
        c.trafione
          ? <mark key={i} className="bg-transparent text-blekit">{c.tekst}</mark>
          : <span key={i}>{c.tekst}</span>,
      )}
    </>
  );
}

export function Wyszukiwarka() {
  const baza = useBaza();
  const t = useT();
  const widok = useStan((s) => s.widok);
  const otworz = useStan((s) => s.otworz);
  const otwarta = widok === 'szukanie';

  const [pytanie, ustawPytanie] = useState('');
  const [wybrany, ustawWybrany] = useState(0);
  const pole = useRef<HTMLInputElement>(null);
  const lista = useRef<HTMLUListElement>(null);

  const indeks = useMemo(() => zbudujIndeks(baza), [baza]);
  const trafienia = useMemo(() => szukaj(indeks, pytanie), [indeks, pytanie]);

  // Wyniki grupujemy po typie, zachowując kolejność trafności wewnątrz grupy.
  const grupy = useMemo(() => {
    const mapa = new Map<Typ, Trafienie[]>();
    for (const tr of trafienia) {
      const lista = mapa.get(tr.typ) ?? [];
      lista.push(tr);
      mapa.set(tr.typ, lista);
    }
    return [...mapa];
  }, [trafienia]);

  const plaska = useMemo(() => grupy.flatMap(([, lista]) => lista), [grupy]);

  useEffect(() => {
    if (otwarta) {
      ustawPytanie('');
      ustawWybrany(0);
      // Odrobina opóźnienia, żeby pole dostało fokus po wjeździe nakładki.
      const id = window.setTimeout(() => pole.current?.focus(), 80);
      return () => window.clearTimeout(id);
    }
    return undefined;
  }, [otwarta]);

  useEffect(() => { ustawWybrany(0); }, [pytanie]);

  // Zaznaczony wynik trzymamy w widoku przy nawigacji strzałkami.
  useEffect(() => {
    lista.current
      ?.querySelector(`[data-indeks="${wybrany}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [wybrany]);

  const klawisz = (e: React.KeyboardEvent) => {
    if (plaska.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      ustawWybrany((w) => (w + 1) % plaska.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      ustawWybrany((w) => (w - 1 + plaska.length) % plaska.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cel = plaska[wybrany];
      if (cel !== undefined) otworz(cel.id);
    }
  };

  return (
    <Nakladka
      otwarta={otwarta}
      tytul={t.szukaj}
      naglowek={
        <div
          className="flex items-center gap-2 rounded-[12px] border-[0.5px] border-[color:var(--wlos)] px-3"
          style={{ background: 'var(--mat-kafel-mocny)' }}
        >
          <Search size={16} className="shrink-0 text-tekst-2" aria-hidden="true" />
          <input
            ref={pole}
            type="search"
            value={pytanie}
            onChange={(e) => ustawPytanie(e.target.value)}
            onKeyDown={klawisz}
            placeholder={t.szukajPodpowiedz}
            aria-label={t.szukaj}
            autoComplete="off"
            spellCheck={false}
            className="min-h-[44px] w-full bg-transparent text-tresc text-tekst outline-none
                       placeholder:text-tekst-2"
          />
          {pytanie.trim().length >= 2 && (
            <span className="liczby shrink-0 text-podpis text-tekst-2">
              {t.szukajWynikow(trafienia.length)}
            </span>
          )}
        </div>
      }
    >
      {pytanie.trim().length < 2 ? (
        <p className="max-w-[56ch] text-podtytul text-tekst-2">{t.szukajPusto}</p>
      ) : trafienia.length === 0 ? (
        <p className="max-w-[56ch] text-podtytul text-tekst-2">{t.szukajBrakWynikow(pytanie.trim())}</p>
      ) : (
        <ul ref={lista} className="flex flex-col gap-5">
          {grupy.map(([typ, wyniki]) => (
            <li key={typ}>
              <h3 className="mb-2 text-przypis text-tekst-2">{t.typy[typ]}</h3>
              <ul className="flex flex-col">
                {wyniki.map((tr) => {
                  const encja = baza.encje[tr.id];
                  if (encja === undefined) return null;
                  const i = plaska.indexOf(tr);
                  const zaznaczony = i === wybrany;
                  return (
                    <li key={tr.id} data-indeks={i} className="border-t-[0.5px] border-[color:var(--wlos)] first:border-t-0">
                      <button
                        type="button"
                        onClick={() => otworz(tr.id)}
                        onMouseEnter={() => ustawWybrany(i)}
                        aria-label={`${encja.nazwa} — ${encja.krotki}`}
                        className="dotyk flex w-full flex-col items-start gap-[2px] rounded-[10px] px-3 py-3 text-left"
                        style={zaznaczony ? { background: 'var(--mat-chip)' } : undefined}
                      >
                        <span className="text-naglowek text-tekst">
                          <Podswietl tekst={encja.nazwa} zakresy={tr.zakresy} />
                        </span>
                        <span className="line-clamp-2 text-przypis text-tekst-2">{encja.krotki}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </Nakladka>
  );
}
