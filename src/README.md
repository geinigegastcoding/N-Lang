# Plaatsen voor eigen Rust-code

Hier schrijven de leerlingen later zelf de compiler en VM in Rust. De mappen zijn ingericht; er zijn nog geen `.rs`-bestanden of Cargo-manifest.

| Map | Begin met |
|---|---|
| [lexer](lexer/README.md) | Tokens en bronposities |
| [ast](ast/README.md) | Een boom voor de kleinste opdracht |
| [parser](parser/README.md) | Die boom uit tokens maken |
| [semantic](semantic/README.md) | Namen en argumenten controleren |
| [codegen](codegen/README.md) | Eigen bytecode én rechtstreeks WebAssembly genereren |
| [bytecode](bytecode/README.md) | Instructies, formaat, encoder en decoder |
| [vm](vm/README.md) | Zelf de instructies uitvoeren |
| [diagnostics](diagnostics/README.md) | Nederlandse fouten met locatie |
| [compiler](compiler/README.md) | De stappen verbinden |
| [cli](cli/README.md) | Bestanden en terminal |
| [runtime](runtime/README.md) | Gedeelde waarden, objecten en uitvoeringsafspraken |

Volg [aan de slag](../docs/ontwikkeling/aan-de-slag.md). De modules horen in één Cargo-package; zie [architectuur](../docs/ontwikkeling/architectuur.md). `main.rs`, `lib.rs` en `mod.rs` zijn toekomstige bestanden die jullie zelf schrijven.
