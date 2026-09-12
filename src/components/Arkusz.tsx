import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';
import { useT } from '../i18n';
import { usePulapkaFokusu } from '../lib/fokus';
import { SPREZYNA, useGestZamkniecia } from '../lib/gest';
import { PasekFaktow } from './PasekFaktow';
import { GrafikaEncji, maGrafike } from './grafiki';
import { Tresc } from './Tresc';
import { Ciekawostka } from './Ciekawostka';
import { MiniOs } from './MiniOs';
import { ProwadziDalej } from './ProwadziDalej';
import { SkadToWiem } from './SkadToWiem';

interface Props {
  id: string;
  /** 0 = arkusz na wierzchu, 1 = jeden pod nim, itd. */
  odleglosc: number;
  tryb: 'dolny' | 'panel';
  onZamknij: () => void;
  okruszki?: ReactNode;
}

/**
 * Jedna karta stosu. Warstwa zewnętrzna odpowiada za wjazd, wyjazd i odjechanie
 * w głąb; warstwa wewnętrzna przesuwa się pod palcem. Rozdzielenie tych dwóch
 * rzeczy jest konieczne, bo inaczej animacja głębi i gest walczyłyby o transform.
 */
export function Arkusz({ id, odleglosc, tryb, onZamknij, okruszki }: Props) {
  const baza = useBaza();
  const t = useT();
  const ulubione = useStan((s) => s.ulubione);
  const przelaczUlubione = useStan((s) => s.przelaczUlubione);
  const encja = baza.encje[id];
  const karta = useRef<HTMLDivElement>(null);
  const przewijak = useRef<HTMLDivElement>(null);
  const [naGorze, ustawNaGorze] = useState(true);
  const bezRuchu = useReducedMotion() ?? false;
  const naWierzchu = odleglosc === 0;
  const os = tryb === 'dolny' ? 'y' : 'x';

  const gest = useGestZamkniecia({
    os,
    aktywny: naWierzchu && !bezRuchu,
    mozeStartowac: () => (przewijak.current?.scrollTop ?? 0) <= 0,
    onZamknij,
  });

  // Gest od lewej krawędzi cofa o poziom także wtedy, gdy treść jest przewinięta.
  const gestKrawedzi = useGestZamkniecia({
    os: 'x',
    aktywny: naWierzchu && !bezRuchu,
    mozeStartowac: () => true,
    onZamknij,
  });

  usePulapkaFokusu(karta, naWierzchu);

  if (encja === undefined) return null;

  const skala = bezRuchu ? 1 : 1 - odleglosc * 0.08;
  const cofniecie = bezRuchu ? 0 : -odleglosc * (tryb === 'dolny' ? 10 : 16);

  return (
    <motion.div
      initial={bezRuchu ? { opacity: 0 } : tryb === 'dolny' ? { y: '100%' } : { x: '100%' }}
      animate={bezRuchu
        ? { opacity: 1 }
        : tryb === 'dolny'
          ? { y: cofniecie, scale: skala }
          : { x: cofniecie, scale: skala }}
      exit={bezRuchu ? { opacity: 0 } : tryb === 'dolny' ? { y: '100%' } : { x: '100%' }}
      transition={bezRuchu ? { duration: 0.12 } : SPREZYNA}
      style={{ transformOrigin: tryb === 'dolny' ? 'top center' : 'center left' }}
      className={[
        'absolute',
        tryb === 'dolny'
          ? 'bottom-0 left-0 right-0 max-h-[92vh]'
          : 'bottom-0 right-0 top-0 w-[min(480px,45vw)]',
      ].join(' ')}
    >
      <motion.div
        ref={karta}
        role="dialog"
        aria-modal={naWierzchu}
        aria-label={`${encja.nazwa}, ${t.typy[encja.typ]}`}
        aria-hidden={!naWierzchu}
        tabIndex={-1}
        {...gest.uchwyty}
        style={{
          ...(os === 'y' ? { y: gest.przesuniecie } : { x: gest.przesuniecie }),
          background: 'var(--mat-arkusz)',
          backdropFilter: 'blur(var(--blur-arkusz)) saturate(1.6)',
          WebkitBackdropFilter: 'blur(var(--blur-arkusz)) saturate(1.6)',
        }}
        className={[
          'relative overflow-hidden border-[0.5px] border-[color:var(--wlos)]',
          tryb === 'dolny' ? 'max-h-[92vh] rounded-t-arkusz' : 'h-full rounded-l-arkusz',
          naWierzchu ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
      >
        {tryb === 'dolny' && (
          <div className="flex justify-center pb-1 pt-2" aria-hidden="true">
            <span className="h-[5px] w-9 rounded-pigulka bg-tekst-2 opacity-50" />
          </div>
        )}

        {/* Strefa gestu od lewej krawędzi — węższa niż pole dotyku chipa, żeby się nie gryzły. */}
        {naWierzchu && !bezRuchu && (
          <div
            {...gestKrawedzi.uchwyty}
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 z-10 w-5"
          />
        )}

        <div
          ref={przewijak}
          onScroll={(e) => ustawNaGorze(e.currentTarget.scrollTop <= 0)}
          data-na-gorze={naGorze}
          style={{ touchAction: 'pan-y' }}
          className={[
            'overflow-y-auto overscroll-contain px-5 pt-1',
            tryb === 'dolny'
              ? 'max-h-[92vh] pb-[calc(env(safe-area-inset-bottom,0px)+28px)]'
              : 'h-full pb-10 pt-[calc(env(safe-area-inset-top,0px)+20px)]',
          ].join(' ')}
        >
          {okruszki}

          <header className="flex items-start justify-between gap-3 pt-2">
            <div className="min-w-0">
              <h2 className={naWierzchu ? 'text-duzy-tytul text-tekst' : 'text-tytul-2 text-tekst'}>
                {encja.nazwa}
              </h2>
              <p className="flex flex-wrap items-baseline gap-x-3 text-przypis text-tekst-2">
                <span>{t.typy[encja.typ]}</span>
                {encja.status !== undefined && <span>{t.statusy[encja.status]}</span>}
                {!encja.przetlumaczona && <span>{t.tylkoPoPolsku}</span>}
              </p>
            </div>
            <div className="-mr-2 -mt-1 flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => przelaczUlubione(encja.id)}
                aria-label={ulubione.includes(encja.id) ? t.ulubioneUsun : t.ulubioneDodaj}
                aria-pressed={ulubione.includes(encja.id)}
                className="dotyk flex h-11 w-11 items-center justify-center rounded-pigulka"
                style={{ background: 'var(--mat-kafel-mocny)' }}
              >
                {/* Serduszko wypełnione znaczy „odłożone" — kolor zostaje błękitny,
                    bo to stan, a nie liczba na żywo ani kamień milowy. */}
                <Heart
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                  className={ulubione.includes(encja.id) ? 'text-blekit' : 'text-tekst-2'}
                  fill={ulubione.includes(encja.id) ? 'currentColor' : 'none'}
                />
              </button>
              <button
                type="button"
                onClick={onZamknij}
                aria-label={t.zamknijArkusz}
                className="dotyk flex h-11 w-11 items-center justify-center rounded-pigulka text-tekst-2"
                style={{ background: 'var(--mat-kafel-mocny)' }}
              >
                <X size={18} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </header>

          <p className="mt-3 max-w-[58ch] text-tresc text-tekst">{encja.krotki}</p>

          <div className="mt-5">
            <PasekFaktow fakty={encja.fakty} />
          </div>

          {/* Diagram idzie między liczbami a tekstem: jest podsumowaniem faktów
              i wprowadzeniem do opisu, nie ilustracją doklejoną na końcu. */}
          {maGrafike(encja.id) && (
            <div className="mt-6">
              <GrafikaEncji id={encja.id} />
            </div>
          )}

          <div className="mt-6">
            <Tresc akapity={encja.tresc} />
          </div>

          <div className="mt-6">
            <Ciekawostka ciekawostki={encja.ciekawostki} />
          </div>

          <section className="mt-7">
            <h3 className="mb-3 text-naglowek text-tekst">{t.osCzasu}</h3>
            <MiniOs os={encja.os} />
          </section>

          <section className="mt-7">
            <h3 className="mb-1 text-naglowek text-tekst">{t.prowadziDalej}</h3>
            <ProwadziDalej encja={encja} />
          </section>

          <div className="mt-7">
            <SkadToWiem encja={encja} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
