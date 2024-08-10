import React, { useState, useCallback } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  InputAdornment,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { accountPost } from '../../../api/endpoints/account';
import { AccountForm, daccountForm } from '../../../api/models/lAccount';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

const Account: React.FC = () => {
  const { t } = useTranslation();
  const [activeMaps, setActiveMaps] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<daccountForm>({
    resolver: zodResolver(AccountForm),
    mode: 'onChange',
  });

  const onSubmit = useCallback(
    async (data: daccountForm) => {
      try {
        const response = await accountPost(data);
        enqueueSnackbar(response as string, { variant: 'success' });
      } catch (error) {
        enqueueSnackbar(error as string, { variant: 'error' });
      }
    },
    [enqueueSnackbar]
  );

  const handleActiveMapsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveMaps(event.target.value);
  };

  const handleCancel = () => {
    reset(); // Clear form fields
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Required Section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="required-content"
          id="required-header"
        >
          <Typography>{t('Account.required')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                  label={t('Account.name')}
                  variant="outlined"
                  sx={{ mb: 2 }}
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
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                  label={t('Account.email')}
                  variant="outlined"
                  sx={{ mb: 2 }}
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
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                  label={t('Account.password')}
                  variant="outlined"
                  type="password"
                  sx={{ mb: 2 }}
                />
              )}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Account Preferences Section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="preferences-content"
          id="preferences-header"
        >
          <Typography>{t('Account.preferences')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                  label={t('Account.phone')}
                  variant="outlined"
                  type="tel"
                  sx={{ mb: 2 }}
                />
              )}
            />
            <Controller
              name="defaultMap"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  select
                  fullWidth
                  label={t('Account.defaultMap')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="LocationIQ Streets">{t('Account.locationIQStreets')}</MenuItem>
                  {/* Add other map options here */}
                </TextField>
              )}
            />
            <Controller
              name="coordinatesFormat"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label={t('Account.coordinatesFormat')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                >
                  <MenuItem value="Decimal Degrees">{t('Account.decimalDegrees')}</MenuItem>
                  {/* Add other format options here */}
                </TextField>
              )}
            />
            <Controller
              name="speedUnit"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label={t('Account.speedUnit')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                >
                  <MenuItem value="kn">{t('Account.kn')}</MenuItem>
                  {/* Add other speed unit options here */}
                </TextField>
              )}
            />
            <Controller
              name="distanceUnit"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label={t('Account.distanceUnit')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                >
                  <MenuItem value="km">{t('Account.km')}</MenuItem>
                  {/* Add other distance unit options here */}
                </TextField>
              )}
            />
            <Controller
              name="altitudeUnit"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label={t('Account.altitudeUnit')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                >
                  <MenuItem value="m">{t('Account.m')}</MenuItem>
                  {/* Add other altitude unit options here */}
                </TextField>
              )}
            />
            <Controller
              name="volumeUnit"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label={t('Account.volumeUnit')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                >
                  <MenuItem value="Liter">{t('Account.liter')}</MenuItem>
                  {/* Add other volume unit options here */}
                </TextField>
              )}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Location Section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="location-content"
          id="location-header"
        >
          <Typography>{t('Account.location')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <Controller
              name="latitude"
              control={control}
              defaultValue={0} // Ensure this is a number
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="number"
                  fullWidth
                  label={t('Account.latitude')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  value={field.value || ''}
                />
              )}
            />
            <Controller
              name="longitude"
              control={control}
              defaultValue={0} // Ensure this is a number
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="number"
                  fullWidth
                  label={t('Account.longitude')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  value={field.value || ''}
                />
              )}
            />
            <Controller
              name="zoom"
              control={control}
              defaultValue={0}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="number"
                  fullWidth
                  label={t('Account.zoom')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Button
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            >
              {t('Account.cURRENTLOCATION')}
            </Button>
            {/* Add more fields as needed */}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Permission Section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="permission-content"
          id="permission-header"
        >
          <Typography>{t('Account.permission')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <Controller
              name="expiration"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="date"
                  fullWidth
                  label={t('Account.expiration')}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="deviceLimit"
              control={control}
              defaultValue={-1}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="number"
                  fullWidth
                  label="Device Limit"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  onChange={(e) => {
                    field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value));
                  }}
                  value={field.value === undefined ? '' : field.value}
                />
              )}
            />
            <Controller
              name="userLimit"
              control={control}
              defaultValue={0}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="number"
                  fullWidth
                  label="User Limit"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  onChange={(e) => {
                    field.onChange(e.target.value === '' ? undefined : parseFloat(e.target.value));
                  }}
                  value={field.value === undefined ? '' : field.value}
                />
              )}
            />
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label={t('Account.disabled')} />
              <FormControlLabel control={<Checkbox />} label={t('Account.admin1')} />
              <FormControlLabel control={<Checkbox />} label={t('Account.readonly')} />
              <FormControlLabel control={<Checkbox />} label={t('Account.deviceReadonly')} />
              <FormControlLabel control={<Checkbox />} label={t('Account.LimitCommands')} />
              <FormControlLabel control={<Checkbox />} label={t('Account.DisableReports')} />
              <FormControlLabel control={<Checkbox />} label={t('Account.NoEmailChange')} />
            </FormGroup>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Attributes Section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="attributes-content"
          id="attributes-header"
        >
          <Typography>{t('Account.Attributes')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <TextField
                fullWidth
                label={t('Account.ActiveMaps')}
                variant="outlined"
                value={activeMaps}
                onChange={handleActiveMapsChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setActiveMaps('')}>
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                width: '100%',
                marginTop: '10px',
                backgroundColor: '#fff',
                color: '#3F51B5',
                '&:hover': {
                  backgroundColor: '#f2f2f2',
                },
              }}
              startIcon={<AddIcon sx={{ color: '#3F51B5' }} />}
            >
              {t('Account.Add')}
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Save and Cancel Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
        <Button variant="outlined" onClick={handleCancel}>{t('Account.CANCEL')}</Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid || isSubmitting}
        >
          {t('Account.SAVE')}
        </Button>
      </Box>
    </form>
  );
};

export default Account;
