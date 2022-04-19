import { LocaleContext } from 'pages/_app'
import { useContext } from 'react'

import enBundle from '@/locales/en.json'

let en = {}
Object.keys(enBundle).forEach(key => {
  en = { ...en, ...enBundle[key] }
})

export default function useTranslation () {
  const locales = useContext(LocaleContext)
  const t = (key, placeholder) => locales[key] || en[key]

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
