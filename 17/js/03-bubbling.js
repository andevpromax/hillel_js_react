/* 
* =============================================
* Всплиття подій
* event.target, event.currentTarget
*/

// const refs = {
//     parent: document.querySelector('#parent'),
//     child: document.querySelector('#child'),
//     innerChild: document.querySelector('#inner-child'),
// };

// const parentClickHandler = () => alert('PARENT click handler');
// const childClickHandler = () => alert('CHILD click handler');
// const innerChildClickHandler = () => alert('INNER CHILD click handler');

// refs.parent.addEventListener('click', parentClickHandler);
// refs.child.addEventListener('click', childClickHandler);
// refs.innerChild.addEventListener('click', innerChildClickHandler);

/* 
* =============================================
* event.target, event.currentTarget
*/

// const refs = {
//     parent: document.querySelector('#parent'),
//     child: document.querySelector('#child'),
//     innerChild: document.querySelector('#inner-child'),
// };

// const parentClickHandler = (event) => {
//     console.log('PARENT click handler');

//     console.log('target', event.target);
//     console.log('current target', event.currentTarget);
// };

// const childClickHandler = (event) => {
//     console.log('CHILD click handler');

//     console.log('target', event.target);
//     console.log('current target', event.currentTarget);
// };

// const innerChildClickHandler = (event) => {
//     console.log('INNER CHILD click handler');

//     console.log('target', event.target);
//     console.log('current target', event.currentTarget);
// };

// refs.parent.addEventListener('click', parentClickHandler);
// refs.child.addEventListener('click', childClickHandler);
// refs.innerChild.addEventListener('click', innerChildClickHandler);


/* 
* =============================================
* event.stopPropagation()
*/

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
};

const parentClickHandler = (event) => {
    console.log('PARENT click handler');

    console.log('target', event.target);
    console.log('current target', event.currentTarget);
};

const childClickHandler = (event) => {
    console.log('CHILD click handler');

    console.log('target', event.target);
    console.log('current target', event.currentTarget);
};

const innerChildClickHandler = (event) => {
    console.log('INNER CHILD click handler');

    console.log('target', event.target);
    console.log('current target', event.currentTarget);

    event.stopPropagation();
};

refs.parent.addEventListener('click', parentClickHandler);
refs.child.addEventListener('click', childClickHandler);
refs.innerChild.addEventListener('click', innerChildClickHandler);
