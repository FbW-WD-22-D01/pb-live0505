# Live Coding Array Methoden I

### Array deklarieren
- 2 Varianten:
    - Literal       --> const myArr = [1,2,3];
    - Kostruktor    --> const myArr = new Array();

### Array manipulieren (Array wird verändert)
- literal Schreibweise `myArr[2] = 'Käse'`
- `pop()` - entfernt letzte Element
- `push()` - ein Element ans Ende hinzufügen
- `shift()`, `unshift()`  - Element vom Anfang entfernen/hinzufügen
- `reverse` - Array umdrehen 
- `splice()` - entfernt Elemente und/oder fügt neue Elemente hinzu

### Array ausgeben (der Array bleibt erhalten)
- `indexOf()` - gibt Position (number) eines Elements im Array zurück
- `includes()` - gibt zurück ob ein Element im Array enthalten ist (boolean)
- `join()` - erstellt einen String aus dem Array 
- `slice()` - kopiert Elemente aus dem Array heraus


### Ressourcen zum Nachlesen:
- [MDN](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [W3Schools](https://www.w3schools.com/js/js_array_methods.asp)