import pages from '@/config/pages.json'

const userResolvable = {
  roles: parent => parent.getRoles(),
  permissions: async parent => {
    const roles = await parent.getRoles()
    return roles.map(r => r.permissions).flat()
  },
  pages: async parent => {
    const roles = await parent.getRoles()
    const permissions = roles.map(r => r.permissions).flat()

    return pages.filter(({ perms, name }) => name && perms.some(r => permissions.includes(r)))
  },
  comments: (parent, _, { db }) => db.models.comment.findAll({ where: { anon: false, username: parent.username } }),
  favorites: user => user.getOsts()
}

const funcs = {
  User: userResolvable,
  UserMe: userResolvable,
  Role: { permissions: parent => typeof parent.permissions === 'string' || parent.permissions instanceof String ? JSON.parse(parent.permissions) : parent.permissions }
}

export default funcs
