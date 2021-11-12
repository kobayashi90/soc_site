import { gql } from '@apollo/client'
import { Container, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

import client from '../../lib/ApolloClient'
import { AlbumBoxList } from '../../components/AlbumBoxes'

export async function /* getStaticProps */ getServerSideProps () {
  const { data } = await client.query({
    query: gql`
    query {
        result: searchAlbum(
            limit: 40,
            order: ["releaseDate", "createdAt"],
            classes: ["Animation"]
        ){
            rows { 
                id,
                title
            }
        }
    }`,
    fetchPolicy: 'network-only'
  })

  return { props: { ...data.result }/*, revalidate: 60 */ }
}

function Button ({ name, href }) {
  return (
    <Col md={3} className='mt-3  flex-grow-1'>
      <h4 className='text-center blackButton d-flex align-items-center justify-content-center px-3 py-2'>
        <Link href={href}><a>{name}</a></Link>
      </h4>
    </Col>
  )
}

export default function GameHome ({ rows }) {
  return (
    <Container>
      <Row>
        <Button name='List' href='/anim/list'></Button>
        <Button name='Studios' href='/studio/list'></Button>
      </Row>
      <Row>
        <Col md={12}>
          <Row className='p-3'>
            <Col md={12}>
              <h1 className='text-center homeTitle' id='last-releases'>LATEST ANIMATION RELEASES</h1>
            </Col>
          </Row>

          <Row className='links-list justify-content-center'>
            <AlbumBoxList xs={6} md={3} items={rows} />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
