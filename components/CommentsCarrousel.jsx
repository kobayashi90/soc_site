import { Col, Button, Modal, Form, Row, FormControl } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import serialize from 'form-serialize'
import Link from 'next/link'

import useUser from './useUser'
import { ButtonLoader } from './Loader'
import styles from '../styles/Profile.module.scss'
import useTranslation from './useTranslation'

function SideButton (props) {
  const { side, onClick } = props

  return (
    <Col xs={'auto'}>
      <Button onClick={onClick} className='h-100 rounded-3' variant="outline-light" style={{ fontSize: '30px' }}><span className={`fas fa-angle-${side}`} /></Button>
    </Col>
  )
}

export function BasicCommentCarrousel (props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)

  const { comments = [] } = props
  const current = comments[currentIndex]

  const plusIndex = () => setCurrentIndex(currentIndex === comments.length - 1 ? 0 : currentIndex + 1)

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(plusIndex, 10 * 1000)
  }, [currentIndex])

  if (comments.length === 0) return null

  return (
    <>
      <Row>
        <Col className='blackblock m-2'>
          <Row>
            {comments.length > 1 && <SideButton side='left' onClick={() => setCurrentIndex(currentIndex === 0 ? comments.length - 1 : currentIndex - 1)} />}
            <Col className='py-3' style={{ fontSize: '18px' }}>
              {current.text}
              <br />
              <div className='mt-2'>
                {current.album && <span> - <Link href={`/album/${current.album.id}`}><a className={styles.albumSpan}>{current.album.title}</a></Link></span>}
                {!current.album && current.username && <span> - <Link href={`/profile/${current.username}`}><a className={styles.albumSpan}>{current.username}</a></Link></span>}
              </div>
            </Col>
            {comments.length > 1 && <SideButton side='right' onClick={plusIndex} />}
          </Row>
        </Col>
      </Row>
    </>
  )
}

const getComment = gql`
  query ($ostId: ID!) {
    album(id: $ostId){
      comments {
        text
        username
      }
      selfComment {
        text
        anon
      }
    }
  }
`

const mutateComment = gql`
  mutation ($text: String!, $anon: Boolean!, $ostId: ID!) {
    updateComment(text: $text, anon: $anon, ostId: $ostId)
  }
`

export default function CommentCarrousel (props) {
  const { ostId, comments: initialComments = [] } = props

  const t = useTranslation()
  const [show, setShow] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)
  const { user } = useUser()

  const [fetchComment, { data, refetch }] = useLazyQuery(getComment)
  const [updateComment, { loading: loadingComment }] = useMutation(mutateComment)

  const { comments, selfComment } = data?.album || { comments: initialComments }

  useEffect(() => fetchComment({ variables: { ostId } }), [user, fetchComment, ostId])
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(plusIndex, 10 * 1000)
  }, [currentIndex])

  function submit (ev) {
    let variables = serialize(ev.target, { hash: true })
    variables = { ...variables, anon: variables.anon === 'on', ostId }

    updateComment({ variables })
      .then(() => {
        refetch()
        setShow(false)
      })

    ev.preventDefault()
  }

  const current = comments[currentIndex]
  const plusIndex = () => setCurrentIndex(currentIndex === comments.length - 1 ? 0 : currentIndex + 1)

  return (
    <>
      <Modal show={show} centered onHide={() => setShow(false)}>
        <Modal.Body className='m-3'>
          <Form onSubmit={submit} style={{ color: 'black' }}>
            <Row>
              <Form.Group as={Col} >
                <FormControl required as='textarea' name='text' maxLength={300} defaultValue={selfComment ? selfComment.text : ''} />
              </Form.Group>
            </Row>
            <Row className='mt-2'>
              <Form.Group as={Col}>
                <Form.Check type="checkbox" label={t('Comment_Anon')} name='anon' defaultChecked={selfComment ? selfComment.anon : false} />
              </Form.Group>
            </Row>
            <Row className='mt-2'>
              <Col className='mx-auto'>
                <ButtonLoader loading={loadingComment} type='submit' color='primary'>{t('Save comment')}</ButtonLoader>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      <Row>
        <Col className='blackblock m-2'>
          {current && (
            <Row>
              {comments.length > 1 && <SideButton side='left' onClick={() => setCurrentIndex(currentIndex === 0 ? comments.length - 1 : currentIndex - 1)} />}
              <Col className='py-3' style={{ fontSize: '18px' }}>
                {current.text}
                <br />
                <div className='mt-2'>
                  {current.album && <span> - <Link href={`/album/${current.album.id}`}><a className={styles.albumSpan}>{current.album.title}</a></Link></span>}
                  {!current.album && current.username && <span> - <Link href={`/profile/${current.username}`}><a className={styles.albumSpan}>{current.username}</a></Link></span>}
                </div>
              </Col>
              {comments.length > 1 && <SideButton side='right' onClick={plusIndex} />}
            </Row>
          )}

          {ostId && (
            <Row className='mt-3 justify-content-center'>
              {user
                ? (
                  <Col xs={3}>
                    <Button onClick={() => user ? setShow(true) : null} className='w-100 rounded-3' variant="outline-light" style={{ fontSize: '18px' }}>
                      {t(selfComment ? 'Edit comment' : 'Add comment')}
                    </Button>
                  </Col>
                )
                : (
                  <Col xs='4'>
                    <Button className='w-100 rounded-3' variant="outline-light" style={{ fontSize: '18px' }}>
                      {t('Comment_Login')}
                    </Button>
                  </Col>
                )}
            </Row>
          )}
        </Col>
      </Row>
    </>
  )
}
