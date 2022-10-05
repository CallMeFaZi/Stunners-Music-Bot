module.exports = {
    name: 'back',
    aliases: ['previous','last'],
    description: ["Repeats The Last Music Played"],
    utilisation: '>back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again?** ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`**There Was No Music Played Before ${message.author}... Try Again?** ❌`);

        await queue.back();

        message.channel.send(`**Playing The Previous Track** ✅`);
    },
};