import { QueryClient } from '@tanstack/react-query'

export const mockQueryClient = new QueryClient()

export const invalidMockCache = () => {
  mockQueryClient.clear()
}
