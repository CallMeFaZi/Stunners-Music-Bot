module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again? ❌**`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `**Current Music ${queue.current.title} Paused ✅**` : `**Something Went Wrong ${message.author}... Try again? ❌**`);
    },
};