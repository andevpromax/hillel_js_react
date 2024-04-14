/* 
* =============================================
*	Jokes
*/

const getData = url => fetch(url)
	.then(data => data.ok ? data.json() : Promise.reject(data.statusText))
	.catch(err => console.log('In catch: ', err));

/* 
* =============================================
*	Отримуєм категорії
*/

const jokeForm = document.querySelector('#jokeForm');
const jokeFormCats = document.querySelector('#jokeFormCats');
const jokeFormSearch = document.querySelector('#jokeFormSearch');
const jokesContainer = document.querySelector('#jokesContainer');
const jokesContainerFavorites = document.querySelector('#jokesContainerFavorites');

const API = 'https://api.chucknorris.io/jokes';

const renderFromCats = () => {

	getData(API + '/categories')
		.then(cats => {
			jokeFormCats.innerHTML = cats.map((cat, index) => `
				<li>
					<label>
						<input type="radio" name="jokeCat" value="${cat}" ${!index && 'checked'}>
						${cat}
					</label>
				</li>
			`).join('');
		})
}

renderFromCats();

/* 
* =============================================
*	Сабміт форми
*/

jokeForm.addEventListener('submit', (event) => {
	event.preventDefault();

	let jokeType = jokeForm.querySelector('input[name=jokeFormType]:checked').value;
	let jokeUrl = API;

	switch (jokeType) {
		case `random`:
			jokeUrl += '/random';
			break;
		case `categories`:
			let checkedCat = jokeFormCats.querySelector(`input[name=jokeCat]:checked`).value
			jokeUrl += `/random?category=${checkedCat}`;
			break;
		case `search`:
			const queryValue = encodeURIComponent(jokeFormSearch.value);
			
			if (queryValue.length < 3 || queryValue.length > 120) {
				console.log('size must be between 3 and 120');
				return;
			};
			jokeUrl += `/search?query=${queryValue}`
	};

	getData(jokeUrl).then(data => data.result
		? data.result.forEach(joke => renderJoke(joke))
		: renderJoke(data));
});

/* 
* =============================================
*	renderJoke
*/

const renderJokeCats = cats => cats.length
	?	`<div class="joke__block--cats">
   	  ${cats.map(cat => `<p class="joke__block--cat">${cat}</p>`)}
   	</div>`
	 : '';

const renderJokeText = value => `<p class="joke__block--text">${value}</p>` 

const getLocalStorage = (key, defaultValue = []) => {
	let storage = localStorage.getItem(key);
	storage = storage ? JSON.parse(storage) : defaultValue;

	return storage;
}

const renderJoke = joke => {

	const jokeBlock = document.createElement('div');
	jokeBlock.dataset.id = joke.id;

	jokeBlock.className = 'joke__block';
	jokeBlock.innerHTML = [renderJokeText(joke.value), renderJokeCats(joke.categories)].join('');

	const favoriteBtn = document.createElement('button');
	favoriteBtn.className = 'joke__block--fav';
	favoriteBtn.innerHTML = joke.favorite ? '💜' :'💛';
	
	favoriteBtn.addEventListener('click', () => {
		let storageJokes = getLocalStorage('favoriteJokes');
		let jokeIndexInStorage = storageJokes.findIndex(item => item.id === joke.id);

		if (jokeIndexInStorage === -1) {
			joke.favorite = true;
			storageJokes.push(joke);
			jokesContainer.querySelector(`.joke__block[data-id="${joke.id}"] .joke__block--fav`).innerHTML = '💜'
			renderJoke(joke)
		} else {
			storageJokes.splice(jokeIndexInStorage, 1);
			jokesContainerFavorites.querySelector(`.joke__block[data-id="${joke.id}"]`).remove();
			let jokeContainerCurrentJoke = jokesContainer.querySelector(`.joke__block[data-id="${joke.id}"]`);

			if (jokeContainerCurrentJoke) {
				jokeContainerCurrentJoke.querySelector('.joke__block--fav').innerHTML = '💛'
			}
		}

		//! Scenarios
		// case 1:
		//1.1 push to LocalStorage
		//1.2 💛 => 💜
		//1.3 rendere in jokesContainerFavorites

		// case 2:
		// 1.1 remove from LS
		// 1.2 💜 => 💛 
		// 1.3 remove from jokesContainerFavorites

		// case 3: 
		// 1.1 remove from LS
		// 1.2 💜 => 💛  in jokesContainer
		// 1.3 remove from jokesContainerFavorites
	
		localStorage.setItem('favoriteJokes', JSON.stringify(storageJokes));

	})

	jokeBlock.prepend(favoriteBtn);

	joke.favorite ? jokesContainerFavorites.append(jokeBlock) : jokesContainer.append(jokeBlock);
};

/* 
* =============================================
*	renderFavoriteJokes
*/

const renderFavoriteJokes = () => {
	getLocalStorage('favoriteJokes').forEach(item => renderJoke(item))
}

renderFavoriteJokes();