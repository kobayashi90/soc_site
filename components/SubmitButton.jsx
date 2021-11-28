import { Button } from 'react-bootstrap'
import classnames from 'classnames'
import loader from 'svg-loaders/svg-smil-loaders/oval.svg'
import Image from 'next/image'

export default function SubmitButton (props) {
  return props.loading
    ? <Button type={props.type} variant='primary' className={classnames(props.className, 'py-0')} disabled><Image alt='' {...loader} height={35} width={35} /></Button>
    : <Button type={props.type} variant='primary' className={classnames(props.className)} onClick={props.onClick}>{props.children}</Button>
}
