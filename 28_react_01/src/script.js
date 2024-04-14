
	const domContainer = document.querySelector('#root');
	const root = ReactDOM.createRoot(domContainer);

	const title = 'Hello World From React';
	const numbers = [10, 20, 30];
	const isTrue = true;

	const style = {color: 'blue', fontSize: '22px'};
	const classList = [`active`, `special`];

	const animals = ['cat', 'dog', 'lion'];

	setTimeout(() => {
		animals.push('tiger');
		console.log(animals)
	},1000);

/* 
* =============================================
* Functional component
*/

	function List({list, color='pink', age }) {
		return (
			list && <ul style={{ color: color}}>
				{list.map((item) => (
					<li key={item}>{item}</li>
				))}
				{ age && <li>{age}</li> }
		</ul>
		)
	}

	root.render(
		<React.Fragment>
			<List list={animals} color='red' age={32}></List>
			<List list={numbers} color='green' age={100}></List>
			<List list={numbers} color='green'></List>
			<List list={numbers}></List>
			<List></List>
		</React.Fragment>
	)



	// root.render(
	// 	<React.Fragment>
	// 		<h1>{title}</h1>
	// 		<h3>Additional</h3>
	// 		<hr/>
	// 		{ 10 + 20 }
	// 		<hr/>
	// 		<ul>
	// 			{animals.map((item, index) => (
	// 				<li key={item}>{item}</li>
	// 			))}
	// 		</ul>
	// 		<ul>
	// 			{numbers.map((item) => (
	// 				<li key={item}>{item}</li>
	// 			))}
	// 		</ul>
	// 		<hr/>
	// 		{isTrue ? <h3>Your payment success!</h3> : <h3>You do not have enough money!</h3>}
	// 		{isTrue && <h3>Another example!</h3>}
	// 		<hr/>

	// 		<h3 style={{color: 'red', fontSize: '32px'}}>Styles in JSX!</h3>
	// 		<hr/>
	// 		<h3 style={style}>Styles in JSX - 2!</h3>
	// 		<hr/>

	// 		<h3 className={classList.join(' ')}>Styles in JSX - 3!</h3>
	// 		<hr/>
	// 		<h3 className={`active ${isTrue && `special`}`}>Styles in JSX - 4!</h3>
	// 		<button>Btn</button>
	// 	</React.Fragment>
	// );
