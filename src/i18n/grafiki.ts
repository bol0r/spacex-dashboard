/**
 * Teksty diagramów. Wydzielone z głównego słownika, bo etykiet wewnątrz
 * rysunków jest dużo i mieszałyby się z interfejsem.
 */

import type { Jezyk } from '../data/types';

export interface TekstyGrafik {
  skalaRakiet: { tytul: string; opis: string; metry: string };
  profilLotu: {
    tytul: string;
    opis: string;
    nieDoSkali: string;
    barka: string;
    etapy: [string, string, string, string, string, string];
    drugiStopien: string;
    wysokosc: string;
    odleglosc: string;
  };
  cykl: {
    tytulGenerator: string;
    tytulPelny: string;
    opisGenerator: string;
    opisPelny: string;
    paliwo: string;
    utleniacz: string;
    pompa: string;
    turbina: string;
    generatorGazu: string;
    generatorPaliwowy: string;
    generatorUtleniaczowy: string;
    komora: string;
    dysza: string;
    zaBurte: string;
    wszystkoDoKomory: string;
  };
  orbity: {
    tytul: string;
    opis: string;
    skalaLog: string;
    rozpad: string;
    pulapLeo: string;
    opoznienie: string;
  };
}

const PL: TekstyGrafik = {
  skalaRakiet: {
    tytul: 'Rakiety SpaceX w skali',
    opis: 'Cztery rakiety SpaceX narysowane we wspólnej skali wysokości i średnicy: Falcon 1 ma 21 metrów, Falcon 9 blisko 70, Falcon Heavy 70 przy trzech członach obok siebie, a Starship 121 metrów.',
    metry: 'm',
  },
  profilLotu: {
    tytul: 'Jak wraca pierwszy stopień Falcona 9',
    opis: 'Schemat powrotu pierwszego stopnia: rozdzielenie stopni, hamowanie wsteczne na trzech silnikach, rozłożenie siatek aerodynamicznych, hamowanie przy wejściu w atmosferę na trzech silnikach na wysokości 70–40 km, rozłożenie nóg i lądowanie na jednym silniku.',
    nieDoSkali: 'schemat, nie zachowuje skali',
    barka: 'Przy lądowaniu na barce hamowanie wsteczne jest krótsze albo pomijane — booster schodzi w dół trasy, a nie wraca nad stanowisko.',
    etapy: [
      'Start',
      'Rozdzielenie stopni',
      'Hamowanie wsteczne — 3 silniki',
      'Siatki aerodynamiczne',
      'Wejście w atmosferę — 3 silniki, 70–40 km',
      'Lądowanie — 1 silnik',
    ],
    drugiStopien: 'Drugi stopień leci dalej na orbitę',
    wysokosc: 'wysokość',
    odleglosc: 'odległość od stanowiska',
  },
  cykl: {
    tytulGenerator: 'Cykl z generatorem gazu — Merlin',
    tytulPelny: 'Pełnoprzepływowe spalanie stopniowe — Raptor',
    opisGenerator: 'Schemat cyklu z generatorem gazu: mała porcja paliwa i utleniacza spala się w osobnym generatorze, napędza turbinę obu pomp, a spaliny uchodzą za burtę i są bezpowrotnie tracone.',
    opisPelny: 'Schemat cyklu pełnoprzepływowego: dwa generatory wstępne, jeden bogaty w paliwo i jeden bogaty w utleniacz, napędzają osobne turbiny pomp, a całość gazów trafia do komory spalania — nic nie ucieka na zewnątrz.',
    paliwo: 'Paliwo',
    utleniacz: 'Utleniacz',
    pompa: 'Pompa',
    turbina: 'Turbina',
    generatorGazu: 'Generator gazu',
    generatorPaliwowy: 'Generator\nbogaty w paliwo',
    generatorUtleniaczowy: 'Generator\nbogaty w utleniacz',
    komora: 'Komora spalania',
    dysza: 'Dysza',
    zaBurte: 'za burtę — strata',
    wszystkoDoKomory: 'wszystko wraca do komory',
  },
  orbity: {
    tytul: 'Gdzie co krąży',
    opis: 'Skala wysokości orbit w kilometrach: poniżej 300 km orbita rozpada się w miesiącach, stacja kosmiczna krąży na 400–420 km, Starlink około 550 km, Inspiration4 osiągnęło 585 km, Polaris Dawn 1400 km, pułap niskiej orbity to 2000 km, a orbita geostacjonarna leży na 35 786 km.',
    skalaLog: 'skala logarytmiczna',
    rozpad: 'poniżej 300 km orbita rozpada się w miesiącach',
    pulapLeo: 'pułap niskiej orbity',
    opoznienie: 'sygnał wraca po ok. 240 ms',
  },
};

const EN: TekstyGrafik = {
  skalaRakiet: {
    tytul: 'SpaceX rockets to scale',
    opis: 'Four SpaceX rockets drawn at a shared scale of height and diameter: Falcon 1 is 21 metres, Falcon 9 close to 70, Falcon Heavy 70 with three cores side by side, and Starship 121 metres.',
    metry: 'm',
  },
  profilLotu: {
    tytul: 'How a Falcon 9 first stage comes back',
    opis: 'Diagram of the first stage return: stage separation, boostback burn on three engines, grid fin deployment, entry burn on three engines at 70–40 km, leg deployment and landing on a single engine.',
    nieDoSkali: 'schematic, not to scale',
    barka: 'On a drone ship landing the boostback burn is shorter or skipped entirely — the booster comes down downrange instead of returning to the pad.',
    etapy: [
      'Liftoff',
      'Stage separation',
      'Boostback burn — 3 engines',
      'Grid fins deploy',
      'Entry burn — 3 engines, 70–40 km',
      'Landing burn — 1 engine',
    ],
    drugiStopien: 'Second stage continues to orbit',
    wysokosc: 'altitude',
    odleglosc: 'distance downrange',
  },
  cykl: {
    tytulGenerator: 'Gas-generator cycle — Merlin',
    tytulPelny: 'Full-flow staged combustion — Raptor',
    opisGenerator: 'Diagram of the gas-generator cycle: a small portion of fuel and oxidiser burns in a separate generator, drives the turbine for both pumps, and its exhaust escapes overboard and is lost for good.',
    opisPelny: 'Diagram of the full-flow cycle: two preburners, one fuel-rich and one oxidiser-rich, drive separate pump turbines, and all of the gas goes into the combustion chamber — nothing escapes.',
    paliwo: 'Fuel',
    utleniacz: 'Oxidiser',
    pompa: 'Pump',
    turbina: 'Turbine',
    generatorGazu: 'Gas generator',
    generatorPaliwowy: 'Fuel-rich\npreburner',
    generatorUtleniaczowy: 'Oxidiser-rich\npreburner',
    komora: 'Combustion chamber',
    dysza: 'Nozzle',
    zaBurte: 'overboard — lost',
    wszystkoDoKomory: 'everything returns to the chamber',
  },
  orbity: {
    tytul: 'What orbits where',
    opis: 'A scale of orbital altitudes in kilometres: below 300 km an orbit decays within months, the space station orbits at 400–420 km, Starlink around 550 km, Inspiration4 reached 585 km, Polaris Dawn 1,400 km, the low Earth orbit ceiling is 2,000 km, and geostationary orbit sits at 35,786 km.',
    skalaLog: 'logarithmic scale',
    rozpad: 'below 300 km an orbit decays within months',
    pulapLeo: 'low Earth orbit ceiling',
    opoznienie: 'signal returns after about 240 ms',
  },
};

export const TEKSTY_GRAFIK: Record<Jezyk, TekstyGrafik> = { pl: PL, en: EN };
