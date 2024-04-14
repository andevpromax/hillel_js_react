/* 
* =============================================
* Promise
* Fetch
* Async/await
*/

// const getFile = (file, cb) => {
// 		console.log(`Start getting ${file}`)

// 	const xhr = new XMLHttpRequest();

// 	xhr //! інстанс класу XMLHttpRequest
// 	xhr //! обєкт класу XMLHttpRequest
// 	xhr //! екземрляр класу XMLHttpRequest

// 	xhr.open('GET', file);
// 	xhr.send();
// 	xhr.addEventListener('readystatechange', () => {

// 		if (xhr.readyState === 4) {

// 			const isStatus = xhr.status < 400;
// 			const response = isStatus ? JSON.parse(xhr.response) : [];

// 			cb(response);
// 		}
// 	})
// };

// const getAnimals = animals => animals.forEach(animal => getFile(`./files/${animal}.json`), renderAnimal);
// const renderAnimal = animal => console.log(animal);

// getFile(`./files/animals.json`, getAnimals)

/* 
* =============================================
* Promise
* 🔴🟢🥳🤗
*/

// const hasMoney = false;

// const startFunc = () => hasMoney ? firstGreen() : firstRed();

// const firstGreen = () => {
// 	console.log('🟢 1 Function');
// 	secondGreen()
// }

// const secondGreen = () => {
// 	console.log('🟢 2 Function');
// 	thirdGreen()
// }

// const thirdGreen = () => {
// 	console.log('🟢 3 Function');
// }

// const firstRed = () => {
// 	console.log('🔴 1 Function');
// 	secondRed()
// }

// const secondRed = () => {
// 	console.log('🔴 2 Function');
// 	thirdRed()
// }

// const thirdRed = () => {
// 	console.log('🔴 3 Function');
// }

// startFunc();

/* 
* =============================================
* 🔴🟢🥳🤗
*/

// const hasMoney = true;

// const startFunc = () => hasMoney ? startGreen() : startRed();

// const startGreen = () => {
// 	firstGreen();
// 	secondGreen();
// 	thirdGreen();
// }

// const firstGreen = () => {
// 	setTimeout(() => {
// 		console.log('🟢 1 Function')
// 	}, 0);
// }
// const secondGreen = () => console.log('🟢 2 Function')
// const thirdGreen = () => console.log('🟢 3 Function')

// startFunc();

/* 
* =============================================
* 🔴🟢🥳🤗
*/

// const hasMoney = false;

// const startFunc = () => hasMoney ? firstGreen() : firstRed();

// const firstGreen = () => {
// 	setTimeout(() => {
// 		console.log('🟢 1 Function');
// 		secondGreen()
// 	}, 1000);
// }

// const secondGreen = () => {
// 	setTimeout(() => {
// 		console.log('🟢 2 Function');
// 		thirdGreen()
// 	}, 1500);
// }

// const thirdGreen = () => {
// 	setTimeout(() => {
// 		console.log('🟢 3 Function');
// 	}, 500);
// }

// const firstRed = () => {
// 	setTimeout(() => {
// 		console.log('🔴 1 Function');
// 		secondRed()
// 	}, 1000);
// }

// const secondRed = () => {
// 	setTimeout(() => {
// 		console.log('🔴 2 Function');
// 		thirdRed()
// 	}, 1500);
// }

// const thirdRed = () => {
// 	setTimeout(() => {
// 		console.log('🔴 3 Function');
// 	}, 500);
// }

// startFunc();

/* 
* =============================================
* Promise
* 🔴🟢🥳🤗
*/

// const hasMoney = false;

// const myPromise = new Promise(
// 	function(resolve, reject) {

// 		setTimeout(() => {
// 			hasMoney ? resolve() : reject();
// 		}, 1000);

// 	}
// );

// myPromise
// 			.then(
// 				function() {
// 					console.log('🟢 In ok function')
// 				},
// 				function() {
// 					console.log('🔴 In NOT ok function')
// 					return Promise.reject();
// 				}
// 			)
// 			.then(
// 				function() {
// 					console.log('🟢 In 2 ok function')
// 				},
// 				function() {
// 					console.log('🔴 In 2 NOT ok function')
// 					return Promise.reject();
// 				}
// 			)
// 			.then(
// 				function() {
// 					console.log('🟢 In 3 ok function')
// 				},
// 				function() {
// 					console.log('🔴 In 3 NOT ok function')
// 				}
// 			)

/* 
* =============================================
* Promise - only positive scenario
* 🔴🟢🥳🤗
*/

// const myPromise = new Promise(
// 	function(resolve) {

// 		setTimeout(() => {
// 			resolve()
// 		}, 1000);
// 	}
// );

// myPromise
// 			.then(
// 				function() {
// 					console.log('🟢 In ok function')
// 				},
// 			)
// 			.then(
// 				function() {
// 					console.log('🟢 In 2 ok function')
// 				},
// 			)
// 			.then(
// 				function() {
// 					console.log('🟢 In 3 ok function')
// 				},
// 			)

/* 
* =============================================
* Promise - getting user
* Catch
* 🔴🟢🥳🤗
*/

// const myPromise = new Promise(
// 	function(resolve) {
// 		setTimeout(() => resolve(), 1000);
// 	}
// );

// myPromise
// 				.then(
// 					function() {
// 						console.log('🟢 Ready state - 4');

// 						const fileGetted = true;
// 						return fileGetted ? Promise.resolve() : Promise.reject();
// 					},
// 				)
// 				.then(
// 					function() {
// 						console.log('🟢 In 2 ok function')
// 					}
// 				)
// 				.then(
// 					function() {
// 						console.log('🟢 In 3 ok function')

// 						let lionGetted = false;
// 						return lionGetted ? Promise.resolve() : Promise.reject();
// 					}
// 				)
// 				.then(
// 					function() {
// 						console.log('🟢 In 4 ok function')
// 					},
// 				)
// 				.catch(
// 					function() {
// 						console.log('🤗 In catch')
// 					}
// 				)

/* 
* =============================================
* Finally
* 🔴🟢🥳🤗
*/
// const myPromise = new Promise(
// 	function(resolve, reject) {
// 		setTimeout(() => reject(), 1000);
// 	}
// );

// myPromise
// 				.then(
// 					function() {
// 						console.log('🟢 In 1 ok function');
// 					},
// 				)
// 				.finally(
// 					function() {
// 						console.log('🥳 In 1 finally')
// 					}
// 				)
// 				.then(
// 					function() {
// 						console.log('🟢 In 2 ok function')
// 					}
// 				)
// 				.finally(
// 					function() {
// 						console.log('🥳 In 2 finally')
// 					}
// 				)
// 				.then(
// 					function() {
// 						console.log('🟢 In 3 ok function')
// 					}
// 				)
// 				.catch(
// 					function() {
// 						console.log('🤗 In catch')
// 					}
// 				)

/* 
* =============================================
* SetTimeout
* 🔴🟢🥳🤗
*/

// const myPromise = new Promise(
// 	function(resolve) {
// 		setTimeout(() => resolve(500), 500);
// 	}
// );

// myPromise
// 				.then(
// 					function(time) {
// 						console.log('🟢 In 1 ok function', time);

// 						return new Promise(
// 							function(resolve) {
// 							setTimeout(() => resolve(1000), 1000);
// 						})
// 						// return Promise.resolve(1000);
// 					},
// 				)
// 				.then(
// 					function(time) {
// 						console.log('🟢 In 2 ok function', time)

// 						return new Promise(
// 							function(resolve) {
// 							setTimeout(() => resolve(1500), 1000);
// 						})
// 					}
// 				)
// 				.then(
// 					function(time) {
// 						console.log('🟢 In 3 ok function', time)
// 					}
// 				)

/* 
* =============================================
* Get animals
* 🔴🟢🥳🤗
*/

const getFile = file => {

	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', file);
		xhr.send();

		xhr.addEventListener('readystatechange', () => {
			if (xhr.readyState === 4) {
				const isStatus = xhr.status < 400;
				
				const result = JSON.parse(xhr.response);
				const status = xhr.status;

				isStatus ? resolve(result) : reject(status);
			}
		})
	})
}

const getCat = getFile('./files/cat.json');

getCat
		.then(
			function(data) {
				console.log('🟢 In cat function');
				console.log('Cat: ', data);
			}
		)
		.then(
			function() {
				return getFile('./files/dog.json')
			}
		)
		.then(
			function(data) {
				console.log('🟢 In dog function');
				console.log('Dog: ', data);
			}
		)
		.then(
			function() {
				return getFile('./files/lion.json')
			}
		)
		.then(
			function(data) {
				console.log('🟢 In lion function');
				console.log('Lion: ', data);
			}
		)
		.catch(
			function(err) {
				console.log('Error', err)
			}
		)


