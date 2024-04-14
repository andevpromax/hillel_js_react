import products from '../mock/index.js';

// console.table(products);

const createProductCard = products => {

  // div
  const containerRef = document.createElement('div');
  containerRef.classList.add('product-card');

  // h1
  const titleRef = document.createElement('h1');
  titleRef.textContent = products.name;
  titleRef.classList.add('product-card__name');

  // p
  const descrRef = document.createElement('p');
  descrRef.textContent = products.description;

  // span
  const priceRef = document.createElement('span');
  priceRef.textContent = `Price: ${products.price}$`;


  containerRef.append(titleRef, descrRef, priceRef);

  return containerRef
};

// console.log(createProductCard(products[2]))

// products.forEach(product => {
//   console.log(createProductCard(product));
// })

const productsCards = products.map(product => createProductCard(product));

const productsList = document.querySelector('#root');

// spread
// productsList.append(...productsCards);

for (let i = 0; i < products.length; i++) {
  let card = createProductCard(products[i]);
  productsList.appendChild(card);
};
