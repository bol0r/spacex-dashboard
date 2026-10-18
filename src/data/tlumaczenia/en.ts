/**
 * Nakładka angielska. Polski pozostaje wersją kanoniczną — tu tłumaczymy
 * wyłącznie tekst ciągły. Encje bez wpisu pokazują się po polsku z widocznym
 * znacznikiem; walidator raportuje, ile brakuje.
 */

import type { Nakladka } from './nakladka';

export const en: Nakladka = {
  'starship': {
    krotki: 'The tallest and most powerful rocket ever launched — designed to come back in one piece, every time.',
    tresc: [
      'Starship is two things at once: the [[super-heavy|Super Heavy]] booster and an upper stage that carries the same name as the whole system — hence the permanent terminological mess. Together they stand 121.3 metres tall, 9 metres wide, and leave the ground with 73.5 MN of thrust. For comparison: more than twice a Saturn V. The only engine involved is [[raptor|Raptor]].',
      'The hull is stainless steel. Early prototypes used grade 301, which gave way to 304L, and current vehicles use an in-house alloy designated 30X. In 2018 this looked like a step backwards — the whole industry was moving towards carbon composites — and it turned out to be one of the most consequential decisions in the programme.',
      'The programme advances through flight tests, not simulations. The first flight in April 2023 ended with the rocket breaking up after four minutes. Flight 5 in October 2024 produced the first catch of a booster by the launch tower’s arms. Flights 7, 8 and 9 were a run of upper-stage losses. Flights 10 and 11 brought controlled splashdowns accurate to within metres. Flight 12 in May 2026 was the debut of the Block 3 design.',
      'Flight 13 on 24 July 2026 was the first after [[spacex|SpaceX]] went public, and the first on which Starship released real [[starlink|Starlink]] V3 satellites. The ship survived re-entry and came to rest intact in the Indian Ocean, giving the first post-flight images of a complete heat shield. [[starship-lot-14|Flight 14]] on 28 September 2026 was the first on which the ship reached Earth orbit and released working satellites — twenty-six V3 units. The mission was cut short at the first checkpoint, after about three hours instead of nearly ten. The fifteenth flight has a provisional date no earlier than 8 November 2026; SpaceX has not announced it.',
      'The crewed [[hls-artemis|Starship HLS]] variant is meant to put astronauts on the Moon under the Artemis programme. A docking test is planned for 2027 and a landing with people aboard for 2028 — both dates have already moved several times and should be read as intent, not as a schedule.',
    ],
    etykietyFaktow: [
      'Height', 'Diameter', 'Liftoff thrust', 'Engines', 'Propellant mass',
      'Test flights flown', 'Hull material', 'Payload to LEO (Block 1)',
    ],
    wartosciFaktow: [
      null, null, null, '33 Raptors in the lower stage, 6 in the upper', 'approx. 4,600 t',
      null, 'stainless steel — 301, then 304L, now the 30X alloy', '15 t',
    ],
    ciekawostki: [
      'The choice of steel over carbon fibre was largely arithmetic. Musk put composite at around 135 dollars a kilogram, with up to 35 per cent of the material going in the bin during cutting — steel costs about 3 dollars. On top of that, composite loses its properties above roughly 150 degrees Celsius while steel is still working at 800. The most expensive rocket in the world is made of the stuff milk tanks are made of.',
    ],
    os: [
      { tytul: 'Flight 1', opis: 'The rocket breaks up four minutes after launch, but the pad survives.' },
      { tytul: 'Flight 5 — first catch', opis: 'Super Heavy returns straight into the launch tower’s arms.' },
      { tytul: 'Flight 12 — Block 3 debut', opis: 'First flight of the new design, carrying Starlink mass simulators.' },
      { tytul: 'Flight 13', opis: 'First real Starlink V3 satellites and an intact ship after splashdown.' },
      { tytul: 'Flight 14 — first orbit', opis: 'The ship reaches orbit and releases 26 working Starlink V3 satellites.' },
      { tytul: 'Flight 15 — provisional date', opis: 'A date from air-traffic planning, not a SpaceX announcement; it may slip.' },
    ],
    powody: [
      'its lower stage — without it Starship never leaves the atmosphere',
      'the only engine that powers it',
      'where it is built and from where it launches',
      'is meant to take over launching the V3 generation of satellites',
      'the first design conceived as fully reusable, not half-reusable',
      'the company’s main programme after Falcon 9',
    ],
  },

  'falcon-9': {
    krotki: 'The rocket that turned a first stage into reusable hardware and took most of the world launch market.',
    tresc: [
      'Falcon 9 is a two-stage rocket burning kerosene and liquid oxygen. Nine [[merlin|Merlin]] engines in the first stage, one vacuum-optimised engine in the second. It debuted in June 2010 as v1.0 and has since passed through v1.1, Full Thrust and finally Block 5 from May 2018 — the variant it still flies in today.',
      'All of its value comes from one thing: the first stage comes back. After separation it performs a boostback burn, re-enters engines-first and touches down vertically — on a concrete pad or on a drone ship sitting out at sea. The [[pierwsze-ladowanie|first landing on land]] succeeded on 21 December 2015 after delivering Orbcomm satellites; the [[pierwsze-ladowanie-na-barce|first at sea]] on 8 April 2016 during the CRS-8 resupply mission. Recovered stages today come down mostly on [[barki-dronowe|drone ships]].',
      'The scale is now hard to take in. The Falcon 9 family has flown 699 times with 696 full successes, and first stages have come back 657 times out of 670 attempts — better than 98 per cent. For the Block 5 variant alone the figure is 99.06 per cent. The record-holding booster has flown 37 times.',
      'Falcon 9 is also the rocket that launches [[starlink|Starlink]] and carries people in the [[crew-dragon|Crew Dragon]] capsule. In 2026 roughly three quarters of its launches serve its own constellation — [[spacex|SpaceX]] is now its own biggest customer. It is this rocket, not [[starship|Starship]], that keeps the company running.',
    ],
    etykietyFaktow: [
      'Launches (family)', 'Full successes', 'Booster landings', 'Block 5 success rate',
      'Most flights by one booster', 'Engines', 'Debut',
    ],
    wartosciFaktow: [
      null, null, '657 of 670 attempts (98.06%)', null,
      '37 (unit B1067)', '9 × Merlin 1D in stage I, 1 × Merlin 1D Vacuum in stage II',
      'June 2010 (v1.0), Block 5 from May 2018',
    ],
    ciekawostki: [
      'The flight-count record is not held by any booster but by a payload fairing half numbered SN155 — it has flown forty times. The part the industry treated for decades as packaging to be discarded once opened turned out to be the most hard-worked component in the entire system.',
      'The hundredth Falcon 9 launch of 2026 alone took place on 25 August. In under eight months the rocket reached a cadence that, for most of the space age, entire nations failed to manage in a year.',
    ],
    os: [
      { tytul: 'First flight', opis: 'The v1.0 version launches from Cape Canaveral.' },
      { tytul: 'First landing on land', opis: 'After delivering Orbcomm satellites the first stage sets down vertically on Landing Zone 1.' },
      { tytul: 'First landing at sea', opis: 'The CRS-8 booster lands on a floating platform 300 km off the Florida coast.' },
      { tytul: 'Block 5', opis: 'The final version of the design, built for rapid reflight.' },
    ],
    powody: [
      'powered by nine of them in the first stage',
      'the first orbital rocket to make it routine',
      'launches the constellation — today that is most of its flights',
      'launches the capsule carrying astronauts',
      'its triple version, built from three such cores',
    ],
  },

  'raptor': {
    krotki: 'A methane and liquid oxygen engine — the first in history to lift a rocket on a full-flow staged combustion cycle.',
    tresc: [
      'Raptor is the only engine that powers [[starship|Starship]]. Thirty-three sit in the [[super-heavy|Super Heavy]] lower stage and six more in the upper — three built for sea level and three with large vacuum nozzles. It is a break with everything [[spacex|SpaceX]] did before: [[merlin|Merlin]] burns kerosene, Raptor burns methane.',
      'At the heart of the design is [[pelnoprzeplywowe-spalanie-stopniowe|full-flow staged combustion]]. In short: all of the fuel and all of the oxidiser pass through turbines before reaching the combustion chamber, and nothing is dumped overboard unburnt. The result is higher pressures, higher efficiency and — in theory at least — less engine wear, which allows repeated firings without a teardown.',
      'Each generation went the same way: more thrust, less mass. Raptor 1 weighed 2,080 kg and produced 185 tonnes of force at 250 bar. Raptor 2 came down to 1,630 kg and raised thrust to 230 tf at 300 bar. Raptor 3 weighs 1,525 kg, runs at 330 bar and has reached 280 tf in testing. The third generation also shed most of its external plumbing and shielding — the cooling channels are built into the body itself.',
      'The choice of methane is not an aesthetic one. Methane can be produced on Mars from atmospheric carbon dioxide and subsurface water via the Sabatier reaction — the only scenario in which a rocket returns from Mars without hauling its return propellant from Earth. Methane also burns more cleanly than kerosene and leaves no carbon deposits in the engine, which works directly in favour of [[reuzywalnosc|reusability]].',
      'The first development engine fired at McGregor, Texas in September 2016. Raptor did not fly until seven years later, on Starship’s first test flight. Production now sits in Texas next to [[starbase|Starbase]] and is the single bottleneck that has to keep pace with rocket assembly.',
    ],
    etykietyFaktow: [
      'Sea-level thrust (Raptor 3)', 'Vacuum thrust (Raptor 3)', 'Specific impulse',
      'Chamber pressure', 'Engine mass', 'Propellant', 'Cycle', 'Unit cost',
    ],
    wartosciFaktow: [
      '250 tf nominal, 280 tf in test', null, null, '330 bar',
      '1,525 kg (Raptor 3) against 2,080 kg (Raptor 1)', 'liquid methane and liquid oxygen',
      'full-flow staged combustion', 'approaching USD 1m in 2019, target below USD 250k',
    ],
    ciekawostki: [
      'Before Raptor, only two full-flow engines in the world had even reached a test stand: the Soviet RD-270 of the 1960s and the American IPD demonstrator of the mid-2000s. Neither ever flew. Raptor is the first one to lift anything off the ground.',
    ],
    os: [
      { tytul: 'First firing', opis: 'A development engine runs on the stand at McGregor, Texas.' },
      { tytul: 'First flight', opis: 'Thirty-three Raptor 2 engines lift Starship on its first test flight.' },
    ],
    powody: [
      'powers it, thirty-three units at a time',
      'powers the upper stage, six units at a time',
      'works on this cycle as the first engine in flight history',
      'its predecessor at SpaceX, on different propellant and a simpler cycle',
      'clean methane combustion is a precondition for rapid reflight',
    ],
  },

  'reuzywalnosc': {
    nazwa: 'Reusability',
    krotki: 'The principle that a rocket comes back and flies again — the difference between taking a flight and burning the aeroplane after one.',
    tresc: [
      'For the first fifty years of spaceflight a rocket was a single-use object. Every launch meant destroying hardware worth tens of millions of dollars. Reusability inverts that assumption: the booster returns to Earth in a state that allows it to be refuelled and sent up again.',
      'Two levels are usually distinguished. Refurbishment means the hardware comes back but goes through an expensive overhaul before the next launch — this is how the Space Shuttle worked, where preparing a vehicle for flight could cost more than building a new expendable rocket. Rapid reflight means refuel and go, with essentially no teardown. [[falcon-9|Falcon 9]] in its Block 5 form came close to the second model.',
      'The numbers show this stopped being an experiment. First stages have come back 657 times out of 670 attempts, and for the Block 5 variant alone the success rate is 99.06 per cent. The record-holding unit has flown 37 times, and one payload fairing half has flown forty. The cost per kilogram to orbit fell far enough that a constellation of more than ten thousand satellites — [[starlink|Starlink]] — became feasible at all.',
      'The next step goes further: [[starship|Starship]] is meant to return whole, both stages, with [[super-heavy|Super Heavy]] landing directly in the tower’s arms to save the mass of landing legs. The precondition is an engine that tolerates repeated firings — hence the methane [[raptor|Raptor]], which leaves no carbon deposit in the chamber.',
    ],
    etykietyFaktow: [
      'Booster landings', 'Block 5 success rate', 'Most flights by one booster',
      'Boosters flown more than once', 'First successful landing',
    ],
    wartosciFaktow: [
      '657 of 670 attempts', null, null, null, '21 December 2015, Landing Zone 1',
    ],
    ciekawostki: [
      'The most hard-worked part of the system is not an engine or a booster but payload fairing half SN155, with forty flights. The component regarded for half a century as packaging to be thrown away turned out to be more durable than anything else on the rocket.',
    ],
    os: [
      { tytul: 'First return', opis: 'The first stage of an orbital rocket sets down vertically on land for the first time.' },
      { tytul: 'First landing on water', opis: 'The CRS-8 booster lands on a floating platform in the Atlantic.' },
      { tytul: 'Catch by the tower', opis: 'Super Heavy returns into the launch tower’s arms — recovery without landing gear.' },
    ],
    powody: [
      'the first rocket to turn the idea into routine',
      'the furthest the idea has been pushed — a return straight into the tower’s arms',
      'the ability to relight in flight is its technical precondition',
      'a constellation this size was uneconomic without a cheaper kilogram to orbit',
    ],
  },

  'pelnoprzeplywowe-spalanie-stopniowe': {
    nazwa: 'Full-flow staged combustion',
    krotki: 'The hardest rocket engine architecture there is: all the fuel and all the oxidiser pass through turbines, and nothing escapes unburnt.',
    tresc: [
      'A rocket engine has to drive the pumps that force propellant into the chamber somehow. In the simplest arrangement — the gas generator used by [[merlin|Merlin]] — a small portion of fuel burns separately, spins a turbine and escapes overboard. That is simple and cheap, but the portion is lost for good.',
      'Staged combustion routes the turbine exhaust back into the main chamber, so nothing is wasted. Classic designs have one preburner — oxidiser-rich as in the RD-180, or fuel-rich as in the Space Shuttle Main Engine. The full-flow version has both: one for the fuel pump and one for the oxidiser pump. The entire flow of both propellants then passes through the turbines.',
      'The benefits are measurable. The turbines run cooler and at lower pressure, because the same torque is spread across a far larger mass flow — and a cooler turbine means a longer engine life. Both propellants enter the chamber already gaseous, so they react faster, the chamber can be smaller and the pressure higher. The interpropellant seal, one of the classic failure points, disappears entirely.',
      'The price is complexity. In sixty years only two such designs even reached a test stand: the Soviet RD-270 of the 1960s and the American IPD demonstrator of the mid-2000s. Neither flew. The first full-flow engine to lift a rocket is [[raptor|Raptor]] in [[starship|Starship]].',
    ],
    etykietyFaktow: [
      'Preburners', 'Flow through the turbines', 'Engines that have flown',
      'Designs tested earlier', 'Claimed Raptor life',
    ],
    wartosciFaktow: [
      'two — one fuel-rich, one oxidiser-rich', 'all of the fuel and all of the oxidiser',
      'Raptor only', 'RD-270 (USSR, 1960s), IPD (USA, 2000s)', 'up to 1,000 flights',
    ],
    ciekawostki: [
      'The idea is more than sixty years old and for most of that time it was treated as a dead end — too hard to be worth it. The Soviet RD-270 was built in the 1960s and abandoned; the American demonstrator of the 2000s was only a powerhead, with no chamber. The solution waited half a century for a flight.',
    ],
    os: [
      { tytul: 'RD-270', opis: 'The Soviet full-flow engine passes stand testing and is then abandoned.' },
      { tytul: 'First flight', opis: 'Raptor becomes the first engine of this type to lift a rocket.' },
    ],
    powody: [
      'the only engine of this type ever to fly',
      'the opposite approach — a simple gas generator dumping exhaust overboard',
      'the rocket in which the cycle entered service',
    ],
  },

  'leo': {
    nazwa: 'Low Earth orbit',
    krotki: 'An orbit with a period under 128 minutes, reaching about 2,000 km — where nearly all human presence in space sits.',
    tresc: [
      'The formal definition is drier than expected: an orbit with a period of 128 minutes or less, meaning at least 11.25 revolutions a day, at an eccentricity below 0.25. In practice that means a ceiling around 2,000 kilometres, although most objects circle below 800.',
      'An object at that altitude moves at roughly 7.8 km/s, close to 28,000 km/h. At 200 km it is 7.79 km/s; at 1,500 km it drops to 7.12 km/s — the higher you go, the slower you travel. The International Space Station orbits at 400–420 km and loses about two kilometres of altitude a month, so it has to be boosted regularly.',
      'LEO is the default choice for two reasons. First, getting there takes the least energy, so a rocket delivers the most mass. Second, being close means low signal latency and high throughput — which is exactly why [[starlink|Starlink]] operates there rather than in geostationary orbit, from which a signal returns an order of magnitude more slowly.',
      'That same proximity has a flip side. Below 300 kilometres the drag of the residual atmosphere pulls a satellite down fast enough that the orbit decays within months. On one hand this is a natural cleaning mechanism; on the other it is the reason [[crew-dragon|Crew Dragon]] and space stations need a permanent propellant reserve for corrections.',
    ],
    etykietyFaktow: [
      'Orbital period', 'Ceiling', 'Orbital velocity', 'ISS altitude', 'ISS orbital decay',
    ],
    wartosciFaktow: [
      '128 minutes or less', 'approx. 2,000 km', 'approx. 7.8 km/s (28,000 km/h)',
      '400–420 km', 'approx. 2 km per month',
    ],
    ciekawostki: [
      'Below three hundred kilometres the residual atmosphere is already dense enough that a satellite falls on its own within months. The boundary between “space” and “atmosphere” is not a line but a gradient of density — and it is that, not any agreed altitude, that decides how long anything survives up there.',
    ],
    os: [
      { tytul: 'LEO starts filling up', opis: 'The first operational batch of Starlink opens the era of constellations counted in thousands.' },
    ],
    powody: [
      'the entire constellation works at this altitude',
      'carries people in this region only',
      'most of its launches end up here',
    ],
  },
};
