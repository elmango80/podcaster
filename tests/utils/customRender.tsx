import { QueryClientProvider } from '@tanstack/react-query'
import { mockQueryClient } from '../mocks/cache'

interface Props {
  children: JSX.Element
}

export function customRender({ children }: Props) {
  return (
    <QueryClientProvider client={mockQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
