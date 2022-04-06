import bcrypt from 'bcrypt'
import { UserInputError, ForbiddenError } from 'apollo-server-errors'
import generator from 'generate-password'
import { composeResolvers } from '@graphql-tools/resolvers-composition'
import { DateTime } from 'luxon'
import { Op } from 'sequelize'

import { createForgor } from '@/lib/forgor'
import { hasRole, isAuthed } from '@/lib/resolvers'

const resolversComposition = {
  'Mutation.*': hasRole('MANAGE_USER'),
  'Mutation.updatePass': [],
  'Mutation.createForgorLink': [],
  'Mutation.updateUser': [isAuthed]
}

const resolvers = {
  Mutation: {
    createUser: async (_, { username, email, roles }, { db }) => {
      return db.transaction(async () => {
        const password = generator.generate({ length: 30, numbers: true, upercase: true, strict: true })
        const user = await db.models.user.create({ username, email, password: await bcrypt.hash(password, 10) })
        user.setRoles(roles)

        await createForgor(user, db)

        return true
      })
    },
    updateUserRoles: async (parent, { username, roles }, { db, payload }, info) => {
      const user = await db.models.user.findByPk(username)
      user.setRoles(roles)
      await user.save()
      return true
    },
    deleteUser: async (parent, { username }, { db, payload }, info) => {
      const user = await db.models.user.findByPk(username)
      if (!user) throw new UserInputError('Not Found')
      user.destroy()
      return 1
    },

    createForgorLink: async (_, { key }, { db }) => {
      const user = await db.models.user.findOne({ where: { [Op.or]: [{ username: key }, { email: key }] } })
      if (!user) throw new UserInputError('Not Found')

      await createForgor(user, db)
      return true
    },
    updatePass: async (_, { key, pass }, { db }) => {
      const row = await db.models.forgor.findByPk(key)
      if (!row) throw new ForbiddenError()

      const now = DateTime.now()
      const expires = DateTime.fromJSDate(row.expires)

      if (now > expires) throw new ForbiddenError()

      return db.transaction(async () => {
        const user = await db.models.user.findByPk(row.username)
        user.password = await bcrypt.hash(pass, 10)

        await user.save()
        await row.destroy()
        return true
      })
    },
    updateUser: async (_, { username, email, password }, { db, user }) => {
      const values = {}
      if (username) values.username = username
      if (email) values.email = email
      if (password) values.password = await bcrypt.hash(password, 10)

      await db.models.user.update(values, { where: { username: user.username } })
      return true
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

export default composeResolvers(resolvers, resolversComposition)
