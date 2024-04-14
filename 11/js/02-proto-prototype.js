let a = { value: 100 };

let b = {
  salary: a
};

let c = a;

// console.log(a === b.salary);
// console.log(a === c)

// console.log(a);

// b.salary.value = 1000;

// console.log(a)

// console.log(a.value === 1000);
// console.log(c.value === 1000);

// console.log({} != {});

/* 
* =============================================
* Що таке __proto__ і ptototype
* Якісь __proto__ якихось обєктів === Якимось prototype інших обєктів
*/

/* 
* =============================================
*  __proto__ - у всіх обєктів
*/

let person = {} // person.__proto__
// console.log(person.__proto__)

let users = [] // users.__proto__
// console.log(users.__proto__)

let age = 22 // age.__proto__
// console.log(age.__proto__)

let str = 'hello' // str.__proto__
// console.log(str.__proto__)

function sayHello(){} // sayHello.__proto__
let sayBye = function(){} // sayBye.__proto__
let arrowFunc = () => {} // arrowFunc.__proto__

// console.log(sayHello.__proto__)

let isModalOpen = true // isModalOpen.__proto__
// console.log(isModalOpen.__proto__)

/* 
* =============================================
*  __proto__ - це обєкт
*  __proto__ - різних по типу обєктів - незалежні різні обєкти
*  __proto__ - в одинакових по типу обєктів вони рівні, це один і той самий обєкт
*/

let animal = {};
let animal2 = {};

// console.log(animal.__proto__ === animal2.__proto__);

let bikes = [];
let cars = [];
// console.log(bikes.__proto__ === cars.__proto__);

let value = 100;
let salary = 1000;
// console.log(value.__proto__ === salary.__proto__);

let oneString = 'Hello World';
let secondString = 'Learn JS';
// console.log(oneString.__proto__ === secondString.__proto__);

function func1() {};
let func2 = function() {};
let func3 = () => {};
// console.log(func1.__proto__ === func2.__proto__);
// console.log(func2.__proto__ === func3.__proto__);

let isOkay = true;

// console.log(animal.__proto__ === isOkay.__proto__);


/* 
* =============================================
*  Будь який обєкт в JS створюється за допомогою функції конструктора (класу) - new SomeClass
*/

// let flat = {room: 1000} // new Object(...)

// let flat2 = new Object({room: 10})

// // console.log(flat)
// // console.log(flat2)

// let students = [] // new Array(...)

// let age2 = 33 // new Number(...)

// let hello = 'Hello my students' // new String(...)

// function func4() {}; // new Function(...)
// let func5 = function() {}; // new Function(...)
// let func6 = () => {}; // new Function(...)

// let Car = function() {} // new Function(...)

// let bmw = new Car('bmw') // new Car(...)

// console.dir(Car)
// console.log('bmw', bmw)

// let isClose = true; // new Boolean(...)

/* 
* =============================================
* В будь якого обєкта є властивість __proto__
* Щоб розуміти що за __proto__ - потрібно знати за допомогою якої ф-ї конструктора створений обєкт 
*/

/* 
* =============================================
* Object
* Promise
* Function
* Boolean
* Number
* String
* Array
*/

/* 
* =============================================
* Будь яка функція, крім стрілочної - має властивість prototype
*/

function first (){};
const second = function (){};
function Third(){};

// console.dir(first);
// console.dir(second);
// console.dir(Third);

// console.log(Object.prototype);
// console.log(Promise.prototype);
// console.log(Function.prototype);
// console.log(Boolean.prototype);
// console.log(Number.prototype);
// console.log(String.prototype);
// console.log(Array.prototype);

/* 
* =============================================
* prototype - незалежні один від одного обєкти
*/

/* 
* =============================================
* __proto__ будь якого обєкта посилається на prototype функції конструктора, за допомогою якої цей обєкт був створений
*/

let flat = {} // flat.__proto__ === Object.prototype

// console.log(flat.__proto__ === Object.prototype)

let students = [] // students.__proto__ === Array.prototype
// console.log(students.__proto__ === Array.prototype)

let age2 = 33 // age2.__proto__ === Number.prototype
// console.log(age2.__proto__ === Number.prototype)

let hello = 'Hello my students' // hello.__proto__ === String.prototype
// console.log(hello.__proto__ === String.prototype)


function func4() {}; // func4.__proto__ === Function.prototype
let func5 = function() {}; // func5.__proto__ === Function.prototype
let func6 = () => {}; // func6.__proto__ === Function.prototype

let Car = function() {} // Car.__proto__ === Function.prototype

let bmw = new Car('bmw') // bmw.__proto__ === Car.prototype

let isClose = true; // isClose.__proto__ === Boolean.prototype


/* 
* =============================================
* Check
*/

let human = {name: 'Mike'};

// console.log(human.prototype) // ?
// console.log(human.__proto__) // ?
// console.log(human.__proto__ === Object.prototype) // ?

let arrOfNum = [1, 2, 3, 4, 5];

// console.log(arrOfNum.prototype) // ?
// console.log(arrOfNum.__proto__) // ?
// console.log(arrOfNum.__proto__ === Array.prototype) // ?

// function Human(name) {
//   this.name = name;
// };
// console.log(Human.prototype) // ?
// console.log(Human.__proto__) // ?
// console.log(Human.__proto__ === Function.prototype) // ?

const user10 = new Human('Dan');

// console.log(user10.prototype) // ?
// console.log(user10.__proto__) // ?
// console.log(user10.__proto__ === Human.prototype) // ?

function Human(name) {
  this.name = name;
};

// const userOne = new Human('Dan');
// const userTwo = new Human('Mike');

// console.log(userOne.__proto__ === userTwo.__proto__);

// const arrowFunc2 = () => {}
// console.log(arrowFunc2.prototype);
// console.log(arrowFunc2.__proto__);
// console.log(arrowFunc2.__proto__ === Function.prototype);

