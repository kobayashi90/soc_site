import withSession from '../../components/session'
import client from '../../components/ApolloClient'
import { gql } from '@apollo/client'

const query = gql`
  query Login($username: String!, $password: String!){
    user: login(username: $username, password: $password){
      roles {
        name
      }
      permissions
    }
  }
`

export default withSession(async (req, res) => {
  try {
    const { data } = await client.query({ query, variables: req.body })
    const { user } = data

    req.session.set('user', user)
    await req.session.save()
    res.json(user)
  } catch (error) {
    console.log(error)
    const { response } = error
    res.status(response?.status || 500).send('Login Failed')
  }
})
