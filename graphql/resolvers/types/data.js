const { GraphQLUpload } = require('graphql-upload')

module.exports = {
  Upload: GraphQLUpload,
  Album: {
    artists: (parent, args, context, info) => parent.getArtists(),
    classes: (parent, args, context, info) => parent.getClasses(),
    categories: (parent, args, context, info) => parent.getCategories(),
    platforms: (parent, args, context, info) => parent.getPlatforms({ order: ['name'] }),
    games: (parent, args, context, info) => parent.getGames(),
    downloads: async (parent, args, context, info) => parent.getDownloads(),
    discs: (parent, args, context, info) => parent.getDiscs({ order: [['number', 'ASC']] }),
    related: (parent, args, context, info) => parent.getRelated(),
    stores: (parent) => parent.getStores(),
    animations: (parent) => parent.getAnimations()
  },

  Category: {
    albums: parent => parent.getOsts()
  },

  Class: {
    albums: parent => parent.getOsts(),
    count: (parent, args, { db }) => db.models.ost.count({ include: [{ model: db.models.class, where: { name: parent.name } }] })
  },

  Download: {
    links: async (parent, args, { req, db, user }, info) => {
      let donator = false
      const links = await parent.getLinks()

      if (user) {
        const roles = await user.getRoles()
        const perms = roles.map(r => r.permissions).flat()

        donator = perms.includes('SKIP_ADS')
      }

      return links.map(l => {
        const link = { ...l.dataValues }
        if (!donator) link.directUrl = '/unauthorized'
        return link
      })
    }
  },

  Game: {
    albums: (parent, args, context, info) => parent.getOsts(),
    series: (parent, args, context, info) => parent.getSeries(),
    publishers: (parent, args, context, info) => parent.getPublishers(),
    platforms: (parent, args, context, info) => parent.getPlatforms({ order: ['name'] })
  },

  Platform: {
    albums: parent => parent.getOsts(),
    games: async (parent, args, { db }) => {
      const games = await db.models.game.findAll({ include: [db.models.platform] })
      return games.filter(g => g.platforms.filter(p => p.id === parent.id).length > 0)
    }
  },

  Animation: {
    studios: parent => parent.getStudios(),
    albums: parent => parent.getOsts()
  },
  Studio: {
    animations: async (parent, args, { db }) => {
      const animations = await db.models.animation.findAll({ include: [db.models.studio] })
      return animations.filter(a => a.studios.filter(p => p.slug === parent.slug).length > 0)
    }
  },

  Series: {
    games: (parent, args, context, info) => parent.getGames()
  },

  Publisher: {
    games: (parent, args, context, info) => parent.getGames()
  },

  Disc: {
    album: (parent) => parent.getOst()
  }
}
