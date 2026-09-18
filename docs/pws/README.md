---
title: PWS-dossier N-Lang
created: 2026-09-18
updated: 2026-09-18
type: system
status: active
tags: [pws, navigation, n-lang]
sources: [../../README.md, ../../PRODUCT.md]
---

# PWS-dossier N-Lang

Dit dossier is het lokale, zelfstandige projectgeheugen van het N-Lang-PWS. Het bevat de onderzoeksbasis, actuele voortgang, besluiten, bronnen en gedetailleerde werksessies. Alles blijft binnen deze repository.

## Begin hier

Lees bij iedere taak in deze volgorde:

1. [`AGENTS.md`](../../AGENTS.md) voor bindende werk- en documentatieregels;
2. [`00-authoriteit.md`](00-authoriteit.md) voor bronvolgorde, bewijsstatus en harde grenzen;
3. [`01-navigatie.md`](01-navigatie.md) of de compacte [`index.md`](index.md) voor de dossierkaart;
4. [`onderzoekskader.md`](onderzoekskader.md) voor hoofdvraag, scope, methode en schooleisen;
5. [`voortgang.md`](voortgang.md) voor de actuele stand en eerstvolgende acties;
6. [`besluiten.md`](besluiten.md) voor keuzes die niet stilzwijgend opnieuw mogen worden gemaakt;
7. [`bronnenregister.md`](bronnenregister.md) voor gebruikte bronnen en bewijs;
8. [`logboek.md`](../../logboek.md) voor de officiële tijdregistratie;
9. [`werklog/`](werklog/README.md) voor gedetailleerde sessieverslagen.

## Project in één alinea

N-Lang onderzoekt binnen een profielwerkstuk hoe programmeren toegankelijker kan worden voor Nederlandstalige beginners. Het technische product is een Nederlandstalige programmeertaal en bijbehorende gereedschappen. De exacte hoofdvraag, doelgroepafbakening, evaluatiemethode en officiële schoolcriteria zijn nog niet in dit dossier bevestigd; agents mogen die niet zelf invullen.

## Bronnen van waarheid

| Onderwerp | Gezaghebbend bestand |
|---|---|
| Agentwerkwijze en documentatiestijl | [`AGENTS.md`](../../AGENTS.md) |
| Vertrouwensmodel en grenzen | [`00-authoriteit.md`](00-authoriteit.md) |
| Canonieke dossiernavigatie | [`index.md`](index.md) |
| Officiële tijdregistratie | [`logboek.md`](../../logboek.md) |
| Onderzoeksvragen, scope en methode | [`onderzoekskader.md`](onderzoekskader.md) |
| Actuele status en volgende stappen | [`voortgang.md`](voortgang.md) |
| Belangrijke keuzes | [`besluiten.md`](besluiten.md) |
| Bronnen en bronkwaliteit | [`bronnenregister.md`](bronnenregister.md) |
| Productpositionering | [`PRODUCT.md`](../../PRODUCT.md) |
| Visueel ontwerp | [`DESIGN.md`](../../DESIGN.md) |
| Technische waarheid | broncode en geautomatiseerde tests in de repository |

Bij tegenspraak wordt de fout zichtbaar genoteerd en opgelost; er wordt niet stilzwijgend één versie gekozen. Expliciete gebruikerseisen en vastgelegde school-/begeleiderseisen hebben voorrang op generieke sjablonen.

## Werkcyclus

```text
onderzoekskader lezen
→ taak en starttijd vastleggen
→ bewijs verzamelen of product aanpassen
→ bronnen en besluiten registreren
→ controleren
→ voortgang en detailnotitie bijwerken
→ tijdregel aan logboek toevoegen
```

## Naamgeving

- Sessie: `werklog/YYYY-MM-DD-HHMM-korte-naam.md`.
- Onderzoeksdata: datum en onderwerp, zonder persoonsgegevens, bijvoorbeeld `data/2026-10-03-syntaxis-taakresultaten.csv`.
- Figuren: betekenisvolle naam, bijvoorbeeld `bijlagen/figuur-lexer-pipeline.svg`.
- Vermijd `final`, `nieuw`, `kopie`, `v2` en vergelijkbare onduidelijke namen; gebruik versiebeheer en een statusveld in het document.

## Voorbeelden

In [`voorbeelden/`](voorbeelden/README.md) staan concreet ingevulde voorbeelden van een werksessie, bronnotitie en onderzoeksredenering. Ze tonen vorm en detailniveau, maar zijn expliciet geen projectbewijs en komen niet in het officiële logboek.

## Harde grens

Alle projectcontext staat onder de dynamisch bepaalde repositoryroot (`git rev-parse --show-toplevel`). Persoonlijke kennisbanken of context-vaults buiten de repository horen niet bij dit dossier en mogen door agents niet worden geopend, gelezen, doorzocht of gewijzigd. Benodigde informatie moet door de eigenaar bewust in deze repository of het gesprek worden aangeleverd.
