---
title: Voortgang N-Lang-PWS
created: 2026-09-18
updated: 2026-11-06
type: status
status: active
tags: [pws, status, planning]
sources: [onderzoekskader.md, besluiten.md, planning.md, ../../README.md]
---

# Voortgang N-Lang-PWS

- **Momentopname:** 2026-11-06.
- **Fase:** taal-/compilerontwerp; Daniël meldt dat de lexerimplementatie is gestart (1 uur gerapporteerd).
- **Productrichting:** compiler in Rust met twee eigen backends: eigen bytecode voor een eigen Rust-VM, en rechtstreeks gegenereerde WebAssembly voor de browser.
- **Documentatiestatus:** startplan en structuur ingericht; aanvullende taal-/bytecode-/runtimekeuzes zijn concepten.

Historie staat in [logboek](../../logboek.md) en [werklog](werklog/README.md).

## Afgerond

- Bestaand PWS-dossier, logboek en werkafspraken behouden.
- [README](../../README.md) met concreet startpunt en mijlpalen.
- [Modulemappen](../../src/README.md), twee codegen-backends, bytecode, VM, runtime, testplaatsen en minimale browserproef ingericht.
- [Bibliotheekbeleid](../ontwikkeling/bibliotheken.md): kern zelf bouwen; alleen gerichte hulp voor algemene infrastructuur of Wasm-encoding overwegen.
- [Taalvoorbeeld en conceptgrammatica](../taal/README.md), argumentbinding en foutgevallen beschreven.
- [Architectuur](../ontwikkeling/architectuur.md), [bytecode/VM](../ontwikkeling/bytecode-en-vm.md), [directe Wasm-backend](../ontwikkeling/webassembly.md) en [testplan](../../tests/README.md) uitgewerkt.
- [Planning](planning.md) met een begroting van 80 uur per leerling.
- Officiële Rust-, taalstructuur- en Wasm-bronnen in het [bronnenregister](bronnenregister.md) vastgelegd.
- Luna-subagents ingezet voor afgebakend brononderzoek, bibliotheekdocumentatie en review; bijdragen staan apart in het logboek.
- De agentwerkwijze gebruikt een Git-afgeleide `REPO_ROOT` en repository-relatieve paden, zodat beide partners vanaf afzonderlijke clones kunnen werken. Persoonlijke context-vaults buiten de repository blijven verboden.
- De Git-werkwijze beschrijft hoe iedere clone `main` fast-forward bijwerkt, een unieke taakbranch maakt en dezelfde remote branch veilig op een tweede apparaat hervat.
- Logboek- en sessietijden gebruiken voor beide partners `Europe/Amsterdam`, ongeacht de apparaatinstelling.

## Separaat websiteonderhoud

- Op 2026-10-13 zijn op gebruikersverzoek de N-Lang-websitepakketten Motion (`13.2.0` → `14.2.0`), Vite (`8.3.0` → `8.3.4`) en `@vitejs/plugin-react` (`6.1.1` → `6.1.2`) bijgewerkt. De productiebuild slaagde; `npm outdated` toonde geen achterstallige pakketten en `npm audit` vond geen kwetsbaarheden. Dit was algemeen dependencyonderhoud buiten de PWS-productscope en voegde geen compilerfunctie of onderzoeksbewijs toe. Zie het [werksessieverslag](werklog/2026-10-13-1803-dependency-onderhoud-website.md).
- Op 2026-10-30 zijn de branch-updates verder bijgewerkt naar Motion `14.9.0`, Vite `8.3.5` en React/React DOM `19.3.1`; `@vitejs/plugin-react` blijft `6.1.2`. De productiebuild slaagde, `npm audit` vond nul kwetsbaarheden en `npm outdated` was leeg. Dit is websiteonderhoud buiten de PWS-productscope; zie het [integratieverslag](werklog/2026-10-30-1622-duo-workflow-integration.md).
- Op 2026-11-02 zijn binnen de bestaande manifest-ranges `@vitejs/plugin-react` (`6.1.2` → `6.2.1`), PostCSS (`8.5.30` → `8.5.32`) en `tslib` (`2.8.1` → `2.9.1`) bijgewerkt. `npm update --no-audit --no-fund` eindigde met exitcode 0; build, audit en tests zijn niet uitgevoerd. Dit onderhoud staat los van de PWS-productscope; zie het [werksessieverslag](werklog/2026-11-02-2242-website-dependency-update.md).

## Implementatie in uitvoering

Daniël meldde op 2026-10-31 één uur te hebben besteed aan het starten van de lexer; de exacte uitvoerdatum en begin-/eindtijd zijn niet opgegeven. Bij registratie bevatte `src/lexer/lexer.rs` een onvolledige `Token`-enum en `lex`-stub en was het bestand nog niet door Git gevolgd. Sindsdien staat er een losse Cargo-proef in `src/lexer/lexer/`, met een onvoltooide lexer in `src/lexer/lexer/src/main.rs`. De gedeelde compiler, bytecodeformaat, VM, Wasm-generator, browserharnas en geautomatiseerde compilertests zijn nog niet geïmplementeerd. Zie het [sessieverslag](werklog/2026-10-31-onbekend-lexer-start.md).

Op 2026-11-06 is de lexerproef verder aangepast. `cargo test --offline --manifest-path src/lexer/lexer/Cargo.toml` eindigde met exitcode 0, maar voerde nul tests uit en gaf negen compilerwaarschuwingen. Dit bevestigt alleen dat de crate bouwt; correcte tokenisatie is niet getest. Zie het [PR-sessieverslag](werklog/2026-11-06-2021-lexer-pr.md).

## Eerstvolgende acties voor leerlingen

De onvoltooide crate is op 2026-11-01 als commit `9120b0a` gepusht naar branch `codex/publish-lexer-2026-11-01`. [PR #9](https://github.com/geinigegastcoding/N-Lang/pull/9) is op 2026-11-02 gemerged in `main` als `c8fe87b`. De Cargo-build slaagde toen, voerde nul tests uit en gaf zeven compilerwaarschuwingen; zie het [validatieverslag](werklog/2026-11-02-0041-lexer-validation.md). De bijgewerkte code bouwt op 2026-11-06 ook, maar heeft nog steeds geen tokenisatietests.

1. Bespreek de aanvullende syntaxisvoorstellen, het contextschema en de kleinste gedeelde taalset.
2. Vul schoolrubric, deadline, doelgroep en definitieve hoofd-/deelvragen aan.
3. Voeg gerichte tests toe aan de bestaande Cargo-crate voor geldige tokens, ongeldige tekens en randgevallen.
4. Bouw één toewijzing via de volledige eigen-bytecode-/VM-route.
5. Laat vroeg een kleine rechtstreeks gegenereerde Wasm-module in een browser draaien.
6. Ontwerp de gedeelde waarde-/objectafspraken en breid beide backends uit tot het voorbeeld.
7. Voer technische tests uit en maak vóór deelnemersmetingen een passend evaluatieplan.

## Open keuzes en risico's

- Officiële rubric, auteurs/teamgrootte, begeleider, deadline en AI-regels ontbreken nog.
- Hoofdvraag, doelgroep, metingen en succescriteria zijn niet bevestigd.
- Getal-/naambereik, gemengde argumentregels, bytecodeformaat en runtime-ABI zijn voorstellen.
- Twee backends en een eigen VM zijn ambitieus. De 80-uursverdeling is een begroting, geen gegarandeerde doorlooptijd.
- Extra taalconstructies en optimalisaties kunnen wachten; beide gevraagde uitvoerdoelen behoren tot de kernscope.
- De bestaande website is buiten deze opdracht gehouden.

## Laatste overdracht

De leerlingen kunnen beginnen bij de README en de eerste kleine Rust-test. De documentatie houdt technische werking, onderzoeksclaims en werkelijk bestede leerlinguren gescheiden. PR #3 werd gesloten zonder merge; de herbeoordeelde draagbare samenwerkingsregels zijn als besluit `PWS-D008` opgenomen en via [PR #6](https://github.com/geinigegastcoding/N-Lang/pull/6) in `main` gemerged.

De website-dependencyupdate in PR #6 staat los van de PWS-productscope. De productiebuild en dependencycontroles slaagden. De oorspronkelijke opzet staat in [PR #4](https://github.com/geinigegastcoding/N-Lang/pull/4); de compiler en beide backends zijn uitdrukkelijk nog leerlingwerk. Zie het [integratieverslag](werklog/2026-10-30-1622-duo-workflow-integration.md) voor de branchreview, validatie en beperkingen.
