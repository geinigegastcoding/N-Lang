# Virtuele machine

**Status: nog zelf te implementeren.** Deze map bevat alleen een werkbeschrijving.

Voer de eigen bytecode uit met stack, callframes, waarden en objecten.

Laat eerst één toewijzing de juiste eindwaarde opleveren. Voeg functies en geregistreerde methoden daarna toe.

Deze VM voert het eigen-bytecodetarget uit. Het andere target bevat rechtstreeks gegenereerde Wasm-instructies. Deel waarde-/objectafspraken via runtime; ongeldige invoer geeft fouten in plaats van panics.

Schrijf later zelf `mod.rs` en de tests voor dit onderdeel. Zie de [architectuur](../../docs/ontwikkeling/architectuur.md), [taalspecificatie](../../docs/taal/syntaxis.md) en het [testplan](../../tests/README.md).
