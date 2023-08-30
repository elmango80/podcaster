export interface Podcast {
  author: string
  summary: string
  id: string
  name: string
  urlImage: string
}

export interface Episode {
  date: string
  summary: string
  duration: string
  id: string
  podcastId: string
  title: string
  urlTrack: string
}
