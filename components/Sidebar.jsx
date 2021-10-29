// import { useContext } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Col, Row } from 'react-bootstrap'
import Loader from './Loader'
import AlbumBox from './AlbumBoxes'
import classNames from 'classnames'
import Image from 'next/image'
import useUser from './useUser'

import styles from '../styles/Sidebar.module.scss'
import { useEffect, useRef } from 'react'
import { skipAds } from './utils'

export default function Sidebar ({ radio = false, index = false }) {
  const fetchCount = gql`query {
          AlbumCount
          Classes{
            name
            count
          }
        }`

  const fetchConfig = gql`query{
          Config(name:"highlight"){
            value
          }
        }`

  const { data: countData, loading: countLoading, error: countError } = useQuery(fetchCount)
  const { data: configData, error: configError } = useQuery(fetchConfig)

  if (countError) console.log(countError)
  if (configError) console.log(configError)

  return (
    <Col md={3} className={classNames(styles.root, 'p-3 ml-md-auto d-flex flex-column')}>
      {index && (
        <>
          <Row className='side-menu'>
            <h1 className='mx-auto text-center my-2'><a href='#last-releases'>LAST RELEASES</a></h1>
          </Row>
          <Row className='side-menu'>
            <h1 className='mx-auto text-center my-2'><a href='#most-popular'>Most Popular</a></h1>
          </Row>
          <Row className='side-menu'>
            <h1 className='mx-auto text-center my-2'><a href='#last-added'>Last Added</a></h1>
          </Row>
        </>
      )}
      <Row className='mt-3 p-3'>
        <Col md={12} className={styles.socials}>
          <Row>
            <Col className='d-flex pe-1'>
              <div className='ms-auto' >
                <Image src='/img/assets/yt.png' alt='youtube' height={50} width={50}></Image>
              </div>
            </Col>
            <Col className='d-flex ps-1'>
              <div className='me-auto' >
                <Image src='/img/assets/twitter.png' alt='twitter' height={50} width={50}></Image>
              </div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col md={12}>
              <h5 className='text-center'>JOIN US ON DISCORD</h5>
              <a className='d-flex justify-content-center' href='https://discord.gg/sittingonclouds'><img alt='' style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} src='/img/assets/discord.png' /></a>
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md={12} className='d-flex justify-content-center'>
              <a target='_blank' rel='noopener noreferrer' href='https://www.paypal.com/donate?hosted_button_id=DRRACDJKG755Y'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='paypal' src='/img/assets/paypal-donate-button.png' /></a>
              {/* <a target='_blank' rel='noopener noreferrer' href='https://ko-fi.com/U7U11Q6QU'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='ko-fi' src='/img/assets/ko-fi-donate-button.png' /></a> */}
            </Col>
          </Row>
        </Col>
      </Row>

      {!countError && (
        <div className={classNames(styles.socials, 'mt-3')}>
          {countLoading && <Loader />}
          {!countLoading && countData && (
            <>
              <h5 className='text-center home-side-box-txt'>Soundtrack Count: {countData.AlbumCount}</h5>
              {countData.Classes.map(({ name, id, count }, i) => <h6 key={i} className='mt-2 text-center'>{name} Soundtracks: {count}</h6>)}
            </>
          )}
        </div>
      )}

      {configData && <Highlight id={configData.Config.value} />}

      {radio && (
        <div className={classNames(styles.socials, 'mt-3 p-2 mb-4')}>
          <iframe title='radio' frameBorder='0' style={{ height: '335px', width: '100%' }} src='https://squid-radio.net/widget' />
        </div>
      )}

      <Ad />
    </Col>
  )
}

function Ad () {
  const { user } = useUser()
  const iframeRef = useRef(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let t = ''
    t += window.location
    t = t.replace(/#.*$/g, '').replace(/^.*:\/*/i, '').replace(/\./g, '[dot]').replace(/\//g, '[obs]').replace(/-/g, '[dash]')
    t = encodeURIComponent(encodeURIComponent(t))
    iframe.src = iframe.src.replace('iframe_banner', t)
  }, [iframeRef])

  return (
    !skipAds(user) && (
      <Row className='flex-grow-1'>
        <Col>
          <iframe ref={iframeRef} title='play-asia' id='id01_909824' src='https://www.play-asia.com/38/190%2C000000%2Cnone%2C0%2C0%2C0%2C0%2CFFFFFF%2C000000%2Cleft%2C0%2C0-762s-70joq4-062-783c-29466-901vq93-33iframe_banner-44140px' style={{ height: '100%', width: '100%', borderStyle: 'none', borderWidth: '0px', borderColor: '#000000', padding: 0, margin: 0, scrolling: 'no', frameborder: 0 }} />
        </Col>
      </Row>
    )
  )
}

function Highlight ({ id }) {
  const fetchHighlight = gql`
    query Album($id: ID!){
      Album(id: $id){
        id
        title
      }
    }`
  const { data, loading, error } = useQuery(fetchHighlight, { variables: { id } })

  if (error) {
    console.log(error)
    return null
  }

  return (
    <div className={classNames(styles.socials, 'mt-3 p-1 mb-4')}>
      {loading && <Loader />}
      {!loading && data && (
        <>
          <h4 className='text-center home-side-box-txt'>HIGHLIGHT SOUNDTRACK</h4>
          <AlbumBox id={data.Album.id} title={data.Album.title} xs={12} />
        </>
      )}
    </div>
  )
}
