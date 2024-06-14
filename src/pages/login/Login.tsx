import { useState, useCallback } from 'react'
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
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
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
      <Typography style={styles.title}>{t('login.title')}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('general.email')}
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
              label={t('general.password')}
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
          label={t('login.RememberMe')}
          style={styles.checkbox}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginBottom: '20px',
            width: '40%',
            marginRight: '150px',
            right: '50px',
          }}
        >
          {t('login.Signin')}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            bottom: '55px',
            marginBottom: '20px',
            width: '40%',
            marginLeft: '100px',
            left: '60px',

          }}
        >
          {t('general.Cancel')}
        </Button>
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'left',

          }}
        >
          <Link to="/forget-password">{t('login.ForgotPassword')}</Link>
        </Typography>
        <Typography
          style={{
            textAlign: 'right',
            marginTop: '-20px',
            top: '50px'
          }}
        >
          {t('login.Account')}<Link to="/register">{t('login.SignUp')}</Link>
        </Typography>
      </form>
    </Container >
  )
}

export default Login
