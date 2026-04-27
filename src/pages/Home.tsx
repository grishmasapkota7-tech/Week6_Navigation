import { Link } from "react-router-dom";

function Home() {
  const highlights = [
    { icon: "🕰️", label: "Rich History", desc: "From hand fans to smart devices — explore centuries of innovation.", to: "/history" },
    { icon: "⚡", label: "Modern Tech", desc: "Smart controls, silent motors, and energy-efficient airflow.", to: "/modern" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400&display=swap');

        .home-page {
          background: #0a0c10;
          min-height: 100vh;
          color: #e8eaf0;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
        .home-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        /* Hero */
        .hero {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 6rem 1.5rem 4rem;
        }
        .hero-eyebrow {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #00d4ff;
          border: 1px solid rgba(0,212,255,0.3);
          padding: 0.3rem 1rem;
          border-radius: 100px;
          margin-bottom: 1.75rem;
          opacity: 0;
          animation: fadeUp 0.6s 0.1s ease forwards;
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #ffffff 30%, #6b7280 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 auto 1.25rem;
          max-width: 700px;
          opacity: 0;
          animation: fadeUp 0.6s 0.2s ease forwards;
        }
        .hero-title .accent {
          background: linear-gradient(135deg, #00d4ff, #b8ff57);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: 1.05rem;
          font-weight: 300;
          color: #6b7280;
          max-width: 480px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
          opacity: 0;
          animation: fadeUp 0.6s 0.3s ease forwards;
        }
        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.6s 0.4s ease forwards;
        }
        .btn-primary-custom {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #0a0c10;
          background: #00d4ff;
          border: none;
          padding: 0.75rem 1.75rem;
          border-radius: 10px;
          text-decoration: none;
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .btn-primary-custom:hover {
          box-shadow: 0 0 28px rgba(0,212,255,0.45);
          transform: translateY(-2px);
          color: #0a0c10;
        }
        .btn-secondary-custom {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #e8eaf0;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.75rem 1.75rem;
          border-radius: 10px;
          text-decoration: none;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.2s ease;
        }
        .btn-secondary-custom:hover {
          border-color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
          color: #fff;
        }

        /* Fan visual */
        .hero-visual {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          padding: 1rem 0 3rem;
          opacity: 0;
          animation: fadeUp 0.6s 0.5s ease forwards;
        }
        .fan-big {
          font-size: 7rem;
          animation: spin 6s linear infinite;
          filter: drop-shadow(0 0 40px rgba(0,212,255,0.25));
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Highlights */
        .highlights {
          position: relative;
          z-index: 1;
          padding: 0 1.5rem 5rem;
        }
        .highlight-card {
          background: #111318;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 2rem;
          text-decoration: none;
          display: block;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .highlight-card:nth-child(1) { animation-delay: 0.6s; }
        .highlight-card:nth-child(2) { animation-delay: 0.7s; }
        .highlight-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0,212,255,0.4);
          box-shadow: 0 0 28px rgba(0,212,255,0.1);
        }
        .highlight-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .highlight-label {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.4rem;
        }
        .highlight-desc {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 300;
          margin: 0;
          line-height: 1.6;
        }
        .highlight-arrow {
          display: inline-block;
          color: #00d4ff;
          font-size: 1.1rem;
          margin-top: 0.85rem;
          transition: transform 0.2s ease;
        }
        .highlight-card:hover .highlight-arrow {
          transform: translateX(5px);
        }

        /* Stats strip */
        .stats-strip {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 2rem 1.5rem;
          margin-bottom: 4rem;
          opacity: 0;
          animation: fadeUp 0.6s 0.55s ease forwards;
        }
        .stat-item {
          text-align: center;
        }
        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.03em;
        }
        .stat-value span {
          color: #00d4ff;
        }
        .stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 0.2rem;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="home-page">
        {/* Hero */}
        <section className="hero">
          <span className="hero-eyebrow">The Complete Fan Guide</span>
          <h1 className="hero-title">
            Everything About<br />
            <span className="accent">Electric Fans</span>
          </h1>
          <p className="hero-sub">
            Discover the history, engineering, and modern innovations behind
            the world's most essential cooling technology.
          </p>
          <div className="hero-cta">
            <Link to="/history" className="btn-primary-custom">Explore History</Link>
            <Link to="/modern" className="btn-secondary-custom">Modern Fans</Link>
          </div>
        </section>

        {/* Spinning fan visual */}
        <div className="hero-visual">
          <span className="fan-big">🌀</span>
        </div>

        {/* Stats */}
        <div className="stats-strip">
          <div className="container">
            <div className="row g-4">
              {[
                { value: "140+", label: "Years of Innovation" },
                { value: "3B+", label: "Fans Worldwide" },
                { value: "60%", label: "Energy Saved (Modern)" },
                { value: "15dB", label: "Ultra Silent Models" },
              ].map((s) => (
                <div className="col-6 col-md-3" key={s.label}>
                  <div className="stat-item">
                    <div className="stat-value">
                      {s.value.replace(/[0-9]+/, (n) => (
                        `${n}`
                      ))}
                      <span>+</span>
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <section className="highlights">
          <div className="container">
            <div className="row g-4">
              {highlights.map((h) => (
                <div className="col-md-6" key={h.to}>
                  <Link to={h.to} className="highlight-card">
                    <div className="highlight-icon">{h.icon}</div>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-desc">{h.desc}</p>
                    <div className="highlight-arrow">→</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;