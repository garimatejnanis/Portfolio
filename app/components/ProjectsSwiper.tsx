// Swiper usa el DOM del navegador, así que este componente debe ejecutarse en cliente

"use client"; 

// Import Swiper React components

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; 

// Imágenes que forman el carrusel de este proyecto en concreto.
// Cada swiper de proyecto tiene su propio array de slides.
const slides = [
  { src: "/1.jpg", alt: "Proyecto Final" },
  { src: "/2.jpg", alt: "Proyecto Final" },
  { src: "/3.jpg", alt: "Proyecto Final" },
];

export default function ProjectsSwiper() {
  return (
    <div className="projectSwiperWrapper">
      <Swiper className="projectSwiper" modules={[Autoplay, Pagination]} spaceBetween={10} slidesPerView={1}
      loop={true} autoHeight={false} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }}>

        {slides.map((slide, i) => (
          <SwiperSlide key={slide.src} className="projectSwiperSlide">
            <Image src={slide.src} alt={slide.alt} width={557} height={250} className="projectSwiperImage"
            sizes="(max-width: 768px) 100vw, 557px" priority={i === 0} loading={i === 0 ? undefined : "lazy"} quality={75} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}