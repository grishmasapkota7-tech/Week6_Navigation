import { Fan } from "../types/Fan";

interface FanCardProps {
  fan: Fan;
  index?: number;
}

function FanCard({ fan, index = 0 }: FanCardProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap');

        .fan-card {
          position: relative;
          background: #111318;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.75rem 1.5rem;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(20px);
          animation: cardFadeUp 0.6s ease forwards;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .fan-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, var(--card-glow), transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
          pointer-events: none;
        }
        .fan-card:hover {
          transform: translateY(-5px);
          border-color: var(--card-accent);
          box-shadow: 0 0 36px var(--card-glow), 0 10px 28px rgba(0,0,0,0.5);
        }
        .fan-card:hover::before { opacity: 1; }
        .fan-card:hover .fc-line { width: 65%; }
        .fan-card:hover .fc-icon { box-shadow: 0 0 18px var(--card-glow); }

        .fc-num {
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
        .fc-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--card-glow);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          transition: box-shadow 0.3s ease;
        }
        .fc-tag {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--card-accent);
          margin-bottom: 0.35rem;
        }
        .fc-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.6rem;
          letter-spacing: -0.01em;
        }
        .fc-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          line-height: 1.65;
          color: #6b7280;
          font-weight: 300;
          margin: 0;
        }
        .fc-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--card-accent);
          border-radius: 0 2px 0 16px;
          transition: width 0.4s ease;
        }

        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="fan-card"
        style={{
          "--card-accent": fan.accent,
          "--card-glow": fan.glow,
          animationDelay: `${0.05 * index}s`,
        } as React.CSSProperties}
      >
        <span className="fc-num">
          {String(fan.id).padStart(2, "0")}
        </span>
        <div className="fc-icon">{fan.icon}</div>
        <span className="fc-tag">{fan.tag}</span>
        <h4 className="fc-title">{fan.name}</h4>
        <p className="fc-desc">{fan.description}</p>
        <div className="fc-line" />
      </div>
    </>
  );
}

export default FanCard;