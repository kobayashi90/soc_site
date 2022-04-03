import { gql } from '@apollo/client'
import { Container, Col, Row } from 'react-bootstrap'

import { AlbumBoxList } from '@/components/AlbumBoxes'
import { initializeApollo } from '@/lib/ApolloClient'
import { getRandomInt } from '@/components/utils'

const limit = 12
const titles = [
  'Cloud\'s secret mixtape',
  'Best romantic dinner BGM',
  '12 clicks till midnight',
  'It\'s noisy outside, take one of these',
  'We let our technicians pick these',
  'Silksong is hidden behind one of these'
]
// const euphoriaIndex = titles.findIndex(t => t === 'Best romantic dinner BGM')

export async function getServerSideProps ({ params, req }) {
  const client = initializeApollo()
  const { data } = await client.query({
    query: gql`
      query ($limit: Int!) {
        getRandomAlbum(limit: $limit) {
          id
          title
          placeholder
        }
      }
    `,
    variables: { limit }
  })

  const titleIndex = getRandomInt(0, titles.length - 1)
  return { props: { rows: data.getRandomAlbum, title: titles[titleIndex] } }
}

export default function Holy12 (props) {
  const { rows, title } = props

  return (
    <>
      <Container>
        <Row>
          <Col className='py-3'>
            <div>
              <h3 className='text-center homeTitle' style={{ fontSize: '42px' }}>{title}</h3>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center px-1 px-md-5'>
          <AlbumBoxList colProps={{ xs: 6, md: 3 }} items={rows} />
        </Row>
      </Container>
    </>
  )
}
