---
title: Operationele werkwijze voor N-Lang-agents
created: 2026-09-18
updated: 2026-09-18
type: system
status: active
tags: [pws, workflow, agents]
sources: [../../AGENTS.md, 00-authoriteit.md, 02-vastleg-gids.md]
---

# Operationele werkwijze

De gebruiker bepaalt intentie en prioriteit. De agent voert uit, controleert en onderhoudt het lokale PWS-dossier.

## Voor iedere relevante taak

1. Lees [`AGENTS.md`](../../AGENTS.md), [`00-authoriteit.md`](00-authoriteit.md) en [`01-navigatie.md`](01-navigatie.md).
2. Lees [`onderzoekskader.md`](onderzoekskader.md), [`voortgang.md`](voortgang.md) en de direct relevante besluiten, bronnen, code en tests.
3. Zoek of het onderwerp al is vastgelegd; beweer nooit dat een document iets bevat zonder het werkelijk te lezen.
4. Noteer echte begintijd, opdracht, beoogd resultaat en afbakening in een eigen werksessiebestand.
5. Voer het werk uit met behoud van ongerelateerde wijzigingen.
6. Registreer bronnen, blijvende beslissingen, afwijkingen en relevante mislukte pogingen tijdens het werk.
7. Controleer het resultaat in verhouding tot het risico.
8. Werk voortgang, sessieverslag en officieel logboek af met echte eindtijd en uitkomst.
9. Update navigatie wanneer duurzame context is toegevoegd of verplaatst.
10. Draag kort over: resultaat, bewijs, resterende onzekerheid en eerstvolgende actie.

## Bij onderzoek

- Begin bij vraag en methode, niet bij een gewenste conclusie.
- Geef aan of iets bronfeit, eigen waarneming, interpretatie of aanname is.
- Registreer een duurzame synthese in het juiste hoofdstuk of een gerichte onderzoeksnotitie.
- Houd ruwe data, analyse en verslagtekst van elkaar gescheiden.
- Generaliseer niet verder dan steekproef, meetinstrument en methode toelaten.

## Bij code- of ontwerpwerk

- Koppel de wijziging aan een requirement, deelvraag of expliciet productdoel.
- Gebruik broncode en tests als waarheid voor geïmplementeerd gedrag.
- Noteer gewijzigde paden, commando's, echte testresultaten en bekende beperkingen.
- Werk voorbeelden en PWS-uitleg bij wanneer gedrag of architectuur verandert.
- Een werkend product is technisch bewijs, maar niet automatisch bewijs voor toegankelijkheid of leereffect.

## Bij nieuwe input

Volg [`02-vastleg-gids.md`](02-vastleg-gids.md). Schrijf het duurzame artefact eerst en bevestig daarna wat waar is opgeslagen. Gebruik `inbox/` alleen als bestemming werkelijk onzeker is.

## Kwaliteitslat

Kleine, gelinkte en gedateerde notities zijn beter dan één ondoorzoekbaar dagboek. Behoud onzekerheid en historie. Archiveer vervangen informatie. Laat de lezer elke belangrijke claim terugleiden naar een bron, meting, test of expliciet gemarkeerde redenering.

## Overdrachtssjabloon

```text
Resultaat: wat aantoonbaar klaar is.
Bewijs: tests, bronnen, data of visuele controle.
Gewijzigd: belangrijkste paden en besluiten.
Open: onzekerheden, risico's en blokkades.
Hierna: eerstvolgende concrete actie.
```
