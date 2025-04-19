import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        header_app: 'http://localhost:5001/dist/remoteEntry.js',
        button_app: 'http://localhost:5000/dist/remoteEntry.js',
        navbar_app: 'http://localhost:5003/dist/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5002,
  },
});
