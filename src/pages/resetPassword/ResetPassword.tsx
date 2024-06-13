import { Container, Typography, TextField, Button, Box } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useSnackbar } from 'notistack'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { ResetForm, ResetPForm } from '../../api/models/ResetPassword'
import { ResetPost } from '../../api/endpoints/resetpassword'
import { useCallback } from 'react'
import { t } from 'i18next'

const ResetPassword = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { control, handleSubmit } = useForm<ResetPForm>({
    resolver: zodResolver(ResetForm),
  })

  const onSubmit = useCallback(
    async (data: ResetPForm) => {
      try {
        const response = await ResetPost(data)
        enqueueSnackbar(response as string, { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error as string, { variant: 'error' })
      }
    },
    [enqueueSnackbar]
  )

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center">
        <AccountCircle fontSize="large" style={{ color: 'black' }} />
        <Typography
          variant="h4"
          marginTop="20px"
          gutterBottom
          style={{ color: 'black' }}
        >
          {t('resetPassword.title')}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="newPassword"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('general.newpassword')}
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
          name="password"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('general.confirmp')}
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
          {t('resetPassword.continue')}
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
      </form>
    </Container>
  )
}

export default ResetPassword
