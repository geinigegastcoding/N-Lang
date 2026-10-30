---
title: Werksessie — PWS-documentatiestelsel
created: 2026-09-18
updated: 2026-09-18
type: session
status: complete
tags: [pws, worklog, documentation, governance]
sources: [../../../AGENTS.md, ../README.md, ../../../PRODUCT.md, ../../../DESIGN.md]
---

# Werksessie: PWS-documentatiestelsel

- **Datum:** 2026-09-18
- **Uitvoerder:** Codex (hoofdagent)
- **Categorie:** beheer en schrijven
- **Begintijd:** 2026-09-18 14:30 +02:00
- **Eindtijd:** 2026-09-18 14:47 +02:00
- **Verstreken tijd:** 17 min
- **Opdracht:** maak een `AGENTS.md` met volledige PWS-documentatiestijl, gestructureerde lokale werkregistratie en een strikt verbod op toegang tot de persoonlijke Kennis-vault; houd een specifiek `logboek.md` bij en lever het werk via een GitHub-PR op.
- **Beoogd resultaat:** een direct bruikbaar en controleerbaar PWS-dossier dat toekomstige agents consequent bijhouden.

## Beginsituatie

- De repository bevatte nog geen `AGENTS.md` of `logboek.md`.
- De map `docs/` bevatte geen getraceerde documenten.
- `README.md`, `PRODUCT.md` en `DESIGN.md` bevatten al beknopte project-, product- en ontwerpcontext.
- De actieve Git-branch was `codex/docs` en de werkboom was bij aanvang schoon.

## Plan en afbakening

1. Bestaande projectdocumentatie en Git-status controleren.
2. Een bindende PWS-werkwijze opstellen.
3. Een zelfstandige lokale contextstructuur in `docs/pws/` aanmaken.
4. Een officieel logboek en sjablonen voor detailregistratie toevoegen.
5. Inhoud en links controleren, wijzigingen committen en een PR openen.

Er worden geen inhoudelijke onderzoeksresultaten, schoolcriteria of hoofdvragen verzonnen. Ontbrekende gegevens blijven zichtbaar als open punt.

## Uitgevoerde stappen

1. Bestaande repositorydocumenten, Git-status, remote en GitHub-authenticatie gecontroleerd.
2. De organisatorische indeling van de persoonlijke context-vault eenmalig op bestands- en mapnamen geïnventariseerd, zonder bestanden te wijzigen, om een zelfstandige lokale structuur te kunnen ontwerpen.
3. Na een expliciete vervolgopdracht van de gebruiker eenmalig en alleen-lezen de centrale vaultdocumenten over autoriteit, navigatie, vastleggen, werkwijze, onderhoud en enkele voorbeeldlogs/plannen bestudeerd.
4. `AGENTS.md` opgesteld met procesregels, PWS-opbouw, onderzoekskwaliteit, brongebruik, N-Lang-specifieke technische documentatie, tijdregistratie en kwaliteitscontroles.
5. Het lokale PWS-dossier ingericht met genummerde systeempagina's, navigatie, onderzoekskader, voortgang, besluiten, bronnenregister, inbox, archief, voorbeelden en werklog.
6. Een strikt toekomstig verbod vastgelegd op iedere lees- of schrijftoegang door agents tot de persoonlijke Kennis-vault.
7. `logboek.md` als enige officiële tijdregistratie aangemaakt.

## Bevindingen en bewijs

- N-Lang is in de bestaande projectdocumentatie gepositioneerd als Nederlandstalige programmeerervaring voor beginners.
- De exacte taalomvang, hoofdvraag, doelgroep, meetmethode en schoolvoorwaarden zijn nog open; ze zijn daarom niet als feit ingevuld.
- `PRODUCT.md` en `DESIGN.md` zijn nuttige interne projectbronnen, maar geen onafhankelijk bewijs voor toegankelijkheid of leereffect.

## Besluiten

- [`PWS-D001`](../besluiten.md#pws-d001--zelfstandig-pws-dossier-binnen-de-repository): zelfstandig PWS-dossier binnen de repository.
- [`PWS-D002`](../besluiten.md#pws-d002--één-officieel-logboek-met-gedetailleerde-sessieverslagen): één officieel logboek met detailverslagen.
- [`PWS-D003`](../besluiten.md#pws-d003--persoonlijke-context-vaults-volledig-buiten-scope): persoonlijke context-vaults volledig buiten scope.
- [`PWS-D004`](../besluiten.md#pws-d004--vijf-vaste-systeemlagen-en-uniforme-metadata): vijf vaste systeemlagen en uniforme metadata.

## Gewijzigde bestanden

- `AGENTS.md`: bindende agent- en documentatieregels voor het PWS.
- `logboek.md`: officiële chronologische tijdregistratie.
- `docs/pws/README.md`: navigatie en uitleg van het lokale dossier.
- `docs/pws/index.md`: canonieke dossierindex.
- `docs/pws/00-authoriteit.md` t/m `04-onderhoud.md`: lokale contextwerkwijze naar het beproefde vijfdelige patroon.
- `docs/pws/onderzoekskader.md`: gecontroleerd sjabloon voor eisen, vragen, scope en methode.
- `docs/pws/voortgang.md`: actuele status, volgende acties en risico’s.
- `docs/pws/besluiten.md`: besluitregister met drie initiële procesbesluiten.
- `docs/pws/bronnenregister.md`: bronregistratie en interne bronnen.
- `docs/pws/werklog/README.md`: sessiesjabloon en registratieregels.
- `docs/pws/werklog/2026-09-18-1430-pws-documentatiestelsel.md`: dit sessieverslag.
- `docs/pws/inbox/README.md`, `bronnen/README.md` en `archief/README.md`: vaste landingzones met grensregels.
- `docs/pws/voorbeelden/`: ingevulde, niet-gezaghebbende voorbeelden van de gewenste documentatiestijl.

## Validatie

- `git diff --cached --check`: geslaagd, geen witruimte- of patchfouten.
- Relatieve-linkcontrole over 20 Markdownbestanden onder `docs/pws/`: geslaagd; alle lokale links verwijzen naar bestaande paden.
- Frontmattercontrole over 20 Markdownbestanden onder `docs/pws/`: geslaagd; alle verplichte velden zijn aanwezig.
- Staged-bestandscontrole: uitsluitend `AGENTS.md`, `logboek.md` en `docs/pws/` zijn voor deze wijziging opgenomen; de ongerelateerde, niet-getraceerde map `.idea/` is buiten de wijziging gelaten.
- Geen producttests uitgevoerd: de wijziging bestaat alleen uit Markdowndocumentatie en raakt geen broncode of runtimegedrag.
- GitHub CLI: branch `codex/docs` gepusht en [PR #2](https://github.com/geinigegastcoding/N-Lang/pull/2) succesvol geopend tegen `main`.

## Problemen, beperkingen en risico’s

- De gebruiker of begeleider moet de officiële PWS-eisen en onderzoeksvraag nog bevestigen.
- Eenmalige read-only inventarisatie en daarna, op expliciet vervolgverzoek, bestudering van centrale structuurdocumenten in de Kennis-vault vond plaats voor deze implementatie; er is niets in de vault gewijzigd. Vanaf de afronding verbieden de projectregels ook read-only toegang voor toekomstige agents.

## Vervolg

- In een volgende inhoudelijke sessie eerst de open school- en onderzoekseisen bevestigen.

## Pull request

- [PR #2 — docs: richt volledig PWS-documentatiestelsel in](https://github.com/geinigegastcoding/N-Lang/pull/2)
- Eerste documentatiecommit: `caecda4`.
