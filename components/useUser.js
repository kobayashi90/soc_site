import { useQuery, gql } from '@apollo/client'

const query = gql`
  query {
    me {
      username
      roles {
        name
      }
      email
      permissions
      pages {
        url
        name
      }
    }
  }
`

export default function useUser () {
  const { data, refetch } = useQuery(query)
  return { user: data?.me, refetch }
}
