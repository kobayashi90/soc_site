import styles from '../styles/Header.module.scss'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Container, Button, Navbar, Nav, NavDropdown, Modal, Form } from 'react-bootstrap'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import serialize from 'form-serialize'
import useUser from './useUser'

import logo from '../public/img/assets/logo.png'

export default function Header () {
  const [show, setShow] = useState(false)
  const { user, mutateUser } = useUser()

  const loggedIn = user?.isLoggedIn

  const handleLogin = async () => {
    if (loggedIn) {
      mutateUser(await fetch('/api/logout', { method: 'POST' }), false)
    } else setShow(true)
  }

  const submit = async e => {
    e.persist()
    e.preventDefault()
    const variables = serialize(e.target, { hash: true })

    try {
      await mutateUser(
        await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(variables)
        })
      )

      setShow(false)
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  return (
    <>
      <Modal show={show} centered>
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
                <Button type='submit' className='w-100' color='primary'>Login</Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
      <header>
        <div id={styles.bannerBg} style={{ backgroundImage: "url('/_next/image?url=https://beta.sittingonclouds.net/live/live/banner.png&w=3840&q=100')" }}>
          <Container>
            <Row className='h-100'>
              <Col className='my-auto'>
                <Link href="/">
                  <a><Image alt='SOC Logo' src={logo} height={150} width={265} /></a>
                </Link>
              </Col>

              <Col xs='auto' className={classNames(styles.login, 'ms-sm-auto mb-sm-5')}>
                <Button onClick={handleLogin} variant="primary">{loggedIn ? 'Logout' : 'Login'}</Button>
              </Col>
            </Row>
          </Container>
        </div>

        <Navbar expand='sm' bg="dark" variant="dark" className='py-0'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto d-flex align-items-center">
                <NavLink href='/' name='Home' />
                <NavLink href='/' name='Last Added' />
                <NavLink href='/' name='Album List' />
                <Dropdown name='Games' items={[
                  { name: 'Game Releases', href: '/' },
                  { name: 'Game Series', href: '/' },
                  { name: 'Game Publishers', href: '/' },
                  { name: 'Game Platforms', href: '/' },
                  { name: 'Game List', href: '/' }
                ]} />
                <Dropdown name='Animations' items={[
                  { name: 'Animation Releases', href: '/' },
                  { name: 'Animation List', href: '/' },
                  { name: 'Studioss', href: '/' }
                ]} />
                <NavLink href='/' name='Contact' />
                <NavLink href='/' name='Album Admin' />
                <NavLink href='/' name='Manage Users' />
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