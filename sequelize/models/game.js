import { DataTypes } from 'sequelize'
const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVQImWN4fGrVhZ0z/v+5zZAc5yfOwGCtrsbg4em/f7ZvZ7w2Q15Vi6e1iggPAwBwDg7L//0+xAAAAABJRU5ErkJggg=='

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
    placeholder: { type: DataTypes.TEXT, defaultValue: PLACEHOLDER },
    headerColor: { type: DataTypes.STRING, defaultValue: '#ffffff' }
  },
  {
    freezeTableName: true
  })

  return Game
}

export default model
