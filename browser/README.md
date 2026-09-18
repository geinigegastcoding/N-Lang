# Browserproef voor gegenereerde N-Lang-WebAssembly

Deze map is de plek voor een later zelfgeschreven minimale testpagina die de door N-Lang gegenereerde `.wasm`-bestanden laadt. Er is nog geen pagina of laadcode geïmplementeerd.

De compiler zelf wordt in Rust geschreven. De browser voert het resulterende N-Lang-programma als Wasm uit. De pagina levert alleen de afgesproken imports/startcontext aan en toont resultaten of fouten; eventuele runtimehelpers schrijven jullie zelf.

Gebruik dezelfde bronprogramma's en verwachte gedragsuitkomsten als voor de eigen bytecode-VM. Zie [Wasm-backend](../docs/ontwikkeling/webassembly.md) en [testplan](../tests/README.md). Een volledige website of framework is niet nodig.

Toekomstige bestanden kunnen `index.html` en een kleine laadmodule zijn. Gegenereerde bouwuitvoer hoort in `build/` of `pkg/` en wordt niet gecommit. Een compiler die zelf in de browser draait, is geen vereiste voor de eerste directe Wasm-backend.

## Procedure voor de latere browsertest

1. Bouw de echte compiler en genereer het `.wasm`-bestand met `--doel wasm`.
2. Maak de afgesproken runtimehelpers/imports beschikbaar en laat de testpagina de module laden via HTTP. Gebruik een lokale statische server; noteer het gekozen servercommando en de URL. Rechtstreeks een bestand dubbelklikken is niet de testprocedure.
3. Geef dezelfde abstracte startcontext als in de VM-test door en roep het afgesproken exportbeginpunt aan.
4. Laat de zelfgeschreven testpagina de verwachte eindwaarden, methodeaanroepen en fouten vergelijken en een zichtbaar geslaagd/mislukt resultaat geven. Handmatig alleen zien dat de pagina laadt is onvoldoende.
5. Bewaar commit, doelkeuze, gegenereerd bestand, browser/versie, servercommando en feitelijke testuitkomst in de werklog.

`cargo test` voert deze browserproef niet vanzelf uit. Een latere automatische runner moet jullie zelf verbinden met dezelfde procedure. Momenteel is dit een ontwerp voor de testopstelling, geen uitgevoerd onderzoek.
