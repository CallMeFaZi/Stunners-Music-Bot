const { Player } = require('discord-player');
const { Discord } = require('discord.js');
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');


client.login(`MTAxMDI2MTYwNTc3NjM1OTU1NQ.GTcWHt.qZ3o21lOW7_ikMMa8JqIXKctsV-qS6s5AnvCVQ`);