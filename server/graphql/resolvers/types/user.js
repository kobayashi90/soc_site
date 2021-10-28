const pagePerms = require('../../../config/pagePerms.json')

const userResolvable = {
  roles: parent => parent.getRoles(),
  permissions: async parent => {
    const roles = await parent.getRoles()
    return roles.map(r => r.permissions).flat()
  },
  pages: async parent => {
    const roles = await parent.getRoles()
    const permissions = roles.map(r => r.permissions).flat()

    return pagePerms.filter(({ perms, name }) => name && perms.some(r => permissions.includes(r)))
  }
}

module.exports = {
  User: userResolvable,
  UserPublic: userResolvable,
  Role: { permissions: parent => typeof parent.permissions === 'string' || parent.permissions instanceof String ? JSON.parse(parent.permissions) : parent.permissions }
}
