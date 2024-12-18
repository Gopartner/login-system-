import Login from 'components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '@cl/AppLayout';     
import Home from '@p/HomePage';
import Contact from '@p/ContactUs';
import About from '@p/About';
//import Login from '@auth/Login';
import Register from '@auth/sign-in-method-email-password/Register';
import Profile from '@p/Profile';
import DataDisplay from '@c/DataDisplay';
import Shopping from '@cs/Shopping';
//import OpenStreetMap from '@c/OpenStreetMap';
//import MapLibre from '@c/MapLibre';
import NotFound from '@p/NotFound';

function App() {
  return (
    <Routes>
      {/* Semua halaman ini menggunakan AppLayout */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="data-display" element={<DataDisplay/>} />
      </Route>

      {/* Halaman tanpa AppLayout (opsional) */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

