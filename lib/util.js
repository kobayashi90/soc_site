import withSession from './session'
import db from './startDB'
import { getPerms } from './user'
import { AuthenticationError, ForbiddenError } from 'apollo-server-errors'

export const isAuthed = next => (root, args, context, info) => {
  if (!context.user) throw new AuthenticationError()
  return next(root, args, context, info)
}

const hasPerm = perm => next => async (root, args, context, info) => {
  const roles = await context.user.getRoles()
  const permissions = roles.map(r => r.permissions).flat()
  if (!permissions.includes(perm)) throw new ForbiddenError()

  return next(root, args, context, info)
}

export const hasRole = role => [isAuthed, hasPerm(role)]
export const hasRolePage = allowedRoles => withSession(async (context) => {
  const { req } = context
  const username = req.session.get('username')
  const user = username ? await db.models.user.findByPk(username) : null
  const perms = await getPerms(user)

  if (!perms.some(p => allowedRoles.includes(p))) return { redirect: { destination: '/404', permanent: false } }
  return { props: {} }
})
