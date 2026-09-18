---
title: Officiële Go-richtlijnen voor projectindeling
created: 2026-09-18
updated: 2026-09-18
type: source
status: draft
tags: [pws, go, modules, structuur]
sources: [https://go.dev/doc/modules/layout]
---

# Officiële Go-richtlijnen voor projectindeling

## Metadata

- **Auteur/organisatie:** The Go project
- **Datum:** z.d. (de pagina vermeldt geen publicatiedatum)
- **Titel:** *Organizing a Go module*
- **Publicatie:** go.dev, officiële Go-documentatie
- **URL:** https://go.dev/doc/modules/layout
- **Geraadpleegd:** 2026-09-18
- **Relevante secties:** `Basic package`; `Basic command`; `Package or command with supporting packages`; `Multiple commands`; `Packages and commands in the same repository`
- **Bewijsstatus:** `geverifieerd`

## Feiten uit de bron

De Go-documentatie zegt dat een eenvoudige package alle code in de projectroot kan hebben en dat een eenvoudig command-lineprogramma met één `main`-bestand kan beginnen. Bij groei kunnen ondersteunende packages in eigen mappen komen. De gids noemt `internal/` voor code die binnen het module moet blijven en `cmd/` als veelgebruikte plek voor meerdere command-lineprogramma's. De tekst presenteert dit als richtlijnen die afhangen van projecttype en omvang.

## Afgeleid advies voor N-Lang

Neem de schaalregel over: begin met de kleinste indeling die het type project duidelijk maakt en voeg mappen pas toe wanneer er echte code of een tweede uitvoerbaar doel is. Voor N-Lang kan de toekomstige CLI in `src/bin/` of als hoofdprogramma worden gestart; `examples/` en `tests/` blijven herkenbare aparte gebieden. Een aparte `internal/`-laag is pas zinvol wanneer er publieke en interne Rust-API's naast elkaar bestaan. De acht bestaande compilerlabels hoeven daarom niet meteen acht crates te worden.

## Grenzen

Go's package- en modulemodel is niet hetzelfde als Cargo's crate-model. Deze bron levert een algemeen organisatieprincipe, geen directe Cargo-configuratie of Rust-syntax. De N-Lang-conclusies zijn `afgeleid`.

## Kwaliteitsbeoordeling

- **Actualiteit:** officiële Go-documentatie, geraadpleegd op 2026-09-18.
- **Relevantie:** bruikbaar voor groeifasen, CLI's en het vermijden van te vroege opsplitsing; taalmodel verschilt.
- **Autoriteit:** primaire documentatie van het Go-project.
- **Nauwkeurigheid:** bevat concrete structuurschetsen per projecttype.
- **Doel/belang:** praktische technische richtlijn zonder zichtbaar commercieel doel.
