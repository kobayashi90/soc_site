const { permissions } = require('../../../config/info.json')
// const pagePerms = require('../../../config/pagePerms.json')

const bcrypt = require('bcrypt')
const { AuthenticationError } = require('apollo-server-micro')

module.exports = {
  login: async (parent, { username, password }, { db, req }) => {
    const user = await db.models.user.findByPk(username)
    if (!user) throw new AuthenticationError()

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new AuthenticationError()

    req.session.set('username', user.username)
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
  users: (parent, args, { db }) => db.models.user.findAll()
}
