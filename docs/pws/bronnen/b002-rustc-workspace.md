---
title: Structuur van de officiële Rust-compilerbroncode
created: 2026-09-18
updated: 2026-09-18
type: source
status: draft
tags: [pws, rust, compiler, workspace, structuur]
sources: [https://rustc-dev-guide.rust-lang.org/compiler-src.html]
---

# Structuur van de officiële Rust-compilerbroncode

## Metadata

- **Auteur/organisatie:** Rust Compiler Development Guide / Rust-project
- **Datum:** z.d. (de pagina vermeldt geen publicatiedatum)
- **Titel:** *The compiler source code — High-level overview of the compiler source*
- **Publicatie:** Rust Compiler Development Guide
- **URL:** https://rustc-dev-guide.rust-lang.org/compiler-src.html
- **Geraadpleegd:** 2026-09-18
- **Relevante secties:** `Workspace structure`; `Compiler`; `Big picture`; `Tests`
- **Bewijsstatus:** `geverifieerd`

## Feiten uit de bron

De officiële Rust-repository gebruikt één grote Cargo-workspace. De broncode is daar over hoofdgebieden verdeeld: `compiler/` voor compilercrates, `library/` voor standaardbibliotheken, `tests/` voor compiler-tests en `src/` voor onder meer rustdoc, Cargo, build tooling en documentatie. De compiler is verder opgesplitst in veel onderling afhankelijke crates. De gids noemt organisatie en compileertijd als redenen om in een groot project meerdere crates te gebruiken; een te grote enkele crate zou onpraktisch zijn. De tests staan als afzonderlijk hoofdgebied naast de compilerbron.

## Afgeleid advies voor N-Lang

Gebruik de Rust-compilerrepository als schaalvoorbeeld, niet als starttemplate. De huidige N-Lang-mappen benoemen al logische fasen, maar de officiële bron beschrijft een veel groter project met tientallen crates en eigen buildsystemen. Voor N-Lang is het verantwoord om dezelfde conceptuele scheiding te documenteren — invoer/lexer, parser/AST, semantiek, codegeneratie, diagnostiek en CLI — terwijl alles voorlopig binnen één Cargo-package blijft. Splits pas naar een workspace wanneer onafhankelijk bouwen, hergebruik of compileertijd dat aantoonbaar nodig maakt.

## Grenzen

De Rust-compilerstructuur is geen bewijs dat N-Lang meerdere crates nodig heeft. De bron ondersteunt vooral het onderscheid tussen logische compileronderdelen en de reden om in een zeer groot project crates te splitsen. De vertaling naar N-Lang is `afgeleid`.

## Kwaliteitsbeoordeling

- **Actualiteit:** officiële ontwikkelaarsgids, geraadpleegd op 2026-09-18.
- **Relevantie:** sterk voor compilerfasen, tests en de keuze tussen één package en workspace; schaalverschil is groot.
- **Autoriteit:** primaire documentatie bij de officiële Rust-compiler.
- **Nauwkeurigheid:** beschrijft repository-onderdelen en afhankelijkheidsredenen expliciet.
- **Doel/belang:** technische ontwikkelaarsdocumentatie.
