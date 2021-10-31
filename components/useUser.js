import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const query = gql`
  query {
    me {
      username
      roles {
        name
      }
      permissions
    }
  }
`

export default function useUser () {
  const { data, refetch } = useQuery(query)
  return { user: data?.me, refetch }
}
