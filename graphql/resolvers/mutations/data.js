const { UserInputError, AuthenticationError } = require('apollo-server-micro')
// const { jwtApi } = require('../../useJwt')
const { img } = require('../helpers')
const { postDiscord, postReddit } = require('../../../lib/plugins')

function slugify (text) {
  return require('slugify')(text, {
    lower: true, // convert to lower case, defaults to `false`
    strict: true // strip special characters except replacement, defaults to `false`
  })
}

async function deleteRow (row, payload, db) {
  //  if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
  if (row) await row.destroy()
  return 1
}

module.exports = {
  Mutation: {
    /* createArtist: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.models.artist.create(data)
    },

    createPlatform: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.models.platform.create(data)
    },
    updatePlatform: async (parent, { key, name, type }, { payload, user: currentUser, db }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()

      const plat = await db.models.platform.findByPk(key)
      if (name) plat.name = name
      if (type !== plat.type) plat.type = type

      await plat.save()
      return plat
    },
    deletePlatform: async (parent, { key }, { payload, user: currentUser, db }) => deleteRow(await db.models.platform.findByPk(key), payload, db),

    createPublisher: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.models.publisher.create(data)
    },
    updatePublisher: async (parent, { id, name }, { payload, user: currentUser, db }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()

      const pub = await db.models.publisher.findByPk(id)
      pub.name = name

      await pub.save()
      return pub
    },
    deletePublisher: async (parent, { id }, { payload, user: currentUser, db }) => deleteRow(await db.models.publisher.findByPk(id), payload, db),

    createStudio: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.models.studio.create(data)
    },
    updateStudio: async (parent, { slug, name }, { payload, user: currentUser, db }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()

      const studio = await db.models.studio.findByPk(slug)
      studio.name = name

      await studio.save()
      return studio
    },
    deleteStudio: async (parent, { slug }, { payload, user: currentUser, db }) => deleteRow(await db.models.studio.findByPk(slug), payload, db),

    createSeries: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.transaction(async t => {
        const result = await db.models.series.create(data)

        if (data.cover) {
          await img(data.cover, '/var/www/soc_img/img/series', result.dataValues.slug)
        }
        return result
      })
    },
    updateSeries: async (parent, { slug, name, cover }, { payload, user: currentUser, db }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()

      const series = await db.models.series.findByPk(slug)
      if (name) series.name = name
      if (cover) await img(cover, '/var/www/soc_img/img/game', slug)

      await series.save()
      return series
    },
    deleteSeries: async (parent, { slug }, { payload, user: currentUser, db }) => deleteRow(await db.models.series.findByPk(slug), payload, db),

    createGame: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.transaction(async t => {
        let gameInstance = null
        return db.models.game.create(data)
          .then(game => {
            gameInstance = game
            return Promise.all([
              gameInstance.setSeries(data.series),
              gameInstance.setPublishers(data.publishers),
              gameInstance.setPlatforms(data.platforms)
            ])
          })
          .then(() => img(data.cover, '/var/www/soc_img/img/game', data.slug))
          .then(() => {
            return gameInstance
          })
      })
    },
    updateGame: async (parent, args, { payload, user: currentUser, db }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()

      const { slug, name, cover, releaseDate, series, publishers, platforms } = args

      const game = await db.models.game.findByPk(slug)
      if (cover) await img(cover, '/var/www/soc_img/img/game', slug)
      game.name = name
      game.releaseDate = releaseDate
      game.setSeries(series)
      game.setPublishers(publishers)
      game.setPlatforms(platforms)

      await game.save()
      return game
    },
    deleteGame: async (parent, { slug }, { payload, user: currentUser, db }) => deleteRow(await db.models.game.findByPk(slug), payload, db),

    createAnimation: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.transaction(async t => {
        let animInstance = null
        return db.models.animation.create(data)
          .then(anim => {
            animInstance = anim
            return animInstance.setStudios(data.studios)
          })
          .then(() => img(data.cover, '/var/www/soc_img/img/anim', animInstance.id, 100))
          .then(() => {
            return animInstance
          })
      })
    },
    updateAnimation: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()

      const anim = await db.models.animation.findByPk(data.id)
      Object.entries(data).forEach(([key, value]) => {
        anim[key] = value
      })
      anim.setStudios(data.studios)
      if (data.cover) await img(data.cover, '/var/www/soc_img/img/anim', anim.id, 100)

      await anim.save()
      return anim
    },
    deleteAnimation: async (parent, { id }, { payload, user: currentUser, db }) => deleteRow(await db.models.animation.findByPk(id), payload, db),

    createAlbum: async (parent, data, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['CREATE'])) throw new AuthenticationError()

      data.createdBy = payload.username
      return db.transaction(async t => {
        data.artists = data.artists ? data.artists.map(artist => { return { name: artist, slug: slugify(artist) } }) : []
        await db.models.artist.bulkCreate(data.artists, { ignoreDuplicates: true })

        return db.models.ost.create(data, {
          include: [db.models.disc, db.models.store, {
            model: db.models.download, include: [db.models.link]
          }]
        }).then(ost => {
          return Promise.all([
            ost.setArtists(data.artists.map(({ slug }) => slug)),
            ost.setClasses(data.classes || []),
            ost.setCategories(data.categories || []),
            ost.setPlatforms(data.platforms || []),
            ost.setGames(data.games || []),
            ost.setAnimations(data.animations || []),
            ost.setRelated(data.related || []),
            ...(data.cover ? [img(data.cover, '/var/www/soc_img/img/album', ost.dataValues.id, 100)] : [])
          ])
            .then(() => {
              if (ost.status === 'show') {
                postReddit(ost)
                postDiscord(ost)
              }
              return ost
            })
        })
      })
    },
    updateAlbum: async (parent, { data, id }, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()

      data.artists = data.artists ? data.artists.map(artist => { return { name: artist, slug: slugify(artist) } }) : []
      await db.models.artist.bulkCreate(data.artists, { ignoreDuplicates: true })

      const ost = await db.models.ost.findByPk(id)
      const triggerPost = (data.status !== ost.status.repeat(1)) && data.status === 'show'

      return Promise.all([
        ost.update(data),
        ost.setArtists(data.artists.map(({ slug }) => slug)),
        ost.setClasses(data.classes || []),
        ost.setCategories(data.categories || []),
        ost.setPlatforms(data.platforms || []),
        ost.setGames(data.games || []),
        ost.setRelated(data.related || []),
        ost.setAnimations(data.animations || []),
        db.models.disc.destroy({ where: { ostId: ost.dataValues.id } }).then(() => (data.discs || []).map(disc => ost.createDisc(disc))),
        db.models.store.destroy({ where: { ostId: ost.dataValues.id } }).then(() => (data.stores || []).map(store => ost.createStore(store))),
        db.models.download.destroy({ where: { ostId: ost.dataValues.id } }).then(() => (data.downloads || []).map(download => ost.createDownload(download, { include: [db.models.link] }))),
        ...(data.cover ? [img(data.cover, '/var/www/soc_img/img/album', ost.dataValues.id, 100)] : [])
      ]).then(async () => {
        await db.models.ostHistory.create({ username: payload.username, ostId: id, updatedData: ost.changed() })

        if (triggerPost) {
          postReddit(ost)
          postDiscord(ost)
        }
        return ost
      })
    },
    deleteAlbum: async (parent, { id }, { payload, db, user }, info) => {
    // if (!await jwtApi(payload, db, ['CREATE'])) throw new AuthenticationError()

      const ost = await db.models.ost.findByPk(id)
      if (!ost) throw new UserInputError('Not Found')
      ost.destroy()
      return id
    } */
  }
}
