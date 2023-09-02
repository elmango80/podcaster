import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import PodcastEpisodesList from 'src/components/PodcastEpisodesList'
import { useEpisodes } from 'src/hooks/useEpisodes'
import { usePodcasterContext } from 'src/hooks/usePodcaster'
import { NOT_FOUND_PATH } from 'src/routes/router'

function EpisodesList() {
  const { podcastId = '' } = useParams()
  const { state, dispatch } = usePodcasterContext()
  const { isLoading, episodes } = useEpisodes(podcastId)

  useEffect(() => {
    if (state.isLoading && !isLoading && episodes.length > 0) {
      dispatch({ type: 'END_LOADING_PAGE' })
    }
  }, [isLoading, episodes, state.isLoading])

  if (!isLoading && episodes == null) {
    return <Navigate to={NOT_FOUND_PATH} replace />
  }

  return (
    <>
      {!isLoading && episodes != null && (
        <PodcastEpisodesList episodes={episodes} />
      )}
    </>
  )
}

export default EpisodesList
