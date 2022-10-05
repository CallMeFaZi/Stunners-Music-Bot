module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again? ❌**`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`**Playing A Live, No Data To Display 🎧**`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};