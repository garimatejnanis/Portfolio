//Componente principal de la sección "Experiencia" que se renderiza en el servidor y obtiene los datos de la API

export default async function ExperienciaSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/experiencia`, {
    cache: "no-store",
  });

  const experiencia = await res.json();

  return (
    <section id="experiencia" className="home-section pb-5">
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-auto text-center">
          <h2>Experiencia</h2>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center px-3">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7">
          <div className="timeline">

            {experiencia.map((item, index) => (
              <div className="timelineItem" key={index}>
                <div className="timelineDot" />
                <div className="timelineContent">

                  <span className="timelineYear">{item.year}</span>

                  <h2 className="colorEDh2">{item.empresa}</h2>
                  <h3 className="colorEDh2">{item.puestoPrincipal}</h3>

                  <p>{item.descripcionPrincipal}</p>

                  <ul>
                    {item.tareasPrincipal.map((tarea, i) => (
                      <li key={i}>{tarea}</li>
                    ))}
                  </ul>

                  {item.puestoSecundario && (
                    <>
                      <h3 className="colorEDh2" style={{ marginTop: "1.5rem" }}>
                        {item.puestoSecundario}
                      </h3>

                      <p>{item.descripcionSecundaria}</p>

                      <ul>
                        {item.tareasSecundaria.map((tarea, i) => (
                          <li key={i}>{tarea}</li>
                        ))}
                      </ul>
                    </>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}