import Accordion from '@mui/material/Accordion';
import { Box, Typography } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import Dropzone, { FileWithPath } from 'react-dropzone';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import * as style from './style'

const Server = () => {
    const { t } = useTranslation();
    const [selectedFile, setSelectedFile] = useState<FileWithPath | null>(null);

    const handleFileDrop = (acceptedFiles: FileWithPath[]) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const handleUpload = () => {

        console.log(selectedFile);

        setSelectedFile(null);
    };
    return (

        <>
            <Box height={100} />
            <div style={{ marginBottom: '60%' }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>{t('Server.preferences')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <TextField fullWidth id="Custom map" sx={{ mb: 2 }}></TextField>
                        <TextField fullWidth id="Custom Overlay" sx={{ mb: 2 }}></TextField>
                        <TextField
                            fullWidth
                            variant='outlined'
                            select
                            label={t('Server.defaultMap')}
                            sx={{ mb: 2 }}>
                            <MenuItem value="LocationIQ Streets">{t('Server.locationIQStreets')}</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label={t('Server.coordinateFormat')}
                            sx={{ mb: 2 }}>
                            <MenuItem value="Decimal Degrees">{t('Server.decimalDegrees')}</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            variant='outlined'
                            select
                            label={t('Server.speedUnit')}
                            sx={{ mb: 2 }}>
                            <MenuItem value="kn">{t('Server.kn')}</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            variant='outlined'
                            select
                            label={t('Server.distanceUnit')}
                            sx={{ mb: 2 }} >
                            <MenuItem value="km">Km</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            variant='outlined'
                            select
                            label={t('Server.altitudeUnit')}
                            sx={{ mb: 2 }}>
                            <MenuItem value="m">{t('Server.m')}</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            variant='outlined'
                            select
                            label={t('Server.volumeUnit')}
                            sx={{ mb: 2 }}
                        >
                            <MenuItem value="Liter">{t('Server.liter')}</MenuItem>
                        </TextField>
                        <TextField fullWidth id="Custom map" sx={{ mb: 2 }} />
                        <TextField fullWidth id="Custom map" sx={{ mb: 2 }} />
                        <FormControlLabel control={<Checkbox />} label={t('Server.forcesettings')} sx={{ marginRight: '70% ' }} />

                    </AccordionDetails>


                </Accordion>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>{t('Server.location')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <TextField fullWidth label={t('Server.latitude')} id="Latitude" sx={{ mb: 2 }}
                        />

                        <TextField fullWidth label={t('Server.longitude')} id="Longitude" sx={{ mb: 2 }}
                        />

                        <TextField fullWidth label={t('Server.zoom')} id="Zomm" sx={{ mb: 2 }}
                        />
                    </AccordionDetails>
                    <Button variant="outlined" sx={style.currentbutton}>{t('Server.cURRENTLOCATION')}</Button>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        {t('Server.permissions')}
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label={t('Server.registation')} />
                            <FormControlLabel control={<Checkbox />} label={t('Server.readonly')} />
                            <FormControlLabel control={<Checkbox />} label={t('Server.deviceReadonly')} />
                            <FormControlLabel control={<Checkbox />} label={t('Server.limitCommands')} />
                            <FormControlLabel control={<Checkbox />} label={t('Server.disableReports')} />
                            <FormControlLabel control={<Checkbox />} label={t('Server.noEmailChange')} />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>{t('Server.file')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            <Dropzone onDrop={handleFileDrop}>
                                {({ getRootProps, getInputProps }) => (
                                    <div
                                        {...getRootProps()}
                                        style={{
                                            border: '2px dashed #cccccc',
                                            padding: '20px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <input {...getInputProps()} />
                                        <p>{t('Server.para')} </p>
                                        <CloudUploadIcon onClick={handleUpload} />

                                    </div>
                                )}
                            </Dropzone>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        {t('Server.attributes')}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button variant="outlined" sx={{ p: 3, mb: 2, width: "70%", height: '10px', fontSize: '25px' }}> {t('Server.aDD')}</Button>
                    </AccordionDetails>
                </Accordion>
                <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '30%' }}>

                    <Button variant="outlined" style={style.cancel}> {t('Server.cANCEL')}</Button>
                    <Button variant="contained" style={style.save}>{t('Server.sAVE')}</Button>
                </div>
            </div >
        </>

    )
}
export default Server