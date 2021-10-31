import { ApolloClient, InMemoryCache } from '@apollo/client'
const isSSR = typeof window === 'undefined'
const isGithub = (process.env.GITHUB_JOB || process.env.SOC_BUILD)
const baseUrl = isGithub ? 'https://beta.sittingonclouds.net' : (isSSR ? 'http://localhost:3000' : window.location.origin)

const client = new ApolloClient({
  uri: `${baseUrl}/api/graphql`,
  cache: new InMemoryCache(),
  credentials: 'include',
  ssrMode: isSSR
})

export default client
