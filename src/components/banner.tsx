import React from 'react';
import Link from 'next/link';
import './banner.css';

export default function Banner() {
  return (
    <div className="banner-container">
      <p className="banner-text">
        Envíos trasnacionales
        <Link href="/shop" className="banner-link">
          comprar ahora!! <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
    </div>
  );
}
