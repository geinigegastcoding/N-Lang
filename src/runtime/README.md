# Gedeelde runtimeafspraken

Nog zelf te ontwerpen en te schrijven in Rust: waarden, objecten, startcontext, geregistreerde methoden en uitvoeringsfouten. De eigen bytecode-VM en rechtstreeks gegenereerde Wasm-code moeten dezelfde betekenis aan die onderdelen geven.

Begin met gehele getallen, objectreferenties en een lege retourwaarde. Leg de grens naar eventuele Wasm-runtimehelpers vast: types, handles, levensduur en foutcodes. Programmeer geen tweede lexer of parser in deze laag.

Zie [bytecode en VM](../../docs/ontwikkeling/bytecode-en-vm.md), [WebAssembly](../../docs/ontwikkeling/webassembly.md) en [testplan](../../tests/README.md).
