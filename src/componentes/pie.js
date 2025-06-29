import React from 'react';
//Navegar entre páginas
import { Link } from 'react-router-dom'; 
//Immagenes
import { ReactComponent as LogoLinkedin } from '../assets/linkedin-logo.svg';
import { ReactComponent as LogoGmail } from '../assets/gmail-logo.svg';
import { ReactComponent as LogoGitHub } from '../assets/github-logo.svg';
import WebLogo from '../assets/web-logo.svg';

function Pie() {
  return (
    <footer>
      <div className="container-fluid pie">
        <div className="row webLogoPie menupie">
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <Link to="/" aria-label="Home">
              <img src={WebLogo} className="logoCabeceraIMG" id="logoPieIMG" alt="Web Logo" title='Web Logo'/>
            </Link>
            <p className="par1">Code leads to success</p>
          </div>
        </div>

        <div className="row menupie" role="navigation" aria-label="Footer Navigation">
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <p>DIRECTORY</p>
          </div>
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <Link to="/">Home</Link>
          </div>
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <Link to="/aboutme">About me</Link>
          </div>
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <Link to="/education">Education</Link>
          </div>
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <Link to="/experience">Experience</Link>
          </div>
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="row menupie">
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
            <p>FOLLOW ME</p>
          </div>
          <div className="col-xl-auto col-lg-auto col-md-auto col-auto iconos">
            <a href="https://es.linkedin.com/in/garima-ts-6b8252248" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
              <LogoLinkedin width={25} height={50} className="logospie" />
            </a>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garimatejnani@gmail.com" target="_blank" rel="noreferrer" aria-label="Send email to Garima">
              <LogoGmail width={25} height={50} className="logospie" />
            </a>

            <a href="https://github.com/garimatejnanis/" target="_blank" rel="noreferrer" aria-label="GitHub Profile" >
              <LogoGitHub width={25} height={50} className="logospie" />
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row justify-content-center ">
        <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
          <p className="text-center">© Garima Tejnani Sukhnani</p>
        </div>
      </div>

    </footer>
    
  );
}

//Exportamos
export default Pie;
