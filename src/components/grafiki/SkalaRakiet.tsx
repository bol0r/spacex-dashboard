import { useStan } from '../../app/stan';
import { TEKSTY_GRAFIK } from '../../i18n/grafiki';

/**
 * Sylwetki rakiet we wspólnej skali. Wysokość i średnica przeliczane z metrów
 * jednym współczynnikiem, bez żadnego podkręcania — Falcon 1 jest naprawdę
 * tak cienki. To jest sens tego rysunku: liczby w tabeli nie robią wrażenia,
 * proporcje robią.
 */

const PX_NA_METR = 2.62;
const PODLOGA = 352;

interface Rakieta {
  id: string;
  nazwa: string;
  wysokosc: number;
  srednica: number;
  /** Liczba członów obok siebie — Falcon Heavy ma trzy. */
  czlony: number;
  x: number;
}

const RAKIETY: Rakieta[] = [
  { id: 'falcon-1', nazwa: 'Falcon 1', wysokosc: 21, srednica: 1.7, czlony: 1, x: 42 },
  { id: 'falcon-9', nazwa: 'Falcon 9', wysokosc: 69.8, srednica: 3.7, czlony: 1, x: 118 },
  { id: 'falcon-heavy', nazwa: 'Falcon Heavy', wysokosc: 70, srednica: 3.7, czlony: 3, x: 200 },
  { id: 'starship', nazwa: 'Starship', wysokosc: 121.3, srednica: 9, czlony: 1, x: 288 },
];

export function SkalaRakiet({ wyroznij }: { wyroznij?: string }) {
  const jezyk = useStan((s) => s.jezyk);
  const t = TEKSTY_GRAFIK[jezyk].skalaRakiet;

  return (
    <svg viewBox="0 0 330 392" role="img" aria-label={t.opis} className="w-full">
      {/* Linijka wysokości — bez niej „w skali" jest pustą deklaracją. */}
      {[0, 50, 100].map((m) => {
        const y = PODLOGA - m * PX_NA_METR;
        return (
          <g key={m}>
            <line x1="18" y1={y} x2="318" y2={y} stroke="var(--wlos)" strokeWidth="0.5" />
            <text x="0" y={y + 3.5} fill="var(--tekst-2)" fontSize="9" className="liczby">
              {m}
            </text>
          </g>
        );
      })}
      <text x="0" y={PODLOGA - 100 * PX_NA_METR - 8} fill="var(--tekst-2)" fontSize="8">
        {t.metry}
      </text>

      {RAKIETY.map((r) => {
        const h = r.wysokosc * PX_NA_METR;
        const w = r.srednica * PX_NA_METR;
        const czynna = r.id === wyroznij;
        const kolor = czynna ? 'var(--tekst)' : 'var(--tekst-2)';
        const krycie = czynna ? 1 : 0.45;
        const gora = PODLOGA - h;
        const stozek = Math.min(h * 0.14, w * 2.2);

        return (
          <g key={r.id} opacity={krycie}>
            {/* Człony boczne Falcona Heavy: krótsze o mniej więcej jedną trzecią. */}
            {r.czlony === 3 && [-1, 1].map((bok) => {
              const hBok = h * 0.62;
              return (
                <g key={bok}>
                  <path
                    d={`M ${r.x + bok * w} ${PODLOGA - hBok}
                        l ${-w / 2} ${stozek * 0.8}
                        v ${hBok - stozek * 0.8}
                        h ${w}
                        v ${-(hBok - stozek * 0.8)} Z`}
                    fill={kolor}
                  />
                </g>
              );
            })}

            {/* Człon główny: stożek dziobowy plus kadłub. */}
            <path
              d={`M ${r.x} ${gora}
                  L ${r.x - w / 2} ${gora + stozek}
                  L ${r.x - w / 2} ${PODLOGA}
                  L ${r.x + w / 2} ${PODLOGA}
                  L ${r.x + w / 2} ${gora + stozek} Z`}
              fill={kolor}
            />

            <text
              x={r.x}
              y={PODLOGA + 16}
              fill={czynna ? 'var(--tekst)' : 'var(--tekst-2)'}
              fontSize="9.5"
              textAnchor="middle"
            >
              {r.nazwa}
            </text>
            <text
              x={r.x}
              y={PODLOGA + 29}
              fill={czynna ? 'var(--plomien)' : 'var(--tekst-2)'}
              fontSize="9.5"
              textAnchor="middle"
              className="liczby"
            >
              {String(r.wysokosc).replace('.', ',')} {t.metry}
            </text>
          </g>
        );
      })}

      <line x1="18" y1={PODLOGA} x2="318" y2={PODLOGA} stroke="var(--tekst-2)" strokeWidth="1" />
    </svg>
  );
}
