import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useUser () {
  const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher)
  return { user, mutateUser }
}
