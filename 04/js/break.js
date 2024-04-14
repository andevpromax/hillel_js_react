// example - 1
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// Expected output: 3

// example - 2
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

// example - 3
// const food = "meet";

// switch (food) {
//   case "meet":
//     console.log("Tasty meet");
//     break;
//   case "pizza":
//     console.log("Pizza is originally from Italy.");
//     break;
//   default:
//     console.log("I have never heard of that dish.");
//     break;
// }

document.getElementById("demo").innerHTML = text;