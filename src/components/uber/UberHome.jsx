// src/components/uber/UberHome.js
import React from 'react';
import LocationPicker from '@c/map/LocationPicker';
import RideRequest from '@c/rides/RideRequest';
import FamilyProfile from '@c/family/FamilyProfile';
import PaymentOptions from '@c/payment/PaymentOptions';

const UberHome = () => {
  const initialPosition = [51.505, -0.09]; // Ganti dengan koordinat yang sesuai

  return (
    <div>
      <h1>Selamat Datang di Aplikasi Uber</h1>
      <LocationPicker position={initialPosition} />
      <RideRequest pickupLocation={initialPosition} />
      <FamilyProfile />
      <PaymentOptions />
    </div>
  );
};

export default UberHome;
