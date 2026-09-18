# Architectuur en mapstructuur

**Werkafspraak, 2026-09-18:** de compiler en VM worden door de leerlingen in Rust geschreven. De compiler heeft twee backends: eigen bytecode voor de zelfgeschreven VM en rechtstreeks gegenereerde WebAssembly voor de browser. Zie [PWS-D005 en PWS-D006](../pws/besluiten.md). Er is nog geen implementatie.

## De indeling onderbouwen

De [Cargo-gids, B001](https://doc.rust-lang.org/cargo/guide/project-layout.html) plaatst het manifest in de root, broncode in `src/` en integratietests in `tests/`. Dat is de basis. De [Rust-compilerontwikkelaarsgids, B002](https://rustc-dev-guide.rust-lang.org/compiler-src.html) laat compileronderdelen en tests in een veel groter project zien.

De [Go-gids, B003](https://go.dev/doc/modules/layout) laat de structuur meegroeien met de omvang. De [PyPA-gids, B004](https://packaging.python.org/en/latest/tutorials/packaging-projects/) scheidt broncode, metadata en tests. Deze officiële ontwikkelaarsgidsen dienen als praktische voorbeelden naast taalwiki's. Het advies voor één package is een eigen schaalkeuze, geen eis uit die andere taalprojecten.

## De route

```text
N-Lang-brontekst
  → lexer → tokens
  → parser → AST (abstracte syntaxboom)
  → semantic → gecontroleerde namen en gebonden argumenten
  → codegen/bytecode → eigen bytecode → eigen Rust-VM
  → codegen/wasm     → WebAssembly    → browser

Runtimeafspraken voor waarden, objecten en fouten gelden voor beide routes.
```

De compiler maakt instructies voor het gekozen doel. De [bytecodeafspraak](bytecode-en-vm.md) verbindt de eerste backend met de eigen VM. De [Wasm-backend](webassembly.md) volgt het standaardformaat van WebAssembly.

| Module | Verantwoordelijkheid | Eerste zelf te maken bewijs |
|---|---|---|
| [lexer](../../src/lexer/README.md) | Woorden, getallen, regels, inspringing en bronlocaties | Tokens voor één toewijzing |
| [ast](../../src/ast/README.md) | Types voor functies, aanroepen, toewijzingen, eigenschappen en waarden | Een boom die het voorbeeld kan voorstellen |
| [parser](../../src/parser/README.md) | Tokens volgens de grammatica naar een AST | Boom voor `doelX van zelf wordt vijf` |
| [semantic](../../src/semantic/README.md) | Namen, scopes en `als`/`bij`-argumentbinding | Correcte volgorde en gerichte fouten |
| [bytecode](../../src/bytecode/README.md) | Instructiecontract, encoder, decoder en versiecontrole | Eigen formaat kan heen en terug worden gelezen |
| [codegen](../../src/codegen/README.md) | Gecontroleerde boom via twee backends vertalen | Eigen bytecode én echte Wasm-instructies |
| [vm](../../src/vm/README.md) | Stack, callframes, waarden, objecten en instructie-uitvoering | Toewijzing verandert het juiste object |
| [diagnostics](../../src/diagnostics/README.md) | Bronlocaties en Nederlandse compileer-/uitvoeringsfouten | Fout toont de juiste regel en kolom |
| [compiler](../../src/compiler/README.md) | Compilerstappen verbinden, zonder bestanden of browser-I/O | Broncode geeft volledige bytecode óf fouten |
| [cli](../../src/cli/README.md) | Native bestanden, opdrachten, stdout/stderr en exitcodes | Compileren en uitvoeren zijn apart aanroepbaar |
| [runtime](../../src/runtime/README.md) | Gedeelde waarden, objecten, context en uitvoeringsafspraken | Zelfde eindwaarden en methodegedrag op beide targets |

## Eén package, twee compilerbackends

Jullie maken later zelf `Cargo.toml`, `src/lib.rs`, `src/main.rs` en per module een `mod.rs`. Een bibliotheek en CLI kunnen binnen één package staan ([Cargo-indeling, B001](https://doc.rust-lang.org/cargo/guide/project-layout.html)). De CLI kiest welke backend de library gebruikt. Een optioneel afzonderlijk te bouwen runtimeonderdeel kan later aanleiding geven tot een aparte crate; begin daar pas mee als het runtimecontract duidelijk is.

`src/codegen/bytecode/` en `src/codegen/wasm/` delen de lexer, parser en betekeniscontrole, maar schrijven verschillende doelinstructies. Het compileercontract ontvangt tekst, een schema voor toegestane contextnamen en een doelkeuze. De runtime ontvangt de bijbehorende contextwaarden. Leg het schema en de uitvoergrens samen vast.

De acht oorspronkelijke moduleplaatsen zijn met hun `.gitkeep`-inhoud onder `src/` behouden. Aanvullend zijn `bytecode/`, `vm/`, `runtime/` en de twee codegen-submappen ingericht. De opgehaalde hoofdbranch bevatte de verplaatsing naar `src/` inmiddels ook; die bestaande structuur wordt gevolgd. Historisch werk wordt niet herschreven.

## Afspraken vóór het parallel programmeren

Ontwerp tokens, boomvormen en het bytecodecontract samen. Bewaar argumentnamen en bronvolgorde totdat de semantische controle ze bindt. Laat de generator geen grammatica of namen opnieuw raden.

Kies één bronpositiemodel, bijvoorbeeld UTF-8-bytebereiken met regel en kolom apart berekend. Test Nederlandse commentaartekst, Windows-regelovergangen en het bestandseinde. Gebruik in het bytecodebestand vaste getalbreedtes, geen geheugendumps of platformafhankelijke Rust-layout.

## CLI als voorgesteld contract

Een toekomstige CLI kan `compileer bron.nlang --doel bytecode -o programma.nlbc`, `compileer bron.nlang --doel wasm -o programma.wasm`, `voer-uit programma.nlbc` en `--help` aanbieden. `.nlbc` is een voorgestelde extensie. Exitcode `0` betekent gelukt; fouten krijgen een niet-nulcode en gaan naar stderr.

Schrijf alleen een volledig geslaagd compileerresultaat. Een fout in de bron mag een eerdere geldige uitvoer niet leegmaken. Het uitvoeren controleert eerst het bytecodeformaat. De implementatie en testopstelling schrijven jullie zelf.

## Afbakening

Een eigen optimizer, registerallocator, native machinecodegenerator en taal-package-manager zijn geen eerste mijlpaal. Twee compilerbackends en een eigen VM behoren wél tot de opdracht. Bouw eerst dezelfde kleine taalset op beide doelen; extra functies volgen uit de onderzoeksvraag.
