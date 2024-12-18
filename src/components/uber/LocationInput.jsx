// src/components/uber/LocationInput.js
import React from 'react';

const LocationInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        className="mt-1 p-2 border border-gray-300 rounded w-full"
        placeholder={`Masukkan ${label}`} 
      />
    </div>
  );
};

export default LocationInput;
