/**
 * Stan aplikacji: stos otwartych arkuszy i historia odwiedzin.
 *
 * `stos` trzyma pełną ścieżkę wejścia w głąb, nie tylko cztery widoczne
 * poziomy. Ograniczenie do czterech kart jest wyłącznie wizualne — reszta
 * ścieżki pokazuje się jako okruszki, żeby nie tracić drogi powrotnej.
 */

import { create } from 'zustand';
import type { Jezyk } from '../data/types';
import { drgnij, haptykaWlaczona, ustawHaptyke } from '../lib/haptyka';

export const WIDOCZNE_POZIOMY = 4;
const MAKS_HISTORII = 20;
const KLUCZ_HISTORII = 'strefa-wiedzy:historia';
const KLUCZ_JEZYKA = 'strefa-wiedzy:jezyk';

/** Wybór użytkownika ma pierwszeństwo, potem język przeglądarki, na końcu polski. */
function wczytajJezyk(): Jezyk {
  try {
    const zapisany = window.localStorage.getItem(KLUCZ_JEZYKA);
    if (zapisany === 'pl' || zapisany === 'en') return zapisany;
  } catch {
    // brak pamięci — schodzimy do wykrywania z przeglądarki
  }
  return navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

function wczytajHistorie(): string[] {
  try {
    const surowe = window.localStorage.getItem(KLUCZ_HISTORII);
    if (surowe === null) return [];
    const dane: unknown = JSON.parse(surowe);
    return Array.isArray(dane) ? dane.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function zapiszHistorie(historia: string[]): void {
  try {
    window.localStorage.setItem(KLUCZ_HISTORII, JSON.stringify(historia));
  } catch {
    // brak pamięci nie może przerwać nawigacji
  }
}

interface Stan {
  stos: string[];
  historia: string[];
  haptyka: boolean;
  jezyk: Jezyk;
  ustawJezyk: (j: Jezyk) => void;
  otworz: (id: string) => void;
  zamknij: () => void;
  zamknijDo: (glebokosc: number) => void;
  zamknijWszystko: () => void;
  przelaczHaptyke: () => void;
}

export const useStan = create<Stan>((set, get) => ({
  stos: [],
  historia: wczytajHistorie(),
  haptyka: haptykaWlaczona(),
  jezyk: wczytajJezyk(),

  ustawJezyk: (j) => {
    if (get().jezyk === j) return;
    try { window.localStorage.setItem(KLUCZ_JEZYKA, j); } catch { /* nieistotne */ }
    // Zmiana języka zamyka stos — arkusze trzymają treść w poprzedniej wersji.
    set({ jezyk: j, stos: [] });
    document.documentElement.lang = j;
  },

  otworz: (id) => {
    const { stos, historia } = get();
    // Ponowne dotknięcie tego samego, co na wierzchu, nie powinno mnożyć kart.
    if (stos[stos.length - 1] === id) return;
    drgnij();
    const nowaHistoria = [id, ...historia.filter((h) => h !== id)].slice(0, MAKS_HISTORII);
    zapiszHistorie(nowaHistoria);
    set({ stos: [...stos, id], historia: nowaHistoria });
  },

  zamknij: () => {
    const { stos } = get();
    if (stos.length === 0) return;
    drgnij();
    set({ stos: stos.slice(0, -1) });
  },

  /** Powrót z okruszków: obcinamy stos do zadanej głębokości. */
  zamknijDo: (glebokosc) => {
    drgnij();
    set({ stos: get().stos.slice(0, glebokosc) });
  },

  zamknijWszystko: () => {
    if (get().stos.length === 0) return;
    drgnij();
    set({ stos: [] });
  },

  przelaczHaptyke: () => {
    const nowa = !get().haptyka;
    ustawHaptyke(nowa);
    set({ haptyka: nowa });
  },
}));
