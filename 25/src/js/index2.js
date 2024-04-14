import fromIndexThird from '../js/index3'

const a  = 5
console.log('fromIndexThird', fromIndexThird);

class User {
	constructor(name) {
		this.name = name;
	}

	showName() {
		console.log(this.name)
	}
};

new User('Mango').showName();

export default a;