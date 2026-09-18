---
title: Werkplanning van 80 uur per leerling
created: 2026-09-18
updated: 2026-09-18
type: research
status: draft
tags: [pws, planning, uren, samenwerking, leerdoelen]
sources: [onderzoekskader.md, ../../README.md, ../ontwikkeling/architectuur.md]
---

# Werkplanning van 80 uur per leerling

**Gerapporteerd:** de gebruiker bevestigde op 2026-09-18 een eis van 80 uur **per leerling**. Een schoolrubric, deadline en teamgrootte zijn nog niet aangeleverd. Hieronder staat een voorstel voor de verdeling; de uren zijn geen meting en komen niet vooraf als gewerkte tijd in [logboek.md](../../logboek.md).

## Begroting per leerling

| Fase | Uur per leerling | Concrete bijdrage en bewijs |
|---|---:|---|
| Onderzoek afbakenen en bronnen lezen | 6 | Hoofdvraag bespreken, bronnen beoordelen, doelgroep en methode afbakenen |
| Rust en gereedschap leren | 5 | Eigen oefeningen met types, enums, `Result`, iteratie en tests |
| Taalontwerp, grammatica en uitvoeringscontract | 7 | Voorbeelden, foutgevallen, eigen instructies en gedeelde waarden voor twee targets |
| Lexer en bronlocaties | 6 | Eigen implementatiebijdrage of inhoudelijke review met gerichte grensgevallen |
| AST en parser | 9 | Boomstructuren, parsing en Nederlandse foutmeldingen met tests |
| Semantiek en argumenten | 6 | Namen, scopes, `als`/`bij`-binding en negatieve tests |
| Bytecode en codegeneratie | 7 | Encoder/decoder, formaatvalidatie en vertaling uit de gecontroleerde boom |
| Eigen VM | 8 | Stack, callframes, objecten, instructies en uitvoeringsfouten |
| Wasm-backend, runtimekoppeling en CLI | 7 | Eigen vertaling naar Wasm, doelkeuze en minimale browserproef |
| Integratie en targetvergelijking | 5 | Zelfde bron en gedrag via eigen VM en rechtstreeks Wasm; regressies en foutgevallen |
| Evaluatie uitvoeren en analyseren | 6 | Goedgekeurd meetinstrument, echte observaties/data en begrensde analyse |
| Verslag, reflectie en demonstratie afronden | 8 | Onderbouwde tekst, eigen reflectie, links en reproduceerbare demonstratie |
| **Totaal** | **80** | **Begroting, geen garantie of gerealiseerde tijd** |

Houd korte log- en bronnotities tijdens elke fase bij; de laatste acht uur zijn voor samenhang en afronding. Verdeel evaluatie-uren over voorbereiding, uitvoering en analyse. Regel eventuele werving ruim vóór de testperiode, nadat privacy en toestemming zijn afgestemd. Als de methode meer tijd vraagt, pas dan de begroting én productscope aan.

## Verdeling in een team

Bij `n` leerlingen is de begroting `80 × n` persoonsuren. Eén gezamenlijk uur met twee actief werkende leerlingen is twee persoonsuren en één verstreken uur. Iedere leerling noteert de eigen bijdrage en eigen echte tijd; twee regels beschrijven dan twee uitvoerders, geen dubbele registratie van één persoon.

Als jullie met twee zijn, kan één leerling aanvankelijk tokens, lexer en diagnostiek oppakken en de ander AST en parser. Ontwerp gedeelde types en instructies samen. Verdeel daarna codegen/bytecode en VM, en wissel wie implementeert, reviewt en tests schrijft. Verdeel de Wasm-backend, runtimegrens, CLI, metingen en verslag op basis van werkelijk resterend werk. Dit is een voorbeeldverdeling, geen aanname over jullie teamgrootte.

Alleen toekijken of AI laten programmeren levert geen eigen programmeerbijdrage op. De AI-sessies in het logboek staan apart; tel die niet als leerlinguren. Welke menselijke AI-gerelateerde werkzaamheden mogen meetellen, moet uit de schoolregels blijken.

## Mijlpalen

1. **Ontwerp bespreekbaar:** iedereen beschrijft hetzelfde gedrag voor het voorbeeld; open taal- en bytecodekeuzes zijn herkenbaar als voorstel.
2. **Eerste keten:** één toewijzing gaat via eigen compiler en bytecode naar uitvoering in de eigen VM. Een kleine directe Wasm-backendproef controleert vroeg het tweede uitvoerdoel.
3. **Voorbeeld compleet:** functies, gemengde argumenten en context werken; de [acceptatietest](../../tests/README.md) controleert het gedrag native én in de browser.
4. **Onderzoekbaar prototype:** versie vastgezet; taken en vooraf gekozen meetcriteria liggen vast.
5. **Afgerond onderzoek:** resultaten en beperkingen zijn beschreven; de demonstratie is herhaalbaar.

Koppel echte kalenderdata aan deze mijlpalen zodra de inleverdatum bekend is. Meer taalconstructies zijn geen voorwaarde om het onderzoek af te kunnen ronden.

## Als het sneller of langzamer gaat

Bij tijd over: onderzoek concrete foutpatronen, vergelijk twee foutmeldingen met een vooraf gekozen meetmethode, voeg betekenisvolle randgevallen toe, verbeter de documentatie en laat een ander de installatie herhalen. Kies werk dat een echte vraag beantwoordt. Voeg geen kunstmatige vertraging, onnodige complexiteit of geschatte uren toe om een totaal te halen.

Bij tijdgebrek: houd de verticale kern, beide gevraagde uitvoerdoelen en het onderzoek overeind. Schrap eerst extra taalconstructies en luxe CLI-/browseropties. Een eigen compiler met twee backends plus VM is ambitieus, zeker als Rust nog nieuw is; deze verdeling is geen haalbaarheidsgarantie. Bespreek een gewijzigde scope met de begeleider en registreer de reden in [besluiten.md](besluiten.md).
