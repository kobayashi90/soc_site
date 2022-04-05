import { DataTypes } from 'sequelize'

const model = sequelize => {
  sequelize.define('comment', {
    text: DataTypes.STRING(300),
    anon: DataTypes.BOOLEAN
  })

  sequelize.define('favorite', {})
}

export default model
