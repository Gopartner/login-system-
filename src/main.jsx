import React from 'react';
import HelmetProvider from '@cont/HelmetProvider';
import AuthProvider from '@cont/AuthProvider';
import BrowserRouter from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
	<HelmetProvider>
         <App />
	</HelmetProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
