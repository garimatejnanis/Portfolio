"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FormacionSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchFormacion() {
      try {
        const res = await fetch("/api/formacion");
        if (!res.ok) return;

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error cargando formación:", err);
      }
    }

    fetchFormacion();
  }, []);

  // 👉 ESTE useEffect debe ejecutarse SOLO cuando data ya existe
  useEffect(() => {
    if (!data) return;

    const timer = setTimeout(() => {
      const lines = document.querySelectorAll(".decoracionLinea");
      lines.forEach((line) => line.classList.add("visible"));
    }, 100);

    return () => clearTimeout(timer);
  }, [data]); // ← IMPORTANTE: depende de data

  if (!data) return null;

  const { educacion, certificados, idiomas } = data;

  return (
    <section id="formacion" className="home-section pb-5">

      {/* EDUCACIÓN */}
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-auto text-center">
          <h2>Formación</h2>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center" style={{ marginBottom: "2rem" }}>
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <div className="timeline">
            {educacion.map((edu, index) => (
              <div className="timelineItem" key={index}>
                <div className="timelineDot" />
                <div className="timelineContent">
                  <span className="timelineYear">{edu.year}</span>
                  <h3 className="colorEDh2">{edu.titulo}</h3>
                  <p><strong>{edu.centro}</strong></p>
                  <p>{edu.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICADOS */}
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-auto text-center">
          <h3>Certificados</h3>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center g-3 px-3 pb-4">
        {certificados.map((cert) => (
          <div key={cert.title} className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <a href={cert.href} target="_blank" rel="noopener noreferrer" className="cajaCardLink">
              <div className="cajaCard h-100">
                <Image src={cert.image} className="logosCa" alt={cert.alt} width={60} height={60} />
                <p>{cert.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* IDIOMAS */}
      <div className="row justify-content-center pt-4 pb-3">
        <div className="col-auto text-center">
          <h3>Idiomas</h3>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center pb-5">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <div className="idiomas-grid">
            {idiomas.map((idioma, index) => (
              <div className="idioma-card" key={index}>
                <h4>{idioma.idioma}</h4>
                <p>{idioma.nivel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
