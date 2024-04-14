// Для “var” не існує блочної області видимості

// if (true) {
//   var test = 'Hello'; // використовуємо "var" замість "let"
// }

// console.log(test); 


// Якщо б ми використали let test замість var test, тоді змінна була б видима тільки всередині if:

// if (true) {
//   let test = 'Hello'; // використовуємо "var" замість "let"
// }

// console.log(test); 

// loops

// for (var i = 0; i < 10; i++) {
//   var number = 1;
//   // ...
// }

// console.log(i);   // 10, "i" видима за межами циклу, це глобальна змінна
// console.log(number);

// Якщо блок коду знаходиться всередині функції, тоді var стає змінною рівня функції:

// function greeting() {

//   if (true) {
//     var phrase = "Hello";
//   }

//   // console.log(phrase); // спрацьовує
// }

// greeting();
// console.log(phrase); // ReferenceError: phrase не визначена

// “var” терпить повторні оголошення

// let person;
// let person; // SyntaxError: 'user' вже оголошена

// var person = "Dan";
// var person = "Mike"; 

// цей "var" нічого не робить (змінна вже оголошена). Зміниться лише значення
// // ...помилки не виникне

// console.log(person);

// Змінні “var” можуть бути оголошені після їх використання
// Оголошення за допомогою var обробляються при запуску функції (або скрипта для глобальних змінних).

// function greeting() {

//   phrase = "Hello";

//   console.log(phrase);

//   var phrase;
// }
// greeting();

// Однаково

// function greeting() {

//   var phrase;

//   phrase = "Hello";

//   console.log(phrase);
// }
// greeting();

// Однаково

// function greeting() {
//   phrase = "Hello";

//   if (false) {
//     var phrase;
//   }

//   console.log(phrase);
// }
// greeting();

// Таку поведінку називають “підняттям”, оскільки всі var “піднімаються” на початок функції.

// Оголошення змінних піднімаються, але присвоєння значень – ні.


// function greeting() {

//   console.log(phrase);

//   var phrase = "Hello";

//   console.log('phrase after', phrase);
// }
// greeting();

//Оголошення обробляється на початку виконання функції (“піднімається”), 
// однак присвоєння значень завжди відбувається в тому рядку коду, де воно вказано. 
// Отже, код працює наступним чином:

// function greeting() {
//   var phrase; // оголошення змінної спочатку.

//   console.log(phrase); // undefined

//   phrase = "Hello"; // ...присвоєння - в момент, коли виконується даний рядок коду.
// }

// greeting();

// IIFE виглядає так:

// (function() {

//   var message = "Hello";

//   console.log(message);

// })();

// Function Expression обгортається дужками(function {...}), 
// тому що коли рушій JavaScript зустрічає "function" в основному коді, 
// він розуміє це як початок Function Declaration. Але Function Declaration повинна мати назву, 
// тому такий код викличе помилку:

// Намагається оголосити і негайно викликати функцію
// function() { // <-- SyntaxError: Оператори функцій вимагають назви

//   var message = "Привіт";

//   alert(message); // Привіт

// }();

// синтаксична помилка через дужки нижче
// function go() {

// }(); // <-- не може негайно викликати Function Declaration

// Отже, дужки навколо функції – це хитрість, щоб показати JavaScript, 
// що функція створена в контексті іншого виразу, а отже, це Function Expression: 
// вона не потребує назви і її можна викликати негайно.

// Способи створення IIFE
// У всіх вищенаведених випадках ми оголошуємо Function Expression і негайно запускаємо його.

// (function() {
//   console.log("Дужки навколо функції");
// })();

// (function() {
//   console.log("Круглі дужки навколо всього");
// }());

// !function() {
//   console.log("Побітовий оператор NOT запускає вираз");
// }();

// +function() {
//   console.log("Унарний плюс запускає вираз");
// }();

// 1. FD function
// 2. FE const test = function...
// 3. Arrow Function
// 4. Callback function
// 5. IIFE


