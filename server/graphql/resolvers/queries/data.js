module.exports = {
  Query: {
    Album: (parent, { id }, { db }) => db.models.ost.findByPk(id),
    AlbumCount: async (parent, params, { db }) => db.models.ost.count(),
    Classes: (parent, args, { db }) => db.models.class.findAll(),
    DirectLinks: async (parent, { albumId }, { db }) => {
      const album = await db.models.ost.findByPk(albumId)
      const downloads = await album.getDownloads()
      const links = await Promise.all(downloads.map(d => d.getLinks()))

      return links.flat()
    },

    Config: (parent, { name }, { db, req }, info) => {
      return db.models.config.findOrCreate({ where: { name } })
        .then(() => db.models.config.findByPk(name))
    }
  }
}
