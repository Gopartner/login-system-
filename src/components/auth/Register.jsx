// src/components/auth/Register.js
import React, { useState } from 'react';
import { auth } from '@f/firebaseConfig';
import { createUser WithEmailAndPassword } from "firebase/auth";

const Register = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUser WithEmailAndPassword(auth, email, password);
      onRegisterSuccess(); // Callback untuk mengarahkan pengguna setelah registrasi
    } catch (error) {
      setError("Error registering: " + error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
