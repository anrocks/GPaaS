import { useCallback, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  TextField,
  Button,
  Typography,
  Stack,
  Box,

} from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSnackbar } from 'notistack'
import * as styles from './Login.styles'
import { ILoginForm, LoginForm } from '../../api/models/ILogin'
import { loginPost } from '../../api/endpoints/login'

const Login = () => {
  const [english, setEnglish] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setEnglish(event.target.value);
  };
  const { enqueueSnackbar } = useSnackbar()
  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: zodResolver(LoginForm),
  })


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
  return (
    <>
      <Box style={styles.Box}>
        <Stack
          sx={styles.stack}

        >
          <Typography sx={styles.title}>Gpass</Typography>
        </Stack>
        <Stack sx={styles.form}
        >
          <form onSubmit={handleSubmit(onSubmit)} >
            <FormControl sx={styles.FormControl} size="small" >

              <Select

                value={english}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >

                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="hindi">Hindi</MenuItem>
                <MenuItem value="marathi" >Marathi</MenuItem>
              </Select>

            </FormControl>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email *"
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
                  label="Password *"
                  type="password"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth

                  margin="normal"
                  variant="outlined"
                  style={{ marginBottom: '20px', }}
                  InputProps={{ style: { height: '45px', padding: '10px' } }}
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
                backgroundColor: 'green'
              }}

            >
              LOGIN
            </Button>
          </form>
        </Stack>
      </Box >
    </>
  )
}

export default Login
