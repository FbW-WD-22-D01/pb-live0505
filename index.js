// ARRAYS

// GEORDNETE LISTE

// Variante 1 - Array deklarieren
let meinArray = ["Ball", "Murmel", "Gitarre"] ;
console.log(meinArray);


// Variante 2 mit Kontruktor 
let array2 = new Array("Ball", "Murmel", "Kugel");
let arrLeer = new Array(5);

// Die Länge eine Arrays ausgeben
let string = "Ich bin ein String";
console.log('Länge des Strings: ',string.length);
console.log(array2.length);


// Unser Array für Übung
let fruits = ["Apfel", "Birne", "Mango"]; 


// Elemente zugreifen
console.log(fruits.length);
console.log(fruits[2]);

// letzte Element zugreifen
console.log('Letztes Element erreichen: ',fruits[fruits.length-1]);

// mehrere Elemente ausgeben
console.log(fruits[0], fruits[1], fruits[2]);


// Element verändern
fruits[3] = "Kiwi";
console.log(fruits);
const arrConst = [1,2,3,4];
arrConst[3] = "Hallo";

// METHODEN

// pop() push()

const fruits2 = [
    "Orange",
    "Apple",
    "Mango",
    "Kiwi"
];

// pop() entfernt den letzten Wert eines Array und gibt den Wert zurück
console.log(fruits2.length);
let zurückPop = fruits2.pop(); //pop() gibt den Wert den es entfernt zurück
console.log('Neuer Array: ',fruits2);
console.log('Pop zurück: ',zurückPop);

// push() fügt ein Element ans Ende des Arrays und gibt die Länge des veränderten Arrays zurück
let zurückPush = fruits2.push("Coconut");
console.log(fruits2);
console.log('Push zurück:', zurückPush);


// shift() entfernt das erste Element des Arrays und gibt es zurück
let shiftZurück = fruits2.shift();
console.log(fruits2);

// unshift() fügt ein Element an den Anfang des Arrays und gibt die länge des manipulierten Arrays zurück
let unshiftZurück = fruits2.unshift('Lemon');
console.log('Neuer Array nach unshift:', fruits2, 'unshift des Arrays zurück:', unshiftZurück);

// reverse() --> dreht den Array um und gibt den Array als Rückgabe zurück
fruits2.reverse();
console.log(fruits2);

// indexOf() --> gibt euch die Postion eines Elements zurück
let position = fruits2.indexOf('Apple');
console.log(position);



const month = ["Januar", "Februar", "März"];

// includes() --> gibt euch zurück, ob ein Wert vorhanden ist --> Rückgabewert boolean
console.log(month.includes("Januar"));

// join() --> erzeugt einen String aus den Elementen des Arrays
let neuerString = month.join();
console.log(month);

// split() --> erzeugt aus einem String einen Array
string = "Ich bin ein String";
let strgArr = string.split(' ');
console.log(strgArr);

// splice --> Elemente entfernen oder hinzufügen, gibt die entfernten Elemente als Array zurück
let spliceReturn = month.splice(3,0, 'April', 'Mai'); // splice(index, wieiviel Löschen, neue Elemente)
console.log(month);
// console.log(spliceReturn);


// slice --> erstellt eine (shallow) Kopie beginnend von der Startposition hin zur Endposition
console.log('Original: ', month);
const copy = month.slice(2, 4); //slice(Start Index, Ende Index)
console.log('Unverändertes Original: ',month);
console.log('Kopie:' ,copy);