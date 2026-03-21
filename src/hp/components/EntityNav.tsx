import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";

interface NavLink {
  to: string;
  label: string;
}

interface EntityNavProps {
  themeColor: string;
  themeLight: string;
  themeBg: string;
  title: string;
  links?: NavLink[];
}

export default function EntityNav({
  themeColor,
  themeLight,
  themeBg,
  title,
  links = [],
}: EntityNavProps) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: themeColor,
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Logo size="sm" variant="dark" />
        <span
          style={{
            color: themeBg,
            fontSize: "14px",
            fontWeight: 300,
            letterSpacing: "0.25em",
          }}
        >
          {title}
        </span>
      </div>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: themeLight,
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = themeBg)}
            onMouseLeave={(e) => (e.currentTarget.style.color = themeLight)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
