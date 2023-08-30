import { useParams } from 'react-router-dom'
import PodcastEpisodesList from 'src/components/PodcastEpisodesList'
import StatusNotification from 'src/components/StatusNotification'
import { useEpisodes } from 'src/hooks/useEpisodes'

function EpisodesList () {
  const { podcastId } = useParams()

  if (podcastId == null) {
    return null
  }

  const { isLoading, episodes } = useEpisodes(podcastId)

  return (
    <>
      {
        isLoading &&
        <div className="flex items-center justify-center min-h-full">
          <StatusNotification />
        </div>
      }
      {
        !isLoading && episodes != null &&
          <PodcastEpisodesList episodes={episodes}/> }
    </>
  )
}

export default EpisodesList
