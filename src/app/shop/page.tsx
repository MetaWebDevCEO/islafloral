'use client';

import React, { useState } from 'react';
import './shop.css';

// Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "Anturio pz",
    price: 90.00,
    description: "Exotismo puro. Una vibrante selección de Heliconias y Anturios que evoca la calidez del trópico con sus formas arquitectónicas y colores intensos.",
    image: "/img3.jpg"
  },
  {
    id: 2,
    name: "Rosa 24 pz",
    price: 200.00,
    description: "La reina de las rosas. Variedad Freedom de exportación, famosa por su rojo profundo, tallos largos y apertura perfecta en forma de copa.",
    image: "/img.jpg"
  }
];

export default function Shop() {
  const [cart, setCart] = useState<number[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'payment' | 'success'>('details');

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkoutStep === 'details') {
      setCheckoutStep('payment');
    } else if (checkoutStep === 'payment') {
      // Simulate processing
      setTimeout(() => {
        setCheckoutStep('success');
        setCart([]); // Clear cart
      }, 1500);
    }
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    // Reset state after closing if it was success
    if (checkoutStep === 'success') {
      setTimeout(() => setCheckoutStep('details'), 300);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="shop-container">
        
        {/* Header */}
        <header className="shop-header">
          <h1 className="shop-title">Nuestra Colección</h1>
          <p className="shop-subtitle">Piezas exclusivas seleccionadas para momentos inolvidables.</p>
        </header>

        {/* Product Grid */}
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">${product.price.toFixed(2)}</span>
                <p className="product-description">{product.description}</p>
                <button 
                  className="btn-add-cart"
                  onClick={() => addToCart(product.id)}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart Button (Visible if items in cart) */}
        {cart.length > 0 && (
          <div className="floating-cart" onClick={() => setIsCheckoutOpen(true)}>
            <span>Tu Carrito</span>
            <div className="cart-count">{cart.length}</div>
          </div>
        )}

        {/* Checkout Modal */}
        {isCheckoutOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-modal" onClick={closeCheckout}>&times;</button>
              
              {/* Steps Indicator */}
              <div className="checkout-steps">
                <span className={`step ${checkoutStep === 'details' ? 'active' : 'completed'}`}>1. Datos</span>
                <span className={`step ${checkoutStep === 'payment' ? 'active' : ''} ${checkoutStep === 'success' ? 'completed' : ''}`}>2. Pago</span>
                <span className={`step ${checkoutStep === 'success' ? 'active completed' : ''}`}>3. Confirmación</span>
              </div>

              <form className="checkout-form" onSubmit={handleCheckout}>
                
                {checkoutStep === 'details' && (
                  <>
                    <h3>Detalles de Envío</h3>
                    <div className="form-group">
                      <label className="form-label">Nombre Completo</label>
                      <input type="text" className="form-input" required placeholder="Ej. Ana García" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Dirección</label>
                      <input type="text" className="form-input" required placeholder="Calle y Número" />
                    </div>
                    <div className="form-row">
                      <div className="form-group" style={{flex: 1}}>
                        <label className="form-label">Ciudad</label>
                        <input type="text" className="form-input" required />
                      </div>
                      <div className="form-group" style={{flex: 1}}>
                        <label className="form-label">C.P.</label>
                        <input type="text" className="form-input" required />
                      </div>
                    </div>
                    <button type="submit" className="btn-primary">Continuar al Pago</button>
                  </>
                )}

                {checkoutStep === 'payment' && (
                  <>
                    <h3>Método de Pago</h3>
                    <div className="form-group">
                      <label className="form-label">Número de Tarjeta</label>
                      <input type="text" className="form-input" required placeholder="0000 0000 0000 0000" maxLength={19} />
                    </div>
                    <div className="form-row">
                      <div className="form-group" style={{flex: 1}}>
                        <label className="form-label">Expira</label>
                        <input type="text" className="form-input" required placeholder="MM/YY" maxLength={5} />
                      </div>
                      <div className="form-group" style={{flex: 1}}>
                        <label className="form-label">CVC</label>
                        <input type="text" className="form-input" required placeholder="123" maxLength={3} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Titular de la tarjeta</label>
                      <input type="text" className="form-input" required />
                    </div>
                    <button type="submit" className="btn-primary">Pagar ${cart.reduce((total, id) => total + (PRODUCTS.find(p => p.id === id)?.price || 0), 0).toFixed(2)}</button>
                  </>
                )}

                {checkoutStep === 'success' && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h3>¡Compra Exitosa!</h3>
                    <p style={{color: '#666', marginBottom: '2rem'}}>
                      Gracias por tu compra. Hemos enviado la confirmación a tu correo electrónico.
                    </p>
                    <button type="button" className="btn-primary" onClick={closeCheckout}>
                      Seguir Comprando
                    </button>
                  </div>
                )}

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
