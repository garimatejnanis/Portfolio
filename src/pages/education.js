import React from 'react';
//Añadir tittle
import { Helmet } from 'react-helmet';
//Componentes de la web*
import Cabecera from '../componentes/cabecera';
import Pie from '../componentes/pie';
//Immagenes
import LogoDEGREE from '../assets/degree-logo.svg';
import LogoDIPLOMA from '../assets/diploma-logo.svg';
import LogoSOLOLEARN from '../assets/sololearn_logo.svg';
import LogoGoogleA from '../assets/googleactivate-logo.svg';
import LogoES from '../assets/españa.png';
import LogoEN from '../assets/reino-unido.png';
import LogoFR from '../assets/francia.png';
import LogoIN from '../assets/india.png';

function Education() {
  return (
    <>
      <Helmet>
        <title>Education | Garima Space's</title>
        <meta name="description" content="Discover the educational background of Garima Tejnani, including studies, certifications, and language skills." />
      </Helmet>

      <Cabecera />

        <div className="container-fluid cuerpo">

          <div className="row justify-content-center pt-4 pb-2">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center pt-5 pb-2">
              <h1>Where I Studied?</h1>
            </div>
          </div>

          <div className="row">

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">

              <div className="cajaCuerpoED">
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                  <img src={LogoDEGREE} className="logosED" alt="Degree Icon" title='Degree Icon' />
                </div>

                <div className="col-xl-auto col-lg-auto col-md-auto col-auto nombreED text-start">
                  <h2 className="colorEDh2">Higher Vocational Education</h2>
                  <p>📍<strong> Location: </strong>
                    <a href="https://www.google.com/maps/dir//CIFP+Villa+de+Ag%C3%BCimes,+Calle+Alcorac,+Ag%C3%BCimes/@27.870731,-15.4656343,12453m/data=!3m2!1e3!5s0xc40951bb9d5c8e1:0x751ee2aeb6c07c17!4m8!4m7!1m0!1m5!1m1!1s0xc409f4151518ae1:0xec2aca8742bb064f!2m2!1d-15.4244345!2d27.8707371!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">CIFP Villa de Agüimes</a>
                  </p>
                  <p>💻<strong> Program: </strong>Web Aplications Development</p>
                  <p>📅<strong> Year: </strong>2021-2024</p>
                  <p className='parrf2'>✨During my studies, I have developed proficiency in front-end 
                    technologies such as HTML, CSS, and JavaScript, and gained experience 
                    using Bootstrap to create responsive and dynamic web interfaces. 
                    I also built strong programming skills in PHP and worked with the Laravel 
                    framework to develop scalable web applications. <br/> <br/>Additionally, I worked with 
                    REST APIs to facilitate seamless communication between front-end and back-end systems. 
                    I acquired hands-on experience in database management to ensure efficient data handling. 
                    For development and testing purposes, I became skilled in configuring local servers like 
                    XAMPP and Nginx. Moreover, I gained experience managing routers and disk partitions on both 
                    Windows and Linux systems to support effective software deployment.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="row">

            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">

              <div className="cajaCuerpoED">
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center  ">
                  <img src={LogoDIPLOMA} className="logosED" alt="Diploma Icon" title='Diploma Icon' />
                </div>
                <div className="col-xl-auto col-lg-auto col-md-auto col-auto nombreED text-start">
                  <h2 className="colorEDh2">Baccalaureate</h2>
                  <p>📍<strong> Location: </strong>
                    <a href="https://www.google.com/maps/dir//Av.+de+Tunte,+8,+35100+San+Fernando,+Las+Palmas/@27.7680667,-15.6632064,24929m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0xc3f62baafdd60c1:0xd4486c0a8a22df41!2m2!1d-15.5807764!2d27.7680562!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">IES Támara</a>
                  </p>
                  <p>💻<strong> Program: </strong>Social Sciences</p>
                  <p>📅<strong> Year: </strong>2018-2021</p>
                  <p className='parrf2'>✨I have studied business economics, where I managed profit and loss accounts,
                    balance sheets, and various development questions. I also worked with statistics,
                    matrices, probability, systems of equations, and more. Additionally, I studied
                    Spanish language and English.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center tituloED pt-3 pb-2">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <h3>Certifications</h3>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
              <div className="cajaCuerpoCa">
              
                <a href="https://skillshop.exceedlms.com/student/award/8yZtPqekLf16ZEva4MdnbX8g" target="_blank" rel="noopener noreferrer">
                  <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center colorCa">
                    <img src={LogoGoogleA} className="logosCa" alt="Google Activate Logo" title='Google Activate Logo' />
                    <p>Introduction to Web Development<br /> Course: HTML and CSS I</p>
                  </div>
                </a>

                <a href="https://skillshop.exceedlms.com/student/award/REVaQJZEutUUtGrUeChLnorL" target="_blank" rel="noopener noreferrer">
                  <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center colorCa">
                    <img src={LogoGoogleA} className="logosCa" alt="Google Activate Logo" title='Google Activate Logo' />
                    <p>Introduction to Web Development<br /> Course: HTML and CSS II</p>
                  </div>
                </a>

                <a href="https://www.sololearn.com/certificates/CC-9J7RKILW" target="_blank" rel="noopener noreferrer">
                  <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center colorCa">
                    <img src={LogoSOLOLEARN} className="logosCa" alt="Sololearn Logo" title='Sololearn Logo'/>
                    <p>Angular</p>
                  </div>
                </a>

                <a href="https://www.sololearn.com/certificates/CC-4AWDFSNB" target="_blank" rel="noopener noreferrer">
                  <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center colorCa">
                    <img src={LogoSOLOLEARN} className="logosCa" alt="Sololearn Logo" title='Sololearn Logo' />
                    <p>JavaScript Intermediate</p>
                  </div>
                </a>
                
              </div>
            </div>
          </div>


          <div className="row justify-content-center tituloED pt-3 pb-5">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <h4>Languages</h4>
            </div>
          </div>

          <div className="row lang">
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <img src={LogoES} alt="Spain Flag" title='Spain Flag'/>
              <p>Spanish - Native / Bilingual</p>
            </div>
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <img src={LogoIN} alt="India Flag" title='India Flag'/>
              <p>Hindi - Native / Bilingual</p>
            </div>
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <img src={LogoEN} alt="England Flag" title='England Flag'/>
              <p>English - Professional</p>
            </div>
            <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
              <img src={LogoFR} alt="France Flag" title='France Flag' />
              <p>French - Basic</p>
            </div>
          </div>
        </div>

      <Pie />

    </>
  );
}

//Exportamos
export default Education;
