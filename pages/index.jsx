import { Col, Row } from 'react-bootstrap'
import { gql } from '@apollo/client'
import Link from 'next/link'

import Sidebar from '../components/Sidebar'
import { AlbumBoxList } from '../components/AlbumBoxes'
import client from '../lib/ApolloClient'

const md = 3
const xs = 6
const limit = 12

export async function getStaticProps () {
  const { data } = await client.query({
    query: gql`
      query searchAlbum($limit: Int){
        released: searchAlbum(
          limit: $limit,
          status: ["show","coming"],
          order: ["releaseDate", "createdAt"]
        ){
          rows{
            id,
            status
            title
          }
        },

        added: searchAlbum(limit: $limit){
          rows{
            id,
            title
          }
        }
      }
    `,
    variables: { limit }
  })
  return { props: { ...data }, revalidate: 60 }
}

export default function Home ({ added, released }) {
  return (
    <Row className='h-100'>
      <Col className='p-3 mx-3'>
        <Row>
          <Col>
            <h1 className='text-center homeTitle p-3' id='last-releases'>LAST RELEASES</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <AlbumBoxList xs={xs} md={md} items={released.rows} />
        </Row>
        <Row>
          <Col md={6} className='mt-3 flex-grow-1'>
            <h4 className='text-center blackButton px-3 py-2'>
              <Link href="/game"><a>More Games Releases</a></Link>
            </h4>
          </Col>
          <Col md={6} className='mt-3  flex-grow-1'>
            <h4 className='text-center blackButton px-3 py-2'>
              <Link href="/anim"><a>More Animation Releases</a></Link>
            </h4>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h1 className='text-center homeTitle p-3' id='last-added'>LAST ADDED</h1>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <AlbumBoxList xs={xs} md={md} items={added.rows} />
        </Row>
        <Row className='mt-3'>
          <Col md={12}>
            <h1 className='text-center blackButton'>
              <Link href="/last-added"><a>More Last Added</a></Link>
            </h1>
          </Col>
        </Row>
      </Col>
      <Sidebar index radio />
    </Row>
  )
}
