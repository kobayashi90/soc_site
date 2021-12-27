import { DataTypes } from 'sequelize'

const model = sequelize => {
  const Ost = sequelize.define('ost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    subTitle: DataTypes.TEXT,
    releaseDate: DataTypes.DATEONLY,
    label: DataTypes.STRING,
    vgmdb: DataTypes.STRING,
    description: DataTypes.STRING,
    status: { type: DataTypes.STRING, defaultValue: 'show' }
  },
  {
    freezeTableName: true
  })

  sequelize.define('pending', { id: { primaryKey: true, type: DataTypes.INTEGER } })

  return Ost
}

export default model
