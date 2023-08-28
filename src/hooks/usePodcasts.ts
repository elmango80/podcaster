import { useQuery } from '@tanstack/react-query'
import { getTopPodcasts } from '../service/podcast'
import { type Podcast } from '../types/podcast.d'

export const usePodcasts = () => {
  const { isLoading, isError, data } = useQuery<Podcast[]>({
    queryKey: ['top-podcasts'],
    queryFn: getTopPodcasts
  })

  return { isLoading, isError, podcasts: data ?? [] }
}
