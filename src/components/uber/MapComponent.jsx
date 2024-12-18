// src/components/uber/MapComponent.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({ onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState([-6.200001, 106.816666]);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setMarkerPosition([lat, lng]);
    onLocationSelect([lat, lng]);
  };

  return (
    <MapContainer center={markerPosition} zoom={13} style={{ height: '300px', width: '100%' }} onClick={handleMapClick}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition}>
        <Popup>Lokasi Anda</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
