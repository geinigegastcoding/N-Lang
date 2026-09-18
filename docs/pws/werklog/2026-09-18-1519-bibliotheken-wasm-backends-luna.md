---
title: Werksessie — bibliothekenkeuze voor bytecode- en Wasm-backends
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

# Werksessie: bibliothekenkeuze voor bytecode- en Wasm-backends

- **Datum:** 2026-09-18
- **Uitvoerder:** Codex (`/root/bibliotheken`)
- **Categorie:** review en schrijven
- **Begintijd:** 2026-09-18 15:19 +02:00
- **Eindtijd:** 2026-09-18 15:22 +02:00
- **Verstreken tijd:** 3 min
- **Git-basis:** bestaande werkboom met eerdere documentatie en werklogs; alleen de bibliotheeknotitie en deze nieuwe werklog zijn bedoeld gewijzigd.
- **Opdracht:** verwerk de laatste architectuurcorrectie: N-Lang genereert zelf eigen bytecode én WebAssembly vanuit gedeelde frontendlagen, met twee eigen codegen-backends; houd `std` als kern en beperk optionele Wasm-hulpmiddelen.
- **Beoogd resultaat:** actuele, compacte bibliotheeknotitie en overdraagbare bronmetadata zonder code of dependency-installatie.

## Beginsituatie

De vorige notitie beschreef nog een gedeelde Rust compiler/VM-core die via WebAssembly zou werken. De gebruiker verduidelijkte dat N-Lang zelf beide targets moet genereren: `.nlbc` voor de zelfgebouwde Rust-VM en `.wasm` voor een browserruntime. De eerdere werklogs zijn historische verslagen en zijn niet herschreven.

## Plan en afbakening

1. Verplichte projectdocumentatie en de huidige bibliotheeknotitie controleren.
2. Alleen `docs/ontwikkeling/bibliotheken.md` corrigeren.
3. Maximaal twee primaire Wasm-bronnen controleren voor optionele `wasm-encoder`/WAT-verwijzingen.
4. Een nieuwe werklog maken en eerdere logs behouden.
5. Woordenaantal en inhoudelijke claims controleren.

Er is geen Rust-code geschreven, geen Cargo-configuratie gewijzigd en geen dependency geïnstalleerd.

## Uitgevoerde stappen

1. `bibliotheken.md` herschreven zodat de gedeelde lexer/parser/semantiek twee eigen backends voedt: `src/codegen/bytecode/` en `src/codegen/wasm/`.
2. Zelfbouw toegevoegd voor `.nlbc` encoder/decoder, Wasm-codegenerator, `src/runtime/` (waarden, objecten en methodecontext), Rust-VM/stackframes en browserruntime.
3. `wasm-bindgen` beperkt tot een optionele Rust-runtime/browsercontext of latere browsercompiler; het is niet de N-Lang-Wasm-backend.
4. LLVM, SWC, assembler/linker en parser/lexer-crates als niet-gekozen of uitgestelde infrastructuur afgebakend.
5. `wasm-encoder` en WAT alleen als mogelijke laatste modulecodering beschreven.

## Bevindingen en bewijs

- De bijgewerkte notitie telt 689 woorden.
- De officiële `wasm-encoder`-documentatie beschrijft de crate als een low-level WebAssembly encoder; dit ondersteunt alleen de beperkte formulering dat zo’n crate de laatste encodinglaag kan ondersteunen.
- De officiële WebAssembly-specificatie beschrijft WAT als tekstformaat voor WebAssembly-modules; zij ondersteunt niet de claim dat WAT de N-Lang-codegenerator vervangt.
- Bron-ID’s B020 en B021 zijn gereserveerd voor centrale registratie; B022 voor de WebAssembly-specificatie wordt door de hoofdagent beheerd.

## Besluiten

- Geen gedeeld register gewijzigd. De targetkeuze is expliciet door de gebruiker aangeleverd; de hoofdagent verwerkt deze in de centrale architectuurdocumentatie.

## Gewijzigde bestanden

- `docs/ontwikkeling/bibliotheken.md`: directe dubbele codegen naar `.nlbc` en `.wasm`, eigen runtimes en optionele Wasm-grensinfrastructuur vastgelegd.
- `docs/pws/werklog/2026-09-18-1519-bibliotheken-wasm-backends-luna.md`: dit sessieverslag.

## Validatie

- Woordtelling via PowerShell: `689`.
- Inhoudscontrole: `.nlbc`, `.wasm`, beide codegenpaden, `src/runtime/`, eigen decoder/VM en de beperkte `wasm-bindgen`-rol aanwezig.
- `git diff --check` wordt na afronding uitgevoerd voor beide eigen bestanden.
- Geen code- of runtime-tests uitgevoerd; de sessie betrof uitsluitend documentatie.

## Problemen, beperkingen en risico's

- `docs/ontwikkeling/webassembly.md` en centrale B020–B022-registratie vallen buiten deze opdracht en moeten door de hoofdagent worden afgerond.
- De concrete Wasm-instructies, module-indeling, runtime-API en `.nlbc`-specificatie zijn nog open ontwerpwerk.

## Vervolg

- Hoofdagent registreert B020 (`wasm-encoder`), B021 (WAT/tekstformaat) en B022 (Wasm-specificatie) centraal.
- De technische architectuur kan daarna de twee eigen codegens en de gedeelde runtime verder specificeren.
