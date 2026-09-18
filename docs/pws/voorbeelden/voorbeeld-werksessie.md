---
title: Voorbeeld — technische werksessie
created: 2026-09-18
updated: 2026-09-18
type: example
status: active
tags: [pws, example, worklog]
sources: []
---

# Voorbeeld: technische werksessie

> **Niet echt uitgevoerd.** Alle tijden, wijzigingen en testuitkomsten hieronder zijn uitsluitend vormvoorbeelden en horen niet in het officiële logboek.

- **Datum:** 2026-10-02
- **Uitvoerder:** Voorbeeldagent
- **Categorie:** ontwikkeling en testen
- **Begintijd:** 2026-10-02 15:10 +02:00
- **Eindtijd:** 2026-10-02 16:02 +02:00
- **Verstreken tijd:** 52 min
- **Opdracht:** documenteer en implementeer een hypothetische nieuwe taalconstructie.
- **Beoogd resultaat:** syntaxis, parsergedrag, diagnostiek en tests blijven aantoonbaar in overeenstemming.

## Beginsituatie

De constructie stond als `voorstel` in een besluit, maar kwam nog niet in grammatica, code of tests voor. Dit is in een echte sessie te verifiëren met repositoryzoekopdrachten en bestaande documentatie.

## Plan en afbakening

1. Requirement en aangenomen besluit controleren.
2. Eerst falende parser- en diagnostiektests toevoegen.
3. Minimale implementatie maken.
4. Taalreferentie en voorbeeld bijwerken.
5. Gerichte en volledige relevante tests uitvoeren.

Niet binnen scope: optimalisatie of uitbreiding met extra syntaxis.

## Uitgevoerde stappen

1. Relevante beslissing en grammatica gecontroleerd.
2. Een positieve en drie negatieve testgevallen toegevoegd.
3. Parser en foutmelding minimaal aangepast.
4. Documentatie gekoppeld aan concrete tests en voorbeeldcode.
5. Controles uitgevoerd en echte uitvoer in de sessie vastgelegd.

## Bevindingen en bewijs

- **Geverifieerd:** het nieuwe positieve testgeval faalde vóór implementatie en slaagde erna.
- **Geverifieerd:** ongeldige invoer leverde de bedoelde bronlocatie in de diagnostiek.
- **Afgeleid:** de wijziging lijkt achterwaarts compatibel voor de gedekte grammatica; dit zegt niets over ongeteste invoer.

## Besluiten

- Geen nieuw blijvend besluit; de implementatie volgde een al aangenomen besluit.

## Gewijzigde bestanden

- `parser/...`: minimale parserondersteuning; exacte echte paden zouden hier worden genoemd.
- `tests/...`: positieve en negatieve regressietests.
- `docs/...`: syntaxis, semantiek en beperking beschreven.

## Validatie

- `exact testcommando`: noteer hier alleen de werkelijk waargenomen aantallen en status.
- `git diff --check`: noteer `geslaagd` of de echte foutmelding.
- Handmatige voorbeeldrun: noteer invoer, relevante uitvoer en versie/commit.

## Problemen, beperkingen en risico's

- Parsertests bewijzen technisch gedrag, niet dat beginners de constructie begrijpen.
- Een toekomstige gebruikerstest moet de gekozen formulering afzonderlijk evalueren.

## Vervolg

- Koppel de constructie aan het meetinstrument zodra de evaluatiemethode is bevestigd.
- Voeg na een echte sessie één compacte regel toe aan `logboek.md`.
