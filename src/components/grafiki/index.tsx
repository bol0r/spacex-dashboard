import { useStan } from '../../app/stan';
import { TEKSTY_GRAFIK } from '../../i18n/grafiki';
import { SkalaRakiet } from './SkalaRakiet';
import { ProfilLotu } from './ProfilLotu';
import { CyklSilnika } from './CyklSilnika';
import { WysokosciOrbit } from './WysokosciOrbit';

/**
 * Przypisanie diagramów do encji.
 *
 * Rejestr jest osobny od danych, żeby nie dotykać kontraktu `Encja` — grafika
 * jest sposobem pokazania treści, nie samą treścią. Jedna encja dostaje
 * najwyżej jeden diagram: rysunek, który tylko powtarza to, co mówi tekst,
 * jest dekoracją i nie powinien się tu znaleźć.
 */

type Rodzaj =
  | { typ: 'skala'; wyroznij: string }
  | { typ: 'profil' }
  | { typ: 'cykl'; wariant: 'generator' | 'pelny' }
  | { typ: 'orbity' };

const PRZYPISANIE: Partial<Record<string, Rodzaj>> = {
  // Proporcje da się pokazać tylko obrazkiem — tabela wysokości nic nie mówi.
  'starship': { typ: 'skala', wyroznij: 'starship' },
  'super-heavy': { typ: 'skala', wyroznij: 'starship' },
  'falcon-heavy': { typ: 'skala', wyroznij: 'falcon-heavy' },
  'falcon-1': { typ: 'skala', wyroznij: 'falcon-1' },

  // Kolejność manewrów powrotnych jest trudna do utrzymania w głowie z tekstu.
  'falcon-9': { typ: 'profil' },
  'reuzywalnosc': { typ: 'profil' },
  'pierwsze-ladowanie': { typ: 'profil' },
  'pierwsze-ladowanie-na-barce': { typ: 'profil' },

  // Różnica między cyklami to jedna strzałka — i właśnie dlatego warto ją narysować.
  'merlin': { typ: 'cykl', wariant: 'generator' },
  'raptor': { typ: 'cykl', wariant: 'pelny' },
  'pelnoprzeplywowe-spalanie-stopniowe': { typ: 'cykl', wariant: 'pelny' },

  // Rozpiętość wysokości orbit jest nieintuicyjna w liczbach.
  'leo': { typ: 'orbity' },
  'starlink': { typ: 'orbity' },
  'polaris-dawn': { typ: 'orbity' },
};

export function maGrafike(id: string): boolean {
  return PRZYPISANIE[id] !== undefined;
}

export function GrafikaEncji({ id }: { id: string }) {
  const jezyk = useStan((s) => s.jezyk);
  const teksty = TEKSTY_GRAFIK[jezyk];
  const rodzaj = PRZYPISANIE[id];
  if (rodzaj === undefined) return null;

  let rysunek: JSX.Element;
  let tytul: string;

  switch (rodzaj.typ) {
    case 'skala':
      rysunek = <SkalaRakiet wyroznij={rodzaj.wyroznij} />;
      tytul = teksty.skalaRakiet.tytul;
      break;
    case 'profil':
      rysunek = <ProfilLotu />;
      tytul = teksty.profilLotu.tytul;
      break;
    case 'cykl':
      rysunek = <CyklSilnika wariant={rodzaj.wariant} />;
      tytul = rodzaj.wariant === 'pelny' ? teksty.cykl.tytulPelny : teksty.cykl.tytulGenerator;
      break;
    case 'orbity':
      rysunek = <WysokosciOrbit />;
      tytul = teksty.orbity.tytul;
      break;
  }

  return (
    <figure className="-mx-1">
      {/* Tło musi być nieprzepuszczalne. Materiał arkusza przepuszcza rozmycie
          treści pod spodem, a kolorowe plamy przebijające przez diagram czytają
          się jak zabrudzenie rysunku. */}
      <div
        className="rounded-[14px] border-[0.5px] border-[color:var(--wlos)] px-2 py-3"
        style={{
          backgroundColor: 'var(--tlo)',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05))',
        }}
      >
        {rysunek}
      </div>
      <figcaption className="mt-2 text-podpis text-tekst-2">{tytul}</figcaption>
    </figure>
  );
}
