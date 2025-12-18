import React from 'react';
import Link from 'next/link';
import './hero.css';

export default function Hero() {
  return (
    <section className="simple-hero">
      <div className="simple-hero-content">
        <h1>Bienvenido a Isla Floral</h1>
        <p>Las flores más frescas para cada ocasión especial.</p>
        <Link href="/shop" className="simple-hero-button">
          Ver Catálogo
        </Link>
      </div>
    </section>
  );
}
