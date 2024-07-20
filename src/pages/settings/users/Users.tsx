import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { IconButton, Skeleton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

const Users: React.FC = () => {
    const { t } = useTranslation();
  const sidebarWidth: number = 240; // Sidebar width, same as Notification component
  const isLoading: boolean = true; // Set to true when data is loading
  const users: any[] = []; // Replace with actual user data array

  return (
    <Paper elevation={1} style={{ height: '100vh', width: `calc(100vw - ${sidebarWidth}px)`, marginLeft: `${sidebarWidth}px`, display: 'flex', flexDirection: 'column' }}>
      <Box>
        <TableContainer component={Paper} style={{ background: 'white' }}>
          <Table>
            <TableHead>
            <TableRow>
                <TableCell>{t('Users.name')}</TableCell>
                <TableCell>{t('Users.email')}</TableCell>
                <TableCell>{t('Users.admin')}</TableCell>
                <TableCell>{t('Users.disabled')}</TableCell>
                <TableCell>{t('Users.expiration')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                // Skeleton loading effect when data is loading
                Array.from(Array(3).keys()).map((index: number) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton variant="text" /></TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                  </TableRow>
                ))
              ) : (
                // Render actual user data
                users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.isAdmin ? 'Yes' : 'No'}</TableCell>
                    <TableCell>{user.isDisabled ? 'Yes' : 'No'}</TableCell>
                    <TableCell>{user.expirationDate}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box display="flex" alignItems="center" textAlign="right" justifyContent="space-between" p={2} width="100%">
        <Typography variant="body1" flexGrow={1}>{t('Users.temporary')}</Typography>
        <Switch />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1300, 
        }}
      >
        <IconButton
          sx={{
            backgroundColor: 'blue', 
            color: 'white', 
            '&:hover': {
              backgroundColor: 'darkblue',
            },
          }}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Users;