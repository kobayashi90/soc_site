import { ApolloServer } from 'apollo-server-micro'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { processRequest } from 'graphql-upload'
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import db from '@/lib/startDB'
import { withSessionApi } from '@/lib/session'

import mutationUser from '@/graphql/resolvers/mutations/user'
import mutationCreate from '@/graphql/resolvers/mutations/create'
import mutationUpdate from '@/graphql/resolvers/mutations/update'
import mutationSite from '@/graphql/resolvers/mutations/site'

import queryData from '@/graphql/resolvers/queries/data'
import querySite from '@/graphql/resolvers/queries/site'
import queryUser from '@/graphql/resolvers/queries/user'

import typesData from '@/graphql/resolvers/types/data'
import typesUser from '@/graphql/resolvers/types/user'

import indexSchema from '@/graphql/schemas/index.graphql'
import siteSchema from '@/graphql/schemas/site.graphql'
import userSchema from '@/graphql/schemas/user.graphql'

const schemas = [indexSchema, siteSchema, userSchema]
const Mutation = [mutationUser, mutationUpdate, mutationSite, mutationCreate]
const Query = [queryData, querySite, queryUser]
const types = [typesData, typesUser]

const apolloServer = new ApolloServer({
  credentials: true,
  typeDefs: mergeTypeDefs(schemas),
  resolvers: mergeResolvers([...Mutation, ...Query, ...types]),
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

  db.sync()
  await startServer
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: { bodyParser: false }
}
