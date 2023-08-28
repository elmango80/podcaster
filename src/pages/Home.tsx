import { useMemo, useState } from 'react'
import PodcastCard from '../components/PodcastCard'
import { usePodcasts } from '../hooks/usePodcasts'

function Home () {
  const [filterCriteria, setFilterCriteria] = useState<string | null>(null)
  const { podcasts } = usePodcasts()

  const filteredPodcasts = useMemo(() => {
    return filterCriteria != null && filterCriteria.length > 0
      ? podcasts.filter(podcast => {
        return podcast.name.toLowerCase().includes(filterCriteria.toLowerCase()) === true ||
          podcast.author.toLowerCase().includes(filterCriteria.toLowerCase()) === true
      })
      : podcasts
  }, [podcasts, filterCriteria])

  return (
  <div className="flex flex-col gap-8">
    <section aria-label="Actions on the listing">
      <div className="flex flex-row items-center justify-end gap-4">
        <span className="bg-sky-600 text-white text-md text-center font-medium px-2.5 py-0.5 rounded-lg w-12">
          {filteredPodcasts.length}
        </span>
        <input
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-80 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          type="text"
          placeholder='Filtrar podcasts'
          onChange={(e) => { setFilterCriteria(e.target.value) }}
        />
      </div>
    </section>
    <section aria-label="Top podcasts list">
      <ul className="grid grid-cols-4 gap-x-4 gap-y-24">
        { filteredPodcasts.map(podcast => (
          <li key={podcast.id}>
            <PodcastCard
              name={podcast.name}
              author={podcast.author}
              imageUrl={podcast.urlImage}
            />
          </li>
        ))}
      </ul>
    </section>
  </div>
  )
}

export default Home
