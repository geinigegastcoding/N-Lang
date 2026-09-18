# Taalontwerp

N-Lang krijgt een zelfgebouwde compiler in Rust met twee uitvoerdoelen: eigen bytecode voor een eigen Rust-VM, en rechtstreeks gegenereerde WebAssembly voor de browser. Zie [de Wasm-backend](../ontwikkeling/webassembly.md).

- [Syntaxis en betekenis](syntaxis.md): wat de gebruikersopdracht vastlegt en welke aanvullende regels nog voorstellen zijn.
- [Conceptgrammatica](grammatica.ebnf): formele beschrijving van de kleine eerste versie, bedoeld om zelf een parser te schrijven.
- [Bewegingsvoorbeeld](../../examples/bewegen.nlang): de eerste acceptatie-eis, waarvan het gedrag in de specificatie staat.
- [Testplan](../../tests/README.md): hoe elke regel later toetsbaar wordt.

Status op 2026-09-18: ontwerp, geen geïmplementeerde Rust-taal. De grammatica is niet automatisch getest of door een parsergenerator verwerkt. Keuzes die verder gaan dan het aangeleverde voorbeeld staan als **voorstel** in de specificatie.
