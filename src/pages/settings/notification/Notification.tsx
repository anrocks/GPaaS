import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface NotificationData {
  type: string;
  allDevices: string;
  alarms: string;
  channels: string;
}

const Notification: React.FC = () => {
  const { t } = useTranslation();
  const notificationData: NotificationData[] = [];

  // Assuming the sidebar width is 240px
  const sidebarWidth = 240;

  return (
    <Paper
      elevation={1}
      sx={{
        height: '100vh',
        width: `calc(100vw - ${sidebarWidth}px)`,
        marginLeft: `${sidebarWidth}px`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TableContainer sx={{ flex: 1 }}>
        <Table stickyHeader sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>{t('Notification.type')}</TableCell>
              <TableCell>{t('Notification.allDevices')}</TableCell>
              <TableCell>{t('Notification.alarms')}</TableCell>
              <TableCell>{t('Notification.channels')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notificationData.map((notification, index) => (
              <TableRow key={index}>
                <TableCell>{notification.type}</TableCell>
                <TableCell>{notification.allDevices}</TableCell>
                <TableCell>{notification.alarms}</TableCell>
                <TableCell>{notification.channels}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Notification;
