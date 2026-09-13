import { readFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Numer wersji trzymamy w jednym miejscu — w package.json — i wstrzykujemy do
// kodu przy budowaniu. Kopiowanie go do stałej w źródłach kończy się rozjazdem.
const { version } = JSON.parse(readFileSync('./package.json', 'utf8')) as { version: string };

/**
 * Skorowidz jest ładowany dynamicznie, więc przeglądarka dowiaduje się o nim
 * dopiero po wykonaniu głównego pliku — czyli o jedną podróż do serwera za późno.
 * Przy opóźnieniu rzędu pół sekundy widać to wprost w czasie pierwszego malowania.
 * Ta wtyczka dokłada do HTML-a zapowiedź, żeby pobieranie ruszyło równolegle
 * z resztą, a nie po niej.
 */
function zapowiedzSkorowidza(): Plugin {
  return {
    name: 'zapowiedz-skorowidza',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const plik = Object.keys(ctx.bundle ?? {})
          .find((n) => /assets\/skorowidz-.*\.js$/.test(n));
        if (plik === undefined) return html;
        return {
          html,
          tags: [{
            tag: 'link',
            attrs: { rel: 'modulepreload', crossorigin: '', href: `./${plik}` },
            injectTo: 'head',
          }],
        };
      },
    },
  };
}

// Ścieżki względne, żeby build dało się położyć w dowolnym podkatalogu hostingu,
// a nie tylko w korzeniu domeny.
//
// Uwaga, bo to myliło: NIE oznacza to, że dist/index.html zadziała po podwójnym
// kliknięciu. Wejście jest modułem (<script type="module">), a modułu wczytanego
// z file:// przeglądarka nie wykona — traktuje go jako obce źródło i milczy.
// Widać wtedy czarną stronę bez żadnego błędu w konsoli. Potrzebny jest serwer:
// `npm run preview`.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    zapowiedzSkorowidza(),
    VitePWA({
      registerType: 'autoUpdate',
      // Rejestracja bez wstrzykiwania skryptu do HTML — robimy to sami w main.tsx,
      // żeby mieć kontrolę nad momentem i nad tym, co się dzieje przy błędzie.
      injectRegister: null,
      manifest: {
        id: '/strefa-wiedzy-spacex',
        name: 'Strefa Wiedzy — Musk / SpaceX',
        short_name: 'Strefa Wiedzy',
        description:
          'Niezależna, edukacyjna encyklopedia SpaceX i ekosystemu Elona Muska. '
          + 'Projekt nie jest powiązany ze SpaceX, Teslą ani z Elonem Muskiem.',
        lang: 'pl',
        dir: 'ltr',
        start_url: './',
        scope: './',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#000000',
        theme_color: '#000000',
        categories: ['education', 'books', 'news'],
        icons: [
          { src: 'ikona-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'ikona-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'ikona-maskowalna-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: 'ikona.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        ],
      },
      workbox: {
        // Cała baza wiedzy ma być dostępna bez sieci — także porcje danych
        // ładowane dynamicznie i nakładka tłumaczeń.
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        // Nowa wersja instaluje się w tle i przejmuje dopiero przy kolejnym
        // uruchomieniu. Podmiana w trakcie czytania arkusza byłaby wyrwaniem
        // użytkownikowi strony spod palca.
        skipWaiting: false,
        clientsClaim: false,
        cleanupOutdatedCaches: true,
        navigateFallback: 'index.html',
      },
      devOptions: { enabled: false },
    }),
  ],
  define: { __WERSJA__: JSON.stringify(version) },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        // Każda kategoria danych to osobny chunk — ekran główny nie ciągnie całej bazy.
        manualChunks(id) {
          const m = id.match(/src\/data\/entities\/([a-z-]+)\.ts/);
          if (m) return `dane-${m[1]}`;
          // Skorowidz osobno: to jedyna porcja danych na ścieżce pierwszego renderu.
          if (id.includes('src/data/gen/skorowidz')) return 'skorowidz';
          // React musi mieć własną porcję. Bez tego Rollup dokleja go do „ruch",
          // a wtedy framer-motion ląduje na ścieżce pierwszego renderu mimo
          // tego, że ekran główny nie animuje niczego.
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react';
          if (id.includes('node_modules/framer-motion')) return 'ruch';
          if (id.includes('node_modules/fuse.js')) return 'szukaj';
          return undefined;
        },
      },
    },
  },
});
