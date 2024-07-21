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
                            <Typography>{t('Preferences. map')}</Typography>
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
                                <MenuItem value="Map Overlay">Map Overlay</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label={t('Preferences.Popup Info')}
                                sx={{ mb: 2 }} />
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label="Live Routes"
                                sx={{ mb: 2 }}>
                                <MenuItem value="Disabled">Disabled</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label="Show Direction"
                                sx={{ mb: 2 }}>
                                <MenuItem value="Selected Devices">Selected Devices</MenuItem>
                            </TextField>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Show Geofences" />
                                <FormControlLabel control={<Checkbox />} label="Follow" />
                                <FormControlLabel control={<Checkbox />} label="Markers Clustering" />
                                <FormControlLabel control={<Checkbox />} label="Show Map On Selection" />

                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>{t('Preferences. devices')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label="Device Title"
                                sx={{ mb: 2 }}>
                                <MenuItem value="Name">Name </MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select

                                sx={{ mb: 2 }}>
                                <MenuItem value="Device Detail">Device Detail</MenuItem>
                            </TextField>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography>Notification Sound</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select

                                sx={{ mb: 2 }}>
                                <MenuItem value="Sound Events">Sound Events</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                variant='outlined'
                                select
                                label="Sound Alarms"
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
                            <Typography>Token</Typography>
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
                            <Typography>Info</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                    <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '30%' }}>

                        <Button variant="outlined" style={{ minWidth: '150px', minHeight: '40px', fontSize: '15px' }}> </Button>
                        <Button variant="contained" style={{ minWidth: '150px', minHeight: '40px', fontSize: '15px' }}></Button>
                    </div>
                </div>
            </Box>
        </>
    );
}
export default Preferences  
