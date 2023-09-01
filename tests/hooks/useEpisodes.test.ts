import { renderHook, waitFor } from '@testing-library/react'
import { useEpisodes } from 'src/hooks/useEpisodes'
import { getEpisodes } from 'src/service/api'
import { generateEpisodesList } from '../factories/episodes'
import { generatePodcast } from '../factories/podcast'
import { customRender } from '../utils/customRender'

jest.mock('src/service/podcast')

describe('', () => {
  test.only('', async () => {
    const { id: podcastId } = generatePodcast()
    const givenEntryList = generateEpisodesList(podcastId, 25, 50)

    jest.mocked(getEpisodes).mockResolvedValue(givenEntryList)

    const { result } = renderHook(() => useEpisodes(podcastId), {
      wrapper: customRender,
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy()
    })
  })
})
