"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

//Lazy load de cada swiper

const ProjectsSwiper = dynamic(() => import("./ProjectsSwiper"), { ssr: false });
const ProjectsSwiper2 = dynamic(() => import("./ProjectSwiper2"), { ssr: false });
const ProjectsSwiper3 = dynamic(() => import("./ProjectSwiper3"), { ssr: false });

export default function ProyectoSwiperPicker({ tipo }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {

//Solo carga Swiper cuando el usuario llega a la sección

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible && (
        <>
          {tipo === "swiper" && <ProjectsSwiper />}
          {tipo === "swiper2" && <ProjectsSwiper2 />}
          {tipo === "swiper3" && <ProjectsSwiper3 />}
        </>
      )}
    </div>
  );
}
