// Necesario para poder usar dynamic(..., { ssr: false }) aquí dentro

"use client"; 

import dynamic from "next/dynamic";

/*Cada swiper se carga en su propio chunk, solo cuando el navegador realmente necesita renderizarlo (no durante la carga inicial de la página).
Esto reduce el trabajo del hilo principal al arrancar la web. ssr:false es obligatorio porque Swiper depende del DOM del navegador*/
const ProjectsSwiper = dynamic(() => import("./ProjectsSwiper"), { ssr: false });
const ProjectsSwiper2 = dynamic(() => import("./ProjectSwiper2"), { ssr: false });
const ProjectsSwiper3 = dynamic(() => import("./ProjectSwiper3"), { ssr: false });

/*
Decide qué swiper renderizar según el "tipo" que viene de la API de proyectos. Este componente existe como puente porque ProyectosSection es un Server
Component (usa fetch directo) y ssr:false solo se permite en Client Components.
*/
export default function ProyectoSwiperPicker({ tipo }: { tipo: string }) {
  if (tipo === "swiper") return <ProjectsSwiper />;
  if (tipo === "swiper2") return <ProjectsSwiper2 />;
  if (tipo === "swiper3") return <ProjectsSwiper3 />;
  return null;
}