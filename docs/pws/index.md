---
title: Index PWS-dossier N-Lang
created: 2026-09-18
updated: 2026-11-06
type: system
status: active
tags: [pws, index, navigation]
sources: []
---

# Index PWS-dossier N-Lang

> Canonieke navigatie voor het lokale N-Lang-PWS-dossier. Laatst inhoudelijk bijgewerkt: 2026-11-06.

## Systeem

- [`00-authoriteit.md`](00-authoriteit.md) — bronvolgorde, bewijsstatussen en harde grenzen.
- [`01-navigatie.md`](01-navigatie.md) — uitleg van domeinen, registers en mappen.
- [`02-vastleg-gids.md`](02-vastleg-gids.md) — hoe nieuwe informatie duurzaam wordt vastgelegd.
- [`03-werkwijze.md`](03-werkwijze.md) — vaste cyclus voor lezen, werken, controleren en overdragen.
- [`04-onderhoud.md`](04-onderhoud.md) — periodieke audit, archivering en kwaliteitsregels.
- [`README.md`](README.md) — korte ingang en projectuitleg.
- [`AGENTS.md`](../../AGENTS.md) — bindende instructies voor alle agents in de repository.

## Onderzoek

- [`onderzoekskader.md`](onderzoekskader.md) — schoolvoorwaarden, vragen, scope, begrippen en methode.
- [`planning.md`](planning.md) — begroting van 80 uur per leerling, mijlpalen en taakverdeling.
- [`bronnenregister.md`](bronnenregister.md) — centrale lijst van externe en interne bronnen.
- [`bronnen/`](bronnen/README.md) — duurzame notities per belangrijke bron.
- `hoofdstukken/` — conceptteksten; aanmaken zodra er echte hoofdstukinhoud is.
- `data/` — geanonimiseerde data en reproduceerbare analyses; aanmaken wanneer nodig.
- `bijlagen/` — aanvullende instrumenten, figuren en technische details; aanmaken wanneer nodig.

## Projectbesturing

- [`voortgang.md`](voortgang.md) — actuele status, blokkades en volgende acties.
- [`besluiten.md`](besluiten.md) — aangenomen, vervangen en ingetrokken keuzes.
- [`logboek.md`](../../logboek.md) — officiële tijd- en activiteitenregistratie.
- [`werklog/`](werklog/README.md) — uitgebreide, gedateerde sessieverslagen.
- [Review en integratie van portable duo-workflow en website-dependencies](werklog/2026-10-30-1622-duo-workflow-integration.md) — review, integratie en validatie voor afzonderlijke clones.
- [Synchronisatie tussen twee clones](werklog/2026-10-30-1654-duo-clone-sync.md) — veilige fast-forward-updates en hervatten van een bestaande taakbranch op een tweede apparaat.
- [Daniëls gemelde start van de lexer](werklog/2026-10-31-onbekend-lexer-start.md) — één uur gerapporteerd; exacte uitvoerdatum en tijden onbekend.
- [Registratie van de lexerstart](werklog/2026-10-31-0002-logboek-lexerstart.md) — logboek- en documentatiestatus bijgewerkt.
- [Publicatie van de onvoltooide Rust-lexerproef](werklog/2026-11-01-2351-lexer-package-publication.md) — crate gecommit en gepusht; PR #9 staat open, validatie blijft nog nodig.
- [Controle van de lexer-handoff](werklog/2026-11-02-0004-lexer-handoff-verification.md) — bevestigt de overdrachtstatus en volgende validatiestap.
- [Validatie van de gepubliceerde lexer-crate](werklog/2026-11-02-0041-lexer-validation.md) — PR #9 is gemerged; de Cargo-testbuild slaagt maar bevat nog nul tests.
- [Website-dependencies bijwerken](werklog/2026-11-02-2242-website-dependency-update.md) — drie pakketversies binnen de bestaande manifest-ranges bijgewerkt; npm-update slaagde, verdere validatie niet uitgevoerd.
- [Lexerupdates voorbereiden voor PR en merge](werklog/2026-11-06-2021-lexer-pr.md) — updates klaargemaakt met buildvalidatie; tokenisatie blijft zonder tests.

## Vastleggen en bewaren

- [`inbox/`](inbox/README.md) — tijdelijke opvang van nog niet geclassificeerde informatie.
- [`voorbeelden/`](voorbeelden/README.md) — vormvoorbeelden; nooit als echt bewijs gebruiken.
- [`archief/`](archief/README.md) — vervangen context die voor auditbaarheid behouden blijft.

## Productcontext

- [`README.md` in de repositoryroot](../../README.md) — actueel projectdoel en concreet stappenplan.
- [`PRODUCT.md`](../../PRODUCT.md) — productdoel, doelgroep en open keuzes.
- [`DESIGN.md`](../../DESIGN.md) — visueel ontwerp voor de website.
- De broncode en tests in de repository — gezaghebbend voor het werkelijk geïmplementeerde gedrag.

## Technische opzet

- [Documentatie-ingang](../README.md).
- [Taalontwerp](../taal/README.md), [syntaxis en betekenis](../taal/syntaxis.md), [conceptgrammatica](../taal/grammatica.ebnf).
- [Beginnen met Rust](../ontwikkeling/aan-de-slag.md), [architectuur](../ontwikkeling/architectuur.md) en [bibliotheken](../ontwikkeling/bibliotheken.md).
- [Eigen bytecode en VM](../ontwikkeling/bytecode-en-vm.md) en [rechtstreekse Wasm-backend](../ontwikkeling/webassembly.md).
- [Rust-modulekaart](../../src/README.md), [testplan](../../tests/README.md), [taalvoorbeeld](../../examples/README.md) en [browserproef](../../browser/README.md).

De technische documenten beschrijven nog te bouwen onderdelen. Zij zijn geen vervanging voor de open onderzoeksvragen of echte testresultaten.

## Behouden leerlingnotities

- [Oorspronkelijke syntaxisideeën](Ideeen.md) — bestaand idee op de hoofdbranch; de nieuwste expliciete taalopdracht gaat voor.
- [Leerlingnotitie van 18 september](<Logboek Maarten/18-09-2026.md>) — bestaande persoonlijke procesnotitie, ongewijzigd behouden. Het centrale [logboek](../../logboek.md) blijft de officiële registratie.

## Navigatieregel

Een duurzame notitie is pas volledig opgenomen wanneer zij vanaf deze index of een direct gelinkte themapagina vindbaar is. Tijdelijke inboxnotities zijn de enige uitzondering en moeten de status `needs-review` dragen.
