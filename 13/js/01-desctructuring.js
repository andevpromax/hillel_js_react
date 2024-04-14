
/* 
* =============================================
* Desctructuring assignment
*/

// let user = {
//   name: 'Mike',
//   animals: ['cat', 'dog'],
//   child: {
//     type: 'boy',
//     name: 'Artem',
//   },
// };

// console.log(user.name);
// console.log(user.animals);
// console.log(user.child.name);
// let { name } = user;
// console.log('hello', hello);


/* 
* =============================================
* Перезапис імені змінної
*/

// let { name: mikeName } = user;

// console.log('name', name);

// let user = {
//   name: 'Mike',
//   animals: ['cat', 'dog'],
//   child: {
//     type: 'boy',
//     name: 'Artem',
//   },
// };

// let {
//   name: mikeName,
//   child,
//   child: { name: childName, type },
// } = user;

// console.log('child', child);
// console.log('child name', childName);
// console.log('type', type);

/* 
* =============================================
* Масив
*/

// let user = {
//   name: 'Mike',
//   animals: ['cat', 'dog'],
//   child: {
//     type: 'boy',
//     name: 'Artem',
//   },
// };

// let {
//   animals,
//   animals: [mikesCat, mikesDog],
// } = user;

// console.log('animals', animals);
// console.log('mikesCat', mikesCat);
// console.log('mikesDog', mikesDog);

/* 
* =============================================
* Практично
*/

// let user = {
//     name: 'Mike',
//     animals: ['cat', 'dog'],
//     child: {
//       type: 'boy',
//       name: 'Artem',
//     },
//   };

// function getUserName(user) {
//   console.log(user.name);
//   console.log(user.child.name);
// };

// getUserName(user)

// function getUserName(user) {
//   const userName = user.name;
//   const userChildName = user.child.name;

//   console.log('userName', userName);
//   console.log('userChildName', userChildName);
// };

// getUserName(user)

// function getUserName({ name: userName, child: { name: userChildName }}) {
//   // const userName = user.name;
//   // const userChildName = user.child.name;

//   console.log('userName', userName);
//   console.log('userChildName', userChildName);
// };

// getUserName(user)

// let { name: mikeName, child, child: { name: childName, type } } = user;

/* 
* =============================================
* Помилка якщо не передамо обєкт
*/

// let user= {
//   name: 'Mike',
//   animals: ['cat', 'dog'],
//   child: {
//     type: 'boy',
//     name: 'Artem',
//   },
// };

// function getUserName(user) {

//   if (typeof user === 'object' && !Array.isArray(user)) {
//     console.log('userName', user.name);
//     console.log('userChildName', user.child.name);
//   }
// };

// getUserName(user)


// function getUserName({ name: userName, child: { name: userChildName }}) {

//   console.log('userName', userName);
//   console.log('userChildName', userChildName);
// };

// getUserName()

/* 
* =============================================
* Дефолтне значення
*/

// let user= {
//   name: 'Mike',
//   animals: ['cat', 'dog'],
//   child: {
//     type: 'boy',
//     name: 'Artem',
//   },
// };

// function getUserName({ name: userName = 'Default name' } = {}) {

//   console.log('userName', user.name);

// };

// getUserName()

/* 
* =============================================
* React
*/

// const React = {
//   render() {
//     return 'Hello render'
//   },
//   renderDOM() {
//     return 'render DOM'
//   },
//   formatting() {
//     return 'Hello formatting'
//   }
// }

// const formatting = React.formatting()
// const render = React.render();



// const { render, formatting } = React;

// console.log('render', render());
// console.log('formatting', formatting());







