---
title: Bibliotheken en hulpmiddelen voor de eerste N-Lang-versie
created: 2026-09-18
updated: 2026-09-18
type: system
status: draft
tags: [n-lang, rust, bibliotheken, compiler, scope]
sources: [../pws/bronnenregister.md, webassembly.md]
---

# Bibliotheken en hulpmiddelen voor de eerste N-Lang-versie

N-Lang wordt opgezet als een eigen compiler in Rust die zelf `.nlbc`-bytecode én WebAssembly (`.wasm`) genereert. De `.nlbc`-uitvoer draait in een zelfgebouwde Rust-VM; `.wasm` krijgt een eigen browserruntime. Lexer, parser en semantiek worden gedeeld, met twee eigen backends: `src/codegen/bytecode/` en `src/codegen/wasm/`. `src/runtime/` bevat gedeelde waarden, objecten en methodecontext. Er komt geen JavaScript-output voor N-Lang. De planning rekent met **80 uur per leerling**. Weinig externe bibliotheken gebruiken is daarom een leerkeuze, geen oordeel dat goede libraries slecht zijn.

## Begrippen

Een **library** is herbruikbare code met een publieke interface. Een **module** is een organisatorische eenheid binnen een crate; een module is dus niet automatisch een library. Een Rust-**crate** is een compilatie-eenheid en kan een library-crate of een binary-crate zijn. Cargo beheert packages en dependencies, maar geeft geen betekenis aan N-Lang. Rusts `std` is de standaardbibliotheek met algemene bouwstenen.

Een **N-Lang-library** is later eventueel code die N-Lang-gebruikers aanroepen. Een **runtime** is code die tijdens de uitvoering nodig blijft; hier zijn dat de eigen waarden/objecten in `src/runtime/`, de Rust-VM voor `.nlbc` en de browserruntime voor `.wasm`. Een **tool** ondersteunt ontwikkeling of uitvoering, zoals Cargo, `cargo test` of de native CLI.

## Startkeuze en eigen werk

De eerste Rust-versie gebruikt voor de kern alleen Rust, `std`, Cargo en ingebouwde tests (`#[test]`, assertions, unit-, integratie- en doc-tests). Rusts documentatie beschrijft deze testvormen en `cargo test` ([B005–B007](../pws/bronnenregister.md)); een extra testframework is niet nodig. `wasm-bindgen` kan later optioneel helpen bij de Rust-runtime/browsercontext of een browsercompiler, maar is niet de N-Lang-Wasm-backend ([B017–B018](../pws/bronnenregister.md)).

| Onderdeel | Zelf bouwen in de eerste versie |
|---|---|
| Lexer | Handgeschreven omzetting van bron­tekst naar tokens, met posities en fouten. |
| Parser | Handgeschreven recursive-descent parser met een expliciete, kleine grammatica. |
| AST | Eigen types voor programmaonderdelen en bronposities. |
| Semantiek | Eigen controles voor namen, scopes en argumentbinding; verdere regels blijven afhankelijk van de nog vast te leggen taalomvang. |
| Codegeneratie | Twee eigen backends: AST en semantiek naar `.nlbc`-bytecode én naar `.wasm`. |
| Encoder/decoder | Eigen bytecodeformaat, encoder en decoder voor `.nlbc`; de Wasm-backend schrijft zelf de module. |
| Runtime en VM | `src/runtime/` met gedeelde waarden, objecten en methodecontext; zelfgebouwde Rust-VM voor `.nlbc` en browserruntime voor `.wasm`. |
| Diagnostiek | Eigen fouttypen, locaties en begrijpelijke Nederlandstalige meldingen. |
| Uitvoergrenzen | Native CLI voor `.nlbc` en `.wasm`; browsergebruik voert de door N-Lang gegenereerde `.wasm` uit. |
| CLI | Eigen minimale native CLI voor compileren en `.nlbc`-uitvoering. |

Nog niet vastgelegd zijn de precieze tokens, operators, standaardfuncties, instructies en stackindeling.

## LLVM en losse uitvoertools

LLVM is een verzameling modulaire compiler- en toolchaintechnologieën met onder meer optimalisatie en codegeneratie ([B015](../pws/bronnenregister.md)). Een LLVM-backend zou veel backendwerk overnemen; LLVM is daarom geen gekozen backend voor N-Lang. De eigen bytecode- en Wasm-codegeneratie blijven de technische leerdoelen.

Voor de Wasm-backend kan later smalle infrastructuur worden onderzocht. `wasm-encoder` noemt zichzelf een low-level WebAssembly encoder (B020); de officiële Wasm-specificatie beschrijft WAT als tekstformaat voor modules (B021). Zo’n encoder of WAT-tool helpt alleen bij de laatste modulecodering en neemt de N-Lang-codegenerator niet over. Er wordt nu niets geïnstalleerd.

## Waarom geen kant-en-klare compilerbouw in versie één?

`logos` levert lexer-infrastructuur; `nom` parser-combinators; `pest` genereert parsercode vanuit een PEG-grammatica; LALRPOP is een parser-generatorframework voor onder meer LR(1)-grammatica’s ([B008–B009, B012–B013](../pws/bronnenregister.md)). Deze projecten zijn bruikbaar, maar zouden in versie één de centrale leerstappen abstraheren en extra configuratie en foutdiagnose introduceren. LALRPOP wordt niet beschreven als oplossing voor willekeurig ambigue grammatica’s.

SWC is een JavaScript/TypeScript-compilerplatform en past daarom niet bij de gekozen eigen bytecode- en Wasm-backends ([B014](../pws/bronnenregister.md)). Dit is een afbakening voor versie één, geen algemene afwijzing.

Een kleine CLI-library zoals `clap` kan later worden onderzocht als de eigen CLI aantoonbaar te groot wordt ([B016](../pws/bronnenregister.md)). Elke dependency vereist dan een concreet probleem, versie, licentie, gevolgen voor leeruren en vergelijkingstests. De actuele startkeuze blijft: **`std` plus Rusts ingebouwde tests; frontend, beide codegens, `.nlbc`-decoder, VM, runtime, diagnostiek en CLI zelf bouwen**. `wasm-bindgen` is hoogstens een gerichte grenshulp, geen Wasm-backend.
