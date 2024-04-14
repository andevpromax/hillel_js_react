const userStatus = document.querySelector('#userStatus');

const msgForm = document.querySelector('#msgForm');
const msgInput = document.querySelector('#msgInput');
const msgList = document.querySelector('#msgList');

const closeConnection = document.querySelector('#closeConnection');
const reopenConnection = document.querySelector('#reopenConnection');

const renderMsg = msg => {
	const li = document.createElement('li');
	li.innerHTML = msg;
	msgList.append(li);
};

const createWS = () => {
	const ws = new WebSocket(`ws://localhost:3001`);

	ws.addEventListener(`open`, () => {
		console.log(`Connection established on Client-Side!`);
		userStatus.innerHTML = `🟢 Online`
	});

	ws.addEventListener('close', () => {
		console.log('Connection closed on Client-Side!');
		userStatus.innerHTML = `🔴 Off-line`;
	});

	ws.addEventListener(`message`, msg => {
		msg = msg.data;
		console.log(`Message from server: ${msg}`);
	
		renderMsg(msg);
	});

	closeConnection.addEventListener('click', () => {
		ws.close();
	});

	msgForm.addEventListener(`submit`, event => {
		event.preventDefault();
		let msg = msgInput.value;
	
		console.log('ws.readyState', ws.readyState);
	
		if (ws.readyState === 1) {
			ws.send(msg);
			msgForm.reset();
		};
	});
};

reopenConnection.addEventListener('click', createWS);
createWS();