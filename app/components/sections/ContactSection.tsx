//Importamos el componente Image de Next.js para optimizar las imágenes

import Image from "next/image"; 

//Obtiene los datos de contacto desde la API y los devuelve como un objeto JSON

async function getContacto() {
  const res = await fetch(`/api/contacto`, {
    headers: { "x-api-secret": process.env.API_SECRET! },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error("API contacto error:", await res.text());
    return [];
  }

  return res.json();
}



//Creamos funcion asincrona para obtener los datos de contacto y renderizarlos en la seccion de contacto

export default async function ContactSection() {
  const contacto = await getContacto();

  return (
    <section id="contacto" className="home-section">
      <div className="row justify-content-center pb-4">
        <div className="col-auto text-center">
          <h2>Contacto</h2>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center pb-5">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <div className="contact-grid">

            {/*Renderiza un enlace por cada contacto que venga de la API */}
            
            {contacto.map((item: any, index: number) => (
              <a key={index} href={item.href} target="_blank" rel="noreferrer" className="contact-card">
                <Image src={item.image} alt={item.alt} width={40} height={40} />
                <span>{item.nombre}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}