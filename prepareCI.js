const { copyFileSync } = require('fs-extra')
copyFileSync('./.gitignore_build', './.next/standalone/.gitignore')
