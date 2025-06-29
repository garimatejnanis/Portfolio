//Hook
import React, { useState } from 'react'; 
//Navegar entre páginas
import { Link } from 'react-router-dom'; 
//Immagen
import WebLogo from '../assets/web-logo.svg'; 

function Cabecera() {
  {/*Usamos el hook, que llama al estado guarda si el menu esta abierto o cerrado */}
  const [menuOpen, setMenuOpen] = useState(false);

  {/*Cambia el estado*/}
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid cabecera">
      <div className="row justify-content-center align-items-center menu">

        <div className="col-xl-auto col-lg-auto col-md-auto col-auto logoCabecera">
          <Link to="/">
            <img src={WebLogo} className="logoCabeceraIMG" alt="Web Logo" title='Web Logo'/>
          </Link>
        </div>

        {/* Menú para movil y tablet */}
        <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className="col-xl-auto col-lg-auto col-md-auto col-auto menuCabecera">
          <Link to="/">Home</Link>
        </div>

        <div className="col-xl-auto col-lg-auto col-md-auto col-auto menuCabecera">
          <Link to="/aboutme">About me</Link>
        </div>

        <div className="col-xl-auto col-lg-auto col-md-auto col-auto menuCabecera">
          <Link to="/education">Education</Link>
        </div>

        <div className="col-xl-auto col-lg-auto col-md-auto col-auto menuCabecera">
          <Link to="/experience">Experience</Link>
        </div>

        <div className="col-xl-auto col-lg-auto col-md-auto col-auto menuCabecera">
          <Link to="/contact">Contact</Link>
        </div>

        {/*Si es true se muestra el contenido y en el caso contrario no muestra nada */}
        {menuOpen && (
          <div className="menu-responsive d-flex flex-column align-items-center" id="menu-list">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/aboutme" onClick={() => setMenuOpen(false)}>About me</Link>
            <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
            <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
}

//Exportamos
export default Cabecera;
