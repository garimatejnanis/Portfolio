"use client";

import { useEffect, useState } from "react";
import ProyectoSwiperPicker from "../ProyectoSwiperPicker";

export default function ProyectosSection() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    async function fetchProyectos() {
      try {
        const res = await fetch("/api/proyectos");
        if (!res.ok) return;

        const data = await res.json();
        setProyectos(data);
      } catch (err) {
        console.error("Error cargando proyectos:", err);
      }
    }

    fetchProyectos();
  }, []); // ← evita bucles infinitos

  return (
    <section id="proyectos" className="home-section pb-5">
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-auto text-center">
          <h2>Proyectos</h2>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center g-3 px-3 pb-4">
        {proyectos.map((proyecto, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={index}>
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
