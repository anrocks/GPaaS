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

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
const preferencesSchema = z.object({

    activeMap: z.string().min(1, 'Active map selection is required'),
    popupInfo: z.string().max(200, 'Popup info cannot exceed 200 characters').optional(),
    liveRoutes: z.string().min(1, 'Live routes selection is required'),
    showDirection: z.string().min(1, 'Show direction selection is required'),
    showGeofences: z.boolean(),
    follow: z.boolean(),
    markersClustering: z.boolean(),
    showMapOnSelection: z.boolean(),
    deviceTitle: z.string().min(1, 'Device title selection is required'),
    deviceDetail: z.string().max(100, 'Device detail cannot exceed 100 characters').optional(),
    soundEvents: z.string().min(1, 'Sound events selection is required'),
    soundAlarms: z.string().min(1, 'Sound alarms selection is required'),
});

type PreferencesFormValues = z.infer<typeof preferencesSchema>;
const Preferences = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<PreferencesFormValues>({
        resolver: zodResolver(preferencesSchema),
        mode: 'onTouched',
    });

    const onSubmit = (data: PreferencesFormValues) => {

        console.log('Form Data:', data);
    };

    const handleCancel = () => {
        reset(); // Clear form fields
    };


const Preferences = () => {

    const { t } = useTranslation();
    return (
        <>
            <Box height={100} style={{ marginBottom: '50%' }}>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div >

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>{t('Preference.map')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                                <Controller
                                    name="activeMap"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            select
                                            label={t('Preference.activeMap')}
                                            error={!!errors.activeMap}
                                            helperText={errors.activeMap?.message}
                                            sx={{ mb: 2 }}
                                        >
                                            <MenuItem value="LocationIQ Streets,OpenStreetMap">LocationIQ Streets,OpenStreetMap</MenuItem>
                                        </TextField>
                                    )}
                                />
                                <Controller
                                    name="popupInfo"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            label={t('Preference.popupInfo')}
                                            error={!!errors.popupInfo}
                                            helperText={errors.popupInfo?.message}
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />
                                <Controller
                                    name="liveRoutes"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            select
                                            label={t('Preference.liveRoutes')}
                                            error={!!errors.liveRoutes}
                                            helperText={errors.liveRoutes?.message}
                                            sx={{ mb: 2 }}
                                        >
                                            <MenuItem value="Disabled">Disabled</MenuItem>
                                        </TextField>
                                    )}
                                />
                                <Controller
                                    name="showDirection"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            select
                                            label={t('Preference.showDirection')}
                                            error={!!errors.showDirection}
                                            helperText={errors.showDirection?.message}
                                            sx={{ mb: 2 }}
                                        >
                                            <MenuItem value="Selected Devices">Selected Devices</MenuItem>
                                        </TextField>
                                    )}
                                />
                                <FormGroup>
                                    <Controller
                                        name="showGeofences"
                                        control={control}
                                        defaultValue={false}
                                        render={({ field }) => (
                                            <FormControlLabel
                                                control={<Checkbox {...field} checked={field.value} />}
                                                label={t('Preference.showGeofences')}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="follow"
                                        control={control}
                                        defaultValue={false}
                                        render={({ field }) => (
                                            <FormControlLabel
                                                control={<Checkbox {...field} checked={field.value} />}
                                                label={t('Preference.follow')}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="markersClustering"
                                        control={control}
                                        defaultValue={false}
                                        render={({ field }) => (
                                            <FormControlLabel
                                                control={<Checkbox {...field} checked={field.value} />}
                                                label={t('Preference.markersClustering')}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="showMapOnSelection"
                                        control={control}
                                        defaultValue={false}
                                        render={({ field }) => (
                                            <FormControlLabel
                                                control={<Checkbox {...field} checked={field.value} />}
                                                label={t('Preference.showMapOnSelection')}
                                            />
                                        )}
                                    />
                                </FormGroup>


                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography>{t('Preference.devices')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Controller
                                    name="deviceTitle"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            select
                                            label={t('Preference.deviceTitle')}
                                            error={!!errors.deviceTitle}
                                            helperText={errors.deviceTitle?.message}
                                            sx={{ mb: 2 }}
                                        >
                                            <MenuItem value="Name">Name</MenuItem>
                                        </TextField>
                                    )}
                                />
                                <Controller
                                    name="deviceDetail"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            select
                                            label={t('Preference.deviceDetail')}
                                            error={!!errors.deviceDetail}
                                            helperText={errors.deviceDetail?.message}
                                            sx={{ mb: 2 }}
                                        >
                                            <MenuItem value="Device Detail">Device Detail</MenuItem>
                                        </TextField>
                                    )}
                                />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography>{t('Preference.notificationSound')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Controller
                                    name="soundEvents"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            select
                                            label={t('Preference.soundEvents')}
                                            error={!!errors.soundEvents}
                                            helperText={errors.soundEvents?.message}
                                            sx={{ mb: 2 }}
                                        >
                                            <MenuItem value="Sound Events">Sound Events</MenuItem>
                                        </TextField>
                                    )}
                                />
                                <Controller
                                    name="soundAlarms"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant='outlined'
                                            select
                                            label={t('Preference.soundAlarms')}
                                            error={!!errors.soundAlarms}
                                            helperText={errors.soundAlarms?.message}
                                            sx={{ mb: 2 }}
                                        >
                                            <MenuItem value="SOS">SOS</MenuItem>
                                        </TextField>
                                    )}
                                />
                            </AccordionDetails>

                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography>{t('Preference.token')}</Typography>
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
                                <Typography>{t('Preference.info')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>
                        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '30%' }}>

                            <Button type="button" onClick={handleCancel}
                                variant="outlined" style={{ minWidth: '150px', minHeight: '40px', fontSize: '15px' }}>{t('Preference.cancel')} </Button>
                            <Button type="submit" variant="contained" style={{ minWidth: '150px', minHeight: '40px', fontSize: '15px' }}>{t('Preference.save')}</Button>
                        </div>
                    </div>
                </form>

               
            </Box>
        </>
    );
}
export default Preferences  
