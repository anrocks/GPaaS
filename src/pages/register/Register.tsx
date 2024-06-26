import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import * as style from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerPost } from '../../api/endpoints/register'
import { dRegisterForm, RegisterForm } from '../../api/models/Register'
import { useSnackbar } from 'notistack'
import { useCallback, useState, useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const Register = () => {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const { control, handleSubmit } = useForm<dRegisterForm>({
    resolver: zodResolver(RegisterForm),
  })

  const [Terms, setTerms] = useState(false)

  const onSubmit = useCallback(
    async (data: dRegisterForm) => {
      try {
        const response = await registerPost(data)
        enqueueSnackbar(response as string, { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error as string, { variant: 'error' })
      }
    },
    [enqueueSnackbar]
  )

  const handleTerms = () => {
    console.log('Called', Terms)
    setTerms((prev) => !prev)
  }

  return (
    <Container maxWidth="sm">
      <Typography style={style.title}><b>{t('register.title')}</b></Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('general.name')}
              type="name"
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
        <Controller
          name="repeatpassword"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('general.repeatpassword')}
              type="repeatPassword"
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
            <Checkbox checked={Terms} onChange={handleTerms} color="primary" />
          }
          label={
            <>
              {t('register.iAgree')}
              <span style={{ textDecoration: 'underline' }}>
                {t('register.termAndCondition')}
              </span>
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
            marginBottom: '20px',
            width: '40%',
            marginRight: '100px',
          }}
        >
          {t('register.signup')}
        </Button>
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginBottom: '20px',
            width: '40%',
          }}
        >
         {t('general.cancel')} 
        </Button>
        <Typography
          style={{
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          {t('register.account')}
          <Link to="/login">
            <b>{t('register.login')}</b>
          </Link>
        </Typography>
      </form>
    </Container>
  )
}

export default Register
