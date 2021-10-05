import { ApolloServer } from 'apollo-server'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import Sequelize from 'sequelize'
import glob from 'glob'
import relations from './relations'
// import cls from 'cls-hooked'

const db = new Sequelize(require('./config/sequelize.json')[process.env.NODE_ENV])
// Sequelize.useCLS(cls.createNamespace('trans-namespace'))

glob.sync('./sequelize/models/*').forEach(e => require(e)(db))
relations(db)

const server = new ApolloServer({
  typeDefs: mergeTypeDefs(loadFilesSync('graphql/schemas')),
  resolvers: mergeResolvers(loadFilesSync('graphql/resolvers')),
  context: () => ({ db })
})

startServer()

async function startServer () {
  await db.sync()
  const { url } = await server.listen()
  console.log(`🚀  Server ready at ${url}`)
}
