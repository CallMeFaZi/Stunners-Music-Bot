module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again? **❌`);

        message.author.send(`**You Saved The Track ${queue.current.title} | ${queue.current.author} From The Server ${message.guild.name} ✅**`).then(() => {
            message.channel.send(`**I Have Sent You The Title OF The Music By Private Messages ✅**`);
        }).catch(error => {
            message.channel.send(`**Unable To Send You A Private Message ${message.author}... Try Again? **❌`);
        });
    },
};