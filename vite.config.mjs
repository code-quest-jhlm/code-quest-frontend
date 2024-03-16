import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), Unfonts({
    google: {
      families: [
        {
          name: 'Poppins',
          styles: 'wght@200;500;600;700;800',
        },
        {
          name: 'Inter',
          styles: 'wght@100..900',
        }
      ]
    }
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
