const ws = require('ws');

const server = new ws.Server({port: 3001});

server.on('connection', socket => {
	console.log(`Connection established on Server-Side!`);

	socket.on('message', msg => {
		msg = msg.toString();
		console.log(`Message from client: ${msg}`);

		// socket.send(msg);

		if (msg === 'Exit') {
			socket.close();
		} else {
			server.clients.forEach(client => {
				client.send(msg);
			});
		}

		socket.on('close', () => {
			console.log('Connection closed on Server-Side!');
		})
	});
});