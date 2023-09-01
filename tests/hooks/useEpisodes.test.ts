import { renderHook, waitFor } from '@testing-library/react'
import { QUERY_KEY } from 'src/constants'
import { useEpisodes } from 'src/hooks/useEpisodes'
import { getEpisodes } from 'src/service/api'
import { generateEpisodesList } from '../factories/episodes'
import { generatePodcast } from '../factories/podcast'
import { mockQueryClient } from '../mocks/cache'
import { customRender } from '../utils/customRender'

jest.mock('src/service/api')

describe('Custom hooks', () => {
  describe('When create a instance of useEpisodes', () => {
    test('it should retrieve data from api successfully', async () => {
      const { id: podcastId } = generatePodcast()
      const givenEpisodesList = generateEpisodesList(podcastId)

      jest.mocked(getEpisodes).mockResolvedValue(givenEpisodesList)

      const { result } = renderHook(() => useEpisodes(podcastId), {
        wrapper: customRender,
      })

      await waitFor(() => {
        expect(result.current.isLoading).toBeFalsy()
      })

      expect(result.current.episodes).toHaveLength(givenEpisodesList.length)
    })

    test('Should retrieve data from cache successfully', async () => {
      const podcast = generatePodcast()
      const [episode] = generateEpisodesList(podcast.id)

      mockQueryClient.setQueryData([QUERY_KEY.episodes, podcast.id], [episode])

      const { result } = renderHook(() => useEpisodes(podcast.id), {
        wrapper: customRender,
      })

      await waitFor(() => {
        expect(result.current.isLoading).toBeFalsy()
      })

      expect(result.current.episodes).toEqual([episode])
    })
  })
})
