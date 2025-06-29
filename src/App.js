//Importamos React y los estilos principales
import React from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css';

//Importamos herramientas de React Router para la navegación entre páginas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './componentes/ScrollToTop';

//Importamos las páginas del sitio
import Home from './pages/home'; 
import AboutMe from './pages/aboutme';
import Education from './pages/education';
import Experience from './pages/experience';
import Contact from './pages/contact';

//Función principal que define la estructura de navegación de toda la web
function App() {
  return (
    <Router>

      {/* Este componente asegura que, al cambiar de página, la vista haga scroll arriba */}
      <ScrollToTop />
      <Routes>

        {/* Definimos las rutas de la aplicación */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

//Exportamos el componente principal para que pueda ser usado en index.js
export default App;
