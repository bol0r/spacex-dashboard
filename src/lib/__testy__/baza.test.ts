import { describe, expect, it } from 'vitest';
import { WSZYSTKIE, WEDLUG_KATEGORII } from '../../data/wszystkie';
import { walidujBaze } from '../validate';
import { podzielNaSegmenty, wyciagnijLinki } from '../linkify';
import { zbudujBaze } from '../../data/index';
import type { Kategoria } from '../../data/types';

describe('walidator', () => {
  const wynik = walidujBaze(WSZYSTKIE);

  it('cała baza przechodzi bez błędów blokujących', () => {
    expect(wynik.naruszenia.filter((n) => n.waga === 'blad')).toEqual([]);
  });

  it('każde [[id]] w treści ma swoją encję', () => {
    const znane = new Set(WSZYSTKIE.map((e) => e.id));
    for (const e of WSZYSTKIE) {
      for (const id of wyciagnijLinki(e.tresc)) expect(znane.has(id)).toBe(true);
    }
  });

  it('łapie encję bez ciekawostki', () => {
    const zepsuta = WSZYSTKIE.map((e) => ({ ...e, ciekawostki: [] }));
    expect(walidujBaze(zepsuta).naruszenia.some((n) => n.kod === 'BRAK_CIEKAWOSTKI')).toBe(true);
  });

  it('łapie wypełniacz w polu powod', () => {
    const pierwsza = WSZYSTKIE[0];
    expect(pierwsza).toBeDefined();
    if (pierwsza === undefined) return;
    const zepsuta = [{ ...pierwsza, powiazane: pierwsza.powiazane.map((p) => ({ ...p, powod: 'powiązane' })) }];
    expect(walidujBaze(zepsuta).naruszenia.some((n) => n.kod === 'PUSTY_POWOD')).toBe(true);
  });
});

describe('linkify', () => {
  it('rozdziela tekst i chipy, obsługując etykietę po pionowej kresce', () => {
    expect(podzielNaSegmenty('Napędza [[starship|Starshipa]] od 2023.')).toEqual([
      { rodzaj: 'tekst', tekst: 'Napędza ' },
      { rodzaj: 'link', id: 'starship', etykieta: 'Starshipa' },
      { rodzaj: 'tekst', tekst: ' od 2023.' },
    ]);
  });
});

describe('indeks relacji', () => {
  const baza = zbudujBaze(Object.entries(WEDLUG_KATEGORII) as Array<[Kategoria, typeof WSZYSTKIE]>);

  it('domyka relacje w obie strony', () => {
    const raptor = baza.encje['raptor'];
    expect(raptor).toBeDefined();
    // Raptor deklaruje Super Heavy; Super Heavy musi mieć zwrot przychodzący.
    expect(baza.encje['super-heavy']?.przychodzace.some((p) => p.id === 'raptor')).toBe(true);
  });

  it('żadna encja nie jest ślepym zaułkiem', () => {
    for (const id of baza.kolejnosc) {
      const e = baza.encje[id];
      expect((e?.wychodzace.length ?? 0) + (e?.przychodzace.length ?? 0)).toBeGreaterThanOrEqual(3);
    }
  });
});
