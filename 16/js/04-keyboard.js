/* 
* =============================================
* Типи подій: keypress, keydown, keyup
* Обмеження: keypress
* Властивості обєкта події клавіатури
*/


//* keypress - на клавіші які генерують символи

// window.addEventListener('keypress', event => {
//     console.log('event', event);
// });

// //* keydown - всі

// window.addEventListener('keydown', event => {
//     console.log('event', event);
// });

//* key & code

// window.addEventListener('keydown', event => {
//     console.log('key', event.key);
//     console.log('code', event.code);

//     if (event.code === 'KeyG') {
//         console.log('U are Winner!');
//     };
// });

//* Escape

// window.addEventListener('keydown', event => {
//     if (event.code === 'Escape') {
//         console.log('Escape');
//     };
// });

//* output text

// const outputTextRef = document.querySelector('.js-output');
// const clearBtnRef = document.querySelector('.js-clear');
// console.log('outputTextRef', outputTextRef)

// window.addEventListener('keypress', event => {
//     outputTextRef.textContent += event.key;
// });

// clearBtnRef.addEventListener('click', () => {
//     outputTextRef.textContent = '';
// })
