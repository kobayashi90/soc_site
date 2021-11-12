import { hasRole } from '../../../lib/util'
const bcrypt = require('bcrypt')
const { UserInputError } = require('apollo-server-micro')
const generator = require('generate-password')
const { composeResolvers } = require('@graphql-tools/resolvers-composition')

const resolversComposition = { 'Mutation.*': hasRole('MANAGE_USER') }
const resolvers = {
  Mutation: {
    createUser: async (parent, { username, email, roles }, { db, payload }, info) => {
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
      const user = await db.models.user.findByPk(key)
      if (!user.email !== email) user.email = email
      user.setRoles(roles)

      await user.save()
      return user
    },
    deleteUser: async (parent, { username }, { db, payload }, info) => {
      const user = await db.models.user.findByPk(username)
      if (!user) throw new UserInputError('Not Found')
      user.destroy()
      return 1
    },
    passUser: async (parent, { username }, { db, payload }, info) => {
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

    createRole: async (parent, args, { db, user, payload }) => db.models.role.create(args),
    updateRole: async (parent, { key, name, permissions }, { db, payload }) => {
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
      const role = await db.models.role.findByPk(name)
      if (!role) throw new UserInputError('Not Found')
      await role.destroy()

      return name
    }
  }
}

module.exports = composeResolvers(resolvers, resolversComposition)