//Importamos el componente ProyectoSwiperPicker para mostrar los proyectos en un carrusel

import ProyectoSwiperPicker from "../ProyectoSwiperPicker";

// Obtiene los datos de proyectos desde la API y los devuelve como un objeto JSON

async function getProyectos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/proyectos`, {
    headers: { "x-api-secret": process.env.API_SECRET! },
    next: { revalidate: 3600 },
  });
  return res.json();
}

//Creamos funcion asincrona para obtener los datos de proyectos y renderizarlos en la seccion de proyectos

export default async function ProyectosSection() {
  const proyectos = await getProyectos();

  return (
    <section id="proyectos" className="home-section pb-5">
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-auto text-center">
          <h2>Proyectos</h2>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center g-3 px-3 pb-4">

      {/* Renderiza una tarjeta por cada experiencia que venga de la API */}

        {proyectos.map((proyecto, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-4" key={index}>
            <div className="cajaCard h-100">

              <div className="mediaProyecto">
                <ProyectoSwiperPicker tipo={proyecto.tipo} />
              </div>

              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <p className="tecno">{proyecto.tecnologias}</p>

              <div className="botonesProyecto">
                <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
                  {proyecto.enlaceTexto}
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}