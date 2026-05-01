import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tnman.web.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  server: {
    host: true,
    port: 4321
  },
  vite: {
    build: {
      target: 'es2022'
    }
  }
});
