import { ApolloServer } from 'apollo-server-micro'
import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

import db from '@ApolloClient/lib/startDB'
import withSession from '@/lib/session'
import { processRequest } from 'graphql-upload'

import mutationUser from '@/graphql/resolvers/mutations/user'
// import mutationData from '@/graphql/resolvers/mutations/create'
import mutationUpdate from '@/graphql/resolvers/mutations/update'
import mutationSite from '@/graphql/resolvers/mutations/site'

import queryData from '@/graphql/resolvers/queries/data'
import querySite from '@/graphql/resolvers/queries/site'
import queryUser from '@/graphql/resolvers/queries/user'

import typesData from '@/graphql/resolvers/types/data'
import typesUser from '@/graphql/resolvers/types/user'

const Mutation = [mutationUser, mutationUpdate, mutationSite]
const Query = [queryData, querySite, queryUser]
const types = [typesData, typesUser]

const apolloServer = new ApolloServer({
  credentials: true,
  typeDefs: mergeTypeDefs(loadFilesSync(path.join(process.cwd(), 'graphql/schemas'))),
  resolvers: mergeResolvers([...Mutation, ...Query, ...types]),
  context: async ({ req, res }) => {
    const username = req.session.get('username')
    return { db, req, res, username, user: username && await db.models.user.findByPk(username) }
  }
})
const startServer = apolloServer.start()

export default withSession(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  const contentType = req.headers['content-type']
  if (contentType && contentType.startsWith('multipart/form-data')) {
    req.filePayload = await processRequest(req, res)
  }

  await db.sync()
  await startServer

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: { bodyParser: false }
}
