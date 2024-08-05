import React, { useCallback } from 'react';
import {
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevicesForm, DevicesFSchema } from '../../../api/models/ldevice';
import { devicePost } from '../../../api/endpoints/device';
import { useSnackbar } from 'notistack';

const Devices: React.FC = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  
  const { control, handleSubmit, formState } = useForm<DevicesForm>({
    resolver: zodResolver(DevicesFSchema),
    mode: 'onChange', // Ensures validation on every change
  });

  const onSubmit = useCallback(
    async (data: DevicesForm) => {
      try {
        const response = await devicePost(data);
        enqueueSnackbar(response as string, { variant: 'success' });
      } catch (error) {
        enqueueSnackbar(error as string, { variant: 'error' });
      }
    },
    [enqueueSnackbar]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="required-content"
          id="required-header"
        >
          <Typography>{t('Devices.required')}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 3 }}>
          <Box sx={{ width: '100%' }}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={t('Devices.name')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="identifier"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={t('Devices.identifier')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="extra-content"
          id="extra-header"
        >
          <Typography>{t('Devices.extra')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <Controller
              name="extra"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={t('Devices.extra')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="attributes-content"
          id="attributes-header"
        >
          <Typography>{t('Devices.attributes')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <Controller
              name="attributes"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={t('Devices.attributes')}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
        <Button variant="outlined">{t('Devices.CANCEL')}</Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          {t('Devices.SAVE')}
        </Button>
      </Box>
    </form>
  );
};

export default Devices;
