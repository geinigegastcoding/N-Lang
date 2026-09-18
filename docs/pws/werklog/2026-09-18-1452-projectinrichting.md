---
title: Projectinrichting voor een eigen Rust-compiler met twee backends
created: 2026-09-18
updated: 2026-09-18
type: session
status: active
tags: [pws, inrichting, rust, taalontwerp, planning]
sources: [../../../AGENTS.md, ../../../PRODUCT.md, ../onderzoekskader.md]
---

# Projectinrichting voor een eigen Rust-compiler met twee backends

## Opdracht en tijd

- Uitvoerder: Codex (`/root`), met twee door de gebruiker gevraagde Luna-subagents voor afgebakend bronnen- en bibliotheekonderzoek.
- Begin: 2026-09-18 14:52:49 +02:00, Europe/Amsterdam, rechtstreeks uit de systeemklok.
- Einde en verstreken tijd: nog niet afgerond.
- Git-basis: `2e339bbd3c7b1a7bdc628722c8ada4ef78a79ad5`, branch `codex/docs`.
- Bestaande wijzigingen: vier reeds gestagede `.idea/`-bestanden; blijven onaangeroerd.
- Opdracht bij start: documenteer en richt een Nederlandstalige taal in Rust in; leerlingen schrijven alle programmatuur zelf. Het meegeleverde JavaScript-fragment werd aanvankelijk door de hoofdagent als doeltaal opgevat. Latere expliciete verduidelijkingen hebben die interpretatie vervangen; zie hieronder.

## Beoogd resultaat en afbakening

Een bruikbaar startpunt met README-stappenplan, technische mapstructuur, bibliotheekbeleid, voorlopige taalspecificatie voor het aangeleverde voorbeeld, testaanpak en urenplanning. Geen compiler, Rust-programmacode, runtime of testimplementatie schrijven; geen dependencies installeren. Bestaand werk behouden. Tijdens de sessie heeft de gebruiker daarnaast expliciet om een PR gevraagd.

## Waarnemingen en aanpak

- `geverifieerd`: bestaande compilermappen bevatten uitsluitend `.gitkeep`; er is nog geen Cargo-manifest of Rust-bronbestand gevonden.
- `geverifieerd`: `website/src/compiler/nlang.ts` bevat een TypeScript-demo met andere syntaxis en Java-generatie (`programToJava`); deze is geen implementatie van de nieuwe Rust/JavaScript-specificatie.
- `gerapporteerd`: Nederlandstalige syntaxis en de exacte vertaling van het bewegingsvoorbeeld zijn de gewenste productrichting.
- `afgeleid`: één Cargo-package met modules onder `src/` houdt de eerste versie overzichtelijk; bestaande lege moduleplaatsen kunnen daarvoor worden verplaatst, met behoud van hun placeholders.
- De verplichte PWS-context, productcontext, websitebron en Git-status zijn geraadpleegd. De persoonlijke vault is niet benaderd.
- Eerste `create_goal`-aanroep meldde dat al een actief doel bestaat; `get_goal` bevestigde dat dit de huidige gebruikersopdracht is. Geen tweede doel gemaakt.

## Verificatieplan

Controleer de relatieve documentlinks, PWS-metadata, navigatie, samenhang tussen voorbeeld en specificatie, urenoptelling, behoud van bestaand werk en `git diff --check`. Er kan nog geen Rust-build of compilerregressietest draaien zonder implementatie.

## Verduidelijkingen en uitgevoerd werk

1. De gebruiker bevestigde 80 uur **per leerling**; de begroting is geen gerealiseerde tijd.
2. De gebruiker vroeg expliciet om een PR na afronding.
3. De gebruiker verduidelijkte dat de website buiten scope valt en koos een eigen bytecode met zelfgebouwde VM in Rust. De tijdelijke JavaScript-doelbeschrijving en referentie-output zijn uit de actuele technische documenten verwijderd; de nieuwe website-README is teruggenomen. Er is geen bestaande websitecode gewijzigd.
4. Een volgende aanvulling vroeg om WebAssembly. De hoofdagent interpreteerde dit aanvankelijk als een tweede bouwdoel voor dezelfde Rust-VM. De laatste verduidelijking wees dat af: **N-Lang zelf krijgt eigen bytecode én directe WebAssembly-uitvoer**. Alle actuele specificaties, architectuur en planning zijn daarop herzien. Eerdere Luna-werklogs tonen hun toenmalige tussenstand en zijn niet herschreven.
5. De officiële taalprojectgidsen en Wasm-documentatie zijn geraadpleegd en in het bronnenregister vastgelegd. Luna leverde structuurbronnen, bibliotheekafwegingen en een onafhankelijke documentreview.
6. De mapstructuur gebruikt één toekomstige Cargo-package en twee codegen-backends, met eigen bytecode-, VM- en runtimeplaatsen. Alleen Markdown, de concept-EBNF, het door de gebruiker aangeleverde `.nlang`-voorbeeld en placeholders zijn toegevoegd.
7. Een eerste beveiligende verplaatsingscontrole stopte omdat `.gitkeep` 34 bytes uitleg bevatte in plaats van leeg te zijn. Na inspectie zijn de bestanden mét inhoud behouden bij de verplaatsing. Geen bestand is daarvoor gewist.
8. `git fetch origin main` liet zien dat de hoofdbranch de verplaatsing naar `src/` inmiddels al bevatte, plus nieuwe leerling-/Obsidian-notities. De PR moet daarop aansluiten en dit werk behouden. Remote basis: `4f4171109919ca89de671f4744c2107385ac6ad7`.
9. Tijdens de sessie verscheen ook een gebruikerswijziging in `AGENTS.md` (repositorypad verkort). Deze wijziging en de vier eerder gestagede `.idea/`-bestanden horen niet bij deze PR.

## Review en correcties

- Luna controleerde een tussenstand waarin de begroting 81 uur telde. De VM-fase is met één begroot uur verlaagd; de actuele rekenkundige controle komt op **80**. Dit wijzigt geen gerealiseerde tijd.
- De niet door PyPA ondersteunde bibliotheekconclusie is uit bronnotitie B004 verwijderd.
- De EBNF maakt topniveaukeuze expliciet via `topniveau`; er is geen parsergenerator ingezet.
- Naamcontrole krijgt expliciet een contextschema; de runtime krijgt de bijbehorende waarden. Het precieze type-/ABI-ontwerp blijft leerlingwerk.
- De oude review bevatte één foutief relatief pad in frontmatter (`../../planning.md`); alleen dat metadata-pad is gecorrigeerd naar `../planning.md`. De historische bevindingen blijven behouden.
- De eerste linkcontrole vond een reeds bestaand accentverschil in een D002-anker uit een oudere werklog. Een expliciet compatibiliteitsanker in het besluitenregister herstelt de link zonder de oude werklog te herschrijven.
- Historische Luna-aantekeningen over JavaScript of een gedeelde Rust-VM als browserroute zijn achterhaald door PWS-D005. De eerdere vermelding dat productcontext al JavaScript beschreef, was te ruim; bij start was het bestaande websiteprototype Java-georiënteerd. Die oude notitie is geen actuele productbron.

## Omgeving en eerste controles

- Rechtstreeks gemeten: `rustc 1.96.1 (31fca3adb 2026-06-26)`, `cargo 1.96.1 (356927216 2026-06-26)`, Node `v24.14.0`.
- Eerste documentcontrole: 73 Markdownbestanden, 321 relatieve verwijzingen en 29 gewijzigde PWS-frontmattersets bekeken; alleen het hierboven genoemde oude ankerprobleem gevonden. Uren: 80. Geen `.rs` of `Cargo.toml` en geen nieuwe `.js`, `.ts`, `.wasm` of `.nlbc` gevonden.
- `git diff --check` meldde geen whitespacefouten. Git meldde wel bestaande LF/CRLF-normalisatie-informatie; dit is geen testresultaat of inhoudsfout.
- Nog te registreren: laatste controles, commit(s), PR en werkelijke eindtijd.

## Resultaat en open punten

De gevraagde opzet is inhoudelijk uitgewerkt. Implementatie, hoofd-/deelvragen, rubric, doelgroep, precieze syntaxiskeuzes, bytecodeformaat en runtime-ABI blijven expliciet open. De eindcontrole en PR-afhandeling volgen nog.
