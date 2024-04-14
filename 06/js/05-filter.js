// Метод find шукає один (перший) елемент, на якому функція-колбек поверне true.


let students = [
  {id: 1, name: "Misha"},
  {id: 2, name: "Lena"},
  {id: 3, name: "Dan"},
  {id: 4, name: "Ira"},
];

// повертає масив перших двох користувачів
let bestStudents = students.filter(item => item.id < 3);

console.log('bestStudents', bestStudents);