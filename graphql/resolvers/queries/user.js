const { permissions } = require('../../../config/info.json')
const pagePerms = require('../../../config/pagePerms.json')
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { AuthenticationError } = require('apollo-server-micro')

module.exports = {
  login: async (parent, { username, password }, { db }) => {
    const user = await db.models.user.findByPk(username)
    if (!user) throw new Error()

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error()

    return user.username
  },
  permissions: () => permissions,
  roles: (parent, args, { db }) => db.models.role.findAll(),
  users: (parent, args, { db }) => db.models.user.findAll()
}
