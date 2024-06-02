import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme/Theme";
import { AxiosHandler } from "./api/axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export const AppConfig = () => {
  return (
    <ThemeProvider theme={theme}>
      <AxiosHandler>
        <Typography variant="h1" color="primary">
          <GetRoutes />
        </Typography>
      </AxiosHandler>
    </ThemeProvider>
  );
};

export const GetRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
