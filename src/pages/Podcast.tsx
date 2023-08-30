import { Navigate, Outlet, useParams } from 'react-router-dom'
import PodcastInformation from 'src/components/PodcastInformation'
import { usePodcasts } from 'src/hooks/usePodcasts'
import { NOT_FOUND_PATH } from 'src/routes/router'

function Podcast () {
  const { podcastId } = useParams()

  if (podcastId == null) {
    return null
  }

  const { isLoading, podcasts } = usePodcasts()
  const podcast = podcasts.find(podcast => podcast.id === podcastId)

  if (!isLoading && podcast == null) {
    return (<Navigate to={NOT_FOUND_PATH} replace />)
  }

  return (
    <div className="grid grid-cols-[250px_minmax(640px,_1fr)] gap-20">
      <section aria-label="Podcast details">
        { podcast != null &&
          <PodcastInformation
            name={podcast.name}
            author={podcast.author}
            imageUrl={podcast.urlImage}
            summary={podcast.summary}
          />
        }
      </section>
      <section aria-label='Podcast episodes'>
        <Outlet />
      </section>
    </div>
  )
}

export default Podcast
