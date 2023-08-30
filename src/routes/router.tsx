import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import EpisodeDetails from '../pages/EpisodeDetails'
import EpisodesList from '../pages/EpisodesList'
import Home from '../pages/Home'
import Podcast from '../pages/Podcast'

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
