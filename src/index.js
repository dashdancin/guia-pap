import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/media.css';
import './styles/abcde.css';
import './styles/abcdemedia.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Verificar si el navegador admite Service Workers
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js') // Ruta al archivo service-worker.js
//       .then((registration) => {
//         console.log('Service Worker registrado con éxito:', registration);
//       })
//       .catch((error) => {
//         console.log('Error al registrar el Service Worker:', error);
//       });
//   });
// }

reportWebVitals();
