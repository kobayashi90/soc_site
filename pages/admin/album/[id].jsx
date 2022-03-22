import { useState, useEffect } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { Col, Row, Form, FormControl, Container } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { withSessionSsr } from '@/lib/session'
import { AlbumSelector, GameSelector, PlatformSelector, AnimSelector, SimpleSelector } from '@/components/Selectors'
import { Navigation, SharedForms, DiscList, StoreDownloads, Downloads } from '@/components/SharedForms'
import SubmitButton from '@/components/SubmitButton'
import useUser from '@/components/useUser'
import { initializeApollo } from '@/lib/ApolloClient'
import { prepareForm } from '@/components/utils'

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
      value: id
      label: name
    }
    animations {
      value: id
      label: title
    }
    games {
      value: slug
      label: name
    }
    artists {
      slug
      name
    }
    classes {
      value: name
      label: name
    }
    categories {
      value: name
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
      value: id
      label: title
    }
  }

  categories {
    value: name
    label: name
  }
  classes {
    value: name
    label: name
  } 
}
`

const queryDownload = gql`
query downloads ($id: ID!) {
  downloads(id: $id) {
    id
    title
    small
    links {
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

  const client = initializeApollo()
  const { data } = await client.query({ query, variables: { id } })
  const { album, categories, classes } = data

  if (album === null) return { redirect: { destination: '/404', permanent: false } }

  return { props: { id, album, categories, classes }/*, revalidate: 60 */ }
})

const mutation = gql`
    mutation updateAlbum(
      $id: ID!,
      $title: String,
      $subTitle: String,
      $cover: Upload,
      $releaseDate: String,
      $label: String,
      $description: String,
      $downloads: [DownloadInput],
      $artists: [String],
      $classes: [String],
      $categories: [String],
      $platforms: [ID],
      $games: [String],
      $animations: [ID],
      $discs: [DiscInput],
      $related: [ID],
      $stores: [StoreInput],
      $vgmdb: String,
      $status: String!
    ){
      updateAlbum(
        id: $id,
        title: $title,
        subTitle: $subTitle,
        cover: $cover,
        releaseDate: $releaseDate,
        label: $label,
        description: $description,
        downloads: $downloads,
        artists: $artists,
        classes: $classes,
        categories: $categories,
        platforms: $platforms,
        games: $games,
        animations: $animations
        discs: $discs,
        related: $related,
        stores: $stores,
        vgmdb: $vgmdb,
        status: $status
      ){ id }
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
  const { data, refetch } = useQuery(queryDownload, { variables: { id } })
  useEffect(() => refetch({ id }), [user, id, refetch])

  function handleSubmitForm (e) {
    e.persist()
    e.preventDefault()
    const formData = prepareForm(e)
    formData.id = album.id

    mutate({ mutation, variables: formData }).then(results => {
      toast.success(`Updated "${formData.title}" succesfully!`)
    }).catch(err => {
      console.log(err)
      toast.error(err.message, { autoclose: false })
    })
  }

  return (
    <>
      <div id='addAlbum' className='mb-2 mt-3'>Editing {`"${album.title}"`} ({album.id})</div>
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
              <SimpleSelector isSingle required name='status' defaultValue={{ value: album.status, label: capitalize(album.status) }} options={['Show', 'Hidden', 'Coming'].map(label => ({ label, value: label.toLowerCase() }))} />
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
                required name='classes' options={classes}
                onChange={values => setClasses(values && values.length === 1 ? values[0].label : '')}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='categories'>Categories:</Form.Label>
              <SimpleSelector
                defaultValue={album.categories}
                required name='categories' options={categories} />
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
              <GameSelector defaultValue={album.games} name='games' />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='platforms'>Platforms:</Form.Label>
              <PlatformSelector type={currentClasses} defaultValue={album.platforms} name='platforms' />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='animations'>Animations:</Form.Label>
              <AnimSelector defaultValue={album.animations} name='animations' />
            </Form.Group>
          </Col>
        </Row>
        <hr className='style2 style-white' />
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label htmlFor='related'>Related OSTs:</Form.Label>
              <AlbumSelector defaultValue={album.related} name='related' />
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
