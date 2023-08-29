import type { Episode, Podcast } from '../types/podcast.d'
import { getFetch } from './fetcher'

const API_URL_TOP_PODCASTS =
'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

const API_URL_PODCASTS_DETAILS =
  'https://itunes.apple.com/lookup?media=podcast&entity=podcastEpisode&id='

export const getTopPodcasts = async (): Promise<Podcast[]> => {
  const response = await getFetch({ url: API_URL_TOP_PODCASTS })
  const result: Podcast[] = response?.feed?.entry.map((ele: any): Podcast => {
    return {
      id: ele.id.attributes['im:id'],
      author: ele['im:artist'].label,
      urlImage: ele['im:image'][2].label,
      name: ele['im:name'].label,
      description: ele.summary.label
    }
  })

  return result
}

export const getEpisodes = async (podcastId: string): Promise<Episode[]> => {
  const response = await getFetch({ url: `${API_URL_PODCASTS_DETAILS}${podcastId}` })
  const result: Episode[] = response.results
    .map((ele: any): Episode => {
      return {
        id: ele.trackId,
        title: ele.trackName,
        date: ele.releaseDate,
        duration: ele.trackTimeMillis,
        url: ele.episodeUrl,
        description: ele.description,
        podcastId: 0
      }
    })

  return result
}
