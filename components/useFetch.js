import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function useFetch (url, options) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState()

  function handleError (err) {
    setError(err)
    if (process.env.NODE_ENV === 'development') console.log(err)
    toast.error('Failed to fetch server info', { theme: 'dark' })
  }

  function handleRun () {
    fetch(url, options)
      .then(async res => {
        const data = await res.json()

        if (res.ok) setData(data)
        else handleError(data.error)
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  useEffect(handleRun, [options, url])

  return { loading, data, error, refetch: handleRun }
}
