const { copyFileSync, removeSync } = require('fs-extra')
removeSync('./.gitignore')
copyFileSync('./.gitignore_build', './.gitignore')
