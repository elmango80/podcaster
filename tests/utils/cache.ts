import { queryClient } from 'src/App'

export const invalidCache = () => {
  queryClient.clear()
}
