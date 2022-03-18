import { Col } from 'react-bootstrap'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { getImageUrl } from './utils'

import styles from '../styles/AlbumBoxes.module.scss'

export default function AlbumBox (props) {
  const { id, title, type = 'album', status, height = 300, width = 300, placeholder, style } = props
  const coming = status === 'coming'

  const BoxContent = () => (
    <>
      <div className={styles.img}>
        <Image alt={title}src={getImageUrl(id, type)} layout='responsive' width={width} height={height} placeholder='blur' blurDataURL={placeholder} />
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

export function AlbumBoxList ({ xs, md, items, type, width, height, style }) {
  return items.map(props => (
    <Col xs={xs} md={md} key={props.id} className='px-1 mb-2'>
      <AlbumBox {...props} style={style} type={type} width={width} height={height}/>
    </Col>
  ))
}
