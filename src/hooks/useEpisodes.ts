import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/constants'
import { getEpisodes } from 'src/service/api'
import type { Episode, UseEpisodes } from 'src/types/podcast.d'

export const useEpisodes = (podcastId: string): UseEpisodes => {
  const { isLoading, data } = useQuery<Episode[]>({
    queryKey: [QUERY_KEY.episodes, podcastId],
    queryFn: async () => await getEpisodes(podcastId),
  })

  return { isLoading, episodes: data ?? [] }
}
