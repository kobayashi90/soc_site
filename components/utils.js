import slugifyFn from 'slugify'
import serialize from 'form-serialize'

function isString (obj) {
  return (Object.prototype.toString.call(obj) === '[object String]')
}

export const getImageUrl = (id, type = 'album') => `https://cdn.sittingonclouds.net/${type}/${id}.png`
export const skipAds = user => user && user.permissions.includes('SKIP_ADS')
export const getFullPageList = (count, limit) => [...Array(Math.ceil(count / limit))].map((v, i) => i + 1)
export const getPageList = (fullPageList, pageLimit, page) => {
  const pageList = [[]]

  fullPageList.forEach(n => {
    pageList[pageList.length - 1].push(n)
    if (n % pageLimit === 0) pageList.push([])
  })

  const currentListIndex = pageList.findIndex(l => l.includes(parseInt(page)))
  const currentList = pageList[currentListIndex]

  return { pageList, currentList, currentListIndex }
}

export function clearKeys (keys, baseIds) {
  const remove = keys.reduce((acum, key) => {
    const values = baseIds.map(baseId => document.getElementById(`${baseId}${key}`).value)
    if (values.every(value => !value)) acum.push(key)
    return acum
  }, [])

  return keys.filter(k => !remove.includes(k))
}

export const slugify = text => slugifyFn(text, { lower: true, strict: true })
function toArray (obj) {
  if (isString(obj)) return [obj]
  else return obj
}

export const prepareForm = e => {
  const data = serialize(e.target, { hash: true })
  data.platforms = toArray(data.platforms)
  data.games = toArray(data.games)
  data.animations = toArray(data.animations)
  data.categories = toArray(data.categories)
  data.classes = toArray(data.classes)
  data.releaseDate = new Date(data.releaseDate).toISOString().substring(0, 10)

  if (data.artists) data.artists = data.artists.split(',').map(e => e.trim())

  data.discs = data.discs.map((d, i) => {
    const payload = d
    payload.number = i
    return payload
  })
  if (data.downloads) data.downloads.forEach(link => { link.small = link.small === 'on' })
  if (e.target.elements.cover.files[0] !== undefined) data.cover = e.target.elements.cover.files[0]

  return data
}

const utils = {
  slugify
}

export default utils
