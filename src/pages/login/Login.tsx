import { useState,useCallback  } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  TextField,
  Button,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import LockIcon from '@mui/icons-material/Lock'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import * as styles from './Login.styles'
import { ILoginForm, LoginForm } from '../../api/models/ILogin'
import { loginPost } from '../../api/endpoints/login'

const Login = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: zodResolver(LoginForm),
  })
  const [rememberMe, setRememberMe] = useState(false)

  const onSubmit = useCallback(
    async (data: ILoginForm) => {
      try {
        const response = await loginPost(data)
        enqueueSnackbar(response as string, { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error as string, { variant: 'error' })
      }
    },
    [enqueueSnackbar]
  )

  const handleRememberMeChange = () => {
    console.log('Called', rememberMe)
    setRememberMe((prev) => !prev)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom style={styles.icon}>
        <LockIcon />
      </Typography>
      <Typography style={styles.title}>Sign in</Typography>
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
              style={{ marginBottom: '20px' }}
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
              style={{ marginBottom: '20px' }}
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
          style={styles.checkbox}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginBottom: '20px',
          }}
        >
          Sign in
        </Button>
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'left',
          }}
        >
          <Link to="/forget-password">Forgot Password?</Link>
        </Typography>
        <Typography
          style={{
            textAlign: 'right',
            marginTop: '-20px',
          }}
        >
          Don't have an account? <Link to="/register">Sign Up</Link>
        </Typography>
      </form>
    </Container>
  )
}

export default Login
