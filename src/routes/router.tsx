import { createBrowserRouter } from 'react-router-dom'
import Layout from 'src/Layout'
import EpisodeDetails from 'src/pages/EpisodeDetails'
import EpisodesList from 'src/pages/EpisodesList'
import Home from 'src/pages/Home'
import Podcast from 'src/pages/Podcast'

export const HOME_PATH = '/'
export const PODCAST_PATH = 'podcast/'
export const EPISODE_PATH = 'episode/'

export const ROUTER_APP = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: `${PODCAST_PATH}:podcastId`,
        element: <Podcast />,
        children: [
          {
            index: true,
            element: <EpisodesList />
          },
          {
            path: `${EPISODE_PATH}:episodeId`,
            element: <EpisodeDetails />
          }
        ]
      }
    ]
  }
])
