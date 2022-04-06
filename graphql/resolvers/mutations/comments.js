import { composeResolvers } from '@graphql-tools/resolvers-composition'
import { AuthenticationError } from 'apollo-server-micro'

const isAuthed = next => (root, args, context, info) => {
  if (!context.user) throw new AuthenticationError()
  return next(root, args, context, info)
}

const resolversComposition = {
  'Mutation.updateComment': [isAuthed],
  'Mutation.addFavorite': [isAuthed],
  'Mutation.removeFavorite': [isAuthed]
}

const resolvers = {
  Mutation: {
    updateComment: async (_, { text, anon, ostId }, { db, user, res }) => {
      const { username } = user
      const row = await db.models.comment.findOne({ where: { ostId, username } })

      if (row) {
        await row.update({ text, anon })
        await row.save()
      } else await db.models.comment.create({ ostId, username, text, anon })

      await res.unstable_revalidate(`/album/${ostId}`)

      return true
    },
    addFavorite: async (_, { ostId }, { db, user, res }) => {
      await user.addOst(ostId)
      await res.unstable_revalidate(`/album/${ostId}`)
      return true
    },
    removeFavorite: async (_, { ostId }, { db, user, res }) => {
      await user.removeOst(ostId)
      await res.unstable_revalidate(`/album/${ostId}`)
      return true
    }
  }
}

export default composeResolvers(resolvers, resolversComposition)
