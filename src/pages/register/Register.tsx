import { Button, Checkbox, Container, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import * as style from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerPost } from "../../api/endpoints/register";
import { dRegisterForm, RegisterForm } from "../../api/models/Register";
import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";


const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit } = useForm<dRegisterForm>({
    resolver: zodResolver(RegisterForm),
  });

  const [Terms, setTerms] = useState(false);


  const onSubmit = useCallback(
    async (data: dRegisterForm) => {
      try {
        const response = await registerPost(data);
        enqueueSnackbar(response as string, { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error as string, { variant: "error" });
      }
    },
    [enqueueSnackbar]
  );

  const handleTerms = () => {
    console.log("Called", Terms);
    setTerms((prev) => !prev);
  };
  
  return (
      <Container maxWidth="sm">
      <Typography style={style.title}>CREATE ACCOUNT</Typography>
      <form  onSubmit={handleSubmit(onSubmit)}>
      <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Name"
              type="name"            
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
          <Controller
          name="repeatpassword" 
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
              <TextField
              {...field}
              label="Repeat your password"
              type="repeatPassword"
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
            checked={Terms}  
            onChange={handleTerms}       
              color="primary"
            />         
          }      
          label={
            <>
              I agree all statements in <span style={{ textDecoration: 'underline' }}>Terms of Service</span>
            </>
          }
          style={style.check}
        />   
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginBottom: "20px",
          }}
        >
          Sign up
        </Button>
        <Typography
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
           Have already an account? <Link to="/login"><b>Login here</b></Link>
        </Typography>
      </form>
    </Container>
    
  );
};

export default Register;

