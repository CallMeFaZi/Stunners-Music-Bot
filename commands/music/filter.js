module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '>filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`**No Music Currently Playing ${message.author}... Try Again? **❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`**Please Specify A Valid Filter To Enable OR Disable ${message.author}... Try Again?** ❌\n${actualFilter ? `**Filter Currently Active ${actualFilter} (${client.config.app.px}Filter ${actualFilter} To Disable IT).**\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`**This Filter Doesn't Exist ${message.author}... Try again?** ❌\n${actualFilter ? `**Filter Currently Active** ${actualFilter}.\n` : ''}**List OF Available Filters** ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`**The Filter ${filter} IS Now **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'} ✅\n**Reminder The Longer The Music IS, The Longer This Will Take.**`);
    },
};