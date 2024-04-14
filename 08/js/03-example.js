// shopping cart

const shoppingCart = {
  items: ['laptop', 'iphone', 'spoon', 'tv'],

  showItems() {
    console.log('This', this);
    console.log('This items', this.items);
  },
};

const button = document.querySelector('.show-items');

// button.addEventListener('click', function() {
//   console.log('Click!');
//   console.log('This in event', this);
// })

button.addEventListener('click', shoppingCart.showItems.bind(shoppingCart))



