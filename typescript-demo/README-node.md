# Typescript Beispiel
## Dependencies

Notwendige Bibliotheken trägt der Entwickler in der `package.json` ein, damit `npm install` sie laden und einbinden kann.

* entweder durch Editieren der `package.json`
* oder durch aufruf von `npm install *' mit dem Parmameter
  * `--save` für referenzierte Code-Bibliotheken
  * `--save-dev` für Tools

### Dependencies für Unit Tests mit Jest

Dieses Projekt nutzt das Jest Test-Framework. Um die package.json aufzubauen, wurden diese Schritte bereits ausgeführt:

```shell
# ts-node Kommandozeilen Tool
npm install --save-dev ts-node
# Jest
npm install typescript jest ts-jest @types/jest --save-dev
npm install --save-dev @jest/globals
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev @babel/preset-typescript
```

- Typescript Compiler `tsc`
- Jest test runner
- `ts-node` startet *.ts Dateien als Kommandos (wie `node`)
- Typescript Typen für Jest
- Babel für Typescript

## imports

Damit eine Klasse oder function in einer anderen Datei genutzt werden kann, muss sie mit einem import statement benannt werden:

```typescript
import { generatePairs } from "../../src/pairs/generatePairs";
```
- `from`muss den Pfad ausgehende von der importierenden Datei benennen und passend viele Ordner nach oben gehen (`../`)
- die Source Datei wird ohne Endung benannt
- Groß und Kleinschreibung sind entscheidend
- in der [tsconfig.json]() ist der Source Pfad benannt, relativ im Projekt, von dem aus die `from`Pfade interpretiert werden als `"rootDir"`:

    ```json
    {
        "compilerOptions": {
            "target": "ES6",
            "lib": [
                "es2015",
                "dom"
            ],
            "module": "CommonJS",
            "sourceMap": true,
            "outDir": "./dist",
            "rootDir": "./src"
        }
    }
    ```

#### Links

- Unit testing with Jest:
 - https://jestjs.io/docs/en/getting-started
 - https://bootcamp.uxdesign.cc/how-to-write-test-cases-in-typescript-fa7a263b7833
