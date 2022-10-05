const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '>help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('BLACK');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        embed.setDescription(`**<a:dot:892354800048558141>Use >Help <Command Name> For More Command Information!**` 
+ "\n\n**<a:bot_right_arrow:891384705562345552>Commands**\n`Ping, Back, Clear, Filter, Loop, NowPlaying, Pause, Play, Progress, Queue, Resume, Save, Search, Seek, Shuffle, Skip, Stop, Volume`");

        embed.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }));
        embed.setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};