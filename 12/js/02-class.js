/* 
* =============================================
* Клас. Переписуєм Hero на клас
*/

// class Hero {}

// const king = new Hero('King')

// console.log('king', king);

/* 
* =============================================
* Constructor - метод класу. Він перший виконується при створені екземпляру
*/

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// }

// class Hero {

//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   };

// };

// const king = new Hero('King', 1000);

// console.log('king', king)

/* 
* =============================================
* Метод - зразу пишем в блок класу. Заміна Hero.prototype.changeName...
*/

// class Hero {

//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   };

//   changeName(name) {
//     this.name = name;
//   }
// };

// const king = new Hero('King', 1000);
// console.log('king', king)
// king.changeName('Ronald');
// console.log('king another name', king)

/* 
* =============================================
* Static
*/

// class Hero {
//     static description = 'This is a hero'

//     constructor(name, xp) {
//       this.name = name;
//       this.xp = xp;
//     };
  
//     changeName(name) {
//       this.name = name;
//     }
//   };

//   console.dir(Hero)
  
//   const king = new Hero('King', 1000);
//   console.log('king', king)

  /* 
* =============================================
* Геттери і сеттери
*/

// class Hero {
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   };

//   getName() {
//     return this.name;
//   };
// };

// const king = new Hero('King', 1000);

// console.log('Name: ', king.getName());

class Hero {
  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  };

  get name() {
    return this._name;
  };

  set name(newName) {
    this._name = newName;
  }
};

const king = new Hero('King', 1000);

console.dir(Hero)


console.log('Name: ', king.name = '123');
console.log('Name: ', king.name);












