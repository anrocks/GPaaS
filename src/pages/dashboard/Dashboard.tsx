import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Collapse,
} from '@mui/material';
import {
  Map as MapIcon,
  Settings as SettingsIcon,
  Layers as LayersIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  MyLocation as MyLocationIcon,
  Person as PersonIcon,
  Summarize as SummarizeIcon,
  NotificationsActive as NotificationsActiveIcon,
  Tune as TuneIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ZoomControl: React.FC = () => {
  const map = useMap();

  const handleZoomIn = () => {
    map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    map.setZoom(map.getZoom() - 1);
  };

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    right: 16,
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 2,
    padding: 5,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1100,
    color: '#333',
  };

  return (
    <>
      <IconButton
        style={{ ...buttonStyle, top: '20%' }}
        aria-label="zoom-in"
        onClick={handleZoomIn}
      >
        <AddIcon />
      </IconButton>

      <IconButton
        style={{ ...buttonStyle, top: '25%' }}
        aria-label="zoom-out"
        onClick={handleZoomOut}
      >
        <RemoveIcon />
      </IconButton>

      <IconButton
        style={{ ...buttonStyle, top: '30%' }}
        aria-label="layers"
      >
        <LayersIcon />
      </IconButton>

      <IconButton
        style={{ ...buttonStyle, top: '35%' }}
        aria-label="my-location"
      >
        <MyLocationIcon />
      </IconButton>

      <IconButton
        style={{ ...buttonStyle, top: '40%' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>

      <IconButton
        style={{ ...buttonStyle, top: '45%' }}
        aria-label="notifications"
      >
        <NotificationsActiveIcon />
      </IconButton>
    </>
  );
};

const Sidebar: React.FC<{ value: number; setValue: (newValue: number) => void }> = ({ value, setValue }) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <Box sx={{ width: 300, p: 2, zIndex: 1000, backgroundColor: 'white', boxShadow: 1, position: 'absolute', top: 7, bottom: 7, left: 7, overflow: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <MapIcon sx={{ mr: 1, color: '#808080CC' }} />
        <TextField
          placeholder={t('Dashboard.searchDevices')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                 <IconButton
                  aria-label="tune"
                  onClick={() => setShowFilters(!showFilters)}
                  style={{ outline: 'none' }}
                >
                  <TuneIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          fullWidth
        />
        <IconButton aria-label="add" sx={{ ml: 1}}>
          <AddIcon />
        </IconButton>
      </Box>

      <Collapse in={showFilters}>
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, mt: 2 }}>
          <TextField
            select
            fullWidth
            label="Status"
            variant="outlined"
            sx={{ mb: 2 }}
          >
            <MenuItem value="active">{t('Dashboard.active')}</MenuItem>
            <MenuItem value="inactive">{t('Dashboard.inactive')}</MenuItem>
          </TextField>
          <TextField
            select
            fullWidth
            label="Groups"
            variant="outlined"
            sx={{ mb: 2 }}
          >
             <MenuItem value="group1">{t('Dashboard.group1')}</MenuItem>
             <MenuItem value="group2">{t('Dashboard.group2')}</MenuItem>
          </TextField>
          <TextField
            select
            fullWidth
            label="Sort By"
            variant="outlined"
            sx={{ mb: 2 }}
          >
        <MenuItem value="name">{t('Dashboard.name')}</MenuItem>
        <MenuItem value="date">{t('Dashboard.date')}</MenuItem>
          </TextField>
          <FormControlLabel control={<Checkbox />} label={t('Dashboard.filterOnMap')} />
        </Box>
      </Collapse>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: 1,
        }}
      >
        <BottomNavigationAction 
          label={t('Dashboard.map')}
          icon={<MapIcon style={{ color: value === 0 ? 'darkblue' : 'grey' }} />} 
          onClick={() => setValue(0)}
          sx={{
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        />
        <BottomNavigationAction 
          label={t('Dashboard.reports')}  
          icon={<SummarizeIcon style={{ color: value === 1 ? 'darkblue' : 'grey' }} />} 
          onClick={() => setValue(1)}
          sx={{
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        />
           <BottomNavigationAction
          label={t('Dashboard.settings')}  
          icon={<SettingsIcon style={{ color: value === 2 ? 'darkblue' : 'grey' }} />}
          component={Link} to="/settings" 
          onClick={() => setValue(2)}
          sx={{
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        />
        <BottomNavigationAction 
          label={t('Dashboard.account')}  
          icon={<PersonIcon style={{ color: value === 3 ? 'darkblue' : 'grey' }} />} 
          onClick={() => setValue(3)}
          sx={{
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
};
const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [value, setValue] = useState<number>(0);
  const zoom: number = 13;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => {
        console.error('Error getting current position:', err);
      }
    );
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Sidebar value={value} setValue={setValue} />
        <Box sx={{ flex: 1, position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', zIndex: 0 }}>
          {position && (
            <MapContainer center={position} zoom={zoom} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} zoomControl={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>{t('Dashboard.loc')}</Popup>
              </Marker>
              <ZoomControl />
            </MapContainer>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;