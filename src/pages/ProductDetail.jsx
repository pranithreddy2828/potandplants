import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <h1>Product not found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container product-detail-grid">
        <div className="product-detail-image">
          {product.image_filename ? (
            <img src={`/uploads/${product.image_filename}`} alt={product.name} />
          ) : (
            <div className="image-placeholder large">{product.name[0]}</div>
          )}
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price.toFixed(2)}</p>
          <p>{product.description}</p>

          <div className="add-to-cart-form" style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                min="1" 
                className="input"
                style={{ width: '80px', marginLeft: '0.5rem' }}
              />
            </div>
            <button onClick={() => addToCart(product, quantity)} className="btn-primary">Add to cart</button>
          </div>

          {product.care_instructions && (
            <div className="care-box">
              <h2>Care instructions</h2>
              <p>{product.care_instructions}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
