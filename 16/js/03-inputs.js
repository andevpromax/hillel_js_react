/* 
* =============================================
* Події input & change
* Чекбокси і властивість checked
*/

// const inputRef = document.querySelector('.js-input');
// console.log('inputRef', inputRef);

// inputRef.addEventListener('change', (event) => {
//     console.log('event', event);
//     console.log('Hello');
// });

// const nameLabelRef = document.querySelector('.js-button > span');

// inputRef.addEventListener('change', (event) => {
//     nameLabelRef.textContent = event.target.value;
// });

//* input

// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span');

// inputRef.addEventListener('input', (event) => {
//     nameLabelRef.textContent = event.target.value;
// });

//* change

// const licenseRef = document.querySelector('.js-license');
// const btnRef = document.querySelector('.js-button');

// console.log(btnRef.disabled);
// console.log('licenseRef.checked', licenseRef.checked);

// licenseRef.addEventListener('change', event => {
//     console.log('event', event);
//     btnRef.disabled = !event.target.checked;
// })


/* 
* =============================================
* focus & blur
*/

// const inputRef = document.querySelector('.js-input');

// inputRef.addEventListener('focus', (event) => {
//     console.log('Отримав фокус')
// });

// inputRef.addEventListener('blur', (event) => {
//     console.log('Втратив фокус')
// });

/* 
* =============================================
* refactoring
*/

// блок елементів
const inputRef = document.querySelector('.js-input');
const licenseRef = document.querySelector('.js-license');
const nameLabelRef = document.querySelector('.js-button > span');
const btnRef = document.querySelector('.js-button');


// реєстрація слухачів
inputRef.addEventListener('input', handleInputChange);
licenseRef.addEventListener('change', handleLicenseChange);
inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputBlur);


// блок колбеків
function handleInputChange(event) {
    nameLabelRef.textContent = event.target.value;
};

function handleLicenseChange(event) {
    btnRef.disabled = !event.target.checked;
};

function handleInputFocus(event) {
    console.log('Отримав фокус');
};

function handleInputBlur(event) {
    console.log('Втратив фокус')
};
