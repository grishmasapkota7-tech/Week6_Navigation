import { useEffect, useRef } from "react";

const cards = [
  {
    num: "01",
    icon: "📱",
    tag: "Connectivity",
    title: "Smart Control",
    desc: "Modern fans can be controlled using smartphones and voice assistants like Alexa or Google Assistant.",
    accent: "#00d4ff",
    glow: "rgba(0, 212, 255, 0.15)",
  },
  {
    num: "02",
    icon: "⚡",
    tag: "Efficiency",
    title: "Energy Efficient",
    desc: "New motors use less electricity while producing stronger airflow, reducing energy bills.",
    accent: "#b8ff57",
    glow: "rgba(184, 255, 87, 0.15)",
  },
  {
    num: "03",
    icon: "🌡️",
    tag: "Automation",
    title: "Temperature Sensors",
    desc: "Some fans automatically adjust speed based on room temperature for optimal comfort.",
    accent: "#ffb830",
    glow: "rgba(255, 184, 48, 0.15)",
  },
  {
    num: "04",
    icon: "🔇",
    tag: "Engineering",
    title: "Silent Operation",
    desc: "Advanced blade design reduces noise while maintaining airflow for a peaceful environment.",
    accent: "#ff5f7e",
    glow: "rgba(255, 95, 126, 0.15)",
  },
];

function FeatureCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  return (
    <div
      className="card"
      style={
        {
          "--card-accent": card.accent,
          "--card-glow": card.glow,
          animationDelay: `${0.1 + index * 0.1}s`,
        } as React.CSSProperties
      }
    >
      <span className="card-num">{card.num}</span>
      <div className="card-icon">{card.icon}</div>
      <span className="card-tag">{card.tag}</span>
      <h4>{card.title}</h4>
      <p>{card.desc}</p>
      <div className="card-line" />

      <style>{`
        .card {
          position: relative;
          background: #111318;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.75rem 1.5rem;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, var(--card-glow), transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
        }
        .card:hover {
          transform: translateY(-4px);
          border-color: var(--card-accent);
          box-shadow: 0 0 32px var(--card-glow), 0 8px 24px rgba(0,0,0,0.4);
        }
        .card:hover::before { opacity: 1; }
        .card:hover .card-line { width: 60%; }
        .card:hover .card-icon { box-shadow: 0 0 16px var(--card-glow); }

        .card-num {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          font-family: 'Syne', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          user-select: none;
        }
        .card-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--card-glow);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          transition: box-shadow 0.3s ease;
        }
        .card-tag {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--card-accent);
          margin-bottom: 0.4rem;
        }
        .card h4 {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.6rem;
          letter-spacing: -0.01em;
        }
        .card p {
          font-size: 0.875rem;
          line-height: 1.65;
          color: #6b7280;
          font-weight: 300;
          margin: 0;
        }
        .card-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--card-accent);
          border-radius: 0 0 0 16px;
          transition: width 0.4s ease;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function Modern() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        .modern-wrapper {
          background: #0a0c10;
          min-height: 100vh;
          padding: 2.5rem 1.5rem;
          font-family: 'DM Sans', sans-serif;
          color: #e8eaf0;
          position: relative;
          overflow-x: hidden;
        }
        .modern-wrapper::before {
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
        .modern-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
        }

        /* Header */
        .modern-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .modern-label {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #00d4ff;
          border: 1px solid rgba(0, 212, 255, 0.3);
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          margin-bottom: 1rem;
        }
        .modern-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #9ca3af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }
        .fan-spin {
          display: inline-block;
          animation: spin 4s linear infinite;
          margin-right: 0.4rem;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Grid */
        .modern-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 540px) {
          .modern-grid { grid-template-columns: 1fr; }
        }

        /* Footer */
        .modern-footer {
          margin-top: 2.5rem;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.6s 0.5s ease forwards;
        }
        .modern-footer p {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
          margin: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="modern-wrapper">
        <div className="modern-inner">
          <div className="modern-header">
            <div className="modern-label">Technology Overview</div>
            <h2>
              <span className="fan-spin">🌀</span>
              Modern Electric Fans
            </h2>
          </div>

          <div className="modern-grid">
            {cards.map((card, i) => (
              <FeatureCard key={card.num} card={card} index={i} />
            ))}
          </div>

          <div className="modern-footer">
            <p>Hover over cards to explore features</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modern;