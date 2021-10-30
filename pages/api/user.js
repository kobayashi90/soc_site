import withSession from '../../components/session'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  res.json(!user ? { isLoggedIn: false } : { isLoggedIn: true, ...user })
})
