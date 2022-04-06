import { Col, Row, Form, FormControl } from 'react-bootstrap'
import { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { toast } from 'react-toastify'

import { AlbumSelector, GameSelector, PlatformSelector, AnimSelector, SimpleSelector } from '@/components/Selectors'
import { Navigation, SharedForms, Downloads, StoreDownloads, DiscList } from '@/components/SharedForms'
import SubmitButton from '@/components/SubmitButton'
import { hasRolePage } from '@/lib/resolvers'
import { prepareForm } from '@/components/utils'

export const getServerSideProps = hasRolePage(['CREATE'])

export default function AddAlbumPage () {
  return (
    <Row>
      <Col xs={2}>
        <Navigation title='Add' />
      </Col>
      <Col xs={10}>
        <AddAlbum />
        <SharedForms />
      </Col>
    </Row>
  )
}

const queryClasses = gql`
      query {
        categories {
          name
        }
        classes {
          name
        }     
      }
    `

const mutation = gql`
    mutation createAlbum(
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
      createAlbum(
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
      )
      {
        id
      }
    }
  `

function AddAlbum (props) {
  const [currentClasses, setClasses] = useState('')
  const { data: classData } = useQuery(queryClasses)

  const [addMutation, { loading }] = useMutation(mutation, { refetchQueries: 'searchAlbum' })

  const classes = classData ? classData.classes : []
  const categories = classData ? classData.categories : []

  async function handleSubmitForm (e) {
    e.persist()
    e.preventDefault()
    const data = prepareForm(e)

    addMutation({ variables: data })
      .then(results => {
        toast.success(`Added "${data.title}" succesfully!`)
        e.target.reset()
      }).catch(err => {
        console.log(err)
        toast.error(err.message, { autoclose: false })
      })
  }

  return (
    <>
      <div id='addAlbum' className='mb-2 mt-3'>Add Album</div>
      <Form className='site-form blackblock' onSubmit={handleSubmitForm}>
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='title'>Title:</Form.Label>
              <FormControl required type='text' name='title' />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='subTitle'>Sub Title:</Form.Label>
              <FormControl as='textarea' name='subTitle' />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='releaseDate'>Release Date:</Form.Label>
              <FormControl required type='date' name='releaseDate' />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label htmlFor='label'>Label:</Form.Label>
              <FormControl type='text' name='label' />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Form.Group>
              <Form.Label htmlFor='status'>Status:</Form.Label>
              <SimpleSelector isSingle required name='status' defaultValue={{ value: 'show', label: 'Show' }} options={['Show', 'Hidden', 'Coming'].map(label => ({ label, value: label.toLowerCase() }))} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label htmlFor='title'>Description:</Form.Label>
              <FormControl as='textarea' name='description' />
            </Form.Group>
          </Col>
        </Row>
        <hr className='style2 style-white' />
        <Row className='mb-3'>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='artists'>Artists:</Form.Label>
              <FormControl name='artists' as='textarea' />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='classes'>Classification:</Form.Label>
              <SimpleSelector
                required name='classes' options={classes.map(c => ({ value: c.name, label: c.name }))}
                onChange={values => {
                  if (values && values.length === 1) setClasses(values[0].label)
                  else setClasses('')
                }}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='categories'>Categories:</Form.Label>
              <SimpleSelector required name='categories' options={categories.map(c => ({ value: c.name, label: c.name }))} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor='vgmdb'>VGMdb:</Form.Label>
              <FormControl name='vgmdb' type='text' />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor='cover'>Cover:</Form.Label>
              <FormControl required name='cover' type='file' accept='image/*' />
            </Form.Group>
          </Col>
        </Row>
        <Row />

        <hr className='style2 style-white' />
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='games'>Games:</Form.Label>
              <GameSelector name='games' />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='platforms'>Platforms:</Form.Label>
              <PlatformSelector type={currentClasses} name='platforms' />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label htmlFor='animations'>Animations:</Form.Label>
              <AnimSelector name='animations' />
            </Form.Group>
          </Col>
        </Row>

        <hr className='style2 style-white' />

        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label htmlFor='related'>Related OSTs:</Form.Label>
              <AlbumSelector name='related' />
            </Form.Group>
          </Col>
        </Row>
        <hr className='style2 style-white' />
        <DiscList />
        <hr className='style2 style-white' />
        <StoreDownloads />
        <hr className='style2 style-white' />

        <Downloads />

        <Row>
          <Col className='m-auto'>
            <SubmitButton loading={loading} type='submit' color='primary'>Add Album</SubmitButton>
          </Col>
        </Row>
      </Form>
    </>
  )
}
