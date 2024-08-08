import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Typography, TextField, Box, Button } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import * as style from './Announcement.style';

const announcementSchema = z.object({
    subject: z.string()
        .min(3, 'Subject must be at least 3 characters long')
        .max(50, 'Subject must be less than 50 characters long')
        .regex(/^[a-zA-Z0-9 ]+$/, 'Subject can only contain alphanumeric characters and spaces'),
    message: z.string().min(3, 'Subject must be at least 3 characters long')
        .max(50, 'Subject must be less than 50 characters long')
        .regex(/^[a-zA-Z0-9 ]+$/, 'Subject can only contain alphanumeric characters and spaces'),
});

type AnnouncementFormValues = z.infer<typeof announcementSchema>;

const Announcement = () => {

    const { t } = useTranslation();
    const { control, handleSubmit, reset } = useForm<AnnouncementFormValues>({
        resolver: zodResolver(announcementSchema),
        mode: 'onTouched'
    });

    const onSubmit = (data: AnnouncementFormValues) => {

        console.log('Form Data:', data)
    };
    const handleCancel = () => {
        reset(); // Clear form fields
    };

    return (
        <Box height={100}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>{t('Announcement.required')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Controller
                            name="subject"
                            control={control}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                                <TextField
                                    {...field}
                                    label={t('Announcement.subject')}
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            )}
                        />
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                                <TextField
                                    {...field}
                                    label={t('Announcement.message')}
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                            )}
                        />
                    </AccordionDetails>
                </Accordion>
                <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '30%' }}>
                    <Button variant="outlined" onClick={handleCancel} style={style.cancel}>{t('Announcement.cancel')}</Button>
                    <Button type="submit" variant="contained" style={style.send}>{t('Announcement.send')}</Button>
                </div>
            </form>
        </Box>
    )
}
export default Announcement;