import { ApolloClient, InMemoryCache } from '@apollo/client'
import { isGithub } from './utils'

const isSSR = typeof window === 'undefined'
const baseUrl = isGithub ? 'https://beta.sittingonclouds.net' : (isSSR ? 'http://localhost:58991' : window.location.origin)

const client = new ApolloClient({
  uri: `${baseUrl}/api/graphql`,
  cache: new InMemoryCache(),
  credentials: 'include',
  ssrMode: isSSR
})

export default client
