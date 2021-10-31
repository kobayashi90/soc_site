const bcrypt = require('bcrypt')
// const jsonwebtoken = require('jsonwebtoken')
const { UserInputError, AuthenticationError } = require('apollo-server-micro')
const generator = require('generate-password')
// const { jwtApi } = require('../../useJwt')

module.exports = {

  createUser: async (parent, { username, email, roles }, { db, payload }, info) => {
    // if (!await jwtApi(payload, db, ['MANAGE_USER'])) throw new AuthenticationError()
    const password = generator.generate({
      length: 10,
      numbers: true,
      upercase: false,
      strict: true
    })

    const user = await db.models.user.create({
      username,
      email,
      password: await bcrypt.hash(password, 10)
    })

    user.setRoles(roles)

    return { username: user.username, email: user.email, password }
  },
  updateUser: async (parent, { key, username, email, roles }, { db, payload }, info) => {
    // if (!await jwtApi(payload, db, ['MANAGE_USER'])) throw new AuthenticationError()

    const user = await db.models.user.findByPk(key)
    if (!user.email !== email) user.email = email
    user.setRoles(roles)

    await user.save()
    return user
  },
  deleteUser: async (parent, { username }, { db, payload }, info) => {
    // if (!await jwtApi(payload, db, ['MANAGE_USER'])) throw new AuthenticationError()

    const user = await db.models.user.findByPk(username)
    if (!user) throw new UserInputError('Not Found')
    user.destroy()
    return 1
  },
  passUser: async (parent, { username }, { db, payload }, info) => {
    // if (!await jwtApi(payload, db, ['MANAGE_USER'])) throw new AuthenticationError()

    const user = await db.models.user.findByPk(username)
    if (!user) throw new UserInputError('Not Found')

    const password = generator.generate({
      length: 10,
      numbers: true,
      upercase: false,
      strict: true
    })

    user.password = await bcrypt.hash(password, 10)
    await user.save()
    return password
  },

  createRole: async (parent, args, { db, user, payload }) => {
    // if (!await jwtApi(payload, db, ['MANAGE_USER'])) throw new AuthenticationError()
    return db.models.role.create(args)
  },
  updateRole: async (parent, { key, name, permissions }, { db, payload }) => {
    // if (!await jwtApi(payload, db, ['MANAGE_USER'])) throw new AuthenticationError()

    const role = await db.models.role.findByPk(key)
    if (!role) throw new UserInputError('Not Found')

    if (role.name !== name) {
      await db.query(`UPDATE roles SET name = "${name}" WHERE name = "${key}"`)
    }
    role.permissions = permissions

    await role.save()
    return role
  },
  deleteRole: async (parent, { name }, { db, user, payload }) => {
    // if (!await jwtApi(payload, db, ['MANAGE_USER'])) throw new AuthenticationError()

    const role = await db.models.role.findByPk(name)
    if (!role) throw new UserInputError('Not Found')
    await role.destroy()

    return name
  }
}
