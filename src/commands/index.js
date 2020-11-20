const eightBall = require('./8ball');
const hola = require('./hola');
const ping = require('./ping');
const youtube = require('./youtube');
const {prefix, meaning_of_life} = require('./config.json'); 

const guildID = process.env.GUILD_ID;
const SpamChannelID = process.env.SPAM_CHANNEL_ID;
const BotID = process.env.BOT_ID;


module.exports = async (msg) => {
	if (msg.author.id !== BotID){
		console.log(msg);
		// console.log(msg.author.username);
	}
	if (msg.guild.id === guildID && msg.channel.id === SpamChannelID) {
		if(msg.author.id !== BotID){
			const args = msg.content.split(' ');
			console.log(args);
			const command = args[0];
			switch (msg.content.toLowerCase()) {
			case 'puta':
				await msg.channel.send('tu madre');
				break;
			case `${prefix}user-info`:
				const userAvatar = msg.author.displayAvatarURL();
				await msg.reply(`\nyour username: ${msg.author.username}\nYour ID: ${msg.author.id}\n${userAvatar}`);
				break;
			case 'cual es el sentido de la vida?':
				await msg.reply(`${meaning_of_life}`);
				break;
			case 'hola':
				hola(msg);
				break;	
			case `${prefix}commands`:
				await msg.channel.send('visita el canal de #bot-commands para saber mis comandos');
				break;
			case `${prefix}comandos`:
				await msg.channel.send('visita el canal de #bot-commands para saber mis comandos');
				break;
			case 'ping':
				ping(msg);
				break;
			case `${prefix}play`:
				if (!args[1]) {
					msg.channel.send('agrega el link o la cancion a buscar verga');
				} else {
					youtube(args[1]);
					msg.channel.send(msg.embeds.title);
				}
				break;
			}
			if (command === `${prefix}8ball`){
				if (!args[1]) {
					msg.channel.send('agrega tu pregunta puños');
				} else {
					eightBall(msg, args[1]);
				}
			}
		}
	}};