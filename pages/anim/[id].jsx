import { gql } from '@apollo/client'
import { Col, Row, Container } from 'react-bootstrap'
import { Fragment } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Head from 'next/head'

import styles from '../../styles/Album.module.scss'

import { AlbumBoxList } from '@/components/AlbumBoxes'
import { getImageUrl } from '@/components/utils'
import { initializeApollo } from '@/lib/ApolloClient'

const query = gql`
query animation ($id: ID) {
  animation(id: $id){
    id
    title
    subTitle
    releaseDate
    placeholder
    headerColor
    studios {
      slug 
      name
    }
    albums {
      id
      title
      createdAt
      releaseDate
      placeholder
    }
  }
}`

/* export async function getStaticPaths () {
  const client = initializeApollo()
const { data } = await client.query({
    query: gql`
      query searchAlbum($limit: Int, $page: Int ){
        searchAlbum(
          limit: $limit
          page: $page
        ){
          rows { id }
        }
      }
    `,
    variables: { limit: 100 }
  })

  const paths = data.searchAlbum.rows.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: 'blocking' }
} */

export async function /* getStaticProps */ getServerSideProps ({ params, req }) {
  const { id } = params
  const client = initializeApollo()
  const { data } = await client.query({ query, variables: { id } })
  const { animation } = data

  if (animation === null) return { redirect: { destination: '/404', permanent: false } }
  return { props: { animation, imageUrl: fullImage(id, 50) }/*, revalidate: 60 */ }
}

const fullImage = (id, quality = 75) => `/_next/image?w=3840&q=${quality}&url=${getImageUrl(id, 'anim')}`

export default function Page (props) {
  const { animation, imageUrl } = props
  const { id, title, subTitle, releaseDate, studios, albums = [], placeholder, headerColor } = animation

  return (
    <Row className='h-100'>
      <Head>
        <title>{title}</title>
        <meta key='color' name="theme-color" content={headerColor}></meta>
        <meta key='url' property='og:url' content={`/anim/${id}`} />
        <meta key='title' property='og:title' content={title} />
        <meta key='desc' property='og:description' content={
          subTitle && studios.length > 0
            ? `${subTitle} / ${studios.map(a => a.name).join(' - ')}`
            : subTitle || studios.map(a => a.name).join(' - ')} />
        <meta key='image' property='og:image' content={imageUrl} />
      </Head>
      <Col className={classNames(styles.content, 'px-5 pt-3')} style={{ backgroundImage: `url("${fullImage(id, 100)}"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))` }}>
        <Container className='px-5'>
          <Row>
            <Col lg={3} className='blackblock py-3'>
              <Image layout='responsive' width={100} height={150} alt={title} src={getImageUrl(id, 'anim')} placeholder='blur' blurDataURL={placeholder} />
              <h3 className={classNames('text-center mt-3', styles.title)}>{title}</h3>
              <h6 className='text-center'>{subTitle}</h6>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th className='width-row'>Release Date</th>
                    <td>{new Date(releaseDate).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                  </tr>
                  <tr>
                    <th>Studios</th>
                    <td>
                      {studios.map(({ slug, name }, i) => (
                        <Fragment key={id}>
                          <a className='btn btn-link p-0' href={`/studio/${slug}`}>{name}</a>
                          {i !== studios.length - 1 && ', '}
                        </Fragment>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col>
              <Row>
                <AlbumBoxList xs={6} md={2} xl={3} items={albums} style={{ height: 'fit-content' }} />
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}
