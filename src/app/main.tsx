import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../style/tokeny.css';
import { App } from './App';

const korzen = document.getElementById('root');
if (korzen === null) throw new Error('Brak elementu #root');
createRoot(korzen).render(<StrictMode><App /></StrictMode>);
