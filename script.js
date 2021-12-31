require('dotenv').config()

const Queue = require('promise-queue')
const Sequelize = require('sequelize')
const { getPlaiceholder } = require('plaiceholder')

const { DataTypes } = Sequelize
const queue = new Queue(1, Infinity)

const db = new Sequelize(JSON.parse(process.env.SEQUELIZE))
db.define('ost', {
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

db.models.ost.findAll()
  .then(albums => {
    albums.forEach(album =>
      queue.add(() => {
        console.log({ length: queue.getQueueLength() })
        return getPlaiceholder(`/var/www/soc_img/img/album/${album.id}.png`).then(async result => {
          const { base64 } = result
          album.placeholder = base64
          return album.save()
        })
      })
    )
  })
