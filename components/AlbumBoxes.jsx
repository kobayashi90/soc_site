import { Col } from 'react-bootstrap'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { getImageUrl } from './utils'

import styles from '../styles/AlbumBoxes.module.scss'

export default function AlbumBox (props) {
  const { id, title, type = 'album', coming = false, height = 300, width = 300, placeholder, style } = props

  return (
    <div className={classNames(styles.albumBox, { [styles.coming]: coming })} style={style} >
      <Link href={`/${type}/${id}`}>
        <a>
          <div className={styles.img}>
            <Image alt={title}src={getImageUrl(id, type)} layout='responsive' width={width} height={height} placeholder='blur' blurDataURL={placeholder} />
          </div>
          <div className='text-wrap text-center p-2'>
            {coming ? 'Coming Soon' : title}
          </div>
        </a>
      </Link>
    </div>
  )
}

export function AlbumBoxList ({ xs, md, items, type, width, height }) {
  return items.map(props => (
    <Col xs={xs} md={md} key={props.id} className='px-1 mb-2'>
      <AlbumBox {...props} type={type} width={width} height={height}/>
    </Col>
  ))
}
