import { permissions } from '@/config/info.json'
import { UserInputError } from 'apollo-server-micro'
import bcrypt from 'bcrypt'
import { Op } from 'sequelize'
import { composeResolvers } from '@graphql-tools/resolvers-composition'

import { hasRole } from '@/lib/resolvers'

const resolversComposition = { 'Query.users': hasRole('MANAGE_USER') }
const resolvers = {
  Query: {
    login: async (parent, { username, password }, { db, req }) => {
      const user = await db.models.user.findByPk(username)
      if (!user) throw new UserInputError()

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) throw new UserInputError()

      req.session.username = user.username
      await req.session.save()

      return 200
    },
    logout: (parent, args, { req, res }) => {
      req.session.destroy()
      res.setHeader('cache-control', 'no-store, max-age=0')

      return 200
    },
    me: (parent, args, { db, user }) => user,
    permissions: () => permissions,
    roles: (parent, args, { db }) => db.models.role.findAll(),
    users: (parent, args, { db }) => {
      const username = args.username.trim()
      if (username.length < 3) return []
      return db.models.user.findAll({ where: { username: { [Op.like]: `%${username}%` } } })
    },
    user: (parent, { username }, { db }) => db.models.user.findByPk(username)
  }
}

export default composeResolvers(resolvers, resolversComposition)
