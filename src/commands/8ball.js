const eightBall = [
	'As I see it, yes',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	'Dont count on it',
	'It is certain',
	'It is decidedly so'
];

module.exports = async (msg, args) => {
	if (!args.length) return;
	const i = Math.floor(Math.random()*eightBall.length);
	const reply = eightBall[i];
	await msg.channel.send(`${reply}`);
}