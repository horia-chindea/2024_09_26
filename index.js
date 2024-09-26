console.log("Hello world!");
// variabila declarata si apoi atribuita valoare:
let userName;
userName = "Monica";
console.log(userName);
userName = "_monica_";
console.log(userName);


// variabila declarata si initiata cu o valoare intr-o linie:
let email = "user@test.com";
console.log(email);

//constanta declarata cu valoare
const pi = 3.14;
// pi = 3.12;       // Interzisa reatribuirea unei valori unei constante

//Operatii aritmetice
const sumResult = 12 + 32;
// console.log("sumResult: " + sumResult);
//sau
console.log("sumResult: ", sumResult);

// diferenta:
const differenceResult = 33 - 71;
console.log("differenceResult:", differenceResult);

//inmultire
// const multiplyResult = 7 * 44;
// console.log("rezultat inmultire: ", multiplyResult);
// SAU
const a = 7;
const b = 44;
const multiplyResult = a * b;
console.log(`rezultat inmultire dintre ${a} si ${b} este: ${multiplyResult}`);

//impartire
const divisionResult = 12 / 5;
console.log("division result: ", divisionResult);

//modulo:
const rest = 12 % 5;
console.log("rest: ", rest);

//Tipuri de date:
//Number:
let myNumber = 123;
myNumber = myNumber + 1;
console.log("myNumber: ", myNumber);
console.log("Max safe integer is: ", Number.MAX_SAFE_INTEGER);
console.log("Max number is: ", Number.MAX_VALUE);

//Bigint:
let bigNumber = 987687657654654365435432n;  // n la sfarsit!
console.log("Big Number: ", bigNumber);

//String:
let password = "secret";
console.log("password: ",password);
//accesarea unui caracter dintr-un string:
let secondLetterOfPassword = password[1];   //numaratoarea incepe de la 0;
console.log("a doua litera: ", secondLetterOfPassword);
//concatenare stringuri:
let firstName = "Ion";
let lastName = "Ionescu";
let fullName = firstName + " " + lastName;
console.log("Full name: ", fullName);
//lungimea stringului:
let myString = "Hello people!";
let myStringLenght = myString.length;
console.log("myString: ", myString);
console.log("myStringLenght: ", myStringLenght);
//metode string:
let baseString = "Base";
let upper = baseString.toUpperCase();
let lower = baseString.toLowerCase();
console.log("base: ", baseString);
console.log("upper: ", upper);
console.log("lower: ", lower);

let substringOfBase = baseString.substring(0,3);
console.log("substringOfBase: ", substringOfBase);

