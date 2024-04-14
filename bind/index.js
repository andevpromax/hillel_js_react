// let dog = {
//   name: 'Max',
// };

class createBtn {
  constructor(name) {
    this.name = name;

    this.renderBtn();
  }

  printName() {
    console.log(this);
  }

  renderBtn() {
    const btn = document.createElement('button');
    btn.innerHTML = this.name;

    btn.addEventListener('click', this.printName.bind(dog));

    document.body.append(btn);
  }
}

let catBtn = new createBtn('cat');
