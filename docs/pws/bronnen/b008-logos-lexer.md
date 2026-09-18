---
title: Bronnotitie B008 — Logos lexer-library
created: 2026-09-18
updated: 2026-09-18
type: source
status: active
tags: [pws, rust, lexer, logos, bibliotheken]
sources: [https://docs.rs/logos/latest/logos/]
---

# Bronnotitie: Logos lexer-library

## Metadata

- **Bron-ID:** B008
- **Auteur/organisatie:** Logos maintainers; docs.rs crate-documentatie
- **Jaar/publicatiedatum:** z.d.; geraadpleegde pagina toont versie 0.16.1
- **Titel:** Crate `logos`
- **Publicatie/uitgever:** docs.rs
- **Versie:** 0.16.1 op de geraadpleegde pagina
- **URL/DOI:** https://docs.rs/logos/latest/logos/
- **Geraadpleegd:** 2026-09-18
- **Type:** officiële crate-API-documentatie
- **Bewijsstatus:** `geverifieerd`

## Relevantie voor het PWS

Deze bron geeft een precieze, beperkte beschrijving van een mogelijke latere lexer-library. Zij ondersteunt de tekst dat `logos` een echte lexeroplossing biedt, terwijl de eerste N-Lang-versie de lexer zelf wil bouwen.

## Samenvatting in eigen woorden

`logos` koppelt tokendefinities aan een lexer en documenteert onder meer `Lexer`, bronposities en een derive-macro voor token-enums. De library is daarmee infrastructuur voor tokenisatie, geen complete N-Lang-compiler.

## Bruikbare claims

| Claim in eigen woorden | Pagina/sectie | Beoogde plek in PWS | Kanttekening |
|---|---|---|---|
| `logos` levert een lexer die een bron en een token-enum verwerkt en posities kan teruggeven. | Cratebeschrijving; `Lexer`; `spanned` | `docs/ontwikkeling/bibliotheken.md`, vergelijkingstabel | De documentatie bewijst niet dat de gegenereerde foutmeldingen passen bij N-Lang. |

## Kwaliteitsbeoordeling

- **Actualiteit:** versie is expliciet zichtbaar, maar `latest` kan wijzigen.
- **Relevantie:** direct voor de lexerkeuze.
- **Autoriteit:** primaire crate-documentatie van de library via docs.rs.
- **Nauwkeurigheid:** API-beschrijving en voorbeelden.
- **Doel/belang:** librarydocumentatie; kan de eigen library positief positioneren.

## Wat deze bron niet aantoont

De bron toont niet dat `logos` te groot, te moeilijk of ongeschikt is voor elk project. De keuze om het later te overwegen is specifiek gebaseerd op N-Langs leerdoelen en beschikbare uren.
