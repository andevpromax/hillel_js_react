/* 
* =============================================
* DOM
*/

// console.dir(window)
// console.dir(document)

/* 
* =============================================
* redirect
*/

// location

// const doc = {
//   location: {
//     href: 'https://smile.com'
//   }
// }

// console.log(document.location)
// console.log(document.location.href)

// document.location.href = 'https://google.com'

// setTimeout(() => document.location.href = 'https://google.com', 3000);

// console.dir(window)

// setTimeout(() => window.open('https://google.com'), 3000);


/* 
* =============================================
* children
*/

// console.log(document.children)

/* 
* =============================================
* querySelector - повертає перший знайдений
*/

// let h1 = document.getElementById('_first')
// console.log('h1', h1)

// h1 = document.getElementsByClassName('first');
// console.log('h1', h1)

// let firstHeading = document.querySelector('h1') // tag
// // console.log('firstHeading', firstHeading)

// let secondHeading = document.querySelector('#_first') // id
// // console.log('secondHeading', secondHeading)

// let thirdHeading = document.querySelector('.first') // id
// // console.log('thirdHeading', thirdHeading)

// let specificItem = document.querySelector('h2.test')
// console.log('specificItem', specificItem)

/* 
* =============================================
* querySelectorAll - повертає всі знайдені елементи
*/

// const allH2 = document.querySelectorAll('h2');
// console.log('allH2', allH2);

// allH2.map();
// allH2.forEach(item => console.log(item))

// allH2.forEach(item => console.log('innerHTML', item.innerHTML))
// allH2.forEach(item => console.log('innerText', item.innerText))

/* 
* =============================================
* Змінити щось на сторінці
*/

// const h2First = document.querySelector('h2');

// h2First.innerHTML = 'The best students in our school'

/* 
* =============================================
* InnerText vs InnerHTML
*/

// const h2First = document.querySelector('h2');

// h2First.innerHTML = `<em>Simba</em>`;

// h2First.innerText = `<em>Simba</em>`;

/* 
* =============================================
* Зміна id
*/

// let firstHeadingChangeId = document.querySelector('h1')
// console.log('firstHeadingChangeId', firstHeadingChangeId)

// firstHeadingChangeId.id += '!!!'

/* 
* =============================================
* class - className
*/

// let h1 = document.querySelector('h1')
// console.log(h1.className)

// h1.className += ' underlined';
// h1.className = h1.className.replace(` underlined`, ' test')


/* 
* =============================================
* class - classList
*/

// let h1 = document.querySelector('h1')
// console.log(h1.classList)

// h1.classList.add('underlined')
// h1.classList.remove('first')

// console.log(h1.classList.contains('first'))





