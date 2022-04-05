import styles from '../styles/Header.module.scss'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Container, Button, Navbar, Nav, NavDropdown, Modal, Form } from 'react-bootstrap'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import serialize from 'form-serialize'
import { useApolloClient, useMutation, useLazyQuery, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { toast } from 'react-toastify'

import useUser from './useUser'
import { ButtonLoader } from './Loader'
import SubmitButton from './SubmitButton'
import logo from '../public/img/assets/logo.png'

export default function Header () {
  const { user, refetch } = useUser()
  const client = useApolloClient()
  const loginQuery = gql`
    query Login($username: String!, $password: String!){
      login(username: $username, password: $password)
    }
  `
  const logoutQuery = gql`
    query {
      logout
    }
  `
  const forgorMutation = gql`
    mutation createForgorLink($key: String!){
      createForgorLink(key: $key)
    }
  `

  const queryHeader = gql`
    query {
      config(name: "banner"){
        value
      }
    }
  `

  const [mutateForgor, { loading: loadingForgor }] = useMutation(forgorMutation)

  const [queryLogin, { loading: loadingLogin }] = useLazyQuery(loginQuery)
  const { data: headerData } = useQuery(queryHeader)

  const [show, setShow] = useState(false)
  const [showForgor, setForgor] = useState(false)
  const [showForgorMessage, setForgorMessage] = useState(false)

  useEffect(() => {
    if (showForgor) setShow(false)
  }, [showForgor])

  useEffect(() => {
    if (showForgorMessage) setForgor(false)
  }, [showForgorMessage])

  const handleLogin = async () => {
    if (user) {
      client.query({ query: logoutQuery })
        .then(() => {
          refetch()
          setShow(false)
        })
        .catch(error => console.error('An unexpected error happened:', error))
    } else setShow(true)
  }

  const submit = async e => {
    e.persist()
    e.preventDefault()
    const variables = serialize(e.target, { hash: true })

    queryLogin({ variables })
      .then(res => {
        const { error } = res
        if (error) {
          const { graphQLErrors } = error
          let message = 'Unknown error'

          if (graphQLErrors && graphQLErrors.length > 0) {
            const { code } = graphQLErrors[0].extensions
            if (code === 'BAD_USER_INPUT') message = 'Invalid username/email or password'
          }

          console.error(error)
          toast.error(message)
        } else {
          refetch()
          setShow(false)
        }
      })
      .catch(error => console.error('An unexpected error happened:', error))
  }

  const handleForgor = ev => {
    ev.preventDefault()
    const variables = serialize(ev.target, { hash: true })
    mutateForgor({ variables })
      .then(() => {
        setForgorMessage(true)
      })
      .catch(err => {
        if (process.env.NODE_ENV === 'development') console.log(err)
        toast.error('Failed to recover password')
      })
  }

  return (
    <>
      <Modal show={show} centered onHide={() => setShow(false)}>
        <Modal.Body className='m-3'>
          <Form onSubmit={submit}>
            <Row>
              <Form.Group as={Col} >
                <Form.Label htmlFor='username' style={{ color: 'black' }}>Username:</Form.Label>
                <Form.Control required type='text' name='username' />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label htmlFor='password' style={{ color: 'black' }}>Password:</Form.Label>
                <Form.Control required type='password' name='password' />
              </Form.Group>
            </Row>
            <Row className='mt-4'>
              <Col md={4} className='mx-auto'>
                <SubmitButton loading={loadingLogin} type='submit' className='w-100' color='primary'>Login</SubmitButton>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col md={6} className='mx-auto'>
                <Button onClick={() => setForgor(true)} className='w-100' color='primary'>Recover password</Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showForgor} centered onHide={() => setForgor(false)}>
        <Modal.Body className='m-3'>
          <Form onSubmit={handleForgor}>
            <Row>
              <Form.Group as={Col} >
                <Form.Label htmlFor='username' style={{ color: 'black' }}>Username or email:</Form.Label>
                <Form.Control required type='text' name='key' />
              </Form.Group>
            </Row>
            <Row className='mt-4'>
              <Col md={6} className='mx-auto'>
                <ButtonLoader loading={loadingForgor} type='submit' className='w-100' color='primary' text='Recover password' />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showForgorMessage} centered onHide={() => setForgorMessage(false)}>
        <Modal.Body className='m-3'>
          <Form onSubmit={submit}>
            <Row>
              <Form.Group as={Col} >
                <Form.Label style={{ color: 'black' }}>An email has been sent to the address linked to the account. Check your spam folder</Form.Label>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      <header>
        <div id={styles.bannerBg} style={headerData ? { backgroundImage: `url('/_next/image?w=3840&q=100&url=${`https://cdn.sittingonclouds.net/live/${headerData.config.value}.png`}` } : {}}>
          <Container>
            <Row className='h-100'>
              <Col className='my-auto'>
                <Link href="/">
                  <a><Image alt='SOC Logo' src={logo} height={150} width={265} /></a>
                </Link>
              </Col>

              {user && (
                <Col xs='auto' className={classNames(styles.login, 'ms-sm-auto mb-sm-5')}>
                  <Link href={`/profile/${user.username}`}><a><Button variant="primary">Profile</Button></a></Link>
                </Col>
              )}
              <Col xs='auto' className={classNames(styles.login, 'ms-sm-auto mb-sm-5')}>
                <Button onClick={handleLogin} variant="primary">{user ? 'Logout' : 'Login'}</Button>
              </Col>
            </Row>
          </Container>
        </div>

        <Navbar expand='sm' bg="dark" variant="dark" className='py-md-0'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto d-flex align-items-center">
                <NavLink href='/' name='Home' />
                <NavLink href='/last-added' name='Last Added' />
                <NavLink href='/album/list' name='Album List' />
                <Dropdown name='Games' items={[
                  { name: 'Game Releases', href: '/game' },
                  { name: 'Game Series', href: '/series/list' },
                  { name: 'Game Publishers', href: '/publisher/list' },
                  { name: 'Game Platforms', href: '/platform/list' },
                  { name: 'Game List', href: '/game/list' }
                ]} />
                <Dropdown name='Animations' items={[
                  { name: 'Animation Releases', href: '/anim' },
                  { name: 'Animation List', href: '/anim/list' },
                  { name: 'Studios', href: '/studio/list' }
                ]} />
                <NavLink href='/contact' name='Contact' />
                {user && user.pages.map(p => <NavLink key={p.url} href={p.url} name={p.name} />)}
              </Nav>
            </Navbar.Collapse>
            <SearchBar />
          </Container>
        </Navbar>
      </header>
    </>
  )
}

function Dropdown ({ name, items = [] }) {
  return (
    <NavDropdown title={name} className={classNames(styles.navLink, styles.dropMenu)}>
      {items.map(({ href, name }, i) => (
        <Link key={i} href={href} passHref>
          <NavDropdown.Item>{name}</NavDropdown.Item>
        </Link>
      ))}
    </NavDropdown>
  )
}

function NavLink ({ href, name }) {
  return (
    <Link href={href} passHref>
      <Nav.Link className={styles.navLink}>{name}</Nav.Link>
    </Link>
  )
}

function SearchBar () {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const onKeyDownHandler = e => {
    const query = ref.current.value.trim()
    if (e.keyCode === 13 && ref.current && query.length > 0) {
      router.push({ pathname: '/search', query: { q: query } })
      setOpen(false)
    }
  }

  useEffect(() => { if (open) ref.current.focus() }, [open])

  return (
    <div id={styles.search} className={classNames({ 'w-100': open })}>
      <input ref={ref} onKeyDown={onKeyDownHandler} type='text' style={{ display: open ? 'block' : 'none' }} />
      <i className={`fas fa-${open ? 'times' : 'search'}`} style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)} />
    </div>
  )
}
