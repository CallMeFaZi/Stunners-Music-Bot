module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again? ❌**`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**Current Music ${queue.current.title} Resumed ✅**` : `**Something Went Wrong ${message.author}... Try Again? ❌**`);
    },
};