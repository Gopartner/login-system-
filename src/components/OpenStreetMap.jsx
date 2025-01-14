import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = () => {
  const position = [-6.200001, 106.816666]; // Ganti dengan koordinat lokasi

  return (
    <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Lokasi Anda.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;

/*OpenStreetMap (OSM):
 * OSM adalah proyek peta kolaboratif
 * yang menyediakan data peta gratis.
 * Anda dapat menggunakan library seperti
 * Leaflet untuk menampilkan
 * peta OSM dalam aplikasi React Anda.
 * */
//npm install leaflet react-leaflet
