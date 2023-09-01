import { QueryClient } from '@tanstack/react-query'

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 10,
    },
  },
})

export const invalidCache = () => {
  mockQueryClient.clear()
}
