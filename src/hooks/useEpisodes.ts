import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from 'src/constants'
import { getEpisodes } from 'src/service/podcast'
import type { Episode, UseEpisodes } from 'src/types/podcast.d'

export const useEpisodes = (podcastId: string): UseEpisodes => {
  const { isLoading, data } = useQuery<Episode[]>({
    queryKey: [QUERY_KEY.episodes, podcastId],
    queryFn: async () => await getEpisodes(podcastId),
  })

  const episodes = data?.map((ele: any): Episode => {
    return {
      ...ele,
      id: ele.id.toString(),
      podcastId: ele.podcastId.toString(),
      date: new Date(ele.date).toLocaleDateString(),
      duration: new Date(Number(ele.duration ?? 0) * 1000)
        .toISOString()
        .slice(11, -8),
    }
  })

  return {
    isLoading,
    episodes: episodes as Episode[],
  }
}
