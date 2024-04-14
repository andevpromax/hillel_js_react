/* 
* =============================================
* Подія submit
* Властивість elements
* Клас FormData
*/

// const formRef = document.querySelector('.js-register-form');
// console.log('formRef', formRef);

// formRef.addEventListener('submit', () => {
//     console.log('Submit');
// });

/* 
* =============================================
* Oldschool approach - action='/'
*/

// const formRef = document.querySelector('.js-register-form');
// console.log('formRef', formRef);

// formRef.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('Submit');
// });

/* 
* =============================================
* Збираєм всі елементи форми. 
*/

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', (event) => {
//     event.preventDefault();

//     console.log('Elements', event.target.elements);
// });

// 1 create custom form data

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', (event) => {
//     event.preventDefault();

    // const formElements = event.target.elements;

    // const formData = {
    //     name: formElements.name.value,
    //     email: formElements.email.value,
    //     password: formElements.password.value,
    //     subscription: formElements.subscription.value,
    // };

//     console.log('formData', formData);
// });

// 2 constructor FormData

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formRef = event.target;
//     const formData = new FormData(formRef);

//     const submittedData = {};

//     formData.forEach((value, key) => {
//         console.log('value: ', value);
//         console.log('key: ', key);

//         submittedData[key] = value;
//     });

//     console.log('submittedData', submittedData);
// });

