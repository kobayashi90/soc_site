// import classNames from 'classnames'
import logo from '../public/img/assets/clouds.png'
import Image from 'next/image'
import styles from '../styles/Search.module.scss'
import classNames from 'classnames'

export default function Loader (props) {
  const { className = '', style = {}, size = 150 } = props
  return (
    <div className={classNames(className, styles.spin)} style={{ ...style, height: size, width: size }}>
      <Image layout='responsive' height={size} width={size} alt='loading' src={logo} />
    </div>
  )
}
