/// <reference types="vitest" />

import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: ["./src/setupTest.ts"],
    pool: 'forks',
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text', 'html'],
      include: ['src/**/*'],
      exclude: ['src/heroes/router', 'src/heroes/data'],
      reportOnFailure: true,
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
});
