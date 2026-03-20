import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <section className="section">
      <div className="container checkout-grid">
        <div className="form-card">
          <h1>Checkout</h1>
          <form onSubmit={handlePlaceOrder}>
            <div className="form-row">
              <label htmlFor="address_line1">Address line 1</label>
              <input type="text" id="address_line1" className="input" required />
            </div>
            <div className="form-row">
              <label htmlFor="address_line2">Address line 2</label>
              <input type="text" id="address_line2" className="input" />
            </div>
            <div className="form-row form-row-inline" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" className="input" required />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input type="text" id="state" className="input" required />
              </div>
            </div>
            <div className="form-row form-row-inline" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label htmlFor="postal_code">Postal code</label>
                <input type="text" id="postal_code" className="input" required />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" className="input" defaultValue="India" readOnly />
              </div>
            </div>
            <div className="form-row" style={{ marginTop: '1rem' }}>
              <label htmlFor="payment_method">Payment method</label>
              <select id="payment_method" className="input" required>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
                <option value="Cash on delivery">Cash on delivery</option>
              </select>
            </div>
            <div style={{ margin: '1.5rem 0', padding: '1rem', background: '#f8f8f8', borderRadius: '4px' }}>
              <strong>Total Amount: ₹{subtotal.toFixed(2)}</strong>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Place order</button>
          </form>
        </div>
        <aside className="checkout-info">
          <h2>Payment options</h2>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li><strong>UPI</strong>: pay via your favorite UPI app.</li>
            <li><strong>Card</strong>: all major debit/credit cards accepted.</li>
            <li><strong>Cash on delivery</strong>: pay when the plants arrive.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Checkout;
