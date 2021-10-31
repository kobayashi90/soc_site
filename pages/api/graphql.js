import { ApolloServer } from 'apollo-server-micro'
import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import db from '../../lib/startDB'
import withSession from '../../lib/session'

import mutationUser from '../../graphql/resolvers/mutations/user'
import mutationData from '../../graphql/resolvers/mutations/data'
import mutationSite from '../../graphql/resolvers/mutations/site'

import queryData from '../../graphql/resolvers/queries/data'
import querySite from '../../graphql/resolvers/queries/site'
import queryUser from '../../graphql/resolvers/queries/user'

import typesData from '../../graphql/resolvers/types/data'
import typesUser from '../../graphql/resolvers/types/user'

const Mutation = { ...mutationUser, ...mutationData, ...mutationSite }
const Query = { ...queryData, ...querySite, ...queryUser }
const types = { ...typesData, ...typesUser }

const apolloServer = new ApolloServer({
  typeDefs: mergeTypeDefs(loadFilesSync(path.join(process.cwd(), 'graphql/schemas'))),
  resolvers: { Mutation, Query, ...types },
  context: () => ({ db })
})
const startServer = apolloServer.start()

export default withSession(async (req, res) => {
  if (process.env.NODE_ENV === 'development') res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false
  }
}
