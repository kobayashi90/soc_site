import { withIronSession } from 'next-iron-session'
import client from './ApolloClient'
import gql from 'graphql-tag'

const query = gql`
  query user($username: String!) {
    user (username: $username) {
      username
      roles {
        name
      }
      permissions
    }
  }
`

export async function getUser (req) {
  const username = req.session.get('user')
  if (!username) return

  const { data } = await client.query({ query, variables: { username } })
  return data.user
}

const withSession = (handler) =>
  withIronSession(handler, {
    password: process.env.IRONCLAD,
    cookieName: 'socuser',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production'
    }
  })

export default withSession
