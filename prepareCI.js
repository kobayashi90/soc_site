const glob = require('glob')
const { writeJSONSync, readFileSync, appendFileSync, removeSync } = require('fs-extra')
const gitignore = readFileSync('./.gitignore', 'utf-8').replace('/.next/\n', '')

glob.sync('./config/**.example.json').forEach(p => writeJSONSync(p.replace('.example', ''), {}))
removeSync('./.gitignore')
appendFileSync('./.gitignore', gitignore)
