import Sequelize from 'sequelize'
import glob from 'glob'
import relations from './relations'
// import cls from 'cls-hooked'

const db = new Sequelize(require('./config/sequelize.json')[process.env.NODE_ENV])
// Sequelize.useCLS(cls.createNamespace('trans-namespace'))

glob.sync('./sequelize/models/*').forEach(e => require(e)(db))
relations(db)

export default db
