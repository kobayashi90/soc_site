import { ApolloClient, InMemoryCache } from '@apollo/client'
const isSSR = typeof window === 'undefined'
console.log(process.env.NODE_ENV)
const isGithub = process.env.NODE_ENV === 'GITHUB'

const client = new ApolloClient({
  uri: isSSR ? (isGithub ? 'https://beta.sittingonclouds.net/api' : 'http://localhost:4000') : 'http://localhost:4000',
  cache: new InMemoryCache(),
  ssrMode: isSSR
})

export default client
