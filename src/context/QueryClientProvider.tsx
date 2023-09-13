import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
})

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

interface Props {
  children: JSX.Element[]
}

export function QueryClientProvider({ children }: Props) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}

export default queryClient
