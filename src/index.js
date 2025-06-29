//IMPORTANTE: Este código es necesario para que la aplicación React se renderice en el navegador.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Creamos el root y renderizamos la app principal en el elemento con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

