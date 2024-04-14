/* 
* =============================================
* async/await
*/

// const getFile = url => fetch(url)
// 	.then(data => data.ok ? data.json() : Promise.catch(data.statusText));

// getFile('https://rrjsonplaceholder.typicode.com/users')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))


// console.log('before');

// async function getFile(url) {

// 	let request = await fetch(url);
// 	let response = request.ok ? request.json() : Promise.catch(data.statusText);

// 	return response;
// };

// getFile('https://jsonplaceholder.typicode.com/users')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

// (async () => {
// 	try {
// 		let users = await getFile('https://j8sonplaceholder.typicode.com/users')
// 		console.log('users', users);
// 	} catch (error) {
// 		console.log('In catch ', error);
// 	}
// })()

// (async () => {
// 	try {
// 		let threeUsers = await Promise.all([
// 			getFile('https://jsonplaceholder.typicode.com/users/1'),
// 			getFile('https://jsonplaceholder.typicode.com/users/2'),
// 			getFile('https://jsonplaceholder.typicode.com/users/3')
// 		]);
// 		console.log('threeUsers', threeUsers);

// 		let users = await getFile('https://jsonplaceholder.typicode.com/users')
// 		console.log('users', users);
// 	} catch (error) {
// 		console.log('In catch ', error);
// 	}
// })()

/* 
* =============================================
* METHOD/ UML diagrams
* GET – отримання даних
* POST * – надсилання даних на сервер у тілі запиту (body)
* PUT * – відправка даних на сервер у тілі запиту (оновлення ресурсу) y)
* PATCH * – надсилання даних на сервер у тілі запиту
* DELETE
*/

//! HEADERS – службова інформація (кодування, стиснення, сервер, кешування)

// https://jsonplaceholder.typicode.com/

// REST – архітектура клієнт-серверної взаємодії
// зведення правил (рекомендацій), за якими клієнт (web app, mobile app) та сервер повинні між собою взаємодіяти

// REST каже, що потрібно думати про дані, що зберігаються на сервері як про ресурс.
// Кожен ресурс на сервері має свою URL-адресу.

// LIST – GET /posts // – запрос на ресурс posts
// ITEM – GET /posts/:id // – запрос на ресурс posts с :id

// ADD – POST /users     body:{name: Alex, age: 21} // – запит на ресурс posts з тілом запиту, id завжди призначає лише сервер
// <== {id: 101, name: Alex, age: 21}

// FULL UPDATE – PUT /users/:id  body:{name: Ivan} // у body відправляються всі поля об'єкта
// <== {id: 101, name: Ivan}

// PARTIAL UPDATE – PATCH /posts/:id body:{name: ''} // у body відправляється тільки те, що змінилося
// <== {id: 101, name: '', age: 21}

// DELETE – /users/:id
// <== {}

// REST

// RESTfull Api – сферичний кінь у вакуумі 😌

// https://mockapi.io/

/* 
* =============================================
* GET
*/

// fetch(`https://jsonplaceholder.typicode.com/users`)
// 	.then(data => console.log(data.json()))
// 	.catch(err => console.log(err))

// const getFile = url => fetch(url)
// 	.then(data => data.ok ? data.json() : Promise.catch(data.statusText));

// getFile('https://jsonplaceholder.typicode.com/users')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))


/* 
* =============================================
* POST
*/

// fetch(`https://jsonplaceholder.typicode.com/users`, {
// 	method: 'POST',
// 	body: JSON.stringify({name: 'Mike', age: 23}),
// 	headers: {
// 		'content-type': 'application/json; charset=utf-8'
// 	}
// })
// 	.then(data => data.json())
// 	.then(data => console.log(data))

/* 
* =============================================
* Get all users
*/

// fetch(`https://jsonplaceholder.typicode.com/users`) // GET
// 	.then(data => data.json())
// 	.then(data => console.log(data))

// 	.then(() => fetch(`https://jsonplaceholder.typicode.com/users`, {
// 		method: 'POST',
// 		body: JSON.stringify({name: 'Ronaldo', age: 23}),
// 		headers: {
// 			'content-type': 'application/json; charset=utf-8'
// 		}
// 	}))
// 	.then(data => data.json())
// 	.then(data => console.log(data))

// 	.then(() => fetch(`https://jsonplaceholder.typicode.com/users`))
// 	.then(data => data.json())
// 	.then(data => console.log(data))

/* 
* =============================================
* PUT
*/

// fetch(`https://jsonplaceholder.typicode.com/users/1`)
// 	.then(data => data.json())
// 	.then(user => {
// 		console.log(user)
// 		return user
// 	})
// 	.then(user => {
// 		return fetch(`https://jsonplaceholder.typicode.com/users/1`, {
// 			method: 'PUT',
// 			// body: JSON.stringify({name: 'Mike'}),
// 			// body: JSON.stringify(Object.assign(user, {username: 'Mike'})),
// 			body: JSON.stringify( {...user, ...{username: 'Mike777'}} ),
// 			headers: {
// 				'content-type': 'application/json; charset=utf-8'
// 			}
// 		})
// 	})
// 	.then(data => data.json())
// 	.then(data => console.log(data))

/* 
* =============================================
* PATCH
*/

// fetch(`https://jsonplaceholder.typicode.com/users/1`, {
// 	method: 'PATCH',
// 	body: JSON.stringify({username: 'Mikeee'}),
// 	headers: {
// 		'content-type': 'application/json; charset=utf-8'
// 	}
// })
// 	.then(data => data.json())
// 	.then(data => console.log(data))

/* 
* =============================================
* DELETE
*/

// fetch(`https://jsonplaceholder.typicode.com/users/1`)
// 	.then(data => data.json())
// 	.then(user => console.log(user))

// 	.then(() => {
// 		return fetch(`https://jsonplaceholder.typicode.com/users/1`, {
// 			method: 'DELETE',
// 		})
// 	})
// 	.then(data => data.json())
// 	.then(data => console.log(data))

/* 
* =============================================
* Controller
*/

// const getFile = url => fetch(url)
// 	.then(data => data.ok ? data.json() : Promise.catch(data.statusText));

const controller = async (url, method = 'GET', obj) => {
	let options = {
		method: method,
		headers: {
			'content-type': 'application/json; charset=utf-8',
		},
	};

	if (obj) options.body = JSON.stringify(obj);

	let request = await fetch(url,options);
	let response = request.ok ? request.json() : Promise.catch(request.statusText)

	return response;
};

controller(`https://jsonplaceholder.typicode.com/users`)
	.then(data => console.log('Get new users', data));

controller(`https://jsonplaceholder.typicode.com/users`, 'POST', {username: 'Mikeee'})
	.then(data => console.log('POST new user', data));

controller(`https://jsonplaceholder.typicode.com/users/2`, 'PUT', {username: 'Hello'})
	.then(data => console.log('PUT user', data));

controller(`https://jsonplaceholder.typicode.com/users/3`, 'PATCH', {username: 'Ronaldo'})
	.then(data => console.log('PATCH user', data));

controller(`https://jsonplaceholder.typicode.com/users/4`, 'DELETE')
	.then(data => console.log('DELETE user', data));