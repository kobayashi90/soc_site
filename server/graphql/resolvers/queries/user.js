import bcrypt from 'bcrypt'
const { permissions } = require('../../../config/info.json')

const Query = {
  Query: {
    login: async (parent, { username, password }, { db }) => {
      const user = await db.models.user.findByPk(username)
      if (!user) throw new Error()

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) throw new Error()

      const roles = await user.getRoles()

      return { roles, permissions: roles.map(r => r.permissions).flat() }
    },
    permissions: () => permissions,
    roles: (parent, args, { db }) => db.models.role.findAll(),
    users: (parent, args, { db }) => db.models.user.findAll()
  }
}

export default Query
