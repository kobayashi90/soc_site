import withSession, { getUser } from '../../lib/session'

export default withSession(async (req, res) => {
  const user = await getUser(req)
  res.json(!user ? { isLoggedIn: false } : { isLoggedIn: true, ...user })
})
