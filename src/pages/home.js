//Hooks
import React, { useState, useEffect } from 'react'; 
//Añadir tittle
import { Helmet } from 'react-helmet';
//Navegar entre páginas
import { Link } from 'react-router-dom'; 
//Componentes de la web
import Cabecera from '../componentes/cabecera';
import Pie from '../componentes/pie';
//Immagenes
import myImage from '../assets/miFoto_ORLA.png';
import LogoCSS from '../assets/css-logo.svg';
import LogoHTML from '../assets/html-logo.svg';
import LogoREACT from '../assets/react-logo.svg';
import LogoPHP from '../assets/php-logo.svg';
import LogoJS from '../assets/javascript-logo.svg';

function Home() {
  {/*Usamos el hook, llama al estado "text", que esta vacio*/}
  const [text, setText] = useState('');  
  {/*Frase completa que se vera en el "text"*/}
  const fullText = `Eat(); Sleep();\nCode(); Repeat();`;

  {/*Usamos el segundo hook, lo que hara introducira cada letra
  por un segundo*/}
  useEffect(() => {
    let index = 0;

    const typeEffect = () => {
      setText(fullText.slice(0, index + 1)); 
      index++;

      if (index < fullText.length) {
        setTimeout(typeEffect, 100); 
      }
    };

    const delay = setTimeout(() => {
      typeEffect();
    }, 1000); 

    return () => clearTimeout(delay); 

  }, [fullText]);

  return (   
    <>

      <Helmet>
          <title>Home | Garima Space's</title>
          <meta name="description" content="Welcome to the personal website of Garima Tejnani — a junior web developer passionate about creating modern, responsive, and user-focused web applications." />
      </Helmet>

      <Cabecera/>

        <div className="container-fluid cuerpo">

          <div className="row justify-content-end">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <h1 className="tituloh1">
                {/*Imprime las palabras y va dando saltos de linea*/}
                {text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line} <br/>
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto ">

              <div className="cajaCuerpoCentrada"> 

                <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                  <h2 className="tituloh2"> Hello, I'm Garima Tejnani, a Junior Web Developer</h2>
                  <p className="primerTexto">
                    I'm passionate about creating functional and engaging digital experiences.
                    I have worked on personal projects and gained hands-on experience through internships. <br/><br/>
                    As a Full Stack Developer, I'm comfortable working on both the front-end and back-end, 
                    and I'm always eager to learn new technologies to improve my skills. 🚀 <br/>
                  </p> 
                </div>

                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                  <img src={myImage} className="myImage"  title='My Profile' alt="My Profile"/>
                </div>

              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <h3 className="tituloh3">Skills</h3>
            </div>
          </div>

          <div className="row LogosHome">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <img src={LogoHTML} className="skillsHome" title="HTML5" alt="HTML"/>
            </div>
            
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <img src={LogoJS} className="skillsHome" title="JavaScript" alt="JS" />
            </div>

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <img src={LogoCSS} className="skillsHome" title="CSS3" alt="CSS"/>
            </div>

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <img src={LogoPHP} className="skillsHome" title="PHP" alt="PHP" />
            </div>

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <img src={LogoREACT} className="skillsHome" title="React" alt="React"/>
            </div>
          </div>

          <div className="row justify-content-center boton1">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <Link to="/aboutme">
                <button>More info</button>
              </Link>
            </div>
          </div>

        </div>

      <Pie/>

    </>
  );
}

//Exportamos
export default Home;