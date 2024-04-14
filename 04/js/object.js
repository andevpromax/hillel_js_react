
// Об’єкти – це асоціативні масиви
// Вони зберігають властивості - пари ключ-значення
// let car = new Object();
// let car2 = {};

// let person = {
//   name: "Dan",
//   age: 33,
// };

// alert( person.name );
// alert( person.age ); 

// console.log('Object: ', person.hello);

// будь яке значення

// let person = {
//   name: "Dan",
//   age: 33,
// };

// console.log('Object before: ', person.isBoss777)

// person.isBoss777 = true;
// person.car = 'Audi';

// console.log('Object after: ', person)

// Щоб видалити властивість ми можемо використати оператор delete:

// let person = {
//     name: "Dan",
//     age: 33,
//   };

// console.log('person', person);

// delete person.age;

// console.log('person', person);

// Ім’я властивості може складатися з декількох слів, але тоді воно має бути поміщено в лапки:

// let person = {
//   name: "Dan",
//   age: 33,
//   crazyDriver: true,
//   'crazy driver': true,
//   'hey-bro': 'hello',
// };

// const key = 'crazy driver'

// console.log('result', person[key])

// ------

// Квадратні дужки

// це викличе синтаксичну помилку
// person.crazy driver = true;

// let person = {};

// присвоювання значення властивості
// person["crazy driver"] = true;

// отримання значення властивості
// alert(person["crazy driver"]); // true

// видалення властивості
// delete person["crazy driver"];

// ------

// Квадратні дужки також дозволяють звернутися до властивості, 
// ім’я якої може бути результатом виразу. Наприклад, 
// ім’я властивості може зберігатися в змінній:

// let key = "crazy driver";
// // так само, як user["crazy driver"] = true;
// person[key] = true;

// ------

// let person = {
//   name: "Dan",
//   age: 33,
//   IsKnowEnglish: false,
// };

// let keyFromUser = prompt("What is the users name?", "name");

// доступ до властивості через змінну
// alert( person[keyFromUser] ); //

// ------
// Запис «через крапку» такого не дозволяє:

// let person = {
//   name: "Dan",
//   age: 33,
// };

// let key = "name";
// alert( person.key ) // undefined

// -----

// Обмеження для імен властивостей

// ці назви властивостей -- правильні
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// alert( obj.for + obj.let + obj.return );

//-----
// Перевірка існування властивості, оператор “in”
// "key" in object

// let person = {
//   name: "Dan",
//   age: 33,
// };

// alert( "age" in person ); // true, user.age існує
// alert( "someKey" in person ); // false, user.blabla не існує

// let person = { age: 33 };

// let keyInObject = "age";

// alert( keyInObject in person ); // true, властивість "age" існує

// let obj = {
//   test: undefined,
// };

// console.log('Test - 1', obj.test)
// console.log('Test - 2', obj.age)

// console.log('Test - 3', 'test' in obj)
// console.log('Test - 4', 'age' in obj)

// alert( obj.test ); // виведеться undefined, значить властивість не існує?
// alert( "test" in obj ); // true, властивість існує!

// Масиви і функції - це підвид обєктів

// const arr = ['a', 'b', 'c'];
// console.log(arr);


// arr.hello = ':)';

// console.log(arr.length);

// const testFunction = function() {};

// testFunction.hello = 'xD';
// console.log(testFunction.hello)
