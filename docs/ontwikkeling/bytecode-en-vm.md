# Eigen bytecode en virtuele machine

**Bevestigde richting:** jullie bouwen de compiler en VM zelf in Rust. Deze pagina beschrijft het eigen-bytecodetarget; de tweede backend staat in [WebAssembly](webassembly.md). **Voorstel:** begin met een kleine stackmachine en gebruik `.nlbc` als bestandsnaam voor jullie bytecode. Er is nog geen formeel bytecodeformaat, encoder, decoder of VM geïmplementeerd.

## Wat het verschil is

De compiler vertaalt de [taalregels](../taal/syntaxis.md) naar eenvoudige instructies. De VM leest die instructies en voert ze uit. Een stack is een stapel tijdelijke waarden; een callframe bewaart de lokale parameters en terugkeerplek van een functieaanroep. Een aparte objecttabel kan objecten bewaren, waarbij een waarde naar een object verwijst via een eigen ID.

Dit zijn voorgestelde ontwerpkeuzes voor N-Lang, geen overgenomen implementatie. Een stackmachine houdt de eerste instructies overzichtelijk: je hoeft niet meteen registers toe te wijzen of machinecode voor verschillende processors te schrijven.

## Begin met één toewijzing

Voor `doelX van zelf wordt vijf` moeten jullie conceptueel vier dingen kunnen doen:

1. Vind het object uit de startcontext waar `zelf` naar verwijst.
2. Zet de gehele waarde `5` klaar.
3. Schrijf die waarde in eigenschap `doelX` van dat object.
4. Eindig het programma met een controleerbaar resultaat.

Leg eerst de stack vóór en na iedere stap op papier vast. Kies daarna instructienamen, operandtypes en bytes. Deze beschrijving is geen bytecodelisting of testuitkomst.

## Instructiegroepen om zelf te ontwerpen

| Groep | Nodig voor | Te beslissen |
|---|---|---|
| Waarden laden | Getallen, parameters, startcontext | Constantentabel, local-index, objectreferentie |
| Eigenschappen lezen/schrijven | `van` en `wordt` | Naam-ID, ontvanger/waarde-volgorde, gedrag bij ontbrekende eigenschap |
| Functie aanroepen/terugkeren | `ga` en `wanneer` | Functie-ID, argumentvolgorde, callframe, impliciete lege retourwaarde |
| Methode aanroepen | `gaat … naar …` | Ontvanger, methode-ID, gecontroleerde hostfunctieregistratie |
| Stack opruimen en stoppen | Aanroepen zonder gebruikt resultaat, programma-einde | Stackbalans en stopresultaat |

De huidige taal heeft nog geen retourwaardesyntaxis. Spreek bijvoorbeeld af dat functies intern een lege waarde teruggeven en dat een aanroep als opdracht die waarde opruimt. Kies één regel; test herhaalde aanroepen zodat de stack niet ongemerkt groeit.

## Het bestand als contract

Ontwerp vóór binaire referentietests:

- een herkenbare header en versienummer;
- vaste bytevolgorde en vaste breedtes voor getallen en indices;
- functie-, naam- en constantentabellen plus instructies;
- een optionele koppeling tussen instructiepositie en bronlocatie voor fouten;
- grenzen voor lengtes, tabellen, stack en callframes.

Gebruik geen raw Rust-geheugendump: het eigen formaat moet onafhankelijk blijven van native en Wasm-geheugenadressen. De decoder controleert lengtes, indices, versies en instructies vóór uitvoering. Codegenerator en VM importeren één gedeelde definitie uit `src/bytecode/`, zodat twee afwijkende instructiesets worden voorkomen.

## Waarden en objecten klein houden

Voor het voorbeeld zijn gehele getallen, objectreferenties en eventueel een lege retourwaarde voldoende. Een eigen objecttabel met een levensduur van één programma-uitvoering is een mogelijk begin; geheugenbeheer en limieten blijven zichtbaar. Een garbagecollector, klassenstelsel en dynamisch laden zijn nog geen vereiste.

De voorbeeldobjecten en methode `verplaatsen` worden voorlopig door een zelfgeschreven Rust-testcontext aangeleverd. Geef de eigen VM en het rechtstreeks gegenereerde Wasm-programma dezelfde abstracte context. Het gedeelde contract en eventuele helpers horen in `src/runtime/`. Geef de bytecode geen willekeurige toegang tot bestanden, DOM of hostfuncties. De concrete context-API is nog te ontwerpen.

## Klaar voor een eerste demonstratie

De compiler verwerkt verschillende namen en waarden via dezelfde regels; encoder en decoder zijn het eens; de VM bereikt de afgesproken eindwaarden. Ongeldige bytecode en verkeerde waardetypes geven Nederlandse fouten in plaats van panics. Een instructie- en recursielimiet voorkomt dat een fout programma onbegrensd blijft draaien. Compileer dezelfde bron vervolgens met de [Wasm-backend](webassembly.md) en vergelijk het gedrag van de twee verschillende uitvoerformaten.
