import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

let apolloClient
const isSSR = typeof window === 'undefined'
const isDev = process.env.NODE_ENV === 'development'

export const isGithub = process.env.GITHUB_ACTIONS
const baseUri = isGithub ? 'https://sittingonclouds.net/graphql' : (isSSR || isDev ? 'http://localhost:4000' : `${window.origin}/graphql`)
const uri = `${baseUri}/graphql`

function createApolloClient () {
  return new ApolloClient({
    ssrMode: isSSR,
    link: createUploadLink({ uri, credentials: 'include' }),
    cache: new InMemoryCache()
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
