const respuestas = [
	'hola',
	'hola cachora XD'
];

module.exports = (msg) => {
	const r = Math.floor(Math.random() * respuestas.length);
	msg.channel.send(respuestas[r]);
};