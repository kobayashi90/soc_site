import { gql } from '@apollo/client'
import { Col, Row, Button /* OverlayTrigger, Tooltip */ } from 'react-bootstrap'
import { initializeApollo } from '../../components/ApolloClient'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Head from 'next/head'
import url from 'url'

import styles from '../../styles/Album.module.scss'
import { AlbumBoxList } from '../../components/AlbumBoxes'
import { getImageUrl } from '../../components/utils'

export async function getServerSideProps (context) {
  const client = initializeApollo()
  const { id } = context.params

  const { data } = await client.query({
    query: gql`
      query Album ($id: ID!) {
        Album(id: $id){
          id
          title
          subTitle
          releaseDate
          vgmdb
          description
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
          downloads{
            title
            small
            links{
              url
              directUrl
              provider
              custom
            }
          }
          discs {
            number
            body
          }
          related {
            id
            title
          }
        }
      }
    `,
    variables: { id }
  })

  return { props: { ...data, imageUrl: fullImage(data.Album.id, 75, context.req) } }
}

const fullImage = (id, quality = 75, req) => {
  const base = `/_next/image?url=${getImageUrl(id)}&w=3840&q=${quality}`
  return req ? url.format({ protocol: req.protocol || 'http', host: req.headers.host, pathname: base }) : base
}

export default function Page ({ Album, imageUrl }) {
  return (
    <Row>
      <Head>
        <title>{Album.title}</title>
        <meta key='url' property='og:url' content={`/album/${Album.id}`} />
        <meta key='title' property='og:title' content={Album.title} />
        <meta key='desc' property='og:description' content={Album.subTitle || Album.artists.map(a => a.name).join(' - ')} />
        <meta key='image' property='og:image' content={imageUrl} />
      </Head>
      <Col className={classNames(styles.content, 'px-5 pt-3')} style={{ backgroundImage: `url("${fullImage(Album.id, 100)}"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))` }}>
        <Row>
          <Col lg={5}><Image layout='responsive' width={300} height={300} alt={Album.title} src={getImageUrl(Album.id)} /></Col>
          <Col lg={7} className='blackblock'>
            <h1 className={classNames('text-center', styles.title)}>{Album.title}</h1>
            <h6 className='text-center'>{Album.subTitle}</h6>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className='width-row'>Release Date</th>
                  <td>{new Date(Album.releaseDate).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                </tr>

                {Album.artists.length > 0 && (
                  <tr>
                    <th>Artists</th>
                    <td>
                      {Album.artists.map(({ id, name }) => name).join(', ')}
                    </td>
                  </tr>
                )}

                <tr>
                  <th>Classification</th>
                  <td>
                    {[
                      Album.classes.map(({ name }) => `${name} Soundtrack`).join(' & '),
                      Album.categories.map(({ name }) => name).join(', ')
                    ].filter(f => f !== '').join(' - ')}
                  </td>
                </tr>
                {Album.label && (
                  <tr>
                    <th>Published by</th>
                    <td><a className='btn btn-link p-0' href={`/publisher/${Album.label}`}>{Album.label}</a></td>
                  </tr>
                )}
                {Album.platforms.length > 0 && (
                  <tr>
                    <th>Platforms</th>
                    <td>
                      {Album.platforms.map(({ id, name }, i) => (
                        <Fragment key={id}>
                          <a className='btn btn-link p-0' href={`/platform/${id}`}>{name}</a>
                          {i !== Album.platforms.length - 1 && ', '}
                        </Fragment>
                      ))}
                    </td>
                  </tr>
                )}

                {Album.games.length > 0 && (
                  <tr>
                    <th>Games</th>
                    <td>
                      {Album.games.map(({ slug, name }, i) => (
                        <Fragment key={slug}>
                          <a className='btn btn-link p-0' href={`/game/${slug}`}>{name}</a>
                          {i !== Album.games.length - 1 && ', '}
                        </Fragment>
                      ))}
                    </td>
                  </tr>
                )}

                {Album.animations.length > 0 && (
                  <tr>
                    <th>Animations</th>
                    <td>
                      {Album.animations.map(({ id, title }, i) => (
                        <Fragment key={id}>
                          <a className='btn btn-link p-0' href={`/anim/${id}`}>{title}</a>
                          {i !== Album.animations.length - 1 && ', '}
                        </Fragment>
                      ))}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <h6 className='text-center'>{Album.description}</h6>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <TrackList discs={Album.discs} />
          <Col lg={6} className='blackblock px-10px'>
            {Album.vgmdb && (
              <Row>
                <Col className='mb-2 ml-2'>
                  <span>Check album at:</span>
                  <a className='ms-2' target='_blank' rel='noopener noreferrer' href={Album.vgmdb}>
                    <Image width={100} height={30} alt={'VGMdb'} src='/img/assets/vgmdblogo.png' />
                  </a>
                </Col>
              </Row>
            )}

            {Album.stores.length > 0 && (
              <Row className='mt-2 px-3'>
                <Col className={styles.stores} style={{ paddingLeft: '15px', paddingTop: '10px', paddingRight: '15px', paddingBottom: '10px' }}>
                  <h1 className='text-center homeTitle' style={{ fontSize: '40px' }}>Buy The Original Soundtrack to support the artists</h1>
                  <hr className='style-white w-100 mt-0' />
                  <Row>
                    {Album.stores.map(({ url, provider }, i) => (
                      <Col md={6} key={i} className='d-flex justify-content-center'>
                        <a target='_blank' rel='noopener noreferrer' href={url}>
                          <Image width={190} height={65} alt={provider} src={`/img/provider/${provider}.jpg`} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>)}
            <hr className='style-white w-100' />
            {Album.downloads.length > 0 && (Album.downloads.map(({ links, title, provider }, di) => (
              <Row key={di}>
                <Col>
                  <Row>
                    <Col md={12}>
                      <h2 className='text-center download-txt mb-0'>{title}</h2>
                    </Col>
                  </Row>
                  {links.map(({ url, custom, directUrl, provider }, i) => (
                    <Fragment key={i}>
                      <Row className='mt-2'>
                        <Col md={12}><h5 className='text-center'>{provider}</h5></Col>
                      </Row>
                      <Row className='mx-auto mb-3'>
                        <Col className='py-2'>
                          <Button variant="secondary" className={styles.download} href={url}>Download</Button>
                        </Col>
                        {/* <Col className='py-2'>
                            <Button variant="secondary" className={styles.download, styles.custom} href={custom}>Mirror</Button>
                        </Col> */}
                        {/* <Col className='py-2'>
                          <DirectButton directUrl={directUrl}></DirectButton>
                      </Col> */}
                      </Row>
                    </Fragment>
                  ))}
                  <hr className='style-white w-100' />
                </Col>

              </Row>)))}
          </Col>
        </Row>

        {Album.related.length > 0 && (
          <Row>
            <Col>
              <div className='blackblock w-100 m-3'><h1 className='text-center ost-title'>RELATED SOUNDTRACKS</h1></div>
            </Col>
            <Row className='links-list justify-content-center'>
              <AlbumBoxList md={3} xs={6} items={Album.related} />
            </Row>
          </Row>
        )}
      </Col>
    </Row>
  )
}

/* function DirectButton ({ directUrl }) {
  const renderTooltip = (props) => (
    <Tooltip {...props} id={styles.tooltip}>
      Become a donator to access direct links!
    </Tooltip>
  )

  return (
    <OverlayTrigger placement='top' overlay={renderTooltip}>
      <Button variant="secondary" className={classNames(styles.download, styles.direct)} href={directUrl} disabled>Direct</Button>
    </OverlayTrigger>
  )
} */

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
