---
title: Navigatie van het N-Lang-PWS-dossier
created: 2026-09-18
updated: 2026-09-18
type: system
status: active
tags: [pws, navigation, structure]
sources: [index.md]
---

# Navigatie

## Systeempagina's

- [`00-authoriteit.md`](00-authoriteit.md) — wat gezaghebbend is, bewijslabels en grenzen.
- [`02-vastleg-gids.md`](02-vastleg-gids.md) — informatie opvangen, classificeren en duurzaam opslaan.
- [`03-werkwijze.md`](03-werkwijze.md) — vaste agentcyclus voor iedere taak.
- [`04-onderhoud.md`](04-onderhoud.md) — kwaliteit, links, metadata en archivering bewaken.
- [`index.md`](index.md) — compacte canonieke inhoudsopgave.

## Onderzoeksdomein

- [`onderzoekskader.md`](onderzoekskader.md) is de enige plek voor de actuele hoofdvraag, deelvragen, scope en geplande methode.
- [`planning.md`](planning.md) begroot 80 uur per leerling; daadwerkelijke tijd staat alleen in het officiële logboek.
- [`bronnenregister.md`](bronnenregister.md) is de centrale bibliografische administratie.
- [`bronnen/`](bronnen/README.md) bevat kleine, herbruikbare notities over belangrijke bronnen.
- `hoofdstukken/` bevat rapportteksten zodra zij bestaan; elk hoofdstuk linkt terug naar vragen en bronnen.
- `data/` bevat uitsluitend geanonimiseerde data en scripts/analyses die mogen worden gepubliceerd.
- `bijlagen/` bevat onderzoeksinstrumenten, extra tabellen, technische uitleg en figuren.

## Besturingsdomein

- [`voortgang.md`](voortgang.md) is de huidige momentopname.
- [`besluiten.md`](besluiten.md) bewaart keuzes en revisievoorwaarden.
- [`logboek.md`](../../logboek.md) is de officiële totaalregistratie van tijd en activiteiten.
- [`werklog/`](werklog/README.md) bevat de controleerbare details per sessie.

## Opvang, voorbeelden en historie

- [`inbox/`](inbox/README.md) is alleen voor informatie waarvan de juiste bestemming nog niet zeker is.
- [`voorbeelden/`](voorbeelden/README.md) laat de gewenste vorm zien maar bevat geen echte onderzoeksfeiten.
- [`archief/`](archief/README.md) bewaart vervangen documenten met verwijzing naar de opvolger.

## Productdomein

- `PRODUCT.md` beschrijft productcontext en open productkeuzes.
- `DESIGN.md` beschrijft het visuele systeem van de website.
- [`src/`](../../src/README.md) bevat de plaatsen voor eigen Rust-modules, inclusief twee codegen-backends, eigen bytecode en VM. Er is nog geen Rust-implementatie.
- [`examples/`](../../examples/README.md), [`tests/`](../../tests/README.md) en [`browser/`](../../browser/README.md) zijn ingericht voor toekomstige voorbeelden en technische validatie.
- [`docs/taal/`](../taal/README.md) beschrijft het concept; [de technische handleidingen](../README.md) leggen bouwroute, bibliotheken en backends uit.
- Technische documentatie moet verwijzen naar concrete paden, tests en waar relevant een commit-ID.

## Regels voor vindbaarheid

1. Zoek vóór het maken van een notitie of het onderwerp al bestaat.
2. Werk de bestaande gezaghebbende notitie bij in plaats van een duplicaat te maken.
3. Link een nieuw duurzaam document vanuit [`index.md`](index.md) of een direct gelinkte themapagina.
4. Gebruik relatieve Markdownlinks die ook op GitHub werken.
5. Houd links betekenisvol; voorkom decoratieve linknetwerken zonder navigatiewaarde.
