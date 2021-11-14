const glob = require('glob')
const { writeJSONSync, readFileSync, appendFileSync } = require('fs-extra')

glob.sync('./config/**.example.json').forEach(p => writeJSONSync(p.replace('.example', ''), {}))
appendFileSync('./.gitignore', readFileSync('./.gitignore', 'utf-8').replace('/.next/\n', ''))
