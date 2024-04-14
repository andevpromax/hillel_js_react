
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const title = 'Hello World From React';
const numbers = [10, 20, 30];
const isTrue = true;

const style = {color: 'blue', fontSize: '22px'};
const classList = [`active`, `special`];

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

const animals = ['cat', 'dog', 'lion'];

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
// 	<React.Fragment>dd
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

class Spysok extends React.Component {
	constructor(props) {
		super(props);

		// setTimeout(() => {

		// 	this.props.list.push(100);
		// 	console.log(this.props.list);
		// 	this.setState({});
		// },1000)

		setTimeout(() => {
			this.setState({
				list: [...this.state.list, 1000]
			});
		},1000)
	};

	componentDidMount() {
		console.log('componentDidMount')
	}

	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	state = Object.assign({}, this.props)

	render() {
		return (
			<ul>
				{this.props.list.map((item, index) => <li key={index}>{item}</li>)}
				{/* {
					this.state.list.map((item, index) => (
						<li key={index}>{item}</li>
					))
				} */}
			</ul>
		)
	}
}

const data = [10, 20, 30, 40]

root.render(
	<React.Fragment>
		{/* <Spysok list={data}></Spysok> */}
		<Spysok list={[10, 20, 30, 40]}></Spysok>
	</React.Fragment>
)

// Object.assign({}, this.props)