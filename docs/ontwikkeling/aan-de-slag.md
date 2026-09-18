# Aan de slag met jullie eigen compiler

Dit zijn stappen om **zelf uit te voeren**. Deze inrichting bevat nog geen Cargo-manifest, Rust-code, VM of geïmplementeerde tests.

## Eerste werksessie

1. Noteer je eigen starttijd en lees de [specificatie](../taal/syntaxis.md). Teken voor `doelX van zelf wordt vijf` de verwachte tokens, boom en betekenis.
2. Controleer in de repositoryroot:

   ```powershell
   rustc --version
   cargo --version
   ```

   Ontbreekt Rust, volg [de officiële installatiehandleiding, B010](https://doc.rust-lang.org/book/ch01-01-installation.html). Op Windows beschrijft deze ook de linker via Visual Studio. Noteer zelf de gebruikte versies.

3. Controleer dat er nog geen `Cargo.toml` staat. Maak eenmalig het project:

   ```powershell
   cargo init --bin --name n-lang .
   ```

   Behoud alle modulemappen en documentatie. Schrijf daarna zelf `src/lib.rs` en de moduleverbindingen; zie [architectuur](architectuur.md). Richt de gedeelde kern vanaf het begin zonder terminal- of bestandstoegang in.

4. Controleer het startproject met `cargo check`. Maak zelf een token-type en een test voor één getal of sleutelwoord.
5. Draai `cargo test` en controleer hoeveel tests werkelijk uitgevoerd zijn. Groen met nul tests bewijst geen taalgedrag.
6. Noteer eindtijd, bijdrage en testuitkomst in [het logboek](../../logboek.md), met een [detailnotitie](../pws/werklog/README.md).

## Daarna: één kleine route helemaal afmaken

Bouw lexer, AST en parser voor één toewijzing. Kies dan samen een klein [bytecodecontract](bytecode-en-vm.md), schrijf de generator en VM voor diezelfde toewijzing en test de veranderde objectwaarde. Pas daarna volgen functies, argumentbinding en het volledige bewegingsvoorbeeld.

Maak vroeg een kleine [Wasm-backendproef](webassembly.md): kan jullie Rust-compiler een geldig Wasm-module met een eenvoudige export produceren? Laat die echte uitvoer in een browser draaien. Bouw daarna het gedeelde waarde-/objectcontract voor het volledige voorbeeld.

## Beoogde commando's na implementatie

```powershell
cargo test
cargo run -- compileer examples/bewegen.nlang --doel bytecode -o build/bewegen.nlbc
cargo run -- compileer examples/bewegen.nlang --doel wasm -o build/bewegen.wasm
cargo run -- voer-uit build/bewegen.nlbc
```

Dit is een **voorgesteld CLI-contract**, geen werkende handleiding. Jullie moeten de opdrachten, uitvoermapafhandeling en startcontext voor het voorbeeld zelf implementeren. De [testmatrix](../../tests/README.md) beschrijft wat daarna gecontroleerd wordt.

De compiler en native VM bouwen jullie met `cargo build --release`. Het N-Lang-programma gaat naar Wasm via de zelfgeschreven `--doel wasm`-backend. Rust zelf naar Wasm bouwen is alleen eventueel aanvullend werk voor runtimehelpers; zie [de uitleg](webassembly.md).

## Herhaalbaarheid

Bewaar `Cargo.toml` en `Cargo.lock` zodra ze bestaan. Houd `target/`, `build/` en gegenereerde browserbindings buiten Git. Noteer bij metingen commit, Rust/Cargo-versies, browser/versie, bytecodeversie, commando en invoer.

Tijdens deze documentatiesessie zijn lokaal `rustc 1.96.1` en `cargo 1.96.1` waargenomen; zie [de werklog](../pws/werklog/2026-09-18-1452-projectinrichting.md). Dit zijn gemeten omgevingsversies, geen minimumversies of bewijs van een werkende compiler.
