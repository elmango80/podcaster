const API_URL_TOP_PODCASTS =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

export const getTopPodcasts = async () => {
  const response = await fetch(API_URL_TOP_PODCASTS)

  if (!response.ok) {
    throw new Error('Failed to fetch top podcasts.')
  }

  const json = await response.json()

  const result = json?.feed.entry.map((ele: any) => {
    return {
      id: ele.id.attributes['im:id'],
      author: ele['im:artist'].label,
      urlImage: ele['im:image'][2].label,
      name: ele['im:name'].label
    }
  })

  return result
}
