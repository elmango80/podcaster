import { getFetch } from './fetcher'

const API_URL_TOP_PODCASTS =
'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

export const getTopPodcasts = async () => {
  const response = await getFetch({ url: API_URL_TOP_PODCASTS })
  const result = response?.feed?.entry.map((ele: any) => {
    return {
      id: ele.id.attributes['im:id'],
      author: ele['im:artist'].label,
      urlImage: ele['im:image'][2].label,
      name: ele['im:name'].label
    }
  })

  return result
}
