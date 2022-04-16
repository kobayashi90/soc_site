import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import bundle from '@/locales/index.json'

export default function useTranslation (ns = ['common']) {
  const router = useRouter()
  const { locale } = router
  const [t, setT] = useState({})

  useEffect(() => {
    setT(bundle[locale].common)
  }, [locale])

  return t
}
