import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

let apolloClient
const isSSR = typeof window === 'undefined'
const isDev = process.env.NODE_ENV === 'development'
const localPort = isDev ? '3000' : '58991'
const baseUrl = process.env.GITHUB_ACTIONS ? 'https://beta.sittingonclouds.net' : (isSSR ? `http://localhost:${localPort}` : window.location.origin)

function createApolloClient () {
  return new ApolloClient({
    ssrMode: isSSR,
    link: createUploadLink({ uri: `${baseUrl}/api/graphql`, credentials: 'include' }),
    cache: new InMemoryCache(),
    defaultOptions: { query: { fetchPolicy: 'network-only' } }
  })
}

export function initializeApollo (initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) _apolloClient.cache.restore(initialState)

  // For SSG and SSR always create a new Apollo Client
  if (isSSR) return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo (initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
