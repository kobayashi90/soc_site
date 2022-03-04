import Image from 'next/image'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'

import loader from 'svg-loaders/svg-smil-loaders/oval.svg'
import styles from '../styles/Search.module.scss'
import logo from '../public/img/assets/clouds.png'

export default function Loader (props) {
  const { className = '', style = {}, size = 150 } = props
  return (
    <div className={classNames(className, styles.spin)} style={{ ...style, height: size, width: size }}>
      <Image layout='responsive' height={size} width={size} alt='loading' src={logo} />
    </div>
  )
}

export const ButtonLoader = props => {
  const { loading, text } = props
  return (
    <Button {...props}>{loading ? <Image {...loader} alt='loading' /> : text}</Button>
  )
}
