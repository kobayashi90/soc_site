import client from '../../../lib/ApolloClient'
import gql from 'graphql-tag'
import withSession, { getUser } from '../../../lib/session'

const query = gql`
  query Album ($albumId: ID!) {
    DirectLinks(albumId: $albumId) {
      id
      url
    }
  }
`

export default withSession(async (req, res) => {
  try {
    const user = await getUser(req)
    if (!user) return res.status(200).json([])

    const { data } = await client.query({ query, variables: { albumId: req.query.id } })
    res.status(200).json(data.DirectLinks)
  } catch (err) {
    console.log(err)
    res.status(500).json({})
  }
})
