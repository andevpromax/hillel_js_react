/* 
* =============================================
* mouseenter mouseleave
* mouseover mouseout
* mousemove
* Координати: https://nerdparadise.com/programming/javascriptmouseposition
*/

//* mouseenter mouseleave

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', (event) => {
//     // console.log(event);

//     const box = event.target;
//     box.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', (event) => {
//     const box = event.target;
//     box.classList.remove('box--active');
// })

//* mouseover mouseout

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', (event) => {
//     const box = event.target;
//     box.classList.add('box--active');
// })

// boxRef.addEventListener('mouseout', (event) => {
//     const box = event.target;
//     box.classList.remove('box--active');
// });

//* mousemove

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mousemove', (event) => {
    console.log('event', event);
})
