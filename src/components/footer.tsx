import React from 'react';
import Link from 'next/link';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">Isla Floral</h2>
          <p className="footer-tagline">
            Producción y comercialización de flor de corte para mercado nacional y exportación.
            Comprometidos con la calidad y los estándares internacionales.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/shop">Catálogo</Link></li>
            <li><Link href="/about">Nosotros</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Ubicación</h3>
          <div className="contact-item">
            <strong>México</strong>
            <p>Registro Nacional y Operaciones</p>
          </div>
          <div className="contact-item">
            <strong>USA (Chicago)</strong>
            <p>Midwest Flower Exchange</p>
          </div>
          <div className="contact-item">
            <p>info@islafloral.com</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Isla Floral. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
