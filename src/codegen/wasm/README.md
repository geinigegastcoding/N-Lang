# Backend voor rechtstreeks WebAssembly

Nog zelf te schrijven in Rust: vertaal N-Lang-functies, opdrachten en aanroepen naar echte Wasm-instructies, types en modulesecties. Deze backend genereert geen eigen-bytecodeprogramma met een meegeleverde interpreter.

Maak de eigen compilerregels en het runtimecontract expliciet. Alleen de binaire serialisatie kan eventueel door een smalle helper worden ondersteund. Zie [Wasm-ontwerp](../../../docs/ontwikkeling/webassembly.md), [bibliotheken](../../../docs/ontwikkeling/bibliotheken.md) en [tests](../../../tests/README.md).
