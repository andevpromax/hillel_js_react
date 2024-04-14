/* 
* =============================================
* Attributes

*/

const root = document.querySelector('#root');
// root.innerHTML = `<h1>Hello, world</h1>`

// root.innerHTML += `<h1>Hello, world</h1>`

// root.innerHTML = `<h1>Hello, world</h1>${root.innerHTML}`;


/* 
* =============================================
* remove

*/

const body = document.querySelector('body');
console.log('body', body)
const h2 = document.querySelector('h2');

setTimeout(() => h2.remove(), 1000);

setTimeout(() => {
    h2.innerHTML += '!!!'
    body.prepend(h2)
}, 3000);
