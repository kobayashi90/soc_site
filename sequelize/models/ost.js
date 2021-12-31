import { DataTypes } from 'sequelize'

const model = sequelize =>
  sequelize.define('ost', {
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
    status: { type: DataTypes.STRING, defaultValue: 'show' },
    placeholder: DataTypes.TEXT
  },
  {
    freezeTableName: true
  })

export default model
