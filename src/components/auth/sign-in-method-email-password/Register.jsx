// src/components/auth/Register.jsx
import React, { useState } from 'react';
import { auth } from '@f/firebaseConfig';  // Pastikan path benar
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Penulisan fungsi diperbaiki
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@cont/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Reset error sebelum pendaftaran

    // Validasi konfirmasi kata sandi
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);  // Fungsi Firebase Auth untuk registrasi
      navigate('/profile'); // Redirect ke halaman profil setelah registrasi
    } catch (error) {
      console.error('Registration error:', error.message);
      setError(error.message); // Set error message untuk ditampilkan
    }
  };

  if (user) {
    navigate('/profile'); // Redirect jika sudah login
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      {/* Menampilkan pesan kesalahan jika ada */}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Register;

