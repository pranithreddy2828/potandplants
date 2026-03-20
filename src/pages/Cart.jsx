import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1>Your cart is empty</h1>
          <p style={{ margin: '1rem 0' }}>Looks like you haven't added any plants yet.</p>
          <Link to="/shop" className="btn-primary">Browse Shop</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Shopping Cart</h1>
        <div className="cart-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem 0', borderBottom: '1px solid #eee' }}>
                <Link to={`/product/${item.id}`} className="cart-item-image" style={{ width: '120px', height: '120px', flexShrink: 0 }}>
                  {item.image_filename ? (
                    <img src={`/uploads/${item.image_filename}`} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                  ) : (
                    <div className="image-placeholder" style={{ width: '100%', height: '100%', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', fontSize: '2rem' }}>
                      {item.name[0]}
                    </div>
                  )}
                </Link>
                <div className="cart-item-details" style={{ flexGrow: 1 }}>
                  <h3><Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{item.name}</Link></h3>
                  <p className="price">₹{item.price.toFixed(2)}</p>
                  <div className="cart-item-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', padding: '0.25rem' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 0.5rem' }}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 0.5rem' }}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="btn-link" style={{ color: '#ef4444' }}>Remove</button>
                  </div>
                </div>
                <div className="cart-item-total">
                  <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '1.5rem' }}>
              <button onClick={clearCart} className="btn-outline">Clear Cart</button>
            </div>
          </div>

          <aside className="cart-summary" style={{ padding: '1.5rem', background: '#f8f8f8', borderRadius: '8px', height: 'fit-content' }}>
            <h2>Order Summary</h2>
            <div style={{ margin: '1.5rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #ddd' }}>
                <span>Total</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="btn-primary btn-lg" style={{ display: 'block', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
