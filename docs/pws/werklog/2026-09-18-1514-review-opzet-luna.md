---
title: Review van Rust-, bytecode-, VM- en Wasm-opzet
created: 2026-09-18
updated: 2026-09-18
type: session
status: complete
tags: [pws, werklog, review, rust, bytecode, vm, wasm]
sources: [../../taal/syntaxis.md, ../../taal/grammatica.ebnf, ../../ontwikkeling/architectuur.md, ../../ontwikkeling/aan-de-slag.md, ../../ontwikkeling/bytecode-en-vm.md, ../../ontwikkeling/webassembly.md, ../../ontwikkeling/bibliotheken.md, ../planning.md]
---

# Review van Rust-, bytecode-, VM- en Wasm-opzet

- **Datum:** 2026-09-18
- **Uitvoerder:** Luna-subagent
- **Categorie:** review
- **Begintijd:** 2026-09-18 15:14:56 +02:00 (Europe/Amsterdam)
- **Eindtijd:** 2026-09-18 15:18:03 +02:00 (Europe/Amsterdam)
- **Verstreken tijd:** 3 min (187 seconden; weergegeven afgerond op hele minuten)
- **Opdracht:** Controleer de actuele documentatie op tegenstrijdigheden, onjuiste Cargo/Wasm-aannames, ontbrekende eigen implementatiestappen en de 80-uursoptelling na de keuze voor een eigen Rust-compiler, eigen bytecode, eigen Rust-VM en dezelfde Rust-kern native/Wasm.
- **Afbakening:** Alleen lezen en rapporteren. Geen technische bestanden, gedeelde PWS-registers, README of besluitdocumenten gewijzigd.

## Gelezen materiaal

`README.md`, `docs/taal/syntaxis.md`, `docs/taal/grammatica.ebnf`, alle vijf bestanden onder `docs/ontwikkeling/`, `tests/README.md`, `docs/pws/planning.md` en `src/*/README.md`. Ook de verplichte PWS-autoriteits-, navigatie-, README-, onderzoeks- en voortgangsdocumenten zijn gecontroleerd.

## Bevindingen

### Hoog — planning telt 81 uur op

De afzonderlijke begrotingsregels in `docs/pws/planning.md` tellen op tot 81 uur: `6+5+7+6+9+6+7+9+7+5+6+8 = 81`, terwijl titel, gemelde eis en totaallijn 80 uur per leerling noemen. Dit is een concrete rekenkundige inconsistentie. De hoofdagent moet één fase met 1 uur aanpassen of de begroting expliciet op 81 zetten na overleg; de eis van 80 blijft leidend totdat een wijziging is bevestigd.

### Hoog — Cargo-startstap maakt de Wasm-library nog niet bouwbaar

`docs/ontwikkeling/aan-de-slag.md` laat `cargo init --bin --name n-lang .` uitvoeren. De Wasm-opzet verwacht later tegelijk een library, native binary, `cdylib`, feature `web` en de opdracht `cargo build --release --lib --target wasm32-unknown-unknown --features web` (`docs/ontwikkeling/webassembly.md`). Een binair startproject levert die library, feature en crate-type niet vanzelf. Voeg als eigen programmeerstap toe: manifest aanpassen, library- en binaire targets verbinden, platform-/feature-gating schrijven, exports definiëren en de gekozen browserverpakking versiebewust testen. De huidige tekst noemt onderdelen wel als toekomstig, maar niet als samenhangende noodzakelijke overgang van `cargo init --bin` naar deze build.

### Hoog — startcontext heeft twee tegenstrijdige API-eigenaren

`docs/taal/syntaxis.md` stelt voor dat de compiler een expliciete beschrijving van toegestane startcontextnamen krijgt om `Roelofarendsveen` en andere vrije namen te controleren. `docs/ontwikkeling/webassembly.md` zegt echter dat de compiler-API alleen brontekst ontvangt en dat de VM-API de expliciete startcontext ontvangt. Kies vóór de semantiek/API-test één contract: óf de compiler krijgt naast bron ook een symbol-/capabilityschema, óf externe namen worden uitsluitend runtime-resolutie en de naamcontrolevoorstel wordt aangepast. Zonder die keuze kunnen native en Wasm verschillende foutmomenten krijgen.

### Middel — browser-Wasm-tests hebben nog geen uitvoerbare teststap

`tests/README.md` noemt `tests/wasm/` en vereist een echte browser, maar beschrijft geen runner, bindinggeneratie, HTTP-server, browsercommando of manier waarop de testuitkomst terugkomt in de reproduceerbare log. `cargo test` alleen voert geen browserintegratietest uit. Voeg als eigen stap een minimale browserharnasprocedure toe. JavaScript-glue mag daarbij uitsluitend de Wasm-adapter laden en aanroepen; de documentatie zegt al correct dat N-Lang geen JavaScript-transpiler of JavaScript-uitvoer krijgt.

### Middel — hostcontext en bytecode-ABI zijn nog onvoldoende vastgelegd voor native/Wasm-gelijkheid

De documenten eisen dezelfde bytes, startcontext, eindwaarden en foutcodes, terwijl eigenschappen, objectreferenties en de geregistreerde methode `verplaatsen` nog door een testcontext worden geleverd. Leg vóór de acceptatietest vast hoe symbolen, object-ID's, methode-ID's, eigenschappen, ontbrekende waarden en hostfouten worden gerepresenteerd en welke volgorde deterministisch moet zijn. Dit is nodig om dezelfde bytecode in native en Wasm te kunnen uitvoeren; het betekent niet dat de VM of compiler opnieuw in JavaScript moet worden geschreven.

### Middel — B004 ondersteunt het bibliotheekadvies niet

`docs/pws/bronnen/b004-python-package-layout.md` noemt in het onderdeel `Afgeleid advies` dat de PyPA-bron een waarschuwing tegen een bibliotheekkeuze zou geven. De bron ondersteunt de scheiding van metadata, broncode en tests en bespreekt Python-buildbackends; zij ondersteunt geen Rust-afhankelijkheidsbeleid en waarschuwt niet tegen libraries. De zin moet worden verwijderd of uitsluitend als eigen projectbesluit worden geformuleerd. Hetzelfde onderscheid geldt voor de verwijzing naar B004 in `docs/ontwikkeling/bibliotheken.md`/`architectuur.md`: B004 mag de projectindeling onderbouwen, niet de keuze om compiler en VM zelf te schrijven.

## Wat geen probleem bleek

De gelezen teksten zijn inhoudelijk consistent over de kern: N-Lang compileert naar eigen bytecode, een zelfgeschreven Rust-VM voert die uit, en dezelfde Rust-kern wordt native en via WebAssembly gebruikt. De JavaScript-verwijzingen gaan over browserglue of de testpagina en worden expliciet onderscheiden van N-Lang-uitvoer. `src/cli` en `src/wasm` worden als adapters beschreven en bevatten geen tweede compilerimplementatie.

## Niet uitgevoerd en open

Er is geen Cargo-build of test uitgevoerd omdat er nog geen `Cargo.toml` of Rust-broncode bestaat. De bevindingen zijn documentreview; ze bewijzen geen runtimegedrag. De hoofdagent bepaalt de concrete urenaanpassing, het compiler/startcontextcontract, het Wasm-testharnas en de correctie van de B004-notitie.

## Validatie

- `rg` gebruikt om alle relevante Cargo-, Wasm-, context- en bibliotheekverwijzingen met paden te controleren.
- De urenlijst is rekenkundig gecontroleerd met PowerShell: uitkomst `81`.
- `git status --short` gecontroleerd; bestaande gebruikerswijzigingen zijn behouden.
- Alleen deze nieuwe werklog is door deze sessie aangemaakt; technische bestanden en gedeelde registers zijn niet gewijzigd.
- De persoonlijke Kennis-vault is niet benaderd.

## Kant-en-klare logboekregel

`2026-09-18 | 15:14 | 15:18 | 3 min | Luna-subagent | review | Rust/bytecode/VM/Wasm-documentatie en 80-uursplanning gecontroleerd; zes concrete bevindingen vastgelegd, waaronder optelling 81 uur, ontbrekende Cargo-library/feature-overgang, tegenstrijdige startcontext-API, ontbrekend browserharnas en B004-correctie | docs/pws/werklog/2026-09-18-1514-review-opzet-luna.md | Relevante bestanden gelezen; uren berekend als 81; git status gecontroleerd; geen Cargo-test mogelijk zonder manifest | Hoofdagent beslist over correcties en registreert gedeeld besluit`

## Addendum na bijgestelde backendrichting

- **Bijgesteld op:** 2026-09-18 15:19:56 +02:00 (Europe/Amsterdam), na nieuwe gebruikersverduidelijking via de hoofdagent.
- **Nieuwe richting:** N-Lang krijgt twee eigen compileruitgangen: `N-Lang → eigen .nlbc → eigen VM` en `N-Lang → echte WebAssembly-instructies`. De Rust-VM naar Wasm compileren is daarmee geen vervanging voor de tweede backend. De hoofdagent herziet de architectuurdocumentatie en de mappen voor `codegen/bytecode`, `codegen/wasm`, gedeelde runtime en Wasm-uitvoer.
- **Reviewstatus:** de eerdere opmerkingen over de library-adapter als primaire Wasm-uitvoer, `src/wasm` als enige route en een browserharnas voor alleen de Rust-VM zijn door deze scopewijziging geen zelfstandige resterende bevindingen; ze zijn overgedragen aan de herziening.
- **Resterend:** de optelling van 81 uur, de B004-correctie en de semantische afspraken rond externe contextnamen blijven relevant. In `docs/taal/grammatica.ebnf` verdient `programma = { definitie | opdracht, NEWLINE }, EOF` een expliciete bespreking van de bedoelde groepering van `|` en `,`, zodat een handgeschreven parser de grens tussen definities en top-level opdrachten eenduidig implementeert. Dit is een verduidelijkingspunt, geen bewijs dat het aangeleverde voorbeeld ongeldig is.
