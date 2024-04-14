// Масиви - це впорядкована колекція даних

let arr = new Array();
let arr2 = [];

let cars = ["Audi", "Toyota", "BMW", 'Lanos'];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);

// Можемо замінити
// console.log('Array before', cars);

// cars[2] = 'Mers';

// console.log('Array after', cars);
// console.log(cars[2]);

// Додати ще один

// cars[3] = 'Lanos';
// console.log(cars);

// Загальна кількість елементів масиву зберігається у його властивості length:

// console.log(cars.length);

// -----
// У масивах можуть зберігатись елементи будь-якого типу.

let arrWithDifferentTypes = [ 
    'MacBook', 
    { name: 'Dan' }, 
    true, 
    function() { 
      console.log('Hello World'); 
    } 
  ];

  const resultFromArrayObj = arrWithDifferentTypes[1];

  const resultFromArrayFunction = arrWithDifferentTypes[3];
  console.log('resultFromArrayFunction', resultFromArrayFunction())

  // console.log('Result', resultFromArray.name);

  // отримати елемент з індексом 1 (об’єкт) та вивести його властивість name
// alert( arrWithDifferentTypes[1].name ); // Dan

// отримати елемент з індексом 3 (функція) та виконати її
// arrWithDifferentTypes[3](); // hello

// Отримати останні елементи за допомогою “at”
// cars[fruits.length - 1].
// console.log(cars.at(-1));



