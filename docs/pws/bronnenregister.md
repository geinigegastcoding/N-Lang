---
title: Bronnenregister N-Lang-PWS
created: 2026-09-18
updated: 2026-09-18
type: source
status: active
tags: [pws, sources, evidence]
sources: []
---

# Bronnenregister N-Lang-PWS

Registreer een bron zodra die inhoudelijk wordt gebruikt. Dit bestand ondersteunt de uiteindelijke literatuurlijst, maar vervangt correcte verwijzingen in de tekst niet.

## Werkwijze

- Geef iedere bron een stabiel ID: `B001`, `B002`, enzovoort.
- Neem volledige bibliografische gegevens over uit de bron zelf, niet alleen uit een zoekresultaat.
- Noteer waar de bron een claim, methode of ontwerpbesluit ondersteunt.
- Beoordeel actualiteit, relevantie, autoriteit, nauwkeurigheid en doel/belang.
- Controleer links, DOI’s, auteurs, data en paginanummers vóór inlevering.
- Markeer een bron als `kandidaat` totdat deze werkelijk is gelezen en gebruikt.
- Interne projectbestanden krijgen een `I`-ID en tellen niet als onafhankelijk wetenschappelijk bewijs.
- Maak voor een belangrijke of vaker gebruikte externe bron ook een kleine notitie onder [`bronnen/`](bronnen/README.md) en link die vanuit de tabel.

## Externe bronnen

| ID | Status | Volledige referentie | Type | Relevante pagina/sectie | Gebruik in PWS | Kwaliteitsbeoordeling | Geraadpleegd |
|---|---|---|---|---|---|---|---|
| B001 | geraadpleegd | Rust-project. (z.d.). *Package Layout*. [The Cargo Book](https://doc.rust-lang.org/cargo/guide/project-layout.html). [Notitie](bronnen/b001-cargo-layout.md) | Officiële gids | Package Layout | `src/`, tests en package-opzet | Primair, direct relevant; levend document, geen PWS-schaaladvies op zichzelf | 2026-09-18 |
| B002 | geraadpleegd | Rust-project. (z.d.). *The compiler source code*. [Rust Compiler Development Guide](https://rustc-dev-guide.rust-lang.org/compiler-src.html). [Notitie](bronnen/b002-rustc-workspace.md) | Officiële ontwikkelaarsgids | Workspace structure; Compiler; Tests | Compileronderdelen en schaalafweging | Primair; veel groter project dan N-Lang, geen letterlijk te kopiëren template | 2026-09-18 |
| B003 | geraadpleegd | The Go project. (z.d.). *Organizing a Go module*. [Go-documentatie](https://go.dev/doc/modules/layout). [Notitie](bronnen/b003-go-module-layout.md) | Officiële gids | Basic package; Basic command; supporting packages | Structuur laten meegroeien | Primair; andere taal en modulemodel, alleen algemene vergelijking | 2026-09-18 |
| B004 | geraadpleegd | Python Packaging Authority. (2026, 9 september; update zoals geraadpleegd). *Packaging Python Projects*. [Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/). [Notitie](bronnen/b004-python-package-layout.md) | Officiële gids | A simple project; package files; test directory | Scheiding code, metadata en tests | Primair; packagingvoorbeeld, geen compilerarchitectuur | 2026-09-18 |
| B005 | geraadpleegd | Rust-project. (z.d.). *The Rust Standard Library*. [API-documentatie](https://doc.rust-lang.org/std/). [Notitie](bronnen/b005-rust-std.md) | Officiële API | Library overview | Standaardbouwstenen voor eigen werk | Primair; levende API, onderbouwt geen pedagogisch effect | 2026-09-18 |
| B006 | geraadpleegd | Rust-project. (z.d.). *The Cargo Book* en *Keyword crate*. [Cargo](https://doc.rust-lang.org/cargo/) en [crate](https://doc.rust-lang.org/std/keyword.crate.html). [Notitie](bronnen/b006-cargo-crates.md) | Officiële documentatie | Introduction; Why Cargo Exists; crate | Begrippen package, crate en tool | Primair, direct relevant; projectbeleid blijft eigen afweging | 2026-09-18 |
| B007 | geraadpleegd | Rust-project. (z.d.). *Test Organization*; *How to Write Tests*. [Testorganisatie](https://doc.rust-lang.org/book/ch11-03-test-organization.html), [tests schrijven](https://doc.rust-lang.org/book/ch11-01-writing-tests.html). [Notitie](bronnen/b007-rust-tests.md) | Officiële handleiding | Unit/integration tests; test attributes | Eerste testaanpak | Primair; beschrijft middelen, geen bewijs dat N-Lang-tests bestaan | 2026-09-18 |
| B008 | geraadpleegd | Logos-maintainers. (z.d.). *Crate logos* (0.16.1 op geraadpleegde pagina). [API](https://docs.rs/logos/latest/logos/). [Notitie](bronnen/b008-logos-lexer.md) | Project-API | Crate description; Lexer | Afweging eigen lexer | Primair; projectbeschrijving, geen onafhankelijke vergelijking | 2026-09-18 |
| B009 | geraadpleegd | pest-project. (z.d.). *A thoughtful introduction to the pest parser*. [Handleiding](https://pest.rs/book/). [Notitie](bronnen/b009-pest-parser.md) | Projecthandleiding | Introduction; Grammars | Afweging eigen parser | Primair; parsermogelijkheden, geen leeruitkomsten | 2026-09-18 |
| B010 | geraadpleegd | Rust-project. (z.d.). *Installation*. [The Rust Programming Language](https://doc.rust-lang.org/book/ch01-01-installation.html). [Notitie](bronnen/b010-rust-installatie.md) | Officiële handleiding | Windows; Troubleshooting | Startstappen en versiecontrole | Primair; platformstappen kunnen wijzigen | 2026-09-18 |
| B012 | geraadpleegd | nom-maintainers. (z.d.). *Crate nom* (8.0.0 op geraadpleegde pagina). [API](https://docs.rs/nom/latest/nom/) | Project-API | Crate description; Parser combinators | Bibliotheekafweging | Primair; leverancier beschrijft eigen product, geschiktheid is eigen interpretatie | 2026-09-18 |
| B013 | geraadpleegd | LALRPOP-maintainers. (z.d.). *LALRPOP*. [Repository-README](https://github.com/lalrpop/lalrpop) | Primaire projectbron | README | Parsergenerator als alternatief | Actueel bij raadpleging; geen independent leereffectonderzoek | 2026-09-18 |
| B014 | geraadpleegd | SWC-project. (z.d.). *Rust-based platform for the Web*. [Projectsite](https://swc.rs/) | Primaire projectbron | Overview; Compilation | Afbakening compilerframeworks | Projectpresentatie; productclaims zijn geen vergelijkende tests | 2026-09-18 |
| B015 | geraadpleegd | LLVM-project. (z.d.). *The LLVM Compiler Infrastructure Project*. [Projectsite](https://llvm.org/) | Primaire projectbron | LLVM Overview | Afbakening backendinfrastructuur | Gezaghebbend voor eigen componenten, niet voor PWS-uren | 2026-09-18 |
| B016 | geraadpleegd | clap-maintainers. (z.d.). *Crate clap*. [API](https://docs.rs/clap/latest/clap/) | Project-API | Crate overview | Eventueel CLI-hulpmiddel | Primair; geen gekozen dependency of vastgezette versie | 2026-09-18 |
| B017 | geraadpleegd | Rust-project. (z.d.). *wasm32-unknown-unknown*. [The rustc book](https://doc.rust-lang.org/rustc/platform-support/wasm32-unknown-unknown.html). [Notitie](bronnen/b017-rust-wasm-target.md) | Officiële targetdocumentatie | Requirements; Building Rust programs | Gedeelde kern, Wasm-build en I/O-grens | Primair; targetbeperkingen expliciet, browsergedrag zelf testen | 2026-09-18 |
| B018 | geraadpleegd | wasm-bindgen-project. (z.d.). *Introduction*; *Without a Bundler*. [Guide](https://wasm-bindgen.github.io/wasm-bindgen/), [browservoorbeeld](https://wasm-bindgen.github.io/wasm-bindgen/examples/without-a-bundler.html). [Notitie](bronnen/b018-wasm-bindgen.md) | Projecthandleiding | Introduction; web target; HTTP | Gerichte bindings en minimale browserproef | Primair; levende tooling, geen dependency toegevoegd | 2026-09-18 |
| B019 | geraadpleegd | Rust-project. (z.d.). *cargo-init(1)*. [The Cargo Book](https://doc.rust-lang.org/cargo/commands/cargo-init.html) | Officiële commandoreferentie | Description; Init Options | Eenmalige initialisatie door leerlingen | Primair, precies commando; nog niet uitgevoerd in dit project | 2026-09-18 |
| B020 | geraadpleegd | Bytecode Alliance. (2026, 10 september). *wasm-encoder* (0.259.0 op geraadpleegde pagina). [Cratedocumentatie](https://docs.rs/crate/wasm-encoder/latest) | Projectdocumentatie | Crate overview | Smalle encoder als alternatief voor eigen binaire serialisatie | Primair; neemt N-Lang-semantiek niet over, geen dependency gekozen | 2026-09-18 |
| B021 | geraadpleegd | WebAssembly Community Group. (z.d.; WebAssembly 3.0 zoals geraadpleegd). *Text Format*. [Specificatie](https://webassembly.github.io/spec/core/text/) | Primaire standaard | Text Format | WAT als mogelijke tussenstap naar Wasm | Gezaghebbend formaat; assemblerkeuze en N-Lang-codegen blijven eigen afweging | 2026-09-18 |
| B022 | geraadpleegd | WebAssembly Community Group. (2026, 11 september; versie zoals geraadpleegd). *WebAssembly 3.0 — Modules*. [Binary](https://webassembly.github.io/spec/core/binary/modules.html), [syntax](https://webassembly.github.io/spec/core/syntax/modules.html). [Notitie](bronnen/b022-webassembly-modules.md) | Primaire standaard | Sections; imports; functions; exports; code | Directe Wasm-backend | Normatief formaat; geen bewijs dat alle features in elke doelbrowser werken | 2026-09-18 |

De bronnen onderbouwen technische middelen en structuur. Zij onderbouwen geen toegankelijkheidswinst of voorspelde leerlinguren. B011 is niet gebruikt: de aanvankelijk geraadpleegde ECMAScript-specificatie verviel als inhoudelijke onderbouwing na de verduidelijkte bytecode-/VM-richting.

## Interne projectbronnen

| ID | Bestand | Rol | Beperking |
|---|---|---|---|
| I001 | [`README.md`](../../README.md) | Projectrichting en startplan | Interne werkafspraak, geen onafhankelijk onderzoeksbewijs |
| I002 | [`PRODUCT.md`](../../PRODUCT.md) | Productdoelgroep, positionering en bekende open keuzes | Bevat interne en deels afgeleide productcontext |
| I003 | [`DESIGN.md`](../../DESIGN.md) | Visueel ontwerp en websiteprincipes | Onderbouwt geen algemeen effect op leerbaarheid of toegankelijkheid |
| I004 | Broncode en tests in de repository | Primair bewijs voor geïmplementeerd gedrag | Bewijst zonder gebruikersonderzoek geen toegankelijkheid of leereffect |
| I005 | [Gebruikersopdracht en verduidelijkingen](werklog/2026-09-18-1452-projectinrichting.md) | Rust, eigen bytecode/VM, native en browser, 80 uur per leerling, eigen programmeerwerk en PR-verzoek | Gerapporteerde eisen; officiële schoolrubric ontbreekt |
| I006 | [Taalvoorbeeld](../../examples/bewegen.nlang) en [specificatie](../taal/syntaxis.md) | Productrequirement en aanvullende voorstellen | Geen uitgevoerd programma of bewezen resultaat |

## Bron-ID’s gebruikt in hoofdstukken

Houd bij het schrijven bij welke bron waar wordt gebruikt:

| Bron-ID | Hoofdstuk/sectie | Ondersteunde claim | Controle voltooid |
|---|---|---|---|
| — | — | — | — |

De huidige toepassing is technische ontwerpdocumentatie: B001–B004 in [architectuur](../ontwikkeling/architectuur.md), B005–B009 en B012–B021 in [bibliotheken](../ontwikkeling/bibliotheken.md), B010/B019 in [aan de slag](../ontwikkeling/aan-de-slag.md), B017/B018 en B020–B022 in [WebAssembly](../ontwikkeling/webassembly.md). Er zijn nog geen definitieve PWS-hoofdstukken.
