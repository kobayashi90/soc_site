const Reddit = require('reddit')
const { Client } = require('discord.js')

const redditConfig = process.env.REDDIT
const discordConfig = process.env.DISCORD

let reddit
const flairs = []

async function runReddit () {
  // reddit = new Reddit(redditConfig)
  // flairs = await reddit.get('/r/sittingonclouds/api/link_flair_v2')
}
if (redditConfig) {
  runReddit()
}

let discordClient
if (discordConfig) {
  // discordClient = new Client()
  // discordClient.login(discordConfig.token)
}

module.exports = {
  postReddit: async (instance) => {
    const classList = await instance.getClasses()
    const classItem = classList[0]

    const flair = classItem && flairs.find(f => f.text === classItem.name)

    if (reddit) {
      reddit.post('/api/submit', {
        sr: 'sittingonclouds',
        kind: 'link',
        title: instance.title,
        url: `https://www.sittingonclouds.org/album/${instance.id}`,
        flair_id: flair ? flair.id : '',
        flair_text: flair ? flair.text : ''
      }).catch(console.log)
    }
  },

  postDiscord: async (instance) => {
    if (discordClient) {
      const guild = await discordClient.guilds.fetch('496366337036255242')
      guild.channels.cache
        .find(c => c.name === 'last-added-soundtracks')
        .send(`https://www.sittingonclouds.org/album/${instance.id}`)
    }
  }

}
