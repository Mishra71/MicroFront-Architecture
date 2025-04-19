import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'button_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,

    // 👇 Same as header_app
    rollupOptions: {
      output: {
        entryFileNames: `remoteEntry.js`,
      },
    },
  },
  server: {
    port: 5000,
    cors: true,
  },
});
