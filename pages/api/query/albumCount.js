import client from '../../../components/ApolloClient'
import gql from 'graphql-tag'

const query = gql`query {
  AlbumCount
  Classes{
    name
    count
  }
}`

export default async function albumCount (req, res) {
  try {
    const { data } = await client.query({ query })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({})
  }
}
