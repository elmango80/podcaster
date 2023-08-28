import { useEffect, useState } from 'react'
import PodcastCard from './components/PodcastCard'
import { getTopPodcasts } from './service/podcast'
import { type Podcast } from './types/podcast.d'

function App () {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])

  useEffect(() => {
    void getTopPodcasts()
      .then(res => { setPodcasts(res) })
      .catch((err) => { console.error(err) })
  }, [])

  return (
    <div className="min-h-screen flex flex-col gap-4">
      <h1 className="text-xl font-bold text-sky-600">
        Podcaster
      </h1>
      <div className="grid grid-cols-4 gap-x-4 gap-y-24">
        { podcasts.map(podcast => (
          <article key={podcast.id}>
            <PodcastCard
              name={podcast.name}
              author={podcast.author}
              imageUrl={podcast.urlImage}
            />
          </article>
        ))}
      </div>
    </div>
  )
}

export default App
