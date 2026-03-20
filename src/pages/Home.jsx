import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeService, setActiveService] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const scrollRef = useRef(null);

  // Lotus Sprinkles Logic
  useEffect(() => {
    const lotusWrap = document.querySelector("[data-lotus-sprinkles]");
    if (lotusWrap) {
      const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const count = 12;
      const rand = (min, max) => Math.random() * (max - min) + min;

      lotusWrap.innerHTML = "";
      for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className = "lotus";
        const top = rand(6, 92);
        const left = rand(4, 96);
        const size = rand(26, 58);
        const rot = rand(-18, 18);
        const opacity = rand(0.08, 0.18);
        const floatDur = rand(6, 12);
        const floatDelay = rand(0, 3.5);

        el.style.top = `${top}%`;
        el.style.left = `${left}%`;
        el.style.setProperty("--lotus-size", `${size}px`);
        el.style.setProperty("--lotus-rot", `${rot}deg`);
        el.style.setProperty("--lotus-opacity", opacity.toFixed(2));

        if (!prefersReduce) {
          el.animate(
            [
              { transform: `translateZ(0) rotate(${rot}deg) translateY(0px)` },
              { transform: `translateZ(0) rotate(${rot}deg) translateY(-10px)` },
              { transform: `translateZ(0) rotate(${rot}deg) translateY(0px)` },
            ],
            { duration: floatDur * 1000, delay: floatDelay * 1000, iterations: Infinity, easing: "ease-in-out" }
          );
        }
        lotusWrap.appendChild(el);
      }
    }
  }, []);

  // Auto-scroll for projects
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId;
    let paused = false;

    const step = () => {
      if (!el || paused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) {
        rafId = requestAnimationFrame(step);
        return;
      }
      el.scrollLeft += 0.5;
      if (el.scrollLeft >= maxScroll - 1) {
        el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    
    const pause = () => { paused = true; cancelAnimationFrame(rafId); };
    const resume = () => { paused = false; rafId = requestAnimationFrame(step); };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, []);

  const services = [
    {
      id: "pergola",
      title: "Pergola",
      badge: "⛱",
      description: "A pergola creates a shaded seating area while adding architectural beauty to the garden.",
      images: ["https://picsum.photos/seed/potandplants-pergola/1400/900", "https://picsum.photos/seed/potandplants-pergola-2/1400/900", "https://picsum.photos/seed/potandplants-pergola-3/1400/900"]
    },
    {
      id: "yoga",
      title: "Yoga Deck",
      badge: "🧘",
      description: "A peaceful space for relaxation, yoga, or outdoor seating using wood or HPL decking.",
      images: ["https://picsum.photos/seed/potandplants-yoga/1400/900"]
    },
    {
      id: "firepit",
      title: "Fire Pit Seating Area",
      badge: "🔥",
      description: "A warm and inviting space perfect for evening relaxation and social gatherings.",
      images: ["https://picsum.photos/seed/potandplants-firepit/1400/900"]
    },
    {
      id: "pathways",
      title: "Pathways",
      badge: "🪨",
      description: "Stone, tile, and pebble pathways that guide movement through the garden.",
      images: ["https://picsum.photos/seed/potandplants-pathways/1400/900"]
    },
    {
      id: "water",
      title: "Water Features",
      badge: "💧",
      description: "Fountains or mini ponds that add calming sound and natural cooling.",
      images: ["https://picsum.photos/seed/potandplants-water/1400/900"]
    },
    {
      id: "plants",
      title: "Plants & Layered Landscaping",
      badge: "🌿",
      description: "Thoughtfully selected plants and trees that bring life, color, and structure to the space.",
      images: ["https://picsum.photos/seed/potandplants-plants/1400/900"]
    }
  ];

  const projects = [
    {
      title: "Backyard garden transformations",
      description: "We design full makeovers for backyards using structured seating, diverse greens, pebble pathways, and elegant lighting to maximize your private outdoor sanctuary.",
      images: ["https://images.pexels.com/photos/4503264/pexels-photo-4503264.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://picsum.photos/seed/backyard/1400/900", "https://picsum.photos/seed/backyard2/1400/900"],
      imgClass: "project-img-1"
    },
    {
      title: "Villa landscape designs",
      description: "Premium exterior setups that match the scale of your villa. We offer curated stonework, layered planting, and bespoke features to elevate your home's architecture.",
      images: ["https://images.pexels.com/photos/6207811/pexels-photo-6207811.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://picsum.photos/seed/villa/1400/900", "https://picsum.photos/seed/villa2/1400/900"],
      imgClass: "project-img-2"
    },
    {
      title: "Compact space optimization",
      description: "No space is too small. We introduce clever zoning, vertical gardens, and space-saving furniture to bring a sense of nature to small outdoor areas.",
      images: ["https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://picsum.photos/seed/compact/1400/900"],
      imgClass: "project-img-3"
    },
    {
      title: "Balcony garden setups",
      description: "Transform neglected balconies into your favorite daily retreat. Using specialized planters, vertical greens, and cozy textures to form a quiet nook.",
      images: ["https://images.pexels.com/photos/4505170/pexels-photo-4505170.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://picsum.photos/seed/balcony/1400/900", "https://picsum.photos/seed/balcony2/1400/900"],
      imgClass: "project-img-4"
    },
    {
      title: "Terrace gardens",
      description: "Layered planting beds, wooden pergolas, and deck zones to completely transform your roof or terrace. Built to endure weather while remaining low maintenance.",
      images: ["https://images.pexels.com/photos/4475922/pexels-photo-4475922.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://picsum.photos/seed/terrace/1400/900", "https://picsum.photos/seed/terrace2/1400/900"],
      imgClass: "project-img-5"
    }
  ];

  const processSteps = [
    { title: "Consultation", desc: "We understand your space, needs, style, and budget." },
    { title: "Design Planning", desc: "Layouts, zoning, and plant + feature planning." },
    { title: "Material Selection", desc: "Decking, stones, features, planters, and lighting choices." },
    { title: "Execution", desc: "On-site build with clean timelines and quality checks." },
    { title: "Final Styling", desc: "Plant placement, finishing touches, and a ready-to-live space." }
  ];

  return (
    <div className="home-page">
      <div className="lotus-sprinkles lotus-sprinkles--page" aria-hidden="true" data-lotus-sprinkles></div>

      <section className="hero hero-landscape" id="top">
        <div className="hero-bg" role="img" aria-label="Beautiful garden landscape background"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-landscape-inner">
          <div className="hero-landscape-copy">
            <h1>Transform Your Space into a Living Garden</h1>
            <div className="hero-frosted">
              <p className="hero-subheading">
                Custom Landscaping • Yoga Decks • Pergolas • Fire Pits • Water Features • Pathways • Plant Styling
              </p>
              <p className="hero-description">
                Create a space that feels calm, beautiful, and truly yours. We design and build gardens that are not just visually appealing but also functional and meaningful.
              </p>
            </div>
            <div className="hero-actions">
              <a href="#consultation" className="btn-primary btn-lg">Get Free Consultation</a>
              <a href="https://wa.me/919876543210" className="btn-outline btn-lg" target="_blank" rel="noopener noreferrer">Call / WhatsApp</a>
            </div>
          </div>
          <div className="hero-landscape-card">
            <div className="hero-mini-grid">
              <div className="hero-mini">
                <div className="hero-mini-title">Designed for your space</div>
                <div className="hero-mini-text">Villa • Backyard • Balcony • Terrace</div>
              </div>
              <div className="hero-mini">
                <div className="hero-mini-title">End-to-end execution</div>
                <div className="hero-mini-text">Plan • Materials • Build • Styling</div>
              </div>
              <div className="hero-mini">
                <div className="hero-mini-title">Nature-first palette</div>
                <div className="hero-mini-text">Greens • Beige • Clean whites</div>
              </div>
              <div className="hero-mini">
                <div className="hero-mini-title">Budget-friendly</div>
                <div className="hero-mini-text">Smart choices, lasting quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container split-grid">
          <div className="split-copy">
            <h2 className="section-title">About Pot &amp; Plants</h2>
            <p className="section-lead">At Pot &amp; Plants, we don’t just design gardens — we create experiences.</p>
            <p>From serene yoga decks and cozy fire pit corners to natural stone pathways, soothing water features, and beautifully crafted pergolas, we transform empty spaces into vibrant environments that bring calm, beauty, and functionality to your home.</p>
            <p>Whether it's a villa garden, backyard, balcony, terrace, or a compact outdoor space, every design is thoughtfully crafted with purpose and attention to detail.</p>
          </div>
          <div className="split-visual">
            <img className="rounded-image" src="https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Designed garden with seating" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section-alt" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">Build a garden that looks beautiful and lives beautifully.</p>
          </div>
          <div className="cards-grid">
            {services.map(service => (
              <article 
                key={service.id} 
                className="icon-card icon-card--bg service-card" 
                onClick={() => setActiveService(service)}
                role="button"
                tabIndex="0"
              >
                <div className="icon-badge" aria-hidden="true">{service.badge}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: "🧩", title: "Custom-designed gardens tailored to your space", desc: "Every layout is planned around your light, flow, and lifestyle." },
              { icon: "📐", title: "Smart and efficient space utilization", desc: "We make compact spaces feel larger and more functional." },
              { icon: "💚", title: "Budget-friendly solutions without compromising quality", desc: "We balance materials, durability, and aesthetics." },
              { icon: "🛠", title: "End-to-end service from design to execution", desc: "One team from concept to final styling." },
              { icon: "✨", title: "Focus on both aesthetics and functionality", desc: "Beautiful spaces that are easy to use and maintain." }
            ].map((item, i) => (
              <div key={i} className="why-item">
                <div className="why-icon" aria-hidden="true">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects / What We Specialize In</h2>
            <p className="section-subtitle">A few of our most-loved transformations.</p>
          </div>
          <div className="project-grid project-grid--scroll" ref={scrollRef}>
            {projects.map((project, i) => (
              <article 
                key={i} 
                className="project-card" 
                onClick={() => setActiveProject(project)}
                role="button"
                tabIndex="0"
              >
                <div className={`project-image ${project.imgClass}`} role="img" aria-hidden="true"></div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 60)}...</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
          </div>
          <ol className="timeline">
            {processSteps.map((step, i) => (
              <li key={i} className="timeline-step">
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section cta-section" id="consultation">
        <div className="container">
          <div className="cta-card">
            <div className="cta-copy">
              <h2>Ready to Transform Your Space?</h2>
              <p>Let us design a beautiful garden that brings peace and life to your home.</p>
              <div className="hero-actions">
                <a href="#top" className="btn-primary btn-lg">Get Free Consultation</a>
                <a href="https://wa.me/919876543210" className="btn-outline btn-lg" target="_blank" rel="noopener noreferrer">Contact Us</a>
              </div>
            </div>
            <div className="cta-visual" role="img" aria-label="Garden seating with greenery"></div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {activeService && (
        <div className="modal is-open">
          <div className="modal-backdrop" onClick={() => setActiveService(null)}></div>
          <div className="modal-dialog" role="dialog" aria-modal="true">
            <button className="modal-close" onClick={() => setActiveService(null)} aria-label="Close">×</button>
            <div className="modal-grid">
              <div className="modal-media">
                <img src={activeService.images[0]} alt={activeService.title} />
              </div>
              <div className="modal-content">
                <h3>{activeService.title}</h3>
                <p>{activeService.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Drawer */}
      {activeProject && (
        <div className="project-drawer is-open">
          <div className="drawer-backdrop" onClick={() => setActiveProject(null)}></div>
          <div className="drawer-panel" role="dialog" aria-modal="true">
            <button className="drawer-close" onClick={() => setActiveProject(null)} aria-label="Close drawer">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="drawer-header">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
            </div>
            <div className="drawer-gallery">
              {activeProject.images.map((img, i) => (
                <div key={i} className="drawer-item">
                  <img src={img} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
