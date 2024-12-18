import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@f/firebaseConfig';  // pastikan path ini benar sesuai konfigurasi Anda
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Fungsi untuk logout
  const logout = () => {
    return signOut(auth);
  };

  // Fungsi untuk update profile
  const updateProfileData = async (name, photoURL) => {
    if (currentUser) {
      try {
        await updateProfile(currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
        setCurrentUser({
          ...currentUser,
          displayName: name,
          photoURL: photoURL,
        });
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  // Menggunakan listener untuk memantau status autentikasi
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, updateProfileData }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

