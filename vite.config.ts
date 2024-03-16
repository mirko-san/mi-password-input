import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/mi-password-input.ts',
      name: 'password-input',
      fileName: (format) => `mi-password-input.${format}.js`,
    },
    rollupOptions: {
      input: 'src/mi-password-input.ts',
      output: {
        dir: 'dist/',
        format: 'es',
      },
    },
  },
  server: {
    port: 3080,
  },
});
