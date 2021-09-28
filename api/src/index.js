import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

import Sequelize from 'sequelize'
import glob from 'glob'
import cls from 'cls-hooked'
import relations from './sequelize/relations'

dotenv.config({ path: '../.env' })

const db = new Sequelize(require('./config/sequelize.json')[process.env.NODE_ENV])

const server = new ApolloServer({
  typeDefs: mergeTypeDefs(loadFilesSync('src/graphql/schemas')),
  resolvers: mergeResolvers(loadFilesSync('src/graphql/resolvers')),
  context: () => {
    return { db }
  }
})

Sequelize.useCLS(cls.createNamespace('trans-namespace'))

glob.sync('src/sequelize/models/*').forEach(e => require(e.replace('src', '.'))(db))
relations(db)

startServer()

async function startServer () {
  await db.sync()
  const { url } = await server.listen()
  console.log(`🚀  Server ready at ${url}`)
}
