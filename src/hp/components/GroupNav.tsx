import { Link, useLocation } from "react-router-dom";
import Logo from "../../shared/Logo";

const navLinks = [
  { to: "/", label: "Top" },
  { to: "/about", label: "About" },
  { to: "/studio", label: "Studio" },
  { to: "/koumuten", label: "Koumuten" },
  { to: "/reform", label: "Reform" },
  { to: "/fudousan", label: "Fudousan" },
];

export default function GroupNav() {
  const location = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#8B3A3A",
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        <Logo type="group" color="gold" layout="mark" size="sm" />
        <span
          style={{
            color: "#F5EAEA",
            fontSize: "14px",
            fontWeight: 300,
            letterSpacing: "0.25em",
          }}
        >
          KIOKUSO
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
              color: location.pathname === link.to ? "#F5EAEA" : "#D4A0A0",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5EAEA")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                location.pathname === link.to ? "#F5EAEA" : "#D4A0A0")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
