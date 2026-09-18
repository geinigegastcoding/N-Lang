---
title: Bronnotitie B005 — Rust standaardbibliotheek
created: 2026-09-18
updated: 2026-09-18
type: source
status: active
tags: [pws, rust, std, bibliotheken]
sources: [https://doc.rust-lang.org/std/]
---

# Bronnotitie: Rust standaardbibliotheek

## Metadata

- **Bron-ID:** B005
- **Auteur/organisatie:** Rust project
- **Jaar/publicatiedatum:** z.d.; actuele online documentatie
- **Titel:** The Rust Standard Library
- **Publicatie/uitgever:** Rust Documentation
- **Versie:** de geraadpleegde pagina vermeldt `std 1.98.1` en commit `48a229cea`.
- **URL/DOI:** https://doc.rust-lang.org/std/
- **Geraadpleegd:** 2026-09-18
- **Type:** officiële technische documentatie
- **Bewijsstatus:** `geverifieerd`

## Relevantie voor het PWS

Deze bron onderbouwt het onderscheid tussen Rusts standaardbibliotheek en eigen N-Lang-code. Zij wordt gebruikt voor de startkeuze “alleen `std`” in `docs/ontwikkeling/bibliotheken.md`.

## Samenvatting in eigen woorden

De standaardbibliotheek beschrijft algemene, draagbare bouwstenen van Rust, waaronder basistypen, collecties, I/O en threads. `std` is in normale Rust-crates standaard beschikbaar.

## Bruikbare claims

| Claim in eigen woorden | Pagina/sectie | Beoogde plek in PWS | Kanttekening |
|---|---|---|---|
| `std` is de basis van draagbare Rust-software en bevat algemene abstraheringen zoals collecties en I/O. | “The Rust Standard Library” | `docs/ontwikkeling/bibliotheken.md`, begrippen | Dit zegt niet welke N-Lang-functionaliteit nodig is. |

## Kwaliteitsbeoordeling

- **Actualiteit:** passend voor de huidige Rust-documentatie; versie moet bij een implementatie opnieuw worden vastgelegd.
- **Relevantie:** direct voor de definitie van `std`.
- **Autoriteit:** primaire documentatie van het Rust-project.
- **Nauwkeurigheid:** API-documentatie met versieaanduiding.
- **Doel/belang:** technische naslag; geen pedagogische evaluatie.

## Wat deze bron niet aantoont

De bron toont niet aan dat het gebruik van alleen `std` de beste onderwijskeuze is; dat is een projectbesluit op basis van de beschikbare uren en leerdoelen.
