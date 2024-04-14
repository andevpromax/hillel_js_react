// Функція зворотнього виклику (callback) і функція вищого порядку (hof)

// const fn = function(a) {
//   a()
// }

// fn(function() {})

// const x = 1;
// const y = function() {};

// console.log('Y', y)

// const hello = function(name) {
//   console.log(`Hello ${name}`);
// };

// const greetWithName = function(callback) {
//   const name = 'Viktor';

//   callback(name)
// }

// greetWithName(hello);

// Відкладений виклик: реєстрація подій

// const button = document.querySelector('.show-items');

// const handleButton = function() {
//   console.log('Click to show global code!!!');
// };

// button.addEventListener('click', handleButton);

// Виносимо функцію в окрему змінну

// const button = document.querySelector('button');

// const handlerButtonClick = ...

// button.addEventListener('click', function() {
//   console.log('Click');
// });

// Відкладений виклик: інтервали

// console.log('Перед функцією таймаут');

// setTimeout(function() {
//   console.log('Через 3 секунди в середині колбек функції');
// }, 3000)

// console.log('Після функції таймаут');


// Відкладений виклик: fetch

// console.log('Перед запитом до серверу');

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log('Після запиту до серверу');