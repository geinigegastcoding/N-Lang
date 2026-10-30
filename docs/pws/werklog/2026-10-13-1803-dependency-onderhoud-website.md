---
title: Werksessie — dependencyonderhoud website
created: 2026-10-13
updated: 2026-10-30
type: session
status: complete
tags: [pws, worklog, dependencies, website]
sources: [https://motion.dev/docs/react-upgrade-guide, ../../../website/package.json]
---

# Werksessie: dependencyonderhoud website

- Datum: 2026-10-13
- Uitvoerder: Codex (hoofdagent)
- Categorie: beheer en ontwikkeling
- Begintijd: 2026-10-13 18:03 +02:00
- Eindtijd: 2026-10-13 18:15 +02:00
- Verstreken tijd: 12 min
- Opdracht: werk op gebruikersverzoek verouderde dependencies in alle GitHub-checkouts bij, inclusief major upgrades.
- Beoogd resultaat: werk de achterstallige dependencies van het N-Lang-websitepakket bij en controleer dat het pakket nog bouwt.

## Beginsituatie

`website/package.json` stond op Motion 13.2.0, Vite 8.3.0 en `@vitejs/plugin-react` 6.1.1. `npm outdated --json` meldde Motion 14.2.0 als nieuwste versie, Vite 8.3.4 en plugin-react 6.1.2. Vier reeds gestagede `.idea/`-bestanden en een gebruikerswijziging in `AGENTS.md` waren aanwezig; die zijn behouden.

## Plan en afbakening

Werk alleen de verouderde websitepackages bij. Controleer de officiële Motion-handleiding voor de major upgrade. Bouw de website en controleer npm-audit en package freshness. Wijzig geen compiler-, taal- of onderzoeksfunctionaliteit.

## Uitgevoerde stappen

1. `npm outdated --json` uitgevoerd om directe outdated packages te bepalen.
2. De officiële [Motion for React upgrade guide](https://motion.dev/docs/react-upgrade-guide) geraadpleegd; de handleiding vermeldt geen breaking changes voor Motion 14.
3. Motion naar 14.2.0, Vite naar 8.3.4 en `@vitejs/plugin-react` naar 6.1.2 bijgewerkt; npm vernieuwde 12 pakketten.
4. De build, audit en outdated-controle uitgevoerd.

## Bevindingen en bewijs

- `npm run build` slaagde (`tsc -b && vite build`).
- `npm outdated --json` gaf `{}` terug.
- `npm install` meldde 0 kwetsbaarheden.
- De wijziging raakt alleen het aparte websitepakket; dit bewijst geen technische werking of toegankelijkheidswinst van de toekomstige compiler.

## Besluiten

- Geen PWS-productbesluit. De upgrade is algemeen websiteonderhoud op gebruikersverzoek.

## Gewijzigde bestanden

- `website/package.json`: directe versies van Motion, Vite en plugin-react bijgewerkt.
- `website/package-lock.json`: lockbestand vernieuwd.
- `docs/pws/bronnenregister.md`: officiële upgradehandleiding als B023 geregistreerd; expliciet als niet-PWS-bron gemarkeerd.
- `docs/pws/voortgang.md`, `docs/pws/werklog/README.md` en `logboek.md`: huidige onderhoudsstatus en sessie vastgelegd.
- `docs/pws/werklog/2026-10-13-1803-dependency-onderhoud-website.md`: bewijs en controles vastgelegd.

## Validatie

- `npm run build`: geslaagd.
- `npm outdated --json`: leeg object, geen outdated packages.
- npm audit: 0 kwetsbaarheden gemeld tijdens `npm install`.

## Problemen, beperkingen en risico's

Geen build- of dependencyresolutiefouten aangetroffen. Deze sessie wijzigde alleen de website-tooling en dependencies; de N-Lang-compiler blijft niet geïmplementeerd.

## Vervolg

Geen N-Lang-PWS-vervolg door deze dependencywijziging. Leerlingen blijven verantwoordelijk voor de compilerimplementatie en technische tests.
