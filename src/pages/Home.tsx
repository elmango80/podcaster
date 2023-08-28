import PodcastCard from '../components/PodcastCard'
import { usePodcasts } from '../hooks/usePodcasts'

function Home () {
  const { podcasts } = usePodcasts()

  return (
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
  )
}

export default Home
