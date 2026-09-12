import { useStan } from '../../app/stan';
import { TEKSTY_GRAFIK } from '../../i18n/grafiki';

/**
 * Powrót pierwszego stopnia Falcona 9 w profilu z powrotem nad stanowisko.
 *
 * Rysunek pokazuje właśnie ten profil, bo trzeci etap nazywa się hamowaniem
 * wstecznym — a to znaczy, że booster zawraca i ląduje obok miejsca startu.
 * Przy lądowaniu na barce manewr jest krótszy albo go nie ma i człon schodzi
 * w dół trasy; mówi o tym przypis pod rysunkiem, żeby schemat nie sugerował,
 * że jest tylko jeden sposób powrotu.
 *
 * Osie nie zachowują skali i jest to napisane na obrazku.
 */

interface Etap { x: number; y: number; nr: number }

const ETAPY: Etap[] = [
  { x: 34, y: 206, nr: 1 },   // start
  { x: 138, y: 60, nr: 2 },   // rozdzielenie stopni
  { x: 182, y: 52, nr: 3 },   // hamowanie wsteczne — punkt zawrócenia
  { x: 150, y: 86, nr: 4 },   // siatki aerodynamiczne
  { x: 120, y: 130, nr: 5 },  // wejście w atmosferę
  { x: 86, y: 194, nr: 6 },   // lądowanie
];

export function ProfilLotu() {
  const jezyk = useStan((s) => s.jezyk);
  const t = TEKSTY_GRAFIK[jezyk].profilLotu;

  return (
    <svg viewBox="0 0 330 352" role="img" aria-label={t.opis} className="w-full">
      <line x1="22" y1="30" x2="22" y2="220" stroke="var(--wlos)" strokeWidth="0.5" />
      <line x1="22" y1="220" x2="318" y2="220" stroke="var(--wlos)" strokeWidth="0.5" />
      <text x="22" y="24" fill="var(--tekst-2)" fontSize="8">{t.wysokosc}</text>
      <text x="318" y="232" fill="var(--tekst-2)" fontSize="8" textAnchor="end">{t.odleglosc}</text>

      {/* Pas atmosfery, w którym pracuje hamowanie wejściowe — pod trasami, żeby ich nie przykrywał. */}
      <rect x="22" y="116" width="296" height="30" fill="var(--tekst)" opacity="0.05" />
      <line x1="22" y1="116" x2="318" y2="116" stroke="var(--wlos)" strokeWidth="0.5" strokeDasharray="3 4" />
      <line x1="22" y1="146" x2="318" y2="146" stroke="var(--wlos)" strokeWidth="0.5" strokeDasharray="3 4" />
      <text x="314" y="112" fill="var(--tekst-2)" fontSize="8" textAnchor="end" className="liczby">70 km</text>
      <text x="314" y="158" fill="var(--tekst-2)" fontSize="8" textAnchor="end" className="liczby">40 km</text>

      {/* Wznoszenie całej rakiety do rozdzielenia stopni. */}
      <path d="M 34 206 C 64 188, 106 118, 138 60" fill="none" stroke="var(--tekst)" strokeWidth="1.6" />

      {/* Drugi stopień: dalej i w górę. Błękit, bo to nie jest tor powrotny. */}
      <path d="M 138 60 C 186 40, 252 32, 314 30" fill="none" stroke="var(--blekit)" strokeWidth="1.4" strokeDasharray="4 3" />
      <text x="314" y="74" fill="var(--blekit)" fontSize="8.5" textAnchor="end">{t.drugiStopien}</text>

      {/* Booster: zawraca nad stanowisko i schodzi obok miejsca startu.
          Tor przecina trasę wznoszenia — tak to wygląda w rzeczywistości. */}
      <path
        d="M 138 60 C 162 44, 188 40, 182 56 C 176 72, 162 78, 150 86
           C 136 98, 124 112, 120 130 C 112 158, 96 178, 86 194"
        fill="none"
        stroke="var(--plomien)"
        strokeWidth="1.6"
      />

      {/* Stanowisko startowe i strefa lądowania obok niego. */}
      <rect x="30" y="212" width="8" height="8" fill="var(--tekst-2)" />
      <rect x="78" y="212" width="16" height="8" fill="var(--tekst-2)" />

      {ETAPY.map((e) => (
        <g key={e.nr}>
          <circle cx={e.x} cy={e.y} r="8" fill="var(--tlo)" stroke="var(--tekst-2)" strokeWidth="0.75" />
          <text x={e.x} y={e.y + 3.2} fill="var(--tekst)" fontSize="9" textAnchor="middle" className="liczby">
            {e.nr}
          </text>
        </g>
      ))}

      {/* Legenda: numer i opis, bez strzałek doklejanych do tekstu. */}
      {t.etapy.map((opis, i) => (
        <text key={i} x="22" y={250 + i * 13} fill="var(--tekst-2)" fontSize="8.8">
          <tspan className="liczby" fill="var(--tekst)">{i + 1}</tspan>
          <tspan dx="6">{opis}</tspan>
        </text>
      ))}

      <text x="318" y="250" fill="var(--tekst-2)" fontSize="8" textAnchor="end">{t.nieDoSkali}</text>

      {/* Przypis o profilu barkowym — rozbity na dwa wiersze, bo SVG nie zawija tekstu. */}
      {(() => {
        const slowa = t.barka.split(' ');
        const polowa = Math.ceil(slowa.length / 2);
        return [slowa.slice(0, polowa).join(' '), slowa.slice(polowa).join(' ')].map((w, i) => (
          <text key={i} x="22" y={330 + i * 11} fill="var(--tekst-2)" fontSize="8">{w}</text>
        ));
      })()}
    </svg>
  );
}
