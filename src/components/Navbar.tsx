import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/history", label: "History" },
    { to: "/modern", label: "Modern" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap');

        .navbar-custom {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 12, 16, 0.9);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .navbar-brand-custom {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: #fff !important;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        .fan-spin {
          display: inline-block;
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .nav-link-custom {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: rgba(255,255,255,0.5) !important;
          padding: 0.4rem 0.9rem !important;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          text-decoration: none;
          letter-spacing: 0.02em;
        }
        .nav-link-custom:hover {
          color: #fff !important;
          background: rgba(255,255,255,0.06);
        }
        .nav-link-custom.active {
          color: #00d4ff !important;
          background: rgba(0, 212, 255, 0.08);
        }
        .navbar-toggler-custom {
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          padding: 0.35rem 0.6rem;
          border-radius: 8px;
          cursor: pointer;
        }
        .navbar-toggler-custom span {
          display: block;
          width: 20px;
          height: 2px;
          background: rgba(255,255,255,0.6);
          margin: 4px 0;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .nav-badge {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #00d4ff;
          border: 1px solid rgba(0,212,255,0.35);
          padding: 0.1rem 0.5rem;
          border-radius: 100px;
          margin-left: 0.5rem;
          vertical-align: middle;
        }
      `}</style>

      <nav className="navbar-custom navbar navbar-expand-md px-4">
        <Link to="/" className="navbar-brand-custom">
          <span className="fan-spin">🌀</span>
          FanWorld
          <span className="nav-badge">v2.0</span>
        </Link>

        <button
          className="navbar-toggler-custom d-md-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-1 py-2 py-md-0">
            {links.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  to={to}
                  className={`nav-link-custom ${pathname === to ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;