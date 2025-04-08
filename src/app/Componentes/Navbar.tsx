"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../estilos/Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar la visibilidad del menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna la visibilidad del menú
  };

  return (
    <nav className="navbar">
      {/* Iconos redes sociales */}
      <div className="social-icons-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100054928470603&sk=about" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
          </a>
        </div>
      </div>

      {/* Logo + Título */}
      <div className="logo-title-container">
        <img src="/logo1.png" alt="Logo" className="logo" />
        <span className="navbar-title">Pitahayas Huitziltepec</span>
      </div>

      {/* Menú 3 líneas */}
      <div className="menu-container" onClick={toggleMenu}>
        <div className="menu-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="dropdown-menu">
          <Link href="#inicio" onClick={toggleMenu}>Inicio</Link>
          <Link href="#quienes-somos" onClick={toggleMenu}>Quienes Somos</Link>
          <Link href="#beneficios" onClick={toggleMenu}>Beneficios</Link>
          <Link href="#location-section" onClick={toggleMenu}>Ubicacion</Link>
          <Link href="#contacto" onClick={toggleMenu}>Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;