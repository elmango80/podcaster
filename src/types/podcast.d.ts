export interface Podcast {
  author: string
  description: string
  id: string
  name: string
  urlImage: string
}

export interface Episode {
  date: string
  description: string
  duration: string
  id: number
  podcastId: number
  title: string
  url: string
}
