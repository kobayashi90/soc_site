import { useRef, createRef, useMemo, useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { Button, Col, Row, Container, Table, Form, Modal, ModalBody, InputGroup, FormControl } from 'react-bootstrap'
import { toast } from 'react-toastify'
import serialize from 'form-serialize'

import { SimpleSelector } from '../../components/Selectors'
import Loader from '../../components/Loader'
import { hasRolePage } from '../../lib/util'

export const getServerSideProps = hasRolePage(['MANAGE_USER'])

export default function AdminUser () {
  const { loading, data, refetch } = useQuery(gql`
    query users($username: String!){
      users(username: $username){
        username
        roles {
          name
        }
      }

      roles {
        name
        permissions
      }

      permissions
    }
  `, { variables: { username: '' } })

  const [create] = useMutation(gql`
  mutation CreateUser($email: String!, $username: String!, $roles: [String]!){
    createUser(email: $email, username: $username, roles: $roles){
      email
      username
      password
    }
  }
  `)
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState({})
  const { email, username, pass } = modalData

  if (loading) return <Loader />

  function handleSearch (e) {
    e.persist()
    e.preventDefault()
    const username = e.target.value

    if (username.length < 3) return
    refetch({ username })
  }

  function handleCreate (e) {
    e.persist()
    e.preventDefault()
    const variables = serialize(e.target, { hash: true })
    if (!variables.roles) variables.roles = []

    create({ variables }).then(results => {
      const { email, username, password } = results.data.createUser
      e.target.reset()

      setModalData({ email, username, pass: password })
      setModal(!modal)
    })
  }

  return (
    <Container>
      <Modal centered isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalBody className='m-3' style={{ color: 'black' }}>
          <Row><Col>{email} - {username} - {pass}\nSave the password before closing this window.</Col></Row>
        </ModalBody>
      </Modal>

      <Row className='site-form blackblock mt-3'>
        <Col>
          <Row>
            <Col>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Text>&#128270;</InputGroup.Text>
                  <FormControl onChange={handleSearch} />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col>
              <Table variant='dark' hover >
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Roles</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {data.users.map(props => (
                    <UserRow key={props.username} {...props} roleList={data.roles} setModal={setModal} setModalData={setModalData} modal={modal} />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className='site-form blackblock mt-3'>
        <Col>
          <Table variant='dark' hover >
            <thead>
              <tr>
                <th>Role</th>
                {data.permissions.map((p, i) => <th key={i}>{p}</th>)}
                <th />
              </tr>
            </thead>
            <tbody>
              {data.roles.map(props => (
                <RoleRow key={props.name} {...props} permissionList={data.permissions} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <AddRole />

      <Form className='site-form blackblock mt-3' onSubmit={handleCreate}>
        <Row form>
          <Col>
            <Form.Group>
              <Form.Label for='username'>Username:</Form.Label>
              <FormControl required type='text' name='username' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label for='email'>Email:</Form.Label>
              <FormControl required type='text' name='email' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label for='roles'>Roles:</Form.Label>
              <SimpleSelector
                defaultValue={[]}
                options={data.roles.map(({ name }) => ({ label: name, value: name }))}
                isMulti name='roles'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row form>
          <Col className='m-auto'>
            <Button type='submit' color='primary'>Add User</Button>
          </Col>
        </Row>
      </Form>

    </Container>
  )
}

function UserRow ({ username, email, roles, roleList, setModal, setModalData, modal }) {
  const permissionsRef = useRef(null)
  const [update] = useMutation(gql`
  mutation UpdateUser($key:String!, $email: String!, $username: String!, $roles: [String]!){
    updateUser(key:$key, email: $email, username: $username, roles: $roles){
      email
    }
  }
  `)
  const [remove, { removeLoading }] = useMutation(gql`
  mutation DeleteUser($username: String!){
    deleteUser(username: $username)
  }
  `)
  const [passMutation] = useMutation(gql`
  mutation PassUser($username: String!){
    passUser(username: $username)
  }
  `)

  const [deleteModal, setDeleteModal] = useState(false)

  const handleUpdate = perms => {
    update({
      variables: {
        key: username,
        username,
        email,
        roles: permissionsRef.current.state.value.map(e => e.value)
      }
    }).then(results => {
      toast.success('Updated user succesfully!')
    }).catch(err => {
      console.log(err)
      toast.error(err.message, { autoclose: false })
    })
  }

  function handleDelete () {
    remove({ variables: { username } }).then(results => {
      toast.success(`Deleted OST "${username}" (${email}) succesfully`)
    }).catch(err => {
      console.log(err)
      toast.error(`Failed to delete OST "${username}" (${email})`)
    }).finally(() => setDeleteModal(!deleteModal))
  }

  const handlePassword = () => {
    passMutation({ variables: { username } }).then(results => {
      setModalData({ email, username, pass: results.data.passUser })
      setModal(!modal)
    })
  }

  return (
    <>
      <Modal centered isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)}>
        <ModalBody className='m-3' style={{ color: 'black' }}>
          <Row><Col>{`Delete user "${username}" (${email})?`}</Col></Row>
          <Row className='mt-2'>
            <Col>
              <Button color='primary' className='mx-2' onClick={handleDelete}>{removeLoading ? <Loader dev /> : 'Yes'}</Button>
              <Button color='primary' className='mx-2' onClick={() => setDeleteModal(!deleteModal)}>No</Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>

      <tr>
        <td>{username}</td>
        <td>
          <SimpleSelector
            ref={permissionsRef}
            onChange={e => handleUpdate(e)}
            defaultValue={roles.map(({ name }) => ({ label: name, value: name }))}
            options={roleList.map(({ name }) => ({ label: name, value: name }))}
            isMulti
          />
        </td>
        <td>
          <Button className='mr-2' disabled onClick={handlePassword}>Regenerate Password</Button>
          <Button className='mr-2' onClick={() => setDeleteModal(!deleteModal)}>Remove</Button>
        </td>
      </tr>
    </>
  )
}

function RoleRow ({ name, permissions, permissionList }) {
  const nameRef = useRef(null)
  const permRefs = useMemo(() => Array(permissionList.length).fill().map(() => createRef()), [permissionList])

  const [deleteRole] = useMutation(gql`
  mutation DeleteRole($name:String!){
    deleteRole(name: $name)
  }
  `)

  const [updateRole] = useMutation(gql`
  mutation UpdateRole($key: String!, $name:String!, $permissions:[String]!){
    updateRole(key: $key, name: $name, permissions: $permissions){
      name
    }
  }
  `)

  function handleDelete () {
    deleteRole({ variables: { name } }).then(results => {
      toast.success(`Removed "${name}" role succesfully!`)
    }).catch(err => {
      console.log(err)
      toast.error(err.message, { autoclose: false })
    })
  }

  function handleUpdate () {
    const permissions = []
    permRefs.forEach((p, i) => {
      if (p.current.checked) permissions.push(permissionList[i])
    })

    updateRole({ variables: { key: name, name: nameRef.current.value, permissions } }).then(results => {
      toast.success(`Updated "${name}" role succesfully!`)
    }).catch(err => {
      console.log(err)
      toast.error(err.message, { autoclose: false })
    })
  }

  return (
    <tr>
      <td><input style={{ width: '100%' }} ref={nameRef} type='text' className='m-auto' defaultValue={name} /></td>
      {permissionList.map((p, i) => (
        <td key={p}>
          <input ref={permRefs[i]} type='checkbox' className='m-auto' defaultChecked={permissions.includes(p)} />
        </td>
      ))}
      <td>
        <Button className='mr-2' onClick={handleUpdate}>Save</Button>
        <Button onClick={handleDelete}>Remove</Button>
      </td>
    </tr>
  )
}

function AddRole () {
  const [create] = useMutation(gql`
  mutation CreateRole($name:String!, $permissions: [String]!){
    createRole(name: $name, permissions: $permissions) {
      name
    }
  }
  `)

  function handleSubmitForm (e) {
    e.preventDefault()
    e.persist()
    const variables = serialize(e.target, { hash: true })
    variables.permissions = []

    create({ variables }).then(results => {
      toast.success(`Added "${e.target.elements.name.value}" role succesfully!`)
      e.target.reset()
    }).catch(err => {
      console.log(err)
      toast.error(err.message, { autoclose: false })
    })
  }

  return (
    <div className='site-form blackblock mt-3 p-3'>
      <Form onSubmit={handleSubmitForm}>
        <Row form>
          <Col>
            <Form.Group>
              <Form.Label for='name'>Name:</Form.Label>
              <FormControl type='text' name='name' required />
            </Form.Group>
          </Col>
          <Col className='mb-3 mt-auto'>
            <Button type='submit' color='primary'>Add Role</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
