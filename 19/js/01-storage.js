/* 
* =============================================
* localStorage, sessionStorage
*/


/* 
* =============================================
* localStorage
* Shared between all tabs and windows with the same origin
* Survives browser restart
*/

/* 
* =============================================
* sessionStorage
* Visible within a browser tab, including iframes from the same origin
* Survives page refresh (but not tab close)
*/

// const animals = ['cat', 'dog'];

// const refs = {
// 	createAnimal: document.querySelector('#createAnimal'),
// };

// refs.createAnimal.addEventListener('change', (event) => {
// 	const value = event.target.value;

// 	animals.push(value);
// 	console.log('animals', animals);
// })

/* 
* =============================================
* setItem, getItem
*/

// string
// localStorage.setItem('cat', 'Tom');
// console.log('1: ', localStorage.getItem('cat'))

// localStorage.setItem('dog', 'Patron');
// console.log('2: ', localStorage.getItem('dog'))

// // number
// localStorage.setItem('age', 30);
// console.log('3: ', +localStorage.getItem('age'));

// // array
// localStorage.setItem('animals', ['cat', 'dog']);
// console.log('4: ', localStorage.getItem('animals').split(','));

// object

// const person = {
// 	name: 'Mike',
// 	age: 30,
// 	car: 'BMW',
// };

/* 
* =============================================
* JSON.stringify()
*/

// const objToJson = JSON.stringify(person);
// localStorage.setItem('person', objToJson)

/* 
* =============================================
* JSON.parse()
*/

// const personFromLocalStorage = localStorage.getItem('person')
// const personAfterPArsing = JSON.parse(personFromLocalStorage);

// console.log('personFromLocalStorage', personFromLocalStorage)
// console.log('personAfterPArsing', personAfterPArsing)

/* 
* =============================================
*/

const animals = ['cat', 'dog'];

const storageAnimalExist = localStorage.getItem('animals'); // null

if (!storageAnimalExist) {
	localStorage.setItem('animals', JSON.stringify(animals));
}

const refs = {
	createAnimal: document.querySelector('#createAnimal'),
};

refs.createAnimal.addEventListener('change', (event) => {
	const value = event.target.value;

	let animalsFromStorage = JSON.parse(localStorage.getItem('animals'));
	animalsFromStorage.push(value);

	console.log('animalsFromStorage', animalsFromStorage);

	localStorage.setItem('animals', JSON.stringify(animalsFromStorage));
})


/* 
* =============================================
* localStorage.removeItem
*/


/* 
* =============================================
* Приклад sessionStorage
*/


// const animals = ['cat', 'dog'];

// const storageAnimalExist = sessionStorage.getItem('animals'); // null

// if (!storageAnimalExist) {
// 	sessionStorage.setItem('animals', JSON.stringify(animals));
// }

// const refs = {
// 	createAnimal: document.querySelector('#createAnimal'),
// };

// refs.createAnimal.addEventListener('change', (event) => {
// 	const value = event.target.value;

// 	let animalsFromStorage = JSON.parse(sessionStorage.getItem('animals'));
// 	animalsFromStorage.push(value);

// 	console.log('animalsFromStorage', animalsFromStorage);

// 	sessionStorage.setItem('animals', JSON.stringify(animalsFromStorage));
// })





