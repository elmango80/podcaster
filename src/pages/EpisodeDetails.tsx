import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import PodcastEpisodeDetails from 'src/components/PodcastEpisodeDetails'
import { useEpisodes } from 'src/hooks/useEpisodes'
import { usePodcasterContext } from 'src/hooks/usePodcaster'
import { NOT_FOUND_PATH } from 'src/routes/router'

function EpisodeDetails() {
  const { podcastId = '', episodeId = '' } = useParams()
  const { state, dispatch } = usePodcasterContext()
  const { isLoading, episodes } = useEpisodes(podcastId)

  const episode = episodes?.find(
    (episode) => episode.id === episodeId && episode.podcastId === podcastId
  )

  useEffect(() => {
    if (state.isLoading && !isLoading && episodes.length > 0) {
      dispatch({ type: 'END_LOADING_PAGE' })
    }
  }, [isLoading, episodes, state.isLoading])

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
