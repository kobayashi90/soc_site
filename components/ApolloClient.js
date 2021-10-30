import { ApolloClient, InMemoryCache } from '@apollo/client'
const isSSR = typeof window === 'undefined'
const isDev = process.env.NODE_ENV === 'development'

const client = new ApolloClient({
  uri: (isSSR || isDev) ? 'http://localhost:4000' : 'https://beta.sittingonclouds.net/api',
  cache: new InMemoryCache(),
  ssrMode: isSSR
})

export default client
