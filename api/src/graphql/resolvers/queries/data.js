export default {
  Query: {
    Album: (parent, { id }, { db }) => db.models.ost.findByPk(id)
  }
}
