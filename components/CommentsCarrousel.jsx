import { Col, Button, Modal, Form, Row, FormControl } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import serialize from 'form-serialize'

import useUser from './useUser'
import { ButtonLoader } from './Loader'

function SideButton (props) {
  const { side, onClick } = props

  return (
    <Col xs={'auto'}>
      <Button onClick={onClick} className='h-100 rounded-3' variant="outline-light" style={{ fontSize: '30px' }}><span className={`fas fa-angle-${side}`} /></Button>
    </Col>
  )
}

export default function CommentCarrousel (props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)

  const { ostId, comments = [] } = props
  const current = comments[currentIndex]

  const { user } = useUser()

  const plusIndex = () => setCurrentIndex(currentIndex === comments.length - 1 ? 0 : currentIndex + 1)

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(plusIndex, 10 * 1000)
  }, [currentIndex])

  return (
    <>

      <Row>
        <Col className='blackblock m-2'>
          {current && (
            <Row>
              <SideButton side='left' onClick={() => setCurrentIndex(currentIndex === 0 ? comments.length - 1 : currentIndex - 1)} />
              <Col className='py-3' style={{ fontSize: '18px' }}>
                {current.text}
                <br />
                <div className='mt-2'>{current.album ? ` - ${current.album.title}` : (current.username ? ` - ${current.username}` : '')}</div>
              </Col>
              <SideButton side='right' onClick={plusIndex} />
            </Row>
          )}
          {ostId && (
            <Row className='mt-3 justify-content-center'>
              {user
                ? <CommentButtons ostId={ostId} />
                : (
                  <Col xs='4'>
                    <Button className='w-100 rounded-3' variant="outline-light" style={{ fontSize: '18px' }}>
                      Login to leave a comment
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

function CommentButtons (props) {
  const { ostId } = props

  const [show, setShow] = useState(false)
  const { user } = useUser()

  const getComment = gql`
    query ($ostId: ID!) {
      album(id: $ostId){
        selfComment {
          text
          anon
        }
      }
    }
  `
  const [fetchComment, { data }] = useLazyQuery(getComment)

  const mutateComment = gql`
    mutation ($text: String!, $anon: Boolean!, $ostId: ID!) {
      updateComment(text: $text, anon: $anon, ostId: $ostId)
    }
  `
  const [updateComment, { loading: loadingComment }] = useMutation(mutateComment)

  useEffect(() => fetchComment({ variables: { ostId } }), [user, fetchComment, ostId])

  function submit (ev) {
    let variables = serialize(ev.target, { hash: true })
    variables = { ...variables, anon: variables.anon === 'on', ostId }

    updateComment({ variables })
      .then(() => setShow(false))

    ev.preventDefault()
  }

  const album = data?.album
  const selfComment = album?.selfComment

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
                <Form.Check type="checkbox" label="Check this to comment anonymously" name='anon' defaultChecked={selfComment ? selfComment.anon : false} />
              </Form.Group>
            </Row>
            <Row className='mt-2'>
              <Col className='mx-auto'>
                <ButtonLoader loading={loadingComment} type='submit' color='primary' text='Save comment' />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      {album && (
        <Col xs={3}>
          <Button onClick={() => user ? setShow(true) : null} className='w-100 rounded-3' variant="outline-light" style={{ fontSize: '18px' }}>
            {selfComment ? 'Edit comment' : 'Add comment'}
          </Button>
        </Col>
      )}
    </>
  )
}
