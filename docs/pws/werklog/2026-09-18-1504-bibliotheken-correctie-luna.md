---
title: Werksessie — correctie bibliothekenkeuze naar bytecode en WASM
created: 2026-09-18
updated: 2026-09-18
type: session
status: complete
tags: [pws, worklog, rust, bytecode, wasm, bibliotheken]
sources:
  - ../../../AGENTS.md
  - ../00-authoriteit.md
  - ../01-navigatie.md
  - ../README.md
  - ../onderzoekskader.md
  - ../voortgang.md
  - ../../ontwikkeling/bibliotheken.md
  - ../bronnenregister.md
---

# Werksessie: correctie bibliothekenkeuze naar bytecode en WASM

- **Datum:** 2026-09-18
- **Uitvoerder:** Codex (`/root/bibliotheken`)
- **Categorie:** review en schrijven
- **Begintijd:** 2026-09-18 15:04 +02:00
- **Eindtijd:** 2026-09-18 15:08 +02:00
- **Verstreken tijd:** 4 min
- **Git-basis:** bestaande werkboom met eerdere documentatie en werklogs; alleen de eigen bibliotheeknotitie en deze nieuwe werklog zijn bedoeld gewijzigd.
- **Opdracht:** corrigeer de eerdere bibliotheeknotitie naar Rust-eigen bytecode, een zelfgebouwde VM en gedeelde native/WebAssembly-core; behoud de handgeschreven lexer/parser-keuze en vermijd JavaScript als N-Lang-doel.
- **Beoogd resultaat:** een actuele, compacte notitie (maximaal ongeveer 700 woorden) en controleerbare correctiewerklog.

## Beginsituatie

De vorige bibliotheeknotitie beschreef ten onrechte JavaScript als uitvoerdoel en bevatte een native/bytecode-keuze die nog niet was bevestigd. De eerdere sessielog is bewust niet herschreven. De gebruiker bevestigde tijdens deze correctie: eigen Rust-bytecode, `.nlbc` als voorgestelde extensie, een zelfgebouwde VM, één gedeelde Rust compiler/VM-core, native CLI en WebAssembly/browserbindings.

## Plan en afbakening

1. Verplichte projectdocumentatie en de bestaande bibliotheeknotitie lezen.
2. Alleen de actuele architectuur en dependencygrenzen in `bibliotheken.md` aanpassen.
3. De rol van LLVM, assembler/linker en `wasm-bindgen` precies begrenzen.
4. Een nieuwe werklog maken; de vorige werklog ongemoeid laten.
5. Woordenaantal, oude doelclaims en whitespace controleren.

Er zijn geen bronbestanden, Cargo-configuraties, dependencies of Rust-code gewijzigd. De bronmetadata blijft via het centrale bronnenregister lopen; B017–B018 verwijzen naar de geplande WebAssembly-bronnen van de coördinerende agent.

## Uitgevoerde stappen

1. `AGENTS.md`, de verplichte PWS-pagina’s en de eerdere `bibliotheken.md` gecontroleerd.
2. De notitie volledig herschreven naar eigen bytecode en een zelfgebouwde VM.
3. Encoder/decoder, codegeneratie, VM/stackframes, native CLI en gedeelde WebAssembly-bindings toegevoegd aan de tabel van zelf te bouwen onderdelen.
4. JavaScript als N-Lang-output en JavaScript-runtime verwijderd; SWC uitsluitend als niet-passende externe compilerplatformkeuze behouden.
5. LLVM als niet-gekozen backend, assembler/linker als niet-benodigde native tools en `wasm-bindgen` als mogelijke gerichte webgrensdependency beschreven.
6. De formulering over LALRPOP gecorrigeerd: geen suggestie dat het willekeurige ambiguïteit oplost.

## Bevindingen en bewijs

- De bijgewerkte notitie telt 694 woorden.
- De actuele tekst noemt `std` en ingebouwde Rust-tests als kernstartkeuze.
- `wasm-bindgen` staat alleen als mogelijke dependency voor bindings aan de webgrens; compiler, bytecode en VM blijven eigen Rust-code.
- Tokens, operators, instructies, stackindeling en bytecodeformaat blijven expliciet open; er zijn geen nieuwe N-Lang-syntaxvoorbeelden toegevoegd.

## Besluiten

- Geen gedeeld besluitregister gewijzigd; de architectuurcorrectie is door de gebruiker expliciet verstrekt en wordt door de coördinerende agent verder centraal verwerkt.

## Gewijzigde bestanden

- `docs/ontwikkeling/bibliotheken.md`: eerdere JS/native-keuze vervangen door bytecode/VM en native/WASM-grens; ingekort tot 694 woorden.
- `docs/pws/werklog/2026-09-18-1504-bibliotheken-correctie-luna.md`: dit nieuwe correctieverslag.

## Validatie

- Woordtelling via PowerShell: `694`, dus onder de richtwaarde van 700.
- Gerichte inhoudscontrole: eigen bytecode, `wasm-bindgen` en de LALRPOP-correctie aanwezig; oude claims over JavaScript-uitvoer, gegenereerde JavaScript of JavaScript-runtime afwezig.
- `git diff --check -- docs/ontwikkeling/bibliotheken.md`: geslaagd.
- Geen code- of runtime-tests uitgevoerd, omdat deze sessie alleen documentatie corrigeerde.
- De link naar `docs/ontwikkeling/webassembly.md` is als bronverwijzing voorbereid; dat document wordt door de coördinerende agent toegevoegd.

## Problemen, beperkingen en risico's

- B017–B018 en `docs/ontwikkeling/webassembly.md` zijn afhankelijk van de parallelle bron- en WASM-documentatie van de coördinerende agent.
- De precieze bytecode-instructies, encoder/decoder, VM-stack en browser-API zijn nog ontwerpwerk en worden niet in deze notitie ingevuld.
- De eerdere werklog bevat historische JavaScript-context en is daarom niet aangepast; de huidige notitie is leidend voor deze bibliotheekrichting.

## Vervolg

- Coördinerende agent registreert B017–B018 en controleert de link naar `webassembly.md` zodra die bestaat.
- De architectuurdocumentatie kan daarna de gedeelde compiler/VM-core en `.nlbc`-stroom verder uitwerken.
