# N-Lang rechtstreeks naar WebAssembly

**Bevestigde eis, 2026-09-18:** de N-Lang-compiler krijgt twee echte uitvoerdoelen: eigen bytecode en WebAssembly. De compiler wordt in Rust geschreven. Het Wasm-doel vertaalt het N-Lang-programma zelf naar Wasm-instructies.

```text
N-Lang → lexer → parser → betekeniscontrole
                              ├─ eigen bytecodebackend → .nlbc → eigen Rust-VM
                              └─ Wasm-backend          → .wasm → browser
```

Dezelfde Rust-VM naar Wasm bouwen zou nog steeds alleen het bytecodeprogramma interpreteren. Dat vervult deze tweede targeteis niet. De Wasm-backend moet de functies, aanroepen en opdrachten van het N-Lang-programma daadwerkelijk vertalen.

## De gedeelde en aparte onderdelen

Lexer, AST, parser, naamcontrole en argumentbinding zijn gedeeld. Daarna kiest de compiler een backend: `src/codegen/bytecode/` of `src/codegen/wasm/`. Beide ontvangen dezelfde gecontroleerde betekenis. Zij produceren verschillende instructies en bestandsformaten, maar moeten hetzelfde taalgedrag opleveren.

Wasm-modules hebben onder meer types, functies, imports/exports en code. Het binaire formaat heeft daarvoor vaste secties. De compiler moet deze standaard volgen; zie [WebAssembly Core, B022](https://webassembly.github.io/spec/core/binary/modules.html). Jullie eigen `.nlbc`-formaat is een apart ontwerp.

## Stappen voor de eigen Wasm-backend

1. Maak een klein geldig module met één export en een gehele waarde. Kies bewust de ondersteunde Wasm-instructies.
2. Vertaal functieparameters naar locals en functiedefinities naar Wasm-functies.
3. Vertaal aanroepen en toewijzingen vanuit de gecontroleerde representatie. Argumentbinding wordt niet opnieuw uitgevonden in deze backend.
4. Ontwerp het contract voor N-Lang-waarden, objecteigenschappen en methoden. Deze bestaan niet vanzelf door een `.wasm`-bestand te maken.
5. Maak de module valideerbaar en laad de echte gegenereerde bytes in een browser.
6. Vergelijk resultaten en foutgevallen met de eigen bytecode-VM.

Dit is een werkplan; er is nog geen Wasm-emitter, gevalideerd module of browserresultaat.

## Runtime en objecten

**Voorstel voor een kleine eerste uitvoering:** definieer in `src/runtime/` eigen waarden, objecten en de startcontext. Een mogelijke Wasm-grens gebruikt gehele handles naar een waardetabel en een beperkt aantal expliciete helpers voor getallen, eigenschappen en geregistreerde methoden. Spreek types, eigenaarschap, foutcodes en levensduur af. Dit is een ontwerpvoorstel, geen reeds vastgelegde ABI.

ABI betekent hier de precieze afspraak over welke functies, parameters en resultaten twee onderdelen uitwisselen. Het gegenereerde N-Lang-module kan deze helpers importeren. N-Lang-functies en hun aanroepen worden daarbij nog steeds rechtstreeks Wasm-code; er zit geen `.nlbc`-dispatchlus in deze backend.

De helpers kunnen jullie zelf in Rust schrijven en zo nodig als afzonderlijk Wasm-runtimeonderdeel bouwen. Een kleine browserlaadlaag verbindt exports met imports. Voor het bewegingsvoorbeeld levert de testcontext de objecten en methode `verplaatsen`; gedrag, naamtabellen en fouten moeten voor beide targets overeenkomen. Een zelfstandig `.wasm`-bestand zonder imports is voor dit objectvoorbeeld nog geen toegezegde eigenschap.

## Bibliotheken als gereedschap

Jullie schrijven zelf de vertaling van N-Lang naar Wasm-instructies. Een smalle serializer zoals `wasm-encoder`, of eerst WAT produceren en een assembler gebruiken, kan eventueel alleen het standaardbestandsformaat verzorgen. Vergelijk die route met zelf de benodigde bytes schrijven en leg de keuze vast. Er is nog niets toegevoegd; zie [bibliotheken](bibliotheken.md).

`wasm-bindgen` kan uitsluitend een eventuele Rust-runtime of latere browserversie van de compiler aan de browser koppelen. Het is geen backend die N-Lang omzet. De [Rust-targetdocumentatie, B017](https://doc.rust-lang.org/rustc/platform-support/wasm32-unknown-unknown.html) en [bindingsgids, B018](https://wasm-bindgen.github.io/wasm-bindgen/) zijn relevant voor dat aanvullende Rust-werk.

## Compileren en gebruiken

**Voorgesteld CLI-contract na implementatie:**

```powershell
cargo run -- compileer examples/bewegen.nlang --doel bytecode -o build/bewegen.nlbc
cargo run -- compileer examples/bewegen.nlang --doel wasm -o build/bewegen.wasm
```

De eerste uitvoer wordt door de eigen VM uitgevoerd. De tweede wordt door [de minimale browserproef](../../browser/README.md) geladen, met de benodigde runtime-imports.

`cargo build --target wasm32-unknown-unknown` compileert Rust-code naar Wasm. Dat commando kan later nuttig zijn voor runtimehelpers, maar is niet het commando waarmee de N-Lang-bron naar zijn Wasm-target gaat. De leerlingen bouwen daarvoor de hierboven beschreven eigen backend.

## Acceptatie en grenzen

Compileer dezelfde N-Lang-bron naar beide uitvoerformaten en voer die werkelijk uit. Vergelijk eindwaarden, methodeaanroepen en betekenisvolle foutcodes; de bytes hoeven tussen targets niet gelijk te zijn. Valideer daarnaast het Wasm-formaat en test in een echte browser. Alleen een Rust-build naar Wasm of een mooi ogend WAT-bestand bewijst dit niet.

Begin met een kleine gemeenschappelijke taalset. Een constructie die slechts één backend aankan, krijgt op de andere een duidelijke compileerfout totdat ondersteuning bestaat. Extra Wasm-features, optimalisaties, een browsereditor en een derde machinecodetarget zijn vervolgwerk.
