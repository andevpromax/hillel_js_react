// Лексичне оточення створюється в момент виклику функції

/**
 * LexicalEnvironment
 * Global env - створюється при виконанні файлу скрипту
 *  Record: {},
 *  Parent: null
 */

// const x = 10;

/**
 * Global env
 *  Record: {x: 10}
 *  Parent: null
 */

// let y = 20;

/**
 * Global env
 *  Record: {x: 10, y: 20}
 *  Parent: null
 */

/**
 * Записується в момент обявлення функції
 * [[ Environment ]] = Global env
 */

// const sum = function(a) {

// /**
//  * Sum env
//  *  Record: {a: 50}
//  *  Parent: Global env - при обявлені запамятала, при виклику - використовує
//  */

//   const x = 100;

//   /**
//  * Sum env
//  *  Record: {a: 50, x: 100}
//  *  Parent: Global env
//  */

//   // Шукаться значення в sum env
//   return x + y + a; // 100 + 20 + 50
// };

// y = 100;

/**
 * Global env
 *  Record: {x: 10, y: 20, sum: <function>}
 *  Parent: null
 */

// console.log(sum(50));


// Замикання - звязок між функцією і цепочкою її областей видимості

/**
 * LexicalEnvironment
 * Global env - створюється при виконанні файлу скрипту
 *  Record: {},
 *  Parent: null
 */

/**
 * Записується в момент обявлення функції
 * [[ Environment ]] = Global env
 */

const hello = function() {
  /**
   * Hello env
   *  Record: {},
   *  Parent: Global env
   */

  const x = 5;

    /**
   * Hello env
   *  Record: {x: 5},
   *  Parent: Global env
   */


  // [[ Environment ]] = Hello env
  return function() {
  /**
   * Anonymous env
   *  Record: {},
   *  Parent: Hello env
   */

    console.log('X: ', x);
  };
};

/**
 * Global env
 *  Record: {hello: <function>},
 *  Parent: null
 */

const outerFunc = hello();

/**
 * Global env
 *  Record: {hello: <function>, outerFunc: <function>},
 *  Parent: null
 */

outerFunc();




