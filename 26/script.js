const ws = new WebSocket('ws://localhost:3000');

// console.log('ws', ws);

/* 
* =============================================
* Методи 
* open
* message - get data
* error
* close
*/

/* 
* =============================================
* add listener
*/

ws.addEventListener('open', () => {
	console.log('Connection established on Client-Side!');
});

ws.addEventListener('message', msg => console.log(msg.data));

const btnRef = document.querySelector('#sendMsg');
const inputRef = document.querySelector('#username');

// btnRef.addEventListener('click', () => {
// 	ws.send(`Hello, I'm a Client!`);
// });

// inputRef.addEventListener('change', (event) => {
// 	ws.send(event.target.value);
// });

btnRef.addEventListener('click', () => {
	ws.send(JSON.stringify({ status: 0 }));
});

inputRef.addEventListener('change', (event) => {
	ws.send(JSON.stringify({
		status: 1,
		value: event.target.value
	}));
});
