import { ApolloServer } from 'apollo-server-micro'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { processRequest } from 'graphql-upload'
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'

import db from '@/lib/startDB'
import { withSessionApi } from '@/lib/session'
import resolvers from '@/graphql/resolvers'

const schemas = loadFilesSync(path.join(process.cwd(), './graphql/schemas'))

const apolloServer = new ApolloServer({
  credentials: true,
  typeDefs: mergeTypeDefs(schemas),
  resolvers: mergeResolvers(resolvers),
  context: async ({ req, res }) => {
    const { username } = req.session
    return { db, req, res, username, user: username && await db.models.user.findByPk(username) }
  },
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground()
  ]
})
const startServer = apolloServer.start()

export default withSessionApi(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  const contentType = req.headers['content-type']
  if (contentType && contentType.startsWith('multipart/form-data')) {
    req.filePayload = await processRequest(req, res, { maxFieldSize: Infinity, maxFileSize: Infinity, maxFiles: 1 })
  }

  if (process.env.NODE_ENV === 'production' || process.env.SYNC) db.sync()
  await startServer
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: { bodyParser: false }
}
