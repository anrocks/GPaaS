import { useState } from 'react';
import { Link } from 'react-router-dom'
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FolderIcon from '@mui/icons-material/Folder';
import TodayIcon from '@mui/icons-material/Today';
import ListIcon from '@mui/icons-material/List';
import BuildIcon from '@mui/icons-material/Build';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import ListItemIcon from '@mui/material/ListItemIcon';

const drawerWidth = 240;


const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidenavbar() {

    const [open, setOpen] = useState(false);





    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />


            <Drawer variant="permanent"
                open={open}>

                <Divider />
                <List>
                    <Link to="/Settings" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={() => { setOpen(!open) }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',

                                    }}
                                >
                                    < ArrowBackIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/Preferences" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',

                                    }}
                                >
                                    < SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Preferences" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Link to="/Notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < NotificationsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notification" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Accounts" style={{ textDecoration: 'none', color: 'inherit' }} >
                    <ListItem disablePadding >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Accounts" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>

                    </ListItem>
                </Link>
                <Link to="/Devices" style={{ textDecoration: 'none', color: 'inherit' }} >
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < StayCurrentPortraitIcon />
                            </ListItemIcon>
                            <ListItemText primary="Devices" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Geofences" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < ModeEditIcon />
                            </ListItemIcon>
                            <ListItemText primary="Geofences" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Groups" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Groups" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Drivers" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drivers" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Calendars" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <  TodayIcon />
                            </ListItemIcon>
                            <ListItemText primary="Calendars" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/ComputedAttributes" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="ComputedAttributes" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Maintenances" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="Maintenances" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/SavedCommands" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < VerticalAlignTopIcon />
                            </ListItemIcon>
                            <ListItemText primary="SavedCommands" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>



                <Divider />
                <Link to="/ Announcement" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <  CampaignIcon />
                            </ListItemIcon>
                            <ListItemText primary="Announncement" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Server" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Server" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/Users" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </Drawer>

        </Box >


    );
}

