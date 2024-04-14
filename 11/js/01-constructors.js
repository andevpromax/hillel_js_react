
/* 
* =============================================
* Функції конструктори
*/

// const Person = function(name, age) {
//   this.name = name;
//   this.age = age
// };

// const user = new Person('Viktor', 23);

// const user2 = new Person('Dan', 33);

// const user3 = new Person('Slava',34);

// const user4 = new Person('Mike', 34);

// console.log('user', user);
// console.log('user', user2);
// console.log('user', user3);
// console.log('user', user4);

// 1. Створюється новий пустий обєкт
// 2. Функція конструктор викликається в контексті цього обєкту
// 3. Ключове слово this отримує посилання на цей обєкт
// 4. Конструктор виконується і як праіило модифікує this (створений обєкт, добавляючи властивості і методи)
// 5. Повертає this

/* 
* =============================================
* Однаковий набір властивостей, але значення - різні
*/

/* 
* =============================================
* Потрібен метод для підрахунку продаж
*/

// const Person = function(name, sales) {
//   this.name = name;
//   this.sales = sales;

//   this.sale = function() {
//     this.sales += 1
//   };
// };

// const user = new Person('Viktor', 100);
// const user2 = new Person('Mike', 1000);
// const user3 = new Person('Dan', 200);




/* 
* =============================================
* Проблема що метод sale знаходиться у кожному екземплярі - зайве навантаження, память
* Можем десь створити обєкт і покласти туди наш метод де всюди використовується
*/

// const Person = function(name, sales) {
//   this.name = name;
//   this.sales = sales;

//   // this.sale = function() {
//   //   this.sales += 1
//   // };
// };

// Person.prototype.sale = function() {
//   this.sales += 1
// }

// Person.prototype.changeName = function(name) {
//   this.name = name;
// };

// const user = new Person('Viktor', 100);
// user.changeName('Viki')
// const user2 = new Person('Mike', 1000);
// const user3 = new Person('Dan', 200);

// console.log(user)
// console.log(user2)
// console.log(user3)

/* 
* =============================================
* В кожної функції є властивість prototype
*/


/* 
* =============================================
* В prototype записуєм методи
*/


/* 
* =============================================
* Створюєм екземпляр, в ньому вже відсутній метод sale
*/

/* 
* =============================================
* __proto__ & prototype
*/

// const Person = function(name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// Person.prototype.sale = function() {
//   this.sales += 1
// }

// Person.prototype.changeName = function(name) {
//   this.name = name;
// };

// const user = new Person('Viktor', 100);

// console.dir(Person);
// console.log('user', user)

// console.log(user.__proto__ === Person.prototype);




// class Person2 {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }

// let user7 = new Person2("Иван");
// user.sayHi();
