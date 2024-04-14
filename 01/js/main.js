console.log('Hello world!')

var a = 5;

let b = 10;

const c = 'hello';

let $ = 5
let _ = 10

let name;
let NAME;

let muCurrentJob = 'Frontend developer'

// let let = 'none' - зарезервовані слова

console.log('A: ', a);
console.log('B: ', b);
console.log('C: ', c);

// Типи даних

// String
let str = 'Hello World';
let num = 10;
let bool = false;
let nullish = null; // це нічого..., помилка як object
let undef = undefined; 
let object = {}; // ссылочный тип данных

let bigNumber = 14n;
let symbol = Symbol('id')

const myFunc = () => console.log('myFunc')

console.log('Result', typeof str);
console.log('Result', typeof num);
console.log('Result', typeof bool);
console.log('Result', typeof nullish);
console.log('Result', typeof undef);
console.log('Result', typeof object);
console.log('Result', typeof bigNumber);
console.log('Result', typeof symbol);
console.log('myFunc', typeof myFunc);

// alert('You are robot!')

// let userAge = prompt('How old are you?');
// console.log('userAge', userAge)

// confirm('Are you frontend developer?')


let strQ = 'Hello World';
let strQ2 = "Hello World";

let strExample = 45;

let strQ3 = `Your age is ${strExample}`;

console.log('strQ3', strQ3);