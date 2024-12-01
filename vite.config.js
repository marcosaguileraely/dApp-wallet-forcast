import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': resolve('./src/api'),
      '@assets': resolve('./src/assets'),
      '@components': resolve('./src/components'),
      '@core': resolve('./src/core'),
      '@state': resolve('./src/core/states'),
      '@constants': resolve('./src/core/constants'),
      '@theme': resolve('./src/theme'),
      '@utils': resolve('./src/utils'),
      '@views': resolve('./src/views'),
    },
  },
});
