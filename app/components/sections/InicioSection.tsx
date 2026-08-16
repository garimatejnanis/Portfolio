//Importamos el componente Link de Next.js para navegación entre páginas y secciones

import Link from "next/link";

//Obtiene los datos del inicio desde la API y los devuelve como un objeto JSON

async function getInicio() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/inicio`, {
    headers: { "x-api-secret": process.env.API_SECRET! },
    next: { revalidate: 3600 },
  });
  return res.json();
}

//Creamos funcion asincrona para obtener los datos del inicio y renderizarlos en la seccion de inicio

export default async function InicioSection() {
  const data = await getInicio();

  return (
    <section id="inicio" className="home-section pt-2 pb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1>{data.titulo}</h1>
          <p className="primerTexto">{data.descripcion}</p>

          <Link className="btn btn-primary me-3" href="/CV-ES_Garima_Tejnani_Sukhnani.pdf" target="_blank" download>
            Descargar CV
          </Link>
          <Link className="btn btn-primary" href="#contacto">
            Contáctame
          </Link>
        </div>
      </div>
    </section>
  );
}