module.exports = {
    name: 'clear',
    aliases: ['cq','clearqueue','clear-queue'],
    description: ['**Clears The Current Queue**'],
    utilisation: '>clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id); 

        if (!queue || !queue.playing) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again?** ❌`);

        if (!queue.tracks[0]) return message.channel.send(`**No Music IN The Queue After The Current One ${message.author}... Try Again?** ❌`);

        await queue.clear();

        message.channel.send(`**The Queue Has Just Been Cleared. **🗑️`);
    },
};