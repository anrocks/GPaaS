import './App.css'
import { AppConfig } from './AppConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppConfig />
      <ReactQueryDevtools position="right" initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
