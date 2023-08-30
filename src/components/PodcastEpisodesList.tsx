import { Link } from 'react-router-dom'
import { EPISODE_PATH } from '../routes/router'
import { type Episode } from '../types/podcast'

interface Props {
  episodes: Episode[]
}

function PodcastEpisodesList ({ episodes }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className='px-4 py-2 border border-gray-200 rounded shadow'>
        <p className='text-2xl font-bold'>{`Episodes: ${episodes.length}`}</p>
      </div>
      <div className="px-6 py-4 border border-gray-200 rounded shadow relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-sm border-b-2">
            <tr>
              <th className="text-left p-2" scope="col">Title</th>
              <th className="text-left p-2" scope="col">Date</th>
              <th className="text-center p-2" scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            {
              episodes.map((episode, index) => {
                return (
                  <tr key={episode.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b-2`}>
                    <td className="text-left p-2 text-sky-600" scope="row">
                      <Link to={`${EPISODE_PATH}${episode.id}`}>
                        {episode.title}
                      </Link>
                    </td>
                    <td className="text-left p-2">{episode.date}</td>
                    <td className="text-center p-2">{episode.duration}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PodcastEpisodesList
