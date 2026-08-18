"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Ocultar barra de Google Translate
    function removeGoogleBar() {
      const frame = document.querySelector('iframe.skiptranslate');
      if (frame) frame.remove();

      const container = document.querySelector('div.skiptranslate');
      if (container) container.remove();

      document.body.style.top = '0px';
    }

    removeGoogleBar();

    const observer = new MutationObserver(removeGoogleBar);
    observer.observe(document.body, { childList: true, subtree: true });

    // Animación decoracionLinea
    const lines = document.querySelectorAll('.decoracionLinea.animada');
    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.3 });

    lines.forEach(line => lineObserver.observe(line));

    // Cambiar título cuando la pestaña está oculta
    const originalTitle = document.title;
    const frases = ["Vuelve pa’cá", "¿Aónde vas?", "Te me fuiste"];

    document.addEventListener("visibilitychange", () => {
      document.title = document.hidden
        ? frases[Math.floor(Math.random() * frases.length)]
        : originalTitle;
    });

    // Cursor blur
    document.addEventListener("mousemove", (e) => {
      const blur = document.getElementById("cursor-blur");
      if (blur) {
        blur.style.left = e.clientX + "px";
        blur.style.top = e.clientY + "px";
      }
    });
  }, []);

  return null;
}