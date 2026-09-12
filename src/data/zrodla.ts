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
  wikiFalcon1: {
    tytul: 'Falcon 1',
    url: 'https://en.wikipedia.org/wiki/Falcon_1',
    wydawca: 'Wikipedia', dostep: D,
  },
  snewsFalcon1: {
    tytul: 'SpaceX Successfully Launches Falcon 1 to Orbit',
    url: 'https://spacenews.com/spacex-successfully-launches-falcon-1-to-orbit/',
    wydawca: 'SpaceNews', dostep: D,
  },
  nsfFalcon1: {
    tytul: "SpaceX's Falcon I launch success on fourth attempt",
    url: 'https://www.nasaspaceflight.com/2008/09/live-space-xs-falcon-i-to-make-fourth-attempt-for-success/',
    wydawca: 'NASASpaceflight', dostep: D,
  },
  spaceFalcon1: {
    tytul: 'SpaceX Successfully Launches Falcon 1 Rocket Into Orbit',
    url: 'https://www.space.com/5905-spacex-successfully-launches-falcon-1-rocket-orbit.html',
    wydawca: 'Space.com', dostep: D,
  },
  wikiCrs7: {
    tytul: 'SpaceX CRS-7',
    url: 'https://en.wikipedia.org/wiki/SpaceX_CRS-7',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiAmos6: {
    tytul: 'Amos-6',
    url: 'https://en.wikipedia.org/wiki/Amos-6',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiCots: {
    tytul: 'Commercial Orbital Transportation Services',
    url: 'https://en.wikipedia.org/wiki/Commercial_Orbital_Transportation_Services',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiSes10: {
    tytul: 'SES-10',
    url: 'https://en.wikipedia.org/wiki/SES-10',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiInspiration4: {
    tytul: 'Inspiration4',
    url: 'https://en.wikipedia.org/wiki/Inspiration4',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiPolarisDawn: {
    tytul: 'Polaris Dawn',
    url: 'https://en.wikipedia.org/wiki/Polaris_Dawn',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiAx1: {
    tytul: 'Axiom Mission 1',
    url: 'https://en.wikipedia.org/wiki/Axiom_Mission_1',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiFram2: {
    tytul: 'Fram2',
    url: 'https://en.wikipedia.org/wiki/Fram2',
    wydawca: 'Wikipedia', dostep: D,
  },
  oigHls: {
    tytul: "NASA's Management of the Human Landing System Contracts (IG-26-004)",
    url: 'https://oig.nasa.gov/wp-content/uploads/2026/03/final-report-ig-26-004-nasas-management-of-the-human-landing-system-contracts.pdf',
    wydawca: 'NASA Office of Inspector General', dostep: D,
  },
  nprHls: {
    tytul: 'SpaceX Wins $2.9 Billion Contract For Next Lunar Lander',
    url: 'https://www.npr.org/2021/04/17/988416951/spacex-wins-2-9-billion-contract-for-next-lunar-lander',
    wydawca: 'NPR', dostep: D,
  },
  nasaNextstep: {
    tytul: 'NextSTEP-2 H: Human Landing System',
    url: 'https://www.nasa.gov/humans-in-space/nextstep-h-human-landing-system/',
    wydawca: 'NASA', dostep: D,
  },
  wikiRoadster: {
    tytul: 'Tesla Roadster (first generation)',
    url: 'https://en.wikipedia.org/wiki/Tesla_Roadster_(first_generation)',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiModelS: {
    tytul: 'Tesla Model S',
    url: 'https://en.wikipedia.org/wiki/Tesla_Model_S',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiModel3: {
    tytul: 'Tesla Model 3',
    url: 'https://en.wikipedia.org/wiki/Tesla_Model_3',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiModelY: {
    tytul: 'Tesla Model Y',
    url: 'https://en.wikipedia.org/wiki/Tesla_Model_Y',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiCybertruck: {
    tytul: 'Tesla Cybertruck',
    url: 'https://en.wikipedia.org/wiki/Tesla_Cybertruck',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiAutopilot: {
    tytul: 'Tesla Autopilot',
    url: 'https://en.wikipedia.org/wiki/Tesla_Autopilot',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiGigaNevada: {
    tytul: 'Gigafactory Nevada',
    url: 'https://en.wikipedia.org/wiki/Gigafactory_Nevada',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiOptimus: {
    tytul: 'Optimus (robot)',
    url: 'https://en.wikipedia.org/wiki/Optimus_(robot)',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiTeslaEnergy: {
    tytul: 'Tesla Energy',
    url: 'https://en.wikipedia.org/wiki/Tesla_Energy',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiDojo: {
    tytul: 'Tesla Dojo',
    url: 'https://en.wikipedia.org/wiki/Tesla_Dojo',
    wydawca: 'Wikipedia', dostep: D,
  },
  secMusk: {
    tytul: 'Elon Musk Settles SEC Fraud Charges; Tesla Charged With and Resolves Securities Law Charge',
    url: 'https://www.sec.gov/newsroom/press-releases/2018-226',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D,
  },
  wikiFalcon9: {
    tytul: 'Falcon 9',
    url: 'https://en.wikipedia.org/wiki/Falcon_9',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiLadowania: {
    tytul: 'Falcon 9 first-stage landing tests',
    url: 'https://en.wikipedia.org/wiki/Falcon_9_first-stage_landing_tests',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiDeltaV: {
    tytul: 'Delta-v',
    url: 'https://en.wikipedia.org/wiki/Delta-v',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiApsis: {
    tytul: 'Apsis',
    url: 'https://en.wikipedia.org/wiki/Apsis',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiGto: {
    tytul: 'Geostationary transfer orbit',
    url: 'https://en.wikipedia.org/wiki/Geostationary_transfer_orbit',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiGeo: {
    tytul: 'Geostationary orbit',
    url: 'https://en.wikipedia.org/wiki/Geostationary_orbit',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiSso: {
    tytul: 'Sun-synchronous orbit',
    url: 'https://en.wikipedia.org/wiki/Sun-synchronous_orbit',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiItar: {
    tytul: 'International Traffic in Arms Regulations',
    url: 'https://en.wikipedia.org/wiki/International_Traffic_in_Arms_Regulations',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiKessler: {
    tytul: 'Kessler syndrome',
    url: 'https://en.wikipedia.org/wiki/Kessler_syndrome',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiAutogeniczne: {
    tytul: 'Autogenous pressurization',
    url: 'https://en.wikipedia.org/wiki/Autogenous_pressurization',
    wydawca: 'Wikipedia', dostep: D,
  },
  wordoriginsRud: {
    tytul: 'rapid unplanned/unscheduled disassembly (RUD)',
    url: 'https://www.wordorigins.org/big-list-entries/rapid-unplanned-disassembly-rud',
    wydawca: 'Wordorigins.org', dostep: D,
  },
  spaceStageZero: {
    tytul: 'Elon Musk unveils SpaceX launch and catch tower for Starship Mars rocket',
    url: 'https://www.space.com/spacex-starship-launch-tower-elon-musk-video',
    wydawca: 'Space.com', dostep: D,
  },
  nasaScrub: {
    tytul: 'Apollo Saturn V launch hold / recycle and scrub turnaround constraints',
    url: 'https://www.nasa.gov/history/afj/launchwindow/scrub.html',
    wydawca: 'NASA', dostep: D,
  },
} as const satisfies Record<string, Zrodlo>;
