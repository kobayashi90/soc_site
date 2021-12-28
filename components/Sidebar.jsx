import { Col, Row } from 'react-bootstrap'
import Loader from './Loader'
import AlbumBox from './AlbumBoxes'
import classNames from 'classnames'
import Image from 'next/image'
import useUser from './useUser'
import gql from 'graphql-tag'

import styles from '../styles/Sidebar.module.scss'
import { useEffect, useRef } from 'react'
import { skipAds } from './utils'
import { useQuery } from '@apollo/client'

export default function Sidebar ({ radio = false, index = false }) {
  return (
    <Col md={3} className={classNames(styles.root, 'p-3 ml-md-auto d-flex flex-column col-md-3')}>
      {index && (
        <>
          <Row className='side-menu'>
            <h1 className='mx-auto text-center my-2'><a href='#last-releases'>LAST RELEASES</a></h1>
          </Row>
          <Row className='side-menu'>
            <h1 className='mx-auto text-center my-2'><a href='#most-popular'>Most Popular</a></h1>
          </Row>
          <Row className='side-menu mb-3'>
            <h1 className='mx-auto text-center my-2'><a href='#last-added'>Last Added</a></h1>
          </Row>
        </>
      )}
      <Row className='px-3'>
        <Col md={12} className={styles.socials}>
          <Row>
            <Col className='d-flex pe-1'>
              <div className='ms-auto' >
                <Image className="rounded" src='/img/assets/yt.png' alt='youtube' height={50} width={50}></Image>
              </div>
            </Col>
            <Col className='d-flex ps-1'>
              <div className='me-auto' >
                <Image className="rounded" src='/img/assets/twitter.png' alt='twitter' height={50} width={50}></Image>
              </div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col md={12}>
              {/* <h5 className='text-center'>JOIN US ON DISCORD</h5> */}
              <a className='d-flex justify-content-center rounded' href='https://discord.gg/sittingonclouds'><img alt='' style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} src='/img/assets/discord.png' /></a>
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md={12} className='d-flex justify-content-center'>
              <a target='_blank' rel='noopener noreferrer' href='https://www.paypal.com/donate/?hosted_button_id=Z9M2YNXKCV9XQ'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='paypal' src='/img/assets/paypal-donate-button.png' /></a>
              {/* <a target='_blank' rel='noopener noreferrer' href='https://ko-fi.com/U7U11Q6QU'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='ko-fi' src='/img/assets/ko-fi-donate-button.png' /></a> */}
            </Col>
          </Row>
        </Col>
      </Row>

      <AlbumCount />
      <Highlight/>

      {radio && (
        <div className={classNames(styles.socials, 'mt-3 p-2 mb-4')}>
          <iframe title='radio' frameBorder='0' style={{ height: '335px', width: '100%' }} src='https://squid-radio.net/widget' />
        </div>
      )}

      <Ad />
    </Col>
  )
}

function AlbumCount () {
  const query = gql`query {
    albumCount
    classes{
      name
      count
    }
  }`
  const { data, loading } = useQuery(query)

  return (
    <div className={classNames(styles.socials, 'mt-3')}>
      {loading && <Loader className='mx-auto' size={100} />}
      {data && (
        <>
          <h5 className='text-center' style={{ fontWeight: 700 }}>Soundtrack Count: {data.albumCount}</h5>
          {data.classes.map(({ name, id, count }, i) => <h6 key={i} className='mt-2 text-center'>{name} Soundtracks: {count}</h6>)}
        </>
      )}
    </div>
  )
}

function Highlight () {
  const query = gql`query {
    highlight{
      id
      title
    }
  }`
  const { data = { highlight: {} }, loading } = useQuery(query)
  const { id, title } = data.highlight

  return (
    <div className={classNames(styles.socials, 'mt-3 p-1 mb-4')}>
      {loading && <Loader className='mx-auto' size={100} />}
      {id && (
        <>
          <h4 className='text-center' style={{ fontWeight: 700 }}>HIGHLIGHT SOUNDTRACK</h4>
          <AlbumBox id={id} title={title} xs={12} />
        </>
      )}
    </div>
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
