/* 
* =============================================
* Event delegation
*/

// const refs = {
//     tags: document.querySelector('.js-tags'),
// };

// refs.tags.addEventListener('click', onTagClick);

// function onTagClick(event) {

//     const tagBtn = event.target;
//     tagBtn.classList.add('tags__btn--active');
// };

/* 
* =============================================
* nodeName || tagName
*/

// const refs = {
//     tags: document.querySelector('.js-tags'),
// };

// refs.tags.addEventListener('click', onTagClick);

// function onTagClick(event) {
//     console.log('nodeName', event.target.nodeName);

//     if (event.target.nodeName !== 'BUTTON') {
//         console.log('You clicked to wrong place');
//         return;
//     };

//     const tagBtn = event.target;
//     tagBtn.classList.add('tags__btn--active');
// };

/* 
* =============================================
* Leave only one active tag
*/

// const refs = {
//     tags: document.querySelector('.js-tags'),
// };

// refs.tags.addEventListener('click', onTagClick);

// function onTagClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         console.log('You clicked to wrong place');
//         return;
//     };

//     const currentActiveTag = event.currentTarget.querySelector('.tags__btn--active');

//     if (currentActiveTag) {
//         currentActiveTag.classList.remove('tags__btn--active');
//     }

//     const tagBtn = event.target;
//     tagBtn.classList.add('tags__btn--active');
// };

/* 
* =============================================
* Show tag name in the document
*/

// const refs = {
//     tags: document.querySelector('.js-tags'),
//     activeTagOutput: document.querySelector('.js-active-tag'),
// };

// refs.tags.addEventListener('click', onTagClick);

// function onTagClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         console.log('You clicked to wrong place');
//         return;
//     };

//     const currentActiveTag = event.currentTarget.querySelector('.tags__btn--active');

//     if (currentActiveTag) {
//         currentActiveTag.classList.remove('tags__btn--active');
//     }

//     const nextActiveTag = event.target;

//     nextActiveTag.classList.add('tags__btn--active');

//     refs.activeTagOutput.textContent = nextActiveTag.dataset.value;
// };

/* 
* =============================================
* Show tag name in the document
*/

const refs = {
    tags: document.querySelector('.js-tags'),
    activeTagOutput: document.querySelector('.js-active-tag'),
};

refs.tags.addEventListener('click', onTagClick);

function onTagClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        console.log('You clicked to wrong place');
        return;
    };

    const nextActiveTag = event.target;
    const activeTagValue = nextActiveTag.dataset.value

    setActiveTag(nextActiveTag);
    updateOutput(activeTagValue);
};

function setActiveTag(nextActiveTag) {
    const currentActiveTag = refs.tags.querySelector('.tags__btn--active');
    if (currentActiveTag) {
        currentActiveTag.classList.remove('tags__btn--active');
    }
    nextActiveTag.classList.add('tags__btn--active');
};

function updateOutput(value) {
    refs.activeTagOutput.textContent = value;
}
















