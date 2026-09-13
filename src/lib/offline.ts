/**
 * Rejestracja service workera.
 *
 * Robimy to ręcznie, a nie wtyczką wstrzykującą skrypt do HTML, z dwóch powodów.
 * Po pierwsze rejestracja ma się odbyć dopiero po pierwszym renderze — instalacja
 * workera potrafi konkurować o sieć z ładowaniem danych. Po drugie chcemy mieć
 * własne zachowanie przy braku wsparcia i przy błędzie: aplikacja działa dalej,
 * tylko bez trybu offline, i nie wypisuje nic do konsoli użytkownika.
 *
 * Nowa wersja instaluje się w tle i przejmuje dopiero przy kolejnym uruchomieniu
 * (skipWaiting jest wyłączone w konfiguracji). Nikomu nie podmieniamy strony
 * w trakcie czytania.
 */
export function wlaczTrybOffline(): void {
  if (!('serviceWorker' in navigator)) return;
  // Nad file:// service worker nie działa z założenia — nie ma czego próbować.
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') return;

  const rejestruj = () => {
    void navigator.serviceWorker.register(new URL('sw.js', window.location.href), { scope: './' })
      .catch(() => {
        // Brak trybu offline nie jest awarią aplikacji. Zostawiamy to w ciszy.
      });
  };

  // requestIdleCallback nie jest dostępny w Safari — stąd zapas na setTimeout.
  const odloz = window.requestIdleCallback ?? ((f: () => void) => window.setTimeout(f, 1200));
  odloz(() => rejestruj());
}
