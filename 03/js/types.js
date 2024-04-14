// неявне (implicit) та явне (explicit)

// Явне перетворення рядка в число 
let num = parseInt("10"); 

// Явне перетворення числа в рядок 
let str = String(10); 

// Неявне перетворення рядка в число 
let sum = "5" + 5; // sum дорівнює "55" 

// Явне перетворення числа в рядок і об'єднання рядків 
let message = "The result is " + String(10);

true + false
12 / "6"

"number" + 15 + 3

15 + 3 + "number"

"foo" + + "bar"

'true' == true

false == 'false'

null == ''

!!"false" == !!"true"

//Перетворення на рядок

String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'

let someValue = true;
console.log(typeof value); // boolean

someValue = String(value); // "true"
console.log(typeof value); // string

// Перетворення на число

console.log( "10" / "5");

let someString = "777";
console.log(typeof someString); // string

let someNumber = Number(someString); // 123 - number

console.log(typeof someNumber); // number

// NaN
let age = Number("Hello!");

console.log(age); // NaN, помилка перетворення

// Правила перетворення на числа:

console.log('undefined', Number(undefined)) // NaN
console.log('null', Number(null)) // 0
console.log('true', Number(true)) // 1
console.log('false', Number(false)) // 0
console.log('string', Number(' ')) // 0

// Перетворення на булевий тип
console.log( Boolean(1) );
console.log( Boolean(0) );

console.log( Boolean("Hello") );
console.log( Boolean("") );

// null
null == 0               // false, null не преобразуется в 0
null == null            // true
undefined == undefined  // true
null == undefined       // true




