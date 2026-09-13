import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../style/tokeny.css';
import { App } from './App';
import { wlaczTrybOffline } from '../lib/offline';

const korzen = document.getElementById('root');
if (korzen === null) throw new Error('Brak elementu #root');
createRoot(korzen).render(<StrictMode><App /></StrictMode>);

// Tryb offline włączamy po pierwszym renderze — instalacja workera nie ma
// konkurować o sieć z ładowaniem bazy.
wlaczTrybOffline();
