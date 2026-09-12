import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Numer wersji trzymamy w jednym miejscu — w package.json — i wstrzykujemy do
// kodu przy budowaniu. Kopiowanie go do stałej w źródłach kończy się rozjazdem.
const { version } = JSON.parse(readFileSync('./package.json', 'utf8')) as { version: string };

// Ścieżki względne, żeby build działał także z file:// (wymóg z briefu).
export default defineConfig({
  base: './',
  plugins: [react()],
  define: { __WERSJA__: JSON.stringify(version) },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        // Każda kategoria danych to osobny chunk — ekran główny nie ciągnie całej bazy.
        manualChunks(id) {
          const m = id.match(/src\/data\/entities\/([a-z-]+)\.ts/);
          if (m) return `dane-${m[1]}`;
          if (id.includes('node_modules/framer-motion')) return 'ruch';
          if (id.includes('node_modules/fuse.js')) return 'szukaj';
          return undefined;
        },
      },
    },
  },
});
