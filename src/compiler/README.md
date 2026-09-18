# Compilerketen

**Status: nog zelf te implementeren.** Deze map bevat alleen een werkbeschrijving en een bestaande placeholder.

Verbind lexer, parser en semantiek met een expliciete backendkeuze: eigen bytecode of WebAssembly.

Stop bij fouten en lever alleen volledige uitvoer. Laat de compiler tekst, contextschema en doelkeuze ontvangen en de juiste doelbytes of fouten teruggeven.

Geen bestandstoegang, terminal, browser-UI of automatische VM-uitvoering.

Schrijf later zelf `mod.rs` en de tests voor dit onderdeel. Zie de [architectuur](../../docs/ontwikkeling/architectuur.md), [taalspecificatie](../../docs/taal/syntaxis.md) en het [testplan](../../tests/README.md).
