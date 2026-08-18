'use client';

import { useState, useRef, useEffect } from 'react';
import GoogleTranslate from './GoogleTranslate';
import Link from 'next/link';
import Image from 'next/image';

export default function Cabecera() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedButton = buttonRef.current?.contains(event.target as Node);
      const clickedMenu = menuRef.current?.contains(event.target as Node);

      if (!clickedButton && !clickedMenu) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const showPiramide = menuOpen || hovering;

  return (
    <header className="cabecera container-fluid">
      <nav className="cabecera-nav d-flex justify-content-between align-items-center px-4">

        <div className="cabecera-logo">
          <Link href="/">
            <Image src="/logo.png" alt="GTS Logo" width={160} height={160} className="logoCabeceraIMG" />
          </Link>
        </div>

        <div className="cabecera-menu d-none d-md-flex gap-5">
          <Link href="/">Inicio</Link>
          <Link href="/#sobre-mi">Sobre mí</Link>
          <Link href="/#experiencia">Experiencia</Link>
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#formacion">Formación</Link>
          <Link href="/#contacto">Contacto</Link>
          <GoogleTranslate />
        </div>

        <button
          ref={buttonRef}
          type="button"
          className={`menu-toggle d-md-none ${showPiramide ? "active" : ""}`}
          onClick={() => {
            setMenuOpen((prev) => {
              const next = !prev;
              if (!next) setHovering(false);
              return next;
            });
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <svg width="28" height="28" fill="#93C5FD" viewBox="0 0 24 24" className="menu-icon">
            <circle cx="5" cy="5" r="2"/>
            <circle cx="12" cy="5" r="2"/>
            <circle cx="19" cy="5" r="2"/>
            <circle cx="5" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="19" cy="12" r="2"/>
            <circle cx="5" cy="19" r="2"/>
            <circle cx="12" cy="19" r="2"/>
            <circle cx="19" cy="19" r="2"/>
          </svg>
        </button>

      </nav>

      {menuOpen && (
        <div ref={menuRef} className="menu-responsive d-flex flex-column align-items-center py-3">
          <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link href="/#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</Link>
          <Link href="/#experiencia" onClick={() => setMenuOpen(false)}>Experiencia</Link>
          <Link href="/#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link>
          <Link href="/#formacion" onClick={() => setMenuOpen(false)}>Formación</Link>
          <Link href="/#contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
          <GoogleTranslate/>
        </div>
      )}
    </header>
  );
}