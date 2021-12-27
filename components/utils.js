import slugifyFn from 'slugify'

function isString (obj) {
  return (Object.prototype.toString.call(obj) === '[object String]')
}

export const getImageUrl = (id, type = 'album') => process.env.NODE_ENV === 'development' ? `/img/${type}/default.png` : `https://beta.sittingonclouds.net/${type}/${id}.png`
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
export function toArray (obj) {
  if (isString(obj)) return [obj]
  else return obj
}
