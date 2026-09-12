/**
 * Katalog źródeł. Trzymamy je w jednym miejscu, żeby data dostępu i wydawca
 * nie rozjechały się między encjami, a przy odświeżaniu bazy wystarczyło
 * podbić `dostep` w jednym wierszu.
 *
 * Zasada: w tym pliku nie ma ani jednego URL-a, którego nie otworzyliśmy.
 */

import type { Zrodlo } from './types';

const D = '2026-09-12'; // data dostępu dla całej partii z fazy 1

export const Z = {
  wikiStarship: {
    tytul: 'SpaceX Starship',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiStartyStarship: {
    tytul: 'List of Starship launches',
    url: 'https://en.wikipedia.org/wiki/List_of_Starship_launches',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiRaptor: {
    tytul: 'SpaceX Raptor',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Raptor',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiMerlin: {
    tytul: 'SpaceX Merlin',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Merlin',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiStartyFalcon: {
    tytul: 'List of Falcon 9 and Falcon Heavy launches',
    url: 'https://en.wikipedia.org/wiki/List_of_Falcon_9_and_Falcon_Heavy_launches',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiFalconHeavy: {
    tytul: 'Falcon Heavy',
    url: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiStarlink: {
    tytul: 'Starlink',
    url: 'https://en.wikipedia.org/wiki/Starlink',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiDragon2: {
    tytul: 'SpaceX Dragon 2',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Dragon_2',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiStarbase: {
    tytul: 'Starbase, Texas',
    url: 'https://en.wikipedia.org/wiki/Starbase,_Texas',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiShotwell: {
    tytul: 'Gwynne Shotwell',
    url: 'https://en.wikipedia.org/wiki/Gwynne_Shotwell',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiSpaceX: {
    tytul: 'SpaceX',
    url: 'https://en.wikipedia.org/wiki/SpaceX',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiMusk: {
    tytul: 'Elon Musk',
    url: 'https://en.wikipedia.org/wiki/Elon_Musk',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiTesla: {
    tytul: 'Tesla, Inc.',
    url: 'https://en.wikipedia.org/wiki/Tesla,_Inc.',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiIpo: {
    tytul: 'Initial public offering of SpaceX',
    url: 'https://en.wikipedia.org/wiki/Initial_public_offering_of_SpaceX',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiBarki: {
    tytul: 'Autonomous spaceport drone ship',
    url: 'https://en.wikipedia.org/wiki/Autonomous_spaceport_drone_ship',
    wydawca: 'Wikipedia', dostep: D,
  },
  nasaDemo2: {
    tytul: 'NASA Astronauts Launch from America in Historic Test Flight of SpaceX Crew Dragon',
    url: 'https://www.nasa.gov/news-release/nasa-astronauts-launch-from-america-in-historic-test-flight-of-spacex-crew-dragon/',
    wydawca: 'NASA', dostep: D,
  },
  spaceBarki: {
    tytul: 'Elon Musk Names SpaceX Drone Ships in Honor of Sci-Fi Legend',
    url: 'https://www.space.com/28445-spacex-elon-musk-drone-ships-names.html',
    wydawca: 'Space.com', dostep: D,
  },
  spaceStal: {
    tytul: "Why Elon Musk Turned to Stainless Steel for SpaceX's Starship Mars Rocket",
    url: 'https://www.space.com/43101-elon-musk-explains-stainless-steel-starship.html',
    wydawca: 'Space.com', dostep: D,
  },
  spaceSetny: {
    tytul: 'SpaceX sets rocket-reuse record on 100th Falcon 9 launch of the year',
    url: 'https://www.space.com/space-exploration/launches-spacecraft/spacex-starship-record-37th-booster-flight-100-falcon-9-launches',
    wydawca: 'Space.com', dostep: D,
  },
  sfnRekord: {
    tytul: 'SpaceX launches Falcon 9 rocket on record-breaking 36th flight',
    url: 'https://spaceflightnow.com/2026/07/09/live-coverage-spacex-to-launch-falcon-9-rocket-on-record-breaking-36th-flight/',
    wydawca: 'Spaceflight Now', dostep: D,
  },
  slsLot14: {
    tytul: 'SpaceX Flight 14 Starship Rocket Launch',
    url: 'https://www.spacelaunchschedule.com/launch/starship-flight-14/',
    wydawca: 'Space Launch Schedule', dostep: D,
  },
  cnbcLot13: {
    tytul: 'SpaceX launches massive Starship rocket in first test flight since IPO',
    url: 'https://www.cnbc.com/2026/07/24/spacex-launches-massive-starship-rocket-in-first-test-flight-since-ipo.html',
    wydawca: 'CNBC', dostep: D,
  },
  nprLot12: {
    tytul: 'SpaceX launches its biggest, most beefed-up Starship yet on a test flight',
    url: 'https://www.npr.org/2026/05/23/nx-s1-5832402/spacex-biggest-starship-flight',
    wydawca: 'NPR', dostep: D,
  },
  snewsOrbcomm: {
    tytul: 'Falcon 9 Launches Orbcomm Satellites, Lands First Stage',
    url: 'https://spacenews.com/falcon-9-launches-orbcomm-satellites-first-stage-lands/',
    wydawca: 'SpaceNews', dostep: D,
  },
  spaceBarkaCrs8: {
    tytul: 'SpaceX Sticks a Rocket Landing at Sea in Historic First',
    url: 'https://www.space.com/32517-spacex-sticks-rocket-landing-sea-dragon-launch.html',
    wydawca: 'Space.com', dostep: D,
  },
  wikiFfsc: {
    tytul: 'Staged combustion cycle',
    url: 'https://en.wikipedia.org/wiki/Staged_combustion_cycle',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiLeo: {
    tytul: 'Low Earth orbit',
    url: 'https://en.wikipedia.org/wiki/Low_Earth_orbit',
    wydawca: 'Wikipedia', dostep: D,
  },
} as const satisfies Record<string, Zrodlo>;
