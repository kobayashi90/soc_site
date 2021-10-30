import { ApolloServer } from 'apollo-server'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import db from './startDB'

const server = new ApolloServer({
  typeDefs: mergeTypeDefs(loadFilesSync('graphql/schemas')),
  resolvers: mergeResolvers(loadFilesSync('graphql/resolvers')),
  cors: { origin: '*' },
  context: () => ({ db })
})

startServer()

async function startServer () {
  await db.sync()
  const { url } = await server.listen()
  console.log(`🚀  Server ready at ${url}`)
}
