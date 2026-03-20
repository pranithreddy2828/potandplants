import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="section auth-section">
      <div className="container auth-card">
        <h1>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="input" required />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input" required />
          </div>
          <div className="form-row form-row-inline">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Login</button>
        </form>
        <p className="auth-alt" style={{ marginTop: '1rem', textAlign: 'center' }}>
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
