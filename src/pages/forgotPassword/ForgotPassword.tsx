import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button, Typography, Container } from '@mui/material'
import * as style from './forgotpassword.style'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import {
  IForgotPasswordForm,
  ForgotPasswordForm,
} from '../../api/models/IForgotPassword'
import { forgotpasswordPost } from '../../api/endpoints/forgotpassword'
import { useTranslation } from 'react-i18next'
const ForgotPassword = () => {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const { control, handleSubmit } = useForm<IForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordForm),
  })

  const onSubmit = useCallback(
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
      <Typography style={style.title}>{t('ForgotPassword.title')}</Typography>
      <Typography style={style.para}>{t('ForgotPassword.para')} <br />
        {t('ForgotPassword.para2')}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography style={{ marginRight: '400px' }}>
          {t('ForgotPassword.Enteremailaddress')}
        </Typography>
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
              style={{ marginBottom: '20px', border: 'blue' }}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginBottom: '20px',
            fontSize: '20px',
            width: '40%'
          }}
        >{t('ForgotPassword.button')}

        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginBottom: '20px',
            width: '40%',
            marginLeft: '100px',
            fontSize: '20px',

          }}
        >
          {t('general.Cancel')}
        </Button>
        <Typography style={style.link}>
          <Link to="/login">{t('ForgotPassword.BackToLogin')}</Link>
        </Typography>
      </form>
    </Container>
  )
}

export default ForgotPassword
