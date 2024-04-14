/* 
* =============================================
* createElement
*/

// const titleRef = document.createElement('h1');
// titleRef.textContent = 'Dynamic content';
// titleRef.classList.add('site-title');
// titleRef.id = 'title';

// console.log(titleRef);
// console.dir(titleRef);

/* 
* =============================================
* Карточка товара
*/

const product =   {
  name: 'Mobile phones',
  description: 'Deserunt officia anim dolor do ullamco elit proident deserunt sit. Ad sunt nostrud duis eu anim occaecat qui deserunt incididunt proident. Culpa elit cillum ut quis veniam cillum. Eiusmod ex officia in ullamco enim voluptate amet veniam id enim. Voluptate Lorem laboris nulla consequat laboris dolore minim deserunt. Excepteur occaecat elit est quis pariatur elit labore dolor non voluptate exercitation do irure. Consectetur nostrud Lorem velit labore commodo mollit consectetur amet fugiat ullamco.',
  price: 2000,
  available: true,
}

// <div>
// <h1>Mobile phones</h1>
// <p>Deserunt officia anim dolor do ullamco elit proident deserunt sit. Ad sunt nostrud duis eu anim occaecat qui deserunt incididunt proident. Culpa elit cillum ut quis veniam cillum. Eiusmod ex officia in ullamco enim voluptate amet veniam id enim. Voluptate Lorem laboris nulla consequat laboris dolore minim deserunt. Excepteur occaecat elit est quis pariatur elit labore dolor non voluptate exercitation do irure. Consectetur nostrud Lorem velit labore commodo mollit consectetur amet fugiat ullamco.</p>
// <span>price: 2000</span>
// </div>

const containerRef = document.createElement('div');
containerRef.classList.add('product-card');

// console.log('containerRef', containerRef);
// console.dir(containerRef);

// div
const titleRef = document.createElement('h1');
titleRef.textContent = product.name;
titleRef.classList.add('product-card__name');

// h1
// console.log('titleRef', titleRef);
// console.dir(titleRef);

// p
const descrRef = document.createElement('p');
descrRef.textContent = product.description;

// console.log('descrRef', descrRef);
// console.dir(descrRef);

// span
const priceRef = document.createElement('span');
priceRef.textContent = `Price: ${product.price}$`

// console.log('priceRef', priceRef);
// console.dir(priceRef);

/* 
* =============================================
* Collect all items
*/

containerRef.appendChild(titleRef);
containerRef.appendChild(descrRef);
containerRef.appendChild(priceRef);


console.log('containerRef', containerRef);
console.dir(containerRef);

/* 
* =============================================
* insertBefore
*/

/* 
* =============================================
* Аналог
* append(nodes)
* prepend(nodes)
* after(nodes)
* before(nodes)
* replaceWith(nodes)
*/

containerRef.append(titleRef, descrRef, priceRef );

// console.log('containerRef', containerRef);
// console.dir(containerRef);

const nav = document.querySelector('.nav');

const listItemRem = document.createElement('li');
listItemRem.textContent = 'New Item';

// nav.append(listItemRem);
// nav.prepend(listItemRem);
// nav.appendChild(listItemRem);

// const firstElement = nav.firstElementChild

// nav.insertBefore(listItemRem, firstElement);


// console.log('listItemRem', listItemRem);
// console.dir(listItemRem);

/* 
* =============================================
* Добавляєм в існуючий елемент
*/

// const cardRoot = document.querySelector('#root');

// console.log('cardRoot', cardRoot);
// console.dir(cardRoot);

cardRoot.appendChild(containerRef);