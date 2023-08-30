import { useParams } from 'react-router-dom'
import PodcastEpisodesList from 'src/components/PodcastEpisodesList'
import { useEpisodes } from 'src/hooks/useEpisodes'

function EpisodesList () {
  const { podcastId } = useParams()

  if (podcastId == null) {
    return null
  }

  const { episodes } = useEpisodes(podcastId)

  return (
    <>
      { episodes != null && <PodcastEpisodesList episodes={episodes}/> }
    </>
  )
}

export default EpisodesList
