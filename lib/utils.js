import fs from 'fs-extra'
import path from 'path'
import sharp from 'sharp'

import { getPlaiceholder } from '@/lib/plaiceholder/plaiceholder.ts'

const isDev = process.env.NODE_ENV === 'development'

function colorToHex (color) {
  const hexadecimal = color.toString(16)
  return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal
}

function convertRGBtoHex (red, green, blue) {
  return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue)
}

export const getImgColor = async (filePath) => {
  const pathString = path.join('/var/www/soc_img/img', filePath)
  if (!await fs.exists(pathString)) return '#ffffff'

  const { dominant } = await sharp(pathString).stats()
  const { r, g, b } = dominant

  return convertRGBtoHex(r, g, b)
}

export const img = async (streamItem, folder, id) => {
  const { createReadStream } = await streamItem
  const pathString = path.join('/var/www/soc_img/img', folder)
  const fullPath = path.join(pathString, `${id}.png`)

  await fs.ensureDir(pathString)

  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(fullPath)

    createReadStream().pipe(writeStream)
      .on('finish', async () => {
        const result = await getPlaiceholder(fullPath)
        const { base64 } = result

        if (isDev) fs.removeSync(fullPath)
        resolve(base64)
      })
      .on('error', reject)
  })
}

export const createLog = (db, action, data, username) => db.models.log.create({ action, data: JSON.stringify(data), username })
export const createUpdateLog = (db, action, row, username) => createLog(db, action, { old: row._previousDataValues, new: row.dataValues }, username)
