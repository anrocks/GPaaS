import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useTranslation } from 'react-i18next';
import * as style from './style'
const Preferences = () => {
    const { t } = useTranslation();
    return (
        <>
            <Box height={100} style={{ marginBottom: '50%' }}>
                <div >

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>{t('Preferences.map')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label={t('Preferences.activeMap')}
                                sx={{ mb: 2 }}>
                                <MenuItem value="LocationIQ Streets,OpenStreetMap">LocationIQ Streets,OpenStreetMap</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select

                                sx={{ mb: 2 }}>
                                <MenuItem value="Map Overlay">{t('Preferences.mapOverlay')}</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label={t('Preferences.popupInfo')}
                                sx={{ mb: 2 }} />
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label={t('Preferences.liveRoutes')}
                                sx={{ mb: 2 }}>
                                <MenuItem value="Disabled">Disabled</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label={t('Preferences.showDirection')}
                                sx={{ mb: 2 }}>
                                <MenuItem value="Selected Devices">Selected Devices</MenuItem>
                            </TextField>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label={t('Preferences.showGeofences')} />
                                <FormControlLabel control={<Checkbox />} label={t('Preferences.follow')} />
                                <FormControlLabel control={<Checkbox />} label={t('Preferences.markersClustering')} />
                                <FormControlLabel control={<Checkbox />} label={t('Preferences.showMapOnSelection')} />

                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>{t('Preferences.devices')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label={t('Preferences.deviceTitle')}
                                sx={{ mb: 2 }}>
                                <MenuItem value="Name">Name </MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                sx={{ mb: 2 }}>
                                <MenuItem value="Device Detail">{t('Preferences.deviceDetail')}</MenuItem>
                            </TextField>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography>{t('Preferences.notificationSound')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                sx={{ mb: 2 }}>
                                <MenuItem value="Sound Events">{t('Preferences.soundEvents')}</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label={t('Preferences.soundAlarms')}
                                sx={{ mb: 2 }}>
                                <MenuItem value="SOS">SOS </MenuItem>
                            </TextField>
                        </AccordionDetails>

                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography>{t('Preferences.token')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>

                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography>{t('Preferences.info')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                    <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '30%' }}>

                        <Button variant="outlined" style={style.save}>{t('Preferences.cANCEL')} </Button>
                        <Button variant="contained" style={style.cancel}>{t('Preferences.sAVE')}</Button>
                    </div>
                </div>
            </Box>
        </>
    );
}
export default Preferences  
