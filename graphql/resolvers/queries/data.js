import { Op } from 'sequelize'
import info from '@/config/info.json'

const resolvers = {
  Query: {
    artists: (parent, args, { db }, info) => db.models.artist.findAll(),
    platforms: (parent, args, { db }, info) => db.models.platform.findAll(),
    publishers: (parent, args, { db }, info) => db.models.publisher.findAll(),
    publisher: (parent, { id }, { db }, info) => db.models.publisher.findByPk(id),
    classes: (parent, args, { db }, info) => db.models.class.findAll(),
    series: (parent, args, { db }, info) => db.models.series.findAll(),
    categories: (parent, args, { db }, info) => db.models.category.findAll(),
    games: (parent, args, { db }, info) => db.models.game.findAll(),
    game: (parent, { slug }, { db }, info) => db.models.game.findByPk(slug),

    album: (parent, { id, title }, { db }, info) => db.models.ost.findByPk(id),
    downloads: (parent, { id }, { db }) => db.models.download.findAll({ where: { ostId: id } }),
    albums: (parent, args, { db }, info) => db.models.ost.findAll(),

    platform: async (parent, { id }, { db }) => db.models.platform.findByPk(id),
    animation: (parent, { id }, { db }) => db.models.animation.findByPk(id),
    animations: (parent, args, { db }) => db.models.animation.findAll(),
    studio: (parent, { slug }, { db }) => db.models.studio.findByPk(slug),
    studios: (parent, { slug }, { db }) => db.models.studio.findAll(),
    seriesOne: (parent, { slug }, { db }, info) => db.models.series.findByPk(slug),
    searchAlbum: (parent, { title = '', classes = info.classes, limit, page = 0, order = ['createdAt'], mode = 'DESC', status = ['show'] }, { db }) => {
      const titleWords = title.split(' ')

      return searchPage({ limit, page, model: 'ost' }, {
        where: {
          [Op.or]: [
            { [Op.and]: titleWords.map(t => ({ title: { [Op.like]: `%${t}%` } })) },
            { [Op.and]: titleWords.map(t => ({ subTitle: { [Op.like]: `%${t}%` } })) }
          ],
          status: { [Op.in]: status }
        },
        include: [{ model: db.models.class, where: { name: { [Op.in]: classes } } }],
        order: order.map(o => [o, mode])
      }, db)
    },
    searchAlbumByArtist: async (parent, { name, classes = info.classes, limit, page = 0, order = ['createdAt'], mode = 'DESC', status = ['show'] }, { db }) => {
      return searchPage({ limit, page, model: 'ost' }, {
        where: { status: { [Op.in]: status } },
        include: [
          { model: db.models.class, where: { name: { [Op.in]: classes } } },
          { model: db.models.artist, where: { name: { [Op.like]: `%${name}%` } } }
        ],
        order: order.map(o => [o, mode])
      }, db)
    },
    searchAnimation: (parent, { title = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ title, limit, page, model: 'animation' }, {
      where: { title: { [Op.like]: `%${title}%` } },
      order: [[order, mode]]
    }, db),
    searchStudio: (parent, { name = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ name, limit, page, model: 'studio' }, {
      where: { name: { [Op.like]: `%${name}%` } },
      order: [[order, mode]]
    }, db),
    searchGame: (parent, { name = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ name, limit, page, model: 'game' }, {
      where: { name: { [Op.like]: `%${name}%` } },
      order: [[order, mode]]
    }, db),
    searchSeries: (parent, { name = '', limit, page = 0, order = 'createdAt', mode = 'DESC' }, { db }) => searchPage({ name, limit, page, model: 'series' }, {
      where: { name: { [Op.like]: `%${name}%` } },
      order: [[order, mode]]
    }, db),
    albumCount: async (parent, params, { db }) => db.models.ost.count(),
    searchSeriesByName: (parent, { name }, { db }) => db.models.series.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    }),
    recentSeries: (parent, { limit }, { db }) => db.models.series.findAll({
      limit: limit,
      order: [['createdAt', 'DESC']]
    }),
    searchPublishersByName: (parent, { name }, { db }) => db.models.publisher.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    }),
    recentPublishers: (parent, { limit }, { db }) => db.models.publisher.findAll({
      limit: limit,
      order: [['createdAt', 'DESC']]
    }),
    searchPlatformsByName: (parent, { name, type }, { db }) => db.models.platform.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        },
        type: { [Op.like]: `%${type}%` }
      }
    }),
    recentPlatforms: (parent, { limit, type }, { db }) => db.models.platform.findAll({
      limit: limit,
      order: [['createdAt', 'DESC']],
      where: { type: { [Op.like]: `%${type}%` } }
    }),

    getRandomAlbum: async (parent, { limit = 1 }, { db }) => {
      const result = await db.models.ost.findAll({ order: db.random(), limit })
      return result
    }
  }
}

const searchPage = (args, options, db) => {
  const { limit, page, model } = args

  if (limit !== undefined) {
    options.limit = limit
    options.offset = limit * page
  }

  return db.models[model].findAndCountAll(options)
}

export default resolvers
