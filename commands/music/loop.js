const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp','l', 'repeat'],
    description: ['Repeats The Current Music Again And Again'],
    utilisation: '>loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again?** ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`**You Must First Disable The Current Music IN The Loop Mode (${client.config.app.px}Loop) ${message.author}... Try Again?** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `**Repeat mode ${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** **The Whole Queue Will Be Repeated Endlessly 🔁**` : `**Something went wrong ${message.author}... Try Again?**❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`You must first disable the current queue in the loop mode (${client.config.app.px}loop queue) ${message.author}... try again ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `**Repeat mode ${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** **the current music will be repeated endlessly (you can loop the queue with the <queue> option)** 🔂` : `**Something Went Wrong ${message.author}... Try Again?** ❌`);
        };
    },
};