import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";

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
  links?: NavLink[];
}

export default function EntityNav({
  themeColor,
  themeLight,
  themeBg,
  title,
  logoEntity = "group",
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo entity={logoEntity} color="gold" layout="horizontal" height={36} centered={false} />
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
        <Link
          to="/"
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            transition: "opacity 0.2s",
            paddingLeft: links.length > 0 ? "8px" : "0",
            borderLeft: links.length > 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
        >
          ← Group Top
        </Link>
      </div>
    </nav>
  );
}
