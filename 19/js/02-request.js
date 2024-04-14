/* 
* =============================================
* XHR
* requests
*/

// const xhr = new XMLHttpRequest();
// // console.log('xhr', xhr);

// xhr.open('GET', './files/animas.json', false);
// xhr.send();

// console.log('xhr', xhr);

// const animals = JSON.parse(xhr.response);
// console.log('animals', animals);

// console.log('After request!')

/* 
* =============================================
* 100-199 - інформаційні
* 200-299 - Ок
* 300-399 - Ок з редіректом
* 400-499 - Проблема на фронті
* 500-599 - Проблема на бекенді
*/

/* 
* =============================================
* 404
*/

// const xhrAnimal = new XMLHttpRequest();

// xhrAnimal.open('GET', './files/animals.json', false);
// xhrAnimal.send();

// const isStatusAnimal = xhrAnimal.status >= 200 && xhrAnimal.status < 400

// const animals = isStatusAnimal ? JSON.parse(xhrAnimal.response) : [];
// console.log('animals', animals)

// console.log('After animal request!')

/* 
* =============================================
* Get cat
*/

// const xhrCat = new XMLHttpRequest();

// xhrCat.open('GET', './files/cat.json', false);
// xhrCat.send();

// const isStatusCat = xhrCat.status >= 200 && xhrCat.status < 400

// const cat = isStatusCat ? JSON.parse(xhrCat.response) : {};
// console.log('cat', cat)

// console.log('After cat request!')

/* 
* =============================================
* Create getFile function
*/

// const getFile = file => {
// 	console.log(`Start getting ${file}`)

// 	const xhr = new XMLHttpRequest();

// 	xhr.open('GET', file, true);
// 	xhr.send();

// 	console.log(`Finish getting ${file}`)

// 	const isStatus = xhr.status >= 200 && xhr.status < 400;
// 	const response = isStatus ? JSON.parse(xhr.response) : [];

// 	return response;
// };

// const animal = getFile('./files/animals.json');

// console.log(animal);


/* 
* =============================================
* readyStatus
*/

// const nextAnimalFunc = animals => {
// 	console.log('Animals from nextAnimalFunc: ', animals);
// };

// const callbackAnimals = animals => {
// 	console.log('Animals from callback', animals);

// 	getFile('./files/cat.json', callbackCat);
// };

// const callbackCat = cat => {
// 	console.log('Cat from callback', cat);
// };

// const getFile = (file, cb) => {
// 	const xhr = new XMLHttpRequest();


// 	xhr.open('GET', file);
// 	xhr.send();

// 	xhr.addEventListener('readystatechange', () => {

// 		if (xhr.readyState === 4) {
// 			const isStatus = xhr.status >= 200 && xhr.status < 400;
// 			const response = isStatus ? JSON.parse(xhr.response) : [];
			
// 			cb(response);
// 		}
// 	})
// };

// getFile('./files/animals.json', callbackAnimals);

/* 
* =============================================
* task - get each animal who's name inside an array
*/
// const getAnimal = animal => console.log('animal: ', animal);

// const getAnimals = (animals) => {
// 	animals.forEach(animal => {
// 		getFile(`./files/${animal}.json`, getAnimal)
// 	})
// }

// const getFile = (file, cb) => {
// 	const xhr = new XMLHttpRequest();

// 	xhr.open('GET', file);
// 	xhr.send();

// 	xhr.addEventListener('readystatechange', () => {

// 		if (xhr.readyState === 4) {
// 			const isStatus = xhr.status >= 200 && xhr.status < 400;
// 			const response = isStatus ? JSON.parse(xhr.response) : [];
			
// 			cb(response);
// 		}
// 	})
// };

// getFile('./files/animals.json', getAnimals);

/* 
* =============================================
* one response depends on another one
*/

let globalAnimals;

const getLion = (lion) => console.log('lion', lion);

const getDog = (dog) => {
	console.log('dog', dog);
	getFile(`./files/${globalAnimals[2]}.json`, getLion);
}
const getCat = (cat) => {
	console.log('cat', cat);
	getFile(`./files/${globalAnimals[1]}.json`, getDog);
}

const getAnimals = (animals) => {
	globalAnimals = animals;
	getFile(`./files/${animals[0]}.json`, getCat)
}

const getFile = (file, cb) => {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', file);
	xhr.send();

	xhr.addEventListener('readystatechange', () => {

		if (xhr.readyState === 4) {
			const isStatus = xhr.status >= 200 && xhr.status < 400;
			const response = isStatus ? JSON.parse(xhr.response) : [];
			
			cb(response);
		}
	})
};

getFile('./files/animals.json', getAnimals);









