import queryClient from 'src/context/QueryClientProvider'

export const invalidCache = () => {
  queryClient.clear()
}
