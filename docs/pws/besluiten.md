---
title: Besluitenregister N-Lang-PWS
created: 2026-09-18
updated: 2026-09-18
type: decision
status: active
tags: [pws, decisions, governance]
sources: [../../AGENTS.md]
---

# Besluitenregister N-Lang-PWS

Dit register bevat keuzes met blijvende invloed op onderzoek, product, planning of verantwoording. Nieuwe besluiten worden onderaan toegevoegd. Een oud besluit wordt niet verwijderd: markeer het als `vervangen` of `ingetrokken` en link het opvolgende besluit.

## Sjabloon

```markdown
## PWS-Dxxx — Korte titel

- Datum: YYYY-MM-DD
- Status: voorgesteld | aangenomen | vervangen | ingetrokken
- Eigenaar: naam/agent
- Context:
- Besluit:
- Alternatieven:
- Onderbouwing/bewijs:
- Gevolgen:
- Vervolgactie:
- Vervangt/vervangen door: niet van toepassing
```

## PWS-D001 — Zelfstandig PWS-dossier binnen de repository

- **Datum:** 2026-09-18
- **Status:** aangenomen
- **Eigenaar:** gebruiker; vastgelegd door Codex
- **Context:** agents moeten hun werkstappen en aanpassingen duurzaam en navigeerbaar bewaren, zonder de persoonlijke context-vault te gebruiken.
- **Besluit:** PWS-context wordt uitsluitend lokaal opgeslagen onder `docs/pws/`, met vaste bestanden voor onderzoekskader, voortgang, besluiten, bronnen en sessieverslagen.
- **Alternatieven:** losse notities; documentatie in de persoonlijke vault; uitsluitend Git-commitgeschiedenis.
- **Onderbouwing/bewijs:** expliciete gebruikersopdracht; losse notities of alleen commits registreren geen onderzoeksoverwegingen en tijdsbesteding volledig.
- **Gevolgen:** iedere inhoudelijke taak omvat een documentatie-update; agents mogen de persoonlijke vault niet benaderen.
- **Vervolgactie:** structuur bij iedere volgende sessie consequent gebruiken.
- **Vervangt/vervangen door:** niet van toepassing.

## PWS-D002 — Eén officieel logboek met gedetailleerde sessieverslagen

- **Datum:** 2026-09-18
- **Status:** aangenomen
- **Eigenaar:** gebruiker; vastgelegd door Codex
- **Context:** het PWS vereist tijdsbesteding en werkzaamheden, terwijl uitgebreide technische details een hoofdtabel onleesbaar zouden maken.
- **Besluit:** `logboek.md` in de repositoryroot is de enige officiële tijdregistratie. Iedere niet-triviale sessie linkt naar één detailbestand onder `docs/pws/werklog/`.
- **Alternatieven:** één zeer uitgebreid logboek; alleen losse sessiebestanden; logs per agent.
- **Onderbouwing/bewijs:** een compacte tabel geeft beoordelaars overzicht; detailbestanden behouden reproduceerbaarheid en besliscontext.
- **Gevolgen:** agents moeten beide niveaus afronden en mogen geen concurrerende logboeken maken.
- **Vervolgactie:** na iedere sessie begin, einde, duur, resultaat en validatie registreren.
- **Vervangt/vervangen door:** niet van toepassing.

## PWS-D003 — Persoonlijke Kennis-vault volledig buiten scope

- **Datum:** 2026-09-18
- **Status:** aangenomen
- **Eigenaar:** gebruiker; vastgelegd door Codex
- **Context:** de gebruiker wil de organisatorische aanpak lokaal weerspiegelen, maar verbiedt agents in de persoonlijke vault te werken of die te betreden.
- **Besluit:** `C:\Users\Daniël\Desktop\Codex\Kennis` mag door agents niet worden geopend, gelezen, doorzocht, gewijzigd of als invoer/uitvoer gebruikt.
- **Alternatieven:** read-only toegang; synchronisatie; rechtstreekse notities in de vault.
- **Onderbouwing/bewijs:** expliciete gebruikersopdracht en duidelijke scheiding tussen privékennis en projectdossier.
- **Gevolgen:** ontbrekende vaultinformatie moet door de gebruiker bewust in het project of gesprek worden aangeleverd.
- **Vervolgactie:** grens handhaven in iedere werksessie.
- **Vervangt/vervangen door:** niet van toepassing.

## PWS-D004 — Vijf vaste systeemlagen en uniforme metadata

- **Datum:** 2026-09-18
- **Status:** aangenomen
- **Eigenaar:** gebruiker; vastgelegd door Codex
- **Context:** de gebruiker wil de bewezen ordeningswijze van zijn context-vault herkennen in het N-Lang-dossier, met concrete uitleg en voorbeelden in `docs/`.
- **Besluit:** het PWS-dossier gebruikt genummerde pagina's voor autoriteit, navigatie, vastleggen, werkwijze en onderhoud. Duurzame notities krijgen uniforme frontmatter; afzonderlijke mappen bevatten inboxitems, bronnotities, voorbeelden en archiefstukken.
- **Alternatieven:** alle regels uitsluitend in `AGENTS.md`; een platte map zonder metadata; directe technische koppeling met de persoonlijke vault.
- **Onderbouwing/bewijs:** het vijfdelige patroon scheidt vertrouwen, vindbaarheid, invoer, uitvoering en kwaliteitsbeheer. De repository blijft daardoor zelfstandig en controleerbaar.
- **Gevolgen:** nieuwe duurzame documenten moeten metadata en een navigatielink krijgen; voorbeeldinhoud blijft expliciet niet-gezaghebbend.
- **Vervolgactie:** de structuur bij mijlpalen controleren volgens `04-onderhoud.md`.
- **Vervangt/vervangen door:** niet van toepassing.
