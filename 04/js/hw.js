let numOrStr = prompt('input number or string');

console.log(numOrStr)

switch(true) {
  case numOrStr === null:
    console.log( 'ви скасували' );
    break;
  case numOrStr.trim() === '':
    console.log( 'Empty String' );
    break;
  case isNaN (+numOrStr):
    console.log( 'number is Ba_NaN' );
    break;
  default:
    console.log( "OK" );
}


// correct

// let numOrStr = prompt("input number or string");
// console.log(numOrStr);

// switch (numOrStr && isNaN(+numOrStr)) {
//   case null:
//     console.log("ви скасували");
//     break;
//   case "":
//     console.log("Empty String");
//     break;
//   case true:
//     console.log(" number is Ba_NaN");
//     break;
//   default:
//     console.log("OK!");
// }

// correct

// let numOrStr = prompt('Введите число или строку');
// console.log(numOrStr);

// switch (numOrStr) {
//   case '':
//     console.log('Empty String');
//     break;
//   case null:
//     console.log('ви скасували');
//     break;
//   default:
//     isNaN(+numOrStr) ? console.log(' number is Ba_NaN') : console.log('OK!')
// }

