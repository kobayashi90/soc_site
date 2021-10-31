module.exports = {
  config: (parent, { name }, { db, req }, info) => {
    return db.models.config.findOrCreate({ where: { name } })
      .then(() => db.models.config.findByPk(name))
  }
}
