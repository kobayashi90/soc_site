import withSession from '../../lib/session'
import client from '../../lib/ApolloClient'
import { gql } from '@apollo/client'

const query = gql`
  query Login($username: String!, $password: String!){
    username: login(username: $username, password: $password)
  }
`

export default withSession(async (req, res) => {
  try {
    const { data } = await client.query({ query, variables: req.body })
    const { username } = data

    req.session.set('user', username)
    await req.session.save()

    res.status(200).send()
  } catch (error) {
    console.log(error)
    const { response } = error
    res.status(response?.status || 500).send('Login Failed')
  }
})
