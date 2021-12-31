import { AuthenticationError, ForbiddenError } from 'apollo-server-errors'
import fs from 'fs-extra'
import path from 'path'

import { withSessionSsr } from './session'
import db from './startDB'
import { getPerms } from './user'

const isDev = process.env.NODE_ENV === 'development'

export const isAuthed = next => (root, args, context, info) => {
  if (!context.user) throw new AuthenticationError()
  return next(root, args, context, info)
}

export const hasPerm = perm => next => async (root, args, context, info) => {
  const roles = await context.user.getRoles()
  const permissions = roles.map(r => r.permissions).flat()
  if (!permissions.includes(perm)) throw new ForbiddenError()

  return next(root, args, context, info)
}

export const hasRole = role => [isAuthed, hasPerm(role)]
export const hasRolePage = allowedRoles => withSessionSsr(async (context) => {
  const { req } = context
  const { username } = req.session
  const user = username ? await db.models.user.findByPk(username) : null
  const perms = await getPerms(user)

  if (!perms.some(p => allowedRoles.includes(p))) return { redirect: { destination: '/404', permanent: false } }
  return { props: {} }
})

export const img = async (streamItem, folder, id) => {
  const { createReadStream } = await streamItem
  const pathString = path.join('/var/www/soc_img/img', folder)
  const fullPath = path.join(pathString, `${id}.png`)

  await fs.ensureDir(pathString)

  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(fullPath)

    createReadStream().pipe(writeStream)
      .on('finish', () => {
        if (isDev) fs.removeSync(fullPath)
        resolve()
      })
      .on('error', reject)
  })
}

export const createLog = (db, action, data, username) => db.models.log.create({ action, data: JSON.stringify(data), username })
export const createUpdateLog = (db, action, row, username) => createLog(db, action, { old: row._previousDataValues, new: row.dataValues }, username)
