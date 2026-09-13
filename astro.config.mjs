import { defineConfig } from 'astro/config';

// Site servi depuis https://azerdsq131.github.io/labo/
export default defineConfig({
  output: 'static',
  site: 'https://azerdsq131.github.io',
  base: '/labo',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
