import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

// Define Zod schema for form validation
const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [rememberMe, setRememberMe] = useState(false);
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Implement your authentication logic here
  };
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
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
        <TextField
          label="Email"
          type="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          margin="normal"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          margin="normal"
          variant="outlined"
          style={{ marginBottom: "20px" }}
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
