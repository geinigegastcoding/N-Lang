---
title: Bronnotitie B007 — Rust testen
created: 2026-09-18
updated: 2026-09-18
type: source
status: active
tags: [pws, rust, testen, cargo]
sources: [https://doc.rust-lang.org/book/ch11-03-test-organization.html, https://doc.rust-lang.org/book/ch11-01-writing-tests.html]
---

# Bronnotitie: Rust testen

## Metadata

- **Bron-ID:** B007
- **Auteur/organisatie:** Rust project
- **Jaar/publicatiedatum:** z.d.; actuele online documentatie
- **Titel:** The Rust Programming Language — Test Organization; How to Write Tests
- **Publicatie/uitgever:** Rust Documentation
- **Versie:** editie/versienummer niet afzonderlijk vermeld op de geraadpleegde webpagina’s.
- **URL/DOI:** https://doc.rust-lang.org/book/ch11-03-test-organization.html en https://doc.rust-lang.org/book/ch11-01-writing-tests.html
- **Geraadpleegd:** 2026-09-18
- **Type:** officiële technische handleiding
- **Bewijsstatus:** `geverifieerd`

## Relevantie voor het PWS

Deze bron onderbouwt dat de eerste N-Lang-versie kan starten met Rusts ingebouwde testmechanismen: unit tests, integratietests en het `cargo test`-commando. De tests kunnen per compilerlaag en end-to-end worden ingericht.

## Samenvatting in eigen woorden

Unit tests staan bij de code die zij afzonderlijk controleren en kunnen ook private functies testen. Integratietests gebruiken de publieke API van buitenaf en controleren samenwerking tussen onderdelen. Een functie met `#[test]` wordt door de test runner uitgevoerd wanneer `cargo test` draait.

## Bruikbare claims

| Claim in eigen woorden | Pagina/sectie | Beoogde plek in PWS | Kanttekening |
|---|---|---|---|
| Rust onderscheidt unit tests en integratietests met verschillende doelen. | “Test Organization” | `docs/ontwikkeling/bibliotheken.md`, startkeuze | Dit vervangt geen gebruikersonderzoek. |
| `cargo test` bouwt en voert de testbinary uit voor functies met `#[test]`. | “How to Write Tests” | `docs/ontwikkeling/bibliotheken.md`, startkeuze | De exacte uitvoer moet bij echte N-Lang-tests worden vastgelegd. |

## Kwaliteitsbeoordeling

- **Actualiteit:** passend als officiële handleiding; details kunnen per Rust-editie wijzigen.
- **Relevantie:** direct voor de gekozen testbasis.
- **Autoriteit:** primaire Rust-documentatie.
- **Nauwkeurigheid:** bevat uitleg en uitvoerbare voorbeelden.
- **Doel/belang:** onderwijs en technische naslag; geen garantie dat tests alle bugs vinden.

## Wat deze bron niet aantoont

De bron toont niet dat N-Lang hierdoor correct, begrijpelijk of toegankelijk is. Zij beschrijft de testmechanismen; de projecttests moeten zelf aantonen welk gedrag is gecontroleerd.
