const ws = require('ws');

const server = new ws.Server({port: 3000});

/* 
* =============================================
* add listener
*/

// server.on('connection', socket => {
// 	console.log('Connection established on Server-Side!');

// 	setTimeout(() => socket.send(`Hello, I'm a server!`), 1500);

// 	socket.on('message', msg => {
// 		console.log('msg', msg.toString());

// 		socket.send(`Hello ${msg.toString()}`)
// 	});
// });

/* 
* =============================================
* add status
*/

const MSG_STATUS = {
	0: () => `Hello, I'm server`,
	1: name => `Hello, ${name}`,
};


server.on('connection', socket => {
	console.log('Connection established on Server-Side!');

	socket.on('message', msg => {
		msg = JSON.parse(msg.toString());

		if (MSG_STATUS[msg.status]) {
			socket.send(MSG_STATUS[msg.status](msg.value));
		};

	});
});

