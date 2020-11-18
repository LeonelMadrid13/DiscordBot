const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const guildID = 778253660928868382;
const SpamChannelID = 778673993829187604;

client.once('ready', () =>{
	console.log('im ready man');
});

client.login(process.env.BOT_TOKEN);

client.on('message', (msg) => {
	if (msg.guild.id === guildID && msg.channel.id === SpamChannelID) {
		console.log(msg);
	}
});