



const rabbit = function() {
  console.log('Rabbit');
  return
};



const wolf = function() {
  console.log('Wolf');
};



const lion = function() {
  console.log('Lion');

  rabbit();
  wolf();

  return
};


lion();
