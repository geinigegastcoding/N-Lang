---
title: Werklog N-Lang-PWS
created: 2026-09-18
updated: 2026-09-18
type: system
status: active
tags: [pws, worklog, process]
sources: [../../../AGENTS.md]
---

# Werklog

Deze map bevat één gedetailleerd verslag per niet-triviale werksessie. Het officiële tijdsoverzicht blijft [`logboek.md`](../../../logboek.md).

## Bestandsnaam

Gebruik `YYYY-MM-DD-HHMM-korte-naam.md`, gebaseerd op de lokale begintijd in `Europe/Amsterdam`. Gebruik bij gelijktijdige sessies een extra unieke slug.

## Verplicht sjabloon

```markdown
---
title: Werksessie — korte titel
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: session
status: active
tags: [pws, worklog]
sources: []
---

# Werksessie: korte titel

- Datum: YYYY-MM-DD
- Uitvoerder: naam of agent-ID
- Categorie: onderzoek | schrijven | ontwikkeling | testen | ontwerp | overleg | beheer | review
- Begintijd: YYYY-MM-DD HH:MM +offset
- Eindtijd: YYYY-MM-DD HH:MM +offset
- Verstreken tijd: X min
- Opdracht:
- Beoogd resultaat:

## Beginsituatie

## Plan en afbakening

## Uitgevoerde stappen

1. ...

## Bevindingen en bewijs

## Besluiten

- Geen, of links naar `../besluiten.md`.

## Gewijzigde bestanden

- `pad`: concrete wijziging en reden.

## Validatie

- `commando of controle`: echte uitkomst.

## Problemen, beperkingen en risico's

## Vervolg
```

## Regels

- Beschrijf echte handelingen en uitkomsten; reconstrueer geen fictief perfect proces.
- Noteer relevante mislukte pogingen en waarom de aanpak veranderde.
- Kopieer geen grote tooluitvoer; vat samen en verwijs naar reproduceerbare commando’s of artefacten.
- Vermeld bronnen in `../bronnenregister.md` en blijvende keuzes in `../besluiten.md`.
- Vul begin- en eindtijd pas met gemeten waarden in. Gebruik `onbekend` met reden als meten onmogelijk was.
- Zet de sessiestatus na afronding van `active` op `complete`.
- Voeg na afronding precies één samenvattende regel toe aan het officiële logboek.
