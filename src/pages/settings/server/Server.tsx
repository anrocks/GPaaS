
import Accordion from '@mui/material/Accordion';
import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, FormGroup, Stack, MenuItem } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Dropzone from 'react-dropzone';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import * as style from './style.ts';

const serverSchema = z.object({
    customMap: z.string().min(1, 'Custom map is required'),
    customOverlay: z.string().min(1, 'Custom overlay is required'),
    defaultMap: z.string().min(1, 'Default map is required'),
    coordinateFormat: z.string().min(1, 'Coordinate format is required'),
    speedUnit: z.string().min(1, 'Speed unit is required'),
    distanceUnit: z.string().min(1, 'Distance unit is required'),
    altitudeUnit: z.string().min(1, 'Altitude unit is required'),
    volumeUnit: z.string().min(1, 'Volume unit is required'),
    latitude: z.string().min(1, 'Latitude is required'),
    longitude: z.string().min(1, 'Longitude is required'),
    zoom: z.string().min(1, 'Zoom level is required'),
});

// Type definition for form values
type ServerFormValues = z.infer<typeof serverSchema>;

export default function AccordionExpandIcon() {
    const { t } = useTranslation();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileDrop = (acceptedFiles: File[]) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            console.log('Uploaded file:', selectedFile);

        }
        setSelectedFile(null);
    };

    const { control, handleSubmit, reset, formState: { errors } } = useForm<ServerFormValues>({
        resolver: zodResolver(serverSchema),
        defaultValues: {
            customMap: '',
            customOverlay: '',
            defaultMap: '',
            coordinateFormat: '',
            speedUnit: '',
            distanceUnit: '',
            altitudeUnit: '',
            volumeUnit: '',
            latitude: '',
            longitude: '',
            zoom: '',
        },
        mode: 'onTouched',
    });

    const onSubmit = (data: ServerFormValues) => {
        console.log('Form Data:', data);
    };

    const handleCancel = () => {
        reset(); // Clear form fields
    };

    return (
        <>
            <Box style={{ height: '100', display: "flex", justifyContent: "center", width: "100%" }} />

            <div style={{ width: "80%", maxWidth: "800px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>{t('Server.preferences')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Controller
                                name="customMap"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label={t('Server.customMap')}
                                        {...field}
                                        error={!!errors.customMap}
                                        helperText={errors.customMap?.message}
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            <Controller
                                name="customOverlay"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label={t('Server.customOverlay')}
                                        {...field}
                                        error={!!errors.customOverlay}
                                        helperText={errors.customOverlay?.message}
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            <Controller
                                name="defaultMap"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        select
                                        label={t('Server.defaultMap')}
                                        {...field}
                                        error={!!errors.defaultMap}
                                        helperText={errors.defaultMap?.message}
                                        sx={{ mb: 2 }}
                                    >
                                        <MenuItem value="LocationIQ Streets">{t('Server.locationIQStreets')}</MenuItem>
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="coordinateFormat"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        select
                                        label={t('Server.coordinateFormat')}
                                        {...field}
                                        error={!!errors.coordinateFormat}
                                        helperText={errors.coordinateFormat?.message}
                                        sx={{ mb: 2 }}
                                    >
                                        <MenuItem value="Decimal Degrees">{t('Server.decimalDegrees')}</MenuItem>
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="speedUnit"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        select
                                        label={t('Server.speedUnit')}
                                        {...field}
                                        error={!!errors.speedUnit}
                                        helperText={errors.speedUnit?.message}
                                        sx={{ mb: 2 }}
                                    >
                                        <MenuItem value="kn">{t('Server.kn')}</MenuItem>
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="distanceUnit"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        select
                                        label={t('Server.distanceUnit')}
                                        {...field}
                                        error={!!errors.distanceUnit}
                                        helperText={errors.distanceUnit?.message}
                                        sx={{ mb: 2 }}
                                    >
                                        <MenuItem value="km">Km</MenuItem>
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="altitudeUnit"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        select
                                        label={t('Server.altitudeUnit')}
                                        {...field}
                                        error={!!errors.altitudeUnit}
                                        helperText={errors.altitudeUnit?.message}
                                        sx={{ mb: 2 }}
                                    >
                                        <MenuItem value="m">{t('Server.m')}</MenuItem>
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="volumeUnit"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        select
                                        label={t('Server.volumeUnit')}
                                        {...field}
                                        error={!!errors.volumeUnit}
                                        helperText={errors.volumeUnit?.message}
                                        sx={{ mb: 2 }}
                                    >
                                        <MenuItem value="Liter">{t('Server.liter')}</MenuItem>
                                    </TextField>
                                )}
                            />

                            <FormControlLabel
                                control={<Checkbox />}
                                label={t('Server.forcesettings')}
                                sx={{ marginRight: '70%' }}
                            />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>{t('Server.location')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 2 }}>
                            <Controller
                                name="latitude"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label={t('Server.latitude')}
                                        {...field}
                                        error={!!errors.latitude}
                                        helperText={errors.latitude?.message}
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            <Controller
                                name="longitude"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label={t('Server.longitude')}
                                        {...field}
                                        error={!!errors.longitude}
                                        helperText={errors.longitude?.message}
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                            <Controller
                                name="zoom"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label={t('Server.zoom')}
                                        {...field}
                                        error={!!errors.zoom}
                                        helperText={errors.zoom?.message}
                                        sx={{ mb: 2 }}
                                    />
                                )}
                            />
                        </AccordionDetails>
                        <Button variant="outlined" sx={style.currentbutton}>{t('Server.cURRENTLOCATION')}</Button>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography>{t('Server.permissions')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 2 }}>
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
                            aria-controls="panel4-content"
                            id="panel4-header"
                        >
                            <Typography>{t('Server.file')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 2 }}>
                            <Stack spacing={2}>
                                <Dropzone onDrop={handleFileDrop} multiple={false}>
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
                                            <p>{t('Server.para')}</p>
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
                            aria-controls="panel5-content"
                            id="panel5-header"
                        >
                            <Typography>{t('Server.attributes')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 2 }}>
                            <Button variant="outlined" sx={{ p: 3, mb: 2, width: "60%", fontSize: '20px' }}>
                                {t('Server.aDD')}
                            </Button>
                        </AccordionDetails>
                    </Accordion>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: '30%' }}>
                        <Button onClick={handleCancel} variant="outlined" sx={style.cancel}>{t('Server.cANCEL')}</Button>
                        <Button type="submit" variant="contained" sx={style.save}>{t('Server.sAVE')}</Button>
                    </Box>
                </form>
            </div>

        </>
    );
}

