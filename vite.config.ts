import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/password-input.ts',
      name: 'password-input',
      fileName: (format) => `password-input.${format}.js`,
    },
    rollupOptions: {
      input: 'src/password-input.ts',
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
