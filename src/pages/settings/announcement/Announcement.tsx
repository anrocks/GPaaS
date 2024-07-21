import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion';
import * as style from './Announcement.style'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
const Announcement = () => {
    const { t } = useTranslation();
    return (
        <>
            <Box height={100} >
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>{t('Announcement.required')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label={t('Announcement.subject')}
                                sx={{ mb: 2 }} />
                            <TextField
                                fullWidth
                                variant='outlined'
                                label={t('Announcement.message')}
                                sx={{ mb: 2 }} />
                        </AccordionDetails>
                    </Accordion>
                    <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '30%' }}>

                        <Button variant="outlined" style={style.cancel}> {t('Announcement.cANCEL')}</Button>
                        <Button variant="contained" style={style.save}>{t('Announcement.sEND')}</Button>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Announcement;
