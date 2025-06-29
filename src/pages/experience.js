import React from 'react';
//Añadir tittle
import { Helmet } from 'react-helmet';
//Componentes de la web
import Cabecera from '../componentes/cabecera';
import Pie from '../componentes/pie';
//Navegar entre páginas
import { Link } from 'react-router-dom'; 
//Imagenes
import LogoBAG from '../assets/briefcase-logo.svg';
import ProjectLogo from '../assets/project-logo.png';

function Experience() {
    return (
        <>
            <Helmet>
                <title>Experience | Garima Space's</title>
                <meta name="description" content="Explore the professional experience of Garima Tejnani, including internships, freelance work, and key responsibilities in web development projects." />
            </Helmet>
            
            <Cabecera />

                <div className="container-fluid cuerpo">
                    <div className="row justify-content-center pt-4 pb-2">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center pt-5 pb-2">
                            <h1>Experience</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                            <div className="cajaCuerpoEX">
                                
                                <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                                    <img src={LogoBAG} className="logosEX" alt="Bag Icon" title='Bag Icon' />
                                </div>

                                <div className="col-xl-auto col-lg-auto col-md-auto col-auto nombreEX text-start">
                                    <h2>21ninjas</h2>
                                    <p><strong> Internship </strong></p>
                                    <p><strong> Location: </strong>Las Palmas de Gran Canaria</p>
                                    <p>📅 March 2024 - May 2024</p>
                                    <p>
                                        During my internship, I participated in the <a href="https://juanitako-swimwear.com/" target="_blank" rel="noopener noreferrer">JuanitaKO
                                        Swimwear</a> project and gained experience working
                                        with WordPress. I used technologies such as HTML,
                                        CSS, JavaScript, and PHP, and worked with plugins like
                                        Yoast SEO, Elementor, WooCommerce, among others.
                                        <br/><br/>
                                        Additionally, I managed databases, hosting on
                                        Flywheel, WordPress installation and setup, theme 
                                        customization, SEO optimization, site security, and user administration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center pt-2 pb-3">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                            <h3>Projects</h3>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                            <div className="cajaCuerpoPJ">
                                <a href="https://github.com/garimatejnanis/Proyecto-PRW-Garima" target="_blank" rel="noopener noreferrer">
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center colorPJ">
                                        <img src={ProjectLogo} className="logosPJ" alt="Project Icon" title='Project Icon' />
                                        <p>Final Project for Higher Vocational Education (CFGS)</p>
                                    </div>
                                </a>
                        
                                <a href="https://github.com/garimatejnanis/Inmobiliaria" target="_blank" rel="noopener noreferrer">
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center colorPJ">
                                        <img src={ProjectLogo} className="logosPJ" alt="Project Icon" title='Project Icon' />
                                        <p>Kasas Home - Real Estate</p>
                                    </div>
                                </a>
                        
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center boton1">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                            <Link to="/contact">
                                <button>Contact Me</button>
                            </Link>
                        </div>
                    </div>

                </div>

            <Pie />
        </>
    );
}

//Exportamos
export default Experience;
