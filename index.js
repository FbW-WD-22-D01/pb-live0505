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
fruits[2] = "Kiwi";


