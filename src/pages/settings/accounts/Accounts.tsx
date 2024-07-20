import React, { useState } from 'react';
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

const Account: React.FC = () => {
  const { t } = useTranslation();
  const [activeMaps, setActiveMaps] = useState('');

  const handleActiveMapsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveMaps(event.target.value);
  };

  return (
    <div>
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
            <TextField
              fullWidth
              label={t('Account.name')}
              variant="outlined"
              sx={{ mb: 2 }}
              defaultValue={t('Account.admin')}
            />
            <TextField
              fullWidth
              label={t('Account.email')}
              variant="outlined"
              sx={{ mb: 2 }}
              defaultValue={t('Account.emailadd')}
            />
            <TextField
              fullWidth
              label={t('Account.password')}
              variant="outlined"
              type="password"
              sx={{ mb: 2 }}
              defaultValue={t('Account.password')}
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
            <TextField
              fullWidth
              label={t('Account.phone')}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              select
              fullWidth
              label={t('Account.defaultMap')}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="LocationIQ Streets">{t('Account.locationIQStreets')}</MenuItem>
              {/* Add other map options here */}
            </TextField>
            <TextField
              select
              fullWidth
              label={t('Account.coordinatesFormat')}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="Decimal Degrees">{t('Account.decimalDegrees')}</MenuItem>
              {/* Add other format options here */}
            </TextField>
            <TextField
              select
              fullWidth
              label={t('Account.speedUnit')}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="kn">{t('Account.kn')}</MenuItem>
              {/* Add other speed unit options here */}
            </TextField>
            <TextField
              select
              fullWidth
              label={t('Account.distanceUnit')}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="km">{t('Serevr.km')}</MenuItem>
              {/* Add other distance unit options here */}
            </TextField>
            <TextField
              select
              fullWidth
              label={t('Account.altitudeUnit')}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="m">{t('Account.m')}</MenuItem>
              {/* Add other altitude unit options here */}
            </TextField>
            <TextField
              select
              fullWidth
              label={t('Account.volumeUnit')}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="Liter">{t('Account.liter')}</MenuItem>
              {/* Add other volume unit options here */}
            </TextField>
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
            <TextField
              fullWidth
              label={t('Account.latitude')}
              variant="outlined"
              defaultValue="0"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('Account.longitude')}
              variant="outlined"
              defaultValue="0"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('Account.zoom')}
              variant="outlined"
              defaultValue="0"
              sx={{ mb: 2 }}
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
            <TextField
              fullWidth
              label={t('Account.expiration')}
              variant="outlined"
              defaultValue={t('Account.date')}
              type="date"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('Account.deviceLimit')}
              variant="outlined"
              defaultValue="-1"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('Account.userLimit')}
              variant="outlined"
              defaultValue="0"
              sx={{ mb: 2 }}
            />
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label={t('Server.disabled')} />
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
        <Button variant="outlined">{t('Account.CANCEL')}</Button>
        <Button variant="contained" color="primary">{t('Account.SAVE')}</Button>
      </Box>
    </div>
  );
};

export default Account;