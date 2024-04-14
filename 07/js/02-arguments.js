// Arguments

const hello = 'hello';

const fn = function() {
  console.log([])
  console.log('Arguments', arguments);
};

// fn();
// fn(1, 2,);

// Ф-я яка складає рандомну кількість елементів

const addElements = function() {

  const args = Array.from(arguments);

  console.log('Arguments', arguments);
  console.log('args', args);

  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}

// addElements(1, 2, 3);
// addElements(1, 2, 3, 4, 5, 6);
// addElements(9, 10);

const addElementsNew = function(...rest) {
  let total = 0;

  // console.log('rest', rest)

  for (const arg of rest) {
    total += arg
  };

  return total;
}

addElementsNew(1, 2, 3);
addElementsNew(1, 2, 3, 4, 5, 6);
addElementsNew(9, 10);
addElementsNew(9, 10);

// Ф-я, яка добавляє тег до строки в соц мережах
// const posts = ['post-1', 'post-2', 'post-3', 'post-4', 'post-5'];
// const tag = '#someinfotag';

// const postWithTags = [];

// for (const post of posts) {
//   postWithTags.push(`${post}${tag}`)
// }

// console.log('postWithTags', postWithTags)

// -----


// const tag = '#someinfotag';

// const addTag = function() {
//   const args = Array.from(arguments);
//   const postWithTags = [];

//   for (const post of args) {
//     postWithTags.push(`${post}${tag}`)
//   };

//   return postWithTags;
// };

// addTag('#react', 'post-1', 'post-2');
// addTag('#js', 'post-3', 'post-4', 'post-5');

// -----

// const helloWorld = 'hello';

// const addTagNew = function(...rest) {

//   const tag = '#someinfotag';

//   console.log(helloWorld)

//   console.log('tag', tag);
//   console.log('rest', rest);

//   const postWithTags = [];

//   for (const post of rest) {
//     postWithTags.push(`${post}${tag}`)
//   };

//   return postWithTags;
// };

// addTagNew('#react', 'post-1', 'post-2');
// addTagNew('#js', 'post-3', 'post-4', 'post-5');
