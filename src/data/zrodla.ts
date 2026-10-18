/**
 * Katalog źródeł. Trzymamy je w jednym miejscu, żeby data dostępu i wydawca
 * nie rozjechały się między encjami, a przy odświeżaniu bazy wystarczyło
 * podbić `dostep` w jednym wierszu.
 *
 * Zasada: w tym pliku nie ma ani jednego URL-a, którego nie otworzyliśmy.
 */

import type { Zrodlo } from './types';

const D = '2026-09-12';  // partie 1–3 fazy 3
const D2 = '2026-09-13'; // partia „reszta imperium"
const D3 = '2026-10-18'; // aktualizacja stanu bieżącego przed wersją 0.7.0

export const Z = {
  wikiStarship: {
    tytul: 'SpaceX Starship',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
    wydawca: 'Wikipedia', dostep: D,
  },
  wikiStartyStarship: {
    tytul: 'List of Starship launches',
    url: 'https://en.wikipedia.org/wiki/List_of_Starship_launches',
    wydawca: 'Wikipedia', dostep: D3,
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
    wydawca: 'Wikipedia', dostep: D3,
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
  wikiZip2: {
    tytul: 'Zip2',
    url: 'https://en.wikipedia.org/wiki/Zip2',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiPaypal: {
    tytul: 'PayPal',
    url: 'https://en.wikipedia.org/wiki/PayPal',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiNeuralink: {
    tytul: 'Neuralink',
    url: 'https://en.wikipedia.org/wiki/Neuralink',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiBoring: {
    tytul: 'The Boring Company',
    url: 'https://en.wikipedia.org/wiki/The_Boring_Company',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiOpenai: {
    tytul: 'OpenAI',
    url: 'https://en.wikipedia.org/wiki/OpenAI',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiXai: {
    tytul: 'xAI',
    url: 'https://en.wikipedia.org/wiki/XAI_(company)',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiPrzejecie: {
    tytul: 'Acquisition of Twitter by Elon Musk',
    url: 'https://en.wikipedia.org/wiki/Acquisition_of_Twitter_by_Elon_Musk',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiHyperloop: {
    tytul: 'Hyperloop',
    url: 'https://en.wikipedia.org/wiki/Hyperloop',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiFundacja: {
    tytul: 'Musk Foundation',
    url: 'https://en.wikipedia.org/wiki/Musk_Foundation',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiLc39a: {
    tytul: 'Kennedy Space Center Launch Complex 39A',
    url: 'https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39A',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiMcGregor: {
    tytul: 'SpaceX Rocket Development and Test Facility',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Rocket_Development_and_Test_Facility',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiSlc40: {
    tytul: 'Cape Canaveral Space Launch Complex 40',
    url: 'https://en.wikipedia.org/wiki/Cape_Canaveral_Space_Launch_Complex_40',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiStrefy: {
    tytul: 'Landing Zones 1 and 2',
    url: 'https://en.wikipedia.org/wiki/Landing_Zones_1_and_2',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiHistoria: {
    tytul: 'History of SpaceX',
    url: 'https://en.wikipedia.org/wiki/History_of_SpaceX',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiMueller: {
    tytul: 'Tom Mueller',
    url: 'https://en.wikipedia.org/wiki/Tom_Mueller',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiKoenigsmann: {
    tytul: 'Hans Koenigsmann',
    url: 'https://en.wikipedia.org/wiki/Hans_Koenigsmann',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiGerstenmaier: {
    tytul: 'William H. Gerstenmaier',
    url: 'https://en.wikipedia.org/wiki/William_H._Gerstenmaier',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiDragon1: {
    tytul: 'SpaceX Dragon 1',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Dragon_1',
    wydawca: 'Wikipedia', dostep: D2,
  },
  detroitNews747: {
    tytul: "747's reign as queen of the skies coming to close",
    url: 'https://www.detroitnews.com/story/business/2017/03/20/boeing-plane/99421748/',
    wydawca: 'The Detroit News', dostep: D2,
  },
  wikiSemi: {
    tytul: 'Tesla Semi',
    url: 'https://en.wikipedia.org/wiki/Tesla_Semi',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiSolarcity: {
    tytul: 'SolarCity',
    url: 'https://en.wikipedia.org/wiki/SolarCity',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiSupercharger: {
    tytul: 'Tesla Supercharger',
    url: 'https://en.wikipedia.org/wiki/Tesla_Supercharger',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiGigaShanghai: {
    tytul: 'Gigafactory Shanghai',
    url: 'https://en.wikipedia.org/wiki/Gigafactory_Shanghai',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiGigaBerlin: {
    tytul: 'Gigafactory Berlin-Brandenburg',
    url: 'https://en.wikipedia.org/wiki/Gigafactory_Berlin-Brandenburg',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiCrew1: {
    tytul: 'SpaceX Crew-1',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Crew-1',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiTransporter: {
    tytul: 'SpaceX Transporter',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Transporter',
    wydawca: 'Wikipedia', dostep: D2,
  },
  cleantechPlany: {
    tytul: "Tesla's 3 Master Plans — What It Has Achieved & What It Hasn't",
    url: 'https://cleantechnica.com/2023/05/27/teslas-3-master-plans-what-it-has-achieved-what-it-hasnt/',
    wydawca: 'CleanTechnica', dostep: D2,
  },
  wikiKimbal: {
    tytul: 'Kimbal Musk',
    url: 'https://en.wikipedia.org/wiki/Kimbal_Musk',
    wydawca: 'Wikipedia', dostep: D2,
  },
  teslaKimbal: {
    tytul: 'Kimbal Musk — sylwetka członka rady dyrektorów',
    url: 'https://www.votetesla.com/meet-your-board/kimbal-musk/',
    wydawca: 'Tesla (materiały dla akcjonariuszy)', dostep: D2,
  },
  wikiMechazilla: {
    tytul: 'Mechazilla',
    url: 'https://en.wikipedia.org/wiki/Mechazilla',
    wydawca: 'Wikipedia', dostep: D2,
  },
  cbsChwyt: {
    tytul: 'SpaceX pulls off unprecedented feat, grabbing descending rocket with mechanical arms',
    url: 'https://www.cbsnews.com/news/spacex-pulls-off-unprecedented-feat-grabbing-descending-rocket-with-mechanical-arms/',
    wydawca: 'CBS News', dostep: D2,
  },
  wikiSlc4: {
    tytul: 'Vandenberg Space Launch Complex 4',
    url: 'https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_4',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiCrew9: {
    tytul: 'SpaceX Crew-9',
    url: 'https://en.wikipedia.org/wiki/SpaceX_Crew-9',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiClipper: {
    tytul: 'Europa Clipper',
    url: 'https://en.wikipedia.org/wiki/Europa_Clipper',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiStraubel: {
    tytul: 'JB Straubel',
    url: 'https://en.wikipedia.org/wiki/JB_Straubel',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiEberhard: {
    tytul: 'Martin Eberhard',
    url: 'https://en.wikipedia.org/wiki/Martin_Eberhard',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiHolzhausen: {
    tytul: 'Franz von Holzhausen',
    url: 'https://en.wikipedia.org/wiki/Franz_von_Holzhausen',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiRodzina: {
    tytul: 'Musk family',
    url: 'https://en.wikipedia.org/wiki/Musk_family',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiHaldeman: {
    tytul: 'Joshua N. Haldeman',
    url: 'https://en.wikipedia.org/wiki/Joshua_N._Haldeman',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiDoge: {
    tytul: 'Department of Government Efficiency',
    url: 'https://en.wikipedia.org/wiki/Department_of_Government_Efficiency',
    wydawca: 'Wikipedia', dostep: D2,
  },
  cbsDoge: {
    tytul: 'DOGE wall of receipts riddled with inaccuracies, congressional watchdog says',
    url: 'https://www.cbsnews.com/news/doge-wall-of-receipts-elon-musk-government-accountability-office/',
    wydawca: 'CBS News', dostep: D2,
  },
  wikiTornetta: {
    tytul: 'Tornetta v. Musk',
    url: 'https://en.wikipedia.org/wiki/Tornetta_v._Musk',
    wydawca: 'Wikipedia', dostep: D2,
  },
  electrekPakiet: {
    tytul: 'Delaware Court reinstates Musk 55B pay package, penalizes him 1 dollar instead',
    url: 'https://electrek.co/2025/12/20/delaware-court-reinstates-musks-55b-pay-package-penalizes-him-1-instead/',
    wydawca: 'Electrek', dostep: D2,
  },
  nbcPakiet: {
    tytul: 'Tesla shareholders approve 1 trillion dollar pay package for Elon Musk',
    url: 'https://www.nbcnews.com/tech/elon-musk/tesla-elon-musk-shareholder-meeting-1-trillion-dollar-pay-package-rcna242223',
    wydawca: 'NBC News', dostep: D2,
  },
  secSplit: {
    tytul: 'Tesla, Inc. — Form DEF 14A, walne zgromadzenie 4 sierpnia 2022',
    url: 'https://www.sec.gov/Archives/edgar/data/1318605/000156459022024064/tsla-def14a_20220804.htm',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D2,
  },
  wikiHistoriaTesli: {
    tytul: 'History of Tesla, Inc.',
    url: 'https://en.wikipedia.org/wiki/History_of_Tesla,_Inc.',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiStarlinkUkraina: {
    tytul: 'Starlink in the Russo-Ukrainian War',
    url: 'https://en.wikipedia.org/wiki/Starlink_in_the_Russo-Ukrainian_War',
    wydawca: 'Wikipedia', dostep: D2,
  },
  pbsStarlink: {
    tytul: 'Musk refusal to provide Starlink support for Ukraine attack in Crimea raises questions for Pentagon',
    url: 'https://www.pbs.org/newshour/economy/elon-musks-refusal-to-provide-starlink-support-for-ukraine-attack-in-crimea-raises-questions-for-pentagon',
    wydawca: 'PBS NewsHour', dostep: D2,
  },
  wikiCiolkowski: {
    tytul: 'Tsiolkovsky rocket equation',
    url: 'https://en.wikipedia.org/wiki/Tsiolkovsky_rocket_equation',
    wydawca: 'Wikipedia', dostep: D2,
  },
  nasaRownanie: {
    tytul: 'Ideal Rocket Equation — Beginners Guide to Aeronautics',
    url: 'https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/ideal-rocket-equation/',
    wydawca: 'NASA Glenn Research Center', dostep: D2,
  },
  wikiStopnie: {
    tytul: 'Multistage rocket',
    url: 'https://en.wikipedia.org/wiki/Multistage_rocket',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiPredkoscUcieczki: {
    tytul: 'Escape velocity',
    url: 'https://en.wikipedia.org/wiki/Escape_velocity',
    wydawca: 'Wikipedia', dostep: D2,
  },
  nasaZiemia: {
    tytul: 'Earth Fact Sheet',
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html',
    wydawca: 'NASA Goddard Space Flight Center', dostep: D2,
  },
  wikiCiag: {
    tytul: 'Thrust-to-weight ratio',
    url: 'https://en.wikipedia.org/wiki/Thrust-to-weight_ratio',
    wydawca: 'Wikipedia', dostep: D2,
  },
  wikiKriogenika: {
    tytul: 'Cryogenic fuel',
    url: 'https://en.wikipedia.org/wiki/Cryogenic_fuel',
    wydawca: 'Wikipedia', dostep: D2,
  },
  nasaKriogenika: {
    tytul: 'Stay Cool: NASA Tests Innovative Technique for Super Cold Fuel Storage',
    url: 'https://www.nasa.gov/directorates/stmd/tech-demo-missions-program/cryogenic-fluid-management-cfm/stay-cool-nasa-tests-innovative-technique-for-super-cold-fuel-storage/',
    wydawca: 'NASA', dostep: D2,
  },
  spacexPrzewodnik: {
    tytul: 'Falcon Users Guide, wydanie z 9 maja 2025',
    url: 'https://www.spacex.com/assets/media/falcon-users-guide-2025-05-09.pdf',
    wydawca: 'SpaceX', dostep: D2,
  },
  nasaOrbity: {
    tytul: 'Catalog of Earth Satellite Orbits',
    url: 'https://science.nasa.gov/earth/earth-observatory/catalog-of-earth-satellite-orbits',
    wydawca: 'NASA Earth Observatory', dostep: D2,
  },
  nasaImpuls: {
    tytul: 'Specific Impulse — Beginners Guide to Aeronautics',
    url: 'https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/specific-impulse/',
    wydawca: 'NASA Glenn Research Center', dostep: D2,
  },
  nasaOdpady: {
    tytul: 'Orbital Debris Frequently Asked Questions',
    url: 'https://orbitaldebris.jsc.nasa.gov/faq/',
    wydawca: 'NASA Orbital Debris Program Office', dostep: D2,
  },
  secTesla10k: {
    tytul: 'Tesla, Inc. — Form 10-K za rok 2025',
    url: 'https://www.sec.gov/Archives/edgar/data/1318605/000162828026003952/tsla-20251231.htm',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D2,
  },
  starlinkTech: {
    tytul: 'Starlink — Technologia satelitarna',
    url: 'https://www.starlink.com/technology',
    wydawca: 'SpaceX', dostep: D2,
  },
  nasaCots: {
    tytul: 'Commercial Orbital Transportation Services (COTS) Demonstrations, AIAA Space 2006',
    url: 'https://ntrs.nasa.gov/api/citations/20060050052/downloads/20060050052.pdf',
    wydawca: 'NASA', dostep: D2,
  },
  spacexStarship: {
    tytul: 'Starship — dane techniczne producenta',
    url: 'https://www.spacex.com/vehicles/starship/',
    wydawca: 'SpaceX', dostep: D2,
  },
  spacexDragon: {
    tytul: 'Dragon — dane techniczne producenta',
    url: 'https://www.spacex.com/vehicles/dragon/',
    wydawca: 'SpaceX', dostep: D2,
  },
  spacexStarty: {
    tytul: 'Launches — archiwum startów i opis stanowisk',
    url: 'https://www.spacex.com/launches/',
    wydawca: 'SpaceX', dostep: D2,
  },
  sfnLot1: {
    tytul: 'FAA concludes Starship mishap investigation, 63 corrective actions needed before second flight',
    url: 'https://spaceflightnow.com/2023/09/08/faa-concludes-starship-mishap-investigation-63-corrective-actions-needed-before-second-flight/',
    wydawca: 'Spaceflight Now', dostep: D2,
  },
  sfnLot9: {
    tytul: 'FAA clears SpaceX to launch its 9th Starship, while Flight 8 mishap investigation continues',
    url: 'https://spaceflightnow.com/2025/05/23/faa-clears-spacex-to-launch-its-9th-starship-super-heavy-rocket-while-flight-8-mishap-investigation-continues/',
    wydawca: 'Spaceflight Now', dostep: D2,
  },
  boringLvcc: {
    tytul: 'Las Vegas Convention Center Loop — opis systemu',
    url: 'https://www.boringcompany.com/lvcc',
    wydawca: 'The Boring Company', dostep: D2,
  },
  xaiColossus: {
    tytul: 'Colossus — opis zaplecza obliczeniowego',
    url: 'https://x.ai/colossus',
    wydawca: 'xAI', dostep: D2,
  },
  yahooFuzja: {
    tytul: 'Elon Musk confirms SpaceX merger with xAI ahead of IPO',
    url: 'https://finance.yahoo.com/news/elon-musk-confirms-spacex-merger-with-xai-ahead-of-ipo-220616795.html',
    wydawca: 'Yahoo Finance', dostep: D2,
  },
  spacenewsLot11: {
    tytul: 'Starship successfully completes 11th flight test',
    url: 'https://spacenews.com/starship-successfully-completes-11th-flight-test/',
    wydawca: 'SpaceNews', dostep: D2,
  },
  neuralinkStrona: {
    tytul: 'Neuralink — badania kliniczne i uczestnicy',
    url: 'https://neuralink.com/',
    wydawca: 'Neuralink', dostep: D2,
  },
  cbsAkcja: {
    tytul: 'Drive a Tesla? Here is what to know about the latest Autopilot recall',
    url: 'https://www.cbsnews.com/news/tesla-autopilot-recall/',
    wydawca: 'CBS News', dostep: D2,
  },
  polarisDawn: {
    tytul: 'Polaris Dawn — opis misji i załogi',
    url: 'https://polarisprogram.com/dawn/',
    wydawca: 'Polaris Program', dostep: D2,
  },
  nasaIsaacman: {
    tytul: 'NASA Welcomes 15th Administrator Jared Isaacman',
    url: 'https://www.nasa.gov/news-release/nasa-welcomes-15th-administrator-jared-isaacman/',
    wydawca: 'NASA', dostep: D2,
  },
  teslaPlan4: {
    tytul: 'Master Plan Part IV',
    url: 'https://www.tesla.com/master-plan-part-4',
    wydawca: 'Tesla', dostep: D2,
  },
  spacexTerafab: {
    tytul: 'Breaking Ground on Terafab in Texas',
    url: 'https://www.spacex.com/updates/',
    wydawca: 'SpaceX', dostep: D2,
  },
  tcTerafab: {
    tytul: 'Tesla and SpaceX will invest 16.8B to start building Terafab chip factory in Texas',
    url: 'https://techcrunch.com/2026/08/06/tesla-and-spacex-will-invest-16-8b-to-start-building-terafab-chip-factory-in-texas/',
    wydawca: 'TechCrunch', dostep: D2,
  },
  sfnFalcon1Lot1: {
    tytul: 'Fuel leak apparently doomed Falcon 1',
    url: 'https://www.spaceflightnow.com/falcon/f1/060325leak.html',
    wydawca: 'Spaceflight Now', dostep: D2,
  },
  nasaArtemis3: {
    tytul: 'Artemis III — misja NASA',
    url: 'https://www.nasa.gov/mission/artemis-iii/',
    wydawca: 'NASA', dostep: D2,
  },
  nasaProbaLadownika: {
    tytul: 'How NASA Artemis III Lander Test Will Pave Way for Moon Landings',
    url: 'https://www.nasa.gov/directorates/esdmd/artemis-campaign-development-division/human-landing-system-program/how-nasas-artemis-iii-lander-test-will-pave-way-for-moon-landings/',
    wydawca: 'NASA', dostep: D2,
  },
  nasaArtemis2: {
    tytul: 'Artemis II — misja NASA',
    url: 'https://www.nasa.gov/mission/artemis-ii/',
    wydawca: 'NASA', dostep: D2,
  },
  nasaStarliner: {
    tytul: 'NASA, Boeing Modify Commercial Crew Contract',
    url: 'https://www.nasa.gov/blogs/commercialcrew/2025/11/24/nasa-boeing-modify-commercial-crew-contract/',
    wydawca: 'NASA', dostep: D2,
  },
  sfnSes10: {
    tytul: 'SpaceX flies rocket for second time in historic test of cost-cutting technology',
    url: 'https://spaceflightnow.com/2017/03/31/spacex-flies-rocket-for-second-time-in-historic-test-of-cost-cutting-technology/',
    wydawca: 'Spaceflight Now', dostep: D2,
  },
  electrekKoniecSX: {
    tytul: 'Tesla confirms Model S and Model X production is over — only ~600 left',
    url: 'https://electrek.co/2026/04/01/tesla-model-s-x-production-over-only-inventory-left/',
    wydawca: 'Electrek', dostep: D2,
  },
  abcLot14: {
    tytul: 'SpaceX Starship splashes down after successful 1st orbital flight test',
    url: 'https://abcnews.com/US/spacex-attempt-starships-1st-orbital-flight-test/story?id=136805227',
    wydawca: 'ABC News', dostep: D3,
  },
  mcdowellStarlink: {
    tytul: 'Starlink Statistics',
    url: 'https://planet4589.org/space/con/star/stats.html',
    wydawca: 'Jonathan McDowell (Jonathan’s Space Report)', dostep: D3,
  },
  wikiFalconHeavyStrona: {
    tytul: 'Falcon Heavy',
    url: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
    wydawca: 'Wikipedia', dostep: D3,
  },
  forbesMusk: {
    tytul: 'Elon Musk — profil w rankingu miliarderów (wartość bieżąca)',
    url: 'https://www.forbes.com/profile/elon-musk/',
    wydawca: 'Forbes', dostep: D3,
  },
  debriefNeuralink: {
    tytul: 'Neuralink Reaches 21 Patients as Elon Musk Continues Push for High-Volume Brain Chip Production',
    url: 'https://thedebrief.org/neuralink-reaches-21-patients-as-elon-musk-continues-push-for-high-volume-brain-chip-production/',
    wydawca: 'The Debrief', dostep: D3,
  },
  nasaTrzyLoty: {
    tytul: 'NASA Awards SpaceX Three Crew Flights to Space Station',
    url: 'https://www.nasa.gov/missions/station/commercial-crew/nasa-awards-spacex-three-crew-flights-to-space-station/',
    wydawca: 'NASA', dostep: D3,
  },
  nasaStarliner1: {
    tytul: 'NASA’s Boeing Starliner-1',
    url: 'https://www.nasa.gov/event/nasas-boeing-starliner-1/',
    wydawca: 'NASA', dostep: D3,
  },
  secTeslaQ3: {
    tytul: 'Tesla, Inc. — Form 8-K, produkcja i dostawy w III kwartale 2026',
    url: 'https://www.sec.gov/Archives/edgar/data/0001318605/000162828026064366/exhibit991111111.htm',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D3,
  },
  tcTeslaQ2: {
    tytul: 'Tesla spending skyrockets as Cybercab, Semi, Megapack production timeline slips',
    url: 'https://techcrunch.com/2026/07/22/tesla-spending-skyrockets-as-cybercab-semi-megapack-production-timeline-slips/',
    wydawca: 'TechCrunch', dostep: D3,
  },
  tcRoadster2: {
    tytul: 'Tesla reveals SpaceX-powered Roadster that flies and falls with style',
    url: 'https://techcrunch.com/2026/10/15/tesla-reveals-spacex-powered-roadster-that-flies-and-falls-with-style/',
    wydawca: 'TechCrunch', dostep: D3,
  },
  foxRoadster2: {
    tytul: 'Tesla’s new Roadster takes flight during dramatic unveiling at SpaceX facility',
    url: 'https://www.foxbusiness.com/technology/teslas-new-roadster-makes-flying-debut-hitting-60-mph-under-second',
    wydawca: 'Fox Business', dostep: D3,
  },
  tnwRoadster2: {
    tytul: 'Tesla unveils thruster-equipped Roadster, with production set for 2028',
    url: 'https://thenextweb.com/news/tesla-roadster-reveal-thrusters-2028',
    wydawca: 'The Next Web', dostep: D3,
  },
  electrekRoadster2: {
    tytul: 'Are Tesla’s claims for its new flying Roadster real, or is it just full of cold gas?',
    url: 'https://electrek.co/2026/10/15/an-updated-technical-look-at-teslas-kick-flipping-0-60-in-1s-next-gen-roadster/',
    wydawca: 'Electrek', dostep: D3,
  },
  electrekOpoznienia: {
    tytul: 'Tesla sets Roadster event for Thursday after nearly 9 years of delays',
    url: 'https://electrek.co/2026/10/13/tesla-roadster-event-thursday-nine-years-delays/',
    wydawca: 'Electrek', dostep: D3,
  },
  pbsOpenai: {
    tytul: 'Jury throws out Musk’s lawsuit against OpenAI and Sam Altman',
    url: 'https://www.pbs.org/newshour/show/jury-throws-out-musks-lawsuit-against-openai-and-sam-altman',
    wydawca: 'PBS NewsHour', dostep: D3,
  },
  nasaSmallsat: {
    tytul: 'State-of-the-Art of Small Spacecraft Technology — Introduction',
    url: 'https://www.nasa.gov/smallsat-institute/sst-soa/introduction/',
    wydawca: 'NASA', dostep: D3,
  },
  cfrUsml: {
    tytul: '22 CFR § 121.1 — The United States Munitions List',
    url: 'https://www.law.cornell.edu/cfr/text/22/121.1',
    wydawca: 'Legal Information Institute, Cornell Law School (tekst przepisu)', dostep: D3,
  },
  teslaNacs: {
    tytul: 'Opening the North American Charging System',
    url: 'https://www.tesla.com/blog/opening-north-american-charging-system',
    wydawca: 'Tesla', dostep: D3,
  },
  dotHyperloop: {
    tytul: 'Hyperloop Commercial Feasibility Analysis: High Level Overview (DOT-VNTSC-NASA-16-01)',
    url: 'https://rosap.ntl.bts.gov/view/dot/12308/dot_12308_DS1.pdf',
    wydawca: 'U.S. Department of Transportation, Volpe Center', dostep: D3,
  },
  gunterFalcon1: {
    tytul: 'Falcon-1',
    url: 'https://space.skyrocket.de/doc_lau/falcon-1.htm',
    wydawca: "Gunter's Space Page", dostep: D3,
  },
  nasaCrs7: {
    tytul: 'NASA Independent Review Team SpaceX CRS-7 Accident Investigation Report — Public Summary',
    url: 'https://www.nasa.gov/wp-content/uploads/2018/03/public_summary_nasa_irt_spacex_crs-7_final.pdf',
    wydawca: 'NASA', dostep: D3,
  },
  nasaClipperStart: {
    tytul: 'Liftoff! NASA’s Europa Clipper Sails Toward Ocean Moon of Jupiter',
    url: 'https://www.nasa.gov/news-release/liftoff-nasas-europa-clipper-sails-toward-ocean-moon-of-jupiter/',
    wydawca: 'NASA', dostep: D3,
  },
  jplClipperMars: {
    tytul: 'NASA’s Europa Clipper Uses Mars to Go the Distance',
    url: 'https://www.jpl.nasa.gov/news/nasas-europa-clipper-uses-mars-to-go-the-distance/',
    wydawca: 'NASA Jet Propulsion Laboratory', dostep: D3,
  },
  nasaCrew1: {
    tytul: 'Crew-1 Astronauts Safely Splash Down After Space Station Mission',
    url: 'https://www.nasa.gov/news-release/crew-1-astronauts-safely-splash-down-after-space-station-mission/',
    wydawca: 'NASA', dostep: D3,
  },
  nasaCrew9Start: {
    tytul: 'Liftoff! NASA’s SpaceX Crew-9 Launches to International Space Station',
    url: 'https://www.nasa.gov/news-release/liftoff-nasas-spacex-crew-9-launches-to-international-space-station/',
    wydawca: 'NASA', dostep: D3,
  },
  nasaCrew9: {
    tytul: 'NASA’s SpaceX Crew-9',
    url: 'https://www.nasa.gov/mission/nasas-spacex-crew-9/',
    wydawca: 'NASA', dostep: D3,
  },
  cbsAx1: {
    tytul: 'SpaceX commercial crew returns to Earth with Atlantic Ocean splashdown',
    url: 'https://www.cbsnews.com/news/spacex-commercial-crew-returns-to-earth-atlantic-ocean-splashdown/',
    wydawca: 'CBS News', dostep: D3,
  },
  astronomyFram2: {
    tytul: 'Fram2 astronauts splash down after historic polar spaceflight',
    url: 'https://www.astronomy.com/space-exploration/fram2-astronauts-splash-down-after-historic-polar-spaceflight/',
    wydawca: 'Astronomy', dostep: D3,
  },
  americaspaceAmos6: {
    tytul: 'SpaceX Closes AMOS-6 Investigation, Aims to Launch 10 Satellites Next Sunday',
    url: 'https://www.americaspace.com/2017/01/02/spacex-closes-amos-6-investigation-aims-to-launch-10-satellites-next-sunday/',
    wydawca: 'AmericaSpace', dostep: D3,
  },
  sfnTransporter12: {
    tytul: 'SpaceX launches 131 spacecraft on Transporter-12 Falcon 9 rideshare mission from California',
    url: 'https://spaceflightnow.com/2025/01/14/spacex-to-launch-131-spacecraft-on-transporter-12-falcon-9-rideshare-mission-from-california/',
    wydawca: 'Spaceflight Now', dostep: D3,
  },
  gunterFalcon9: {
    tytul: 'Falcon-9',
    url: 'https://space.skyrocket.de/doc_lau/falcon-9.htm',
    wydawca: "Gunter's Space Page", dostep: D3,
  },
  cnbcStarshield: {
    tytul: 'SpaceX unveils ‘Starshield,’ a military variation of Starlink satellites (przedruk NBC 5 Dallas-Fort Worth)',
    url: 'https://www.nbcdfw.com/news/business/money-report/spacex-unveils-starshield-a-military-variation-of-starlink-satellites/3140930/',
    wydawca: 'CNBC', dostep: D3,
  },
  sfnStarshipLot2: {
    tytul: 'Super Heavy-Starship climbs high but falls short on second test flight',
    url: 'https://spaceflightnow.com/2023/11/18/super-heavy-starship-climbs-high-but-falls-short-on-second-test-flight/',
    wydawca: 'Spaceflight Now', dostep: D3,
  },
  collectspaceStarshipLot3: {
    tytul: 'SpaceX Starship coasts then crashes on mostly-successful third flight test',
    url: 'https://www.collectspace.com/news/news-031424a-spacex-starship-super-heavy-third-integrated-test-flight.html',
    wydawca: 'collectSPACE', dostep: D3,
  },
  sfnStarshipLot4: {
    tytul: 'SpaceX accomplishes first soft splashdown of Starship, Super Heavy Booster on Flight 4 mission',
    url: 'https://spaceflightnow.com/2024/06/06/live-coverage-spacex-to-launch-its-starship-rocket-on-its-fourth-test-flight/',
    wydawca: 'Spaceflight Now', dostep: D3,
  },
  utStarshipLot6: {
    tytul: 'Starship’s Booster (and Donald Trump) Make a Splash With Sixth Flight Test',
    url: 'https://www.universetoday.com/articles/starships-booster-and-donald-trump-make-a-splash-at-sixth-flight-test',
    wydawca: 'Universe Today', dostep: D3,
  },
  registerStarshipLot10: {
    tytul: 'SpaceX’s Starship keeps it together for Flight Test 10',
    url: 'https://www.theregister.com/2025/08/27/spacex_starship_flight_10/',
    wydawca: 'The Register', dostep: D3,
  },
  cnbcKoenigsmann: {
    tytul: 'SpaceX VP Hans Koenigsmann, Elon Musk’s fourth hire at the space company, plans to retire',
    url: 'https://www.cnbc.com/2021/02/02/spacex-vp-hans-koenigsmann-to-retire-elon-musks-fourth-hire.html',
    wydawca: 'CNBC', dostep: D3,
  },
  spoGerstenmaier: {
    tytul: 'Gerstenmaier Joins SpaceX As Consultant',
    url: 'https://spacepolicyonline.com/news/gerstenmaier-joins-spacex-as-consultant/',
    wydawca: 'SpacePolicyOnline.com', dostep: D3,
  },
  nwhmShotwell: {
    tytul: 'Gwynne Shotwell',
    url: 'https://www.womenshistory.org/node/484',
    wydawca: 'National Women’s History Museum', dostep: D3,
  },
  tcMueller: {
    tytul: 'SpaceX’s CTO of propulsion retired. Now he wants to go to Mars.',
    url: 'https://techcrunch.com/2022/07/26/spacexs-cto-of-propulsion-retired-now-he-wants-to-go-to-mars',
    wydawca: 'TechCrunch', dostep: D3,
  },
  nbcZalozyciele: {
    tytul: 'Tesla CEO Settles for “Founder” Title',
    url: 'https://www.nbcbayarea.com/news/local/tesla-ceo-settles-for-founder-title/2088887/',
    wydawca: 'NBC Bay Area', dostep: D3,
  },
  cnbcStraubel: {
    tytul: 'Tesla CTO and co-founder JB Straubel is moving to advisory role as brain drain continues',
    url: 'https://www.cnbc.com/2019/07/24/tesla-says-cto-jb-straubel-is-moving-to-advisory-role.html',
    wydawca: 'CNBC', dostep: D3,
  },
  artcenterHolzhausen: {
    tytul: 'Franz von Holzhausen',
    url: 'https://artcenter.edu/about/get-to-know-artcenter/people/franz-von-holzhausen.html',
    wydawca: 'ArtCenter College of Design', dostep: D3,
  },
  engadgetRoadster: {
    tytul: 'Tesla Motors says its Roadster is not a converted Lotus Elise',
    url: 'https://www.engadget.com/2008-03-04-tesla-motors-says-its-roadster-is-not-a-converted-lotus-elise.html',
    wydawca: 'Engadget', dostep: D3,
  },
  carexpertOdlewy: {
    tytul: 'Tesla scraps innovative new manufacturing strategy - report',
    url: 'https://www.carexpert.com.au/car-news/tesla-scraps-innovative-new-manufacturing-strategy-report',
    wydawca: 'CarExpert', dostep: D3,
  },
  secTesla2017Q3: {
    tytul: 'Tesla, Inc. — Form 8-K, dostawy i produkcja w III kwartale 2017',
    url: 'https://www.sec.gov/Archives/edgar/data/0001318605/000156459017019158/tsla-ex991_6.htm',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D3,
  },
  secTesla2017Q4: {
    tytul: 'Tesla, Inc. — Form 8-K, dostawy i produkcja w IV kwartale 2017',
    url: 'https://www.sec.gov/Archives/edgar/data/1318605/000156459018000054/tsla-ex991_6.htm',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D3,
  },
  electrive4680: {
    tytul: 'Tesla Battery Day: ‘tabless’ 4680 cell and a $25k car',
    url: 'https://www.electrive.com/2020/09/23/tesla-battery-day-tabless-4680-cell-and-in-house-production',
    wydawca: 'electrive', dostep: D3,
  },
  engadgetNevada: {
    tytul: 'Tesla will spend $3.6 billion to build a Semi and a battery factory in its Nevada complex',
    url: 'https://www.engadget.com/tesla-3-6-billion-expansion-nevada-gigafactory-055246273.html',
    wydawca: 'Engadget', dostep: D3,
  },
  natVision: {
    tytul: 'Tesla is removing ultrasonic sensors from all of its vehicles, fully transitioning to Tesla Vision',
    url: 'https://www.notateslaapp.com/news/1003/b0b45864-4d89-476a-8c80-d66f28525a92',
    wydawca: 'Not a Tesla App', dostep: D3,
  },
  tcDojo: {
    tytul: 'Elon Musk confirms shutdown of Tesla Dojo, ‘an evolutionary dead end’',
    url: 'https://techcrunch.com/2025/08/11/elon-musk-confirms-shutdown-of-tesla-dojo-an-evolutionary-dead-end',
    wydawca: 'TechCrunch', dostep: D3,
  },
  mcguireSolarcity: {
    tytul: 'Delaware Supreme Court Upholds Tesla’s 2016 Acquisition of SolarCity Under Entire Fairness Test',
    url: 'https://www.mcguirewoods.com/client-resources/Alerts/2023/7/delaware-supreme-court-upholds-tesla-2016-acquisition-solarcity-under-entire-fairness-test',
    wydawca: 'McGuireWoods', dostep: D3,
  },
  foxSolarRoof: {
    tytul: 'Tesla starts production of solar cells in Buffalo',
    url: 'https://www.foxbusiness.com/markets/tesla-starts-production-of-solar-cells-in-buffalo',
    wydawca: 'Fox Business', dostep: D3,
  },
  secPaypal: {
    tytul: 'PayPal, Inc. — Form S-1/A, prospekt emisyjny (luty 2002)',
    url: 'https://www.sec.gov/Archives/edgar/data/1103415/000091205702005893/a2060419zs-1a.htm',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D3,
  },
  secEbayPaypal: {
    tytul: 'PayPal, Inc. — Form 8-K, eBay kończy przejęcie PayPala (3 października 2002)',
    url: 'https://www.sec.gov/Archives/edgar/data/0001103415/000091205702037693/a2090698zex-99_1.htm',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D3,
  },
  secZip2: {
    tytul: 'AltaVista Company — Form S-1 (grudzień 1999), przejęcie Zip2 przez Compaq',
    url: 'https://www.sec.gov/Archives/edgar/data/1100862/000101287099004680/0001012870-99-004680.txt',
    wydawca: 'U.S. Securities and Exchange Commission', dostep: D3,
  },
  whartonMusk: {
    tytul: 'He Won’t Back Down',
    url: 'https://magazine.wharton.upenn.edu/issues/fall-2010/he-wont-back-down/',
    wydawca: 'Wharton Magazine (University of Pennsylvania)', dostep: D3,
  },
  inverseRosja: {
    tytul: 'When SpaceX Tried to Buy ICBMs from Russia: Vodka and a Run-Around',
    url: 'https://www.inverse.com/article/34976-spacex-ceo-elon-musk-tried-to-',
    wydawca: 'Inverse', dostep: D3,
  },
  inverseMiotacz: {
    tytul: 'Boring Company flamethrower: How to buy it and more about Elon Musk’s “not a flamethrower”',
    url: 'https://www.inverse.com/article/45802-elon-musk-s-boring-company-not-a-flamethrower-how-exactly-do-you-get-one',
    wydawca: 'Inverse', dostep: D3,
  },
} as const satisfies Record<string, Zrodlo>;
