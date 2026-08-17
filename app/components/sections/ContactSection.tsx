"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [contacto, setContacto] = useState([]);

  useEffect(() => {
    async function fetchContacto() {
      try {
        const res = await fetch("/api/contacto");
        if (!res.ok) return;

        const data = await res.json();
        setContacto(data);
      } catch (err) {
        console.error("Error cargando contacto:", err);
      }
    }

    fetchContacto();
  }, []); // ← evita bucles infinitos

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
            {contacto.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
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
