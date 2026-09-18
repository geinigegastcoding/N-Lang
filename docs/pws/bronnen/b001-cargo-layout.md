---
title: Officiële Cargo-indeling voor een Rust-package
created: 2026-09-18
updated: 2026-09-18
type: source
status: draft
tags: [pws, rust, cargo, structuur]
sources: [https://doc.rust-lang.org/cargo/guide/project-layout.html]
---

# Officiële Cargo-indeling voor een Rust-package

## Metadata

- **Auteur/organisatie:** Rust-project
- **Datum:** z.d. (de pagina vermeldt geen publicatiedatum)
- **Titel:** *Package Layout*
- **Publicatie:** The Cargo Book, officiële Rust-documentatie
- **URL:** https://doc.rust-lang.org/cargo/guide/project-layout.html
- **Geraadpleegd:** 2026-09-18
- **Relevante secties:** `Package Layout`; `Package root`; `src`, `examples`, `tests` en `benches` in het beschreven overzicht
- **Bewijsstatus:** `geverifieerd`

## Feiten uit de bron

Cargo legt `Cargo.toml` en `Cargo.lock` in de package-root. De standaard broncode staat onder `src/`, met `src/lib.rs` als standaard bibliotheekdoel, `src/main.rs` als standaard uitvoerbaar doel en `src/bin/` voor extra uitvoerbare programma's. De conventionele mappen `examples/`, `tests/` en `benches/` hebben elk een eigen doel. Voor een meerbestandsvoorbeeld of meerbestandsintegratietest gebruikt Cargo een `main.rs` in een submap van het bijbehorende doel.

## Afgeleid advies voor N-Lang

De bestaande rootmappen kunnen als historische placeholders blijven totdat de eerste Rust-package wordt ingericht. Zodra er echte Rust-code komt, ondersteunt de Cargo-conventie een enkel pakket met `src/main.rs` of `src/lib.rs`, submappen daaronder voor compileronderdelen en een aparte `tests/`- en `examples/`-map. Voor een 80-uurprototype is één package eenvoudiger te begrijpen en te bouwen dan meteen meerdere packages. De bestaande namen `lexer`, `parser`, `ast`, `semantic`, `compiler`, `codegen`, `diagnostics` en `cli` kunnen als modules onder `src/` terugkomen; dit is een projectkeuze, geen letterlijk voorschrift van Cargo.

## Grenzen

Deze bron zegt niet welke compilerfasen N-Lang precies moet hebben en bewijst niet dat een enkele package voor iedere toekomstige schaal geschikt blijft. De aanbeveling voor N-Lang is een `afgeleid` ontwerpbesluit op basis van de package-conventies en de beperkte projectomvang.

## Kwaliteitsbeoordeling

- **Actualiteit:** officiële Cargo-documentatie, geraadpleegd op 2026-09-18.
- **Relevantie:** direct voor de indeling van een Rust-project en de plaats van tests en voorbeelden.
- **Autoriteit:** primaire documentatie van het Rust-project.
- **Nauwkeurigheid:** concreet overzicht met conventies en uitzonderingen.
- **Doel/belang:** technische documentatie; geen commercieel doel zichtbaar.
