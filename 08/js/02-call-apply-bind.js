// const showName = function() {
//   console.log('this: ', this);
//   console.log('this.name: ', this.name);
// };

// // console.log(showName);

// const dan = {
//   name: 'Dan',
//   showName,
// };

// const mike = {
//   name: 'Mike',
//   showName,
// };

// showName.call(dan);
// showName.call(mike)

/* 
* =============================================
* call визиває функцію тут і зараз
* call з аргументами
*/

// const showName = function(num1, num2, num3) {
//   console.log(num1, num2, num3);
//   console.log('this: ', this);
//   console.log('this.name: ', this.name);
// };

// console.dir(showName);

// const dan = {
//   name: 'Dan',
//   // showName,
// };

// const mike = {
//   name: 'Mike',
//   // showName,
// };

// showName.call(dan, 1, 2, 3);
// showName.call(mike, 5, 6, 7);

/* 
* =============================================
* apply з аргументами
*/

// const showName = function(num1, num2, num3) {
//   console.log(num1, num2, num3);
//   console.log('this: ', this);
//   console.log('this.name: ', this.name);
// };

// console.dir(showName);

// const dan = {
//   name: 'Dan',
//   // showName,
// };

// const mike = {
//   name: 'Mike',
//   // showName,
// };

// showName.apply(dan, [1, 2, 3]);
// showName.apply(mike, [5, 6, 7]);

/* 
* =============================================
* bind не визиває функцію тут і зараз. Робить копію функції, привязує контекст і передає ссилку на фу-я з контекстом
*/

// const showName = function(num1, num2, num3) {
//   // console.log(num1, num2, num3);
//   console.log('this: ', this);
//   console.log('this.name: ', this.name);
// };

// // console.dir(showName);

// const dan = {
//   name: 'Dan',
//   // showName,
// };

// const mike = {
//   name: 'Mike',
//   // showName,
// };

// const bindResult = showName.bind(dan);

// bindResult();