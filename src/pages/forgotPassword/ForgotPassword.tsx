import { useState, } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, } from "@mui/material";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm,Controller } from "react-hook-form";
import { useSnackbar } from 'notistack'

const schema = z.object({
  email: z.string().email("Invalid email format"),
});
type FormData = z.infer<typeof schema>;

const ForgotPassword = () => {
 
   
    const [message, setMessage] = useState<string>("");
   const [error, setError] = useState<string>("");
   const { enqueueSnackbar } = useSnackbar()
   const{
  control,
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
 
  const onSubmit = async (data: FormData) => {
    try {
      // Send a request to your backend to initiate password reset
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        throw new Error("Failed to request password reset.");
      }

      setMessage("Password reset instructions sent to your email.");
      setError("");
      enqueueSnackbar(message as string, { variant: 'success' })
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      setMessage("");
      enqueueSnackbar(error as string, { variant: 'error' })
    }
  };
 
  return (
    <Container>
      <Typography style={{fontSize:"35px" ,marginRight: "150px",
  marginBottom: "15px",}}>Forgot your Password</Typography>
        
        <Typography style={{ 
  marginBottom: "20px",
  marginRight: "150px"}}
          >Please enter the email address you'd like your password <br/>reset
          information sent to</Typography>
        
       
        <form onSubmit={handleSubmit(onSubmit)}>
          
            <Typography style={{marginRight:"400px"}}>Enter email address</Typography>
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
              style={{ marginBottom: "20px" ,border:"blue"}}
            />
          )}
          />
            
          
          <Button type="submit" variant="contained"
          color="primary"
          fullWidth
          style={{
            marginBottom: '20px',
            
    fontSize: "20px",
          }}>Request reset link</Button>
          {/* {message &&  <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>} */}
    
          <Typography style={{ textAlign:"center" ,fontSize:"20px",padding:"20px"}}>
            <Link to="/login">Back To Login</Link>
          </Typography>
        </form>
        
    </Container>
  );
};

export default ForgotPassword;
