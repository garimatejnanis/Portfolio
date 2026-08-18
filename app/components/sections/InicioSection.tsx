//Importamos el componente Link de Next.js para optimizar la navegación entre páginas

import Link from "next/link";

//Componente principal de la sección "Inicio" que se renderiza en el servidor y obtiene los datos de la API

export default async function InicioSection() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/inicio`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <section id="inicio" className="home-section pt-2 pb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1>{data.titulo}</h1>
          <p className="primerTexto">{data.descripcion}</p>

          <a className="btn btn-primary me-3" href="/CV-ES_Garima_Tejnani_Sukhnani.pdf" target="_blank" download >
            Descargar CV
          </a>

          <Link className="btn btn-primary" href="#contacto"> Contáctame</Link>

        </div>
      </div>
    </section>
  );
}