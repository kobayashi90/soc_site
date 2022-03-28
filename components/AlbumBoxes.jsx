import { Col } from 'react-bootstrap'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/AlbumBoxes.module.scss'

import { PLACEHOLDER, getImageUrl } from './utils'

export default function AlbumBox (props) {
  const { id, title, type = 'album', status, height = 300, width = 300, placeholder, style } = props
  const coming = status === 'coming'
  const blurDataURL = placeholder === null || !placeholder ? PLACEHOLDER : placeholder

  const BoxContent = () => (
    <>
      <div className={styles.img}>
        <Image alt={title}src={getImageUrl(id, type)} layout='responsive' width={width} height={height} placeholder='blur' blurDataURL={blurDataURL} />
      </div>
      <div className='text-wrap text-center p-2'>
        {coming ? 'Coming Soon' : title}
      </div>
    </>
  )

  return (
    <div className={classNames(styles.albumBox, { [styles.coming]: coming })} style={style} >
      {coming
        ? <BoxContent />
        : (
          <Link href={`/${type}/${id}`}>
            <a><BoxContent /></a>
          </Link>
        )
      }
    </div>
  )
}

export function AlbumBoxList (props) {
  const { xs, /* s, */ md, /* lg, xl, */ xxl = 1, items, type, width, height, style } = props

  return items.map(props => (
    <Col xs={xs}md={md} xxl={xxl} key={props.id} className='px-1 mb-2'>
      <AlbumBox {...props} style={style} type={type} width={width} height={height}/>
    </Col>
  ))
}
