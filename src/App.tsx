import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { ROUTER_APP } from 'src/routes/router'
import { PodcasterProvider } from './context/PodcasterContext'
import { QueryClientProvider } from './context/QueryClientProvider'

function App() {
  return (
    <PodcasterProvider>
      <QueryClientProvider>
        <RouterProvider router={ROUTER_APP} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PodcasterProvider>
  )
}

export default App
