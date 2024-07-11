import {
  Button,
  Box,

  Stack,
  TextField,
  Typography,
} from '@mui/material'

import * as style from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerPost } from '../../api/endpoints/register'
import { dRegisterForm, RegisterForm } from '../../api/models/Register'
import { useSnackbar } from 'notistack'
import { useCallback, } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const { control, handleSubmit } = useForm<dRegisterForm>({
    resolver: zodResolver(RegisterForm),
  })



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



  return (
    <Box
      sx={style.Box}
    >

      <Stack
        sx={style.stack}
      >
        <Typography sx={{ color: "#fff", fontSize: '45px' }}>Gpass</Typography>
      </Stack>
      <Stack
        sx={style.form}
      >
        <Typography variant="h4" style={style.title}>
          <ArrowBackIcon style={style.icon} />
          REGISTER
        </Typography>

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
                InputProps={{ style: { height: '45px', padding: '10px' } }}
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
                InputProps={{ style: { height: '45px', padding: '10px' } }}
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
                label={t('general.password ')}
                type="password"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
                margin="normal"
                variant="outlined"
                style={{ marginBottom: '20px' }}
                InputProps={{ style: { height: '45px', padding: '10px' } }}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: '20px' }}
          >
            REGISTER
          </Button>
        </form>
      </Stack>
    </Box>
  );
}

export default Register
