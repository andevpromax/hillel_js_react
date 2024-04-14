
// reduce використовується для обчислення якогось одного значення на основі всього масиву.

// const numbers = [5, 10, 15, 20, 25];

// let total = numbers.reduce(function(accumulator, number, index, array) {
//   console.log('accumulator', accumulator);
//   console.log('number', number);
//   console.log('index', index);
//   console.log('array', array);
// });

// accumulator – результат попереднього виклику цієї функції, дорівнює initial при першому виклику (якщо переданий initial),
// item – черговий елемент масиву,
// index – його індекс,
// array – сам масив.

// const numbers = [5, 10, 15, 20, 25];

// let total = numbers.reduce(function(accumulator, number) {
//   return accumulator + number;
// }, 0);

// accumulator = 5 -> number = 10 -> return 5 + 10;
// accumulator = 15 -> number = 15 -> return 15 + 15;
// accumulator = 30 -> number = 20 -> return 30 + 20;
// accumulator = 50 -> number = 25 -> return 50 + 25;

// console.log('total', total);

// Рахуєм стипендію

// const students = ['Misha', 'Lena', 'Dan', 'Ira'];

// const scholarship = {
//   Misha: 100,
//   Lena: 200,
//   Dan: 300,
//   Ira: 400,
// };

// const value = Object.values(scholarship);

// console.log('value', value);

// const totalScholarship = value.reduce(function(accumulator, value) {
//   return accumulator + value
// }, 0)

// console.log('totalScholarship', totalScholarship);

// Кількість годин лекцій 

// const students = [
//   {id: 'student-1', name: 'Misha', lessonTime: 120, online: true},
//   {id: 'student-2', name: 'Lena', lessonTime: 220, online: false},
//   {id: 'student-3', name: 'Dan', lessonTime: 430, online: true},
//   {id: 'student-4', name: 'Ira', lessonTime: 500, online: true},
//   {id: 'student-5', name: 'Leon', lessonTime: 110, online: false},
// ];

// const totalLessonHours = students.reduce(function(allHours, student){
//   return allHours + student.lessonTime;
// }, 0)

// console.log('totalLessonHours', totalLessonHours);

// Загальна сума товарів в корзині

// const cart = [
//   {label: 'Apple', price: 100, quantity: 23},
//   {label: 'Orange', price: 76, quantity: 12},
//   {label: 'Melon', price: 43, quantity: 56},
//   {label: 'Banana', price: 333, quantity: 136},
//   {label: 'Kiwi', price: 57, quantity: 12},
// ];

// const totalCart = cart.reduce(function(totalPrice, item){
//   return totalPrice + item.price * item.quantity;
// }, 0);

// console.log('totalCart', totalCart);

// Зібрати всі коменти з інсти

// ----

const instagram = [
  {id: 1, name: 'Misha', likes: 120, comments: ['cool', 'nice', 'good']},
  {id: 2, name: 'Lena', likes: 220, comments: ['awesome', 'great', 'good']},
  {id: 3, name: 'Dan', likes: 430, comments: ['love', 'like', 'good']},
  {id: 4, name: 'Ira', likes: 500, comments: ['love', 'like', 'good', 'nice']},
  {id: 5, name: 'Leon', likes: 110, comments: ['cool', 'great', 'awesome', 'nice']},
];

const hello = [{comments: ['cool', 'nice', 'good']}];

const test = instagram.reduce(function(allComments, item){
  console.log('allComments', allComments)
  return allComments.push(...item.comments);
  // return allComments;
}, []);

console.log('test', test)


