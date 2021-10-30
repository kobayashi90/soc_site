import useSWR from 'swr'

export const getImageUrl = (id, type = 'album') => process.env.NODE_ENV === 'development' ? `/img/${type}/default.png` : `https://beta.sittingonclouds.net/live/${type}/${id}.png`
export const skipAds = user => user?.isLoggedIn && user.permissions.includes('SKIP_ADS')
export function useQuery (options) {
  const { data, error } = useSWR('/api/query', () => {})

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
