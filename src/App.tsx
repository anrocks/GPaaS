import { RecoilRoot } from 'recoil'
import './App.css'
import { AppConfig } from './AppConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilDevtools } from 'recoil-devtools'

const queryClient = new QueryClient()

// const isDevelopment = vite.env.NODE_ENV === 'development'
// let RecoilDevTools = null
// if (isDevelopment) {
//   RecoilDevTools = require('recoil-devtools').RecoilDevTools
// }
// {isDevelopment && <RecoilDevTools />}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilDevtools />
        <AppConfig />
      </RecoilRoot>
      <ReactQueryDevtools position="right" initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
