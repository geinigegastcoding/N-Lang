---
title: Bronnotitie B009 — pest parser-library
created: 2026-09-18
updated: 2026-09-18
type: source
status: active
tags: [pws, rust, parser, pest, bibliotheken]
sources: [https://pest.rs/book/]
---

# Bronnotitie: pest parser-library

## Metadata

- **Bron-ID:** B009
- **Auteur/organisatie:** pest project
- **Jaar/publicatiedatum:** z.d.; actuele online documentatie
- **Titel:** A thoughtful introduction to the pest parser
- **Publicatie/uitgever:** pest project
- **Versie:** niet afzonderlijk vermeld op de geraadpleegde boekpagina.
- **URL/DOI:** https://pest.rs/book/
- **Geraadpleegd:** 2026-09-18
- **Type:** officiële projecthandleiding
- **Bewijsstatus:** `geverifieerd`

## Relevantie voor het PWS

Deze bron ondersteunt de begrensde uitleg over `pest` als mogelijke parser-library. Zij maakt zichtbaar dat een aparte PEG-grammatica naar Rust-items kan worden gegenereerd; dat is precies de extra laag die in de eerste handgeschreven parserfase wordt uitgesteld.

## Samenvatting in eigen woorden

`pest` is een Rust-library voor tekstparsers op basis van Parsing Expression Grammars. Een grammarbestand wordt bij het bouwen verwerkt tot Rust-code die via een parser-API wordt aangeroepen. De grammar en de parsercode vormen daardoor twee samenhangende artefacten.

## Bruikbare claims

| Claim in eigen woorden | Pagina/sectie | Beoogde plek in PWS | Kanttekening |
|---|---|---|---|
| `pest` gebruikt PEG’s voor parsers en genereert bij het bouwen Rust-items vanuit een grammarbestand. | “Introduction”; “Grammars” | `docs/ontwikkeling/bibliotheken.md`, vergelijkingstabel | De bron beschrijft werking, niet de pedagogische waarde van handgeschreven recursive descent. |

## Kwaliteitsbeoordeling

- **Actualiteit:** actuele officiële projecthandleiding; versie niet op de pagina vermeld.
- **Relevantie:** direct voor de parservergelijking.
- **Autoriteit:** primaire documentatie van het pest-project.
- **Nauwkeurigheid:** bevat grammatica- en API-voorbeelden.
- **Doel/belang:** uitleg en adoptie van het eigen project; geen onafhankelijke vergelijking met andere parsers.

## Wat deze bron niet aantoont

De bron toont niet dat `pest` slechter is dan een eigen recursive-descent parser. Zij maakt alleen de technische aard van `pest` controleerbaar; de N-Lang-afweging gaat over leerdoel, tijd en inzicht in de eigen compilerketen.
