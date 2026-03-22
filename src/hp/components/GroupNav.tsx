import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Top" },
  { to: "/about", label: "About" },
  { to: "/studio", label: "Studio" },
  { to: "/koumuten", label: "Build" },
  { to: "/reform", label: "Reform" },
  { to: "/fudousan", label: "Estate" },
];

const SOLID_BG = "rgba(139,58,58,0.95)";

const antonStyle: React.CSSProperties = {
  fontFamily: "'Anton', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function GroupNav() {
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

  const navBg = scrolled || menuOpen ? SOLID_BG : "transparent";
  const isScrolledOrMenu = scrolled || menuOpen;

  const linkColor = (active: boolean) =>
    isScrolledOrMenu
      ? active ? "#111111" : "#333333"
      : active ? "#F5EAEA" : "#D4A0A0";

  const hamColor = isScrolledOrMenu ? "#333333" : "#F5EAEA";

  const logoSrc = isScrolledOrMenu
    ? "/assets/logos/logo-group-h-dark.webp"
    : "/assets/logos/logo-group-h-gold.webp";

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
          transition: "background-color 0.3s ease",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={logoSrc}
            alt="記憶荘グループ"
            style={{ height: "36px", width: "auto", transition: "opacity 0.3s ease" }}
          />
        </Link>

        {/* PC nav */}
        <div
          style={{ marginLeft: "auto", display: "flex", gap: "32px", alignItems: "center" }}
          className="group-nav-pc"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ ...antonStyle, color: linkColor(location.pathname === link.to) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = isScrolledOrMenu ? "#111111" : "#F5EAEA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor(location.pathname === link.to))}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="group-nav-hamburger"
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
          backgroundColor: SOLID_BG,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        className="group-nav-overlay"
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
            color: "#F5EAEA",
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
              color: "#fff",
              fontSize: "18px",
              letterSpacing: "0.15em",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style>{`
        .group-nav-pc { display: flex; }
        .group-nav-hamburger { display: none; }
        .group-nav-overlay { display: flex; }
        @media (max-width: 768px) {
          .group-nav-pc { display: none !important; }
          .group-nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .group-nav-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
