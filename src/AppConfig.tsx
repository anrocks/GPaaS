import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme/Theme";

export const AppConfig = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" color="primary">
        GPaaS
      </Typography>
    </ThemeProvider>
  );
};
