import { useState, useEffect } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import serialize from 'form-serialize'
import { Col, Row, Form, FormControl, Container } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { withSessionSsr } from '@/lib/session'
import client from '@/lib/ApolloClient'
import { OstSelector, GameSelector, PlatformSelector, AnimSelector, SimpleSelector } from '@/components/Selectors'
import { Navigation, SharedForms, DiscList, StoreDownloads, Downloads } from '@/components/SharedForms'
import SubmitButton from '@/components/SubmitButton'
import useUser from '@/components/useUser'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const query = gql`
query Album ($id: ID!) {
  album(id: $id){
    id
    title
    subTitle
    releaseDate
    vgmdb
    description
    status
    platforms {
      name: id
      label: name
    }
    animations {
      name: id
      label: title
    }
    games {
      name: slug
      label: name
    }
    artists {
      slug
      name
    }
    classes {
      name
      label: name
    }
    categories {
      name
      label: name
    }
    stores {
      url
      provider
    }
    discs {
      number
      body
    }
    related {
      name: id
      label: title
    }
  }

  categories {
    name
    label: name
  }
  classes {
    name
    label: name
  } 
}
`

const queryDownload = gql`
query downloads ($id: ID!) {
  downloads(id: $id){
    title
    small
    links{
      id
      url
      provider
      custom
      directUrl
    }
  }
}
`

export const getServerSideProps = withSessionSsr(async ({ params, req }) => {
  const { id } = params

  /* const {username} = req.session
  const user = username ? await db.models.user.findByPk(username) : null

  if (!user) return { redirect: { destination: '/500', permanent: false } } */

  const { data } = await client.query({ query, variables: { id } })
  const { album, categories, classes } = data

  if (album === null) return { redirect: { destination: '/404', permanent: false } }

  return { props: { id, album, categories, classes }/*, revalidate: 60 */ }
})

const mutation = gql`
    mutation updateAlbum($id: ID!, $data: JSONObject!){
      updateAlbum(id: $id, data: $data){ id }
    } 
  `

export default function EditOst (props) {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Navigation title='Edit' />
        </Col>
        <Col xs={10}>
          <EditOstForm {...props} />
          <SharedForms />
        </Col>
      </Row>
    </Container>
  )
}

function EditOstForm ({ id, album, classes, categories }) {
  const [mutate, { loading }] = useMutation(mutation)
  const [currentClasses, setClasses] = useState('')

  const { user } = useUser()
  const { data, refetch } = useQuery(queryDownload, { variables: { id }, fetchPolicy: 'network-only' })
  useEffect(() => refetch({ variables: { id } }), [user, id, refetch])

  function handleSubmitForm (e) {
    e.persist()
    e.preventDefault()
    const formData = serialize(e.target, { hash: true })

    if (formData.artists) formData.artists = formData.artists.split(',')
    formData.discs = formData.discs.map((d, i) => {
      const payload = d
      payload.number = i
      return payload
    })
    if (e.target.elements.cover.files[0] !== undefined) formData.cover = e.target.elements.cover.files[0]

    if (formData.downloads) {
      formData.downloads.forEach(link => { link.small = link.small === 'on' })
    }
    formData.releaseDate = new Date(formData.releaseDate).toISOString().substring(0, 10)

    mutate({ mutation, variables: { id: album.id, data: formData } }).then(results => {
      toast.success(`Updated "${formData.title}" succesfully!`)
    }).catch(err => {
      console.log(err)
      toast.error(err.message, { autoclose: false })
    })
  }

  return (
    <>
      <div className='mb-2 mt-3'>Editing &#34{album.title}&#34 ({album.id})</div>
      <Form className='site-form blackblock' onSubmit={handleSubmitForm}>
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='title'>Title:</Form.Label>
              <FormControl required type='text' name='title' defaultValue={album.title} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='subTitle'>Sub Title:</Form.Label>
              <FormControl as='textarea' name='subTitle' defaultValue={album.subTitle} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='releaseDate'>Release Date:</Form.Label>
              <FormControl required type='date' name='releaseDate' defaultValue={album.releaseDate} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='label'>Label:</Form.Label>
              <FormControl type='text' name='label' defaultValue={album.label} />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Form.Group>
              <Form.Label htmlFor='status'>Status:</Form.Label>
              <SimpleSelector required name='status' defaultValue={[{ value: album.status, label: capitalize(album.status) }]} options={['Show', 'Hidden', 'Coming'].map(label => ({ label, value: label.toLowerCase() }))} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label htmlFor='title'>Description:</Form.Label>
              <FormControl as='textarea' name='description' defaultValue={album.description} />
            </Form.Group>
          </Col>
        </Row>
        <hr className='style2 style-white' />
        <Row className='mb-3'>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='artists'>Artists:</Form.Label>
              <FormControl name='artists' as='textarea' defaultValue={album.artists.map(a => a.name).join(',')} />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='classes'>Classification:</Form.Label>
              <SimpleSelector
                defaultValue={album.classes}
                required isMulti name='classes' options={classes}
                onChange={values => setClasses(values && values.length === 1 ? values[0].label : '')}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='categories'>Categories:</Form.Label>
              <SimpleSelector
                defaultValue={album.categories}
                required isMulti name='categories' options={categories} />
            </Form.Group>
          </Col>

        </Row>

        <Row>

          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor='vgmdb'>VGMdb:</Form.Label>
              <FormControl defaultValue={album.vgmdb} name='vgmdb' type='text' />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor='cover'>Cover:</Form.Label>
              <FormControl name='cover' type='file' accept='image/*' />
            </Form.Group>
          </Col>
        </Row>

        <hr className='style2 style-white' />

        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='games'>Games:</Form.Label>
              <GameSelector
                defaultValue={album.games}
                isMulti name='games' />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='platforms'>Platforms:</Form.Label>
              <PlatformSelector type={currentClasses} defaultValue={album.platforms} isMulti name='platforms' />

            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='animations'>Animations:</Form.Label>
              <AnimSelector defaultValue={album.animations} isMulti name='animations' />
            </Form.Group>
          </Col>
        </Row>
        <hr className='style2 style-white' />
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label htmlFor='related'>Related OSTs:</Form.Label>
              <OstSelector defaultValue={album.related} isMulti name='related' />
            </Form.Group>
          </Col>
        </Row>

        <hr className='style2 style-white' />
        <DiscList defaults={album.discs} />
        <hr className='style2 style-white' />

        <StoreDownloads defaults={album.stores} />

        <hr className='style2 style-white' />

        {data && <Downloads defaults={data.downloads} />}

        <Row>
          <Col className='m-auto'>
            <SubmitButton loading={loading} type='submit' color='primary'>Save Changes</SubmitButton>
          </Col>
        </Row>
      </Form>
    </>
  )
}
