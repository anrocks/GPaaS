import { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

// Define Zod schema for form validation
const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [rememberMe, setRememberMe] = useState(false);

  const simulateApiCall = (__data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly resolve or reject the promise to simulate API behavior
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve("Login successful!");
        } else {
          reject("Login failed. Please try again.");
        }
      }, 1500); // Simulate network delay
    });
  };

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        const response = await simulateApiCall(data);
        enqueueSnackbar(response as string, { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error as string, { variant: "error" });
      }
    },
    [enqueueSnackbar]
  );

  const handleRememberMeChange = useCallback(() => {
    setRememberMe((prev) => !prev);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        gutterBottom
        style={{
          color: "violet",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        {<LockIcon />}
      </Typography>
      <Typography
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Sign in
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
              margin="normal"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
              margin="normal"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          )}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
              color="primary"
            />
          }
          label="Remember Me"
          style={{ marginBottom: "20px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginBottom: "20px" }}
        >
          Sign in
        </Button>
        <Typography
          style={{
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Link to="/forgot-password">Forgot Password?</Link>
        </Typography>
        <Typography
          style={{
            textAlign: "right",
            marginTop: "-20px",
          }}
        >
          Don't have an account? <Link to="/register">Sign Up</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
