import { useParams } from 'react-router-dom'
import PodcastEpisodesList from '../components/PodcastEpisodesList'
import PodcastInformation from '../components/PodcastInformation'
import { useEpisodes } from '../hooks/useEpisodes'
import { usePodcasts } from '../hooks/usePodcasts'

function Podcast () {
  const { podcastId } = useParams()

  if (podcastId == null) {
    return null
  }

  const { episodes } = useEpisodes(podcastId)
  const { podcasts } = usePodcasts()
  const podcast = podcasts.find(podcast => podcast.id === podcastId)

  return (
    <div className="flex flex-row gap-20">
      <section className='w-1/4' aria-label="Podcast details">
        { podcast != null &&
          <PodcastInformation
            name={podcast.name}
            author={podcast.author}
            imageUrl={podcast.urlImage}
            description={podcast.description}
          />
        }
      </section>
      <section className="grow" aria-label='Podcast episodes list'>
        { episodes != null && <PodcastEpisodesList episodes={episodes}/> }
      </section>
    </div>
  )
}

export default Podcast
