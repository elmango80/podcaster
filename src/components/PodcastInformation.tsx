import { Link } from 'react-router-dom'

interface Props {
  author: string
  summary: string
  imageUrl: string
  name: string
}

function PodcastInformation ({ author, summary, imageUrl, name }: Props) {
  return (
    <article className=" bg-white border border-gray-200 rounded shadow px-2 py-4">
      <div className="flex flex-col px-4 divide-y-2 divide-gray-100">
        <header className="flex justify-center pb-4">
          <Link to="">
            <img
              className="shadow rounded-md w-32 h-32"
              src={imageUrl}
              alt={name}
              width={128}
              height={128}
            />
          </Link>
        </header>
        <main className="py-4">
          <Link to="">
            <h3 className="text-sm font-bold">{name}</h3>
            <h4 className="text-xs italic">{`by ${author}`}</h4>
          </Link>
        </main>
        <footer className="pt-4">
          <label className="text-xs font-semibold">Description:</label>
          <p className="text-xs italic overflow-hidden text-ellipsis">{summary}</p>
        </footer>
      </div>
    </article>
  )
}

export default PodcastInformation
