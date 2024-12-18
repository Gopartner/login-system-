// src/components/rides/ScheduleRide.js
import React, { useState } from 'react';

const ScheduleRide = () => {
  const [dateTime, setDateTime] = useState('');

  const scheduleRide = () => {
    if (dateTime) {
      console.log("Perjalanan dijadwalkan pada: ", dateTime);
    }
  };

  return (
    <div>
      <h2>Jadwalkan Perjalanan</h2>
      <input type="datetime-local" onChange={(e) => setDateTime(e.target.value)} />
      <button onClick={scheduleRide}>Jadwalkan</button>
    </div>
  );
};

export default ScheduleRide;
