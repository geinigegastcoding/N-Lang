---
title: Officiële Python-richtlijn voor package-, test- en projectbestanden
created: 2026-09-18
updated: 2026-09-18
type: source
status: draft
tags: [pws, python, packaging, tests, structuur]
sources: [https://packaging.python.org/en/latest/tutorials/packaging-projects/]
---

# Officiële Python-richtlijn voor package-, test- en projectbestanden

## Metadata

- **Auteur/organisatie:** Python Packaging Authority (PyPA)
- **Datum:** laatst bijgewerkt 2026-09-09 (zoals op de pagina vermeld)
- **Titel:** *Packaging Python Projects*
- **Publicatie:** Python Packaging User Guide
- **URL:** https://packaging.python.org/en/latest/tutorials/packaging-projects/
- **Geraadpleegd:** 2026-09-18
- **Relevante secties:** `A simple project`; `Creating the package files`; `Creating a test directory`; `Choosing a build backend`
- **Bewijsstatus:** `geverifieerd`

## Feiten uit de bron

De officiële tutorial toont een kleine projectroot met `README.md`, licentie, `pyproject.toml`, een `src/`-map met de package en een aparte `tests/`-map. De tutorial noemt `pyproject.toml` als plek voor projectmetadata en buildconfiguratie en houdt testen buiten de packagebron. De buildbackend is een afzonderlijke keuze; de tutorial gebruikt Hatchling, maar noemt ook andere opties.

## Afgeleid advies voor N-Lang

Houd projectmetadata en uitleg herkenbaar bij elkaar en scheid tests van broncode. De vertaling naar N-Lang is een eigen organisatiekeuze. Deze Python-bron geeft geen advies over Rust-dependencies of het zelf bouwen van compileronderdelen; dat volgt uit de gebruikersopdracht.

## Grenzen

Dit is een Python-packagingtutorial, geen Rust- of compilerarchitectuur. De claims over Cargo en N-Lang zijn dus niet rechtstreeks uit deze bron af te leiden; alleen de algemene scheiding tussen metadata, broncode, tests en voorbeelden is `afgeleid` bruikbaar.

## Kwaliteitsbeoordeling

- **Actualiteit:** officiële PyPA-gids, pagina vermeldt update 2026-09-09; geraadpleegd op 2026-09-18.
- **Relevantie:** goed voor eenvoudige projecthygiëne en tests; beperkt voor Rust-specifieke indeling.
- **Autoriteit:** primaire documentatie van de Python Packaging Authority.
- **Nauwkeurigheid:** uitvoerbare minimale structuur met toegelichte bestanden.
- **Doel/belang:** educatieve packaging-documentatie; noemt meerdere buildbackends, zonder dat één leverancier als noodzakelijk wordt gepresenteerd.
