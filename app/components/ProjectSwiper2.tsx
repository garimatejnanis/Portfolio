"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


// Imágenes del proyecto "CRUD - AGENDA"
const slides = [
  { src: "/4.jpg", alt: "CRUD - AGENDA" },
  { src: "/5.jpg", alt: "CRUD - AGENDA" },
  { src: "/6.jpg", alt: "CRUD - AGENDA" },
  { src: "/7.jpg", alt: "CRUD - AGENDA" },
];

export default function ProjectsSwiper2() {
  return (
    <div className="projectSwiperWrapper">
      <Swiper
        className="projectSwiper"
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        // Evita reflows: la altura del swiper no cambia entre slides
        autoHeight={false} 
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.src} className="projectSwiperSlide">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={557}
              height={250}
              className="projectSwiperImage"
              sizes="(max-width: 768px) 100vw, 557px"
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              quality={75}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}