import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Corrigé de index.js à index.css
import App from './App'; // Gardez UN SEUL import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  // Corrigé de StrictNode à StrictMode
    <App />
  </React.StrictMode>
);

// Si vous utilisez reportWebVitals
