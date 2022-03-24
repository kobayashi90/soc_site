
// import { AuthenticationError } from 'apollo-server-micro'
// const { jwtApi } = require('../../useJwt')

import { composeResolvers } from '@graphql-tools/resolvers-composition'
import { hasRole, img } from '@/lib/utils'

// const { img } = require('../helpers')

const resolversComposition = { 'Mutation.*': hasRole('UPDATE') }
const resolvers = {
  Mutation: {
    /* config: async (parent, data, { db, payload }, info) => {
    // if (!await jwtApi(payload, db, ['UPDATE'])) throw new AuthenticationError()
      return db.models.config.upsert(data).then(() => db.models.config.findByPk(data.name))
    }, */

    uploadBanner: async (parent, { banner }, { db, payload }) => {
      await img(banner, 'live', 'banner')
      return 1
    }
  }
}

export default composeResolvers(resolvers, resolversComposition)
