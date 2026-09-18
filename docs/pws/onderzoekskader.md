---
title: Onderzoekskader N-Lang
created: 2026-09-18
updated: 2026-09-18
type: research
status: needs-review
tags: [pws, onderzoek, scope, methode]
sources: [../../README.md, ../../PRODUCT.md]
---

# Onderzoekskader N-Lang

- **Status:** concept — essentiële gegevens moeten nog door leerling en/of begeleider worden bevestigd
- **Laatst bijgewerkt:** 2026-09-18
- **Eigenaar:** [NOG INVULLEN]

Dit document is de stabiele onderzoeksbasis. Verander hoofdvraag, deelvragen, doelgroep of methode niet stilzwijgend. Registreer een inhoudelijke wijziging ook in [`besluiten.md`](besluiten.md) en beschrijf de gevolgen voor bestaand werk.

## Officiële randvoorwaarden

| Onderdeel | Vastgelegde eis |
|---|---|
| School en opleiding | [NOG INVULLEN] |
| Profiel en vak(ken) | [NOG INVULLEN] |
| Leerling(en) | [NOG INVULLEN] |
| Begeleider(s) | [NOG INVULLEN] |
| Inleverdatum en tussenmijlpalen | [NOG INVULLEN] |
| Beoordelingsrubric | [NOG INVULLEN of link naar bestand in repository] |
| Verplichte citatiestijl | [NOG INVULLEN; voorlopig consequent APA 7] |
| Omvang/opmaakeisen | [NOG INVULLEN] |
| Tijdseis | `gerapporteerd`, gebruiker 2026-09-18: 80 uur per leerling; officiële rubric nog niet aangeleverd. Zie [planning](planning.md). |
| Regels voor AI-gebruik | [NOG INVULLEN] |
| Privacy-/toestemmingseisen | [NOG INVULLEN] |

## Aanleiding en probleem

De repository beschrijft N-Lang als een manier om programmeren beschikbaar te maken voor mensen die geen Engels spreken. Het project richt zich vooralsnog op Nederlandstalige beginners en combineert taalontwerp, implementatie en evaluatie.

**Nog te onderbouwen:** hoe groot de Engelse taalbarrière voor de gekozen doelgroep is, welke onderdelen van leren programmeren hierdoor worden beïnvloed en waarom een Nederlandstalige programmeertaal een passende interventie is.

## Doelstelling

**Onderzoeksdoel:** [NOG INVULLEN]

**Productdoel:** ontwerp en implementeer zelf een afgebakende Nederlandstalige programmeertaal met compiler, eigen bytecode en eigen VM in Rust. De compiler krijgt twee uitvoerdoelen: eigen bytecode voor de eigen VM en rechtstreeks gegenereerde WebAssembly voor de browser. De minimale productrichting is door de gebruiker bevestigd; aanvullende taalregels en onderzoekssuccescriteria moeten nog worden besproken.

**Gerapporteerde werkeis, 2026-09-18:** alle programmatuur wordt door de leerlingen geschreven. Deze AI-sessie ondersteunt documentatie, structuur, brononderzoek en planning. Bibliotheken mogen algemene infrastructuur ondersteunen maar nemen lexer, parser, semantiek, bytecode of VM niet over. De schoolregels voor AI-verantwoording zijn nog onbekend.

## Hoofdvraag

`[NOG INVULLEN EN LATEN BEVESTIGEN]`

Controleer vóór bevestiging dat de vraag een afgebakende doelgroep, context, interventie/producteigenschap en meetbaar resultaat bevat.

## Deelvragen

1. `[NOG INVULLEN: theoretische deelvraag over taalbarrière/toegankelijkheid]`
2. `[NOG INVULLEN: ontwerpdeelvraag over eisen aan een Nederlandstalige programmeertaal]`
3. `[NOG INVULLEN: technische deelvraag over ontwerp en implementatie]`
4. `[NOG INVULLEN: evaluatiedeelvraag over effect of bruikbaarheid voor de doelgroep]`

Voeg alleen deelvragen toe die noodzakelijk zijn om de hoofdvraag te beantwoorden.

## Kernbegrippen en operationalisering

| Begrip | Werkdefinitie | Meetbare indicator(en) | Bron/onderbouwing | Status |
|---|---|---|---|---|
| Toegankelijkheid | [NOG INVULLEN] | Mogelijk: taakvoltooiing, fouten, tijd, hulpvragen, begrip en ervaren duidelijkheid | [NOG INVULLEN] | Open |
| Nederlandstalige beginner | [NOG INVULLEN] | Selectiecriteria deelnemers | [NOG INVULLEN] | Open |
| Programmeertaal leren | [NOG INVULLEN] | Afgebakende concepten/taken | [NOG INVULLEN] | Open |
| N-Lang-prototype | [NOG INVULLEN] | Ondersteunde constructies en kwaliteitscriteria | Code/tests | Open |

## Afbakening

### Voorlopig binnen scope

- een afgebakend Nederlandstalig taalprototype;
- eigen lexer, parser, AST, semantiek, twee codegeneratoren en VM in Rust;
- een native CLI met doelkeuze en rechtstreeks gegenereerde Wasm-programma's, met een kleine browserproef;
- documentatie van syntaxis, semantiek, bytecodeformaat en VM-uitvoering;
- reproduceerbare technische tests;
- een onderbouwde evaluatie met de gekozen doelgroep of een andere goedgekeurde methode;
- analyse van de relatie tussen Nederlandse taalkeuzes en toegankelijkheid.

### Nog te besluiten

- exacte leeftijd, voorkennis en omvang van de doelgroep;
- welke taalconstructies het prototype minimaal ondersteunt;
- precieze eigen bytecode-instructies, bestandsindeling, waarden en context-API;
- Wasm-instructieset, encodingroute en gedeelde runtime-/ABI-afspraken;
- onderzoeksopzet, steekproefgrootte en vergelijking/controlegroep;
- succescriteria en planning.

### Buiten scope

De bestaande website, JavaScript-transpilatie, een derde backend voor native machinecode, een brede standaardbibliotheek en een package manager horen niet bij de eerste scope. De gebruiker heeft eigen bytecode met een zelfgebouwde VM én directe N-Lang-naar-WebAssembly-compilatie gekozen. Rust zelf naar Wasm bouwen vervangt die tweede backend niet. Verdere productuitbreidingen moeten bijdragen aan de nog te bevestigen onderzoeksvraag.

## Methode per deelvraag

| Deelvraag | Methode | Benodigd bewijs/data | Analyse | Risico voor validiteit | Status |
|---|---|---|---|---|---|
| 1 | [NOG INVULLEN] | [NOG INVULLEN] | [NOG INVULLEN] | [NOG INVULLEN] | Open |
| 2 | [NOG INVULLEN] | [NOG INVULLEN] | [NOG INVULLEN] | [NOG INVULLEN] | Open |
| 3 | [NOG INVULLEN] | Broncode, architectuurkeuzes en tests | [NOG INVULLEN] | Product werkt mogelijk anders dan gedocumenteerd | Open |
| 4 | [NOG INVULLEN] | [NOG INVULLEN] | [NOG INVULLEN] | Kleine/zelfgeselecteerde steekproef en leereffect | Open |

## Ethische en privacyvoorwaarden

- Verzamel alleen gegevens die noodzakelijk zijn voor de onderzoeksvraag.
- Vraag passende toestemming; regel bij minderjarigen zo nodig toestemming van ouder/verzorger volgens schoolbeleid.
- Leg uit wat deelname inhoudt, dat deelname vrijwillig is en hoe iemand kan stoppen.
- Anonimiseer onderzoeksdata en publiceer geen herleidbare persoonsgegevens in Git.
- Bewaar toestemmingsformulieren of contactgegevens niet in de openbare repository.
- Gebruik deelnemersdata niet in AI-tools zonder expliciete, passende toestemming en schoolbeleid.

## Voorlopige succescriteria

`[NOG INVULLEN vóór dataverzameling]`

Leg vooraf vast wanneer het technische prototype voldoende werkt en welke onderzoeksuitkomst als verbetering, geen verschil of verslechtering wordt geïnterpreteerd. Pas criteria niet achteraf aan om een gunstiger resultaat te krijgen.

**Voorstel voor technische acceptatie:** het [bewegingsvoorbeeld](../../examples/bewegen.nlang) wordt door de echte Rust-compiler naar eigen bytecode én Wasm vertaald. De eerste uitvoer bereikt via de eigen VM dezelfde afgesproken eindwaarden als het rechtstreeks gegenereerde Wasm-programma in de browser. De [testmatrix](../../tests/README.md) beschrijft ook foutgevallen. Dit criterium bewijst technische werking, geen toegankelijkheidswinst.

**Voorstel voor evaluatie:** kies kleine programmeertaken, leg vooraf vast hoe voltooiing, fouten, hulp en tijd worden gemeten en noteer begrip/feedback apart. Bepaal pas na bevestiging van doelgroep en werving of een vergelijking haalbaar is. Bij een vergelijking moeten taakvolgorde en eerdere programmeerervaring worden meegewogen. Er zijn geen deelnemers, metingen of resultaten ingevuld.

## Koppeling product en onderzoek

Voor iedere belangrijke N-Lang-functie moet duidelijk zijn:

1. welk probleem of welke requirement zij adresseert;
2. op welke bron, ontwerpkeuze of waarneming zij is gebaseerd;
3. hoe de implementatie wordt getest;
4. hoe zij bijdraagt aan een deelvraag;
5. welke beperkingen gelden.

## Open vragen voor leerling/begeleider

- Wat is de definitieve hoofdvraag?
- Welke officiële rubric en vormeisen gelden?
- Wie is precies de doelgroep en hoe worden deelnemers geworven?
- Welke meetmethode is haalbaar en toegestaan?
- Welke minimale taalconstructies zijn noodzakelijk voor het onderzoek?
- Hoe moet AI-gebruik in het uiteindelijke PWS worden verantwoord?
