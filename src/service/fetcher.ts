export const getFetch = async ({ url }: { url: string }) => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

  if (!response.ok) {
    throw new Error('Failed to fetch top podcasts.')
  }

  const json = await response.json()
  return JSON.parse(json?.contents) ?? {}
}
