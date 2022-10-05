const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`**Please Enter A Valid Search ${message.author}... Try Again? ❌**`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`**No Results Found ${message.author}... Try Again? ❌**`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`**I Can't Join The Voice Channel ${message.author}... Try Again? ❌**`);
        }

        await message.channel.send(`**Loading Your ${res.playlist ? 'Playlist' : 'Track'}... 🎧**`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};