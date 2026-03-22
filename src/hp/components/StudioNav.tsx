import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/studio", label: "Top" },
  { to: "/studio/about", label: "About" },
  { to: "/studio/works", label: "Works" },
  { to: "/studio/pricing", label: "Pricing" },
];

const antonStyle: React.CSSProperties = {
  fontFamily: "'Anton', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "color 0.3s, opacity 0.3s",
};

export default function StudioNav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  const navBg = solid ? "rgba(248,245,242,0.95)" : "transparent";
  const linkColor = (active: boolean) =>
    solid
      ? active ? "#1A1A1A" : "#555555"
      : active ? "#ffffff" : "rgba(255,255,255,0.75)";
  const hoverColor = solid ? "#000000" : "#ffffff";
  const groupColor = solid ? "#888888" : "rgba(255,255,255,0.6)";
  const hamColor = solid ? "#1A1A1A" : "#ffffff";
  const logoSrc = solid
    ? "/assets/logos/logo-studio-h-dark.webp"
    : "/assets/logos/logo-studio-h-gold.webp";
  const borderColor = solid ? "1px solid rgba(0,0,0,0.12)" : "1px solid rgba(255,255,255,0.2)";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: navBg,
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <Link to="/studio" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={logoSrc}
            alt="記憶荘 STUDIO"
            style={{ height: "36px", width: "auto", transition: "opacity 0.3s ease" }}
          />
        </Link>

        {/* PC nav */}
        <div
          style={{ marginLeft: "auto", display: "flex", gap: "32px", alignItems: "center" }}
          className="studio-nav-pc"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ ...antonStyle, color: linkColor(location.pathname === link.to) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor(location.pathname === link.to))}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            style={{
              ...antonStyle,
              color: groupColor,
              fontSize: "12px",
              marginLeft: "8px",
              paddingLeft: "16px",
              borderLeft: borderColor,
            }}
          >
            ← Group
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="studio-nav-hamburger"
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="メニューを開く"
        >
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: hamColor, borderRadius: "1px", transition: "background-color 0.3s" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: hamColor, borderRadius: "1px", transition: "background-color 0.3s" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: hamColor, borderRadius: "1px", transition: "background-color 0.3s" }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 300,
          backgroundColor: "rgba(248,245,242,0.98)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        className="studio-nav-overlay"
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1A1A1A",
            fontSize: "28px",
            lineHeight: 1,
            padding: "8px",
          }}
          aria-label="メニューを閉じる"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              ...antonStyle,
              color: "#1A1A1A",
              fontSize: "18px",
              letterSpacing: "0.15em",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/"
          style={{
            ...antonStyle,
            color: "#888888",
            fontSize: "14px",
            letterSpacing: "0.15em",
          }}
        >
          ← Group
        </Link>
      </div>

      <style>{`
        .studio-nav-pc { display: flex; }
        .studio-nav-hamburger { display: none; }
        .studio-nav-overlay { display: flex; }
        @media (max-width: 768px) {
          .studio-nav-pc { display: none !important; }
          .studio-nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .studio-nav-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
