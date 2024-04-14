/* 
* =============================================
* Система класів з наслідуванням
*/

class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  };

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} of exp`);
    this.xp += amount;
  }
};

const king = new Hero('King', 1000);
// console.log('king', king);


/* 
* =============================================
* Super
*/

class Warrior extends Hero {

  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  };

  attack() {
    console.log(`${this.name} fight using ${this.weapon}`);
  };
}

const warrior = new Warrior('Mike', 4000, 'Sword');

warrior.attack();

console.log('warrior', warrior)

/* 
* =============================================
* Paladin
*/

class Paladin extends Warrior {

  constructor(name, xp, weapon, power) {
    super(name, xp, weapon);
    this.power = power;
  };

  attack() {
    console.log(`${this.name} fight using ${this.power}`);
  };
}

const paladin = new Paladin('Dan', 123000, 'Gun', 'Super Power');

paladin.attack();

console.log('warrior', paladin)

console.dir(Paladin)
