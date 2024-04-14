// const add = function(a, b) {
//   return a + b;
// }

// const addArrow = (a, b) => {
//   return a + b;
// }
// 1 param

// const addArrow2 = message => {
//   console.log(message)
// }

// const addArrow3 = () => {
//   console.log('message')
// }

// Явний (explicit) і неявний(implicit) ретерн 

// const addArrow = (a, b) => {
//   return a + b;
// }

// console.log('addArrow', addArrow(2, 3))

// const addArrow2 = (a, b) => a + b;

// console.log('addArrow2', addArrow2(3, 3 ))

// Arguments
// const addArrow = (...rest) => {
//   console.log('rest', rest)
// }

// addArrow(2, 3);


// return Object

const players = [{
  name: 'Dan',
  game: 'footbal',
  points: 12,
}, 
{
  name: 'Mike',
  game: 'footbal',
  points: 14,
},
];

// 1st
const updatedPoints = players.map((player) => {

  return {
    ...player,
    points: player.points + player.points * 0.1
  };

});

// console.log('players', players)

// console.log('updatedPoints', updatedPoints)

// 2nd
const updatedPoints2 = players.map((player) => ({
  ...player,
    points: player.points + player.points * 0.1
}))

console.log('updatedPoints2', updatedPoints2)

