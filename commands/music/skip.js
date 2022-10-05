module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No Music Currently Playing ${message.author}...  Try Again? ❌**`);

        const success = queue.skip();

        return message.channel.send(success ? `**Current Music ${queue.current.title} Skipped ✅**` : `**Something went wrong ${message.author}...  Try Again? ❌**`);
    },
};