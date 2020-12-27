const Youtube = require('discord-youtube-api');
const ExtractDomain = require('./ExtractDomain');
const youtube = new Youtube(process.env.YOUTUBE_API);
require('./ExtractDomain');

const urls = [
	'youtu.be',
	'youtube.com'
];

// https://youtu.be/eTqGvxI-QFY
// msg.channel.send(video.title);

module.exports = async (arg) => {
	switch(ExtractDomain(arg)){
	case urls:
		const Video = await youtube.getVideo(arg);
		break;
	default:
		const search = await youtube.searchVideos(arg);
		console.log(search);
		break;
	}
};