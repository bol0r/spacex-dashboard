/**
 * Krótkie drgnięcie przy otwarciu i zamknięciu arkusza. Dziesięć milisekund
 * to dolna granica tego, co telefon w ogóle odtworzy — ma być wyczuwalne
 * w palcu, a nie słyszalne.
 */

const KLUCZ = 'strefa-wiedzy:haptyka';

export function haptykaWlaczona(): boolean {
  try {
    return window.localStorage.getItem(KLUCZ) !== 'nie';
  } catch {
    return true; // tryb prywatny blokuje localStorage — domyślnie włączona
  }
}

export function ustawHaptyke(wlaczona: boolean): void {
  try {
    window.localStorage.setItem(KLUCZ, wlaczona ? 'tak' : 'nie');
  } catch {
    // brak pamięci to nie powód, żeby wywalać aplikację
  }
}

export function drgnij(ms = 10): void {
  if (!haptykaWlaczona()) return;
  if (typeof navigator.vibrate !== 'function') return;

  // Przeglądarka odrzuca wibrację, dopóki użytkownik nie dotknął strony, i wypisuje
  // przy tym błąd do konsoli. Sprawdzamy aktywację, żeby nie zaśmiecać logu.
  const aktywacja = (navigator as Navigator & { userActivation?: { hasBeenActive: boolean } }).userActivation;
  if (aktywacja !== undefined && !aktywacja.hasBeenActive) return;

  try {
    navigator.vibrate(ms);
  } catch {
    // brak silnika wibracji nie jest błędem, który ma kogokolwiek interesować
  }
}
