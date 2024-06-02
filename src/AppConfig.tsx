import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme/Theme";
import { AxiosHandler } from "./api/axios";

export const AppConfig = () => {
  return (
    <ThemeProvider theme={theme}>
      <AxiosHandler>
        <Typography variant="h1" color="primary">
          GPaaS
        </Typography>
      </AxiosHandler>
    </ThemeProvider>
  );
};
