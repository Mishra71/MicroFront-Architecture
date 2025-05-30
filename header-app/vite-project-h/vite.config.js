import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'header_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header.jsx',
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
    port: 5001,
    cors: true,
  },
});
