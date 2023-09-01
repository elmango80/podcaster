const API_URL_ALL_ORIGINS = 'https://api.allorigins.win/get?url='

export const getFetch = ({ path }: { path: string }) => {
  return fetch(`${API_URL_ALL_ORIGINS}${encodeURIComponent(path)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch top podcasts.')
    }

    const json = await response.json()

    return JSON.parse(json?.contents) ?? {}
  })
}
