import { DataTypes } from 'sequelize'
const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVQImWN4fGrVhZ0z/v+5zZAc5yfOwGCtrsbg4em/f7ZvZ7w2Q15Vi6e1iggPAwBwDg7L//0+xAAAAABJRU5ErkJggg=='

const animation = sequelize => {
  sequelize.define('animation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: { type: DataTypes.STRING, unique: true },
    subTitle: { type: DataTypes.STRING },
    releaseDate: DataTypes.DATEONLY,
    placeholder: { type: DataTypes.TEXT, defaultValue: PLACEHOLDER },
    headerColor: { type: DataTypes.STRING, defaultValue: '#ffffff' }
  }, { freezeTableName: true })

  sequelize.define('studio', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, { freezeTableName: true })
}

export default animation
