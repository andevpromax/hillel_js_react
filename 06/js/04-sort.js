
// Виклик arr.sort() сортує масив “на місці”, змінюючи в ньому порядок елементів.
// Він повертає відсортований масив, але зазвичай повернене значення ігнорується, оскільки змінюється сам arr.

const numbers = [5, 1000, 20, 44, 5000, 15, 20, 25];

numbers.sort();
// За замовчуванням елементи сортуються як рядки.

// console.log('numbers after simple sort', numbers);


numbers.sort(function(prev, next) {
  return prev - next;
});

console.log('numbers after sort with function', numbers);


const letters = ['b', 'B', 'a', 'A'];

letters.sort();
console.log('letters', letters);

// console.log('5'.charCodeAt())