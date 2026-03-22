import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type LogoEntity = "group" | "studio" | "koumuten" | "reform" | "fudousan";

interface NavLink {
  to: string;
  label: string;
}

interface EntityNavProps {
  themeColor: string;
  themeLight: string;
  themeBg: string;
  title: string;
  logoEntity?: LogoEntity;
  logoTo?: string;
  links?: NavLink[];
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const antonStyle: React.CSSProperties = {
  fontFamily: "'Anton', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function EntityNav({
  themeColor,
  themeLight,
  logoEntity = "group",
  logoTo,
  links = [],
}: EntityNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solidBg = hexToRgba(themeColor, 0.95);
  const navBg = scrolled || menuOpen ? solidBg : "transparent";
  const isScrolledOrMenu = scrolled || menuOpen;

  const linkColor = isScrolledOrMenu ? "#333333" : themeLight;
  const groupColor = isScrolledOrMenu ? "#666666" : "rgba(255,255,255,0.6)";
  const hamColor = isScrolledOrMenu ? "#333333" : "#fff";

  const logoSrc = isScrolledOrMenu
    ? `/assets/logos/logo-${logoEntity}-h-dark.webp`
    : `/assets/logos/logo-${logoEntity}-h-gold.webp`;

  const mobileLinks: NavLink[] = [{ to: "/", label: "← Group Top" }];

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
        {logoTo ? (
          <Link to={logoTo} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src={logoSrc}
              alt={logoEntity}
              style={{ height: "36px", width: "auto", transition: "opacity 0.3s ease" }}
            />
          </Link>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoSrc}
              alt={logoEntity}
              style={{ height: "36px", width: "auto", transition: "opacity 0.3s ease" }}
            />
          </div>
        )}

        {/* PC nav */}
        <div
          style={{ marginLeft: "auto", display: "flex", gap: "32px", alignItems: "center" }}
          className="entity-nav-pc"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ ...antonStyle, color: linkColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = isScrolledOrMenu ? "#111111" : "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
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
              paddingLeft: links.length > 0 ? "8px" : "0",
              borderLeft: links.length > 0
                ? isScrolledOrMenu ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(255,255,255,0.2)"
                : "none",
            }}
          >
            ← Group Top
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="entity-nav-hamburger"
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
          backgroundColor: solidBg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        className="entity-nav-overlay"
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
            color: "#fff",
            fontSize: "28px",
            lineHeight: 1,
            padding: "8px",
          }}
          aria-label="メニューを閉じる"
        >
          ✕
        </button>
        {mobileLinks.map((link) => (
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
        .entity-nav-pc { display: flex; }
        .entity-nav-hamburger { display: none; }
        .entity-nav-overlay { display: flex; }
        @media (max-width: 768px) {
          .entity-nav-pc { display: none !important; }
          .entity-nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .entity-nav-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
