1.//Global env;
//Record:{}
//Parent: null

2.//Environment: global env

const totalSum = function () {

4. //totalSum env;
 //Record:{}
 //Parent: global env

let total = 0;

5.//totalSum env;
 //Record:{total: 0}
 //Parent: global env

9.//totalSum env;
 //Record:{total: 3}
 //Parent: global env

12.//totalSum env;
 //Record:{total: 8}
 //Parent: global env 

15.//totalSum env;
 //Record:{total: 28}
 //Parent: global env 

6. //Environment: totalSum env

return function (number) {

8. //Anonym env;
  //Record:{number: 3}
  //Parent: totalSum env

11.//Anonym env;
  //Record:{number: 5}
  //Parent: totalSum env

14.//Anonym env;
  //Record:{number: 20}
  //Parent: totalSum env 

    total += number;
    
    return total;
  }
}

3.//Global env;
//Record:{totalSum: <function>}
//Parent: null

const sum = totalSum();

7.//Global env;
//Record:{totalSum: <function>, sum: <function>}
//Parent: null

const resultFirst = sum(3);

10.//Global env;
 //Record:{totalSum: <function>, sum: <function>, resultFirst: 3}
 //Parent: null

const resultSecond = sum(5);

13. //Global env;
 //Record:{totalSum: <function>, sum: <function>, resultFirst: 3, resultSecond: 8}
 //Parent: null 

const resultThird= sum(20);

16. //Global env;
 //Record:{totalSum: <function>, sum: <function>, resultFirst: 3, resultSecond: 8, resultThird: 28}
 //Parent: null 

console.log(resultFirst, resultSecond, resultThird);


const totalSum2 = function () {

  let total = 0;

  return function (number) {

    total += number;

    return total;
  };
};






