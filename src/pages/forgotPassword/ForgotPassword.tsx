import { useCallback } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, } from "@mui/material";
import * as style from './forgotpassword.style'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm,Controller } from "react-hook-form";
import { useSnackbar } from 'notistack'
import { IForgotPasswordForm, ForgotPasswordForm } from '../../api/models/IForgotPassword'
import { forgotpasswordPost } from '../../api/endpoints/forgotpassword'
const ForgotPassword = () => {
 const { enqueueSnackbar } = useSnackbar()
   const{
  control,
    handleSubmit,
  } = useForm<IForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordForm),
  });
 
  const onSubmit = useCallback (
    async (data: IForgotPasswordForm) => {
    try {
      
  const response = await forgotpasswordPost(data)
        enqueueSnackbar(response as string, { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error as string, { variant: 'error' })
      }
    },
    [enqueueSnackbar]
  )
   return (
    <Container>
      <Typography style={style.title}>Forgot your Password</Typography>
        <Typography style={style.para}
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
        <Typography style={style.link}>
            <Link to="/login">Back To Login</Link>
          </Typography>
        </form>
      </Container>
  );
};

export default ForgotPassword;
