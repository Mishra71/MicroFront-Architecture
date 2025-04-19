import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'navbar_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Navbar': './src/Navbar.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,

    // 👇 This is the important part
    rollupOptions: {
      output: {
        entryFileNames: `remoteEntry.js`,
      },
    },
  },
  server: {
    port: 5003,
    cors: true,
  },
});
