import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../pages/Home'
import Podcast from '../pages/Podcast'

export const DETAIL_PATH = '/podcast/'
export const HOME_PATH = '/'

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
        path: `${DETAIL_PATH}:podcastId`,
        element: <Podcast />
      }
    ]
  }
])
