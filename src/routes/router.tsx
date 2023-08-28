import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import Details from '../pages/Details'
import Home from '../pages/Home'

export const DETAIL_PATH = '/podcast/'

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: `${DETAIL_PATH}:id`,
        element: <Details />
      }
    ]
  }
])
