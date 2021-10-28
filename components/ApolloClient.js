import { ApolloClient, InMemoryCache } from '@apollo/client'
const isSSR = typeof window === 'undefined'
const isGithub = process.env.GITHUB_JOB
console.log(isGithub)
const clientURL = 'https://beta.sittingonclouds.net/api'

const client = new ApolloClient({
  uri: isSSR ? (isGithub ? clientURL : 'http://localhost:4000') : clientURL,
  cache: new InMemoryCache(),
  ssrMode: isSSR
})

export default client
