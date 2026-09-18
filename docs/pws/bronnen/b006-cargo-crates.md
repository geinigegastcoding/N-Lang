---
title: Bronnotitie B006 — Cargo en crates
created: 2026-09-18
updated: 2026-09-18
type: source
status: active
tags: [pws, rust, cargo, crates, bibliotheken]
sources: [https://doc.rust-lang.org/cargo/]
---

# Bronnotitie: Cargo en crates

## Metadata

- **Bron-ID:** B006
- **Auteur/organisatie:** Rust project
- **Jaar/publicatiedatum:** z.d.; actuele online documentatie
- **Titel:** The Cargo Book
- **Publicatie/uitgever:** Rust Documentation
- **Versie:** niet als afzonderlijk versienummer vermeld op de geraadpleegde introductiepagina.
- **URL/DOI:** https://doc.rust-lang.org/cargo/
- **Geraadpleegd:** 2026-09-18
- **Type:** officiële technische documentatie
- **Bewijsstatus:** `geverifieerd`

## Relevantie voor het PWS

Deze bron onderbouwt het onderscheid tussen een Rust-crate, een library en Cargo als package manager/buildhulpmiddel. De bron voorkomt dat Cargo zelf als N-Lang-library of parser wordt beschreven.

## Samenvatting in eigen woorden

Cargo beheert Rust-packages: het kan afhankelijkheden downloaden, packages compileren en distributiepakketten maken. In Rust wordt een library of uitvoerbaar programma een crate genoemd. Cargo kan dus externe libraries beschikbaar maken, maar bepaalt niet de betekenis van N-Lang.

## Bruikbare claims

| Claim in eigen woorden | Pagina/sectie | Beoogde plek in PWS | Kanttekening |
|---|---|---|---|
| Cargo downloadt dependencies en compileert packages. | “Introduction” | `docs/ontwikkeling/bibliotheken.md`, begrippen | De pagina beschrijft Cargo in het algemeen, niet de toekomstige N-Lang-configuratie. |
| Een Rust-library of executable heet een crate. | “Why Cargo Exists” | `docs/ontwikkeling/bibliotheken.md`, begrippen | “Library” blijft in het project een functioneel begrip; crate is de Rust-eenheid. |

## Kwaliteitsbeoordeling

- **Actualiteit:** passend voor de actuele Cargo-documentatie; concrete Cargo-versies moeten bij implementatie worden genoteerd.
- **Relevantie:** direct voor dependency- en cratebegrippen.
- **Autoriteit:** primaire documentatie van het Rust-project.
- **Nauwkeurigheid:** officiële handleiding met verwijzingen naar Cargo-onderdelen.
- **Doel/belang:** technische naslag; geen uitspraak over projectscope.

## Wat deze bron niet aantoont

De bron bewijst niet dat externe crates in N-Lang verboden of schadelijk zijn. Zij beschrijft alleen wat Cargo doet; de keuze om dependencies uit te stellen is een afgebakend leer- en onderzoeksbesluit.
