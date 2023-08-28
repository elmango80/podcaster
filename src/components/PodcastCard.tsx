import { Link } from 'react-router-dom'
import { DETAIL_PATH } from '../routes/router'

interface Props {
  id: string
  name: string
  author: string
  imageUrl: string
}

function PodcastCard ({ id, name, author, imageUrl }: Props) {
  return (
    <Link to={`${DETAIL_PATH}${id}`}>
      <div className="p-4 border bg-white border-gray-200 rounded shadow mt-10 relative">
          <div className="flex flex-col items-center text-center pt-12">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow absolute -top-10"
                src={imageUrl}
                alt={name}
                width="96"
                height="96"
              />
              <h5 className="mb-1 text-md font-medium text-gray-900">{name}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {`Author: ${author}`}
              </span>
          </div>
      </div>
    </Link>
  )
}

export default PodcastCard
