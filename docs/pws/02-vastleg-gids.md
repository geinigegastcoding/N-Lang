---
title: Vastleg-gids voor het N-Lang-PWS
created: 2026-09-18
updated: 2026-09-18
type: system
status: active
tags: [pws, capture, documentation]
sources: [00-authoriteit.md, 01-navigatie.md]
---

# Vastleg-gids

Het doel is informatie één keer, op de juiste plek en met behoud van herkomst vast te leggen. Een losse chatmelding of tooluitvoer is geen duurzaam projectgeheugen.

## Waar hoort nieuwe informatie?

| Nieuwe informatie | Bestemming |
|---|---|
| Schoolregel, rubric of begeleiderseis | `onderzoekskader.md`, met status `gerapporteerd` of `geverifieerd` en bron |
| Nieuwe of gewijzigde hoofd-/deelvraag | `onderzoekskader.md` én een besluit in `besluiten.md` |
| Belangrijke externe publicatie | regel in `bronnenregister.md` en zo nodig een notitie in `bronnen/` |
| Belangrijke product-/architectuurkeuze | `besluiten.md` en relevante technische documentatie |
| Huidige status of blokkade | `voortgang.md` |
| Uitgevoerde werksessie | eigen bestand in `werklog/` plus één regel in `logboek.md` |
| Ongeordende maar mogelijk relevante input | tijdelijk in `inbox/` met `needs-review` |
| Vervangen document | `archief/`, met link naar opvolger en reden |
| Alleen een vormvoorbeeld | `voorbeelden/`, duidelijk gelabeld als niet-gezaghebbend |

## Verwerkingsregels

1. Behoud betekenis, oorspronkelijke formulering en ontvangstdatum wanneer die relevant zijn.
2. Leg herkomst vast: persoon, document, URL, test, dataset of repositorypad.
3. Geef informatie een bewijsstatus uit [`00-authoriteit.md`](00-authoriteit.md).
4. Zoek eerst naar een bestaande notitie en werk die bij waar dat logisch is.
5. Maak één kleine herbruikbare notitie wanneer informatie zelfstandig teruggevonden moet kunnen worden.
6. Koppel de notitie aan vraag, besluit, bron, hoofdstuk of werklog; maak geen los eiland.
7. Verzin geen metadata, auteurs, datums, citaten, resultaten of voorkeuren.
8. Vraag alleen om verduidelijking als onzekerheid de bestemming of inhoud materieel verandert; gebruik anders `needs-review`.
9. Een vastlegging is pas compleet wanneer bestand, metadata, navigatie en relevante registers zijn bijgewerkt.
10. Git-geschiedenis vervangt geen inhoudelijk logboek of bronnenregister.

## Voorbeelden van routering

- “De begeleider eist APA 7” → noteer als `gerapporteerd` in `onderzoekskader.md`; maak het `geverifieerd` zodra de rubric of schriftelijke instructie in de repository staat.
- Een officiële programmeertaalstandaard ondersteunt een syntaxisclaim → registreer de bron, maak zo nodig een bronnotitie en citeer haar in het hoofdstuk.
- Een test toont dat de parser een constructie accepteert → noteer commando en echte uitkomst in de werksessie; dit is technisch bewijs, geen bewijs van gebruiksvriendelijkheid.
- Een idee voor een nieuwe functie zonder akkoord → noteer als `voorstel`, niet als roadmapfeit of resultaat.
- Een onbekende losse observatie → zet tijdelijk in `inbox/` met bron en `needs-review`; classificeer of archiveer haar tijdens onderhoud.

## Minimale metadata

Gebruik het frontmattercontract uit [`AGENTS.md`](../../AGENTS.md). Voor bronnotities komen daar bij voorkeur bij: auteur/organisatie, publicatiedatum, URL/DOI, geraadpleegd op, relevante pagina's/secties en kwaliteitsbeoordeling.

## Concrete vormvoorbeelden

Zie [`voorbeelden/README.md`](voorbeelden/README.md) voor volledig ingevulde voorbeelden. Kopieer de structuur, niet de voorbeeldinhoud.
