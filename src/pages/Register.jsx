import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="section auth-section">
      <div className="container auth-card">
        <h1>Create account</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" className="input" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="input" required />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input" required />
          </div>
          <div className="form-row">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" className="input" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Create account</button>
        </form>
        <p className="auth-alt" style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
