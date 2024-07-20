import React from 'react';
import {
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const Devices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Required Section */}
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
            <TextField
              fullWidth
              label={t('Devices.name')}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={t('Devices.identifier')}
              variant="outlined"
              helperText={t('Devices.helpertext')}
              sx={{ mb: 2 }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Extra Section */}
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
            <TextField
              fullWidth
              label={t('Devices.extra')}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            {/* Add more fields as needed */}
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
          <Typography>{t('Devices.attributes')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label={t('Devices.attributes')}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            {/* Add more fields as needed */}
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Devices;