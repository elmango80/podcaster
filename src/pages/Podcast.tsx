import { Outlet, useParams } from 'react-router-dom'
import PodcastInformation from '../components/PodcastInformation'
import { usePodcasts } from '../hooks/usePodcasts'

function Podcast () {
  const { podcastId } = useParams()

  if (podcastId == null) {
    return null
  }

  const { podcasts } = usePodcasts()
  const podcast = podcasts.find(podcast => podcast.id === podcastId)

  return (
    <div className="flex flex-row gap-20">
      <section className='w-80' aria-label="Podcast details">
        { podcast != null &&
          <PodcastInformation
            name={podcast.name}
            author={podcast.author}
            imageUrl={podcast.urlImage}
            description={podcast.description}
          />
        }
      </section>
      <Outlet/>
    </div>
  )
}

export default Podcast
