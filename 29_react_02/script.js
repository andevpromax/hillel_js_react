var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var title = 'Hello World From React';
var numbers = [10, 20, 30];
var isTrue = true;

var style = { color: 'blue', fontSize: '22px' };
var classList = ['active', 'special'];

// const animals = ['cat', 'dog', 'lion'];

// setTimeout(() => {
// 	animals.push('tiger');
// 	console.log(animals)
// },1000);

/* 
* =============================================
* Functional component
*/

// function List({list = [], color='blue', age }) {

// 	return (
// 		list && <ul style={{ color: color}}>
// 			{list.map((item) => (
// 				<li key={item}>{item}</li>
// 			))}
// 			{ age && <li>{age}</li> }
// 	</ul>
// 	)
// }

// root.render(
// 	<React.Fragment>
// 		<List list={animals} color='red' age={32}></List>
// 		<List list={numbers} color='green' age={100}></List>
// 		<List list={numbers} color='green'></List>
// 		<List list={numbers}></List>
// 		<List></List>
// 	</React.Fragment>
// )

/* 
* =============================================
* Class component
* State
*/

// class List extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		setInterval(() => {
// 			this.setState({
// 				x: ++this.state.x,
// 			})
// 		}, 1000)
// 	};

// 	state = {
// 		x: 10,
// 	}

// 	render() {
// 		console.log(this)

// 		let {list, color = 'orange', age} = this.props;

// 		return (
// 			list && (
// 				<React.Fragment>
// 					<ul style={{ color: color}}>
// 						{list.map((item) => (
// 							<li key={item}>{item}</li>
// 						))}
// 						{age && <li>{age}</li> }
// 					</ul>
// 					<hr/>
// 					<hr/>
// 					<h3>x: {this.state.x}</h3>
// 				</React.Fragment>
// 			)
// 		)
// 	}
// }

/* 
* =============================================
* Add elements to array
*/

var animals = ['cat', 'dog', 'lion'];

// class List extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		setTimeout(() => {
// 			//! Wrong
// 			// this.state.list.push('tiger')
// 			// console.log(this.state.list);

// 			//! Wrong
// 			// this.setState({
// 			// 	list: this.state.list.push('tiger'),
// 			// })
// 			// console.log(this.state.list);

// 			//! Right
// 			this.setState({
// 				list: this.state.list.concat('tiger'),
// 			})
// 			console.log(this.state.list);

// 		}, 1000)

// 		setTimeout(() => {
// 			//! Right
// 			this.setState({
// 				list: [...this.state.list, 'cow']
// 			})

// 			console.log(this.state.list);
// 		},2000)

// 		setTimeout(() => {
// 			//! Right
// 			this.setState((prevState) => ({
// 				list: [...prevState.list, 'rabbit']
// 			}))

// 			console.log(this.state.list);
// 		},3000)

// 		setTimeout(() => {
// 			//! Right
// 			this.setState({
// 				list: this.state.list.slice(1),
// 			})

// 			console.log(this.state.list);
// 		},3000)
// 	};


// 	state = {
// 		x: 10,
// 		list: this.props.list ? this.props.list : [],
// 	}

// 	render() {
// 		console.log(this)

// 		let {list, color = 'orange', age} = this.props;

// 		return (
// 			this.state.list && (
// 				<React.Fragment>
// 					<ul style={{ color: color}}>
// 						{this.state.list.map((item) => (
// 							<li key={item}>{item}</li>
// 						))}
// 						{age && <li>{age}</li> }
// 					</ul>
// 					<hr/>
// 					<hr/>
// 					<h3>x: {this.state.x}</h3>
// 				</React.Fragment>
// 			)
// 		)
// 	}
// }

// root.render(
// 	<React.Fragment>
// 		<List list={animals} color='red' age={32}></List>
// 	</React.Fragment>
// )

/* 
* =============================================
* List of Debtors
*/

// class Debtors extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		const removeDebtors = setInterval(() => {
// 			this.setState({
// 				list: this.state.list.slice(0, -1),
// 			})

// 			this.state.list.length === 0 && clearInterval(removeDebtors);

// 			console.log(`In interval`, this.state.list);
// 		},1000)

// 	};

// 	state = {
// 		list: this.props.list
// 	}

// 	render() {
// 		console.log(this)

// 		return (
// 			<ul>
// 				{
// 					this.state.list.map((item, index) => (
// 						<li key={index}>{item}</li>
// 					))
// 				}
// 			</ul>
// 		)
// 	}
// }

// root.render(
// 	<React.Fragment>
// 		<Debtors list={['Anton', 'Mike', 'Winston']}></Debtors>
// 	</React.Fragment>
// )

/* 
* =============================================
* List of Debtors
*/

var Spysok = function (_React$Component) {
	_inherits(Spysok, _React$Component);

	function Spysok(props) {
		_classCallCheck(this, Spysok);

		// setTimeout(() => {

		// 	this.props.list.push(100);
		// 	console.log(this.props.list);
		// 	this.setState({});
		// },1000)

		var _this = _possibleConstructorReturn(this, (Spysok.__proto__ || Object.getPrototypeOf(Spysok)).call(this, props));

		_this.state = Object.assign({}, _this.props);
		setTimeout(function () {
			_this.setState({
				list: [].concat(_toConsumableArray(_this.state.list), [1000])
			});
		}, 1000);
		return _this;
	}

	_createClass(Spysok, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('componentDidMount');
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			console.log('componentDidUpdate');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'ul',
				null,
				this.props.list.map(function (item, index) {
					return React.createElement(
						'li',
						{ key: index },
						item
					);
				})
			);
		}
	}]);

	return Spysok;
}(React.Component);

var data = [10, 20, 30, 40];

root.render(React.createElement(
	React.Fragment,
	null,
	React.createElement(Spysok, { list: [10, 20, 30, 40] })
));

// Object.assign({}, this.props)