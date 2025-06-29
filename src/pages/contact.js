import React, {useState} from 'react';
//Añadir tittle
import { Helmet } from 'react-helmet';
//Componentes de la web
import Cabecera from '../componentes/cabecera';
import Pie from '../componentes/pie';
//Immagenes
import { ReactComponent as LogoLinkedin } from '../assets/linkedin-logo-black.svg';
import { ReactComponent as LogoGitHub } from '../assets/github-logo-black.svg';
import { ReactComponent as LogoGmail } from '../assets/gmail-logo-black.svg';

function Contact() {

    {/*Usamos el hook, el formulario esta vacio */}
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    {/*Creamos varios hooks, con estados:

        1. Mensaje a la hora de enviar el formulario 
        2. Color de mensaje de error
        3. Error de cada input (nombre, email, tel...), si no se cumple las condiciones*/
    }
    const [responseMessage, setResponseMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    {/*Condiciones para enviar un formulario, si no se cumple salen alertas */}
    const nameRegex = /^[a-zA-Z\s]{3,}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,25}$/; 
    const messageRegex = /^.{10,}$/; 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        {/*Comprobaciones */}
        console.log("Formulario enviado");
        console.log("Datos:", formData);

        const errors = {};

        {/*Estas son las alertas que se imprimiran */}
        if (!nameRegex.test(formData.name)) {
            errors.name = "Full Name not valid.";
        }

        if (!emailRegex.test(formData.email)) {
            errors.email = "Email not valid.";
        }

        if (!phoneRegex.test(formData.phone)) {
            errors.phone = "Phone not valid.";
        }

        if (!messageRegex.test(formData.message)) {
            errors.message = "Message not valid, minimum 10 words.";
        }

        {/*En el caso de haya algun error, entraria en este bloque y se actulizaria con los errores. 
            Y saldría un mensaje de error en color rojo */}
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setResponseMessage('Please fix the errors in the form.');
            setIsError(true); 
            return;
        }

        {/*En el caso contrario, si todo esta bien. Limpian los mensajes anteriores, borra el mensaje, 
            y saldría uno nuevo en verde */}
        setFormErrors({});
        setResponseMessage('');
        setIsError(false);

        {/*Petición post enviando datos de formulario convirtiendose a JSON http://192.168.1.37/sendmail.php" para Xampp */}

        {/*Este es para la web oficial */}
        const response = await fetch('/BackEnd/sendmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        {/* Si todo lo anterior es correcto, y si se ha cumplido, saldra un mensaje de que se ha enviado todo correctamente */}
        if (result.success) {
            setResponseMessage('The email has been sent successfully.');
            setIsError(false);
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

        } else {
        {/* Si todo lo anterior es incorrecto, y si no se ha cumplido, saldra un mensaje de que hay algo mal */}
            setResponseMessage('Something went wrong. Please try again.' + result.message);
            setIsError(true);
           
        }
    };

    return(
        <>
            <Helmet>
                <title>Contact | Garima Space's</title>
                <meta name="description" content="Get in touch with Garima Tejnani through this contact page." />
            </Helmet>

            <Cabecera />

                <div className="container-fluid cuerpo">
                    <div className="row justify-content-center pt-4 pb-2">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center pt-5">
                            <h1>Let's connect</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                            <div className="cajaCuerpoCM">

                                <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                                    <span>Garima Tejnani Sukhnani</span>
                                    <p>San Bartolomé de Tirajana, Las <br />Palmas de Gran Canaria, Spain</p>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garimatejnani@gmail.com" target="_blank" rel="noreferrer" aria-label="Send email to Garima"> <p>garimatejnani@gmail.com</p></a>
                                    
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-auto iconos">
                                        <a href="https://es.linkedin.com/in/garima-ts-6b8252248" target="_blank" rel="noreferrer" aria-label="Linkedin Profile">
                                            <LogoLinkedin width={25} height={50} className="logosContacto" />
                                        </a>

                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garimatejnani@gmail.com" target="_blank" rel="noreferrer" aria-label="Send email to Garima">
                                            <LogoGmail width={25} height={50} className="logosContacto" />
                                        </a>

                                        <a href="https://github.com/garimatejnanis/" target="_blank" rel="noreferrer" aria-label="GitHub Profile" >
                                            <LogoGitHub width={25} height={50} className="logosContacto" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="col-xl-auto col-lg-auto col-md-auto col-auto">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8789578232057!2d-15.579350584679592!3d27.762632279260315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc3f62bbfdee2dff%3A0x1d40c8360061b083!2sAv.%20de%20Gran%20Canaria%2C%2032%2C%2035100%20Maspalomas%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1686905226442!5m2!1ses!2ses" 
                                        width="550" height="350" loading="lazy"  className="mapa">
                                    </iframe>
                                </div>
                            </div>
                        </div>             
                    </div>

                    <div className="row justify-content-center pt-2 pb-4">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto text-center">
                            <h2>Get in touch</h2>
                            <p>Have a question or want to say hi? Send me a message below.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center ps-3 pe-3">
                        <div className="col-xl-auto col-lg-auto col-md-auto col-auto justify">
                            <form onSubmit={handleSubmit}>
                           
                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name" className="form-label">Full Name *</label>
                                        <input type="text" id="name"name="name" className="form-control" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                                        {/*Imprime mensaje de error */}
                                        {formErrors.name && <p style={{ color: '#D50000' }}>{formErrors.name}</p>}
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                                        {/*Imprime mensaje de error */}
                                        {formErrors.email && <p style={{ color: '#D50000' }}>{formErrors.email}</p>}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="phone" className="form-label">Phone *</label>
                                        <input type="tel" id="phone" name="phone" className="form-control" placeholder="Your phone number with country code" value={formData.phone} onChange={handleChange} />
                                        {/*Imprime mensaje de error */}
                                        {formErrors.phone && <p style={{ color: '#D50000' }}>{formErrors.phone}</p>}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="message" className="form-label">Message *</label>
                                        <textarea id="message" name="message" rows="5" className="form-control" placeholder="Write your message here..." value={formData.message} onChange={handleChange}></textarea>
                                        {/*Imprime mensaje de error */}
                                        {formErrors.message && <p style={{ color: '#D50000' }}>{formErrors.message}</p>}
                                    </div>
                                </div>

                                <div className="row boton2 text-center">
                                    <div className="col-md-12 mb-5">
                                        <button type="submit" >Send</button>
                                    </div>
                                    {/*Imprime mensaje de error */}
                                        {responseMessage && (
                                            <p className="mensajeCorreo" style={{ color: isError ? '#D50000' : '#1B5E20' }}>
                                                {responseMessage}
                                            </p>
                                        )}
                                </div>
                                        
                            </form>
                        </div>
                    </div>
                </div>

            <Pie />
        </>
    )
}

export default Contact;