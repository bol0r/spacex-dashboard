/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // Świadomie kasujemy domyślną paletę Tailwinda. W projekcie istnieje pięć
    // kolorów z design planu i nic poza nimi — reszta to materiały.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      tlo: 'var(--tlo)',
      tekst: 'var(--tekst)',
      'tekst-2': 'var(--tekst-2)',
      blekit: 'var(--blekit)',
      plomien: 'var(--plomien)',
    },
    boxShadow: { none: 'none' }, // cienia nie ma w systemie — głębię robi rozmycie
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'SF Pro Display', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'duzy-tytul': ['34px', { lineHeight: '41px', letterSpacing: '-0.4px', fontWeight: '700' }],
        'tytul-2': ['22px', { lineHeight: '28px', letterSpacing: '-0.26px', fontWeight: '600' }],
        naglowek: ['17px', { lineHeight: '22px', letterSpacing: '-0.43px', fontWeight: '600' }],
        tresc: ['17px', { lineHeight: '26px', letterSpacing: '-0.41px' }],
        callout: ['16px', { lineHeight: '23px', letterSpacing: '-0.32px' }],
        podtytul: ['15px', { lineHeight: '20px', letterSpacing: '-0.23px' }],
        przypis: ['13px', { lineHeight: '17px', letterSpacing: '-0.08px' }],
        podpis: ['12px', { lineHeight: '16px', letterSpacing: '0px' }],
      },
      borderRadius: { kafel: '20px', arkusz: '28px', chip: '7px', pigulka: '999px' },
      spacing: {
        'bezp-gora': 'env(safe-area-inset-top, 0px)',
        'bezp-dol': 'env(safe-area-inset-bottom, 0px)',
        'bezp-lewo': 'env(safe-area-inset-left, 0px)',
        'bezp-prawo': 'env(safe-area-inset-right, 0px)',
      },
    },
  },
  plugins: [],
};
