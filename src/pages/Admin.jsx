import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Admin dashboard</h1>
        <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <div className="admin-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2>Products</h2>
              <button className="btn-primary">Add product</button>
            </div>
            <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#f8f8f8', textAlign: 'left' }}>
                <tr>
                  <th style={{ padding: '0.75rem' }}>ID</th>
                  <th style={{ padding: '0.75rem' }}>Name</th>
                  <th style={{ padding: '0.75rem' }}>Price</th>
                  <th style={{ padding: '0.75rem' }}></th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '0.75rem' }}>{product.id}</td>
                    <td style={{ padding: '0.75rem' }}>{product.name}</td>
                    <td style={{ padding: '0.75rem' }}>₹{product.price.toFixed(2)}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                      <Link to={`/product/${product.id}`} className="btn-inline" style={{ marginRight: '0.5rem' }}>View</Link>
                      <button className="btn-link" style={{ color: '#ef4444' }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside>
            <h2>Recent orders</h2>
            <ul className="order-list" style={{ marginTop: '1rem', listStyle: 'none' }}>
              <li style={{ padding: '1rem', background: '#f8f8f8', borderRadius: '4px' }}>No orders yet.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Admin;
