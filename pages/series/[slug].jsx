import { Container, Col, Row } from 'react-bootstrap'
import { gql } from '@apollo/client'
import moment from 'moment'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import { initializeApollo } from '@/lib/ApolloClient'
import { getImageUrl } from '@/components/utils'

import AlbumBoxStyles from '../../styles/AlbumBoxes.module.scss'

const query = gql`
  query seriesOne ($slug: String) {
    seriesOne(slug: $slug){
      name
      placeholder
      games {
        slug
        name
        releaseDate
        albums {
          id
          title
          placeholder
          games {
            slug
            name
            releaseDate
          }
        }
      }
    }
  }
`

export const getServerSideProps = async ({ params, req }) => {
  const { slug } = params
  const client = initializeApollo()
  const { data } = await client.query({ query, variables: { slug } })
  const { seriesOne } = data

  if (seriesOne === null) return { redirect: { destination: '/404', permanent: false } }

  return { props: { seriesOne, slug }/*, revalidate: 60 */ }
}

function AlbumBox (props) {
  const { id, title, coming = false, placeholder } = props
  return (
    <Col xs={6} className='py-0 px-2 mb-3'>
      <div className={classNames(AlbumBoxStyles.albumBox, 'd-flex m-0 w-100 h-100')} style={{
        whiteSpace: 'nowrap',
        textAlign: 'center',
        flexFlow: 'column',
        backgroundColor: '#222222',
        padding: '2px'
      }}>
        <Link href={coming ? '' : `/album/${id}`}>
          <a>
            <Row>
              <Col xs={3}>
                <div className='position-relative w-100 h-100'>
                  <Image
                    layout='responsive'
                    height={150}
                    width={150}
                    placeholder='blur' blurDataURL={placeholder}
                    alt={title} src={getImageUrl(id, 'album')} />
                </div>
              </Col>
              <Col>
                <div className='ost-list-text text-wrap my-auto px-1 py-2'>
                  {coming ? 'Coming Soon' : title}
                </div>
              </Col>
            </Row>
          </a>
        </Link>
      </div>

    </Col>
  )
}

export default function SeriesDetail ({ slug, seriesOne }) {
  const gameList = [...seriesOne.games]
  const various = []
  const games = {}

  gameList.map(game => game.albums).flat().filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i).forEach(ost => {
    if (ost.games.length > 1) various.push(ost)
    else {
      const game = ost.games[0]
      if (!games[game.slug]) {
        games[game.slug] = {
          name: game.name,
          releaseDate: game.releaseDate,
          albums: []
        }
      }

      games[game.slug].albums.push(ost)
    }
  })

  return (
    <Container>
      <Head>
        <title>{seriesOne.name}</title>
        <meta property='og:url' content={`/series/${slug}`} />
      </Head>

      <Row className='mt-3'>
        <Col xs={12} md={4} className='blackblock w-md-auto'>
          <div className='p-1 position-relative w-100 h-100'>
            <Image
              layout='fill'
              placeholder='blur' blurDataURL={seriesOne.placeholder}
              alt={seriesOne.name} src={getImageUrl(slug, 'series')} />
          </div>
        </Col>
        <Col md={8} className='blackblock my-0 d-flex justify-content-center flex-column'>
          <Row>
            <Col md={12}>
              <h1 className='text-center ost-title'>{seriesOne.name}</h1>
            </Col>
          </Row>
          <Row className='my-1'>
            <Col className='d-flex justify-content-center'>
              <span className='fw-bold me-2'>First Release:</span><span> {gameList[0].releaseDate} - <a className='btn btn-link p-0 link' href={`/game/${gameList[0].slug}`}>{gameList[0].name}</a></span>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr className='style2 style-white' />
      {various && various.length > 0 ? <OstList albums={various} name='Various Games' /> : null}
      {games && Object.entries(games)
        .sort((a, b) => moment(a[1].releaseDate).year() < moment(b[1].releaseDate).year() ? 1 : -1)
        .map(([slug, { name, albums, releaseDate }]) => <OstList key={slug} slug={slug} albums={albums} name={name} year={moment(releaseDate).year()} />)}
    </Container>
  )
}

function OstList (props) {
  const { year, name, albums, slug } = props
  return (
    <>
      <div className='blackblock justify-content-center m-2'>
        <Row>
          {year ? <Col md={2}><h3 className='text-center ost-title'>{year}</h3></Col> : null}
          <Col md={year ? 9 : 12}>
            <h3 className='ost-title'>
              {slug ? <a href={`/game/${slug}`}>{name}</a> : name}
            </h3>
          </Col>
        </Row>
      </div>

      <div className='w-100 d-flex flex-wrap justify-content-center'>
        {albums
          .sort((a, b) => a.title > b.title)
          .map(({ id, title, placeholder }) => <AlbumBox key={id} id={id} title={title} placeholder={placeholder} md={6} xs={12} />)}
      </div>
    </>
  )
}
