
// Функція - значення, тип обєкт
// Це окремий вид обєкту - за посиланням

// console.log('[] === []', [] === []);
// console.log('{} === {}', {} === {});
// console.log('function() {} === function() {}: ', function() {} === function() {});
// 'use strict'

// const fnA = function() {
//   console.log('this: ', this)
//   console.log('hello');
// };

// fnA();

// const fnB = fnA;

// console.log(fnB === fnA);

/* =============================================
* Контекст в JS похожий як контекст в нашій мові
*
* Коля біжить дуже швидко, так як Коля намагається наздогнати автобус.
*
* Коля біжить дуже швидко, так як ВІН намагається наздогнати автобус. 
*/

// const kolia = {
//   name: 'Kolia',
//   age: 23,

//   showName() {
//     console.log(`My name is ${kolia.name}`);
//   },
// };

// console.log(kolia.name);

// kolia.showName();

// // В кожній функції є this!

// const kolia = {
//   name: 'Dan',

//   showName() {
//     console.log('This: ', this);
//     console.log(this.name);
//   },
// };

// kolia.showName();

/* 
* =============================================
* Контекст (this)
* - Де і як була обьявлена функція не має ніякого впливу на контекст!
* - Контекст визначається в момент виклику функції, якщо він не привязаний явно 
*/


/* 
* =============================================
* Як метод обєкту. В контексті обєкту
*/

// const user = {
//   name: 'Dan',
//   tag: 'React',

//   showThis() {
//     console.log('this: ', this);
//   },

//   showName() {
//     console.log('this.name', this.name);
//   }
// };

// user.showThis();

// user.showName();

/* 
* =============================================
* Виклик без контексту
*/

// const func = function() {
//   console.log('this: ', this);
// };

// func();

// use strinct, global Window object

/* 
* =============================================
* Як метод обєкту, но обявлена як зовнішня ф-я. В контексті обєкта
*/

// const showName = function () {
//   console.log('this: ', this);
//   console.log('this.name: ', this.name);
// };

// showName();

// const user = {
//   name: 'Dan',
// };

// console.log('user before', user);

// user.age = 23;

// user.showNameInObject = showName;

// console.log('user after', user);

// user.showNameInObject();

/* 
* =============================================
* Виклик без контексту,но обявили як метод обєкту
*/


// const user = {
//   name: 'Dan',
//   age: 22,

//   showName() {
//     console.log('this: ', this);
//     console.log('this.name', this.age);
//   },
// };

// user.showName();

// const nameFromObject = user.name;
// console.log('nameFromObject: ', nameFromObject);

// const outerShowName = user.showName;

// outerShowName();
// user.showName();


/* 
* =============================================
* Контекст в колбек функціях
*/

// const user = {
//   name: 'Dan',

//   showName() {
//     console.log('this: ', this);
//     console.log('this.name', this.name);
//   },
// };

// 1
// const actionForFunction = user.showName;

// 3
// const triggerAction = function(action) {
//   console.log('action: ', action);

//   action();
// };

// 2
// triggerAction(actionForFunction);

// let user = {
//   name: 'Mike',
//   age: 34,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`)
//   },
// }

// // user.sayHello();

// let person = user;

// user = null;
// console.log('user after delete', user);

// console.log(person);

// person.sayHello();

/* 
* =============================================
* Test
*/

// const factoryOfChangingColor = function() {

//   const changeColor = function(color) {
//     console.log('this', this);
//     console.log('this.color: ', this.color);
//   };

//   // changeColor('black');

//   const fruit = {
//     color: 'green',
//   };

//   fruit.changeColor = changeColor;

//   // fruit.changeColor()

//   return fruit.changeColor;
// };

// console.log('factoryOfChangingColor: ', factoryOfChangingColor())

// const outerChangeColor = factoryOfChangingColor();

// console.log('outerChangeColor', outerChangeColor)

// outerChangeColor();

// console.log('outerChangeColor', outerChangeColor);

/* 
* =============================================
* Test
*/

// const factoryOfChangingColor = function() {

//   const changeColor = function() {
//     console.log('this.color: ', this.color);
//   };

//   return changeColor;
// };

// const cloth = {
//   tshirt: 'red',
//   changeColor: factoryOfChangingColor(),
// };

// cloth.changeColor('purple');


