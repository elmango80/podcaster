interface Props {
  title: string
  summary: string
  urlTrack: string
}

function PodcastEpisodeDetails ({ title, summary, urlTrack }: Props) {
  return (
  <div className="flex flex-col gap-2 py-6 px-4 border border-gray-200 rounded shadow">
    <header>
      <h2 className="text-2xl font-bold">{title}</h2>
    </header>
    <main className="flex flex-col">
      <p
        className="text-md italic"
        dangerouslySetInnerHTML={{ __html: summary }} />
      <div className="w-full my-6 border-t-2" />
      <audio className="w-full" controls preload="metadata">
        <source src={urlTrack} type="audio/mp3" />
        Your browser does not support audio playback.
      </audio>
    </main>
  </div>
  )
}

export default PodcastEpisodeDetails
