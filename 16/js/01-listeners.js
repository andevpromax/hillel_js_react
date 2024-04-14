/* 
* =============================================
* Події. Створення і видалення слухачів
* Посильна ідентичність колбеків
* Обєкт події
*/

// const targetBtnRef = document.querySelector('.js-target-btn');
// console.log('targetBtnRef', targetBtnRef);

// targetBtnRef.addEventListener('click', () => {
//     console.log(Date.now());
// });

// targetBtnRef.addEventListener('click', () => {
//     console.log('Hello');
// });

/* 
* =============================================
* Розглянем варіант коли одна кнопка буде додавати слухач а інша видаляти
* Як правило ви не будете видаляти слухачі подій, але деколи це може знадобитись
*/

// const targetBtnRef = document.querySelector('.js-target-btn');

// const addListenerBtnRef = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// addListenerBtnRef.addEventListener('click', () => {
//     console.log('Event was added!');

//     targetBtnRef.addEventListener('click', () => {
//         console.log('Click!!!');
//     });
// });

// removeListenerBtnRef.addEventListener('click', () => {
//     console.log('Event was removed!');

//     targetBtnRef.removeEventListener('click', () => {
//         console.log('Click!!!');
//     });
// });


/* 
* =============================================
* Посильна ідентичність колбеків
*/

// const targetBtnRef = document.querySelector('.js-target-btn');

// const addListenerBtnRef = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// const handleOnClick = () => {
//     console.log('Click!!!');
// };

// //* додаєм
// addListenerBtnRef.addEventListener('click', () => {
//     console.log('Event was added!');

//     targetBtnRef.addEventListener('click', handleOnClick);
// });

// //* видаляєм 
// removeListenerBtnRef.addEventListener('click', () => {
//     console.log('Event was removed!');

//     targetBtnRef.removeEventListener('click', handleOnClick);
// });

/* 
* =============================================
* Обєкт подій
*/

// const targetBtnRef = document.querySelector('.js-target-btn');

// targetBtnRef.addEventListener('click', (event) => {
//     console.log('event', event);
//     console.log('target', event.target);
// });

