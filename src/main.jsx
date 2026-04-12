// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ⬅️ Asegúrate de que importa App
import './index.css';         // Importa el CSS (incluido Tailwind)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* ⬅️ Renderiza el componente App */}
  </React.StrictMode>,
);