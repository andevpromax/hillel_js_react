// findSmallerNumber

const numbers = [1, 34, 45, 55, 643, 45, -45];
const money = [1, 34, 45, 55, 643, 45, -45];
const points = [1, 34, 45, 55, 643, 45, -45];
let smallestNumber = numbers[0];

// console.log('smallestNumber', smallestNumber);

for (let i = 1; i < numbers.length; i++) {

  // console.log('numbers[i]', numbers[i]);

  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  };
};

// console.log('smallestNumber', smallestNumber)

const findSmallestNumber = function(items) {
  let smallestNumber = items[0];

  for (let i = 1; i < items.length; i++) {
    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    };
  };

  return smallestNumber;
}


// --Tasks--
// const tasks = ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'];

 // Delete

//  const removeCard = function(allTasks, taskToRemove) {
//   const index = allTasks.indexOf(taskToRemove);
//   // console.log('index', index)

//   if (index === -1) {
//     console.log('There is no such task');
//     return;
//   };

//   allTasks.splice(index, 1);
//  };

//  console.log('tasks before', tasks);

//  removeCard(tasks, 'task-6')

//  console.log('tasks after', tasks);


// Insert
// const addCard = function(allTasks, taskToInsert, index) {
//   allTasks.splice(index, 0, taskToInsert)
// };


//  console.log('tasks before', tasks);

// addCard(tasks, 'task-101', 2);

//  console.log('tasks after', tasks);