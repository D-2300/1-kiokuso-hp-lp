import { Link } from "react-router-dom";
import Logo from "../../shared/Logo";

interface FooterLink {
  to: string;
  label: string;
  logo?: string;
}

type LogoEntity = "group" | "studio" | "koumuten" | "reform" | "fudousan";

interface EntityFooterProps {
  themeColor: string;
  themeLight: string;
  themeMid: string;
  themeDark: string;
  name: string;
  tagline?: string;
  logoEntity?: LogoEntity;
  links?: FooterLink[];
  showTopButton?: boolean;
}

export default function EntityFooter({
  themeColor,
  themeLight,
  themeMid,
  name,
  tagline,
  logoEntity = "group",
  links = [],
  showTopButton = false,
}: EntityFooterProps) {
  return (
    <footer
      style={{
        backgroundColor: themeColor,
        padding: "64px 32px 40px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "32px" }}>
        <Logo entity={logoEntity} color="gold" layout="horizontal" height={40} />
      </div>

      <p
        style={{
          color: themeLight,
          fontSize: "14px",
          fontWeight: 300,
          letterSpacing: "0.2em",
          marginBottom: "32px",
        }}
      >
        {name}
      </p>

      {tagline && (
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
            letterSpacing: "0.08em",
            lineHeight: 1.8,
            marginBottom: "24px",
          }}
        >
          {tagline}
        </p>
      )}

      {(showTopButton || links.length > 0) && (
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {showTopButton && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: themeLight,
                textTransform: "uppercase",
                padding: 0,
                transition: "color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <img src={`/assets/logos/logo-${logoEntity}-gold.webp`} alt="" style={{ height: "18px", width: "auto", filter: "brightness(10)", opacity: 0.6 }} />
              TOP
            </button>
          )}
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: themeLight,
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {link.logo && (
                <img src={link.logo} alt="" style={{ height: "18px", width: "auto", filter: "brightness(10)", opacity: 0.6 }} />
              )}
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <div style={{ marginBottom: "8px" }}>
        <Link
          to="/privacy"
          style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px", textDecoration: "none" }}
        >
          プライバシーポリシー
        </Link>
      </div>
      <p
        style={{
          color: themeMid,
          fontSize: "13px",
          letterSpacing: "0.05em",
        }}
      >
        © 2026 {name}
      </p>
    </footer>
  );
}
