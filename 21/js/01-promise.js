/* 
* =============================================
* args in Promise.resolve/reject
*/

// const myPromise = value => new Promise(
// 	(resolve, reject) => {
// 		value ? resolve({ x: 100, y: 200}) : reject({ x: 200, y: 300})
// 	}
// )

// myPromise(false)
// 	.then((data) => console.log('In resolve: ', data ))
// 	.catch((data) => console.log('In catch: ', data))

/* 
* =============================================
* animals - 1s

* cat - 2s
* dog - 5s
* lion - 1s

* animals + найдовший проміс = 1s + 5s = 6s
* animals + cat + dog + lion = 1s + 2s + 5s + 1s = 9s
*/

/* 
* =============================================
* all, allSettled, race
*/

// const timeout = time => new Promise(
// 	(resolve) => {
// 		console.log(`Start ${time}ms`)
// 		setTimeout(() => {
// 			console.log(`End ${time}ms`)
// 			resolve(`Finish waiting ${time}ms`)
// 		}, time)
// 	}
// );

// timeout(1000)
// 	.then(data => console.log(data))

// timeout(1500)
// 	.then(data => console.log(data))

// timeout(500)
// 	.then(data => console.log(data))

// console.log('After all timeouts!')

/* 
* =============================================
* Promise.all
*/

// const timeout = time => new Promise(
// 	(resolve, reject) => {

// 		console.log(`Start ${time}ms`)

// 		setTimeout(() => {
// 			console.log(`End ${time}ms`)
// 			time === 1000 ? reject('Too much time for waiting!') : resolve(`Finish waiting ${time}ms`)

// 		}, time)
// 	}
// );

// Promise.all([timeout(1000), timeout(1500), timeout(500)])
// 	.then(data => console.log('Data: ', data))
// 	.catch(err => console.log('Error', err))

/* 
* =============================================
* Promise.allSettled
*/


// const timeout = time => new Promise(
// 	(resolve, reject) => {
// 		setTimeout(() => {
// 			time === 1500 ? reject('Too much time for waiting!') : resolve(`Finish waiting ${time}ms`)
// 		}, time)
// 	}
// );

// Promise.allSettled([timeout(1000), timeout(1500), timeout(500)])
// 	// .then(data => console.log('data', data))
// 	.then(data => data.filter(item => item.status === 'fulfilled'))
// 	.then(data => data.map(item => item.value))
// 	.then(value => console.log('Value: ', value))

// Promise.allSettled([timeout(1000), timeout(1500), timeout(500)])
// 	.then(data => data.filter(item => item.status === 'fulfilled').map(item => item.value))
// 	.then(value => console.log('Value: ', value))

/* 
* =============================================
* Promise.race
*/

// const timeout = time => new Promise(
// 	(resolve, reject) => {
// 		setTimeout(() => {
// 			time === 500 ? reject('Too much time for waiting!') : resolve(`Finish waiting ${time}ms`)
// 		}, time)
// 	}
// );

// Promise.race([timeout(1000), timeout(1500), timeout(500)])
// 	.then(data => console.log('Value in race', data))
// 	.catch(data => console.log('Err', data))

/* 
* =============================================
* fetch -> animals
*/

// const getFile = file => {
// 	return new Promise(function(resolve, reject) {
// 		const xhr = new XMLHttpRequest();
// 		xhr.open('GET', file);
// 		xhr.send();

// 		xhr.addEventListener('readystatechange', () => {
// 			const isReadyState = xhr.readyState === 4
// 			const isStatus = xhr.status < 400;

// 			if (isReadyState) {
// 				const result = JSON.parse(xhr.response);
// 				const status = xhr.statusText;

// 				isStatus ? resolve(result) : reject(status);
// 			}
// 		})
// 	})
// }

// getFile('./files/animals.json')
// 	.then(animals => {
// 		console.log('Animals', animals)

// 		return Promise.all([
// 			getFile(`./files/cat.json`),
// 			getFile(`./files/dog.json`),
// 			getFile(`./files/lion.json`),
// 		])
// 	})
// 	.then(data => data.forEach(animal => console.log('Animal name: ', animal.name)))
// 	.catch(err => console.log('Err', err))

// getFile('./files/animals.json')
// 	.then(animals => {
// 		console.log('Animals', animals)
// 		const modifiedArray = animals.map(item => getFile(`./files/${item}.json`))
// 		console.log('modifiedArray', modifiedArray)

// 		return Promise.all(modifiedArray)
// 	})
// 	.then(data => data.forEach(animal => console.log('Animal name: ', animal.name)))
// 	.catch(err => console.log('Err', err))

/* 
* =============================================
* переписуєм на fetch
*/

// fetch('./files/animals.json')
// 	.then(data => data.json())
// 	.then(data => console.log(data))


// const getFile = file => fetch(file).then(data => data.json())

// getFile('./files/animals.json')
// 	.then(data => console.log(data))


//! add validation
// const getFileWithValidation = file => fetch(file).then(data => {
// 	return data.ok ? data.json() : Promise.reject(data.status)
// })

// getFileWithValidation('./files/animals.json')
// 	.then(animals => {
// 		const modifiedArray = animals.map(item => getFileWithValidation(`./files/${item}.json`))

// 		return Promise.allSettled(modifiedArray)
// 	})
// 	.then(data => data.filter(item => item.status === 'fulfilled').map(item => item.value))
// 	.then(data => data.forEach(animal => console.log(animal.name)))
// 	.catch(err => console.log('Err', err))

/* 
* =============================================
* Jokes
*/

// fetch('https://api.chucknorris.io/jokes/random')
// 	.then(data => data.json())
// 	.then(data => console.log('data', data))

//! Using function

const getFile = file => fetch(file)
	.then(data => data.ok ? data.json() : Promise.reject(data.statusText));


getFile('https://api.chucknorris.io/jokes/random').then(data => console.log('data', data))

getFile('https://api.chucknorris.io/jokes/categories').then(data => console.log('data', data))

getFile('https://api.chucknorris.io/jokes/random?category=celebrity').then(data => console.log('data', data))

getFile('https://api.chucknorris.io/jokes/search?query=hello').then(data => console.log('data', data))