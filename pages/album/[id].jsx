import { gql, useQuery } from '@apollo/client'
import { Col, Row, Button, OverlayTrigger, Tooltip, Container } from 'react-bootstrap'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Head from 'next/head'

import styles from '../../styles/Album.module.scss'

import useUser from '@/components/useUser'
import { AlbumBoxList } from '@/components/AlbumBoxes'
import { getImageUrl } from '@/components/utils'
import Loader from '@/components/Loader'
import { initializeApollo } from '@/lib/ApolloClient'

const query = gql`
query Album ($id: ID!) {
  album(id: $id){
    id
    title
    subTitle
    releaseDate
    vgmdb
    description
    placeholder
    platforms {
      id
      name
    }
    animations {
      id
      title
    }
    games {
      slug
      name
    }
    artists {
      slug
      name
    }
    classes {
      name
    }
    categories {
      name
    }
    stores {
      url
      provider
    }
    discs {
      number
      body
    }
    related {
      id
      title
      placeholder
    }
  }
}
`

const queryDownload = gql`
query downloads ($id: ID!) {
  downloads(id: $id){
    title
    small
    links{
      id
      url
      provider
      custom
      directUrl
    }
  }
}
`

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

  if (data.album === null) return { redirect: { destination: '/404', permanent: false } }
  return { props: { id, album: data.album, imageUrl: fullImage(data.album.id, 50) }/*, revalidate: 60 */ }
}

const fullImage = (id, quality = 75) => `/_next/image?w=3840&q=${quality}&url=${getImageUrl(id)}`

export default function Page ({ id, album, imageUrl }) {
  const { user } = useUser()
  const { data, loading, refetch } = useQuery(queryDownload, { variables: { id } })

  useEffect(() => refetch({ variables: { id } }), [user, id, refetch])

  return (
    <Row>
      <Head>
        <title>{album.title}</title>
        <meta key='url' property='og:url' content={`/album/${album.id}`} />
        <meta key='title' property='og:title' content={album.title} />
        <meta key='desc' property='og:description' content={album.subTitle || album.artists.map(a => a.name).join(' - ')} />
        <meta key='image' property='og:image' content={imageUrl} />
      </Head>
      <Col className={classNames(styles.content, 'p-0 px-md-5 pt-3')} style={{ backgroundImage: `url("${fullImage(album.id, 100)}"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))` }}>
        <Container className='px-0 px-md-5'>
          <Row>
            <Col lg={5}><Image layout='responsive' width={300} height={300} alt={album.title} src={getImageUrl(album.id)} placeholder='blur' blurDataURL={album.placeholder} /></Col>
            <Col lg={7} className='blackblock'>
              <h1 className={classNames('text-center', styles.title)}>{album.title}</h1>
              <h6 className='text-center'>{album.subTitle}</h6>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th className='width-row'>Release Date</th>
                    <td>{new Date(album.releaseDate).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                  </tr>

                  {album.artists.length > 0 && (
                    <tr>
                      <th>Artists</th>
                      <td>
                        {album.artists.map(({ id, name }) => name).join(', ')}
                      </td>
                    </tr>
                  )}

                  <tr>
                    <th>Classification</th>
                    <td>
                      {[
                        album.classes.map(({ name }) => `${name} Soundtrack`).join(' & '),
                        album.categories.map(({ name }) => name).join(', ')
                      ].filter(f => f !== '').join(' - ')}
                    </td>
                  </tr>
                  {album.label && (
                    <tr>
                      <th>Published by</th>
                      <td><a className='btn btn-link p-0' href={`/publisher/${album.label}`}>{album.label}</a></td>
                    </tr>
                  )}
                  {album.platforms.length > 0 && (
                    <tr>
                      <th>Platforms</th>
                      <td>
                        {album.platforms.map(({ id, name }, i) => (
                          <Fragment key={id}>
                            <a className='btn btn-link p-0' href={`/platform/${id}`}>{name}</a>
                            {i !== album.platforms.length - 1 && ', '}
                          </Fragment>
                        ))}
                      </td>
                    </tr>
                  )}

                  {album.games.length > 0 && (
                    <tr>
                      <th>Games</th>
                      <td>
                        {album.games.map(({ slug, name }, i) => (
                          <Fragment key={slug}>
                            <a className='btn btn-link p-0' href={`/game/${slug}`}>{name}</a>
                            {i !== album.games.length - 1 && ', '}
                          </Fragment>
                        ))}
                      </td>
                    </tr>
                  )}

                  {album.animations.length > 0 && (
                    <tr>
                      <th>Animations</th>
                      <td>
                        {album.animations.map(({ id, title }, i) => (
                          <Fragment key={id}>
                            <a className='btn btn-link p-0' href={`/anim/${id}`}>{title}</a>
                            {i !== album.animations.length - 1 && ', '}
                          </Fragment>
                        ))}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <h6 className='text-center'>{album.description}</h6>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <TrackList discs={album.discs} />
            <Col lg={6} className='blackblock px-10px'>
              {album.vgmdb && (
                <Row>
                  <Col className='mb-2 ml-2'>
                    <span>Check album at:</span>
                    <a className='ms-2' target='_blank' rel='noopener noreferrer' href={album.vgmdb}>
                      <Image width={100} height={30} alt={'VGMdb'} src='/img/assets/vgmdblogo.png' />
                    </a>
                  </Col>
                </Row>
              )}

              {album.stores.length > 0 && (
                <Row className='mt-2 px-3'>
                  <Col className={styles.stores} style={{ paddingLeft: '15px', paddingTop: '10px', paddingRight: '15px', paddingBottom: '10px' }}>
                    <h1 className='text-center homeTitle' style={{ fontSize: '30px' }}>Buy The Original Soundtrack to support the artists</h1>
                    <hr className='style-white w-100 mt-0' />
                    <Row>
                      {album.stores.map(({ url, provider }, i) => (
                        <Col md={6} key={i} className='d-flex justify-content-center'>
                          <a target='_blank' rel='noopener noreferrer' href={url}>
                            <Image className="rounded" width={190} height={65} alt={provider} src={`/img/provider/${provider}.jpg`} />
                          </a>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>)}
              <hr className='style-white w-100' />

              {loading && (
                <Row>
                  <Col>
                    <Loader className='mx-auto'/>
                  </Col>
                </Row>
              )}
              {data?.downloads.map(({ links, title, provider }, di) => (
                <Row key={di}>
                  <Col>
                    <Row>
                      <Col md={12}>
                        <h2 className='text-center download-txt mb-0'>{title}</h2>
                      </Col>
                    </Row>
                    {links.map(({ id, url, custom, provider, directUrl }) => (
                      <Fragment key={id}>
                        <Row className='mt-2'>
                          <Col md={12}><h5 className='text-center'>{provider}</h5></Col>
                        </Row>
                        <Row className='mx-auto mb-3'>
                          <Col className='py-2'>
                            <Button target='_blank' variant="secondary" className={styles.download} href={url}>Download</Button>
                          </Col>
                          <Col className='py-2'>
                            <DirectButton target='_blank' directUrl={directUrl}></DirectButton>
                          </Col>
                        </Row>
                      </Fragment>
                    ))}
                    <hr className='style-white w-100' />
                  </Col>
                </Row>)) }
            </Col>
          </Row>

          {album.related.length > 0 && (
            <Row>
              <Col>
                <div className='blackblock m-2'><h1 className='text-center ost-title'>RELATED SOUNDTRACKS</h1></div>
              </Col>
              <Row className='justify-content-center'>
                <AlbumBoxList md={3} xs={6} items={album.related} />
              </Row>
            </Row>
          )}
        </Container>
      </Col>
    </Row>
  )
}

function DirectButton ({ directUrl }) {
  const disabled = directUrl === '/unauthorized'
  const renderTooltip = (props) => (
    disabled
      ? <Tooltip {...props} id={styles.tooltip}>Become a donator to access direct links!</Tooltip>
      : <div />
  )

  return (
    <OverlayTrigger placement='top' overlay={renderTooltip}>
      <Button variant="secondary" className={classNames(styles.download, styles.direct)} href={directUrl} disabled={disabled}>Direct</Button>
    </OverlayTrigger>
  )
}

function TrackList ({ discs }) {
  const [current, setCurrent] = useState(0)

  return (
    <Col lg={6}>
      <div className='blackblock d-inline-block w-100'>
        <Row>
          <Col>
            <h1 className={classNames('text-center', styles.title)}>TRACKLIST</h1>
          </Col>
        </Row>
        {discs.length > 1 && (
          <Row style={{ transform: 'translateY(2px)' }}>
            {discs.map(({ number }, i) => (
              <Col key={number} className={classNames('text-center', { 'ps-0': i > 0, 'pe-0': i < discs.length - 1 })}>
                <div
                  onClick={() => setCurrent(number)}
                  className='py-2'
                  style={{
                    cursor: current === number ? '' : 'pointer',
                    borderStyle: 'solid',
                    borderWidth: '2px 2px 2px 2px',
                    borderColor: '#efefef',
                    borderRightStyle: discs.length - 1 === i ? 'solid' : 'hidden',
                    borderBottomWidth: current === number ? '0px' : '2px'
                  }}
                >
                  Disc {number + 1}
                </div>
              </Col>
            ))}
          </Row>)}
        <Row>
          <Col>
            <div style={{
              padding: '5px 5px 5px 5px',
              borderStyle: 'solid',
              borderWidth: '2px 2px 2px 2px',
              borderColor: '#efefef',
              borderTopWidth: discs.length > 1 ? '0px' : '2px'
            }}
            >
              <table cellSpacing='0' cellPadding='1' border='0'>
                <tbody>
                  {discs.length > 0 && discs[current].body.split('\n').map((track, i) => {
                    return (
                      <tr key={i}>
                        <td className='smallfont' style={{ padding: '8px' }}>
                          <span className='label'>{i + 1}</span>
                        </td>
                        <td className='smallfont' width='100%' style={{ padding: '8px' }}>{track}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
