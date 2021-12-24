import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const isDev = process.env.NODE_ENV === 'development'
const isSSR = typeof window === 'undefined'
const localPort = isDev ? '3000' : '58991'
const baseUrl = process.env.GITHUB_ACTIONS ? 'https://beta.sittingonclouds.net' : (isSSR ? `http://localhost:${localPort}` : window.location.origin)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: `${baseUrl}/api/graphql`, credentials: 'include' }),
  ssrMode: isSSR,
  defaultOptions: { query: { fetchPolicy: 'network-only' } }
})

export default client
