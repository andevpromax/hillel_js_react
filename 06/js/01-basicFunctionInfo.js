// JavaScript функція – це блок коду, призначений для виконання певного завдання.
// Назви функцій можуть містити літери, цифри, підкреслення та знаки долара (за тими самими правилами, що й змінні).

// Ви можете використовувати код повторно: визначте код один раз і використовуйте його багато разів.
// Ви можете використовувати той самий код багато разів із різними аргументами, щоб отримати різні результати.

// Параметри функції перераховані в дужках () у визначенні функції.
// Аргументи функції – це значення, отримані функцією під час її виклику.

// Щоб створити функцію нам треба її оголосити.

// 1. function declaration (Оголошення (декларація) функцій)

// showConsole();

// function showConsole() {
//   console.log('Hello students!');
// };

// showConsole();

// 2. function expression (Функціональні вирази)

// const addTwoNumbers = function(a, b) {
//   // console.log('a: ', a);
//   // console.log('b: ', b);

//   const result = a + b;
//   // console.log('Result', result);

//   // return 100;

//   return result;
// };

// const resultFromFunc = addTwoNumbers(10, 20);


// console.log('resultFromFunc', resultFromFunc)

// addTwoNumbers(10, 20);
// addTwoNumbers(100, 200);
// addTwoNumbers(1000, 2000);
// addTwoNumbers(123, 2322);



// addTwoNumbers(10, 20);
// addTwoNumbers(100, 200);

// const result1 = addTwoNumbers(10, 20);
// console.log('result1', result1);

// const result2 = addTwoNumbers(100, 200);
// console.log('result2', result2);


// const functA = function() {
//   console.log('Початок виконання функції [functA]');
//   funcB();
//   console.log('Продовжила виконання функції [functA] після виходу з [funcB]');
// };

// const funcB = function() {
//   console.log('Виконується функція [functВ]');
// };

// console.log('Початок виконання [global] основного потоку коду');

// functA();

// console.log('Продовжила виконання [global] після виходу з [funcA]');