"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function InicioSection() {
  const [data, setData] = useState({ titulo: "", descripcion: "" });

  useEffect(() => {
    async function fetchInicio() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/inicio`,
          {
            headers: { "x-api-secret": process.env.API_SECRET! },
          }
        );

        if (!res.ok) {
          console.error("Error API inicio:", await res.text());
          return;
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error general:", err);
      }
    }

    fetchInicio();
  }, []);

  return (
    <section id="inicio" className="home-section pt-2 pb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1>{data.titulo}</h1>
          <p className="primerTexto">{data.descripcion}</p>

          <Link
            className="btn btn-primary me-3"
            href="/CV-ES_Garima_Tejnani_Sukhnani.pdf"
            target="_blank"
            download
          >
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
