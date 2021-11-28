import { useEffect, useReducer, useState } from 'react'
import { Button, Col, Row, Form, FormControl } from 'react-bootstrap'
import { SimpleSelector } from './Selectors'

import { clearKeys } from './utils'

import AddPublisher from './forms/AddPublisher'
import AddSeries from './forms/AddSeries'
import AddGame from './forms/AddGame'
import AddStudio from './forms/AddStudio'
import AddAnimation from './forms/AddAnimation'
import AddPlatform from './forms/AddPlatform'

import EditPublisher from './forms/EditPublisher'
import EditPlatform from './forms/EditPlatform'
import EditSeries from './forms/EditSeries'
import EditGame from './forms/EditGame'
import EditStudio from './forms/EditStudio'
import EditAnimation from './forms/EditAnimation'

export const providers = [
  { value: 'SOON', label: 'SOON' },
  { value: 'amazon', label: 'Amazon' },
  { value: 'amazon_jp', label: 'Amazon JP' },
  { value: 'play_asia', label: 'Play Asia' },
  { value: 'cd_japan', label: 'CD Japan' },
  { value: 'spotify', label: 'Spotify' },
  { value: 'google_play', label: 'Google Play' },
  { value: 'steam', label: 'Steam' },
  { value: 'mora', label: 'Mora' },
  { value: 'apple_music', label: 'Apple Music' },
  { value: 'ototoy', label: 'OTOTOY' },
  { value: 'bandcamp', label: 'Bandcamp' },
  { value: 'deezer', label: 'Deezer' }
]

export const providersDownload = [
  { value: 'SOON', label: 'SOON' },
  { value: 'MEGA', label: 'MEGA' },
  { value: 'MEDIAFIRE', label: 'MediaFire' },
  { value: 'GOOGLEDRIVE', label: 'Google Drive' },
  { value: 'BEDRIVE', label: 'BeDrive' },
  { value: 'MIRROR', label: 'Mirror' }
]

export function Navigation ({ title }) {
  return (
    <div className='sticky-top'>
      <div className='mb-2 mt-3 text-center'>Navigation</div>
      <div className='py-2 site-form blackblock d-flex flex-column'>
        <a href='#addOst'>{title} Ost</a>
        <a href='#addPub'>Add Publisher</a>
        <a href='#addPlat'>Add Platform</a>
        <a href='#addSeries'>Add Series</a>
        <a href='#addGame'>Add Game</a>
        <a href='#addStudio'>Add Studio</a>
        <a href='#addAnim'>Add Animation</a>

        <a className='mt-3' href='#editPub'>Edit Publisher</a>
        <a href='#editPlat'>Edit Platform</a>
        <a href='#editSeries'>Edit Series</a>
        <a href='#editGame'>Edit Game</a>
        <a href='#editStudio'>Edit Studio</a>
        <a href='#editAnim'>Edit Animation</a>
      </div>
    </div>
  )
}

export function SharedForms () {
  return (
    <>
      <AddPublisher />
      <AddPlatform />
      <AddSeries />
      <AddGame />
      <AddStudio />
      <AddAnimation />

      <EditPublisher />
      <EditPlatform />
      <EditSeries />
      <EditGame />
      <EditStudio />
      <EditAnimation />
    </>
  )
}

export function DiscList (props) {
  const defaults = props.defaults || []
  const [keys, setKeys] = useState(props.defaults ? defaults.map((d, i) => i) : [0])

  useEffect(() => {
    if (keys.length === 0) setKeys([0])
  }, [keys])

  return (
    <>
      <Row>
        <Col>
          <Button className='mr-2' color='primary' onClick={() => setKeys([...keys, keys[keys.length - 1] + 1])}>
            Add Disc
          </Button>
          <Button color='primary' onClick={() => setKeys(clearKeys(keys, ['discInput']))}>Remove empty discs</Button>
        </Col>
      </Row>

      <Row form className='mt-3'>
        {keys.map((key, i) => (
          <Col md={6} key={key}>
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Disc {i + 1}:</Form.Label>
                  <FormControl required name='discs[][body]' type='textarea' id={`discInput${key}`} defaultValue={defaults[key] ? defaults[key].body : ''} />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </>
  )
}

export function StoreDownloads (props) {
  const defaults = props.defaults || []
  const [keys, setKeys] = useState(props.defaults ? defaults.map((d, i) => i) : [0])

  useEffect(() => {
    if (keys.length === 0) setKeys([0])
  }, [keys])

  return (
    <>
      <Row>
        <Col>
          <Button className='mr-2' color='primary' onClick={() => setKeys([...keys, keys[keys.length - 1] + 1])}>
            Add Store link
          </Button>
          <Button color='primary' onClick={() => setKeys(clearKeys(keys, ['storeInput']))}>Remove empty links</Button>
        </Col>
      </Row>

      <Row className='mt-3'>
        {keys.map((key, i) => (
          <Col key={key} md={6}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Provider:</Form.Label>
                  <SimpleSelector
                    name={`stores[${i}][provider]`} defaultValue={defaults[key] ? [providers.find(e => e.value === defaults[key].provider)] : [providers[0]]} options={providers}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Url:</Form.Label>
                  <FormControl required name={`stores[${i}][url]`} defaultValue={defaults[key] ? defaults[key].url : ''} id={`storeInput${key}`} type='text' />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </>
  )
}

function downloadReducer (state, action) {
  switch (action.type) {
  case 'addCategory':
    return [...state, { key: state[state.length - 1].key + 1, links: [{ key: 0 }] }]

  case 'removeCategory':
    return state.filter(s => s.key !== action.key)

  case 'addLink': {
    const newState = [...state]
    const newKey = newState[action.catIndex].links[newState[action.catIndex].links.length - 1].key + 1
    newState[action.catIndex].links.push({ key: newKey })
    return newState
  }

  case 'removeLink': {
    const newState = [...state]
    newState[action.catIndex].links = newState[action.catIndex].links.filter(l => l.key !== action.key)
    return newState
  }

  default:
    return state
  }
}

export function Downloads (props) {
  let initial = []
  if (props.defaults) {
    initial = props.defaults.map((download, i) => (
      { ...download, key: i, links: download.links.map((link, i2) => { return { ...link, key: i2 } }) }
    ))
  } else initial = [{ key: 0, links: [{ key: 0 }] }]

  const [values, dispatch] = useReducer(downloadReducer, initial)

  return (
    <>
      <Row>
        <Col>
          <Button className='mr-2' color='primary' onClick={() => dispatch({ type: 'addCategory' })}>
            Add Download Section
          </Button>
        </Col>
      </Row>
      {values.map((cat, i) =>
        <Row key={cat.key}>
          <Col>
            <Row>
              <Col>
                <Form.Group className='mt-3'>
                  <Form.Label>Category {i + 1} title:</Form.Label>
                  <FormControl defaultValue={cat.title} required name={`downloads[${i}][title]`} type='text' />
                </Form.Group>
              </Col>
              <Col md='auto' className='mt-auto'>
                <Form.Group>
                  <Button color='primary' disabled={values.length === 1} onClick={() => dispatch({ type: 'removeCategory', key: cat.key })}>
                    Remove category
                  </Button>
                </Form.Group>
              </Col>
              <Col md='auto' className='mt-auto'>
                <Form.Group>
                  <Button
                    className='mr-2'
                    color='primary'
                    onClick={() => dispatch({ type: 'addLink', catIndex: i })}
                  >
                    Add Download Link
                  </Button>
                </Form.Group>
              </Col>
              <Col md='auto' className='mt-auto mb-3'>
                <div className='form-check'>
                  <FormControl defaultValue={cat.small} type='checkbox' name={`downloads[${i}][small]`} className='form-check-input' />
                  <Form.Label className='form-check-label' for={`downloads[${i}][small]`}>Small Title</Form.Label>
                </div>
              </Col>
            </Row>
            {cat.links.map((link, i2) =>
              <Row key={link.key}>
                <Col>
                  <Row>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Provider:</Form.Label>
                        <SimpleSelector
                          defaultValue={[providersDownload.find(p => p.value === link.provider)]}
                          name={`downloads[${i}][links][${i2}][provider]`} options={providersDownload}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Url:</Form.Label>
                        <FormControl
                          defaultValue={link.url} required type='text'
                          name={`downloads[${i}][links][${i2}][url]`}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Direct Url:</Form.Label>
                        <FormControl
                          defaultValue={link.directUrl} required type='text'
                          name={`downloads[${i}][links][${i2}][directUrl]`}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Custom</Form.Label>
                        <FormControl
                          defaultValue={link.custom} type='text'
                          name={`downloads[${i}][links][${i2}][custom]`}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>

                <Col md='auto' className='mt-auto'>
                  <Form.Group>
                    <Button
                      color='primary' disabled={cat.links.length === 1}
                      onClick={() => dispatch({ type: 'removeLink', catIndex: i, key: link.key })}
                    >
                      Remove link
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      )}
    </>
  )
}
