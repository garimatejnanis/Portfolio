import React from 'react';
//Añadir tittle
import { Helmet } from 'react-helmet';
//Componentes de la web
import Cabecera from '../componentes/cabecera';
import Pie from '../componentes/pie';
//Immagenes
import WebLogoFBlanco from '../assets/web-logo-FBlanco.svg';
import LogoCSS from '../assets/css-logo.svg';
import LogoHTML from '../assets/html-logo.svg';
import LogoREACT from '../assets/react-logo.svg';
import LogoBOOTSTRAP from '../assets/bootstrap-logo.svg';
import LogoJS from '../assets/javascript-logo.svg';
import LogoANGULAR from '../assets/angular-logo.svg';
import LogoPHP from '../assets/php-logo.svg';
import LogoMARIADB from '../assets/mariadb-logo.svg';
import LogoMYSQL from '../assets/mysql-logo.svg';
import LogoPOSTGRESQL from '../assets/postgresql-logo.svg';
import LogoLARAVEL from '../assets/laravel-logo.svg';
import LogoWORDPRESS from '../assets/wordpress-logo.svg';
import LogoSHOPIFY from '../assets/shopify-logo.svg';

function AboutMe() {
  return (
    <>

      <Helmet>
        <title>About Me | Garima Space's</title>
        <meta name="description" content="Get to know Garima Tejnani — a motivated junior web developer with a passion for front-end and back-end technologies, continuous learning, and user-centered design." />
      </Helmet>

      <Cabecera />

        <div className="container-fluid cuerpo">

          <div className="row justify-content-center pt-5 pb-2">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <div className="textoAM">
                <img src={WebLogoFBlanco} title='Web Logo' alt="Web Logo" />
                <p>
                  I'm Garima Tejnani, a Junior Web Developer from Las Palmas de Gran Canaria, with a strong passion for both front-end and back-end development.
                  My journey in web development began with a curiosity to understand how digital platforms work, and since then, I have worked and learned
                  my skills in building functional, responsive, and visually appealing websites.
                </p>
                <p>
                  I specialize in using JavaScript, HTML, CSS, and various frameworks like React, Bootstrap, and Laravel to create seamless user experiences.
                  Throughout my personal projects and my internship, I have developed a deep understanding of web technologies, databases, and server-side solutions
                  like WordPress.
                </p>
                <p>
                  I have experience working with both Windows and Linux operating systems, which has helped me develop a versatile and adaptable approach to development.
                </p>
                <p>
                  I'm constantly motivated to keep learning and stay informed about the newest innovations and developments in web development, and I actively seek opportunities
                  to improve my skills. My goal is to contribute to projects that make an impact and continue growing as a Full Stack Developer.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center pt-2 pb-2">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <h1 className="question1">What I Build With</h1>
            </div>
          </div>

          <div className="row">

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">

              <div className="cajaCuerpoFE">
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                  <h2 className="tituloFE">FRONT-END 🖥️ </h2>
                  <p className="textoFE">
                    Development of interactive and user-friendly web interfaces,
                    focusing on smooth functionality across devices.
                  </p>
                </div>

                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                  <img src={LogoHTML} className="logosFE" title="HTML5" alt="HTML5" />
                  <img src={LogoJS} className="logosFE" title="JavaScript" alt="JavaScript" />
                  <img src={LogoCSS} className="logosFE" title="CSS3" alt="CSS3" />
                </div>

              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              
              <div className="cajaCuerpoBE">
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                  <img src={LogoPHP} className="logosBE" title="PHP" alt="PHP" />
                  <img src={LogoMYSQL} className="logosBE" title="MySQL" alt="MySQL" />
                  <img src={LogoPOSTGRESQL} className="logosBE" title="PostgreSQL" alt="PostgreSQL" />
                  <img src={LogoMARIADB} className="logosBE" title="MariaDB" alt="MariaDB" />
                </div>

                <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                  <h2 className="tituloBE">BACK-END 💻</h2>
                  <p className="textoBE">
                    Building server-side logic and managing databases to ensure efficient
                    and smooth application performance.
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">

              <div className="cajaCuerpoFW">
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                  <h2 className="tituloFW">FRAMEWORKS 🧩</h2>
                  <p className="textoFW">
                    Tools that provide ready-made structures and components to speed up
                    development and create efficient, scalable applications.
                  </p>
                </div>

                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                  <img src={LogoREACT} className="logosFE" title="React" alt="React" />
                  <img src={LogoLARAVEL} className="logosFE" title="Laravel" alt="Laravel" />
                  <img src={LogoANGULAR} className="logosFE" title="Angular" alt="Angular" />
                  <img src={LogoBOOTSTRAP} className="logosFE" title="Bootstrap" alt="Bootstrap" />
                </div>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <div className="cajaCuerpoTP">
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                  <img src={LogoWORDPRESS} className="logosTP" title="WordPress" alt="WordPress" />
                  <img src={LogoSHOPIFY} className="logosTP" title="Shopify" alt="Shopify" />
                </div>
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                  <h2 className="tituloTP">Tools & Platforms 🛠️ </h2>
                  <p className="textoTP">
                    Technologies that provide the necessary environment and resources to build, run,
                    and manage web applications efficiently and reliably.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      <Pie />

    </>
  );
}

//Exportamos
export default AboutMe;
