import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props {
  children: JSX.Element
}

const queryClient = new QueryClient()

export function customRender({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
