
/* 
* =============================================
* Власні властивості і for in
* Метод hasOwn Property
*/

// const objA = {
//   a: 10,
//   b: 20,
// };

// console.log('objA', objA)

// const objB = Object.create(objA);

// console.log('objB', objB);

// objB.x = 100;
// objB.y = 200;

// for (const key in objB) {
//   console.log(key);
//   console.log(objB[key]);
// };

// for (const key in objB) {
//   if (objB.hasOwnProperty(key)) {
//     console.log(key)
//   };
// };

// console.log(Object.keys(objB));


/* 
* =============================================
* Повторюєм функції конструктори.
* Статичні властивості і методи
*/

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.changeName = function(name) {
//   this.name = name;
// }

// const king = new Hero('King', 1000);

// console.log('king', king);
// console.dir(Hero);

/* 
* =============================================
* Статичні властивості і методи
*/

// [].push()

// new Array()

// console.log(Math.pow(2, 4));
// console.log(Number.parseInt('5a'))
// console.log(Math.PI)

/* 
* =============================================
* Добавляєм статичні властивості до Hero
*/

const Hero = function(name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.description = 'This is a hero!' // static

Hero.showStats = function(message) { // static
  console.log('This is from static', message);
}

Hero.prototype.changeName = function(name) {
  this.name = name;
};

const king = new Hero('King', 1000); // Hero


// console.dir(Hero);

// console.log(Hero.description)


// const showQueen = function(obj) {
//   console.log('Obj', obj);
// }

// showQueen(queen)


// console.log(Hero.showStats('Hello'))

// console.log('King desc', king.description)
// console.log('King showStat', king.showStats('Bye'))








