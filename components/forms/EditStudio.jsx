import { useRef } from 'react'
import { Row, FormControl, Form, Col, Label } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { StudioSelector } from '../Selectors'
import SubmitButton from '../SubmitButton'
import serialize from 'form-serialize'
import { gql, useMutation } from '@apollo/client'

const mutationUpdate = gql`
    mutation UpdateStudio($slug: String!, $name:String!){
      updateStudio(
        slug: $slug
        name: $name
      ) {
        slug
      }
    }
`
const mutationDelete = gql`
    mutation DeleteStudio($slug: String!){
      deleteStudio(slug: $slug)
    }
`

export default function EditStudio () {
  const formRef = useRef(null)
  const [mutateUpdate, { loading: loadingUpdate }] = useMutation(mutationUpdate)
  const [mutateDelete, { loading: loadingDelete }] = useMutation(mutationDelete)

  function handleSubmitForm (mutate, verb) {
    const target = formRef.current
    mutate({ variables: serialize(target, { hash: true }) }).then(results => {
      toast.success(`${verb} studio succesfully!`)
      target.reset()
    }).catch(err => {
      console.log(err)
      toast.error(err.message, { autoclose: false })
    })
  }

  return (
    <div className='mt-3'>
      <div id='editStudio' className='mb-2'>Edit Studio</div>
      <div className='site-form blackblock'>
        <Form innerRef={formRef}>
          <Row form>
            <Col md={6}>
              <Form.Group>
                <Form.Label for='id'>Studio:</Form.Label>
                <StudioSelector required name='slug' />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label for='name'>Name:</Form.Label>
                <FormControl type='text' name='name' required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs='auto' className='my-auto mx-1'>
              <SubmitButton type='button' onClick={() => handleSubmitForm(mutateUpdate, 'Edited')} loading={loadingUpdate}>Save Changes</SubmitButton>
            </Col>
            <Col xs='auto' className='my-auto mx-1'>
              <SubmitButton type='button' onClick={() => handleSubmitForm(mutateDelete, 'Deleted')} loading={loadingDelete}>Delete Studio</SubmitButton>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}