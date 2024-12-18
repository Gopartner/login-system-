// src/components/uber/UberRide.js
import React from 'react';

const UberRide = ({ rideDetails }) => {
  return (
    <div>
      <h2>Detail Perjalanan</h2>
      <p>Lokasi Penjemputan: {rideDetails.pickup}</p>
      <p>Tujuan: {rideDetails.destination}</p>
      <p>Status: {rideDetails.status}</p>
    </div>
  );
};

export default UberRide;
