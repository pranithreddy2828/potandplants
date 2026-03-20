import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          Pot <span>&amp;</span> Plants
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
          <NavLink to="/studio" className={({ isActive }) => (isActive ? 'active' : '')}>Studio</NavLink>
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')}>Blogs</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
        </nav>
        <button 
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`} 
          type="button" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <svg className="flower-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle className="flower-center" cx="32" cy="32" r="7"></circle>
            <circle className="flower-petal" cx="32" cy="14" r="9"></circle>
            <circle className="flower-petal" cx="32" cy="50" r="9"></circle>
            <circle className="flower-petal" cx="14" cy="32" r="9"></circle>
            <circle className="flower-petal" cx="50" cy="32" r="9"></circle>
            <circle className="flower-petal" cx="19" cy="19" r="8"></circle>
            <circle className="flower-petal" cx="45" cy="19" r="8"></circle>
            <circle className="flower-petal" cx="19" cy="45" r="8"></circle>
            <circle className="flower-petal" cx="45" cy="45" r="8"></circle>
          </svg>
          <span className="nav-toggle-label">Menu</span>
        </button>
        <div className="nav-actions">
          <Link to="/cart" className="cart-link" style={{ position: 'relative' }}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <Link to="/login" className="btn-outline">Login</Link>
          <Link to="/register" className="btn-primary">Sign up</Link>
        </div>
      </div>
      <nav className={`mobile-nav ${isOpen ? 'is-open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
        <NavLink to="/studio" onClick={() => setIsOpen(false)}>Studio</NavLink>
        <NavLink to="/blogs" onClick={() => setIsOpen(false)}>Blogs</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
        <Link to="/cart" onClick={() => setIsOpen(false)} style={{ position: 'relative', display: 'inline-block' }}>
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>Sign up</Link>
      </nav>
    </header>
  );
};

export default Navbar;
