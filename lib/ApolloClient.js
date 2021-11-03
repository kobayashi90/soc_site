import { ApolloClient, InMemoryCache } from '@apollo/client'

const isSSR = typeof window === 'undefined'
const isDev = process.env.NODE_ENV === 'development'
const localPort = isDev ? '3000' : '58991'
const baseUrl = isSSR ? `http://localhost:${localPort}` : window.location.origin

const client = new ApolloClient({
  uri: `${baseUrl}/api/graphql`,
  cache: new InMemoryCache(),
  credentials: 'include',
  ssrMode: isSSR
})

export default client
