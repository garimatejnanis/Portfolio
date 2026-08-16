"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Imágenes del proyecto "Kasas Home"
const slides = [
  { src: "/8.jpg", alt: "Kasas Home" },
  { src: "/9.jpg", alt: "Kasas Home" },
  { src: "/10.jpg", alt: "Kasas Home" },
];

export default function ProjectsSwiper3() {
  return (
    <div className="projectSwiperWrapper">
      <Swiper
        className="projectSwiper"
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoHeight={false} 
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.src} className="projectSwiperSlide">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={557}
              height={250}
              className="projectSwiperImage"
              sizes="(max-width: 768px) 100vw, 557px"
              priority={false}
              loading="lazy"
              quality={75}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}