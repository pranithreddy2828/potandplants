import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Pot &amp; Plants</h3>
          <p>Garden &amp; landscape design that brings calm, beauty, and functionality to your home.</p>
        </div>
        <div>
          <h4>Services</h4>
          <p>
            <Link to="/#services">Pergola</Link><br />
            <Link to="/#services">Yoga Deck</Link><br />
            <Link to="/#services">Fire Pit Seating</Link><br />
            <Link to="/#services">Pathways</Link><br />
            <Link to="/#services">Water Features</Link><br />
            <Link to="/#services">Plants &amp; Landscaping</Link>
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: <a href="mailto:hello@potandplants.com">hello@potandplants.com</a></p>
          <p>
            Phone / WhatsApp:
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">+91-98765-43210</a>
          </p>
          <div className="social-row" aria-label="Social links">
            <a className="social-icon" href="#" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z"></path>
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                <path d="M17.5 6.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"></path>
              </svg>
            </a>
            <a className="social-icon" href="#" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.6V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.4v8h3.1z"></path>
              </svg>
            </a>
            <a className="social-icon" href="#" aria-label="Pinterest" title="Pinterest">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2.1 0-3l1.7-7.1s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.7.9 1.7 1.9 0 1.2-.8 3-1.1 4.6-.3 1.3.6 2.3 1.8 2.3 2.2 0 3.8-2.3 3.8-5.5 0-2.9-2.1-4.9-5.1-4.9-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.1.9 2.7a.4.4 0 0 1 .1.4l-.3 1.2c-.1.4-.3.5-.6.3-1.3-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2.1-1.2 2.8A10 10 0 1 0 12 2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Pot &amp; Plants. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
