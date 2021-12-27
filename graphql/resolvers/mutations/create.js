import { UserInputError } from 'apollo-server-errors'
import { composeResolvers } from '@graphql-tools/resolvers-composition'

import { hasRole, img, createLog, createUpdateLog } from '@/lib/utils'
import { postDiscord, postReddit } from '@/lib/plugins'
import { slugify } from '@/components/utils'

const resolversComposition = { 'Mutation.*': hasRole('CREATE') }
const resolvers = {
  Mutation: {
    createAlbum: async (parent, data, { db, user }, info) => {
      data.createdBy = user.username

      return db.transaction(async () => {
        data.artists = data.artists ? data.artists.map(artist => { return { name: artist, slug: slugify(artist) } }) : []
        await db.models.artist.bulkCreate(data.artists, { ignoreDuplicates: true })

        const ost = await db.models.ost.create(data, {
          include: [db.models.disc, db.models.store, {
            model: db.models.download, include: [db.models.link]
          }]
        })

        await Promise.all([
          ost.setArtists(data.artists.map(({ slug }) => slug)),
          ost.setClasses(data.classes || []),
          ost.setCategories(data.categories || []),
          ost.setPlatforms(data.platforms || []),
          ost.setGames(data.games || []),
          ost.setAnimations(data.animations || []),
          ost.setRelated(data.related || []),
          createLog(db, 'createAlbum', data, user.username)
        ])

        if (data.cover) await img(data.cover, 'album', ost.dataValues.id)

        if (ost.status === 'show') {
          postReddit(ost)
          postDiscord(ost)
        }

        setTimeout(process.exit, 30 * 1000)
        return ost
      })
    },

    deleteAlbum: async (parent, { id }, { db, user }, info) => {
      const ost = await db.models.ost.findByPk(id)
      if (!ost) throw new UserInputError('Not Found')
      return db.transaction(async () => {
        await createUpdateLog(db, 'deleteAlbum', ost, user.username)
        await ost.destroy()
        return 1
      })
    }
  }
}

export default composeResolvers(resolvers, resolversComposition)
