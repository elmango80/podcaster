import { getEpisodes, getTopPodcasts } from 'src/service/api'
import { getFetch } from 'src/service/fetcher'
import {
  generateEpisodeApiEntryList,
  generatePodcastApiEntryList,
} from '../factories/apiEntries'
import { generatePodcast } from '../factories/podcast'

jest.mock('src/service/fetcher')

describe('Service functions', () => {
  describe('When get podcasts from api', () => {
    test('it should return an empty list when there are no podcasts', async () => {
      const mockGetFetch = jest
        .mocked(getFetch)
        .mockResolvedValue({ feed: { entry: [] } })

      const podcasts = await getTopPodcasts()

      expect(mockGetFetch).toHaveBeenCalled()
      expect(podcasts).toHaveLength(0)
    })

    test('it should return a list of podcasts with valid properties', async () => {
      const mockGetFetch = jest
        .mocked(getFetch)
        .mockResolvedValue(generatePodcastApiEntryList())

      const podcasts = await getTopPodcasts()

      expect(mockGetFetch).toHaveBeenCalled()
      podcasts.forEach((podcast) => {
        expect(podcast.id).not.toBeNull()
        expect(podcast.author).not.toBeNull()
        expect(podcast.name).not.toBeNull()
        expect(podcast.summary).not.toBeNull()
        expect(podcast.urlImage).not.toBeNull()
      })
    })

    test('it should log an error message when fetch fails', async () => {
      const givenMessage = 'Test error.'

      const mockGetFetch = jest.mocked(getFetch).mockRejectedValue(givenMessage)
      const consoleSpy = jest.spyOn(window.console, 'error')

      await getTopPodcasts()

      expect(mockGetFetch).toHaveBeenCalled()
      expect(consoleSpy).toHaveBeenCalled()
      expect(consoleSpy).toHaveBeenCalledWith(givenMessage)

      consoleSpy.mockRestore()
    })
  })

  describe('When get episodes of a podcast from api', () => {
    const { id: podcastId } = generatePodcast()

    test('it should return an empty list when podcast are no episodes', async () => {
      const mockGetFetch = jest
        .mocked(getFetch)
        .mockResolvedValue({ results: [] })

      const episodes = await getEpisodes(podcastId)

      expect(mockGetFetch).toHaveBeenCalled()
      expect(episodes).toHaveLength(0)
    })

    test('it should return a list of episodes with valid properties', async () => {
      const givenEntryList = generateEpisodeApiEntryList(podcastId, 25, 50)
      const mockGetFetch = jest
        .mocked(getFetch)
        .mockResolvedValue(givenEntryList)

      const episodes = await getEpisodes(podcastId)

      expect(mockGetFetch).toHaveBeenCalled()
      episodes.forEach((episode) => {
        expect(episode.id).not.toBeNull()
        expect(episode.date).not.toBeNull()
        expect(episode.summary).not.toBeNull()
        expect(episode.duration).not.toBeNull()
        expect(episode.podcastId).not.toBeNull()
        expect(episode.title).not.toBeNull()
        expect(episode.urlTrack).not.toBeNull()
      })
    })

    test('it should log an error message when fetch fails', async () => {
      const givenMessage = 'Test error.'

      const mockGetFetch = jest.mocked(getFetch).mockRejectedValue(givenMessage)
      const consoleSpy = jest.spyOn(window.console, 'error')

      await getEpisodes(podcastId)

      expect(mockGetFetch).toHaveBeenCalled()
      expect(consoleSpy).toHaveBeenCalled()
      expect(consoleSpy).toHaveBeenCalledWith(givenMessage)

      consoleSpy.mockRestore()
    })
  })
})
