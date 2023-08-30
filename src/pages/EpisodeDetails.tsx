import { useParams } from 'react-router-dom'
import PodcastEpisodeDetails from 'src/components/PodcastEpisodeDetails'
import { useEpisodes } from 'src/hooks/useEpisodes'

function EpisodeDetails () {
  const { podcastId, episodeId } = useParams()

  if (podcastId == null || episodeId == null) {
    return null
  }

  const { episodes } = useEpisodes(podcastId)
  const episode = episodes?.find(episode =>
    episode.id === episodeId && episode.podcastId === podcastId
  )

  return (
    <>
      {
        episode != null &&
        <PodcastEpisodeDetails
          title={episode.title}
          summary={episode.summary}
          urlTrack={episode.urlTrack}
        />
      }
    </>
  )
}

export default EpisodeDetails
