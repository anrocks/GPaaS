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
import './App.css'

import Sidenavbar from './sidenavbar/Sidenavbar'
import Preferences from './pages/settings/preference/Preference'
import Notifications from './pages/settings/notification/Notification'
import Accounts from './pages/settings/accounts/Accounts'
import Devices from './pages/settings/devices/Devices'
import Geofences from './pages/settings/geofences/Geofences'
import Groups from './pages/settings/groups/Groups'
import Drivers from './pages/settings/drivers/Drivers'
import Calendars from './pages/settings/calendars/Calendars'
import ComputedAttributes from './pages/settings/computedAttributes/ComputedAttributes'
import Maintenances from './pages/settings/maintenances/Maintenances'
import SavedCommands from './pages/settings/savedcommands/SavedCommands'
import Announcement from './pages/settings/announcement/Announcement'
import Server from './pages/settings/server/Server'
import Users from './pages/settings/users/Users'


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
          <SetRoutes />
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
export const SetRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Preferences" element={<Preferences />} />
        <Route path="/Notifications" element={< Notifications />} />
        <Route path="/Accounts" element={<Accounts />} />
        <Route path="/Devices" element={<Devices />} />
        <Route path="/Geofences" element={<Geofences />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Drivers" element={<Drivers />} />
        <Route path="/Calendars" element={< Calendars />} />
        <Route path="/ComputedAttributes" element={< ComputedAttributes />} />
        <Route path="/Maintenances" element={< Maintenances />} />
        <Route path="/SavedCommands" element={< SavedCommands />} />
        <Route path="/ Announcement" element={< Announcement />} />
        <Route path="/Server" element={<Server />} />
        <Route path="/Users" element={<Users />} />


      </Routes>

      <Sidenavbar />
    </Router>


  )
}
