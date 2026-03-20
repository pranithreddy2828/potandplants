import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  // About Grow Effect
  useEffect(() => {
    const container = document.querySelector("[data-about-grow]");
    if (!container) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;

      const start = viewportH * 0.25;
      const end = viewportH * 0.75;
      const total = rect.height + start + end;
      const progressed = start - rect.top;
      const raw = progressed / Math.max(1, total);
      const speed = 4.5;
      const minGrow = 0.12;
      const grow = Math.max(minGrow, Math.min(1, raw * speed));

      container.style.setProperty("--grow", grow.toFixed(4));
      document.documentElement.style.setProperty("--about-grow", grow.toFixed(4));
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="about-page">
      <section className="section">
        <div className="container blog-article about-grow about-bg" data-about-grow>
          <div className="about-bg-art" aria-hidden="true">
            <div className="about-pot-wrap">
              <div className="about-plant">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <span key={`leaf-${i}`} className={`about-leaf leaf-${i}`}></span>)}
                {[1, 2, 3, 4, 5, 6].map(i => <span key={`flower-${i}`} className={`about-flower flower-${i}`}></span>)}
              </div>
              <svg className="about-pot" viewBox="0 0 220 200" role="presentation" focusable="false">
                <defs>
                  <linearGradient id="potGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f4a261" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.95"/>
                  </linearGradient>
                  <linearGradient id="potShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000" stopOpacity="0.06"/>
                    <stop offset="100%" stopColor="#000" stopOpacity="0.18"/>
                  </linearGradient>
                </defs>
                <path d="M30 62 C40 40, 180 40, 190 62 L178 78 C170 88, 50 88, 42 78 Z" fill="url(#potGradient)"/>
                <path d="M55 84 H165 L186 176 C187 184, 182 190, 174 190 H46 C38 190, 33 184, 34 176 Z" fill="url(#potGradient)"/>
                <path d="M55 84 H165 L172 120 C156 132, 64 132, 48 120 Z" fill="url(#potShadow)"/>
                <path d="M62 90 C74 76, 146 76, 158 90 C146 104, 74 104, 62 90 Z" fill="#3b2f2f" opacity="0.72"/>
              </svg>
            </div>
          </div>
          <div className="blog-article-body">
            <header className="blog-article-header">
              <p className="eyebrow">About us</p>
              <h1 className="section-title">A calmer, greener way to live.</h1>
              <p className="blog-article-subtitle">
                Pot &amp; Plants is a modern online nursery and studio—helping you choose plants that thrive,
                and designing spaces that feel natural, intentional, and easy to maintain.
              </p>
              <div className="hero-actions" style={{ marginTop: '1rem' }}>
                <Link to="/shop" className="btn-primary btn-lg">Shop plants</Link>
                <Link to="/studio" className="btn-outline">Explore studio</Link>
              </div>
            </header>

            <h3>Our story</h3>
            <p>
              We started Pot & Plants with a simple idea: make it easier to bring greenery into everyday life—without
              the guesswork. From first-time plant parents to seasoned collectors, we focus on the right plant for the
              right space, with honest guidance and thoughtful curation.
            </p>

            <h3>What we do</h3>
            <ul>
              <li><strong>Curated plants &amp; pots</strong> chosen for beauty, health, and suitability for Indian homes.</li>
              <li><strong>Care-first guidance</strong> so your plants stay happy long after delivery.</li>
              <li><strong>Studio services</strong> for balconies, terraces, indoor corners, and commercial spaces.</li>
            </ul>

            <h3>What we believe</h3>
            <div className="testimonial-grid" style={{ marginTop: '0.9rem' }}>
              <article className="testimonial-card">
                <p><strong>Simplicity</strong></p>
                <span>Recommendations that match your light, space, and routine.</span>
              </article>
              <article className="testimonial-card">
                <p><strong>Sustainability</strong></p>
                <span>Better choices, longer-lasting setups, and mindful packaging.</span>
              </article>
              <article className="testimonial-card">
                <p><strong>Craft</strong></p>
                <span>Design that feels calm, balanced, and built to grow with you.</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="blog-featured">
            <div className="blog-featured-copy">
              <h2 className="section-title">Need help choosing?</h2>
              <p>
                Tell us what you’re working with—sunlight, indoor/outdoor, and how much time you can give—
                and we’ll point you to plants that fit.
              </p>
              <p>
                Ready to start? Browse our shop or check out the studio work for real-life makeovers.
              </p>
              <div className="hero-actions" style={{ marginTop: '1rem' }}>
                <Link to="/shop" className="btn-primary">Browse shop</Link>
                <Link to="/blogs" className="btn-outline">Read blogs</Link>
              </div>
            </div>
            <div className="blog-featured-gallery" aria-hidden="true">
              <div className="blog-gallery-image blog-gallery-1"></div>
              <div className="blog-gallery-image blog-gallery-2"></div>
              <div className="blog-gallery-image blog-gallery-3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
