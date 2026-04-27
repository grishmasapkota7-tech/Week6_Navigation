interface HistoryItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

const timeline: HistoryItem[] = [
  {
    year: "3000 BC",
    title: "Hand Fans",
    description:
      "Ancient Egyptians used large hand fans made from palm leaves and feathers to cool royalty and circulate air during ceremonies.",
    icon: "🪭",
    accent: "#ffb830",
  },
  {
    year: "1500s",
    title: "Folding Fans",
    description:
      "Japanese and Chinese artisans perfected the folding fan, which spread across Europe as a symbol of elegance and social status.",
    icon: "🎋",
    accent: "#b8ff57",
  },
  {
    year: "1882",
    title: "Electric Fan Invented",
    description:
      "Schuyler Skaats Wheeler invented the first electric desk fan with two blades, powered by a DC motor — a revolutionary breakthrough.",
    icon: "💡",
    accent: "#00d4ff",
  },
  {
    year: "1902",
    title: "Industrial Fans",
    description:
      "Large industrial fans became common in factories and warehouses, dramatically improving working conditions and air circulation.",
    icon: "🏭",
    accent: "#ff5f7e",
  },
  {
    year: "1950s",
    title: "Household Appliance",
    description:
      "Post-war manufacturing made electric fans affordable for the average household, becoming a staple of home comfort across America.",
    icon: "🏠",
    accent: "#a78bfa",
  },
  {
    year: "2000s",
    title: "Smart Fan Era",
    description:
      "Wi-Fi connectivity, voice control, and AI-powered temperature sensing transformed fans into intelligent home devices.",
    icon: "📱",
    accent: "#34d399",
  },
];

function History() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400&display=swap');

        .history-page {
          background: #0a0c10;
          min-height: 100vh;
          color: #e8eaf0;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
        .history-page::before {
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

        .history-inner {
          position: relative;
          z-index: 1;
          max-width: 780px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 5rem;
        }

        /* Header */
        .history-header {
          margin-bottom: 3.5rem;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .history-eyebrow {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ffb830;
          border: 1px solid rgba(255,184,48,0.3);
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          margin-bottom: 1rem;
        }
        .history-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #ffffff 0%, #9ca3af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.75rem;
        }
        .history-header p {
          font-size: 0.95rem;
          color: #6b7280;
          font-weight: 300;
          line-height: 1.7;
          max-width: 520px;
          margin: 0;
        }

        /* Timeline */
        .timeline {
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 28px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.12), transparent);
        }

        .tl-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }

        /* Dot */
        .tl-dot {
          position: relative;
          flex-shrink: 0;
          width: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 1.5rem;
        }
        .tl-dot-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--tl-accent);
          box-shadow: 0 0 12px var(--tl-accent);
          border: 2px solid #0a0c10;
          flex-shrink: 0;
        }

        /* Card */
        .tl-card {
          flex: 1;
          background: #111318;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .tl-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, var(--tl-glow), transparent 65%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .tl-card:hover {
          border-color: var(--tl-accent);
          box-shadow: 0 0 28px var(--tl-glow), 0 6px 20px rgba(0,0,0,0.4);
          transform: translateX(4px);
        }
        .tl-card:hover::before { opacity: 1; }
        .tl-card:hover .tl-bottom-line { width: 55%; }

        .tl-card-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .tl-icon {
          font-size: 1.4rem;
        }
        .tl-year {
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--tl-accent);
        }
        .tl-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem;
        }
        .tl-desc {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 300;
          line-height: 1.65;
          margin: 0;
        }
        .tl-bottom-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          width: 0;
          background: var(--tl-accent);
          border-radius: 0 2px 0 14px;
          transition: width 0.4s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="history-page">
        <div className="history-inner">
          <div className="history-header">
            <span className="history-eyebrow">A Timeline</span>
            <h2>🕰️ History of Electric Fans</h2>
            <p>
              From ancient palm-leaf fans to AI-powered smart devices — trace
              the remarkable journey of cooling technology through the ages.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, i) => {
              const glow = item.accent
                .replace("#", "")
                .match(/.{2}/g)!
                .map((h) => parseInt(h, 16));
              const glowRgba = `rgba(${glow[0]},${glow[1]},${glow[2]},0.15)`;

              return (
                <div
                  className="tl-item"
                  key={item.year}
                  style={{
                    animationDelay: `${0.1 + i * 0.1}s`,
                    "--tl-accent": item.accent,
                    "--tl-glow": glowRgba,
                  } as React.CSSProperties}
                >
                  <div className="tl-dot">
                    <div className="tl-dot-circle" />
                  </div>
                  <div className="tl-card">
                    <div className="tl-card-top">
                      <span className="tl-icon">{item.icon}</span>
                      <span className="tl-year">{item.year}</span>
                    </div>
                    <h4 className="tl-title">{item.title}</h4>
                    <p className="tl-desc">{item.description}</p>
                    <div className="tl-bottom-line" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default History;