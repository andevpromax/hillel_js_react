// Масиви - це впорядкована колекція даних

// Ітерація по масиву
// const cars = ["Audi", "Toyota", "BMW", 'Lanos'];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);

// Коли потрібен доступ до індексу масива використовуєм цикл for

// for (let i = 0; i < cars.length; i++) {
//   console.log(i);

//   console.log(cars[i]);
// }

// Коли НЕ потрібен доступ до індексу масива використовуєм цикл for of

// const cars = ["Audi", "Toyota", "BMW", 'Lanos'];

// for (const car of cars) {
//   console.log('car', car)
// }

// логіка з break & continue

const cars = ["Audi", "Toyota", "BMW", 'Lanos'];
const carToFind = 'Toyota';

let message = 'There is no such car'


for (let i = 0; i < cars.length; i++) {
  const car = cars[i];

  if (carToFind === car) {
    console.log('You found such car');
  }
};
console.log('message', message)

// for (const car of cars) {
//   if (carToFind === car) {
//     message = 'You found such car';
//     break;
//   }
// };

// console.log(message);

// Багатомірні масиви

// const test = [1, 2, 3]

// const board = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log('board', board[1][2]);












