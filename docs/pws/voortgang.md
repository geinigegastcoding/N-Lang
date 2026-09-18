---
title: Voortgang N-Lang-PWS
created: 2026-09-18
updated: 2026-09-18
type: status
status: active
tags: [pws, status, planning]
sources: [onderzoekskader.md, besluiten.md, planning.md, ../../README.md]
---

# Voortgang N-Lang-PWS

- **Momentopname:** 2026-09-18.
- **Fase:** projectinrichting en taal-/compilerontwerp; implementatie door leerlingen volgt.
- **Productrichting:** compiler in Rust met twee eigen backends: eigen bytecode voor een eigen Rust-VM, en rechtstreeks gegenereerde WebAssembly voor de browser.
- **Documentatiestatus:** startplan en structuur ingericht; aanvullende taal-/bytecode-/runtimekeuzes zijn concepten.

Historie staat in [logboek](../../logboek.md) en [werklog](werklog/README.md).

## Afgerond

- Bestaand PWS-dossier, logboek en werkafspraken behouden.
- [README](../../README.md) met concreet startpunt en mijlpalen.
- [Modulemappen](../../src/README.md), twee codegen-backends, bytecode, VM, runtime, testplaatsen en minimale browserproef ingericht.
- [Bibliotheekbeleid](../ontwikkeling/bibliotheken.md): kern zelf bouwen; alleen gerichte hulp voor algemene infrastructuur of Wasm-encoding overwegen.
- [Taalvoorbeeld en conceptgrammatica](../taal/README.md), argumentbinding en foutgevallen beschreven.
- [Architectuur](../ontwikkeling/architectuur.md), [bytecode/VM](../ontwikkeling/bytecode-en-vm.md), [directe Wasm-backend](../ontwikkeling/webassembly.md) en [testplan](../../tests/README.md) uitgewerkt.
- [Planning](planning.md) met een begroting van 80 uur per leerling.
- Officiële Rust-, taalstructuur- en Wasm-bronnen in het [bronnenregister](bronnenregister.md) vastgelegd.
- Luna-subagents ingezet voor afgebakend brononderzoek, bibliotheekdocumentatie en review; bijdragen staan apart in het logboek.

## Nog niet geïmplementeerd

Er is nog geen Cargo-manifest, Rust-code, bytecodeformaat, VM, Wasm-generator, browserharnas of geautomatiseerde compilertest. Dit is bewust: de gebruiker wil dat de leerlingen alle programmatuur zelf schrijven. De huidige documentatie bewijst geen werkende taal.

## Eerstvolgende acties voor leerlingen

1. Bespreek de aanvullende syntaxisvoorstellen, het contextschema en de kleinste gedeelde taalset.
2. Vul schoolrubric, deadline, doelgroep en definitieve hoofd-/deelvragen aan.
3. Volg [aan de slag](../ontwikkeling/aan-de-slag.md); initialiseer zelf Cargo en schrijf één token-test.
4. Bouw één toewijzing via de volledige eigen-bytecode-/VM-route.
5. Laat vroeg een kleine rechtstreeks gegenereerde Wasm-module in een browser draaien.
6. Ontwerp de gedeelde waarde-/objectafspraken en breid beide backends uit tot het voorbeeld.
7. Voer technische tests uit en maak vóór deelnemersmetingen een passend evaluatieplan.

## Open keuzes en risico's

- Officiële rubric, auteurs/teamgrootte, begeleider, deadline en AI-regels ontbreken nog.
- Hoofdvraag, doelgroep, metingen en succescriteria zijn niet bevestigd.
- Getal-/naambereik, gemengde argumentregels, bytecodeformaat en runtime-ABI zijn voorstellen.
- Twee backends en een eigen VM zijn ambitieus. De 80-uursverdeling is een begroting, geen gegarandeerde doorlooptijd.
- Extra taalconstructies en optimalisaties kunnen wachten; beide gevraagde uitvoerdoelen behoren tot de kernscope.
- De bestaande website is buiten deze opdracht gehouden.

## Laatste overdracht

De leerlingen kunnen beginnen bij de README en de eerste kleine Rust-test. De documentatie houdt technische werking, onderzoeksclaims en werkelijk bestede leerlinguren gescheiden.

De opzet staat in [PR #4](https://github.com/geinigegastcoding/N-Lang/pull/4). De documentatie- en diffcontroles zijn geslaagd; de compiler en beide backends zijn uitdrukkelijk nog leerlingwerk.
