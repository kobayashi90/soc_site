import { ApolloClient, InMemoryCache } from '@apollo/client'
const isSSR = typeof window === 'undefined'

const client = new ApolloClient({
  uri: isSSR ? 'http://localhost:4000' : 'https://beta.sittingonclouds.net/api',
  cache: new InMemoryCache(),
  ssrMode: isSSR
})

export default client
