/**
 * Twardy walidator bazy. Uruchamiany przez `npm run waliduj` i w testach.
 * Zasada: encja albo jest kompletna i udokumentowana, albo jej nie ma.
 */

import type {
  Encja, KodBledu, Naruszenie, WagaBledu, WynikWalidacji,
} from '../data/types';
import { LIMITY, ZAKAZANE_POWODY } from '../data/types';
import { wyciagnijLinki } from './linkify';

const DATA_ISO = /^\d{4}(-\d{2}(-\d{2})?)?$/;

/**
 * Etykiety faktów, których wartość rośnie w czasie — wymagają `stanNa`.
 *
 * Lista była pierwotnie szersza i łapała „Pierwsze udane lądowanie" albo
 * „Poprzedni rekord nachylenia", czyli fakty jednorazowe z datą w wartości.
 * Ostrzeżenie, które w większości przypadków jest fałszywe, przestaje cokolwiek
 * znaczyć, więc wzorce zawężono do etykiet naprawdę zliczających.
 */
const WZORCE_ZMIENNE = [
  /liczba/i, /łącznie/i, /lacznie/i, /wycen/i, /subskry/i, /abonen/i,
  /satelit/i, /zatrudni/i, /przychod/i, /kapitaliz/i, /dostarcz/i,
  /skuteczno/i, /rekord lot/i, /kwota/i, /\bzysk/i,
];

/** Wartości, które są datą, a nie licznikiem — data nie potrzebuje `stanNa`. */
const WYGLADA_NA_DATE =
  /\b(?:stycze[nń]|stycznia|lut[yego]*|luty|lutego|marz?e?c|marca|kwiecie[nń]|kwietnia|maj|maja|czerwiec|czerwca|lipiec|lipca|sierpie[nń]|sierpnia|wrzesie[nń]|września|październik|października|listopad|listopada|grudzie[nń]|grudnia)\b|\b\d{1,2}\.\d{2}\.\d{4}\b|\b(?:19|20)\d{2}\b/i;

function blad(
  kod: KodBledu, waga: WagaBledu, encjaId: string, szczegol: string,
): Naruszenie {
  return { kod, waga, encjaId, szczegol };
}

export function walidujBaze(encje: readonly Encja[]): WynikWalidacji {
  const naruszenia: Naruszenie[] = [];
  const znaneId = new Set<string>();
  let sumaLinkow = 0;

  // Duplikaty muszą polecieć przed resztą — inaczej zbiór id kłamie.
  for (const e of encje) {
    if (znaneId.has(e.id)) {
      naruszenia.push(blad('DUPLIKAT_ID', 'blad', e.id, `id "${e.id}" występuje więcej niż raz`));
    }
    znaneId.add(e.id);
  }

  for (const e of encje) {
    if (e.krotki.length > LIMITY.krotkiMaxZnakow) {
      naruszenia.push(blad('KROTKI_ZA_DLUGI', 'blad', e.id,
        `${e.krotki.length} znaków, limit ${LIMITY.krotkiMaxZnakow}`));
    }

    if (e.tresc.length < LIMITY.akapityMin || e.tresc.length > LIMITY.akapityMax) {
      naruszenia.push(blad('ZLA_LICZBA_AKAPITOW', 'blad', e.id,
        `${e.tresc.length} akapitów, dozwolone ${LIMITY.akapityMin}–${LIMITY.akapityMax}`));
    }

    if (e.fakty.length < LIMITY.faktyMin || e.fakty.length > LIMITY.faktyMax) {
      naruszenia.push(blad('ZLA_LICZBA_FAKTOW', 'blad', e.id,
        `${e.fakty.length} faktów, dozwolone ${LIMITY.faktyMin}–${LIMITY.faktyMax}`));
    }

    if (e.ciekawostki.length < LIMITY.ciekawostkiMin) {
      naruszenia.push(blad('BRAK_CIEKAWOSTKI', 'blad', e.id, 'ciekawostka jest obowiązkowa'));
    }

    if (e.os.length < LIMITY.wydarzeniaMin) {
      naruszenia.push(blad('BRAK_WYDARZENIA', 'blad', e.id, 'oś wymaga min. 1 wydarzenia'));
    }

    if (e.zrodla.length < LIMITY.zrodlaMin) {
      naruszenia.push(blad('ZA_MALO_ZRODEL', 'blad', e.id,
        `${e.zrodla.length} źródeł, wymagane ${LIMITY.zrodlaMin}`));
    }

    if (e.powiazane.length < LIMITY.powiazaniaMin) {
      naruszenia.push(blad('ZA_MALO_POWIAZAN', 'blad', e.id,
        `${e.powiazane.length} powiązań, wymagane ${LIMITY.powiazaniaMin}`));
    }

    for (const p of e.powiazane) {
      if (!znaneId.has(p.id)) {
        naruszenia.push(blad('LINK_DO_NIEISTNIEJACEJ', 'blad', e.id,
          `powiązanie wskazuje na nieistniejące "${p.id}"`));
      }
      const powod = p.powod.trim().toLowerCase();
      if (powod === '' || (ZAKAZANE_POWODY as readonly string[]).includes(powod)) {
        naruszenia.push(blad('PUSTY_POWOD', 'blad', e.id,
          `powiązanie z "${p.id}" ma wypełniacz zamiast powodu`));
      }
    }

    const linki = wyciagnijLinki(e.tresc);
    sumaLinkow += linki.length;
    for (const id of linki) {
      if (!znaneId.has(id)) {
        naruszenia.push(blad('LINK_DO_NIEISTNIEJACEJ', 'blad', e.id,
          `[[${id}]] w treści nie ma swojej encji`));
      }
    }

    for (const f of e.fakty) {
      const zmienny = WZORCE_ZMIENNE.some((w) => w.test(f.etykieta))
        && /\d/.test(f.wartosc)
        && !WYGLADA_NA_DATE.test(f.wartosc);
      if (zmienny && f.stanNa === undefined) {
        // Heurystyka bywa nadgorliwa, więc to ostrzeżenie, nie blokada builda.
        naruszenia.push(blad('BRAK_STAN_NA', 'ostrzezenie', e.id,
          `"${f.etykieta}" wygląda na liczbę zmienną, a nie ma stanNa`));
      }
      if (f.stanNa !== undefined && !DATA_ISO.test(f.stanNa)) {
        naruszenia.push(blad('ZLY_FORMAT_DATY', 'blad', e.id, `stanNa "${f.stanNa}"`));
      }
    }

    for (const w of e.os) {
      if (!DATA_ISO.test(w.data)) {
        naruszenia.push(blad('ZLY_FORMAT_DATY', 'blad', e.id, `data wydarzenia "${w.data}"`));
      }
    }

    if (!DATA_ISO.test(e.zaktualizowano)) {
      naruszenia.push(blad('ZLY_FORMAT_DATY', 'blad', e.id, `zaktualizowano "${e.zaktualizowano}"`));
    }

    const wszystkieZrodla = [...e.zrodla, ...e.ciekawostki.map((c) => c.zrodlo)];
    for (const z of wszystkieZrodla) {
      if (!/^https:\/\/[^\s]+\.[^\s]+/.test(z.url)) {
        naruszenia.push(blad('URL_NIEPOPRAWNY', 'blad', e.id, `"${z.url}"`));
      }
      if (!DATA_ISO.test(z.dostep)) {
        naruszenia.push(blad('ZLY_FORMAT_DATY', 'blad', e.id, `dostęp źródła "${z.dostep}"`));
      }
    }
  }

  return {
    ok: naruszenia.every((n) => n.waga !== 'blad'),
    liczbaEncji: encje.length,
    sredniaLinkowWTresci: encje.length === 0 ? 0 : sumaLinkow / encje.length,
    naruszenia,
  };
}
