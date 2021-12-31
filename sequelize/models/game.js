import { DataTypes } from 'sequelize'
const model = sequelize => {
  const Game = sequelize.define('game', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING

    },
    releaseDate: DataTypes.DATEONLY,
    placeholder: DataTypes.TEXT
  },
  {
    freezeTableName: true
  })

  return Game
}

export default model
