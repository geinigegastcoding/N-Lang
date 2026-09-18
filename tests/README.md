# Testplan voor compiler, bytecode en VM

**Status: gepland, geen geïmplementeerde tests.** Het [bewegingsvoorbeeld](../examples/bewegen.nlang) is een ontwerpeis. Een test is pas bewijs wanneer jullie hem zelf hebben geschreven, uitgevoerd en de uitkomst hebben vastgelegd.

## Mappen en testontdekking

Unit tests staan bij de Rust-module. Gebruik integratietests zodra een publieke API bestaat. Cargo vindt bijvoorbeeld `tests/lexer/main.rs`; losse bestanden zoals `tests/lexer/geval.rs` worden niet automatisch eigen targets. Koppel hulpbestanden vanuit de test. Bron: [Cargo Package Layout, B001](https://doc.rust-lang.org/cargo/guide/project-layout.html) en [Rust Test Organization, B007](https://doc.rust-lang.org/book/ch11-03-test-organization.html).

- `lexer/`, `ast/`, `parser/`, `semantic/`, `codegen/`, `diagnostics/`: controles per compilerlaag.
- `bytecode/`, `vm/`, `runtime/`: eigen bestandsformaat, instructie-uitvoering en gedeelde waarden/objecten.
- `compiler/`, `cli/`: compiler-API en native opdrachten.
- `wasm/`: het door de N-Lang-backend gegenereerde Wasm-formaat en uitvoering in een browser.
- `integration/`: de volledige route op beide platformen.
- `fixtures/valid/`, `fixtures/invalid/`, `fixtures/expected/`: extra invoer, foutgevallen en later handmatig beoordeelde uitvoer.

Gebruik voor het hoofdvoorbeeld rechtstreeks `examples/bewegen.nlang`, zodat geen tweede bronkopie ontstaat. Voeg binaire referenties pas toe na een vastgelegd bytecodeformaat; voorziene testresultaten zijn geen echte fixtures.

## Minimale testmatrix

| Onderdeel | Geldig geval | Fout of grens |
|---|---|---|
| Lexer | Getalwoord/cijfer, komma, `dan:`, LF en CRLF | Onbekend teken, tab, drie spaties, `05`, getal buiten bereik |
| Bronlocaties | Laatste regel zonder newline | Locaties na Nederlands niet-ASCII-commentaar |
| Parser | Toewijzing, functie, methode, aanroep | Ontbrekend `dan:`, leeg blok, ontbrekende waarde |
| Eigenschappen | `x van positie van zelf` leest eerst positie, dan x | Getal als toewijzingsdoel |
| Namen | Parameters en vastgelegde startcontext | Onbekende naam/functie, dubbele definitie |
| Argumenten | Het oorspronkelijke voorbeeld | Onbekend label, dubbel/ontbrekend argument, te veel argumenten |
| Mengregel | Benoemd argument, daarna eerste vrije positie | `zeven, vijf als nieuweX` vult `nieuweX` dubbel |
| Context | `bij` vult de contextparameter | Onverwacht/ontbrekend `bij`, `als locatie` in plaats van `bij` |
| Codegen | Andere functienamen/getallen werken via dezelfde regels | Verkeerde stackbalans of argumentvolgorde |
| Bytecode | Encodeer/decodeer dezelfde instructies en versie | Afgebroken bestand, onbekend opcode/versie, te grote lengte, ongeldige index |
| VM | Stack, locals, functies, objectreferenties, methodeaanroep | Stacktekort, verkeerd waardetype, ontbrekende eigenschap/methode |
| Begrenzing | Programma eindigt binnen limieten | Recursie/instructiebudget levert gecontroleerde fout |
| CLI | Compileren en uitvoeren als aparte opdrachten | Ontbrekend bestand, ongeldige optie, onschrijfbare uitvoer |
| Compiler | Volledige bytecode bij geldige bron | Bij fout geen halve uitvoer of overschreven goed resultaat |
| Bytecode/Wasm | Dezelfde bron en startcontext geven hetzelfde gedrag via twee backends | Verkeerde targetselectie, ongeldige Wasm-types/imports, verschil in waarden/fouten |

## Acceptatie van het bewegingsvoorbeeld

1. Compileer het echte bronbestand met de eigen Rust-pipeline. Lees de geproduceerde bytecode terug met de eigen decoder.
2. Maak zelf een testcontext met `zelf`, het locatieobject en `Roelofarendsveen.IJmuiden`. Registreer de methode `verplaatsen` met een controleerbare aanroepregistratie.
3. Voer de bytecode uit en controleer: `doelX` is `5`, `doelY` is `7`, `snelheid` is `8`. De methode ontvangt precies eenmaal het bedoelde locatieobject. Het voorbeeld schrijft niet voor dat de eigenschap `locatie` wordt vervangen.
4. Compileer dezelfde bron opnieuw met `--doel wasm`. Valideer en laad deze rechtstreeks gegenereerde module met dezelfde abstracte startcontext in een echte browser. Vergelijk eindwaarden, methodeaanroepen en fouten.
5. Controleer dat herhaald compileren binnen elk target deterministische uitvoer geeft. De eigen bytecode en Wasm-bytes hoeven onderling niet gelijk te zijn. Test ook dat een constructie die een backend nog niet ondersteunt expliciet wordt afgewezen.
6. Noteer commit, bytecodeversie, Rust/Cargo- en browserversie, commando en echte uitkomst.

De testopstelling en tests schrijven jullie zelf. Noteer geplande gevallen als gepland; technische tests zijn geen deelnemersmetingen.
