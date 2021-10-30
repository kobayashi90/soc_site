import client from '../../../components/ApolloClient'
import gql from 'graphql-tag'

const query = gql`
  query {
    Config(name: "highlight"){
      value
    }
  }
`

const albumQuery = gql`
  query Album ($id: ID!) {
    Album(id: $id){
      id
      title
    }
  }
`

export default async function highlight (req, res) {
  try {
    const { data } = await client.query({ query })
    const { data: albumData } = await client.query({ query: albumQuery, variables: { id: data.Config.value } })

    res.status(200).json(albumData.Album)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
}
