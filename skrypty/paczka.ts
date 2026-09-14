/**
 * Paczka do wgrania na hosting.
 *
 * Zbiera zawartość dist/ w jeden plik zip, gotowy do przeciągnięcia na
 * Cloudflare Pages albo do rozpakowania na własnym serwerze. Pliki leżą
 * w korzeniu archiwum, a nie w podkatalogu dist/ — po rozpakowaniu index.html
 * ma być od razu na wierzchu, bo tego oczekują oba sposoby wgrywania.
 *
 * Uruchamiane przez `npm run wydanie`, które najpierw przepuszcza projekt przez
 * pełne sprawdzenie. Paczka z błędem walidatora nie powinna w ogóle powstać.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const KORZEN = resolve('.');
const DIST = join(KORZEN, 'dist');
const WYDANIE = join(KORZEN, 'wydanie');

/** Pliki, bez których wgrana strona działa, ale źle — sprawdzamy je z nazwy. */
const WYMAGANE = [
  'index.html',
  'sw.js',
  'manifest.webmanifest',
  // Bez tych dwóch hosting może zapamiętać service workera na długo
  // i po poprawce ekipa zobaczy starą wersję.
  '_headers',
  '.htaccess',
];

function policzPliki(katalog: string): { pliki: number; bajty: number } {
  let pliki = 0;
  let bajty = 0;
  for (const nazwa of readdirSync(katalog)) {
    const sciezka = join(katalog, nazwa);
    const s = statSync(sciezka);
    if (s.isDirectory()) {
      const pod = policzPliki(sciezka);
      pliki += pod.pliki;
      bajty += pod.bajty;
    } else {
      pliki += 1;
      bajty += s.size;
    }
  }
  return { pliki, bajty };
}

function main(): void {
  const { version } = JSON.parse(readFileSync(join(KORZEN, 'package.json'), 'utf8')) as { version: string };

  const brakujace = WYMAGANE.filter((p) => !existsSync(join(DIST, p)));
  if (brakujace.length > 0) {
    console.error(`BŁĄD: w dist/ brakuje: ${brakujace.join(', ')}. Uruchom najpierw npm run build.`);
    process.exit(1);
  }

  const { pliki, bajty } = policzPliki(DIST);
  // Cloudflare Pages przyjmuje przy wgrywaniu ręcznym najwyżej 1000 plików.
  if (pliki > 1000) {
    console.error(`BŁĄD: ${pliki} plików — Cloudflare Pages przyjmuje ręcznie najwyżej 1000.`);
    process.exit(1);
  }

  mkdirSync(WYDANIE, { recursive: true });
  const cel = join(WYDANIE, `strefa-wiedzy-${version}.zip`);
  rmSync(cel, { force: true });

  try {
    // Kropka jako źródło, żeby do archiwum trafiły też pliki ukryte (.htaccess).
    execFileSync('zip', ['-r', '-X', '-q', cel, '.', '-x', '*.DS_Store'], { cwd: DIST, stdio: 'inherit' });
  } catch {
    console.error('BŁĄD: nie udało się uruchomić programu zip.');
    process.exit(1);
  }

  const rozmiar = statSync(cel).size;
  console.log(`\nPaczka gotowa: wydanie/strefa-wiedzy-${version}.zip`);
  console.log(`  plików: ${pliki}, po rozpakowaniu ${(bajty / 1024 / 1024).toFixed(2)} MB, archiwum ${(rozmiar / 1024 / 1024).toFixed(2)} MB`);
  console.log('  instrukcja wgrania: WDROZENIE.md');
}

main();
