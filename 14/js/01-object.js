/* 
* =============================================
* Літеральна нотація
*/

const obj = {key1: 'value1', key2: 'value'};

/* 
* =============================================
* Конструктор Object
*/

const obj2 = new Object();
obj.key1 = 'value1';
obj.key2 = 'value2';

/* 
* =============================================
* Ф-ї конструктор
*/

function MyObject(key1, key2) {
  this.key1 = key1;
  this.key2 = key2;
};

const obj3 = new MyObject('value1', 'value2');

/* 
* =============================================
* Object.create()
*/

const objPrototype = {key1: 'value1', key2: 'value'};
const obj4 = Object.create(objPrototype);

/* 
* =============================================
* Class (ES6+)
*/

class MyClass {
  constructor(key1, key2) {
    this.key1 = key1;
    this.key2 = key2;
  }
};

const obj5 = new MyClass('value1', 'value2');
