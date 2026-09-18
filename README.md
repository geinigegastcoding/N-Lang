# N-Lang

N-Lang is een Nederlandstalige programmeertaal die we voor ons profielwerkstuk zelf gaan bouwen in **Rust**. Onze compiler krijgt **twee uitvoerdoelen: eigen bytecode en WebAssembly**. De eigen bytecode voeren we uit met een zelfgebouwde virtuele machine (VM); de gegenereerde WebAssembly werkt in de browser.

**Huidige status:** documentatie, modulemappen en het eerste taalvoorbeeld staan klaar. De Rust-compiler en VM zijn nog niet geïmplementeerd; er is nog geen `Cargo.toml`. Het effect van Nederlandse syntaxis op beginnende programmeurs moet nog worden onderzocht.

## Begin hier

1. Lees samen het [taalvoorbeeld en de betekenis van de syntaxis](docs/taal/syntaxis.md). Bespreek vooral benoemde argumenten, inspringing en `zelf`.
2. Vul de open school- en onderzoekseisen aan in het [onderzoekskader](docs/pws/onderzoekskader.md). De gemelde tijdseis is **80 uur per leerling**.
3. Volg [aan de slag](docs/ontwikkeling/aan-de-slag.md): controleer Rust, maak zelf het Cargo-project en begin met tokens voor één korte regel.
4. Bouw de onderdelen in de volgorde hieronder. Schrijf bij iedere taalregel meteen zelf een test.
5. Noteer de werkelijk gewerkte tijd per persoon in [logboek.md](logboek.md). De [80-uursplanning](docs/pws/planning.md) is een begroting, geen ingevuld logboek.

## Het eerste doel

Dit is jullie aangeleverde voorbeeld, opgeslagen als [bewegen.nlang](examples/bewegen.nlang). Het is een **ontwerpeis**, nog geen werkend N-Lang-programma.

```text
wanneer bewegen met nieuweX, nieuweY en snelheid bij locatie dan:
    doelX van zelf wordt nieuweX
    doelY van zelf wordt nieuweY
    snelheid van zelf wordt snelheid
    locatie van zelf gaat verplaatsen naar locatie

ga bewegen met vijf als nieuweX, zeven, 8 als snelheid, bij IJmuiden van Roelofarendsveen
```

De compiler moet onder meer `vijf` herkennen als de waarde `5`, eigenschappen op objecten vinden en argumenten koppelen aan de juiste parameters. Beide uitvoerdoelen moeten datzelfde gedrag opleveren. Het JavaScript-fragment uit de eerste opdracht is alleen een vergelijking om het bedoelde gedrag uit te leggen; de compiler genereert geen JavaScript.

```text
N-Lang → gedeelde lexer, parser en betekeniscontrole in Rust
          ├─ eigen bytecodegenerator → .nlbc → eigen Rust-VM
          └─ eigen Wasm-generator    → .wasm → browser
```

## Stappenplan

| Stap | Wat jullie zelf maken | Wanneer de stap klaar is |
|---|---|---|
| 1. Taal afbakenen | Voorbeelden, foutgevallen en afspraken bij de [conceptspecificatie](docs/taal/syntaxis.md) | Iedereen kan dezelfde regel op dezelfde manier uitleggen |
| 2. Rust starten | Cargo-project, eerste eigen types en tests | Eigen kleine test draait via `cargo test` |
| 3. Lexer | Tekst splitsen in tokens met bronlocaties | Woorden, getallen, nieuwe regels en inspringing worden herkenbaar |
| 4. AST en parser | Een syntaxboom en parser die tokens in die boom omzet | Eerst een toewijzing, daarna een functie en aanroep worden correct herkend |
| 5. Semantiek | Namen controleren en argumenten aan parameters binden | Onbekende, dubbele en ontbrekende argumenten krijgen Nederlandse fouten |
| 6. Bytecode ontwerpen en genereren | Eigen instructies, bestandsformaat en vertaling vanuit de gecontroleerde boom | Kleine programma's leveren verklaarbare, controleerbare bytecode op |
| 7. VM bouwen | Instructies uitvoeren, waarden bewaren, functies en objecten afhandelen | Het bewegingsvoorbeeld heeft aantoonbaar het afgesproken gedrag |
| 8. Wasm-backend en browserproef | N-Lang naar echte Wasm-instructies vertalen; benodigde runtime en laadlaag schrijven | Dezelfde bron heeft via Wasm hetzelfde gedrag als via de eigen VM |
| 9. Onderzoeken en afronden | Meetplan, evaluatie, analyse, verslag en demonstratie | Claims zijn terug te vinden in echte bronnen, data en tests |

Bouw eerst de hele route voor `doelX van zelf wordt vijf`. Breid daarna uit tot het volledige voorbeeld. De [WebAssembly-opzet](docs/ontwikkeling/webassembly.md) beschrijft de tweede codegenerator en het verschil met Rust zelf naar Wasm bouwen. Extra taalbibliotheken, lussen of een editorplug-in zijn pas vervolgwerk als de kern en het onderzoek dat toelaten.

## Wat gebruiken we wel en niet?

We beginnen voor de kern met Rust `std`, Cargo en Rusts ingebouwde testmiddelen. Lexer, parser, syntaxboom, controles, beide codegeneratoren en VM blijven eigen werk. Een smalle Wasm-encoder kan eventueel alleen de bestandsindeling ondersteunen. Het [bibliotheekbeleid](docs/ontwikkeling/bibliotheken.md) legt deze grens uit. Er zijn nog geen Rust-dependencies toegevoegd.

## Waar staat wat?

```text
N-Lang/
├── src/                   # plaatsen voor eigen Rust-modules; nu uitleg en placeholders
│   ├── lexer/             # tekst → tokens
│   ├── ast/               # gedeelde syntaxboom
│   ├── parser/            # tokens → syntaxboom
│   ├── semantic/          # namen en argumenten controleren
│   ├── codegen/           # twee zelf te schrijven backends
│   │   ├── bytecode/      # gecontroleerde boom → eigen bytecode
│   │   └── wasm/          # gecontroleerde boom → WebAssembly
│   ├── bytecode/          # instructies en eigen bestandsformaat
│   ├── vm/                # eigen virtuele machine
│   ├── runtime/           # gedeelde waarden, objecten en uitvoeringsafspraken
│   ├── diagnostics/       # bronlocaties en Nederlandse foutmeldingen
│   ├── compiler/          # stappen verbinden
│   └── cli/               # invoer/uitvoer en doelkeuze via de terminal
├── tests/                 # plaatsen voor eigen tests en referentiebestanden
├── examples/              # N-Lang-ontwerpvoorbeelden
├── docs/
│   ├── taal/              # syntaxis, betekenis en conceptgrammatica
│   ├── ontwikkeling/      # starten, architectuur en bibliotheken
│   └── pws/               # onderzoek, planning, bronnen, besluiten en werklog
├── browser/               # plaats voor een minimale Wasm-testpagina
├── PRODUCT.md             # actuele productrichting
├── AGENTS.md              # werkwijze voor bijdragen
└── logboek.md              # werkelijk bestede tijd
```

Jullie maken later zelf `Cargo.toml`, `src/main.rs`, `src/lib.rs` en de modulebestanden. Dit overzicht toont de relevante compilerstructuur; bestaande overige projectbestanden blijven behouden. De [architectuur](docs/ontwikkeling/architectuur.md) verklaart de indeling en de officiële taalprojecten waarop die is gebaseerd. Alle documentatie is vindbaar via [docs/README.md](docs/README.md) en de [PWS-index](docs/pws/index.md).
