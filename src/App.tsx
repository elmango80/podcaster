import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { ROUTER_APP } from 'src/routes/router'
import { PodcasterProvider } from './context/context'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
})

function App() {
  return (
    <PodcasterProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={ROUTER_APP} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PodcasterProvider>
  )
}

export default App
