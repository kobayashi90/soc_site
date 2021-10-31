import { withIronSession } from 'next-iron-session'

const withSession = (handler) =>
  withIronSession(handler, {
    password: process.env.IRONCLAD,
    cookieName: 'socuser',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production'
    }
  })

export default withSession
