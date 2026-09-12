/**
 * Sylwetka Starshipa w proporcjach rzeczywistych: 121,3 m wysokości przy
 * 9 m średnicy, czyli mniej więcej 13,5 : 1. Rysunek dzieli się na dolny
 * stopień i górny, żeby było widać, gdzie kończy się Super Heavy.
 */

export function SylwetkaStarship({ klasa }: { klasa?: string }) {
  return (
    <svg
      viewBox="0 0 30 405"
      className={klasa}
      role="img"
      aria-label="Sylwetka rakiety Starship w proporcjach rzeczywistych: 121,3 metra wysokości przy 9 metrach średnicy"
      fill="none"
    >
      {/* Górny stopień: stożek dziobowy, kadłub, dwie klapy sterowe. */}
      <path
        d="M15 4 C 19 24, 21 44, 21 58 L21 150 L9 150 L9 58 C 9 44, 11 24, 15 4 Z"
        fill="currentColor"
      />
      <path d="M9 44 L4 66 L4 82 L9 78 Z" fill="currentColor" opacity="0.55" />
      <path d="M21 44 L26 66 L26 82 L21 78 Z" fill="currentColor" opacity="0.55" />
      <path d="M9 128 L3 140 L3 160 L9 152 Z" fill="currentColor" opacity="0.55" />
      <path d="M21 128 L27 140 L27 160 L21 152 Z" fill="currentColor" opacity="0.55" />

      {/* Przerwa międzystopniowa — jedyna linia w całym rysunku. */}
      <rect x="9" y="152" width="12" height="3" fill="currentColor" opacity="0.35" />

      {/* Dolny stopień: Super Heavy z siatkami aerodynamicznymi. */}
      <path d="M9 157 L21 157 L21 392 L9 392 Z" fill="currentColor" />
      <rect x="4" y="166" width="5" height="14" fill="currentColor" opacity="0.55" />
      <rect x="21" y="166" width="5" height="14" fill="currentColor" opacity="0.55" />

      {/* Sekcja silnikowa — 33 Raptory zaznaczone jako rozszerzenie podstawy. */}
      <path d="M9 392 L21 392 L24 401 L6 401 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
