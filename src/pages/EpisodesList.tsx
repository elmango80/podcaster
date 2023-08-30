import { useParams } from 'react-router-dom'
import PodcastEpisodesList from '../components/PodcastEpisodesList'
import { useEpisodes } from '../hooks/useEpisodes'

function EpisodesList () {
  const { podcastId } = useParams()

  if (podcastId == null) {
    return null
  }

  const { episodes } = useEpisodes(podcastId)

  return (
    <section className="grow" aria-label='Podcast episodes list'>
      { episodes != null && <PodcastEpisodesList episodes={episodes}/> }
    </section>
  )
}

export default EpisodesList
