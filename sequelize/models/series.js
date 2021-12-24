import { DataTypes } from 'sequelize'
const model = sequelize => {
  const Series = sequelize.define('series', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
  )

  return Series
}

export default model
