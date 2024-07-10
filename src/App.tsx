import { RecoilRoot } from 'recoil'
import './App.css'
import { AppConfig } from './AppConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilDevtools } from 'recoil-devtools'
// import { createTheme, ThemeProvider } from '@mui/material/styles';

const queryClient = new QueryClient()

// const isDevelopment = vite.env.NODE_ENV === 'development'
// let RecoilDevTools = null
// if (isDevelopment) {
//   RecoilDevTools = require('recoil-devtools').RecoilDevTools
// }
// {isDevelopment && <RecoilDevTools />}

// const theme = createTheme({
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           margin: 0,
//           padding: 0,
//           width: '100vw',
//           height: '100vh',
//           overflow: 'hidden',
//         },
//         html: {
//           margin: 0,
//           padding: 0,
//           width: '100vw',
//           height: '100vh',
//           overflow: 'hidden',
//         },
//       },
//     },
//   },
// });
function App() {
  return (
    // <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilDevtools />
        <AppConfig />
      </RecoilRoot>
      <ReactQueryDevtools position="right" initialIsOpen={false} />
    </QueryClientProvider>
    // </ThemeProvider>
  )
}



export default App
