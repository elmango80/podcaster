import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '../constants'
import { getTopPodcasts } from '../service/podcast'
import { type Podcast } from '../types/podcast.d'

export const usePodcasts = () => {
  const { isLoading, data } = useQuery<Podcast[]>({
    queryKey: [QUERY_KEY.podcasts],
    queryFn: getTopPodcasts
  })

  return { isLoading, podcasts: data ?? [] }
}
