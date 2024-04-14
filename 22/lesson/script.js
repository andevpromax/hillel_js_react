const refs = {
	postForm: document.querySelector('#postForm'),
	postFormTitle: document.querySelector('#postFormTitle'),
	postsContainer: document.querySelector('#postsContainer'),
	postButtons: document.querySelectorAll('.post__delete'),
};

refs.postForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const newPost = {
		title: refs.postFormTitle.value,
	};
	renderPost(newPost);
});

// const renderPost = (post) => {
// 	console.log('post', post);
// 	const postBlock = `
// 		<div class="post__block">
// 			<h3>${post.title}</h3>
// 			<button class='post__delete'>Remove post</button>
// 		</div>
// 	`;

// 	refs.postsContainer.innerHTML += postBlock;
// 	deleteButtons();
// };

//! First approach
// const deleteButtons = () => {
// 	const postButtons = document.querySelectorAll('.post__delete');
	
// 	postButtons.forEach(button => {
// 		button.addEventListener('click', () => {
// 			console.log('Click')
// 		});
// 	});
// };

//! Second approach
// const renderPost = (post) => {

// 	const postBlock = document.createElement('div');

// 	postBlock.className = 'post__block';
// 	postBlock.innerHTML = `<h3>${post.title}</h3>`

// 	const deleteBtn = document.createElement('button');
// 	deleteBtn.className = 'post__delete';
// 	deleteBtn.innerHTML = 'Remove post';

// 	deleteBtn.addEventListener('click', () => {
// 		postBlock.remove();
// 	});

// 	postBlock.append(deleteBtn);

// 	refs.postsContainer.append(postBlock);
// };