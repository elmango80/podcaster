import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/constants'
import { getTopPodcasts } from 'src/service/podcast'
import { type Podcast } from 'src/types/podcast.d'

export const usePodcasts = () => {
  const { isLoading, data } = useQuery<Podcast[]>({
    queryKey: [QUERY_KEY.podcasts],
    queryFn: getTopPodcasts
  })

  return { isLoading, podcasts: data ?? [] }
}
