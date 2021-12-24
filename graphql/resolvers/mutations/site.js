
// import { AuthenticationError } from 'apollo-server-micro'
// const { jwtApi } = require('../../useJwt')
// const { img } = require('../helpers')

module.exports = {
  Mutation: {
    /* config: async (parent, data, { db, payload }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.models.config.upsert(data).then(() => db.models.config.findByPk(data.name))
    },

    uploadBanner: async (parent, { banner }, { db, payload }) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      await img(banner, '/var/www/soc_img/img/live', 'banner')
      return 1
    } */
  }
}
