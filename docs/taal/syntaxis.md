# Syntaxis en betekenis van N-Lang

**Status: concept, 2026-09-18.** Het [bewegingsvoorbeeld](../../examples/bewegen.nlang) komt van de gebruiker. De compiler wordt in Rust geschreven en krijgt eigen bytecode én rechtstreeks gegenereerde WebAssembly als uitvoerdoelen. Het aanvankelijke JavaScript-fragment verduidelijkt alleen het gedrag. Aanvullende regels hieronder zijn **voorstellen voor versie 0.1**, te bespreken voordat jullie ze implementeren. Er bestaat nog geen Rust-implementatie die deze regels bevestigt.

## Wat de opdracht vastlegt

| N-Lang | Gewenste betekenis |
|---|---|
| `wanneer bewegen met nieuweX, nieuweY en snelheid bij locatie dan:` | Functie `bewegen` met parameters `nieuweX`, `nieuweY`, `snelheid`, `locatie` |
| `doelX van zelf wordt nieuweX` | Zet eigenschap `doelX` op het object `zelf` op de parameterwaarde |
| `snelheid van zelf wordt snelheid` | Zet eigenschap `snelheid` op de parameterwaarde; eigenschap en parameter zijn verschillende zaken |
| `locatie van zelf gaat verplaatsen naar locatie` | Roep methode `verplaatsen` van het locatieobject aan met parameter `locatie` |
| `vijf`, `zeven`, `8` | `5`, `7`, `8` |
| `IJmuiden van Roelofarendsveen` | Lees eigenschap `IJmuiden` op object `Roelofarendsveen` |
| `ga bewegen met …` | Roep de functie `bewegen` aan |

`wanneer` betekent hier een functiedefinitie. Het introduceert geen gebeurtenissysteem of voorwaarde. `bij` voegt in het voorbeeld de parameter `locatie` toe; de aanroep wordt geen methode op dat object. De functie heeft precies de vier opgegeven parameters. Deze betekenis volgt uit het aangeleverde voorbeeld; bytecode-instructies en uitvoering moeten jullie zelf ontwerpen.

## De kleine eerste versie — voorstel

Versie 0.1 richt zich op functies, aanroepen, eigenschapstoewijzingen, methodeaanroepen, namen en gehele getallen. Geen lussen, voorwaarden, klassen, imports, tekstwaarden, operatoren of eigen geheugenbeheer. Die kunnen later worden toegevoegd op basis van de onderzoeksvraag. Het voorbeeld moet via algemene regels werken; een speciale herkenning van alleen de tekst `bewegen` is geen compiler.

### Tekst en inspringing

- Bronbestanden zijn UTF-8 met extensie `.nlang`. Zowel LF als CRLF telt als één regelovergang.
- Vier spaties openen het functieblok na `dan:`; terugkeer naar kolom 1 sluit het. Tabs en afwijkende inspringing geven een fout. Geneste blokken vallen nog buiten versie 0.1.
- Eén opdracht per regel. Lege regels en regels waarvan het eerste niet-spatieteken `#` is, worden genegeerd en sluiten het blok niet. Inline-commentaar is nog niet toegestaan.
- Aan het bestandseinde voegt de lexer zo nodig een laatste `NEWLINE` en `DEDENT` toe. Een leeg functieblok is voor deze versie een fout.
- Sleutelwoorden zijn klein geschreven; namen zijn hoofdlettergevoelig. Voorlopig gebruiken namen `A-Z`, `a-z`, `_` en daarna eventueel cijfers. Dit beperkt namen, niet de Nederlandse documentatie of foutmeldingen.
- Sleutelwoorden en getalwoorden kunnen geen namen zijn. `zelf` is een apart taalwoord voor het object dat de startcontext aan de VM meegeeft. Namen hoeven niet aan de regels van een andere programmeertaal te voldoen.

### Getallen

Begin met decimale gehele getallen `0` tot en met `2147483647` en de woorden `nul`, `een`, `twee`, `drie`, `vier`, `vijf`, `zes`, `zeven`, `acht`, `negen`, `tien`. `één`, negatieve getallen, decimalen en samengestelde getalwoorden komen later. Cijfernotatie is `0` of een cijfer `1-9` gevolgd door nul of meer cijfers; `05` is voorlopig een fout. Controleer de bovengrens en normaliseer woorden naar dezelfde numerieke AST-waarde.

### Eigenschappen en toewijzing

`eigenschap van object` leest een eigenschap van een object. `x van positie van zelf` groepeert als `x van (positie van zelf)`: vind eerst het positieobject en lees daarvan `x`. Links van `van` staat steeds een eigenschapsnaam; de meest rechtse naam is de basis. Maak hiervoor boomknopen, geen zoek-en-vervangregels.

In versie 0.1 mag links van `wordt` alleen een eigenschapstoegang staan. `doelX van zelf wordt vijf` is geldig; `vijf wordt zeven` en `doelX wordt vijf` zijn dat nog niet. Dit vermijdt een onbesliste regel over het aanmaken van lokale variabelen.

### Functies en parameters

Een definitie heeft ten minste één gewone parameter na `met`. Scheid parameters met komma's; een laatste `en` mag ook. Na de gewone parameters mag één `bij naam` volgen. Die contextparameter komt achteraan in de interne parameterlijst.

Functies staan op het hoogste niveau. Parameters zijn alleen in hun eigen functie beschikbaar; dubbele parameter- of functienamen zijn een fout. Verzamel eerst alle functiehandtekeningen, zodat een aanroep ook vóór de definitie kan staan. Geneste definities, overloads, standaardwaarden en retourwaarden zijn nog niet onderdeel van dit voorstel.

### Argumenten aan parameters koppelen

Een argument is positioneel (`zeven`) of benoemd (`vijf als nieuweX`). Het eventuele `bij`-argument staat achteraan en koppelt uitsluitend aan de contextparameter. Een komma direct vóór `bij` is optioneel, zodat het aangeleverde voorbeeld past.

**Voorgestelde regel voor mengen:** verwerk gewone argumenten van links naar rechts. Een positioneel argument vult de eerste nog vrije gewone parameter; een benoemd argument vult exact de genoemde gewone parameter. Er wordt niet vooraf plaats gereserveerd voor namen die later in de aanroep komen. Het `bij`-argument vult nooit een gewone parameter.

| Invoer uit het voorbeeld | Toewijzing |
|---|---|
| `vijf als nieuweX` | `nieuweX = 5` |
| `zeven` | eerste vrije gewone parameter: `nieuweY = 7` |
| `8 als snelheid` | `snelheid = 8` |
| `bij IJmuiden van Roelofarendsveen` | `locatie` krijgt het object uit eigenschap `IJmuiden` van `Roelofarendsveen` |

De generator ontvangt daarna de argumenten in declaratievolgorde: `5`, `7`, `8` en het gevonden locatieobject. Voor dezelfde functie is `ga bewegen met zeven, vijf als nieuweX, 8 als snelheid bij IJmuiden van Roelofarendsveen` een fout: `zeven` vulde `nieuweX` al.

Verwerp onbekende argumentnamen, dubbele toewijzingen, ontbrekende parameters, te veel positionele argumenten en een onverwacht of ontbrekend `bij`-argument. Een contextparameter vullen via `als locatie` is in dit voorstel niet toegestaan; gebruik `bij`.

Het herordenen van argumenten kan bij toekomstige expressies met neveneffecten gedrag veranderen. Versie 0.1 beperkt argumenten daarom tot getallen en het lezen van namen/eigenschappen van gewone dataobjecten. Automatische getterfuncties en aanroepen als argument zijn buiten scope. Kies vóór uitbreiding expliciet een evaluatievolgorde en test die.

### Methoden en de uitvoeromgeving

`ontvanger gaat methode naar waarde` betekent één methodeaanroep met één argument. Bijvoorbeeld: `locatie van zelf gaat verplaatsen naar locatie`. Alleen deze vorm hoort bij de eerste versie; `naar` is geen algemeen alternatief voor `met` of `bij`.

**Voorstel voor beide uitvoerdoelen:** `zelf` verwijst naar het object in de startcontext van deze uitvoering, zonder extra functieparameter of automatisch nieuw object. Voor het bewegingsvoorbeeld moet de testomgeving leveren:

- een object bereikbaar via `zelf` waarop `doelX`, `doelY` en `snelheid` gezet mogen worden;
- een locatieobject in de eigenschap `locatie` van `zelf`, met methode `verplaatsen`;
- een object `Roelofarendsveen` met een eigenschap `IJmuiden`.

Maak de context en runtimeafspraken zelf, met dezelfde betekenis voor de eigen VM en de rechtstreeks gegenereerde Wasm-module. Het voorbeeld alleen definieert deze objecten niet. Het bestaan en gedrag van externe eigenschappen en methoden worden voor deze kleine dynamische versie bij uitvoering getest, niet statisch bewezen. De methode `verplaatsen` is voorlopig een expliciet geregistreerde test-/hostfunctie; een object- of methodedefinitiesyntaxis is nog niet ontworpen. De [Wasm-backend](../ontwikkeling/webassembly.md) beschrijft de nog te ontwerpen runtimegrens.

**Voorstel voor naamcontrole:** geef de compiler naast de bron een schema van toegestane startcontextnamen; voor dit voorbeeld zijn dat `zelf` en `Roelofarendsveen`. De runtime ontvangt later de bijbehorende concrete waarden. Controleer bij compileren namen tegen het schema, en bij starten of de vereiste waarden/methoden aanwezig zijn. Parameters en bekende functies komen uit de programmatekst. Andere vrije namen geven een compileerfout. Dit is test-/hostconfiguratie, geen nieuwe `import`-syntaxis. De concrete API en representatie moeten jullie nog ontwerpen.

## Fouten en grenzen

Bewaar bij elk token en elke boomknoop een bronlocatie. Toon bestandsnaam, regel, kolom, het probleem en een gerichte aanwijzing. Bijvoorbeeld als ontwerpeis: `Parameter 'nieuweX' is in deze aanroep twee keer ingevuld.` Stop bij een fout vóór bytecode-uitvoer. De VM moet daarnaast uitvoeringsfouten melden, zoals een ontbrekende eigenschap. Een Rust-panic is geen normale reactie op ongeldige gebruikersinvoer.

De [EBNF](grammatica.ebnf) legt de vorm vast. De betekenisregels hierboven, zoals unieke parameters, getalgrenzen en argumentbinding, worden apart gecontroleerd. De [testmatrix](../../tests/README.md) bevat de benodigde positieve en negatieve gevallen.

## Bespreken vóór uitbreiding

Bevestig de voorstellen voor inspringing, naam- en getalbereik, externe namen en gemengde argumenten. Bepaal daarna vanuit het [onderzoekskader](../pws/onderzoekskader.md) welke extra constructies nodig zijn. Nederlandse woorden alleen bewijzen geen betere toegankelijkheid.
