---
title: Onderhoudscontract voor het N-Lang-PWS-dossier
created: 2026-09-18
updated: 2026-09-18
type: system
status: active
tags: [pws, maintenance, quality, archive]
sources: [00-authoriteit.md, 01-navigatie.md, 03-werkwijze.md]
---

# Onderhoudscontract

Onderhoud is conservatief en herhaalbaar: het verbetert vindbaarheid en consistentie zonder historie of onzekerheid weg te poetsen.

## Wanneer controleren?

- aan het einde van iedere inhoudelijke sessie voor de geraakte documenten;
- bij een mijlpaal of vóór een begeleidersreview voor het volledige dossier;
- vóór de definitieve inlevering met de volledige PWS-kwaliteitscontrole uit `AGENTS.md`.

## Auditchecklist

- Controleer YAML-frontmatter op verplichte velden, geldige datum en passende status.
- Zoek gebroken relatieve Markdownlinks, ontbrekende indexvermeldingen en verweesde duurzame notities.
- Zoek dubbele titels, concurrerende bronnen van waarheid en bestanden met namen als `final-v2-kopie`.
- Controleer of `voortgang.md`, `onderzoekskader.md` en aangenomen besluiten elkaar niet tegenspreken.
- Controleer of elke actuele hoofd-/deelvraag een geplande of uitgevoerde methode heeft.
- Controleer of belangrijke claims naar bron-ID, data of testbewijs leiden.
- Controleer bronmetadata, link/DOI, gebruiksplek en kwaliteitsbeoordeling.
- Controleer dat voorbeelden niet als echte historie of bewijs zijn geciteerd.
- Verwerk `inbox/`: classificeren, koppelen, als `needs-review` laten staan met reden, of archiveren.
- Archiveer alleen duidelijk vervangen documenten; behoud het origineel en voeg opvolger plus reden toe.
- Bewaar alle historische logboekregels en werklogs; herschrijf geen oud proces om het netter te laten lijken.
- Controleer privacy, geheimen en herleidbare deelnemersinformatie.
- Zoek in getraceerde bestanden naar absolute Windows-, macOS- en Linux-gebruikerspaden, driveletters en lokale accountnamen; vervang ze door repository-relatieve paden of placeholders.
- Controleer dat installatie- en uitvoerinstructies geen specifieke shell, editor of besturingssysteem stilzwijgend veronderstellen.
- Voer `git diff --check` en relevante technische tests uit.
- Noteer audituitkomst, gevonden problemen en reparaties in een eigen werklog en officiële logboekregel.

## Archiveringscontract

Een gearchiveerd document krijgt:

- `status: archived` of `superseded`;
- een `updated`-datum;
- bovenaan een zichtbare verwijzing naar de opvolger en reden;
- behoud van oorspronkelijke inhoud en herkomst;
- bijgewerkte links in `index.md` en relevante registers.

Verwijder informatie niet alleen omdat zij oud, onhandig of in tegenspraak met de huidige conclusie is.

## Wijzigingen aan systeempagina's

Wijzigingen aan `00-authoriteit.md`, `03-werkwijze.md`, `04-onderhoud.md` of `AGENTS.md` vereisen bewuste review en een logboekregel. Deze bestanden bepalen immers hoe alle overige informatie wordt geïnterpreteerd.

## Foutgedrag

Als validatie, authenticatie, push of PR mislukt: behoud lokale wijzigingen, noteer de echte fout in de werklog en meld de blokkade. Verwijder nooit documentatie of geschiedenis alleen om een controle groen te krijgen.
