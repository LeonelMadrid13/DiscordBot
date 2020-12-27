const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const commandHandler = require('./commands/index');

client.once('ready', () =>{
	console.log('im ready man');
});

client.login(process.env.BOT_TOKEN);

client.on('message', commandHandler);
