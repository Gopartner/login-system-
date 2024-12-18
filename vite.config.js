import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//npm install path --save-dev (untuk path)
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@c': path.resolve(__dirname, 'src/components'),
      '@cl': path.resolve(__dirname, 'src/components/layouts'),
      '@css': path.resolve(__dirname,'src/styles'),
      '@p': path.resolve(__dirname, 'src/pages'),
      '@cs': path.resolve(__dirname, 'src/components/shopping'),
      '@f': path.resolve(__dirname, 'src/config'),
      '@u': path.resolve(__dirname, 'src/utils'),
      '@h': path.resolve(__dirname, 'src/hooks'),
      '@cont': path.resolve(__dirname, 'src/context'),
      '@auth': path.resolve(__dirname, 'src/components/auth'),
    },
  },
});
