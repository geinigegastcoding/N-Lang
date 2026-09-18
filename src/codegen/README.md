# Bytecode genereren

**Status: nog zelf te implementeren.** Deze map bevat alleen een werkbeschrijving en een bestaande placeholder.

Vertaal de gecontroleerde representatie naar één van twee uitvoerdoelen: eigen bytecode of rechtstreeks WebAssembly. De submappen [bytecode](bytecode/README.md) en [wasm](wasm/README.md) bevatten de werkverdeling.

Maak eerst bytecode voor één toewijzing. Leg stackeffecten, argumentvolgorde en impliciete retourwaarden vast.

Gebruik voor het eerste doel de instructiedefinities uit `src/bytecode/` en voor het tweede de Wasm-specificatie. Beide backends delen de frontend en het runtimecontract.

Schrijf later zelf `mod.rs` en de tests voor dit onderdeel. Zie de [architectuur](../../docs/ontwikkeling/architectuur.md), [taalspecificatie](../../docs/taal/syntaxis.md) en het [testplan](../../tests/README.md).
