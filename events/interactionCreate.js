module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `**No Music Currently Playing... Try Again?** ❌`, ephemeral: true, components: [] });

            int.member.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `**I Have Sent You The Title OF The Music By Private Messages ✅**`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `**Unable To Send You A Private Message... Try Again?** ❌`, ephemeral: true, components: [] });
            });
        }
    }
};