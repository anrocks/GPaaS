import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Appbar from './Appbar';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState<[number, number] | null>(null);
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
    <div style={{ display: 'flex' }}>
      <Appbar/>
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {position && (
          <MapContainer center={position} zoom={zoom} style={{ height: '100vh', width: '100%', position: 'fixed' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              tileSize={512}
              zoomOffset={-1}
            />
            <Marker position={position}>
              <Popup>{t('Dashboard.loc')}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
