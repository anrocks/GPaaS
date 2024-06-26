import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next'

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDqtTmzaIVyYybzG8K9zNz2xDn5dgKIrts" // Replace with your Google Maps API key
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (isLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const pos = { lat: latitude, lng: longitude };
          setCurrentPosition(pos);
          if (map) {
            map.setCenter(pos);

            // Add marker for current position
            new google.maps.Marker({
              position: pos,
              map: map,
              title: t('Dashboard.loc'),
              icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Customize the marker icon if needed
              },
            });
          }
        },
        (error) => {
          return <div>{t('errloading')}</div>;
        }
      );
    }
  }, [isLoaded, map]);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);
  

  return (
    <div  style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Add markers, info windows, etc. here if needed */}
        </GoogleMap>
      ) : (
        <div>{t('Dashboard.load')}</div>
      )}
    </div>
  );
};

export default Dashboard;
