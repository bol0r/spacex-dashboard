import type { Encja } from '../types';
import { Z } from '../zrodla';

export const muskIReszta: Encja[] = [
  {
    id: 'spacex',
    typ: 'firma',
    nazwa: 'SpaceX',
    aka: ['Space Exploration Technologies', 'SPCX'],
    krotki: 'Firma założona w 2002 roku, żeby obniżyć koszt lotu w kosmos; w 2026 weszła na giełdę przy największej wycenie w historii ofert publicznych.',
    tresc: [
      'SpaceX powstało 14 marca 2002 roku. Bezpośrednim impulsem była podróż [[elon-musk|Muska]] do Rosji po używane rakiety Dniepr na potrzeby projektu Mars Oasis — pomysłu wysłania na Marsa miniaturowej szklarni. Rozmowy nie wyszły; w drodze powrotnej Musk stwierdził, że taniej będzie zbudować rakietę samemu.', 'Pierwsze trzy starty Falcona 1 w latach 2006–2008 zakończyły się porażką i niemal wykończyły firmę. Ratunek przyszedł z NASA: w 2006 roku kontrakty demonstracyjne COTS na 396 milionów dolarów, a w grudniu 2008, po pierwszym udanym starcie, kontrakt zaopatrzeniowy CRS wart 1,6 miliarda. Przez pierwszą dekadę Musk włożył w firmę około stu milionów własnych pieniędzy.',
      'Dziś firma stoi na dwóch filarach. [[falcon-9|Falcon 9]] jest produktem, który zarabia i lata prawie co drugi dzień. [[starlink|Starlink]] jest usługą, która przynosi większość przychodów. [[starship|Starship]] jest zakładem o przyszłość, finansowanym z obu poprzednich. Operacjami kieruje [[gwynne-shotwell|Gwynne Shotwell]], a siedziba spółki od 2024 roku mieści się w [[starbase|Starbase]] w Teksasie.', 'Dwunastego czerwca 2026 roku spółka zadebiutowała na giełdzie pod symbolem SPCX. Zgłoszenie złożono 20 maja, cenę ustalono 11 czerwca na 135 dolarów za akcję. Oferta dała wycenę 1,77 biliona dolarów i przyniosła 75 miliardów — to najwyżej wyceniony i największy pod względem pozyskanej kwoty debiut giełdowy w historii. Zatrudnienie sięga 22 tysięcy osób.',
    ],
    fakty: [
      { etykieta: 'Data założenia', wartosc: '14 marca 2002', pewnosc: 'potwierdzone' },
      { etykieta: 'Siedziba', wartosc: 'Starbase, Teksas (od 2024, wcześniej Hawthorne w Kalifornii)', pewnosc: 'potwierdzone' },
      { etykieta: 'Zatrudnienie', wartosc: '22 000', stanNa: '2026', pewnosc: 'potwierdzone' },
      { etykieta: 'Debiut giełdowy', wartosc: '12 czerwca 2026, symbol SPCX', pewnosc: 'potwierdzone' },
      { etykieta: 'Wycena w ofercie', wartosc: '1,77 bln USD', stanNa: '2026-06', pewnosc: 'potwierdzone' },
      { etykieta: 'Kwota pozyskana', wartosc: '75 mld USD', stanNa: '2026-06', pewnosc: 'potwierdzone' },
      { etykieta: 'Pierwsze kontrakty NASA', wartosc: 'COTS 396 mln USD (2006), CRS 1,6 mld USD (2008)', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Nazwy w tej firmie są w całości hołdami dla literatury. Rakiety Falcon wzięły się od Sokoła Millennium ze „Star Wars", a barki dronowe, na których lądują ich człony, noszą imiona statków z cyklu Kultura Iaina M. Banksa: „Just Read the Instructions", „Of Course I Still Love You" i „A Shortfall of Gravitas". Musk ogłosił je jako pośmiertny ukłon w stronę pisarza.',
        zrodlo: Z.spaceBarki,
      },
    ],
    os: [
      { data: '2002-03-14', tytul: 'Założenie firmy', opis: 'Musk zakłada SpaceX po nieudanej próbie kupienia rakiet w Rosji.', waga: 3 },
      { data: '2008-12', tytul: 'Kontrakt CRS', opis: 'NASA przyznaje 1,6 mld USD na zaopatrywanie stacji — firma wychodzi z zapaści.', waga: 3 },
      { data: '2026-06-12', tytul: 'Debiut giełdowy', opis: 'SPCX wchodzi na giełdę przy wycenie 1,77 bln USD.', waga: 3 },
    ],
    powiazane: [
      { id: 'elon-musk', powod: 'założył ją i pozostaje dyrektorem generalnym oraz głównym inżynierem' },
      { id: 'gwynne-shotwell', powod: 'prowadzi jej bieżące operacje jako prezeska' },
      { id: 'falcon-9', powod: 'jej podstawowy produkt i główne źródło lotów' },
      { id: 'starship', powod: 'jej największy zakład o przyszłość' },
      { id: 'starlink', powod: 'jej główne źródło przychodów' },
      { id: 'starbase', powod: 'jej siedziba i kosmodrom od 2024 roku' },
      { id: 'itar', powod: 'przepisy, które rozstrzygają, kto może pracować przy jej rakietach' },
    ],
    status: 'aktywne',
    zrodla: [Z.wikiSpaceX, Z.wikiIpo, Z.wikiBarki],
    zaktualizowano: '2026-09-12',
  },

  {
    id: 'elon-musk',
    typ: 'osoba',
    nazwa: 'Elon Musk',
    aka: ['Musk'],
    krotki: 'Przedsiębiorca urodzony w Pretorii, który zbudował firmę rakietową i firmę samochodową jednocześnie — obie na krawędzi bankructwa.',
    tresc: [
      'Urodził się 28 czerwca 1971 roku w Pretorii w RPA. Studiował najpierw na Queen’s University w Kanadzie w latach 1990–1992, potem na Uniwersytecie Pensylwanii w latach 1992–1995; dyplomy z fizyki i ekonomii odebrał w 1997. W 1995 dostał się na studia doktoranckie z inżynierii materiałowej na Stanfordzie.', 'Pierwszą firmę, Zip2, założył w 1995 roku z bratem Kimbalem i Gregiem Kourim. Compaq kupił ją w lutym 1999 za 307 milionów dolarów; Musk dostał 22 miliony za swoje 7 procent. Kolejną była X.com z 1999 roku, która po fuzji z Confinity stała się PayPalem. eBay kupił PayPala w 2002 za 1,5 miliarda; Musk, największy udziałowiec z 11,72 procent, dostał 175,8 miliona.',
      'Te pieniądze poszły w dwie firmy naraz. [[spacex|SpaceX]] założył w marcu 2002 jako dyrektor generalny i główny inżynier, wkładając około stu milionów własnych środków. Do [[tesla|Tesli]] wszedł w lutym 2004 jako inwestor prowadzący rundę A, obejmując funkcję przewodniczącego rady; [[spor-o-zalozycieli|tytuł współzałożyciela]] przyznała mu dopiero ugoda z 2009 roku. Dyrektorem generalnym został w październiku 2008. Jesień 2008 była momentem, w którym obie firmy stały jednocześnie na granicy upadłości — [[falcon-1-lot-4|czwarty lot Falcona 1]] uratował jedną, a kontrakt z NASA drugą.',
      'Kierowanie dwiema firmami naraz miało swoją cenę: przez [[pieklo-produkcyjne|rozruch produkcji Modelu 3]] sypiał w fabryce, a [[funding-secured|wpis z sierpnia 2018]] o zabezpieczonym finansowaniu wykupu Tesli z giełdy skończył się karą i utratą fotela przewodniczącego rady. W czerwcu 2026, po debiucie giełdowym SpaceX, na krótko został pierwszym bilionerem w historii. We wrześniu 2026 Forbes szacował jego majątek na około 908 miliardów dolarów. Ma czternaścioro dzieci.',
    ],
    fakty: [
      { etykieta: 'Data i miejsce urodzenia', wartosc: '28 czerwca 1971, Pretoria', pewnosc: 'potwierdzone' },
      { etykieta: 'Sprzedaż Zip2', wartosc: '307 mln USD (Compaq, luty 1999); udział Muska 22 mln', pewnosc: 'potwierdzone' },
      { etykieta: 'Sprzedaż PayPala', wartosc: '1,5 mld USD (eBay, 2002); udział Muska 175,8 mln', pewnosc: 'potwierdzone' },
      { etykieta: 'Wejście do Tesli', wartosc: 'luty 2004, runda A', stanNa: '2004', pewnosc: 'sporne' },
      { etykieta: 'Majątek', wartosc: 'ok. 908 mld USD (szacunek Forbesa)', stanNa: '2026-09', pewnosc: 'szacunkowe' },
      { etykieta: 'Obecne role', wartosc: 'dyrektor generalny SpaceX i Tesli, założyciel xAI', stanNa: '2026', pewnosc: 'potwierdzone' },
    ],
    ciekawostki: [
      {
        tekst: 'Najczęściej powtarzana anegdota o Musku mówi, że rzucił Stanford po dwóch dniach. Wersje się różnią: Wikipedia podaje, że został przyjęty na studia doktoranckie z inżynierii materiałowej w 1995 roku, ale nigdy się nie zapisał. Różnica jest drobna i mówi sporo o tym, jak działa legenda założycielska — „rzucił po dwóch dniach" brzmi lepiej niż „nie zaczął".',
        zrodlo: Z.wikiMusk,
      },
    ],
    os: [
      { data: '1999-02', tytul: 'Sprzedaż Zip2', opis: 'Compaq płaci 307 mln USD; Musk dostaje pierwsze poważne pieniądze.', waga: 2 },
      { data: '2002-03-14', tytul: 'Założenie SpaceX', opis: 'Po nieudanym zakupie rakiet w Rosji postanawia zbudować własne.', waga: 3 },
      { data: '2008-10', tytul: 'Obejmuje stery Tesli', opis: 'Zostaje dyrektorem generalnym w miesiącu, w którym obie jego firmy są bliskie bankructwa.', waga: 3 },
      { data: '2026-06', tytul: 'Pierwszy bilioner', opis: 'Po debiucie giełdowym SpaceX jego majątek na krótko przekracza bilion dolarów.', waga: 3 },
    ],
    powiazane: [
      { id: 'spacex', powod: 'założył ją i kieruje nią jako dyrektor generalny i główny inżynier' },
      { id: 'tesla', powod: 'sfinansował ją w 2004 roku i prowadzi od 2008' },
      { id: 'falcon-heavy', powod: 'oddał własny samochód jako ładunek jej pierwszego lotu' },
      { id: 'starbase', powod: 'wybrał tę lokalizację pod kosmodrom' },
    ],
    zrodla: [Z.wikiMusk, Z.wikiSpaceX, Z.wikiTesla],
    zaktualizowano: '2026-09-12',
  },
];
