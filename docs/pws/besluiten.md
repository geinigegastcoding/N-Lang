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

<a id="pws-d002--één-officieel-logboek-met-gedetailleerde-sessieverslagen"></a>

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

## PWS-D005 — Eigen Rust-compiler met bytecode- en Wasm-backend

- **Datum:** 2026-09-18.
- **Status:** aangenomen.
- **Eigenaar:** gebruiker; vastgelegd door Codex.
- **Context:** na het aanvankelijke vergelijkingsfragment verduidelijkte de gebruiker: geen JavaScript-target; eigen bytecode en eigen VM; daarnaast moet N-Lang zelf WebAssembly genereren. Een Rust-VM naar Wasm bouwen alleen voldoet expliciet niet.
- **Besluit:** leerlingen bouwen compiler en VM in Rust. De gedeelde frontend krijgt twee eigen codegen-backends: `.nlbc` voor de eigen VM en `.wasm` met rechtstreeks gegenereerde Wasm-instructies voor de browser.
- **Alternatieven:** JavaScript-transpiler; directe native-machinecodebackend; alleen een Rust-VM naar Wasm bouwen; eigen bytecode met uitsluitend native VM.
- **Onderbouwing/bewijs:** laatste expliciete gebruikersverduidelijking in [de sessie](werklog/2026-09-18-1452-projectinrichting.md); het [Wasm-moduleformaat](bronnen/b022-webassembly-modules.md) bepaalt het tweede uitvoerformaat. Ontwerp en haalbaarheid moeten nog door implementatie worden bewezen.
- **Gevolgen:** twee backendmappen en gedeelde runtimeafspraken; beide targets krijgen dezelfde kleine taalset. De website is buiten scope. Het vroegere JavaScript-fragment is alleen gedragsillustratie.
- **Vervolgactie:** leerlingen ontwerpen eigen instructies/waarden en Wasm-lowering, leggen de runtimegrens vast en vergelijken het gedrag van beide uitvoerformaten.
- **Vervangt/vervangen door:** verduidelijkt de eerdere open doeltaal in `PRODUCT.md`; geen eerdere formele compilerkeuze aanwezig.

## PWS-D006 — Eén Cargo-package met eigen compileronderdelen

- **Datum:** 2026-09-18.
- **Status:** aangenomen als inrichtingskeuze binnen de opdracht.
- **Eigenaar:** Codex, namens de gevraagde projectinrichting; implementatie bij de leerlingen.
- **Context:** de bestaande moduleplaatsen bevatten alleen placeholders; de leerlingen willen zelf programmeren en geen bibliotheken die de kern overnemen.
- **Besluit:** gebruik `src/` met aparte modules binnen één toekomstige Cargo-package. Richt lexer, AST, parser, semantiek, twee codegen-backends, bytecode, VM, runtime, diagnostiek, compiler en CLI in. Voeg nu alleen documentatie en placeholders toe.
- **Alternatieven:** veel crates in een workspace; losse rootmodules met aangepaste modulepaden; één groot implementatiebestand.
- **Onderbouwing/bewijs:** [Cargo-indeling](bronnen/b001-cargo-layout.md), [Rust-compilerstructuur](bronnen/b002-rustc-workspace.md) en de gerapporteerde leerdoelen. De keuze voor deze schaal is `afgeleid`.
- **Gevolgen:** nog geen manifest, Rust-code of dependencies. De kern begint met `std` en ingebouwde tests. Een smalle Wasm-encoder of assembler blijft een optie voor het binaire formaat; beide codegeneratoren blijven eigen werk. Zie [bibliotheekbeleid](../ontwikkeling/bibliotheken.md).
- **Vervolgactie:** leerlingen initialiseren Cargo, ontwerpen gedeelde types en bouwen eerst één kleine complete route.
- **Vervangt/vervangen door:** niet van toepassing; sluit aan bij de bestaande verplaatsing naar `src/` op `main`.

## PWS-D007 — Begroting van 80 uur per leerling en voorstellen herkenbaar houden

- **Datum:** 2026-09-18.
- **Status:** aangenomen voor de registratie; urenverdeling blijft voorstel.
- **Eigenaar:** gebruiker voor de eis; Codex voor de planningsuitwerking.
- **Context:** de gebruiker verduidelijkte dat 80 uur per leerling geldt; schoolrubric en teamgrootte ontbreken.
- **Besluit:** plan 80 persoonsuren per leerling, inclusief onderzoek, technische bouw, validatie en verslag. Registreer alleen echt gewerkte tijd, per uitvoerder. Agenturen tellen niet als leerlinguren.
- **Alternatieven:** 80 uur voor het hele team; uren vooraf als voltooid boeken; alleen programmeertijd begroten.
- **Onderbouwing/bewijs:** gebruikersantwoord en de registratieafspraken in `AGENTS.md`; de verdeling zelf is geen gemeten haalbaarheid.
- **Gevolgen:** [planning](planning.md) is een concept. Aanvullende taalregels, bytecode en CLI zijn ook voorstellen; het aangeleverde voorbeeld blijft de basis.
- **Vervolgactie:** verdeling en methode met leerlingen/begeleider bespreken; aanpassen op basis van echt tempo en deadline.
- **Vervangt/vervangen door:** niet van toepassing.
