import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '../constants'
import { getEpisodes } from '../service/podcast'
import type { Episode } from '../types/podcast.d'

export const useEpisodes = (podcastId: string) => {
  const { isLoading, data } = useQuery<Episode[]>({
    queryKey: [QUERY_KEY.episodes, podcastId],
    queryFn: async () => await getEpisodes(podcastId)
  })

  const episodes = data?.map(ele => {
    return ({
      ...ele,
      date: new Date(ele.date).toLocaleDateString(),
      duration: new Date(Number(ele.duration ?? 0) * 1000).toISOString().slice(11, -8)
    })
  })

  return {
    isLoading,
    episodes
  }
}
