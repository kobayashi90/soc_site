import bcrypt from 'bcrypt'
const { permissions } = require('../../../config/info.json')

const Query = {
  Query: {
    login: async (parent, { username, password }, { db }) => {
      const user = await db.models.user.findByPk(username)
      if (!user) throw new Error()

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) throw new Error()

      return user.username
    },
    user: async (parent, { username }, { db, req }) => db.models.user.findByPk(username),

    permissions: () => permissions,
    roles: (parent, args, { db }) => db.models.role.findAll(),
    users: (parent, args, { db }) => db.models.user.findAll()
  }
}

export default Query
