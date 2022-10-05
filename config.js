module.exports = {
  app: {
    token: 'MTAxMDI2MTYwNTc3NjM1OTU1NQ.GTcWHt.qZ3o21lOW7_ikMMa8JqIXKctsV-qS6s5AnvCVQ',
    px: '>',
    playing: 'Team Stunners.❤️'
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: 'DJ',
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
    },
    maxVol: 100,
    loopMessage: false,
    discordPlayer: {
      ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
      }
    }
  }
};
