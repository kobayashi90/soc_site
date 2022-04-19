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
import logoES from '../public/img/assets/logo_es.png'
import useTranslation from './useTranslation'

function LangSelector () {
  const router = useRouter()
  const handleLocaleChange = event => router.push(router.route, router.asPath, { locale: event.target.value })

  return (
    <Col xs='auto' className={classNames(styles.login, styles.blueBullet, 'ms-sm-auto mb-sm-5 py-2')}>
      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="pt-pt">🇵🇹 Português</option>
        <option value="pt-br">🇧🇷 Português</option>
        <option value="it">🇮🇹 Italiano</option>
      </select>
    </Col>
  )
}

function ForgorForm (props) {
  const { defaultValue = false } = props
  const t = useTranslation()
  const forgorMutation = gql`
    mutation createForgorLink($key: String!){
      createForgorLink(key: $key)
    }
  `
  const [mutateForgor, { loading: loadingForgor }] = useMutation(forgorMutation)
  const [showForgorMessage, setForgorMessage] = useState(defaultValue)

  const handleForgor = ev => {
    ev.preventDefault()
    const variables = serialize(ev.target, { hash: true })

    mutateForgor({ variables })
      .then(() => {
        setForgorMessage(true)
      })
      .catch(err => {
        if (process.env.NODE_ENV === 'development') console.log(err)
        toast.error(t('Failed_Recover', 'Failed to recover password'))
      })
  }

  return showForgorMessage
    ? (
      <Row>
        <Col style={{ color: 'black' }}>
          {t('Email_Sent', 'An email has been sent to the address linked to the account. Check your spam folder')}
        </Col>
      </Row>
    )
    : (
      <Form onSubmit={handleForgor}>
        <Row>
          <Form.Group as={Col} >
            <Form.Label htmlFor='username' style={{ color: 'black' }}>{t('Username or email')}:</Form.Label>
            <Form.Control required type='text' name='key' />
          </Form.Group>
        </Row>
        <Row className='mt-4'>
          <Col md={6} className='mx-auto'>
            <ButtonLoader loading={loadingForgor} type='submit' className='w-100' color='primary' text={t('Recover password')} />
          </Col>
        </Row>
      </Form>
    )
}

function LoginButton (props) {
  const { navMobile = false } = props
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

  const { user, refetch } = useUser()
  const client = useApolloClient()
  const [queryLogin, { loading: loadingLogin }] = useLazyQuery(loginQuery)

  const [showForgor, setForgor] = useState(false)
  const [show, setShow] = useState(false)
  const t = useTranslation()

  useEffect(() => {
    if (!show) setForgor(false)
  }, [show])

  const handleLogin = () => {
    if (user) {
      client.query({ query: logoutQuery })
        .then(() => {
          refetch()
          setShow(false)
        })
        .catch(error => console.error('An unexpected error happened:', error))
    } else setShow(true)
  }

  const submit = e => {
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
            if (code === 'BAD_USER_INPUT') message = t('Invalid_Login', 'Invalid username/email or password')
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

  if (navMobile) {
    return <NavLink onClick={handleLogin} name={user ? 'Logout' : 'Login'} className='d-block d-sm-none' />
  }

  return (
    <>
      <Col xs='auto' className={classNames(styles.login, 'd-none d-sm-block ms-sm-auto mb-sm-5')}>
        <Button onClick={handleLogin} variant="primary">{t(user ? 'Logout' : 'Login')}</Button>
      </Col>
      <Modal show={show} centered onHide={() => setShow(false)}>
        <Modal.Body className='m-3'>
          {showForgor
            ? <ForgorForm />
            : (
              <Form onSubmit={submit}>
                <Row>
                  <Form.Group as={Col} >
                    <Form.Label htmlFor='username' style={{ color: 'black' }}>{t('Username')}:</Form.Label>
                    <Form.Control required type='text' name='username' />
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label htmlFor='password' style={{ color: 'black' }}>{t('Password')}:</Form.Label>
                    <Form.Control required type='password' name='password' />
                  </Form.Group>
                </Row>
                <Row className='mt-4'>
                  <Col md={4} className='mx-auto'>
                    <SubmitButton loading={loadingLogin} type='submit' className='w-100' color='primary'>{t('Login')}</SubmitButton>
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col md={6} className='mx-auto'>
                    <Button onClick={() => setForgor(true)} className='w-100' color='primary'>{t('Recover password')}</Button>
                  </Col>
                </Row>
              </Form>
            )
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

function RegisterProfileButton (props) {
  const { navMobile = false } = props
  const registerMutation = gql`
    mutation ($username: String!, $email: String!, $pfp: Upload) {
      registerUser(username: $username, email: $email, pfp: $pfp)
    }
  `

  const { user } = useUser()
  const [showRegister, setRegister] = useState(false)
  const [showForgor, setForgor] = useState(false)
  const t = useTranslation()
  const [mutateRegister, { loading: loadingRegister }] = useMutation(registerMutation)

  const submitRegister = e => {
    e.persist()
    e.preventDefault()

    const variables = serialize(e.target, { hash: true })
    variables.pfp = e.target.elements.pfp.files[0]

    mutateRegister({ variables })
      .then(res => {
        setRegister(false)
        setForgor(true)
      })
      .catch(error => {
        const { graphQLErrors } = error
        let message = 'Unknown error'

        if (graphQLErrors && graphQLErrors.length > 0) {
          const { message: messageGQL } = graphQLErrors[0]
          message = messageGQL
        }

        console.error(error)
        toast.error(message)
        // console.error('An unexpected error happened:', error)
      })
  }

  useEffect(() => {
    if (!showRegister) setForgor(false)
  }, [showRegister])

  if (navMobile) {
    return (
      user
        ? (
          <NavLink href={`/profile/${user.username}`} name='Profile' className='d-block d-sm-none' />
        )
        : (
          <NavLink onClick={() => setRegister(true)} name='Register' className='d-block d-sm-none' />
        )
    )
  }

  return (
    <>
      <Col xs='auto' className={classNames(styles.login, 'd-none d-sm-block ms-sm-auto mb-sm-5')}>
        {user
          ? (
            <Link href={`/profile/${user.username}`}><a><Button variant="primary">{t('Profile')}</Button></a></Link>
          )
          : (
            <Button onClick={() => setRegister(true)} className='me-0' variant="primary">{t('Register')}</Button>
          )}
      </Col>
      <Modal show={showRegister} centered onHide={() => setRegister(false)}>
        <Modal.Body className='m-3'>
          {showForgor
            ? <ForgorForm defaultValue={true} />
            : (
              <Form onSubmit={submitRegister}>
                <Row>
                  <Form.Group as={Col} >
                    <Form.Label htmlFor='username' style={{ color: 'black' }}>Username:</Form.Label>
                    <Form.Control required type='text' name='username' />
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label htmlFor='email' style={{ color: 'black' }}>Email:</Form.Label>
                    <Form.Control required type='text' name='email' />
                  </Form.Group>
                </Row>
                <Row className='mt-3'>
                  <Form.Group as={Col} >
                    <Form.Label htmlFor='pfp' style={{ color: 'black' }}>Profile pic:</Form.Label>
                    <Form.Control type='file' name='pfp' />
                  </Form.Group>
                </Row>
                <Row className='mt-4'>
                  <Col md={4} className='mx-auto'>
                    <SubmitButton loading={loadingRegister} type='submit' className='w-100' color='primary'>Register</SubmitButton>
                  </Col>
                </Row>
              </Form>
            )
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default function Header () {
  const router = useRouter()
  const { user } = useUser()

  const queryHeader = gql`
    query {
      config(name: "banner"){
        value
      }
    }
  `

  const { data: headerData } = useQuery(queryHeader)

  return (
    <>
      <header>
        <div id={styles.bannerBg} style={headerData ? { backgroundImage: `url('/_next/image?w=3840&q=100&url=${`https://cdn.sittingonclouds.net/live/${headerData.config.value}.png`}` } : {}}>
          <Container>
            <Row className='h-100'>
              <Col className='my-auto'>
                <Link href="/">
                  <a><Image alt='SOC Logo' src={router.locale === 'es' ? logoES : logo} height={150} width={265} /></a>
                </Link>
              </Col>

              <LangSelector />
              <RegisterProfileButton />
              <LoginButton />
            </Row>
          </Container>
        </div>

        <Navbar expand='sm' bg="dark" variant="dark" className='py-md-0'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto d-flex align-items-center">
                <RegisterProfileButton navMobile />
                <LoginButton navMobile />
                <NavLink href='/' name='Home' />
                <NavLink href='/last-added' name='Last Added_header' placeholder='Last Added'/>
                <NavLink href='/album/list' name='Album List' />
                <Dropdown name='Games' items={[
                  { name: 'Albums', href: '/game' },
                  { name: 'Series', href: '/series/list' },
                  { name: 'Publishers', href: '/publisher/list' },
                  { name: 'Platforms', href: '/platform/list' },
                  { name: 'Game List', href: '/game/list' }
                ]} />
                <Dropdown name='Animation' items={[
                  { name: 'Albums', href: '/anim' },
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
  const t = useTranslation()
  const title = t(name)

  return (
    <NavDropdown title={title} className={classNames(styles.navLink, styles.dropMenu)}>
      {items.map(({ href, name }, i) => (
        <Link key={i} href={href} passHref>
          <NavDropdown.Item>{title}</NavDropdown.Item>
        </Link>
      ))}
    </NavDropdown>
  )
}

function NavLink (props) {
  const { href, name, onClick, className, placeholder } = props
  const t = useTranslation()
  const title = t(name, placeholder)

  return onClick
    ? <a onClick={onClick} className={classNames(styles.navLink, 'nav-link', className)}>{title}</a>
    : (
      <Link href={href} passHref>
        <Nav.Link className={classNames(styles.navLink, className)}>{title}</Nav.Link>
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
      <input ref={ref} onBlur={() => setOpen(false)} onKeyDown={onKeyDownHandler} type='text' style={{ display: open ? 'block' : 'none' }} />
      <i className={`fas fa-${open ? 'times' : 'search'}`} style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)} />
    </div>
  )
}
