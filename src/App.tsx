import PodcastCard from './components/PodcastCard'
import { usePodcasts } from './hooks/usePodcasts'

function App () {
  const { podcasts } = usePodcasts()

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
