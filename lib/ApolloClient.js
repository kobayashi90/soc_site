import { ApolloClient, InMemoryCache } from '@apollo/client'
const isSSR = typeof window === 'undefined'

const client = new ApolloClient({
  uri: isSSR ? 'http://localhost:3000/api/graphql' : `${window.location.origin}/api/graphql`,
  cache: new InMemoryCache(),
  ssrMode: isSSR
})

export default client
