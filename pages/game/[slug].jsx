import { Fragment } from 'react'
import Head from 'next/head'
import { gql } from '@apollo/client'
import { Container, Col, Row } from 'react-bootstrap'
import { DateTime } from 'luxon'
import Image from 'next/image'

import { AlbumBoxList } from '@/components/AlbumBoxes'
import { initializeApollo } from '@/components/ApolloClient'
import { getImageUrl } from '@/components/utils'

const query = gql`
    query game ($slug: String) {
      game(slug: $slug){
        slug
        name
        releaseDate
        placeholder
        headerColor
        publishers {
          id
          name
        }
        platforms{
          id
          name
        }
        series {
          slug
          name
        }
        albums {
          id
          title
          releaseDate
          createdAt
          placeholder
        }
      }
    }`

export async function /* getStaticProps */ getServerSideProps ({ params }) {
  const { slug } = params
  const client = initializeApollo()
  const { data } = await client.query({ query, variables: { slug } })
  const { game } = data

  if (game === null) return { redirect: { destination: '/404', permanent: false } }

  return { props: { game, imageUrl: fullImage(slug, 50) }/*, revalidate: 60 */ }
}

const fullImage = (id, quality = 75) => `/_next/image?w=3840&q=${quality}&url=${getImageUrl(id, 'game')}`

export default function GameDetail (props) {
  const { game, imageUrl } = props
  const { slug, name, releaseDate, publishers, platforms, series, albums, placeholder, headerColor } = game
  const albumList = [...albums]

  return (
    <Container>
      <Head>
        <title>{name}</title>
        <meta key='url' property='og:url' content={`/game/${slug}`} />
        <meta key='color' name="theme-color" content={headerColor}></meta>
        <meta key='title' property='og:title' content={name} />
        <meta key='desc' property='og:description' content={
          `${series.map(({ name }) => name).join(' - ')}${series.length > 0 ? ' / ' : ''}${publishers.map(({ name }) => name).join(' - ')}`
        } />
        <meta key='image' property='og:image' content={imageUrl} />
      </Head>

      <Row className='mt-3'>
        <Col xs={12} md={4} className='blackblock w-md-auto'>
          <div className='p-1 position-relative w-100 h-100'>
            <Image
              layout='fill' placeholder='blur'
              alt={name} src={getImageUrl(slug, 'game')}
              blurDataURL={placeholder} />
          </div>
        </Col>
        <Col md={8} className='blackblock my-0 d-flex justify-content-center flex-column'>
          <Row>
            <Col md={12}>
              <h1 className='text-center ost-title'>{name}</h1>
            </Col>
          </Row>
          <Row className='my-1'>
            <Col className='d-flex justify-content-center'>
                <span className='fw-bold mr-2'>Release Date:</span>
              <span>{DateTime.fromISO(releaseDate).setLocale('en-us').toLocaleString({ day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </Col>
          </Row>
          <Row className='my-1'>
            <Col className='d-flex justify-content-center'>
                <span className='fw-bold mr-2'>Publishers:</span>
              <span>
                {publishers.map(({ id, name }, i) => (
                  <Fragment key={id}>
                    <a className='btn btn-link p-0 link' href={`/publisher/${id}`}>{name}</a>
                    {i !== publishers.length - 1 && ', '}
                  </Fragment>
                ))}
              </span>
            </Col>
          </Row>
          <Row className='my-1'>
            <Col className='d-flex justify-content-center'>
                <span className='fw-bold mr-2'>Platforms:</span>
              <span>
                {platforms.map(({ id, name }, i) => (
                  <Fragment key={id}>
                    <a className='btn btn-link p-0 link' href={`/platform/${id}`}>{name}</a>
                    {i !== platforms.length - 1 && ', '}
                  </Fragment>
                ))}
              </span>
            </Col>
          </Row>
          <Row className='my-1'>
            <Col className='d-flex justify-content-center'>
                <span className='fw-bold mr-2'>Series:</span>
              <span>
                {series.map(({ slug, name }, i) => (
                  <Fragment key={slug}>
                    <a className='btn btn-link p-0 link' key={slug} href={`/series/${slug}`}>{name}</a>
                    {i !== series.length - 1 && ', '}
                  </Fragment>
                ))}
              </span>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr className='style2 style-white' />
      <Row className='justify-content-center'>
        <AlbumBoxList colProps={{ md: 3, xs: 6 }} items={albumList.sort((a, b) => a.title > b.title)} />
      </Row>

    </Container>
  )
}
