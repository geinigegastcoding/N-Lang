---
title: Werksessie — draagbare samenwerking
created: 2026-09-18
updated: 2026-09-18
type: session
status: active
tags: [pws, worklog, documentation, portability, collaboration]
sources: [../../../AGENTS.md, ../00-authoriteit.md, ../besluiten.md]
---

# Werksessie: draagbare samenwerking

- **Datum:** 2026-09-18
- **Uitvoerder:** Codex (hoofdagent)
- **Categorie:** beheer en schrijven
- **Begintijd:** 2026-09-18 14:59 +02:00
- **Eindtijd:** wordt bij afronding ingevuld
- **Verstreken tijd:** wordt bij afronding berekend
- **Opdracht:** maak `AGENTS.md` bruikbaar voor de projectpartner op iedere laptop of pc en dien de wijziging opnieuw als PR in.
- **Beoogd resultaat:** een machine-, besturingssysteem- en gebruikersnaam-onafhankelijke werkwijze zonder persoonlijke absolute paden.

## Beginsituatie

- De eerdere documentatie-PR #2 was al gemerged.
- `AGENTS.md` en enkele actieve PWS-documenten verwezen nog naar één specifieke Windows-gebruikersmap.
- Het officiële logboek legde `Europe/Amsterdam` vast zonder afzonderlijke tijdzonekolom.
- De gedeelde hoofdcheckout bevatte ondertussen ander, deels gestaged werk van andere bijdragers.

## Plan en afbakening

1. Werken in een geïsoleerde Git-worktree vanaf actuele `origin/main` om ander werk niet te raken.
2. De repositoryroot dynamisch definiëren en alle instructiepaden repository-relatief maken.
3. De externe-vaultgrens generiek formuleren voor iedere bijdrager en computer.
4. Regels toevoegen voor OS, shell, editor, lokale configuratie, identiteit en tijdzones.
5. Persoonlijke absolute paden uit actieve documentatie en logo-provenance verwijderen.
6. Links, metadata, portabiliteit en Git-diff controleren.
7. Een nieuwe branch pushen en een nieuwe GitHub-PR openen.

Niet binnen scope: inhoudelijke taal-, compiler-, website- of onderzoeksvragen wijzigen.

## Uitgevoerde stappen

1. Remote refs bijgewerkt en vastgesteld dat PR #2 al in `main` was gemerged.
2. Een geïsoleerde worktree vanaf `origin/main` gemaakt en branch `codex/portable-pws-docs` aangemaakt.
3. `REPO_ROOT` dynamisch gedefinieerd en vaste gebruikersnaam-, drive-, OS-, shell- en editoraannames uit `AGENTS.md` verwijderd.
4. Een onboardingvoorbeeld, samenwerkingsregels, portability-controle en repository-relatieve padregels toegevoegd.
5. De grens rond externe persoonlijke kennisbanken generiek gemaakt voor alle bijdragers en computers.
6. Het officiële logboek uitgebreid met UTC-offset en de uitvoerderidentificatie genormaliseerd naar een stabiele rolnaam.
7. De portability-afspraak vastgelegd als `PWS-D005` en ondersteunende PWS-documentatie bijgewerkt.
8. Overgebleven persoonlijke absolute paden in product- en logo-provenance vervangen door het bestaande repositorypad.
9. Diff-, pad-, link-, frontmatter- en JSON-controles uitgevoerd.

## Bevindingen en bewijs

- **Geverifieerd:** PR #2 heeft status `MERGED`; een nieuwe PR is daarom nodig.
- **Geverifieerd:** de gedeelde hoofdcheckout bevatte ongerelateerde gestagede IDE-bestanden en nieuwe projectdocumentatie.
- **Besluit:** deze wijziging wordt geïsoleerd uitgevoerd vanaf commit `4f41711` op `origin/main`.
- **Geverifieerd:** na de wijziging bevatten alle 83 getraceerde bestanden geen herkende gebruikersspecifieke absolute paden.
- **Geverifieerd:** de instructies functioneren vanuit een worktree op een andere clone-locatie dan de oorspronkelijke gedeelde checkout.

## Besluiten

- [`PWS-D005`](../besluiten.md#pws-d005--draagbare-samenwerking-vanaf-iedere-clone): dynamische repositoryroot, relatieve paden, omgevingsonafhankelijke instructies en expliciete tijdzones.

## Gewijzigde bestanden

- `AGENTS.md`: portable repositoryroot, externe-contextgrens, onboarding, tijdzone-, IDE-, branch- en padregels.
- `logboek.md`: nieuwe tijdzonekolom en draagbare uitvoerderidentificatie.
- `docs/pws/00-authoriteit.md`, `README.md`, `04-onderhoud.md` en `voortgang.md`: ondersteunende grens-, scan- en statusregels.
- `docs/pws/besluiten.md`: bestaand vaultbesluit gegeneraliseerd en `PWS-D005` toegevoegd.
- `docs/pws/werklog/README.md`: lokale tijd met numerieke UTC-offset.
- `docs/pws/werklog/2026-09-18-1430-pws-documentatiestelsel.md`: besluitlink en uitvoerderrol administratief genormaliseerd.
- `PRODUCT.md`, `.impeccable/prompts/logo-origin.txt` en `website/public/assets/n-lang-logo.webp.json`: absolute logoherkomst vervangen door het repositorybestand.
- `docs/pws/werklog/2026-09-18-1459-portable-samenwerking.md`: dit sessieverslag.

## Validatie

- `git diff --cached --check`: geslaagd.
- Portability-scan over 83 getraceerde bestanden: geen herkende Windows-gebruikerspaden, macOS-/Linux-homepaden of lokale-accountpaden.
- Relatieve-linkcontrole over 11 gewijzigde Markdownbestanden: geslaagd.
- Frontmattercontrole over 8 gewijzigde PWS-documenten: alle verplichte velden aanwezig.
- `ConvertFrom-Json` op `website/public/assets/n-lang-logo.webp.json`: geslaagd.
- Staged-bestandscontrole: alleen de 13 hierboven beschreven portability-bestanden zijn opgenomen.
- Geen producttests uitgevoerd: alleen instructies, documentatie, logadministratie en tekstuele assetmetadata zijn gewijzigd.

## Problemen, beperkingen en risico's

- Het werk in de oorspronkelijke checkout hoort bij andere bijdragers en wordt niet in deze branch opgenomen.
- Historische verwijzingen naar de vroegere vaultanalyse blijven als procesgeschiedenis staan, maar bevatten geen lokaal absoluut pad en zijn geen operationele instructie.

## Vervolg

- Wijzigingen committen, branch pushen en als nieuwe PR tegen `main` indienen.
