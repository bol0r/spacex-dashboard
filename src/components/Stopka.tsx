import { useT } from '../i18n';

/**
 * Zastrzeżenie o braku powiązania z opisywanymi firmami. Świadomie nie jest
 * schowane pod rozwijaczem ani zapisane najmniejszym dostępnym stopniem pisma —
 * ma być przeczytane, a nie formalnie obecne.
 */
export function Stopka() {
  const t = useT();

  return (
    <footer className="col-span-2 mt-10 border-t-[0.5px] border-[color:var(--wlos)] pt-5 lg:col-span-4">
      <p className="max-w-[64ch] text-przypis text-tekst-2">{t.zastrzezenie}</p>
      <p className="mt-2 max-w-[64ch] text-przypis text-tekst-2">{t.zrodlaOpis}</p>
    </footer>
  );
}
