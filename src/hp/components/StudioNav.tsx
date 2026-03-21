import { Link, useLocation } from "react-router-dom";
import Logo from "../../shared/Logo";

const navLinks = [
  { to: "/studio", label: "Top" },
  { to: "/studio/about", label: "About" },
  { to: "/studio/works", label: "Works" },
  { to: "/studio/pricing", label: "Pricing" },
];

export default function StudioNav() {
  const location = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#4A6741",
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
      }}
    >
      <Link to="/studio" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        <Logo type="studio" color="gold" layout="mark" size="sm" />
        <span
          style={{
            color: "#EAF0E8",
            fontSize: "14px",
            fontWeight: 300,
            letterSpacing: "0.25em",
          }}
        >
          STUDIO
        </span>
      </Link>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: location.pathname === link.to ? "#EAF0E8" : "#A8BFA2",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#EAF0E8")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                location.pathname === link.to ? "#EAF0E8" : "#A8BFA2")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
