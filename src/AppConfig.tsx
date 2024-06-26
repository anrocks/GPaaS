import { ThemeProvider } from '@mui/material'
import theme from './theme/Theme'
import { AxiosHandler } from './api/axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { SnackbarProvider } from 'notistack'
import ForgetPassword from './pages/forgotPassword/ForgotPassword'
import ResetPassword from './pages/resetPassword/ResetPassword'

export const AppConfig = () => {
  return (
    <ThemeProvider theme={theme}>
      <AxiosHandler>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom', // Snackbars appear at the bottom of the screen
            horizontal: 'right', // Snackbars appear on the right side of the screen
          }}
        >
          <GetRoutes />
        </SnackbarProvider>
      </AxiosHandler>
    </ThemeProvider>
  )
}

export const GetRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}
