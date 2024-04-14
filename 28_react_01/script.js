
var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var title = 'Hello World From React';
var numbers = [10, 20, 30];
var isTrue = true;

var style = { color: 'blue', fontSize: '22px' };
var classList = ['active', 'special'];

var animals = ['cat', 'dog', 'lion'];

setTimeout(function () {
	animals.push('tiger');
	console.log(animals);
}, 1000);

/* 
* =============================================
* Functional component
*/

function List(_ref) {
	var list = _ref.list,
	    _ref$color = _ref.color,
	    color = _ref$color === undefined ? 'pink' : _ref$color,
	    age = _ref.age;

	return list && React.createElement(
		'ul',
		{ style: { color: color } },
		list.map(function (item) {
			return React.createElement(
				'li',
				{ key: item },
				item
			);
		}),
		age && React.createElement(
			'li',
			null,
			age
		)
	);
}

root.render(React.createElement(
	React.Fragment,
	null,
	React.createElement(List, { list: animals, color: 'red', age: 32 }),
	React.createElement(List, { list: numbers, color: 'green', age: 100 }),
	React.createElement(List, { list: numbers, color: 'green' }),
	React.createElement(List, { list: numbers }),
	React.createElement(List, null)
));

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