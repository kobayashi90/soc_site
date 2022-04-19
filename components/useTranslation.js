import { LocaleContext } from 'pages/_app'
import { useContext } from 'react'

export default function useTranslation () {
  const locales = useContext(LocaleContext)
  const t = (key, placeholder) => locales[key] || placeholder || key

  return t
}

export async function getTranslation (locale = 'en', ns = []) {
  let tl = {}
  const keys = ['common', ...ns]
  const bundle = await import(`../locales/${locale}.json`)

  keys.forEach(key => {
    tl = { ...tl, ...bundle[key] }
  })

  return tl
}
