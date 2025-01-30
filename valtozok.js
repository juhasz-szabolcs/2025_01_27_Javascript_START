// A JavaScript nem típusos nyelv: a változóknak nem kell (és nem is tudjuk) megadni a típusát.
// A változók megadása:

//1. változó deklarálása (deklarálni kell használat előtt)
var a = 2;
console.log(a);

//2. változó értékének módosítása
let b = 3;
b = 4;
console.log('A változó értéke: ' + b);
const c = 5;
// c = 6; //hiba


var x = 5;
console.log(x);
var x = "alma";
console.log(x); //A var változók újradefiniálhatók.


// console.log(typeof(2)); // number
// console.log(typeof(true)); // boolean
// console.log(typeof('Aladár')); // string
// console.log(typeof({name:'Béla', age: 42})); // object
// console.log(typeof(function f(a, b) {return a + b})); // function
// console.log(typeof(nonexisting)); // undefined



console.log("Ez egy normál üzenet");
console.warn("Ez egy figyelmeztetés!");
console.error("Ez egy hibaüzenet!");

console.time("időmérés");
for (let i = 0; i < 1000000; i++) {} // Egy kis időigényes művelet
console.timeEnd("időmérés");

console.table([
  { név: "Anna", kor: 25 },
  { név: "Béla", kor: 30 }
]);
