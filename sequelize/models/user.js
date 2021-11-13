const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })

  sequelize.define('forgor', {
    key: { type: DataTypes.STRING, primaryKey: true },
    expires: DataTypes.DATE
  })

  return User
}
