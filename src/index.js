const Discord = require('discord.js');
const client = new Discord.Client()
const {prefix, meaning_of_life} = require('./config.json'); 
require('dotenv').config();

const guildID = '778253660928868382';
const SpamChannelID = '778673993829187604';
const BotID = '778667957596848160';

const respuestas = [
	'hola',
	'hola cachora XD'
];

client.once('ready', () =>{
	console.log('im ready man');
});

client.login(process.env.BOT_TOKEN);

client.on('message', async (msg) => {
	if (msg.author.id !== BotID){
		console.log(msg);
		console.log(msg.author.username);
	}
	if (msg.guild.id === guildID && msg.channel.id === SpamChannelID) {
		if(msg.author.id !== BotID){
			if(msg.content.toLowerCase() === 'puta'){
				await msg.channel.send('tu madre');
			}
			if(msg.content.toLowerCase() === `${prefix}user-info`){
				const userAvatar = msg.author.displayAvatarURL();
				await msg.reply(`\nyour username: ${msg.author.username}\nYour ID: ${msg.author.id}\n${userAvatar}`);
			}
			if(msg.content.toLowerCase() === 'cual es el sentido de la vida?'){
				await msg.reply(`${meaning_of_life}`);
			}
			if(msg.content.toLowerCase() === 'hola'){
				const r = Math.floor(Math.random() * respuestas.length);
				msg.channel.send(respuestas[r]);
			}
			if (msg.content.toLowerCase() === `${prefix}commands` || msg.content.toLowerCase() === `${prefix}comandos`){
				await msg.channel.send('visita el canal de #bot-commands para saer mis comandos');
			}
		}
	}
});
