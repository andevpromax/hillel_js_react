// The continue statement terminates execution of the statements
// in the current iteration of the current or labeled loop, and 
// continues execution of the loop with the next iteration.

let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012_456789"

for (let i = 0; i < 10; i++) {

  if (i === 3) { continue; }

  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;