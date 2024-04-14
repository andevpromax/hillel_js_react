const withdraw = function(amount, balance) {
  if (amount === 0) {
    console.log('Потрібна сума має бути більше нуля');
  } else if (amount > balance) {
    console.log('Недостатньо коштів');
  } else {
    console.log('Ви зняли кошти)');
  }
}

const withdrawWithGard = function(amount, balance) {
  if (amount === 0) {
    console.log('Потрібна сума має бути більше нуля');
    return;
  };

  if (amount > balance) {
    console.log('Недостатньо коштів');
    return;
  };

  console.log('Ви зняли кошти)');
}