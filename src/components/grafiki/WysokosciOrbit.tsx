import { useStan } from '../../app/stan';
import { TEKSTY_GRAFIK } from '../../i18n/grafiki';

/**
 * Skala wysokości orbit. Rozpiętość od 400 do 35 786 km nie daje się pokazać
 * liniowo — stacja kosmiczna byłaby grubością linii. Skala jest logarytmiczna
 * i napisane jest to na rysunku.
 *
 * Nawet po zlogarytmowaniu ISS, Starlink i Inspiration4 leżą w kilku pikselach
 * od siebie. Kropki zostają w prawdziwych miejscach, a etykiety rozsuwamy
 * i łączymy z nimi odnośnikiem — przesunięcie opisu nie kłamie o danych,
 * przesunięcie kropki by kłamało.
 */

const DOL = 236;
const GORA = 26;
const OD = 200;        // km
const DO = 45_000;     // km
const MIN_ODSTEP = 13; // px między etykietami

interface Pozycja { km: number; nazwa: string; kamien?: boolean }

const POZYCJE: Pozycja[] = [
  { km: 410, nazwa: 'ISS 400–420 km' },
  { km: 550, nazwa: 'Starlink ~550 km' },
  { km: 585, nazwa: 'Inspiration4 585 km' },
  { km: 1400, nazwa: 'Polaris Dawn 1 400 km', kamien: true },
  { km: 35786, nazwa: 'GEO 35 786 km' },
];

function y(km: number): number {
  const t = (Math.log10(km) - Math.log10(OD)) / (Math.log10(DO) - Math.log10(OD));
  return DOL - t * (DOL - GORA);
}

/** Etykiety od dołu w górę, każda co najmniej MIN_ODSTEP nad poprzednią. */
function rozsun(pozycje: readonly Pozycja[]): Array<Pozycja & { yKropki: number; yOpisu: number }> {
  const wynik: Array<Pozycja & { yKropki: number; yOpisu: number }> = [];
  let poprzednia = Infinity;

  for (const p of [...pozycje].sort((a, b) => a.km - b.km)) {
    const yKropki = y(p.km);
    const yOpisu = Math.min(yKropki, poprzednia - MIN_ODSTEP);
    wynik.push({ ...p, yKropki, yOpisu });
    poprzednia = yOpisu;
  }
  return wynik;
}

export function WysokosciOrbit() {
  const jezyk = useStan((s) => s.jezyk);
  const t = TEKSTY_GRAFIK[jezyk].orbity;
  const pozycje = rozsun(POZYCJE);

  return (
    <svg viewBox="0 0 330 272" role="img" aria-label={t.opis} className="w-full">
      {/* Ziemia jako podstawa skali, nie jako ozdoba. */}
      <path d={`M 0 ${DOL} Q 165 ${DOL - 14} 330 ${DOL}`} fill="none" stroke="var(--tekst-2)" strokeWidth="1.2" />
      <path d={`M 0 ${DOL} Q 165 ${DOL - 14} 330 ${DOL} L 330 272 L 0 272 Z`} fill="var(--tekst)" opacity="0.06" />

      {/* Strefa szybkiego rozpadu orbity. */}
      <rect x="0" y={y(300)} width="330" height={DOL - y(300)} fill="var(--tekst)" opacity="0.05" />
      <line x1="0" y1={y(300)} x2="330" y2={y(300)} stroke="var(--wlos)" strokeWidth="0.5" strokeDasharray="3 4" />
      <text x="4" y={DOL + 14} fill="var(--tekst-2)" fontSize="8">{t.rozpad}</text>

      {/* Pułap niskiej orbity. */}
      <line x1="0" y1={y(2000)} x2="330" y2={y(2000)} stroke="var(--blekit)" strokeWidth="0.75" strokeDasharray="5 4" />
      <text x="326" y={y(2000) - 5} fill="var(--blekit)" fontSize="8.5" textAnchor="end">
        {t.pulapLeo} — 2 000 km
      </text>

      {pozycje.map((p) => (
        <g key={p.nazwa}>
          <circle
            cx="24"
            cy={p.yKropki}
            r={p.kamien === true ? 4 : 3}
            fill={p.kamien === true ? 'var(--plomien)' : 'var(--tekst)'}
          />
          {/* Odnośnik od kropki do przesuniętego opisu. */}
          <path
            d={`M 29 ${p.yKropki} L 38 ${p.yKropki} L 44 ${p.yOpisu} L 50 ${p.yOpisu}`}
            fill="none"
            stroke="var(--wlos)"
            strokeWidth="0.5"
          />
          <text
            x="54"
            y={p.yOpisu + 3.2}
            fill={p.kamien === true ? 'var(--plomien)' : 'var(--tekst)'}
            fontSize="9"
            className="liczby"
          >
            {p.nazwa}
          </text>
        </g>
      ))}

      <text x="54" y={y(35786) + 15} fill="var(--tekst-2)" fontSize="8">{t.opoznienie}</text>
      <text x="4" y="14" fill="var(--tekst-2)" fontSize="8">{t.skalaLog}</text>
    </svg>
  );
}
