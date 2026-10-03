import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

declare global {
  interface Window {
    __bootDone?: (() => void) | null;
  }
}

createRoot(document.getElementById('root')!).render(<App />);

// Fade out the boot loader (defined in index.html) once the app has painted
requestAnimationFrame(() => {
  setTimeout(() => window.__bootDone?.(), 300);
});
