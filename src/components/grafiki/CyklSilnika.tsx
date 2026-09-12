import { useStan } from '../../app/stan';
import { TEKSTY_GRAFIK } from '../../i18n/grafiki';

/**
 * Schemat obiegu w silniku rakietowym, w dwóch wariantach. Cała różnica, o
 * którą chodzi w tekście o Raptorze, mieści się w jednej strzałce: w cyklu
 * z generatorem gazu spaliny turbiny uchodzą na zewnątrz, w pełnoprzepływowym
 * wracają do komory. Dlatego oba rysunki mają identyczny układ — tak, żeby
 * dało się je porównać wzrokiem.
 */

type Wariant = 'generator' | 'pelny';

function Skrzynka({ x, y, w, h, tekst, mocna = false }: {
  x: number; y: number; w: number; h: number; tekst: string; mocna?: boolean;
}) {
  const wiersze = tekst.split('\n');
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx="5"
        fill={mocna ? 'var(--mat-kafel-mocny)' : 'transparent'}
        stroke="var(--tekst-2)"
        strokeWidth="0.75"
      />
      {wiersze.map((wiersz, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={y + h / 2 + 3.2 - (wiersze.length - 1) * 5 + i * 10}
          fill="var(--tekst)"
          fontSize="8.5"
          textAnchor="middle"
        >
          {wiersz}
        </text>
      ))}
    </g>
  );
}

function Strzalka({ d, kolor = 'var(--tekst-2)', przerywana = false }: {
  d: string; kolor?: string; przerywana?: boolean;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={kolor}
      strokeWidth="1.1"
      strokeDasharray={przerywana ? '4 3' : undefined}
      markerEnd="url(#grot)"
    />
  );
}

export function CyklSilnika({ wariant }: { wariant: Wariant }) {
  const jezyk = useStan((s) => s.jezyk);
  const t = TEKSTY_GRAFIK[jezyk].cykl;
  const pelny = wariant === 'pelny';
  const opis = pelny ? t.opisPelny : t.opisGenerator;

  return (
    <svg viewBox="0 0 330 268" role="img" aria-label={opis} className="w-full">
      <defs>
        <marker id="grot" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1 L 7 4 L 0 7 z" fill="var(--tekst-2)" />
        </marker>
      </defs>

      {/* Zbiorniki */}
      <Skrzynka x={10} y={12} w={86} h={26} tekst={t.paliwo} />
      <Skrzynka x={234} y={12} w={86} h={26} tekst={t.utleniacz} />

      {/* Pompy */}
      <Skrzynka x={10} y={64} w={86} h={26} tekst={t.pompa} />
      <Skrzynka x={234} y={64} w={86} h={26} tekst={t.pompa} />
      <Strzalka d="M 53 38 L 53 62" />
      <Strzalka d="M 277 38 L 277 62" />

      {/* Turbiny: w cyklu pełnoprzepływowym są dwie, po jednej na pompę. */}
      <Skrzynka x={10} y={112} w={86} h={24} tekst={t.turbina} />
      {pelny && <Skrzynka x={234} y={112} w={86} h={24} tekst={t.turbina} />}
      <Strzalka d="M 53 112 L 53 92" />
      {pelny && <Strzalka d="M 277 112 L 277 92" />}

      {/* Generatory wstępne */}
      {pelny ? (
        <>
          <Skrzynka x={8} y={156} w={90} h={34} tekst={t.generatorPaliwowy} mocna />
          <Skrzynka x={232} y={156} w={90} h={34} tekst={t.generatorUtleniaczowy} mocna />
          <Strzalka d="M 53 156 L 53 138" />
          <Strzalka d="M 277 156 L 277 138" />
          {/* Skrzyżowanie: część utleniacza idzie do generatora paliwowego i odwrotnie. */}
          <Strzalka d="M 234 76 L 180 76 L 180 173 L 100 173" />
          <Strzalka d="M 96 76 L 150 76 L 150 148 L 230 148 L 230 173" />
        </>
      ) : (
        <>
          <Skrzynka x={122} y={158} w={86} h={30} tekst={t.generatorGazu} mocna />
          <Strzalka d="M 96 76 L 140 76 L 140 156" />
          <Strzalka d="M 234 76 L 190 76 L 190 156" />
          <Strzalka d="M 122 172 L 98 172 L 98 138" />
        </>
      )}

      {/* Komora i dysza */}
      <Skrzynka x={112} y={206} w={106} h={26} tekst={t.komora} mocna />
      <path d="M 140 232 L 132 256 L 198 256 L 190 232 Z" fill="none" stroke="var(--tekst-2)" strokeWidth="0.75" />
      <text x="165" y="250" fill="var(--tekst-2)" fontSize="8" textAnchor="middle">{t.dysza}</text>

      {pelny ? (
        <>
          {/* Wszystko schodzi do komory — nic nie wychodzi na zewnątrz. */}
          <Strzalka d="M 53 190 L 53 218 L 110 218" kolor="var(--plomien)" />
          <Strzalka d="M 277 190 L 277 218 L 220 218" kolor="var(--plomien)" />
          <text x="165" y="200" fill="var(--plomien)" fontSize="8.5" textAnchor="middle">
            {t.wszystkoDoKomory}
          </text>
        </>
      ) : (
        <>
          {/* Główny strumień do komory i wydmuch turbiny w próżnię. */}
          <Strzalka d="M 165 190 L 165 204" />
          <Strzalka d="M 10 124 L 6 124 L 6 96" przerywana kolor="var(--tekst-2)" />
          <text x="6" y="88" fill="var(--tekst-2)" fontSize="8">{t.zaBurte}</text>
        </>
      )}
    </svg>
  );
}
