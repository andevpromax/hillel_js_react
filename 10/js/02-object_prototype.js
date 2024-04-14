/* 
* =============================================
* Прототип обєкту
* Object.create()
* [[Prototype]] & __proto__
* Ланцюжок прототипів
*/

// let person = {
//   walk: true,
//   talk: true,
// };

// let employee = {
//   typeCode: true,
// };

// let user = {
//   x: 10
// };

// employee.__proto__ = person;

// user.__proto__ = employee

// console.log('user', user)

// const test = {}

// console.log('employee', employee)
// console.log('typeCode', employee.typeCode)
// console.log('walk', employee.walk)
// console.log('talk', employee.talk)

// console.log('person', person)


// const objA = {
//   x: 1,
//   y: 2,
// };

// const objB = {
//   z: 10,
// };

// console.log('objA', objA.hasOwnProperty('x'));

// const objA = Object.create(objB);

// console.log('objA.z', objA.z)



// objA.x = 1;
// objA.y = 2;

// console.log('objA', objA);

/* 
* =============================================
* Правила пошуку в цепочці прототипів
*/

// console.log(objA.x);
// console.log(objA.y);
// console.log(objA.z);
// console.log(objA.hello);

