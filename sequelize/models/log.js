const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  return sequelize.define('log', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    action: DataTypes.STRING,
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })
}
