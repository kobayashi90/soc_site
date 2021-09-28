import { Op } from 'sequelize'

const searchPage = (args, options, db) => {
  const { limit, page, model } = args

  if (limit !== undefined) {
    options.limit = limit
    options.offset = limit * page
  }

  return db.models[model].findAndCountAll(options)
}

const info = {
  classes: [
    'Game',
    'Animation'
  ]
}

export default {
  Query: {
    Album: (parent, { id }, { db }) => db.models.ost.findByPk(id),
    searchAlbums: (parent, args, { db }) => {
      const { title = '', classes = info.classes, limit, page = 0, order = ['createdAt'], mode = 'DESC', status = ['show'] } = args
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
    }
  }
}
