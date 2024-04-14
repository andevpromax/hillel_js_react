// Він викликає функцію для кожного елемента масиву і повертає масив результатів виконання цієї функції.

const students = ['Misha', 'Lena', 'Dan', 'Ira'];

let lengths = students.map(item => item.length);

console.log('lengths', lengths)

const numbers = [5, 1000, 20, 44, 5000, 15, 20, 25];

for (let i = 0; i < numbers.length; i++){
  numbers[i] = numbers[i] * 3;
}

console.log(numbers);

// const numbers = [5, 1000, 20, 44, 5000, 15, 20, 25];

let modifiedArr = numbers.map(function(element){
    return element * 3;
});

console.log(modifiedArr);