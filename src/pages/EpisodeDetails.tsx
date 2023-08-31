import { Navigate, useParams } from 'react-router-dom'
import PodcastEpisodeDetails from 'src/components/PodcastEpisodeDetails'
import { useEpisodes } from 'src/hooks/useEpisodes'
import { NOT_FOUND_PATH } from 'src/routes/router'

function EpisodeDetails() {
  const { podcastId, episodeId } = useParams()

  if (podcastId == null || episodeId == null) {
    return null
  }

  const { isLoading, episodes } = useEpisodes(podcastId)
  const episode = episodes?.find(
    (episode) => episode.id === episodeId && episode.podcastId === podcastId
  )

  if (!isLoading && episode == null) {
    return <Navigate to={NOT_FOUND_PATH} replace />
  }

  return (
    <>
      {!isLoading && episode != null && (
        <PodcastEpisodeDetails
          title={episode.title}
          summary={episode.summary}
          urlTrack={episode.urlTrack}
        />
      )}
    </>
  )
}

export default EpisodeDetails
