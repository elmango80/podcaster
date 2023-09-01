import { renderHook, waitFor } from '@testing-library/react'
import { advanceBy, advanceTo, clear } from 'jest-date-mock'
import { QUERY_KEY } from 'src/constants'
import { useEpisodes } from 'src/hooks/useEpisodes'
import { getEpisodes } from 'src/service/api'
import { generateEpisodesList } from '../factories/episodes'
import { generatePodcast } from '../factories/podcast'
import { invalidMockCache, mockQueryClient } from '../mocks/cache'
import { customRender } from '../utils/customRender'

jest.mock('src/service/api')

afterEach(() => {
  jest.resetAllMocks()
  invalidMockCache()
})

describe('Custom hooks useEpisodes', () => {
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

    test('it should retrieve data from cache successfully', async () => {
      const podcast = generatePodcast()
      const [episode] = generateEpisodesList(podcast.id)

      jest.mocked(getEpisodes).mockResolvedValue([])
      mockQueryClient.setQueryData([QUERY_KEY.episodes, podcast.id], [episode])

      const { result } = renderHook(() => useEpisodes(podcast.id), {
        wrapper: customRender,
      })

      await waitFor(() => {
        expect(result.current.isLoading).toBeFalsy()
      })

      expect(result.current.episodes).toEqual([episode])
    })

    test('it should fetch data from API after cache expiry', async () => {
      advanceTo(new Date(2023, 1, 1))

      const podcast = generatePodcast()
      const [cacheEpisode, newEpisode] = generateEpisodesList(podcast.id, 2, 2)

      jest.mocked(getEpisodes).mockResolvedValue([cacheEpisode, newEpisode])
      mockQueryClient.setQueryData(
        [QUERY_KEY.episodes, podcast.id],
        [cacheEpisode]
      )

      const { result: firstResult, unmount } = renderHook(
        () => useEpisodes(podcast.id),
        { wrapper: customRender }
      )

      await waitFor(() => {
        expect(firstResult.current.isLoading).toBeFalsy()
      })

      unmount()

      advanceBy(1000 * 60 * 60 * 24)

      const { result: secondResult } = renderHook(
        () => useEpisodes(podcast.id),
        { wrapper: customRender }
      )

      await waitFor(() => {
        expect(secondResult.current.isLoading).toBeFalsy()
      })

      expect(secondResult.current.episodes).toHaveLength(2)

      clear()
    })
  })
})
