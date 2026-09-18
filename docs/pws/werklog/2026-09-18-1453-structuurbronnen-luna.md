---
title: Onderzoek projectstructuur met officiële taalbronnen
created: 2026-09-18
updated: 2026-09-18
type: session
status: complete
tags: [pws, werklog, structuur, rust, bronnen]
sources: [../bronnen/b001-cargo-layout.md, ../bronnen/b002-rustc-workspace.md, ../bronnen/b003-go-module-layout.md, ../bronnen/b004-python-package-layout.md]
---

# Onderzoek projectstructuur met officiële taalbronnen

- **Datum:** 2026-09-18
- **Uitvoerder:** Luna-subagent (kostenbewuste deeltaak)
- **Categorie:** onderzoek en documentatie
- **Begintijd:** 2026-09-18 14:53:53 +02:00 (Europe/Amsterdam)
- **Eindtijd:** 2026-09-18 14:56:42 +02:00 (Europe/Amsterdam)
- **Verstreken tijd:** 3 min (169 seconden; weergegeven afgerond op hele minuten)
- **Opdracht:** Onderzoek officiële voorbeelden van taal- en compilerstructuren voor N-Lang en geef bruikbaar advies voor de bestaande modules, zonder code of libraries te installeren.
- **Afbakening:** Alleen officiële Rust-, Go- en Python-documentatie; geen wijzigingen aan gedeelde registers, README, logboek of besluitenlijst.

## Beginsituatie

De repository bevat al de rootmappen `lexer/`, `parser/`, `ast/`, `semantic/`, `compiler/`, `codegen/`, `diagnostics/`, `cli/`, `tests/`, `examples/` en `website/`. De modulemappen bevatten op dit moment placeholders; een bestaande frontend staat onder `website/`. De hoofdvraag en schoolvoorwaarden zijn nog open volgens `docs/pws/onderzoekskader.md`.

## Uitgevoerde stappen

1. `AGENTS.md` en de verplichte PWS-context gelezen, plus de huidige Git-status gecontroleerd.
2. Officiële documentatie geraadpleegd: Cargo Package Layout, Rust Compiler Development Guide, Go module layout en PyPA Packaging Python Projects.
3. Vier bronnotities gemaakt met metadata, secties, bronfeiten, afgeleid N-Lang-advies en kwaliteitsbeoordeling.
4. De bestandsnamen afgestemd op de bestaande bronnotitieconventie en de door de hoofdagent toegekende IDs `b001`–`b004`.

## Bevindingen en bewijs

- **Geverifieerd:** Cargo beschrijft `Cargo.toml` en `Cargo.lock` in de package-root, broncode onder `src/` en aparte conventionele mappen voor `examples/`, `tests/` en `benches` (bronnotitie `b001`).
- **Geverifieerd:** De Rust-compilerrepository gebruikt één grote workspace met aparte gebieden voor `compiler/`, `library/`, `tests/` en `src/`; veel crates zijn daar gemotiveerd door schaal en compileertijd (bronnotitie `b002`).
- **Geverifieerd:** De officiële Go-richtlijn begint met een eenvoudige package of command en adviseert ondersteunende packages, `internal/` en `cmd/` pas naargelang projecttype en groei (bronnotitie `b003`).
- **Geverifieerd:** PyPA scheidt projectmetadata, een `src/`-package, `tests/` en README/licentie in een minimale package-layout (bronnotitie `b004`).
- **Afgeleid:** Voor een prototype met ongeveer 80 uur werk is één Cargo-package met logische modules de passende start. Een workspace met acht crates zou extra manifesten, afhankelijkheden en compileergrenzen introduceren zonder dat de geraadpleegde bronnen dit voor een klein project nodig maken.
- **Afgeleid:** De bestaande rootmappen kunnen traceerbaar naar `src/` worden verplaatst wanneer echte Rust-modules worden aangemaakt; `tests/`, `examples/` en `website/` blijven als afzonderlijke projectgebieden herkenbaar.

## Praktisch advies voor overdracht

Gebruik als primaire richting een conventionele Cargo-package met een root `Cargo.toml`, een `src/`-boom met de acht compileronderdelen als modules en aparte `tests/` en `examples/`. Houd de CLI als hoofdprogramma of later als `src/bin/`-target. Laat de website buiten de Rust-package. Overweeg pas een Cargo-workspace met meerdere packages wanneer er onafhankelijk te bouwen onderdelen, aantoonbaar hergebruik of compileertijdproblemen ontstaan. Dit advies volgt de officiële Cargo-conventies en de schaalwaarschuwing uit de Rust-compilerbron, maar blijft een `afgeleid` projectbesluit.

## Gewijzigde bestanden

- `docs/pws/bronnen/b001-cargo-layout.md`
- `docs/pws/bronnen/b002-rustc-workspace.md`
- `docs/pws/bronnen/b003-go-module-layout.md`
- `docs/pws/bronnen/b004-python-package-layout.md`
- `docs/pws/werklog/2026-09-18-1453-structuurbronnen-luna.md`

Niet gewijzigd: `README.md`, `logboek.md`, `docs/pws/bronnenregister.md`, `docs/pws/index.md`, `docs/pws/voortgang.md`, code, dependencies en websitebestanden.

## Validatie

- `git diff --check`: geslaagd, geen uitvoer.
- Git-status: de vier bronnotities en deze werklog zijn als nieuwe bestanden zichtbaar; bestaande ongerelateerde wijzigingen in `.idea/`, `docs/ontwikkeling/` en een andere werklog zijn ongemoeid gelaten.
- De persoonlijke Kennis-vault is niet benaderd.

## Open punten

- De hoofdagent moet de bronnen in `bronnenregister.md` opnemen en de gewenste bron-ID's daar formeel vastleggen.
- De keuze voor één Cargo-package, de verplaatsing naar `src/` en het moment waarop `Cargo.toml` wordt toegevoegd, moeten nog in het gedeelde besluitregister worden vastgelegd.
- De bronnotities bewijzen projectstructuurconventies; ze bepalen niet de definitieve N-Lang-syntax, onderzoeksvraag of evaluatiemethode.
