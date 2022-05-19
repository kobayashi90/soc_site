import { Col, Row } from 'react-bootstrap'
import classNames from 'classnames'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useRef } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Sidebar.module.scss'

import { skipAds } from './utils'
import Loader from './Loader'
import AlbumBox from './AlbumBoxes'
import useUser from './useUser'
import useTranslation from './useTranslation'

function GetLucky () {
  const t = useTranslation()
  const query = gql`
  query {
    getRandomAlbum {
      id
    }
  }
`
  const { data, refetch } = useQuery(query)
  const router = useRouter()

  useEffect(refetch, [router.pathname, refetch])

  return (
    <h1 className='mx-auto text-center my-2'>
      <Link href={data ? `/album/${data.getRandomAlbum[0].id}` : ''}>
        <a className='text-uppercase'>{t('Get Lucky')}</a>
      </Link>
    </h1>
  )
}

export default function Sidebar (props) {
  const { radio = false, index = false } = props
  const t = useTranslation()

  return (
    <Col md={3} className={classNames(styles.root, 'p-3 ml-md-auto d-flex flex-column col-md-3')}>
      {index && (
        <>
          <Row className='side-menu'>
            <h1 className='mx-auto text-center my-2'><a href='#last-added'>{t('Last Added_header')}</a></h1>
          </Row>
        </>
      )}
      <Row className='side-menu'>
        <GetLucky />
      </Row>
      <Row className='side-menu mb-3'>
        <h1 className='mx-auto text-center my-2'>
          <Link href='/holy12'>
            <a className='text-uppercase'>{t('Random Pull')}</a>
          </Link>
        </h1>
      </Row>
      <Row className='px-3'>
        <Col md={12} className={styles.socials}>
          <Row>
            <Col className='d-flex pe-1'>
              <div className='ms-auto' >
                <a href='https://www.youtube.com/channel/UCb1Q0GuOa8p_7fY-pYnWCmQ' target='_blank' rel='noopener noreferrer'>
                  <Image className="rounded" src='/img/assets/yt.png' alt='youtube' height={50} width={50} />
                </a>
              </div>
            </Col>
            <Col className='d-flex ps-1'>
              <div className='me-auto' >
                <a href='https://twitter.com/SittingOnCloud' target='_blank' rel='noopener noreferrer'>
                  <Image className="rounded" src='/img/assets/twitter.png' alt='twitter' height={50} width={50} />
                </a>
              </div>
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col md={12}>
              <a className='d-flex justify-content-center px-1' href='https://discord.gg/x23SFbE'><img alt='' style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%', borderRadius: '10px' }} src='/img/assets/discord.png' /></a>
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md={12} className='d-flex justify-content-center'>
              {/* <a target='_blank' rel='noopener noreferrer' href='https://www.paypal.com/donate/?hosted_button_id=BBGTBGSDAXA8N'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='paypal' src='/img/assets/paypal-donate-button.png' /></a> */}
              <a target='_blank' rel='noopener noreferrer' href='https://ko-fi.com/sittingonclouds'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='ko-fi' src='/img/assets/ko-fi-donate-button.png' /></a>
            </Col>
          </Row>
        </Col>
      </Row>

      <AlbumCount />
      <Highlight/>

      {radio && (
        <div className={classNames(styles.socials, 'mt-3 p-2 mb-4')}>
          <iframe title='radio' frameBorder='0' style={{ height: '335px', width: '100%' }} src='https://radio.sittingonclouds.net/widget' />
        </div>
      )}

      <Ad />
    </Col>
  )
}

function AlbumCount () {
  const t = useTranslation()
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
          <h5 className='text-center text-uppercase' style={{ fontWeight: 700 }}>{t('Soundtrack Count')}: {data.albumCount}</h5>
          {data.classes.map(({ name, id, count }, i) => <h6 key={i} className='mt-2 text-center'>{t(`${name} Soundtracks`)}: {count}</h6>)}
        </>
      )}
    </div>
  )
}

function Highlight () {
  const t = useTranslation()
  const query = gql`query {
    highlight{
      id
      title
      placeholder
    }
  }`
  const { data = { highlight: {} }, loading } = useQuery(query)
  const { id, title, placeholder } = data.highlight

  return (
    <div className={classNames(styles.socials, 'mt-3 p-1 mb-4')}>
      {loading && <Loader className='mx-auto' size={100} />}
      {id && (
        <>
          <h4 className='text-center text-uppercase py-1' style={{ fontWeight: 700 }}>{t('Highlight Soundtrack')}</h4>
          <AlbumBox id={id} title={title} placeholder={placeholder} xs={12} style={{ height: 'auto' }} />
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
