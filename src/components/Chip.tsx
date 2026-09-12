import { useBaza } from '../app/kontekst';
import { useStan } from '../app/stan';

/**
 * Klikalne pojęcie w treści. Pole dotyku rozszerzamy pseudoelementem, żeby
 * miało ok. 44 px wysokości, nie ruszając przy tym interlinii akapitu.
 */
export function Chip({ id, etykieta }: { id: string; etykieta: string }) {
  const baza = useBaza();
  const otworz = useStan((s) => s.otworz);
  const cel = baza.encje[id];

  // Walidator nie dopuści linku bez encji, ale w trakcie pisania treści zdarza
  // się to na sekundę — wtedy pokazujemy zwykły tekst, a nie martwy przycisk.
  if (cel === undefined) return <>{etykieta}</>;

  // Zapis [[id]] bez etykiety wyświetlałby identyfikator z myślnikami. Nazwa
  // encji jest zawsze lepsza niż slug, nawet jeśli odmiana nie zawsze pasuje —
  // poprawną formę autor podaje jawnie jako [[id|forma]].
  const tekst = etykieta === id ? cel.nazwa : etykieta;

  return (
    <button
      type="button"
      onClick={() => otworz(id)}
      aria-label={`${cel.nazwa} — ${cel.krotki}`}
      className="relative -mx-[2px] rounded-chip px-[3px] text-blekit
                 after:absolute after:inset-x-0 after:-inset-y-[11px] after:content-['']"
      style={{ background: 'var(--mat-chip)' }}
    >
      {tekst}
    </button>
  );
}
