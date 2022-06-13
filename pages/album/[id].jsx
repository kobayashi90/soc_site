import { gql, useApolloClient, useLazyQuery, useQuery } from '@apollo/client'
import { Col, Row, Button, OverlayTrigger, Tooltip, Container } from 'react-bootstrap'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Head from 'next/head'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import styles from '../../styles/Album.module.scss'
import starStyles from '../../styles/Stars.module.scss'

import useUser from '@/components/useUser'
import { AlbumBoxList } from '@/components/AlbumBoxes'
import { getImageUrl, PLACEHOLDER } from '@/components/utils'
import Loader, { ButtonLoader } from '@/components/Loader'
import { initializeApollo/*, isGithub */ } from '@/components/ApolloClient'
import CommentCarrousel from '@/components/CommentsCarrousel'
import useTranslation, { getTranslation } from '@/components/useTranslation'

const query = gql`
query ($id: ID!) {
  album(id: $id){
    id
    title
    subTitle
    releaseDate
    vgmdb
    description
    placeholder
    headerColor
    status
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
    comments {
      text
      username
    }
    favorites
    avgRating {
      score
      users
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
  if (isGithub) return { paths: [], fallback: 'blocking' }

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
    variables: { limit: 40 }
  })

  const paths = data.searchAlbum.rows.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: 'blocking' }
} */

const mutationRating = gql`
  mutation ($ostId: ID!, $score: Int!){
    rateAlbum(ostId: $ostId, score: $score)
  }
`

function StarCounter (props) {
  const { score, users, ostId } = props
  const [scoreHover, setHover] = useState(0)
  const { user } = useUser()

  const getScore = gql`
    query ($ostId: ID!) {
      album(id: $ostId){
        selfScore
      }
    }
  `
  const [fetchUserScore, { data }] = useLazyQuery(getScore)
  useEffect(() => fetchUserScore({ variables: { ostId } }), [user, ostId])

  const selfScore = data?.album?.selfScore
  const max = 5
  const stars = []

  function Star (props) {
    const { value } = props

    const t = useTranslation()
    const client = useApolloClient()

    const isHover = scoreHover >= value
    const starClass = score >= value || isHover ? 'fas fa-star' : (score >= value - 0.5 ? 'fas fa-star-half' : 'far fa-star')
    const className = classNames(starClass, starStyles.star, { [starStyles.hover]: selfScore >= value || isHover, 'ps-1': value > 1 })

    function saveRating () {
      client.mutate({ mutation: mutationRating, variables: { ostId, score: value } })
        .then(() => toast.success(t('Rating saved!')))
        .catch(err => {
          console.log(err)
          toast.error(t('Failed to save rating'))
        })
    }

    return <span
      key={value} className={className}
      onClick={saveRating}
      onMouseOver={() => setHover(value)}
      onMouseOut={() => setHover(0)}
    />
  }

  let current = 1
  while (current <= max) {
    stars.push(<Star key={current} value={current} />)
    current++
  }

  return (
    <>

      {stars}
      <span className='ms-2'>({score} by {users} users)</span>
    </>
  )
}

export async function /* getStaticProps */ getServerSideProps (context) {
  const { params, locale } = context
  const { id } = params
  const client = initializeApollo()
  const { data } = await client.query({ query, variables: { id } })

  if (data.album === null || data.album.status !== 'show') return { redirect: { destination: '/404', permanent: false } }

  const localeStrings = await getTranslation(locale)

  return {
    props: {
      id,
      album: data.album,
      imageUrl: fullImage(data.album.id, 50),
      localeStrings
    }
  }
}

const fullImage = (id, quality = 75) => `/_next/image?w=3840&q=${quality}&url=${getImageUrl(id)}`

const favoriteTemplate = query => gql`
  mutation ($ostId: String!) {
    ${query}Favorite(ostId: $ostId)
  }
`
const addFavorite = favoriteTemplate('add')
const removeFavorite = favoriteTemplate('remove')

export default function Page (props) {
  const { id, album, imageUrl } = props

  const t = useTranslation()
  const router = useRouter()
  const { user } = useUser()
  const [loadingFavorite, setLoading] = useState(false)
  const client = useApolloClient()
  const getFavorite = gql`
  query ($ostId: ID!) {
    album(id: $ostId){
      isFavorite
    }
  }
`
  const { data: dataFavorite, refetch: refetchFavorite } = useQuery(getFavorite)
  useEffect(() => refetchFavorite({ ostId: id }), [user, id, refetchFavorite])

  function submitFavorite () {
    setLoading(true)

    client.mutate({ mutation: dataFavorite.album.isFavorite ? removeFavorite : addFavorite, variables: { ostId: id } })
      .then(() => toast.success(t(dataFavorite.album.isFavorite ? 'Favorite_Added' : 'Favorite_Removed')))
      .catch(err => {
        console.log(err)
        toast.error('Query failed')
      })
      .finally(() => {
        setLoading(false)
        refetchFavorite()
        router.replace(router.asPath)
      })
  }

  return (
    <>
      <div className={styles.content} style={{ backgroundSize: 'contain', backgroundImage: `url("${fullImage(album.id, 90)}"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))` }} />
      <Row>
        <Head>
          <title>{album.title}</title>
          <meta key='color' name="theme-color" content={album.headerColor}></meta>
          <meta key='url' property='og:url' content={`/album/${album.id}`} />
          <meta key='title' property='og:title' content={album.title} />
          <meta key='desc' property='og:description' content={album.subTitle || album.artists.map(a => a.name).join(' - ')} />
          <meta key='image' property='og:image' content={imageUrl} />
        </Head>
        <Col className={'p-0 px-md-5 pt-3'} >
          <Container className='px-0 px-md-5'>
            <Row>
              <Col lg={5}><Image layout='responsive' width={300} height={300} alt={album.title} src={getImageUrl(album.id)} placeholder='blur' blurDataURL={album.placeholder || PLACEHOLDER} /></Col>
              <Col lg={7} className='blackblock'>
                <Row>
                  <Col>
                    <h1 className={classNames('text-center', styles.title)}>{album.title}</h1>
                    <h6 className='text-center' style={{ whiteSpace: 'pre-wrap' }}>{album.subTitle}</h6>
                    <table className={styles.table}>
                      <tbody>
                        <tr>
                          <th className='width-row'>{t('Release Date')}</th>
                          <td>{new Date(album.releaseDate).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                        </tr>

                        {album.artists.length > 0 && (
                          <tr>
                            <th>{t('Artists')}</th>
                            <td>
                              {album.artists.map(({ id, name }) => name).join(', ')}
                            </td>
                          </tr>
                        )}

                        <tr>
                          <th>{t('Classification')}</th>
                          <td>
                            {[
                              album.classes.map(({ name }) => t(`${name} Soundtrack`)).join(' & '),
                              album.categories.map(({ name }) => name).join(', ')
                            ].filter(f => f !== '').join(' - ')}
                          </td>
                        </tr>
                        {album.label && (
                          <tr>
                            <th>{t('Published by')}</th>
                            <td><a className='btn btn-link p-0' href={`/publisher/${album.label}`}>{album.label}</a></td>
                          </tr>
                        )}
                        {album.platforms.length > 0 && (
                          <tr>
                            <th>{t('Platforms')}</th>
                            <td>
                              {album.platforms.map(({ id, name }, i) => (
                                <Fragment key={id}>
                                  {id === '29'
                                    ? <span className='btn p-0' style={{ color: 'white' }}>{name}</span>
                                    : <a className='btn btn-link p-0' href={`/platform/${id}`}>{name}</a>
                                  }
                                  {i !== album.platforms.length - 1 && ', '}
                                </Fragment>
                              ))}
                            </td>
                          </tr>
                        )}

                        {album.games.length > 0 && (
                          <tr>
                            <th>{t('Games')}</th>
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
                            <th>{t('Animations')}</th>
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

                        <tr>
                          <th>{t('Avg. Rating')}: </th>
                          <td><StarCounter ostId={album.id} {...album.avgRating} /></td>
                        </tr>

                      </tbody>
                    </table>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6 className='text-center'>{album.description}</h6>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <ButtonLoader
                      loading={loadingFavorite} onClick={dataFavorite ? submitFavorite : null}
                      className='w-100 rounded-3' variant="outline-light" style={{ fontSize: '18px' }} text={t(dataFavorite ? (dataFavorite.album.isFavorite ? 'Favorite_Remove' : 'Favorite_Add') : 'Favorite_Login')} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <TrackList discs={album.discs} />
              <Col lg={6} className='blackblock px-10px'>
                {album.vgmdb && (
                  <Row>
                    <Col className='mb-2 ms-2'>
                      <span>{'Check album at'}:</span>
                      <a className='ms-2' target='_blank' rel='noopener noreferrer' href={album.vgmdb}>
                        <Image width={100} height={30} alt={'VGMdb'} src='/img/assets/vgmdblogo.png' />
                      </a>
                    </Col>
                  </Row>
                )}

                {album.stores.length > 0 && (
                  <Row className='mt-2 px-3'>
                    <Col className={styles.stores} style={{ paddingLeft: '15px', paddingTop: '10px', paddingRight: '15px', paddingBottom: '10px' }}>
                      <h1 className='text-center homeTitle' style={{ fontSize: '30px' }}>{t('Buy_Original')}</h1>
                      <hr className='style-white w-100 mt-0' />
                      <Row>
                        {album.stores.map(({ url, provider }, i) =>
                          provider === 'SOON'
                            ? null
                            : (
                              <Col md={6} key={i} className='d-flex justify-content-center'>
                                <a target='_blank' rel='noopener noreferrer' href={url}>
                                  <Image className="rounded" width={190} height={65} alt={provider} src={`/img/provider/${provider}.jpg`} />
                                </a>
                              </Col>
                            )
                        )}
                      </Row>
                    </Col>
                  </Row>)}
                <hr className='style-white w-100' />

                <DownloadList id={id} user={user} t={t} />
              </Col>
            </Row>

            <CommentCarrousel ostId={id} comments={album.comments} />

            {album.related.length > 0 && (
              <Row>
                <Col>
                  <div className='blackblock m-2'><h1 className='text-center text-uppercase ost-title'>{t('Related Soundtracks')}</h1></div>
                </Col>
                <Row className='justify-content-center'>
                  <AlbumBoxList colProps={{ md: 3, xs: 6 }} items={album.related} />
                </Row>
              </Row>
            )}
          </Container>
        </Col>
      </Row>
    </>
  )
}

function DownloadList (props) {
  const { id, user, t } = props
  const { data, loading, refetch } = useQuery(queryDownload, { variables: { id } })

  useEffect(() => refetch({ id }), [user, id, refetch])

  if (loading) {
    return (
      <Row>
        <Col>
          <Loader className='mx-auto'/>
        </Col>
      </Row>
    )
  }

  const { downloads = [] } = data

  return (
    downloads.map((download, di) => {
      const { links, title } = download

      return (
        <Row key={di}>
          <Col>
            <Row>
              <Col md={12}>
                <h2 className='text-center download-txt mb-0'>{title}</h2>
              </Col>
            </Row>
            {links.map(link => {
              const { id: linkId, url, provider, directUrl } = link

              return (
                <Fragment key={linkId}>
                  <Row className='mt-2'>
                    <Col md={12}><h5 className='text-center'>{provider}</h5></Col>
                  </Row>
                  <Row className='mx-auto mb-3'>
                    <Col xs={6} className=' mx-auto py-2'>
                      <Button target="_blank" variant="secondary" className={styles.download} href={url}>{t('Download')}</Button>
                    </Col>
                    {directUrl && (
                      <Col className='py-2'>
                        <DirectButton target='_blank' directUrl={directUrl}></DirectButton>
                      </Col>
                    )}
                  </Row>
                </Fragment>
              )
            })}
            <hr className='style-white w-100' />
          </Col>
        </Row>
      )
    })
  )
}

function DirectButton (props) {
  const { directUrl } = props
  const t = useTranslation()

  const disabled = directUrl === 'false'
  const renderTooltip = (props) => (
    disabled
      ? <Tooltip {...props} id={styles.tooltip}>{t('Become_Donator')}</Tooltip>
      : <div />
  )

  const ButtonRender = disabled
    ? <Button variant="secondary" className={classNames(styles.download, styles.direct)} disabled={disabled}>{t('Direct')}</Button>
    : <Button target="_blank" variant="secondary" className={classNames(styles.download, styles.direct)} href={directUrl}>{t('Direct')}</Button>

  return (
    <OverlayTrigger placement='top' overlay={renderTooltip}>
      {ButtonRender}
    </OverlayTrigger>
  )
}

function TrackList (props) {
  const { discs } = props
  const [current, setCurrent] = useState(0)
  const t = useTranslation()

  return (
    <Col lg={6}>
      <div className='blackblock d-inline-block w-100'>
        <Row>
          <Col>
            <h1 className={classNames('text-center text-uppercase', styles.title)}>{t('Tracklist')}</h1>
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
                  {t('Disc')} {number + 1}
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
