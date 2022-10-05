player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`**Started Playing ${track.title} In** **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**Track ${track.title} Added In The Queue ✅**`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('**I Was Manually Disconnected From The Voice Channel, Clearing Queue... ❌**');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('**Nobody Is IN The Voice Channel, Leaving The Voice Channel... ❌ **');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('**Queue Has Ended.✅**');
});