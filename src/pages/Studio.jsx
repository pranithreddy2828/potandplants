import React from 'react';

const Studio = () => {
  return (
    <div className="studio-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Pot &amp; Plants Studio</h1>
          <p>Peek into our styling studio where we design balcony makeovers, desk setups and cozy plant corners for Indian homes.</p>
          <p>From first sketch to final leaf, every space we create is photographed, documented and refined so you can imagine what your own home could become.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container studio-grid">
          <article className="studio-card">
            <div className="studio-image studio-image-1"></div>
            <div className="studio-overlay"></div>
            <div className="studio-content">
              <h2>Balcony makeovers</h2>
              <p>Turn compact city balconies into lush reading nooks with climbers, palms and seating that works for the Indian monsoon.</p>
            </div>
          </article>
          <article className="studio-card">
            <div className="studio-image studio-image-2"></div>
            <div className="studio-overlay"></div>
            <div className="studio-content">
              <h2>Work-from-home desks</h2>
              <p>Soft, filtered greens for your study table using low-maintenance indoor plants like snake plants, ZZ and pothos.</p>
            </div>
          </article>
          <article className="studio-card">
            <div className="studio-image studio-image-3"></div>
            <div className="studio-overlay"></div>
            <div className="studio-content">
              <h2>Living room corners</h2>
              <p>Statement corners styled with fiddle leaf figs, rubber plants and textured pots, inspired by modern Indian homes.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container studio-showcase">
          <h2 className="section-title">Before &amp; after stories</h2>
          <div className="studio-before-after-grid">
            <article className="before-after-card">
              <div className="before-after-images">
                <div className="ba-image ba-before studio-image-4">
                  <span className="ba-label">Before</span>
                </div>
                <div className="ba-image ba-after studio-image-5">
                  <span className="ba-label">After</span>
                </div>
              </div>
              <div className="before-after-copy">
                <h3>From empty balcony to weekend retreat</h3>
                <p>A 60 sq ft balcony in a Bengaluru apartment turned into a cozy retreat with weather-proof flooring, railing planters, climbers and layered lighting.</p>
              </div>
            </article>
            <article className="before-after-card">
              <div className="before-after-images">
                <div className="ba-image ba-before studio-image-6">
                  <span className="ba-label">Before</span>
                </div>
                <div className="ba-image ba-after studio-image-7">
                  <span className="ba-label">After</span>
                </div>
              </div>
              <div className="before-after-copy">
                <h3>Workspace with a calm green frame</h3>
                <p>A cluttered desk is reimagined with vertical shelves, low-maintenance plants and warm lighting to make long work days feel softer.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container studio-process">
          <h2 className="section-title">How the studio works</h2>
          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3>Share your space</h3>
              <p>Send us photos, a short video or a simple sketch of your balcony, terrace or room along with basic measurements.</p>
            </div>
            <div className="process-step">
              <span className="step-number">02</span>
              <h3>Design &amp; moodboard</h3>
              <p>We create a visual moodboard with plant choices, pots, flooring and lighting ideas tailored to your light and climate.</p>
            </div>
            <div className="process-step">
              <span className="step-number">03</span>
              <h3>Installation day</h3>
              <p>Our team sets up everything in one session so you see your space transform in a matter of hours, not weeks.</p>
            </div>
            <div className="process-step">
              <span className="step-number">04</span>
              <h3>Care guide &amp; follow-up</h3>
              <p>You receive a simple care guide and optional follow-up visits so your new green space stays healthy and thriving.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
