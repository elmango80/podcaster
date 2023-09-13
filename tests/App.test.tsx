import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from 'src/App'
import { getTopPodcasts } from 'src/service/api'
import { generatePodcast, generatePodcastsList } from './factories/podcast'
import { invalidCache } from './utils/cache'

jest.mock('src/service/api')

afterEach(() => {
  invalidCache()
  jest.resetModules()
})

describe('Podcasts List', () => {
  describe('When the user loads the home page', () => {
    test('it should display a list of top podcasts', async () => {
      const podcasts = generatePodcastsList(10)

      jest.mocked(getTopPodcasts).mockResolvedValue(podcasts)

      render(<App />)

      const podcastCards = await screen.findAllByRole('listitem')
      expect(podcastCards.length).toBe(10)

      const podcastsInfo = screen.getByRole('contentinfo')
      expect(podcastsInfo.innerHTML).toBe('10')
    })
  })

  describe('When the user types in the filtering input', () => {
    describe('Filtering by Podcast Author', () => {
      test('it should display the podcasts that match the author', async () => {
        const podcasts = generatePodcastsList(2)
        const givenPodcast = generatePodcast()
        const user = userEvent.setup()

        jest
          .mocked(getTopPodcasts)
          .mockResolvedValue([...podcasts, givenPodcast])

        render(<App />)

        const filterInput = screen.getByPlaceholderText(/filter/i)

        await user.type(filterInput, givenPodcast.author)

        const filteredPodcastsList = await screen.findAllByRole('listitem')

        expect(filterInput).toHaveValue(givenPodcast.author)
        expect(filteredPodcastsList.length).toBe(1)
      })

      test('it should display an empty list if no author matches', async () => {
        const podcasts = generatePodcastsList(2)
        const givenPodcastNotExist = generatePodcast()
        const user = userEvent.setup()

        jest.mocked(getTopPodcasts).mockResolvedValue(podcasts)

        render(<App />)

        const filterInput = screen.getByPlaceholderText(/filter/i)

        await user.type(filterInput, givenPodcastNotExist.author)

        const emptyPodcastsList = screen.getByRole('list')

        expect(filterInput).toHaveValue(givenPodcastNotExist.author)
        expect(emptyPodcastsList).toBeEmptyDOMElement()
      })
    })

    describe('Filtering by Podcast Name', () => {
      test('it should display the podcasts that match the name', async () => {
        const podcasts = generatePodcastsList(2)
        const givenPodcast = generatePodcast()
        const user = userEvent.setup()

        jest
          .mocked(getTopPodcasts)
          .mockResolvedValue([...podcasts, givenPodcast])

        render(<App />)

        const filterInput = screen.getByPlaceholderText(/filter/i)

        await user.type(filterInput, givenPodcast.name)

        const filteredPodcastsList = await screen.findAllByRole('listitem')

        expect(filterInput).toHaveValue(givenPodcast.name)
        expect(filteredPodcastsList.length).toBe(1)
      })

      test('it should display an empty list if no name matches', async () => {
        const podcasts = generatePodcastsList(2)
        const givenPodcastNotExist = generatePodcast()
        const user = userEvent.setup()

        jest.mocked(getTopPodcasts).mockResolvedValue(podcasts)

        render(<App />)

        const filterInput = screen.getByPlaceholderText(/filter/i)

        await user.type(filterInput, givenPodcastNotExist.name)

        const emptyPodcastsList = screen.getByRole('list')

        expect(filterInput).toHaveValue(givenPodcastNotExist.name)
        expect(emptyPodcastsList).toBeEmptyDOMElement()
      })
    })
  })
})
