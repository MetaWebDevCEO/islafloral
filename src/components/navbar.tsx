import React from 'react';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-top">
        <div className="navbar-search">
           {/* Simple Search Icon if needed, or just text as per image */}
           <span>Buscar</span>
        </div>

        <div className="navbar-logo">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Isla Floral
          </Link>
        </div>

        <div className="navbar-actions">
          <Link href="/account" className="navbar-action-item">
            Cuenta
          </Link>
          <Link href="/wishlist" className="navbar-action-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="navbar-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </Link>
          <Link href="/cart" className="navbar-action-item cart-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="navbar-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 5c.07.286.07.584 0 .87l-1.637 6.55A2.25 2.25 0 0117.062 23H6.937a2.25 2.25 0 01-2.18-1.706l-1.638-6.55a2.25 2.25 0 010-.87l1.263-5a2.25 2.25 0 012.18-1.707h10.938a2.25 2.25 0 012.18 1.707z" />
            </svg>
            <span className="cart-badge">0</span>
          </Link>
        </div>
      </div>

      <div className="navbar-bottom">
        <Link href="/" className="nav-link active">Inicio</Link>
        <Link href="/shop" className="nav-link">Tienda</Link>
        <Link href="/shop" className="nav-link">Flores</Link>
      </div>
    </nav>
  );
}
