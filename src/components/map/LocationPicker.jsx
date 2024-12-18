// src/components/map/LocationPicker.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LocationPicker = ({ position }) => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 />
      <Marker position={position}>
        <Popup>
          Lokasi Anda
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationPicker;
