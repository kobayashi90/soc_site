import Sequelize from 'sequelize'
// import cls from 'cls-hooked'

import relations from '../sequelize/relations'
import configFile from '../config/sequelize.json'

import animation from '../sequelize/models/animation'
import artist from '../sequelize/models/artist'
import category from '../sequelize/models/category'
import classModel from '../sequelize/models/class'
import config from '../sequelize/models/config'
import disc from '../sequelize/models/disc'
import download from '../sequelize/models/download'
import game from '../sequelize/models/game'
import link from '../sequelize/models/link'
import ost from '../sequelize/models/ost'
import ostHistory from '../sequelize/models/ostHistory'
import platform from '../sequelize/models/platform'
import publisher from '../sequelize/models/publisher'
import role from '../sequelize/models/role'
import series from '../sequelize/models/series'
import store from '../sequelize/models/store'
import user from '../sequelize/models/user'

const db = new Sequelize(configFile[process.env.NODE_ENV])
// Sequelize.useCLS(cls.createNamespace('trans-namespace'))

animation(db)
artist(db)
category(db)
classModel(db)
config(db)
disc(db)
download(db)
game(db)
link(db)
ost(db)
ostHistory(db)
platform(db)
publisher(db)
role(db)
series(db)
store(db)
user(db)
relations(db)

export default db